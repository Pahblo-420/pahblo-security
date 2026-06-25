# 🛡️ Pahblo Armed Security 

> **Elite Protection. Uncompromising Safety.** <br>
> A highly optimized, blazing-fast static brochure website designed for a premier tactical security and protection firm.

<p align="left">
  <img src="https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify">
</p>

---

## 📖 Table of Contents
- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Author](#-author)

---

## 🎯 About the Project

**Pahblo Armed Security** is a professional single-page application (SPA) built to establish a dominant online presence for a tactical security firm based in Phuthaditjhaba, Free State. 

The goal of this project was to bypass heavy frameworks and utilize a **pure vanilla stack** to achieve maximum performance, perfect SEO scores, and highly customized scroll-driven animations. The design language features a high-contrast dark tactical theme with gold accents, engineered to build immediate trust and convey elite professionalism.

---

## 🔗 Live Demo

**[View the Live Site Here]((https://pahblosecurity.netlify.app))** 

---

## ✨ Key Features

- **Blazing Fast Performance:** 100% static vanilla code resulting in near-instant load times.
- **Advanced Scroll Animations:** Utilizes the native `IntersectionObserver` API for highly performant, scroll-triggered 3D animations (including a custom "tactical ring explosion" sequence).
- **Scrollspy Navigation:** A dynamic sticky header that tracks the user's scroll position and highlights the active section.
- **Serverless Form Handling:** Fully functional contact and lead-generation form integrated with Formspree, requiring zero backend architecture.
- **Mobile-First Responsiveness:** Features a custom CSS architecture with a dedicated responsiveness file, complete with a smooth hamburger navigation menu for mobile users.
- **SEO & Social Ready:** Fully equipped with Open Graph (OG) tags and Twitter Cards to generate beautiful, rich link previews when shared on WhatsApp, X, Facebook, or LinkedIn.

---

## 🛠 Tech Stack

This project was intentionally built without heavy frontend frameworks to demonstrate mastery over core web technologies.

* **Structure:** Semantic HTML5
* **Styling:** CSS3 (Custom Properties, Flexbox, CSS Grid, Keyframe Animations)
* **Interactivity:** Vanilla JavaScript (ES6+)
* **Icons:** FontAwesome 6
* **Form Backend:** Formspree API
* **Hosting & CI/CD:** Vercel 

---

## 📂 Project Architecture

A clean, modular separation of concerns:

```text
pahblo-security/
│
├── index.html           # Core structural markup and SEO metadata
├── style.css            # Main styling, color variables, and desktop layouts
├── responsiveness.css   # Media queries and mobile menu logic
├── app.js               # Observers, scrollspy, and animation logic
└── README.md            # Project documentation