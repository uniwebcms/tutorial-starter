# Tutorial Website for Uniweb Modules

A tutorial website built on Docusaurus.

## Getting Started

The `tutorial` website is normally placed within a repository that contains
one or more Uniweb modules.

### Prerequisites

- Node.js (version 16.14 or higher)
- Yarn Package Manager

### Project Structure

The `tutorial` website is normally placed within a repository that contains
one or more Uniweb modules. The production build of the website creates a
static site at `dist/tutorial`.

The project structure look like this:

```lua
dist/...
src/...
tutorial/
    ├── README.md
    ├── babel.config.js
    ├── docs
    │   └── sample-doc.mdx
    ├── docusaurus.config.js
    ├── package.json
    ├── scripts
    │   ├── checkUpdate.js
    │   └── prebuild.js
    ├── sidebars.js
    ├── src
    │   ├── components
    │   │   └── index.js
    │   ├── css
    │   │   └── custom.css
    │   └── pages
    │       └── index.mdx
    └── static
        ├── img
        │   ├── favicon.png
        │   ├── sample.png
        │   ├── logo.svg
        │   └── logo_light.svg
        └── schemas
            └── sample.json
```
- The `docs` directory contains the documentation files for your tutorial website.
- The `src` directory contains the component, css file and pages.
- The `static` directory contains the static assets files such as image and json files.
- The `docusaurus.config.js` file is the configuration file for Docusaurus.
- The `sidebar.js` file is the configuration file for website sidebar.

### Local Development

To install and start a local development server and preview your tutorial website, run the following commands:

```bash
yarn
yarn start
```

#### Build and serve locally for testing

```bash
yarn run build:dev
yarn run serve:dev
```

The built website will be available in the `build` under `tutorial` directory.

This will start the development server, and you can view the website at `http://localhost:3000`.

### Building for Production

To build the website for production, you have the following two options:

#### Build and locally and commit manually

```bash
yarn run build:prod
```

The built website will be available in the `dist` under the project root directory, you can them manually commit it.

#### Build using GitHub Actions workflow

```bash
yarn run build:gh
```

This script should be used in a workflow executed by GitHub Actions to provide the necessary environment variables. The built website will be available in the `dist` directory under the project's root. Once the build artifact is uploaded to GitHub Pages, the website can be visited via the GitHub Pages URL.

