# Portfolio Website ⚡️

A clean, beautiful and responsive portfolio website showcasing my projects, skills, and experience.

## Portfolio Sections
✔️ Summary and About me  
✔️ Skills  
✔️ Education  
✔️ Work Experience  
✔️ Open Source Projects Connected with GitHub  
✔️ Big Projects  
✔️ Achievements And Certifications 🏆  
✔️ Blogs  
✔️ Talks  
✔️ Podcast  
✔️ Contact me  
✔️ Twitter Timeline  
✔️ GitHub Profile

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer or use [Docker](https://www.docker.com/products/docker-desktop).

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

### Docker Commands

```
1) BUILD IMAGE : docker build -t portfolio:latest .
2) RUN IMAGE: docker run -t -p 3000:3000 portfolio:latest
```

## How To Use 

From your command line, clone and run the portfolio:

```bash
# Clone this repository
git clone <your-repo-url>

# Go into the repository
cd portfolio

# Setup default environment variables

# For Linux
cp env.example .env
# For Windows
copy env.example .env

# Install dependencies
npm install

# Start a local dev server
npm start
```

## Linking Portfolio to GitHub

Generate a classic GitHub personal access token following these [instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic).

1. Create a file called .env in the root directory of your project (if not done already in section: [How To Use](#how-to-use))

Note: Configuring environment variables before deploying your portfolio is highly recommended as some components depend on API data. 

```bash
- Portfolio
  - node_modules
  - public
  - src
  - .env         <-- create it here
  - env.example  <-- this is the base file
  - .gitignore
  - package-lock.json
  - package.json
```

2. Inside the .env file, add key `REACT_APP_GITHUB_TOKEN` and assign your GitHub token like this, also add your username as `GITHUB_USERNAME`

```env
// .env
REACT_APP_GITHUB_TOKEN = "YOUR GITHUB TOKEN HERE"
GITHUB_USERNAME = "YOUR GITHUB USERNAME"
USE_GITHUB_DATA = "true"
```

Set `showGithubProfile` to true or false to show Contact Profile using GitHub, defaults to false.

**Warning:** Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoding them into your programs.

Note: Open Source Projects section only show pinned items of your GitHub.
If you are seeing something as shown below, follow these [instructions](https://docs.github.com/en/enterprise/2.13/user/articles/pinning-items-to-your-profile).

## Linking blogs section to Medium

Optionally, you can link the blogs section to your medium user account:

* Inside the .env file, add key `MEDIUM_USERNAME` and assign your Medium username

```env
// .env
MEDIUM_USERNAME = "YOUR MEDIUM USERNAME"
```

Set `displayMediumBlogs` to true or false in portfolio.js to display fetched Medium blogs, defaults to true.

## Change and customize every section according to your need.

#### Personalize page content in `/src/portfolio.js` & modify it as per your need. You will also need to modify `index.html` to change the title and metadata to provide accurate SEO for your personal portfolio.

```javascript
/* Change this file to get your Personal Portfolio */

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all I'm Your Name",
  subTitle: emoji("A passionate Full Stack Software Developer 🚀"),
  resumeLink: "YOUR_RESUME_LINK"
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "YOUR_GITHUB_LINK",
  linkedin: "YOUR_LINKEDIN_LINK",
  gmail: "YOUR_EMAIL",
  // ... other social links
};
```

#### Resume upload
To upload your own resume, simply upload a pdf to `src/containers/greeting/resume` and rename the pdf to `resume.pdf`. 

#### Using Emojis

For adding emoji 😃 into the texts in `Portfolio.js`, use the `emoji()` function and pass the text you need as an argument. This would help in keeping emojis compatible across different browsers and platforms.

#### Customize Lottie Animations

You can choose a Lottie and download it in json format from sites like [this](https://lottiefiles.com/). In `src/assets/lottie`, replace the Lottie json file you want to alter with the same file name. If you want to change the Lottie options, go to `src/components/displayLottie/DisplayLottie.js` and change the `defaultOptions` object, you can refer [lottie-react docs](https://www.npmjs.com/package/lottie-react) for more info on the `defaultOptions` object.

#### Adding Twitter Time line to your Page
Insert your Twitter username in `portfolio.js` to show your recent activity on your page.

```javascript
const twitterDetails = {
  userName : "Your Twitter Username"
};
```
Note: Don't use `@` symbol when adding username.

## Deployment
When you are done with the setup, you should host your website online.

#### Deploying to GitHub Pages

- Navigate to `package.json` and enter your domain name in the `homepage` variable. For example, if you want your site to be `https://<your-username>.github.io/portfolio`, add the same to the homepage section of `package.json`.

- Follow through the guide to setup GitHub pages from the official CRA docs [here](https://create-react-app.dev/docs/deployment/#github-pages).

#### Deploying to Netlify

You could also host directly with Netlify by linking your own repository.

For more information, read [hosting on Netlify](https://create-react-app.dev/docs/deployment/#netlify).

## Technologies Used 

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [react-twitter-embed](https://github.com/saurabhnemade/react-twitter-embed)
- [react-easy-emoji](https://github.com/appfigures/react-easy-emoji)
- [react-headroom](https://github.com/KyleAMathews/react-headroom)
- [color-thief](https://github.com/lokesh/color-thief)
- [lottie-react](https://www.npmjs.com/package/lottie-react)

## Illustrations
- [UnDraw](https://undraw.co/illustrations)
- [Lottie by Oblikweare](https://lottiefiles.com/oblikweare)

---

**Made with ❤️ by Keshav Agarwal**
