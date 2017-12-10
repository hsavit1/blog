import Head from 'next/head'
import Post from '../../layouts/post'
import Meta from '../../components/post/meta'
import Quote from '../../components/post/quote'
import P from '../../components/post/paragraph'
import Title from '../../components/post/title'
import withViews from '../../lib/with-views'

export default withViews(({ views }) => (
  <Post>
    <Head><title>Why I need this blog</title></Head>
    <Title>Why I need this blog</Title>
    <Meta date="December 9th, 2017" views={ views } />

    <P>Why is that I find writing Facebook posts to be creatively damaging? Why would I want to write something that is instantly seen by all of my friends the minute I post it?</P>

    <P>Let's take a few minutes to observe the main existing digital social outlets - Facebook, Twitter, Tumblr, Instagram, Medium, Snapchat, Reddit, Quora. I'll attempt to breakdown why I feel that they are insufficient and what could be done to fill that creative gap.</P>

    <P>As my understanding of the world continues to grow and as my reasoning for my personal beliefs is increasingly more derivative, I'm finding each of these outlets less and less likely to be suitable for any of my personal writing needs.</P> 
    
    <Quote>As I've come to understand, all of the major outlets are insufficent for expressing the majority of the ideas I've been generating as of late.</Quote>

    <P>Each of these outlets has an intended purpose, however these intended purposes are ultimately thought surpressing and constraining.</P>

    <Quote>Regardless of how we brand ourselves, we are all writers.</Quote>

    <P>Every one of us has original thoughts (sometimes I find it's easy to think otherwise).</P>

  </Post>
))
