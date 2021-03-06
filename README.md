# React component library template

Simple template project for create ReactJS component as npm library

## Usage

### Install and setup

- Clone source in to custom `package name` directory:

```console
git clone https://github.com/kolserdav/react-lib.git [package-name]
```

- Change dir to package-name:

```console
cd package-name
```

- Change git remote origin:
- - Remove old:

```console
git remote remove origin
```

- - Add new:

```console
git remote add origin https://github.com/user/package-name.git
```

- Install dependencies:

```console
npm install
```

- Set up package name and version on package.json

```json
{
  "name": "package-name",
  "version": "0.0.1"
}
```

- [OPTIONAL] Install recomended extension on [.vscode/extensions.json](.vscode/extensions.json)

### Run on development

**Files of your future component library placed on `src/package` directory**  
Run with live reload after change files:

```console
npm run dev
```

### Build before publish

**Output path for compiled files is `src/dist`**
Compile with clean extra files:

```console
npm run build
```

### Publish to npmjs.com

_Before each publication, you need to do `git push` with the new version in `package.json`_  
First publication:

```console
npm publish --access=public
```

Other publication:

```console
npm publish
```

### Test with real world project

Can use `example` application

- Change directory

```console
cd examle
```

By first usage change import name of package to custom in file [example/src/App.js](example/src/App.js)

- Install your package:

```console
npm insttall [package-name]
```

- Or if not first test, change version of `package-name` in dependencies block of [example/package.json](example/package.json) and run:

```console
npm install
```

- Run example:

```console
npm run start
```

It's all. The rest you will figure out for yourself.
