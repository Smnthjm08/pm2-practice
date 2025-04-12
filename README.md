# GitHub Actions EC2 Deploy Pipeline

Here’s a clean and professional `README.md` that explains how to use your GitHub Actions EC2 deploy pipeline. It's tailored for developers who may want to fork or reuse this setup:

---

```markdown
# 🚀 Deploy Next.js App to EC2 with GitHub Actions + PM2

This project demonstrates how to **automatically deploy a Next.js app to an EC2 instance** using GitHub Actions and **PM2** for process management.

Whenever you push to the `main` branch, GitHub Actions will:
- SSH into your EC2 instance
- Pull the latest code
- Install dependencies
- Build your Next.js app
- Restart it using `pm2`

---

## 🛠️ Setup Instructions

### 1. 📦 Prerequisites

Ensure your EC2 instance has the following installed:
- Git
- Node.js (via `nvm` recommended)
- PM2
- Your SSH key added to GitHub Secrets

You can set this up by SSH-ing into the instance and running:

```bash
sudo apt update && sudo apt install -y git curl

# Install NVM and Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc
nvm install node
nvm use node

# Install PM2
npm install -g pm2
```plaintext

---

### 2. 🔐 Add Secrets to GitHub

Go to your repository → Settings → Secrets → **Actions**, and add:

| Name                | Value                               |
|---------------------|-------------------------------------|
| `SSH_PRIVATE_KEY`   | Your private key for EC2 SSH access |

Make sure the key you're using has access to your EC2 instance under user `ubuntu`.

---

### 3. 🔁 Workflow Behavior

Every time you push to the `main` branch:
- GitHub Actions checks out your code
- SSHs into your EC2 server
- Clones the repo (if not already)
- Pulls latest changes
- Runs `npm install`, `npm run build`
- Restarts the app with `pm2`

---

### 4. 📁 Project Structure

Your project should be structured like any standard Next.js app, e.g.:

```

pm2-practice/
├── pages/
├── public/
├── package.json
├── next.config.js
├── ...

```

---

### 5. 🧪 Trigger Deployment

Push to `main`:

```bash
git add .
git commit -m "🚀 deploy ready"
git push origin main
```

GitHub Actions will handle the rest. 🎉

---

### 6. 🧰 Logs & Debugging

If deployment fails:

- Check the GitHub Actions logs
- SSH into your EC2 and check `pm2 logs`:

```bash
pm2 logs next-app
```

---

## ✅ Tips

- You can modify the `pm2` app name (`next-app`) in the workflow script.
- For custom domain & HTTPS, consider using **Nginx as a reverse proxy**.
- You can also setup `.env.production` and reference it in your app.

---
