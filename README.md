# Beautiflow Partner - Social Power Pack Landing Page

This is a single-page web application for a Permanent Makeup (PMU) Artist’s “Client-Magnifier Social Media Package”. It's built with React and Tailwind CSS, configured to run directly in the browser without a build step, thanks to Babel Standalone.

## Features

-   Modern, responsive landing page detailing the offer.
-   Multi-step, interactive booking form.
-   Clean, professional design with subtle animations.
-   Zero-dependency setup (no `npm install` needed).

## Running Locally

Because modern browsers have security restrictions (CORS policy) that prevent JavaScript modules from loading from the local file system (`file:///...`), you **cannot** simply open the `index.html` file in your browser.

Instead, you must use a simple local server. If you have Python installed, this is the easiest way:

1.  Open your terminal or command prompt.
2.  Navigate to the project's root directory.
3.  Run the appropriate command for your Python version:

```bash
# For Python 3
python -m http.server

# For Python 2
python -m SimpleHTTPServer
```

4.  Then, open `http://localhost:8000` in your browser.

## Deployment to GitHub Pages

This project is perfectly configured for deployment on GitHub Pages.

1.  **Create a GitHub Repository**: Create a new repository on your GitHub account.
2.  **Upload Files**: Upload all the files from this project (`index.html`, `index.tsx`, `App.tsx`, etc.) to your new repository.
3.  **Enable GitHub Pages**:
    *   Go to your repository's **Settings** tab.
    *   In the left sidebar, click on **Pages**.
    *   Under "Build and deployment", for the **Source**, select **Deploy from a branch**.
    *   Choose the branch you uploaded your files to (usually `main` or `master`).
    *   Leave the folder as `/ (root)`.
    *   Click **Save**.
4.  **Done!**: Your page will be live in a few minutes at `https://<your-username>.github.io/<repository-name>/`.