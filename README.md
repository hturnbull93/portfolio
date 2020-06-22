# Personal Portfolio

The site is built with [Gatsby], using React, and is deployed to [harryturnbull.com] via [Netlify].

[![Build Status](https://travis-ci.com/hturnbull93/portfolio.svg?branch=master)](https://travis-ci.com/hturnbull93/portfolio) [![Netlify Status](https://api.netlify.com/api/v1/badges/9f017ae6-45ae-466b-93c0-5936ffe13d7e/deploy-status)](https://app.netlify.com/sites/harryturnbull/deploys)

## Tech Used

| Tech       | Description                                                          |
| ---------- | -------------------------------------------------------------------- |
| [Gatsby]   | Static site generator, uses React.                                   |
| [Jest]     | Unit testing framework.                                              |
| [Enzyme]   | Unit testing library for React.                                      |
| [PaperCss] | Lightweight and simple CSS framework.                                |
| [Netlify]  | Host, allows for CI/CD workflow, also provides free SSL certificate. |

## Development Journal

Create for myself a portfolio site that does the following:

- Tells visitors a bit about who I am
- Tells visitors where they can follow me:
  - CV
  - Twitter
  - LinkedIn
  - GitHub
  - Medium
- Shows visitors information about my projects, for each:
  - Link to where it is deployed (if applicable)
  - Link to the GitHub repo (if applicable)
  - Technologies used
  - Brief explanation
  - Screenshots
  - If it is a personal project or commercial project
- Shows visitors my blog posts, for each:
  - Title
  - Date
  - Link to the medium post
- Is styled well

### User Stories

- [x] 1

  > As a visitor,  
  > So that I can read a bit about this developer,  
  > I would like there to be an about section.

- [x] 2.1

  > As a visitor,  
  > So that I might hire this developer,  
  > I would like a link to his CV.

- [x] 2.2

  > As a visitor,  
  > So that I might follow this developer on social media,  
  > I would like a link to his Twitter.

- [x] 2.3

  > As a visitor,  
  > So that I might follow this developer on social media,  
  > I would like a link to his LinkedIn.

- [x] 2.4

  > As a visitor,  
  > So that I can explore the things this developer has built,  
  > I would like a link to his GitHub.

- [x] 2.5

  > As a visitor,  
  > So that I can read what this developer has written about things,  
  > I would like a link to his Medium blog.

- [ ] 3

  > As a visitor,  
  > So that I know what this developer has made,  
  > I would like to see a summary of his projects.

- [ ] 3.1

  > As a visitor,  
  > So that I can see the project in action,  
  > I would like a link to where it is deployed.

- [ ] 3.2

  > As a visitor,  
  > So that I can inspect the project's source code,  
  > I would like a link to it's GitHub repo.

- [ ] 3.3

  > As a visitor,  
  > So that I can tell at a glance how the project was made,  
  > I would like to see a part about the technologies used.

- [ ] 3.4

  > As a visitor,  
  > So that I can understand why the project was made,  
  > I would like to see a brief explanation.

- [ ] 3.5

  > As a visitor,  
  > So that I can see how the project looks at a glance,  
  > I would like to see some screenshots.

- [ ] 3.6

  > As a visitor,  
  > So that I know the context of the project,  
  > I would like it to be labelled as either personal or commercial.

- [ ] 4

  > As a visitor,  
  > So that I can read what the developers has written about,  
  > I would like to see a blog section.

- [ ] 4.1

  > As a visitor,  
  > So that I can choose a blog post to read,  
  > I would like to see each blog post's title.

- [ ] 4.2

  > As a visitor,  
  > So that I can tell how up to date the blog posts are,  
  > I would like to see each blog post's date.

- [ ] 4.3

  > As a visitor,  
  > So that I can read the blog once I have chosen it,  
  > I would like blog post to have a link to Medium.

- [ ] 5

  > As a visitor,  
  > So that I am impressed by the site,  
  > I would like it to be visually pleasing.

### Gatsby Setup

Gatsby initialised with the Hello World starter, using the following:

```shell
gatsby new portfolio https://github.com/gatsbyjs/gatsby-starter-hello-world
```

### Testing Setup

Installed Jest and Gatsby's Babel dependencies as advised in the [Gatsby docs](https://www.gatsbyjs.org/docs/unit-testing/#1-installing-dependencies):

```shell
npm install --save-dev jest babel-jest react-test-renderer babel-preset-gatsby identity-obj-proxy
```

Configured Jest in `jest.config.js` and Babel config in `jest-preprocess.js`.

Added a file mock in `__mocks__/file-mock.js`.

Added `loadershim.js` to set the `global.___loader` object.

I want to use [Enzyme] in testing also, so installed it and its dependencies with:

```shell
npm install --save-dev enzyme enzyme-adapter-react-16
```

Configured enzyme to use the adapter in `setupTests.js`, added this to the jest config to run after env is set up.

Added a script in `package.json`, `test` runs `jest --watch`.

Finally, wrote a test to check that the testing setup works. The Home page should include a h1 with "Harry Turnbull" in it.

This passes.

Added a snapshot test also.

### Travis CI Setup

Added `.travis.yml`, specifying to use stable node.js version, and to run tests with `npx jest`.

### User Story 1 - About Section

- [x] 1

  > As a visitor,  
  > So that I can read a bit about this developer,  
  > I would like there to be an about section.

The About section is a separate page. In `src/pages/about.spec.js` wrote a test that the About component renders a div. Red.

In `src/pages/about.jsx`:

- Wrote a stateless function component that renders a div with a h1 containing "About".

Green.

Added some paragraphs about me.

Added a snapshot test.

### User Story 2 - Sidebar/Navigation

The User stories in this section are all grouped based on links to resources. I would like these to be in a sidebar that appears on every page.

- [x] 2.1

  > As a visitor,  
  > So that I might hire this developer,  
  > I would like a link to his CV.

In `src/components/sidebar.spec.js` wrote a test that the Sidebar Component renders a link to my CV. Red.

In `src/components/sidebar.jsx`:

- Wrote a stateless function component called Sidebar.
- It renders a div, containing an a tag linking to my CV.

Green.

- [x] 2.2

  > As a visitor,  
  > So that I might follow this developer on social media,  
  > I would like a link to his Twitter.

Wrote a test that Sidebar renders a link to my Twitter. Red.

- Added another a tag linking to my Twitter.

Green.

- [x] 2.3

  > As a visitor,  
  > So that I might follow this developer on social media,  
  > I would like a link to his LinkedIn.

Wrote a test that Sidebar renders a link to my LinkedIn. Red.

- Added another a tag linking to my LinkedIn.

Green.

- [x] 2.4

  > As a visitor,  
  > So that I can explore the things this developer has built,  
  > I would like a link to his GitHub.

Wrote a test that Sidebar renders a link to my GitHub. Red.

- Added another a tag linking to my GitHub.

Green.

- [x] 2.5

  > As a visitor,  
  > So that I can read what this developer has written about things,  
  > I would like a link to his Medium blog.

Wrote a test that Sidebar renders a link to my Medium blog. Red.

- Added another a tag linking to my Medium blog.

Green.

Now that the user stories are complete, The component can be added into the pages. For this I will use a Layout component.

In `src/components/layout.spec.js`, wrote a test that the Layout component renders a Sidebar component. Red.

In `src/components/layout.jsx`:

- Wrote a stateless function component called Layout.
- Imported Sidebar.
- Layout renders a div that contains a Sidebar.

Green.

Wrote a test that Layout renders the children that are contained within it. Red.

- Passed children as a prop to Layout.
- Rendered the children prop underneath the Sidebar.

Green.

Wrote a test that About renders the Layout component. Red.

- Imported Layout.
- Switched out the div rendered in About for a Layout.

Green. Also updated the snapshot.

Wrote a test that the Home renders the Layout component. Red.

- Imported Layout.
- Switched out the div rendered in Home for a Layout.

Green. Also updated the snapshot.

### Adding Basic Styling

I have decided to add [PaperCss] as it is a simple and lightweight CSS framework, which requires little additional classes to apply its styling. Perfect for getting started with.

PaperCss is installed with:

```shell
npm install --save papercss
```

To apply the styles across all pages, I imported the PaperCss minified css file into `gatsby-browser.js`.

For general styling I want to use SASS, which Gatsby helpfully provides a plugin for, installed with:

```shell
npm install --save node-sass gatsby-plugin-sass
```

`gatsby-plugin-sass` is registered as a plugin in `gatsby-config.js

Added `src/index.scss` and imported it into `gatsby-browser.js`. This will serve as the global stylesheet for custom styling.

In `src/index.scss`:

- Increased line height of paragraphs to 1.6.

In `src/components/sidebar.module.scss`:

- Styled Sidebar to be sticky.
- Tweaked style of Sidebar nav and ul.
- Styled h3, and nested small

In `src/components/sidebar.jsx`:

- Formatted links as a nav containing a ul.
- Added border class (from PaperCss).
- Added h3 with my initials and role as a sort of logo.

In `src/components/layout.module.scss`:

- Added flexbox layout to position the Sidebar to the left of the content.
- Justified the flex items to the center, and aligned them to the start (top).
- Content has a max-width so it doesn't stretch across to far.
- Layouts children have a white background.
- Created a "bg" class for a full screen background.

In `src/components/layout.jsx`:

- const `borderChoice` is assigned with a random integer between 2 and 6.
- This is used to randomize the border that is used for the content section.
- Added a div with the class of "bg".

### Stubbing Math.random

I thought it would be fun for the content to be surrounded by a random choice of PaperCss's borders. However this randomness is causing the snapshot tests to fail.

In the snapshot tests I have used the jest `spyOn` and `mockImplementation` methods to stub the value that `Math.random` returns to 0.5.

### Adding a Favicon

I generated a Favicon and added it to the `static` directory. Also kept a copy of the icon too.

### Linking Pages

Wrote a test that the Sidebar should contain a Link component to the About page. Red.

For this I needed to add a mock for Gatsby's Link component, in `__mocks__/gatsby.js`.

- Added a Link element in Sidebar, with a `to` prop of "/about".

Green.

Wrote a test that the Sidebar should contain a Link component to the Home page. Red.

- Added a Link element in Sidebar, with a `to` prop of "/about".

Green.

Updated the snapshots for About and Index.

### Project Summaries

- [ ] 3

  > As a visitor,  
  > So that I know what this developer has made,  
  > I would like to see a summary of his projects.

For this I want to generate project pages from markdown documents.

For that I'll need the `gatsby-source-filesystem` plugin, installed with:

```shell
npm install --save gatsby-source-filesystem
```

This plugin allows Gatsby to access the local filesystem in graphql queries.

Added configuration in `gatsby-config.js`.

I'll also need `gatsby-transformer-remark` to parse markdown files and convert them to HTML, installed with:

```shell
npm install --save gatsby-transformer-remark
```

And added to `gatsby-config.js`.

In `src/pages/projects/index.spec.js`, wrote a test that the Project page renders a Layout. Red.

In `src/pages/projects/index.jsx`:

- Added a stateless functional component, Projects, that returns a Layout component.

Green.

Wrote a test that the Project page renders a h1 containing "Projects". Red.

- Added a h1 within the Layout with the text "Projects".

Green.

For this page I intend for there to be a series of cards, one for each project. The cards will have:

- Project name.
- Very brief description.
- An image.
- Technologies used.
- Link to where it is deployed (if applicable).
- Link to the GitHub repo (if applicable).
- Link to the project page.

As these pages will be part of the projects path, I moved `projects.jsx` and its test file to a directory `src/pages/projects`, and renamed it as `index.jsx`.

It makes sense to have a component that is responsible for rendering each of the project cards.

In `src/components/projectCard.spec.jsx`, wrote a test that the ProjectCard renders a h4 containing the prop title. Red.

In `src/components/projectCard.jsx`:

- Added a stateless functional component that takes a prop called details.
- It renders a h4 containing the details' title.

Green.

Wrote a test that ProjectCard renders a h5 containing the prop tech. Red.

- ProjectCard renders a div containing the h4, and also a h5 containing the prop tech.

Green.

Wrote a test that ProjectCard renders a p containing the prop description. Red.

- Added a p tag that contains the prop description.

Green.

Wrote a test that ProjectCard renders a link to the prop repoLink. Red.

- Added an a tag with href to the prop repoLink.

Green.

Wrote a test that ProjectCard renders a link to the prop deployLink. Red.

- Added an a tag with href to the prop deployLink.


<!-- Links -->

[harryturnbull.com]: https://harryturnbull.com/
[gatsby]: https://www.gatsbyjs.org/
[netlify]: https://www.netlify.com/
[jest]: https://jestjs.io/
[enzyme]: https://enzymejs.github.io/enzyme/
[papercss]: https://www.getpapercss.com/
