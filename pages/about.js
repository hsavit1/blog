import Page from '../layouts/main';
import Link from 'next/prefetch';
import Head from 'next/head';
import P from '../components/post/paragraph';
import TITLE from '../components/about/title';
import SUBTITLE from '../components/about/subtitle';

export default () => (
	<Page>
		<Head>
			<title>About</title>
		</Head>
		<div className="about">
			<TITLE>About</TITLE>

			<SUBTITLE>Behold, my Webpage</SUBTITLE>

			<P>
				Hey you, thanks for checking out my page. I've built this site
				as a tool to elucidate and share what I'm thinking.
			</P>

			<P>
				On here you'll find some longform musings related to the
				evolution of cryptocurrencies such as Bitcoin and Ethereum, the
				purpose of the internet and other design meditations, some
				technical stuff, and some satire. Most likely political satire.
			</P>

			<P>
				You might as well check out some of my essays. Maybe you’ll find
				something useful about our complicated relationship with technology. Maybe you'll even learn something. Or maybe it'll take you to a dark, dark, dark place. You'll just have to read to find out.
			</P>

			<P>
				The crypto market right now is a hellscape of misunderstanding and I feel that it is necessary to attempt to break it down - that could be by assessing whitepapers, consensus mechanisms, or even the big ideas and visions - if we're going to make any sense of this <a target="_blank" href="https://marymackey.com/wp-content/uploads/2014/11/Pandemonium.jpg">pandemonium</a> and emerge with something of real value. That's why I dedicated a whole section of my site to it.
			</P>

			<P>
				Zooming out of the world of crypto politics is the world of real politics, where things have turned so insane that satire has become my preferred method of assessment. 
			</P>

			<P>
				Lastly, there's a bookshelf section where you can read some book summaries. This is a work in progress. Book reviews take a long time.
			</P>

      <P>You can find the source for this page on <a target="_blank" href="https://github.com/hsavit1/blog">github</a>. I've made it minimalist for a reason. I want you to focus on the content. As a bonus, the pages render pretty fast.</P>

			<P>
				If you like what you see, for now, you can message me on Twitter. Eventually I'll build something better.
			</P>

			<P>Once again, thanks for visiting. And cheers, to you.</P>       
		</div>

    <style jsx>{`
      .about {
        max-width: 650px;
        margin: auto;
        font-size: 14px;
      }
    `}</style>
    <style jsx global>{`
      body {
        width: 100%;
        overflow-x: hidden;
      }
    `}</style>
	</Page>
);
