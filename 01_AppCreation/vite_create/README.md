# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Naming convention we need to follow

1. capitalize first letter of each word of the component
2.  create the component file with the same name as component inside it, follow the cases also eg: component name is FirstComponent file name should be FirstComponent.jsx

[Read More](https://www.linkedin.com/pulse/react-js-naming-convention-kristiyan-velkov)
<br>
[Another article from medium](https://medium.com/@smail.oubaalla/how-to-name-your-react-component-conventions-b8daf3abc574)

**Note: we can't return multiple elements using components, thats why we should wrap it in 'div' or we should use jsx fragment '<></>' to return the multiple element**


**Note: if the component returning the html, the file extension should be jsx. if its having only js code we can main it in .js file**