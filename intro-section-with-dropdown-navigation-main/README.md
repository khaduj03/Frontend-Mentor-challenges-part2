### Remote Work Web Application
### Overview
    This is a responsive web application designed to help teams work remotely. It includes a modern, user-friendly interface that adapts to both desktop and mobile screens. The app includes a landing page with a hero section, a navigation bar, and various interactive elements such as dropdown menus and animations. It is built using React and styled with Tailwind CSS, and also incorporates Framer Motion for smooth animations.


### Screenshots
In this section, you can view screenshots of the app that showcase its design and functionality across various pages.
![desktop](./screenshot.png)
![mobile](./screenshot-mobile.png)
![sidebar in mobile](./screenshot-mobile-sidebar.png)


### Features
    Hero Section: A visually appealing header that welcomes users and explains the core value of remote work.
    Responsive Design: The layout adapts to different screen sizes, with a mobile-friendly navigation bar and responsive images.
    Dynamic Dropdown Menus: Menus for "Features" and "Company" sections with smooth animation effects.
    Interactive Animations: Hover effects and transitions on navigation items, buttons, and menu items using Framer Motion.
    Login and Register Buttons: Styled buttons with hover effects that redirect users to respective pages.
### Technologies Used
    React: A JavaScript library for building user interfaces.
    Tailwind CSS: A utility-first CSS framework used for styling the application.
    Framer Motion: A popular library for animations in React applications.



To get started with this project, follow the steps below:
### Prerequisites
Ensure you have the following software installed:

    Node.js (version >= 12.0)
    npm or yarn for package management
    Steps to Run the Application Locally
    Clone the Repository:

git clone https://github.com/khaduj03/Frontend-Mentor-challenges-part2.git

Navigate into the project folder:
cd coding-bootcamp-testimonials-slider-master
Install Dependencies: Use npm or yarn to install the required dependencies.

npm install
Start the Application: To run the app locally, use the following command:
npm start


This will start the application in development mode and open it in your default browser. The app will automatically reload if you make changes to any of the source files.

### How It Works
Components
    App.js: This is the root component where the main layout of the application is structured. It contains the hero section and main content.

    Header.js: A component that renders the navigation bar and handles the mobile menu toggle.

    Menu.js: A dropdown menu component that manages the "Features" and "Company" sections with dynamic visibility and animations.

### CSS Styling:
    The app uses Tailwind CSS for fast and responsive styling. It includes custom classes to handle responsive layouts and design adjustments.
### Key Features in Code
    Responsive Flex Layout: Using flex, lg:flex-row, and lg:flex-col-reverse, the layout adapts to different screen sizes.

    Framer Motion Animations: Smooth sliding and fade-in animations for the menu, dropdowns, and other interactive elements.

    Mobile Menu: On smaller screens, a hamburger menu is displayed, which toggles the visibility of the navigation links.

    Hover Effects: Interactive hover effects for navigation items and buttons using Tailwind CSS and Framer Motion.

### Example of Code Snippet for Animations:
In Menu.js, hover animations are implemented using motion.li and whileHover:

    ```
    <motion.li
    className="flex cursor-pointer"
    whileHover={{
        scale: 1.1,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        opacity: 0.9,
        y: -5,
        transition: { duration: 0.3 },
    }}
    >
    <span className="mt-1 mr-3">
        <img src="/images/icon-todo.svg" alt="Todo Icon" />
    </span>{" "}
    Todo
    </motion.li>
    ```
### Example of Code Snippet for Menu Toggle:
In Header.js, the mobile menu toggle functionality is managed using React's useState:
    ```
    const [toggle, setToggle] = useState(false);

    const handleMenu = () => {
    setToggle(!toggle);
    };

    return (
    <div className="w-screen h-14 flex justify-between p-8">
        <div className="lg:hidden">
        <button onClick={handleMenu}>
            <img src="images/icon-menu.svg" alt="" />
        </button>
        </div>
        {toggle && (
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: toggle ? 0 : "100%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 250, damping: 30 }}
            className="fixed top-0 right-0 w-72 h-screen bg-white"
        >
            <button className="w-full h-16 flex p-10 justify-end items-center" onClick={handleMenu}>
            <img className="w-7 h-7" src="/images/icon-close-menu.svg" alt="close menu" />
            </button>
            <nav className="p-6 space-y-4">
            <Menu />
            </nav>
        </motion.div>
        )}
    </div>
    );
    ```
### Contributions
Feel free to fork this repository and contribute by opening a pull request. Here's how you can contribute:
Fork the project.
Clone your forked repository:

git clone https://github.com/khaduj03/Frontend-Mentor-challenges-part2.git
-Create a new branch:
-git checkout -b feature-name
-Make your changes and commit them:
-git commit -m "Add a new feature"
-Push your changes to your forked repository:
-git push origin feature-name
-Open a pull request to the main repository.























# Frontend Mentor - Intro section with dropdown navigation

![Design preview for the Intro section with dropdown navigation coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a basic understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this intro section with dropdown navigation and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

Want some support on the challenge? [Join our community](https://www.frontendmentor.io/community) and ask questions in the **#help** channel.

## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design. 

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. 

If you would like the design files (we provide Sketch & Figma versions) to inspect the design in more detail, you can [subscribe as a PRO member](https://www.frontendmentor.io/pro).

You will find all the required assets in the `/images` folder. The assets are already optimized.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). Creating a repo will make it easier to share your code with the community if you need help. If you're not sure how to do this, [have a read-through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a web address. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, and we provide some recommendations below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.

## Deploying your project

As mentioned above, there are many ways to host your project for free. Our recommended hosts are:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

You can host your site using one of these solutions or any of our other trusted providers. [Read more about our recommended and trusted hosts](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe).

## Create a custom `README.md`

We strongly recommend overwriting this `README.md` with a custom one. We've provided a template inside the [`README-template.md`](./README-template.md) file in this starter code.

The template provides a guide for what to add. A custom `README` will help you explain your project and reflect on your learnings. Please feel free to edit our template as much as you like.

Once you've added your information to the template, delete this file and rename the `README-template.md` file to `README.md`. That will make it show up as your repository's README file.

## Submitting your solution

Submit your solution on the platform for the rest of the community to see. Follow our ["Complete guide to submitting solutions"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) for tips on how to do this.

Remember, if you're looking for feedback on your solution, be sure to ask questions when submitting it. The more specific and detailed you are with your questions, the higher the chance you'll get valuable feedback from the community.

## Sharing your solution

There are multiple places you can share your solution:

1. Share your solution page in the **#finished-projects** channel of the [community](https://www.frontendmentor.io/community). 
2. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor**, including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.
3. Share your solution on other social channels like LinkedIn.
4. Blog about your experience building your project. Writing about your workflow, technical choices, and talking through your code is a brilliant way to reinforce what you've learned. Great platforms to write on are [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), and [CodeNewbie](https://community.codenewbie.org/).

We provide templates to help you share your solution once you've submitted it on the platform. Please do edit them and include specific questions when you're looking for feedback. 

The more specific you are with your questions the more likely it is that another member of the community will give you feedback.

## Got feedback for us?

We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please email hi[at]frontendmentor[dot]io.

This challenge is completely free. Please share it with anyone who will find it useful for practice.

**Have fun building!** 🚀
