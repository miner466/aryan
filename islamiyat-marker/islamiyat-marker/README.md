# 📚 O Level Islamiyat Marker

An AI-powered marking tool for the Cambridge O Level Islamiyat 2058 May/June 2025 Paper 11.

---

## 🚀 How to Deploy (Step by Step)

### Step 1 — Get the tools you need
1. Download and install **Node.js** from https://nodejs.org (click the big green "LTS" button)
2. Make a free account at https://github.com
3. Make a free account at https://vercel.com (sign up with your GitHub account)

### Step 2 — Set up the project on your computer
1. Extract this zip file somewhere on your computer (e.g. your Desktop)
2. Open the folder `islamiyat-marker`
3. In the address bar of the folder, type `cmd` and press Enter (Windows) — this opens a terminal
4. Run these commands one by one:
   ```
   npm install
   ```
   Wait for it to finish.

### Step 3 — Push to GitHub
1. Go to https://github.com → click **New repository**
2. Name it `islamiyat-marker`, keep it public, click **Create repository**
3. GitHub will show you some commands — copy and run them in your terminal

### Step 4 — Deploy on Vercel
1. Go to https://vercel.com → click **Add New Project**
2. Import your `islamiyat-marker` GitHub repo
3. Framework: **Vite** (Vercel usually detects this automatically)
4. Before clicking Deploy, click **Environment Variables** and add:
   - Name: `ANTHROPIC_API_KEY`
   - Value: your Anthropic API key (get one free at https://console.anthropic.com)
5. Click **Deploy** 🎉

Your friend gets a live link like: `https://islamiyat-marker.vercel.app`

---

## 🔑 Getting an API Key
1. Go to https://console.anthropic.com
2. Sign up for a free account
3. Go to **API Keys** → **Create Key**
4. Copy the key and paste it as the Vercel environment variable

---

## 📱 How to Use the App
1. Open the link Vercel gives you
2. Pick a section (A, B, or C) at the top
3. Click **Show Mark Scheme** to see what Cambridge expects
4. Type your answer in the box
5. Click **✦ Mark My Answer** — the AI will score it and give feedback!
