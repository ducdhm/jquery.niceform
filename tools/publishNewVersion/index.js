const fs = require('fs');
const packageJson = require('../../package');
const currentVersion = packageJson.version;
let newVersion = ((+currentVersion.replace(/\./g, '') + 1) + '').replace(/^(\d+)(\d)(\d)$/g, '$1.$2.$3');
if (newVersion.length < 2) {
    newVersion = `0.0.${newVersion}`;
} else if (newVersion.length < 3) {
    newVersion = `0.${newVersion}`;
}

const { execSync} = require('child_process');

(() => {
    console.log(`-> Current version: "${currentVersion}" - new version: "${newVersion}"`);

    console.log(`-> Update version: "${newVersion}" to "package.json"`);
    packageJson.version = newVersion;
    fs.writeFileSync('./package.json', JSON.stringify(packageJson, ' ', 4), 'utf-8');

    console.log(`-> Build source-code`);
    execSync(`npm run build`);

    console.log(`-> Push to github with message "v${newVersion}"`);
    execSync(`git add .`);
    execSync(`git commit -m "v${newVersion}"`);
    execSync(`git push origin master`);

    console.log(`-> Create new release with message "Release of version ${newVersion}"`);
    execSync(`git tag -a v${newVersion} -m "Release of v${newVersion}"`);
    execSync('git push --tags');

    console.log(`-> Publish version "${newVersion}" to "https://www.npmjs.com/"`);
    execSync('npm publish');

    console.log(`-> "${newVersion}" is published!`);
})();
