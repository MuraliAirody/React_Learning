# Apps, added tailwind css and about props
created project using 
```node
   npm create vite@latest
```

to run the App use

```node
   npm run dev
```
# [TailWind](https://tailwindcss.com/)

### **Note: [Check, how to install tailwind in react app created through vite](https://tailwindcss.com/docs/guides/vite)**

Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

Add the paths to all of your template files in your tailwind.config.js file.

```json
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
