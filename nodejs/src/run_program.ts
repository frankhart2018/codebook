import * as child from "child_process";
import * as fs from "fs";

const runPythonProgram = (installedConvertor: string, code: string): string => {
    fs.writeFileSync("tmp.py", code);
    const output: string = child.execSync(`${installedConvertor} tmp.py`).toString();
    child.execSync("rm tmp.py")

    return output;
}

const runProgram = (language: string, installedConvertor: string, code: string) => {
    switch (language) {
        case "python":
            return runPythonProgram(installedConvertor, code);
        default:
            return "";
    }
}

export default runProgram;