# Introduction to React

## 1. What is React?

- React is a JavaScript library for building dynamic and interactive user interfaces.
- It was developed at Facebook in 2011.
- It is one of the most widely used JavaScript libraries for front-end development.
- It is used to create Single Page Applications (SPAs), where the page does not reload.

## 2. Working of DOM (Document Object Model)

- The browser takes HTML and creates the DOM.
- JavaScript helps us modify the DOM based on user actions or events.
- In large applications, working directly with the DOM becomes complicated.

## 3. Problems with JavaScript

- React has a simpler mental model.
- JavaScript can be cumbersome.
- JavaScript is error-prone.
- JavaScript is hard to maintain.
- JavaScript itself is not the problem; manual DOM manipulation is.

## 4. Working of React

- You do not need to worry about querying and updating DOM elements.
- React helps you build pages with small and reusable components.
- React takes care of creating and updating DOM elements.
- It saves time because a lot of the work is already handled for you.

## 5. JS vs React

| JavaScript                                                   | React                                                                              |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| Imperative: you define the steps to reach the desired state. | Declarative: you define the target UI state and React figures out how to reach it. |

## 6. Introduction to Components

- Components help us write reusable, modular and better organized code.
- A React application is a tree of components, with the "App component" as the root that brings everything together.

---

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
