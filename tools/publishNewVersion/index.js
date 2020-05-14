const fs = require('fs');
const packageJson = require('../../package');
const { increaseVersionNumber, getLogger } = require('@meenjs/utils');
const currentVersion = packageJson.version;
const newVersion = increaseVersionNumber(currentVersion);
const logger = getLogger(true);

const { execSync } = require('child_process');

(() => {
    logger.info(`Current version: "${currentVersion}" - new version: "${newVersion}"`);

    logger.info(`Update version: "${newVersion}" to "package.json"`);
    packageJson.version = newVersion;
    fs.writeFileSync('./package.json', JSON.stringify(packageJson, ' ', 4), 'utf-8');

    logger.info(`Build source-code`);
    execSync(`npm run build`);

    logger.info(`Push to github with message "v${newVersion}"`);
    execSync(`git add .`);
    execSync(`git commit -m "v${newVersion}"`);
    execSync(`git push origin master`);

    logger.info(`Create new release with message "Release of version ${newVersion}"`);
    execSync(`git tag -a v${newVersion} -m "Release of v${newVersion}"`);
    execSync('git push --tags');

    logger.info(`Publish version "${newVersion}" to "https://www.npmjs.com/"`);
    execSync('npm publish');

    logger.info(`"${newVersion}" is published!`);
})();
