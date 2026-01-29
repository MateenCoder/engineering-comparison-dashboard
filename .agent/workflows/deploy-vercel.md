---
description: How to deploy the engineering dashboard to Vercel
---

### Deployment Guide for Vercel

To deploy your "Engineering Comparison Dashboard" to Vercel, follow these steps:

#### Method 1: Using the Vercel Dashboard (Recommended)

1. **Push to GitHub/GitLab/Bitbucket**:
   - Initialize a git repository in your project folder: `git init`
   - Add your files: `git add .`
   - Commit: `git commit -m "initial commit"`
   - Create a new repository on GitHub and push your code.

2. **Import to Vercel**:
   - Log in to [Vercel](https://vercel.com).
   - Click **"Add New"** -> **"Project"**.
   - Import your GitHub repository.

3. **Configure Project Settings**:
   - **Framework Preset**: Vercel should automatically detect **Create React App**.
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - Click **Deploy**.

#### Method 2: Using Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   - Run the following command in the `my-dashboard` directory:
   ```bash
   vercel --prod
   ```
   - Follow the interactive prompts to complete the deployment.

#### Post-Deployment Check
Once deployed, Vercel will provide you with a production URL (e.g., `my-dashboard-abc.vercel.app`). Your dashboard will render instantly with the static optimizations we implemented.
