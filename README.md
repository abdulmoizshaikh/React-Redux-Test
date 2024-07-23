# Useful resources

## REST API endpoints for users

Use the REST API to get public and private information about authenticated users.

https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-contextual-information-for-a-user

## Published Project:

https://abdulmoizshaikh.github.io/React-Redux-Test/

## How To deploy React Redux app to Github Pages:

Deploying a Create React App project that uses Redux to GitHub Pages involves a few steps. Here’s a step-by-step guide to help you through the process:

### Step 1: Create a GitHub Repository

Assuming you have a GitHub account, create a new repository to host your project. You can initialize it with a README file, but do not initialize with a .gitignore or license unless you know you need them.

### Step 2: Install `gh-pages` Package

In your project directory, install the `gh-pages` package as a development dependency. `gh-pages` is a handy package that simplifies deploying to GitHub Pages.

```bash
npm install gh-pages --save-dev
```

### Step 3: Modify `package.json`

In your `package.json` file, add the following fields at the top level:

```json
"homepage": "https://<username>.github.io/<repository-name>",
```

Replace `<username>` with your GitHub username and `<repository-name>` with the name of your GitHub repository.

Next, under `scripts`, add two new scripts:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### Step 4: Set Up Your Redux Store (if not already done)

Make sure your Redux store is properly configured in your React application. This typically involves creating a store, combining reducers, setting up middleware (like `redux-thunk` if needed), and connecting it to your application.

### Step 5: Build Your React App

Before deploying, build your React app using the following command:

```bash
npm run build
```

This command compiles your React app into static files inside the `build` folder.

### Step 6: Deploy to GitHub Pages

Once the build process is complete, deploy your app to GitHub Pages using the `deploy` script you added:

```bash
npm run deploy
```

### Step 7: Configure GitHub Repository Settings

Go to your GitHub repository's settings tab. Scroll down to the GitHub Pages section and choose `gh-pages` branch as the source.

### Step 8: Access Your Deployed App

Once GitHub Pages finishes deploying (which might take a few moments), you can access your deployed React app at `https://<username>.github.io/<repository-name>`.

### Additional Notes

- **Custom Domain:** If you have a custom domain, you'll need to set up a CNAME file in the `public` folder before deploying.
- **Routing:** If your app uses React Router, you may need to configure it to work correctly with GitHub Pages. This typically involves setting the `basename` property in your `Router` component.
- **Security:** Ensure that sensitive information (like API keys) is not exposed in your source code or repository. Use environment variables or secure ways to manage such information.

By following these steps, you should be able to successfully deploy your Create React App with Redux to GitHub Pages.
