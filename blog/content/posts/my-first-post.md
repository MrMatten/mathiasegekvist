+++
date = '2025-09-27T10:08:52+02:00'
draft = false 
title = 'My First Post'
+++

## Hugo as a tool for making a blog

This is my first test with Hugo. So far the response time is incredibly fast and the documentation is really easy to follow along. I am pleasantly surprised that it uses MarkDown files to post pages. This means I can make a vault and edit my posts in Obsidian, which I have grown quite fund of as a note/idea tool. 

### Issues
I had some trouble getting it to work as a route `mathiasegekvist/blog` but I am unsure if that is the way hugo is made or the way Digital Ocean tries to deploy it.
I tried a bunch of stuff but it kept making the links for styling and assets wrong.
I ended up making it as another deployment in Digital Ocean and then routing to `blog.mathiasegekvist.dk` instead. That worked perfectly out of the box.
```
