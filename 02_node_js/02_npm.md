
<br>
<br>

# `#01 Introduction to NPM: `

- NPM is the Stanard package manager for Node.js
- As of sep, 2022 it has around 2.2M packages listed in NPM registry.
- NPM is a way of download and manage dependencies for both frontend and backend applications using JavaScript.
- Yarn and pnpm are teh alternatives to NPM cli.

<br>
<br>

# `#02 NPM Commands:`
- npm init
- npm install
- npm install <package_name> [-g, --save-dev,--no-save,--save-optional,--no-optional]
- npm install <package_name>@<version>
- npm update
- npm update <package_name>
- npm run <task-name>
- npm list
- npm view <package_name> version


<br>
<br>

# `#03 Draw cow with NPM:`

```bash
npm install cowsay 
```

```bash
npx cowsay I am learning nodeJS
```

<br>
<br>

# `#04 Semantic Versioning`


Semantic Versioning:

```bash
npm install express
```
```js
package.json{
    "dependencies":{
        "express:" ^4.18.1
    }
}
```
- What the sign "^ Carret symbol" means? 

"express": ^X.Y.Z
X: The first digit is major version <br>
Y: The second digit is minor version <br>
Z: The third digit is patch version <br>

<br>
"express":^4.18.1
"^": If we do, npm update then minor or patch version can be updated.
"~": If we do, npm update then patch version can be updated.

<br>


<br>
<br>

# `#05 Create our own package: `

- module.exports = (object)
- exports.object = {}
- exports.object = Single Object

