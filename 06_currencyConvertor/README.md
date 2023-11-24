# Currency Convertor
## Create the Vite App

```
npm create vite@latest my-project -- --template react
cd my-project
```
## To run the App
```
npm run dev
```

## Add tailwind css

```node
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```json
/** @type {import('tailwindcss').Config} */
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

add bellow on top of index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## API link
```js
let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

```