#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

const projectName = process.argv[2] || 'tutorial';

const main = async () => {
    const projectDir = path.join(process.cwd(), projectName);

    try {
        // Check if the destination directory already exists
        if (fs.existsSync(projectDir)) {
            throw new Error(`Directory "${projectName}" already exists.`);
        }

        // Get the template directory path from your npm module
        const templateDir = path.join(__dirname, 'template');

        // Copy the template directory to the destination directory
        await fs.copy(templateDir, projectDir);

        console.log('Project initialized successfully.');
    } catch (error) {
        console.error('Error initializing project:', error.message);
        process.exit(1);
    }
};

main();
