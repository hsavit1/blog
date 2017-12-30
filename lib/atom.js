const {posts} = require('../posts')
const max = 10 // max returned posts

module.exports = () => `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>Henry Savit</title>
    <subtitle>Essays</subtitle>
    <link href="https://savits-blog.com/atom" rel="self"/>
    <link href="https://savits-blog.com/"/>
    <updated>${posts[0].date}</updated>
    <id>https://rauchg.com/</id>
    <author>
      <name>Henry Savit</name>
      <email>henrysavit@gmail.com</email>
    </author>
    ${posts.slice(0, max).reduce((acc, post) => {
      return `${acc}
        <entry>
          <id>${post.id}</id>
          <title>${post.title}</title>
          <link href="https://savits-blog.com/${post.date.match(/\d{4}/)[0]}/${post.id}"/>
          <updated>${post.date}</updated>
        </entry>`
      }, '')}
  </feed>
`
