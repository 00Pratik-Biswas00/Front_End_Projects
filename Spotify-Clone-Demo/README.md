# React Spotify clone

Celebal Week 5 Assignment

## Demo images ->


![Screenshot 2024-07-04 235453](https://github.com/00Pratik-Biswas00/Front_End_Projects/assets/114896796/2cd350c2-b93f-4e53-b6c7-e0d6cb60314e)

![Screenshot 2024-07-04 235608](https://github.com/00Pratik-Biswas00/Front_End_Projects/assets/114896796/e9e3314e-855f-46fe-a33a-c2025266c9fa)


## Sections that can be improved further:

1. Better UI.
2. By adding a backend we can make it a full-stack application.

## Getting Started with Cloning the Repo

1. Download the zip file.
1. Open it in your VS code.

## Go the project directory

As multiple projects are in this repo, you have to go to the main directory for that project. (If two folders of the name Front_End_Projects-main are downloaded then first write in the terminal `cd Front_End_Projects-main` and go to the inner folder then write ->

### 1. `cd Spotify-Clone-Demo`

### 2. To install the dependencies: `npm i`

### 3. To run the website `npm start`

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

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

