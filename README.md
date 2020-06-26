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
- Labelled as either personal or commercial.
- Technologies used.
- Link to where it is deployed (if applicable).
- Link to the GitHub repo (if applicable).
- Link to the project page.

It makes sense to have a component that is responsible for rendering each of the project cards.

### Project Cards

In `src/components/projectCard.spec.jsx`, wrote a test that the ProjectCard renders a h4 containing the prop title. Red.

In `src/components/projectCard.jsx`:

- Added a stateless functional component that takes a prop called details.
- It renders a h4 containing the details title.

Green.

Wrote a test that ProjectCard renders a h5 containing the prop tech. Red.

- ProjectCard renders a div containing the h4, and also a h5 containing the prop tech.

Green.

Wrote a test that ProjectCard renders a p containing the prop description. Red.

- Added a p tag that contains the details description.

Green.

Wrote a test that ProjectCard renders a link to the prop repoLink. Red.

- Added an a tag with href to the details repoLink.

Green.

Wrote a test that ProjectCard renders a link to the prop deployLink. Red.

- Added an a tag with href to the details deployLink.

Green.

Wrote a test that ProjectCard renders an img, src of the prop img. Red.

- Added a img tag with the src as details img.
- Also added an alt of the details title.

Green.

Not all project of mine are deployed, and not all have associated GitHub repos.

Wrote a test that the ProjectCard renders okay if there are no links in the props. Red.

- Extracted the a tags to variables.
- These are assigned conditionally based on the existence of repoLink and deployLink, which are then rendered.

Green.

Wrote a test that ProjectCard renders a Link to the page of the project. Red.

- Added a Link component with a to prop of details link.

Green.

Wrote a test that ProjectCard renders a commercial/personal label. Red.

- Added another h5 with contents of the details label.
- Distinguished the tech and label h5s with class names.
- Updated tests that had failed due to ambiguity on h5s.

Green.

### Back to Project Summaries

In `src/pages/projects.spec.js`, wrote a test that Projects renders a ProjectCard for each project. Red.

In this test some mock data is passed manually to the Project component, however in production this will be provided by a graphql query.

In `src/pages/projects.jsx`:

- Passed data in as a prop to the Projects component.
- Export a query getting all markdown remark, eddges, nodes, their id and frontmatter.
- Declare constant cards.
- cards is assigned by mapping through the data's edges, and for each node:
  - Return a ProjectCard.
  - The ProjectCard has a key prop of the node's id.
  - The ProjectCard has a details prop of the node's frontmatter.
- The cards array is rendered within the Project's render.

Green.

### Restyling

On reflection, PaperCss is unique and full of character, but it doesn't have the professionalism I want to portray. I have decided to create the styling from scratch with SASS. The new design I have drawn up will also allow me to build much more easily with a mobile first perspective. 

First task is to uninstall PaperCss:

```shell
npm uninstall --save papercss
```

And remove its import from `gatsby-browser.js`. Also removed the paper background. and commented out the styling in the various scss files.

The fonts I want to use are both available via the Typeface plugin, so I installed them with:

```shell
npm install --save typeface-b612-mono typeface-montserrat
```

And import them in `gatsby-browser.js`.

In `src/index.scss`:

- Added some SASS variables for font and colours.
- Added global resets for font to b612 mono, font-weight, and color.
- Set html's background color.
- Set paragraph's font to Montserrat and line height to 1.6.

Also, as the border on the layout is no longer randomly chosen, removed the Math.random stub in snapshot tests.

### Refactoring Sidebar

In the new design there is a navbar instead of a sidebar, which also only contains internal navigation.

- Renamed the Sidebar component (and its files) to Navbar.
- Removed external links (and tests for these).
- Updated test that Navbar renders Link to home/about page (as these will be merged).

In `src/components/layout.jsx`:

- Switched import from Sidebar to Navbar.
- Removed content section.
- Removed bg div.

### Merging Home and About

In the new design the home page serves as an about page. Given that neither really have much content so far, I deleted the about page and started work on the home page.

### More Restyling

In `src/index.scss`:

- Switched to css variables on root to allow these to be easily accessed elsewhere.
- Added Headings reset.
- Added individual headings font scaling with clamp.
- Added max width and absolute font size to paragraphs.
- Added bottom border and hover to a tags

In `src/components/navbar.jsx`:

- Added activeClassName prop to Link to style the active links.

In `src/components/navbar.module.scss`:

- Added standard pattern of flex row for an unordered list within the nav.
- Position is fixed.
- Used a pointer coarse media query to place it at the bottom for touch screens.
- Added some font scaling to keep it hopefully on the screen on smaller viewports like old phones.
- Flex end to push it to the right.
- Added link hover styling.
- Added style for the active links.

In `src/components/layout.jsx`:

- Added className of container.

In `src/components/layout.module.scss`:

- container class has a max width, and side margins to auto.

In `src/pages/projects.jsx`:

- Wrapped the cards in a section with className projectsGrid.

In `src/pages/projects.module.scss`:

- projectsGrid is a css grid.
- It auto-fits columns with max width of 500px.

In `src/components/projectCard.module.scss`:

- Added a subtle background colour to the card.
- Stretch the image to 100% width.
- Add some padding for the text content.
- Display the links as inline block to prevent them wrapping, and add some margin.
- Display the labels as inline so they appear as one line that wraps.

### SmartLink Component

Part of the styling is that links have a "." after them, but the underline does not extend past the end of the text. The simplest way I have found to wrap a link in a span and have the link containing the text, and a "." outside of the link tag.

Doing this all over place isn't very dry, so there should a component for it. This element should be able to work with regular a tags, and Gatsby Link components.

In `src/components/smartLink.spec.js`, wrote a test that the SmartLink renders a Link when passed a to prop. Red.

In `src/components/smartLink.spec.js`:

- Added a stateless functional component SmartLink.
- It returns a Link, passing through the to prop
- It also takes a children prop and renders them within the Link.

Green.

Wrote a test that SmartLink renders an a tag when passed a href prop. Red.

- Added a guard clause to return the Link if the to prop is passed.
- Added a guard clause to return an a tag with href of the href prop if href is passed.

Green.

I refactored the guard statements to assign a variable link. The link variable is then wrapped with a span and the "." in the return statement.

Went through and replaced a tags and Link components with SmartLinks where appropriate. This broke some tests so fixed those.

<!-- Links -->

[harryturnbull.com]: https://harryturnbull.com/
[gatsby]: https://www.gatsbyjs.org/
[netlify]: https://www.netlify.com/
[jest]: https://jestjs.io/
[enzyme]: https://enzymejs.github.io/enzyme/
[papercss]: https://www.getpapercss.com/
