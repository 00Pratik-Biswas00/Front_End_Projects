# Create a React form without using any third-party libraries

As we are instructed not to use any third-party libraries, the extra dependency that I used is react-router-dom, and for styling, I used tailwind CSS.

## Demo video -> 



https://github.com/00Pratik-Biswas00/Front_End_Projects/assets/114896796/476f8c0c-e7d0-4a59-85c8-1b2bcf7ff68e


## Getting Started with Cloning the Repo

1. Download the zip file.
1. Open it in your VS code. 

## Go the project directory 

As multiple projects are in this repo, you have to go to the main directory for that project. (If two folders of the name Front_End_Projects-main are downloaded then first write in the terminal `cd Front_End_Projects-main` and go to the inner folder then  write ->

### 1. `cd To-Do-List`

### 2. `cd to-do-app`

## In case tailwind CSS is not installed then install it for React [https://tailwindcss.com/docs/guides/create-react-app]

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

Run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

