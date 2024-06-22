# React Admin Dashboard using Syncfusion

Celebal Week 3 Assignment

## Demo images ->

## Sections that can be improved further:

1. Better UI.
2. By adding a backend we can make it a full-stack application.

## Getting Started with Cloning the Repo

1. Download the zip file.
1. Open it in your VS code.

## Go the project directory

As multiple projects are in this repo, you have to go to the main directory for that project. (If two folders of the name Front_End_Projects-main are downloaded then first write in the terminal `cd Front_End_Projects-main` and go to the inner folder then write ->

### 1. `cd Admin-Dashboard`

### 2. `cd admin-dashboard`

## In case tailwind css is not installed then install it for React [https://tailwindcss.com/docs/guides/create-react-app]

In the terminal paste this ->

1. `npm install -D tailwindcss`
2. `npx tailwindcss init`

Then go to the tailwind.config.js file and make the changes ->

```
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
```

Now go to the index.css file and update it with this ->

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
