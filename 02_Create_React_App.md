# Create a React App

## 1. What is IDE?

- IDE stands for Integrated Development Environment.
- It is a software suite that consolidates the basic tools required for software development.
- It is the central hub for coding, finding problems and testing.
- It is designed to improve developer efficiency.

## 2. Need of IDE

- Streamlines development.
- Increases productivity.
- Simplifies complex tasks.
- Common IDE features include code autocomplete, syntax highlighting, version control and error checking.

## 3. Install Latest Node

- Search for and download Node.js.

## 4. Installation & Setup

- Search for VS Code.
- Keep your software up to date.

## 5. VS Code Extensions and Settings

- Live Server or Live Preview.
- Prettier for format on save.
- Enable line wrap.
- Set tab size from 4 to 2.

## 6. Create a React App

- The official tool is CRA (Create React App).
- Vite is a modern tool for creating React projects.
- Vite produces a quick and small bundle size.
- Use `npm run dev` to launch the Vite development server.
- Use `npm start` for CRA.

### Steps to create

```bash
npm create vite@latest
```

- Project name: `first-react-app`
- Select a framework: `React`
- Select a variant: `JavaScript`

## 7. Project Structure

- `node_modules/` has all the installed node packages.
- `public/` contains static files that do not change.
- `src/` is the main folder for the React code.
  - `components/`: Reusable parts of the UI, like buttons or headers.
  - `assets/`: Images, fonts and other static files.
  - `styles/`: CSS or stylesheets.
- `package.json` contains information about the project, such as name, version and dependencies on other React packages.
- `vite.config.js` contains the Vite configuration.