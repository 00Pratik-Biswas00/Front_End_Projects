# React Admin Dashboard using Syncfusion

Celebal Week 3 Assignment

## Demo images ->

![Screenshot 2024-06-22 115350](https://github.com/00Pratik-Biswas00/Front_End_Projects/assets/114896796/e35fcbf6-3a54-426b-a92c-c118af8b55c9)
![Screenshot 2024-06-22 115328](https://github.com/00Pratik-Biswas00/Front_End_Projects/assets/114896796/2b08dd3d-2266-4787-9913-a195f5ba8344)
![Screenshot 2024-06-22 115250](https://github.com/00Pratik-Biswas00/Front_End_Projects/assets/114896796/2b62423e-1f7c-4ad9-941d-e5ce18e73eb8)
![Screenshot 2024-06-22 115113](https://github.com/00Pratik-Biswas00/Front_End_Projects/assets/114896796/1b6bea30-9657-417c-aba4-82b71ec95c73)


## Sections that can be improved further:

1. Better UI.
2. Using APIs with full songs, charts, artist lists, genres, etc.

## Getting Started with Cloning the Repo

1. Download the zip file.
1. Open it in your VS code.

## Go the project directory

As multiple projects are in this repo, you have to go to the main directory for that project. (If two folders of the name Front_End_Projects-main are downloaded then first write in the terminal `cd Front_End_Projects-main` and go to the inner folder then write ->

### 1. `cd Spotify-Clone-Demo`

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

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
