import * as child from "child_process";
import * as fs from "fs";

const runCompiledLanguageProgram = (installedConvertor: string, code: string, extension: string): string => {
    fs.writeFileSync(`tmp.${extension}`, code);
    child.execSync(`${installedConvertor} -o tmpout tmp.${extension}`);
    const output: string = child.execSync("./tmpout").toString();
    child.execSync("rm tmpout");
    child.execSync(`rm tmp.${extension}`)
    return output;
}

const runInterpretedLanguageProgram = (installedConvertor: string, code: string, extension: string): string => {
    fs.writeFileSync(`tmp.${extension}`, code);
    const output: string = child.execSync(`${installedConvertor} tmp.${extension}`).toString();
    child.execSync(`rm tmp.${extension}`)
    return output;
}

const runProgram = (language: string, installedConvertor: string, code: string) => {
    let output: string = "";
    switch (language) {
        case "c":
            return runCompiledLanguageProgram(installedConvertor, code, "c");
        case "cpp":
            return runCompiledLanguageProgram(installedConvertor, code, "cpp");
        case "python":
            return runInterpretedLanguageProgram(installedConvertor, code, "py");
        case "java":
            return runInterpretedLanguageProgram(installedConvertor, code, "java");
        case "rust":
            return runCompiledLanguageProgram(installedConvertor, code, "rs");
        case "go":
            return runCompiledLanguageProgram(`${installedConvertor} build`, code, "go");
        case "javascript":
            return runInterpretedLanguageProgram(installedConvertor, code, "js");
        default:
            output = "";
    }

    return output;
}

export default runProgram;