# Netlify Deployment Guide

This guide will help you deploy your portfolio website to Netlify.

## Option 1: Static Frontend Only (Recommended)

### Step 1: Prepare Your Repository

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Ensure your repository is public** or you have a paid Netlify plan for private repos.

### Step 2: Deploy to Netlify

#### Method A: Deploy via Netlify UI (Easiest)

1. **Go to [netlify.com](https://netlify.com)** and sign up/login
2. **Click "New site from Git"**
3. **Choose your Git provider** (GitHub, GitLab, etc.)
4. **Select your repository**
5. **Configure build settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
   - **Node version**: `18` (or higher)
6. **Click "Deploy site"**

#### Method B: Deploy via Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

### Step 3: Configure Custom Domain (Optional)

1. **Go to your site settings** in Netlify dashboard
2. **Click "Domain settings"**
3. **Add your custom domain**
4. **Configure DNS** as instructed by Netlify

## Option 2: Full-Stack with Netlify Functions

If you need backend functionality, use this approach:

### Step 1: Install Dependencies

The `serverless-http` package is already installed and the Netlify function is configured.

### Step 2: Deploy

Follow the same steps as Option 1. The `netlify.toml` file will automatically:
- Build your frontend
- Deploy your Netlify functions
- Set up API redirects

### Step 3: Test Your API

Your API endpoints will be available at:
- `https://your-site.netlify.app/api/health`
- `https://your-site.netlify.app/api/profile`

## Environment Variables

If you need environment variables:

1. **Go to your site settings** in Netlify dashboard
2. **Click "Environment variables"**
3. **Add your variables**:
   ```
   DATABASE_URL=your_database_url
   SESSION_SECRET=your_session_secret
   ```

## Continuous Deployment

Netlify automatically deploys when you push to your main branch. To configure:

1. **Go to your site settings**
2. **Click "Build & deploy"**
3. **Configure your build settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
   - **Node version**: `18`

## Troubleshooting

### Build Fails

1. **Check build logs** in Netlify dashboard
2. **Ensure all dependencies** are in `package.json`
3. **Verify Node version** compatibility

### API Not Working

1. **Check function logs** in Netlify dashboard
2. **Verify API routes** are correctly configured
3. **Test locally** with `netlify dev`

### Assets Not Loading

1. **Check file paths** in your components
2. **Ensure assets** are in the correct directory
3. **Verify build output** in `dist/public`

## Performance Optimization

1. **Enable asset optimization** in Netlify dashboard
2. **Configure caching headers** in `netlify.toml`
3. **Use image optimization** for better loading times

## Security

1. **Set up form spam protection** if using contact forms
2. **Configure security headers** in `netlify.toml`
3. **Use environment variables** for sensitive data

## Monitoring

1. **Set up analytics** (Google Analytics, etc.)
2. **Monitor function execution** in Netlify dashboard
3. **Set up uptime monitoring** for your site

## Support

- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Netlify Community**: [community.netlify.com](https://community.netlify.com)
- **GitHub Issues**: For project-specific issues 