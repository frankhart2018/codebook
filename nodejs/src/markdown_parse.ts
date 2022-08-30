import * as fs from "fs";
import { languageConvertors } from "./languages";
import * as path from "path";

interface Meta {
  locations: number[][];
  languages: string[];
}

const getCodeBlockLocations = (fileContentLines: string[]): Meta => {
  let startCodeBlock = false;
  const codeLocations: number[][] = [];
  let currentCodeLocation: number[] = [];
  const codeLanguages: string[] = [];
  fileContentLines.forEach((contentLine, i) => {
    if (contentLine.startsWith("```")) {
      if (!startCodeBlock) {
        const programmingLanguage = contentLine.split("```")[1].trim();
        if (programmingLanguage.length > 0) {
          if (languageConvertors.hasOwnProperty(programmingLanguage)) {
            startCodeBlock = true;
            currentCodeLocation.push(i);
            codeLanguages.push(programmingLanguage);
          } else {
            throw new Error(
              `Unsupported programming language: ${programmingLanguage}`
            );
          }
        } else {
          throw new Error(
            `Programming language name is required in order to start a code block`
          );
        }
      } else {
        const codeBlockEnd: string = contentLine.split("```")[1].trim();

        if (codeBlockEnd.length > 0) {
          throw new Error(
            "Cannot add text after end of code block, please move it to next line"
          );
        } else {
          startCodeBlock = false;
          currentCodeLocation.push(i);
          codeLocations.push(currentCodeLocation);
          currentCodeLocation = [];
        }
      }
    }
  });

  return {
    locations: codeLocations,
    languages: codeLanguages,
  };
};

const extractPrograms = (filePath: string): string => {
  const dirPath = path.dirname(filePath);
  const basePath = path.basename(filePath);

  const fileContents: string = fs.readFileSync(filePath).toString();
  const fileContentLines: string[] = fileContents.split("\n");
  const codeMeta = getCodeBlockLocations(fileContentLines);
  const codeLocations = codeMeta.locations;
  const codeLanguages = codeMeta.languages;
  const fileNameSplit = basePath.split(".");
  const fileName = fileNameSplit.slice(0, fileNameSplit.length - 1).join(".");

  const startToEndLineMapping: { [key: number]: number } = {};
  codeLocations.forEach((codeLocation, i) => {
    const [start, end] = codeLocation;
    const codeLines = fileContentLines.slice(start + 1, end);
    const code = codeLines.join("\n");

    const currentLanguage = codeLanguages[i];
    const codeFileName = path.join(dirPath, `${fileName}-${i + 1}.${
      languageConvertors[currentLanguage].extension
    }`);

    fs.writeFileSync(codeFileName, code);

    startToEndLineMapping[start] = end;
  });

  const finalMarkdownLines: string[] = [];
  let skipLine = false;
  let currentEndLocation = -1;
  let currentCodeIndex = 0;
  for (let i = 0; i < fileContentLines.length; i++) {
    if (startToEndLineMapping.hasOwnProperty(i)) {
      skipLine = true;
      currentEndLocation = startToEndLineMapping[i];

      const currentLanguage = codeLanguages[currentCodeIndex];
      const codeFileName = path.join(dirPath, `${fileName}-${currentCodeIndex + 1}.${
        languageConvertors[currentLanguage].extension
      }`);
      finalMarkdownLines.push(`~~>>>${codeFileName}<<<~~`);
      currentCodeIndex++;

      continue;
    } else if (currentEndLocation === i) {
      skipLine = false;
      continue;
    } else if (skipLine) {
      continue;
    }

    finalMarkdownLines.push(fileContentLines[i]);
  }
  const finalMarkdown = finalMarkdownLines.join("\n");

  return finalMarkdown;
};

export default extractPrograms;