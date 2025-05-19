# Komga Rotate Button

A simple Tampermonkey user script that adds a convenient rotate button to the Komga reader, allowing you to rotate images in 90-degree increments. Ideal for manga or comic readers who want more control over their reading experience.

---

## 📦 Features
- Rotate images by 90° per click (0°, 90°, 180°, 270°)
- Automatically resets rotation on page change
- Smooth 0.5s rotation animations
- Lightweight and easy to install

---

## 🚀 Installation
### 1. Install Tampermonkey
- [Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- [Tampermonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- [Tampermonkey for Safari](https://apps.apple.com/us/app/tampermonkey/id1482490089)

### 2. Install the Script
- Click the link below to install the script directly from GitHub:
- [**Install Komga Rotate Button**](https://raw.githubusercontent.com/LuTang-Terrence/komga-rotatebutton/main/komga-rotatebutton.js) (copy paste to Tampermonkey extension "Create a new script")

### 3. Update the Match URL
- Make sure to replace `YOUR_KOMGA_DOMAIN` in the script’s **@match** line with your actual Komga server URL:
```javascript
// @match https://YOUR_KOMGA_DOMAIN/*
```
---

## 🖼️ Screenshots
### Original Image (notice rotation button on top right corner)
![Before](./screenshots/Before.png)

### After clicking rotation button once
![After](./screenshots/After.png)

---
## 🌟 Acknowledgments
Inspired by https://linux.do/t/topic/529278
