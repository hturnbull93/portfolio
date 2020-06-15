# Personal Portfolio

The site is built with [Gatsby], using React, and is deployed to [harryturnbull.com] via [Netlify].

[![Netlify Status](https://api.netlify.com/api/v1/badges/9f017ae6-45ae-466b-93c0-5936ffe13d7e/deploy-status)](https://app.netlify.com/sites/harryturnbull/deploys)

## Tech Used

| Tech      | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| [Gatsby]  | Static site generator, uses React.                                   |
| [Jest]    | Unit testing framework.                                              |
| [Netlify] | Host, allows for CI/CD workflow, also provides free SSL certificate. |

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
  - Link to the GitHub repo
  - Technologies used
  - Brief explanation
  - Screenshots
- Shows visitors my blog posts, for each:
  - Title
  - Date
  - Link to the medium post
- Is styled well

### User Stories

- [ ] 1

  > As a visitor,  
  > So that I can read a bit about this developer,  
  > I would like there to be an about section.

- [ ] 1.1

  > As a visitor,  
  > So that I might hire this developer,  
  > I would like a link to his CV.

- [ ] 1.2

  > As a visitor,  
  > So that I might follow this developer on social media,  
  > I would like a link to his Twitter.

- [ ] 1.3

  > As a visitor,  
  > So that I might follow this developer on social media,  
  > I would like a link to his LinkedIn.

- [ ] 1.4

  > As a visitor,  
  > So that I can explore the things this developer has built,  
  > I would like a link to his GitHub.

- [ ] 1.5

  > As a visitor,  
  > So that I can read what this developer has written about things,  
  > I would like a link to his Medium blog.

- [ ] 2

  > As a visitor,  
  > So that I know what this developer has made,  
  > I would like to see a summary of his projects.

- [ ] 2.1

  > As a visitor,  
  > So that I can see the project in action,  
  > I would like a link to where it is deployed.

- [ ] 2.2

  > As a visitor,  
  > So that I can inspect the project's source code,  
  > I would like a link to it's GitHub repo.

- [ ] 2.3

  > As a visitor,  
  > So that I can tell at a glance how the project was made,  
  > I would like to see a part about the technologies used.

- [ ] 2.4

  > As a visitor,  
  > So that I can understand why the project was made,  
  > I would like to see a brief explanation.

- [ ] 2.5

  > As a visitor,  
  > So that I can see how the project looks at a glance,  
  > I would like to see some screenshots.

- [ ] 3

  > As a visitor,  
  > So that I can read what the developers has written about,  
  > I would like to see a blog section.

- [ ] 3.1

  > As a visitor,  
  > So that I can choose a blog post to read,  
  > I would like to see each blog post's title.

- [ ] 3.2

  > As a visitor,  
  > So that I can tell how up to date the blog posts are,  
  > I would like to see each blog post's date.

- [ ] 3.3

  > As a visitor,  
  > So that I can read the blog once I have chosen it,  
  > I would like blog post to have a link to Medium.

- [ ] 4

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

I want to use Enzyme in testing also, so installed it and its dependencies with:

```shell
npm install --save-dev enzyme enzyme-adapter-react-16
```

Configured enzyme to use the adapter in `setupTests.js`, added this to the jest config to run after env is set up.

Added a script in `package.json`, `test` runs `jest --watch`.

Finally, wrote a test to check that the testing setup works. The Home page should include a h1 with "Harry Turnbull" in it.

This passes.

Added a snapshot test also.

### Travis CI Setup

Added `.travis.yml`.

<!-- Links -->

[harryturnbull.com]: https://harryturnbull.com/
[gatsby]: https://www.gatsbyjs.org/
[netlify]: https://www.netlify.com/
[jest]: https://jestjs.io/
