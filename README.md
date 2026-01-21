Here is the complete, consolidated code for your **README.md**. I have merged your project details, the technical setup instructions, and the customization guide into one professional document.

Copy and paste everything below into your `README.md` file in VS Code:

```markdown
# Keshav Agarwal | Personal Portfolio ⚡️

A clean, beautiful, and responsive portfolio website showcasing my projects, skills, and professional journey. Built with React and integrated with the GitHub and Medium APIs.



## 🚀 Features
- **Summary & About Me**: A professional introduction and mission statement.
- **Tech Stack**: Visual display of skills and tools I work with.
- **Education & Experience**: Detailed timeline of my career and learning.
- **Open Source**: Real-time fetching of pinned GitHub repositories.
- **Projects & Achievements**: Showcase of major builds and certifications.
- **Blogs**: Integrated Medium blog feed.
- **Contact**: Easy-to-use social media and contact links.

---

## 💻 Getting Started

### Prerequisites
Ensure you have the following installed on your local machine:
- **Node.js**: v14.16.0 or higher
- **npm**: v6.9.0 or higher
- **Git**: v2.17.1 or higher
- **Docker** (Optional for containerized setup)

### Installation

1. **Clone the Repository**
   ```bash
   git clone [https://github.com/Keshav5339/My-Portfolio.git](https://github.com/Keshav5339/My-Portfolio.git)
   cd My-Portfolio

```

2. **Setup Environment Variables**
Create a `.env` file in the root directory:
```bash
# For Windows
copy env.example .env
# For Mac/Linux
cp env.example .env

```


3. **Install Dependencies**
```bash
npm install

```


4. **Run Locally**
```bash
npm start

```



---

## ⚙️ Configuration & API Linking

To display your GitHub projects and Medium blogs, update your `.env` file:

```env
REACT_APP_GITHUB_TOKEN = "YOUR_GITHUB_TOKEN"
GITHUB_USERNAME = "Keshav5339"
MEDIUM_USERNAME = "YOUR_MEDIUM_USERNAME"
USE_GITHUB_DATA = "true"

```

### Personalizing Content

Most text, social links, and settings are managed in `/src/portfolio.js`. Modify this file to add your specific details:

* **Resume**: Upload your PDF to `src/containers/greeting/resume` and name it `resume.pdf`.
* **Animations**: Replace JSON files in `src/assets/lottie` to change site animations.

---

## 🐳 Docker Support

If you prefer using Docker, use the following commands:

1. **Build Image**: `docker build -t portfolio:latest .`
2. **Run Image**: `docker run -t -p 3000:3000 portfolio:latest`

---

## 🚀 Deployment

### GitHub Pages

1. Update the `homepage` field in `package.json` to: `https://Keshav5339.github.io/My-Portfolio`
2. Run: `npm run deploy`

### Netlify

Connect your GitHub repository to Netlify for automatic continuous deployment (CD).

---

## 📄 License & Credits

This project is customized from the [developerFolio](https://github.com/saadpasta/developerFolio) template.

**Built with ❤️ by [Keshav Agarwal**](https://www.google.com/search?q=https://github.com/Keshav5339)

```

---

### What to do next:
1. **Save the file** in VS Code.
2. **Commit and Push** the changes to your new repository:
   ```bash
   git add README.md
   git commit -m "Update README with personal details"
   git push origin main

```

**Would you like me to help you generate a "Personal Access Token" for your GitHub API integration?**
