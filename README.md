# MUI Snackbar Provider

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A simple and reusable way to display snackbars using [Material-UI (v5)](https://mui.com) with React Context and hooks.

## Installation

````shell
npm install mui-snackbar-provider
```

Or with yarn:

```bash
yarn add mui-snackbar-provider
````

## Usage

Wrap your application (or router) with the SnackbarProvider and include the PositionedSnackbar component once at the root level.

```js
import {
  SnackbarProvider,
  PositionedSnackbar,
  useSnackbar,
} from "mui-snackbar-provider";

function App() {
  return (
    <SnackbarProvider>
      <YourApp />
      <PositionedSnackbar />
    </SnackbarProvider>
  );
}
```

Then, inside any component:

```js
import { useSnackbar } from "mui-snackbar-provider";

const MyComponent = () => {
  const { showSnackbar } = useSnackbar();

  const handleClick = () => {
    showSnackbar({
      message: "Saved successfully!",
      type: "success", // can be 'success', 'error', 'info', or 'warning'
    });
  };

  return <button onClick={handleClick}>Show Snackbar</button>;
};
```

## Snackbar Variants

The snackbar uses the <Alert /> component from MUI to support different message severities:

"success"
"error"
"info"
"warning"
These map directly to the severity prop in MUI's <Alert>.

## Motivation

Snackbars are best triggered by user interaction or async events (like API calls). This package makes it easy to:

Trigger snackbars from anywhere in your component tree
Display consistent styling using Material-UI's Alert system
Avoid repetitive boilerplate across projects

## Example

```js
const Example = () => {
  const { showSnackbar } = useSnackbar();

  const handleSave = async () => {
    try {
      await saveData();
      showSnackbar({ message: "Data saved!", type: "success" });
    } catch {
      showSnackbar({ message: "Failed to save data.", type: "error" });
    }
  };

  return <button onClick={handleSave}>Save</button>;
};
```

## Liscense

MIT @ Som Ramnani
