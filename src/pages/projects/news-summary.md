---
title: "News Summary"
repoLink: "https://github.com/hturnbull93/news-summary-challenge"
deployLink: "http://guardian-summariser.surge.sh/"
tech: "JS, jQery, HTML, CSS"
img: "/news-summary.webp"
description: "A vanilla JS single page web app, using AJAX to consume the Guardian API."
label: "Personal"
link: "/projects/news-summary"
---

This project was completed in a weekend and helped me practice Single page web apps AJAX requests using vanilla JavaScript, HTML, and CSS.

I approached the game logic using Test Driven Development, Object Oriented principles, and a component based design paradigm for the stories.

The app consumes the [Guardian's API](https://open-platform.theguardian.com/explore/) with an asynchronous request to load in the most recent news stories. with a link to the full Guardian article.

When a news story is chosen, it's content is summarised by the [Aylien text API](https://aylien.com/text-api/) and presented to the user.

Though it wasn't deliberate, the site's design is likely inspired by the Guardian's colour scheme (having spent a while looking through their site and API explorer while writing the code).
