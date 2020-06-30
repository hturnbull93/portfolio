---
title: "Neogram"
repoLink: "https://github.com/hturnbull93/instagram-challenge"
deployLink: "https://neo-gram.herokuapp.com"
tech: "Ruby on Rails"
img: "/neogram-sample.webp"
description: "A social media photo sharing web-app, inspired by Instagram and the Neomorphism design trend."
label: "Personal"
link: "/projects/neogram"
---

I constructed this web app over the course of a weekend in order to bolster my knowledge of Ruby on Rails.

It allows users to post photos, apply filters, and comment on and like posts.

To allow the focus to lie on the content of the uploaded images, I decided to aim for an interface as minimalistic as possible.

With this in mind I decided to implement a UI based on the Neomorphism design trend. This involves subtle shadow to give elements the appearance of being raised from the screen. There is a risk that the low contrast involved in these designs may be problematic for users with vision impairments. I have taken care to keep text high contrast and not to rely on the low contrast shadowing too much.

The use of Rails' ActiveStorage makes storing images simple. In production ActiveStorage is linked to an Amazon S3 bucket, as Heroku's servers do not persist data after the server restarts (once every 24 hours).
