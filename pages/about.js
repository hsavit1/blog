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
				Hey you, with the 2 eyes, Looking at the screen! You made it.
				Thanks for checking out my page.
			</P>

			<P>
				For your reading pleasure, you'll find some longform musings
				related to the evolution of cryptocurrencies, the purpose of the
				internet and other design meditations, some technical stuff, and
				some satire.
			</P>

			<P>
				You might as well check out some of my essays. Maybe you’ll find
				something useful about our complicated relationship with
				technology. Maybe you'll even learn something. Or maybe it'll
				take you to a dark, dark, dark place. You'll just have to read
				to find out.
			</P>

			<P>
				The crypto market right now is a hellscape of factoids and I
				feel that it is necessary to attempt to break it down - that
				could be by assessing whitepapers, consensus mechanisms, or even
				the big ideas and visions - if we're going to make any sense of
				this{' '}
				<a
					target="_blank"
					href="https://marymackey.com/wp-content/uploads/2014/11/Pandemonium.jpg"
				>
					pandemonium
				</a>{' '}
				and emerge with something of real value. That's why I dedicated
				a whole section of my site to it.
			</P>

			<P>
				Zooming out of the world of crypto politics is the world of real
				politics, where things have just turned so insane that satire
				has become my preferred method of confronting it. There are
				probably more productive ways, but this seems to make the most
				sense right now.
			</P>

			<P>
				Lastly, there's a bookshelf section where you can find some
				reflections on things that I've read. Books are entry points for
				pitches of real ideas. Discussion needs to continue outside of
				the text if these ideas are to have any legs. I don't get to
				review all of the books that I read, but I try to review the
				ones that I find the most thought provoking.
			</P>

			<P>
				You can find the source for this page on{' '}
				<a target="_blank" href="https://github.com/hsavit1/blog">
					Github
				</a>
				. It's built with React and Next.js and hosted with Zeit. The
				design is minimalist for a reason - I want you to focus on the
				content. As a bonus, the pages render pretty fast.
			</P>

			<P>
				If you like what you see, for now, you can message me on{' '}
				<a target="_blank" href="https://twitter.com/cantbemorewrong">
					Twitter
				</a>
				. And if you really like what you see and want to support my
				writing, do the friendly thing and send me a donation through{' '}
				<a
					target="_blank"
					href="https://brave.com/faq-payments/#what-is-brave-payments"
				>
					Brave payments
				</a>
				.
			</P>
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
