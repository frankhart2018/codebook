import * as child from 'child_process';

const commandExistsUnix = (command: string): boolean => {
    try {
        child.execSync(`command -v ${command}`).toString();
        return true;
    } catch(e: any) {
        return false;
    }

}

const commandExistsWindows = (command: string): boolean => {
    try {
        const stdout: Buffer = child.execSync(`where ${command}`, {stdio: []});
        return !!stdout;
    } catch (e: any) {
        return false;
    }
}

const commandExists = (command: string): boolean => {
    const isUsingWindows = process.platform === 'win32';
    if (isUsingWindows) {
        return commandExistsWindows(command);
    }

    return commandExistsUnix(command);
}

export default commandExists;