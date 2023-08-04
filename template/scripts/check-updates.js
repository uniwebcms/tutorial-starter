#!/usr/bin/env node

const chalk = require('chalk');
const { execSync } = require('child_process');
const packageJson = require('../package.json');

function checkForUpdates() {
    console.log('Check for updates...');

    try {
        // Get path to the version.yaml file
        const currentVersion = packageJson.dependencies['@uniwebcms/tutorial-starter-utils'];

        if (!currentVersion) {
            throw new Error('Unable to find current version.');
        }

        // Fetch the latest version from npm
        const latestVersion = execSync('npm view @uniwebcms/tutorial-starter-utils version').toString().trim();

        // Compare versions
        if (currentVersion === latestVersion) {
            console.log("You're up to date!");
        } else {
            console.log(chalk.cyan.bgBlack('notice'));
            console.log(chalk.cyan.bgBlack('notice'), 'An update is available!', chalk.red(doc.version), '->', chalk.green(latestVersion));
            console.log(chalk.cyan.bgBlack('notice'), 'Change the version of', chalk.white.bgBlack('@uniwebcms/tutorial-starter-utils'), 'in', chalk.cyan('package.json'), 'to', chalk.green(latestVersion), 'to update.');
            console.log(chalk.cyan.bgBlack('notice'));
        }
    } catch (err) {
        console.error('Error checking for updates:', err.message);
    }
}

checkForUpdates();
