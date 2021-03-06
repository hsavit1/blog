# blog

This is the blog that powers `savits-blog.com`, built on
[next.js](https://zeit.co/blog/next) and
deployed to the cloud via [now](https://zeit.co/now).

Depends on the [savit-blog-views](https://github.com/hsavit1/savit-blog-views) microservice
for the realtime views display.

## How to run

### Development

All that's needed to run this blog is:

```
npm install
npm run dev
```

Then head to `http://localhost:3000`. Changes you make to
components will henceforth be reflected there in realtime.

## Architecture

### Pure components

Every stateless pure component is found under `./components`.

Every component that has to do with styling the post's markup
is found under `./components/post/`

These components make up the _style guide_ of the application.

### Blog posts

Every blog post is a static page hosted under `pages/$year/`.

This allows every post to load arbitrary modules, have custom layouts
and take advantage of automatic code splitting and lazy loading.

This means that the bloat of a single post doesn't "rub off on" the
rest of the site.

An index of all posts is maintained in JSON format as `./posts.json`
for practical reasons.

### Custom server

I set up a `server.js` that boots up Next.js programatically. This
gives me complete control over the HTTP request and response cycle.

To start the custom server, I run `node server.js` upon deployment.
