# NPM and NPX 

##### npm (node package manager) is the dependency/package manager you get out of the box when you install Node.js. It provides a way for developers to install packages both globally and locally.

##### Sometimes you might want to take a look at a specific package and try out some commands. But you cannot do that without installing the dependencies in your local node_modules folder.That’s where npx comes in.

### NPM
First and foremost, it is an online repository for the publishing of open-source Node.js projects.

Second, it is a CLI tool that aids you install those packages and manage their versions and dependencies. There are hundreds of thousands of Node.js libraries and applications on npm and many more are added every day.

npm by itself doesn’t run any packages. If you want to run a package using npm, you must specify that package in your package.json file.

When executables are installed via npm packages, npm creates links to them:

1. local installs have links created at the ./node_modules/.bin/ directory
2. global installs have links created from the global bin/ directory (for example: /usr/local/bin on Linux or at %AppData%/npm on Windows)
<br>
<br>
<br>
<br>

### NPX
npx is also a CLI tool whose purpose is to make it easy to install and manage dependencies hosted in the npm registry.

It’s now very easy to run any sort of Node.js based executable that you would normally install via npm.
<br>
<br>
<br>

# create-react-app vs vite

## Create React App:
- Create React App is built on Webpack and Babel and it is a popular tool that enables developers to quickly set up a React project. 
- It is an officially supported tool by the React team, making it a reliable choice. It creates a basic React application with all the necessary configuration files, dependencies, and scripts. 
- The tool provides a pre-configured environment that abstracts away much of the configuration that developers would typically have to handle manually. 
- This means that the developer can focus on writing code rather than configuration files. It is especially useful for beginners to get started.
<br>
<br>

**npx create-react-app my-app**

## Vite:
- Vite is a newer build tool that has gained popularity in recent years. 
- It was created to address the limitations of existing build tools, particularly in the development phase. 
- Vite is a build tool that is optimized for speed. It leverages the latest browser technologies, such as ES modules and native browser imports, to provide fast build times.

- Vite is particularly useful for small to medium-sized projects that do not require complex configurations. 
- It is built on top of the Rollup bundler, which is known for its fast build times. 
- Vite also provides a development server that is optimized for performance. 
- The server leverages HTTP/2 server push, which enables the server to send multiple responses for a single client request.
<br>
<br>
<br>

**npm create vite@latest**

[Difference between create-react-app vs vite](https://dev.to/musabdev/create-react-app-vs-vite-choosing-the-right-build-tool-for-your-project-3ni1)

