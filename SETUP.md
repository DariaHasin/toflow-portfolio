# Setup Instructions

## What's Different from the Full Version?

This portfolio version has been simplified to protect your intellectual property before publication:

### Removed/Simplified:
- **Detailed Pipeline Methodology** - Replaced with high-level overview
- **Reconstruction Methodology Details** - Removed technical implementation details about vector fields, dot products, and neural network architecture
- **Streamline Loss Section** - Removed mathematical formulation and detailed "How It Works" steps
- **Ablation Study** - Removed detailed comparison metrics and charts
- **Password Protection** - This is a public version, no password needed

### Kept:
- **Visual Results** - All images and visualizations
- **Quantitative Metrics** - PSNR, SSIM, NRMSE, NCC, VIF, FID
- **High-Level Approach** - General description of the two modes (Resolution Enhancement and Flow Mapping)
- **Research Objectives** - What the project aims to achieve
- **Professional Design** - Same beautiful UI and styling

## Installation & Deployment

1. **Install dependencies:**
   ```bash
   cd /home/daria/shared/scripts/toflow-portfolio
   npm install
   ```

2. **Test locally:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:5173

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Create GitHub repository:**
   - Go to GitHub and create a new **public** repository named `toflow-portfolio`
   - Don't initialize with README (we already have one)

5. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: TOFlow portfolio version"
   git remote add origin https://github.com/YOUR_USERNAME/toflow-portfolio.git
   git branch -M main
   git push -u origin main
   ```

6. **Enable GitHub Pages:**
   - Go to repository Settings > Pages
   - Source: GitHub Actions
   - The site will automatically deploy on push to main branch
   - Your site will be at: `https://YOUR_USERNAME.github.io/toflow-portfolio/`

## Important Notes

- The `base` path in `vite.config.js` is set to `/toflow-portfolio/` for GitHub Pages
- If you change the repository name, update the `base` path accordingly
- All images are already in the `public` folder
- The GitHub Actions workflow will automatically build and deploy on every push to main

## Contact

For questions: dhasin1995@gmail.com

