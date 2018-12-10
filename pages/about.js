import Page from '../layouts/main';
import Head from 'next/head';
import P from '../components/post/paragraph';
import TITLE from '../components/about/title';
import SUBTITLE from '../components/about/subtitle';
import Link from 'next/link';

export default () => (
	<Page>
		<Head>
			<title>About</title>
		</Head>
		<div className="about">
			<TITLE>About</TITLE>

			<SUBTITLE>I will show you enlightenment, if you let me.</SUBTITLE>

			<P>
				This site is my way of opening a bit of my mind to you. I'm
				trying to develop a sense of clarity about what it means to
				live and be alive on this floating rock. What you see will hopefully inspire
				you and thrust you back into the world with a fire under your
				butt. Spoiler: This isn't your typical professional shit blog. You'll
				actually be glad that you came to visit.
			</P>

			<P>
				For your reading pleasure, you can find my take on how humanity
				can strategize against the very real threat of climate change,
				the purpose of the internet in our lives, our human experience
				of time itself, some musings on the evolution of
				cryptocurrencies, and a sprinkle of political satire.
			</P>

			<P>
				You might as well check out some of my{' '}
				<Link prefetch href="/longform">
					<a className="side">Essays</a>
				</Link>
				. Maybe you’ll find something useful about our complicated
				relationship with technology, or about the some existential
				crises that we face in the age of the anthropocene. Maybe you'll
				even learn something. Or maybe it'll take you to a dark, dark,
				dark place and you'll find yourself in a basement huddled into a
				ball overwhelmed with fear. Give me a chance, and I will change
				the way you see.
			</P>

			<P>
				Concerning cryptocurrencies - the cryptocurrency sphere right
				now offers so much by way of innovation yet is still a hellscape
				of factoids propagated by charlatans. I feel that it's necessary
				to attempt to analyze it - that could be by assessing
				whitepapers, consensus mechanisms, or even the big ideas and
				visions - if we're going to emerge with a technology that is of
				real value to humanity. Otherwise, most of the time and effort
				spent by developers trying to innovate with cryptocurrencies
				will go for naught, and a whole bunch of valuable manhours that
				could have been spent on other means will That's why I dedicated
				a whole section of my site to it.
			</P>

			{/* <P>
        Zooming out of the world of crypto politics is the world of real
        politics, where things have just turned so insane that satire has become
        a coping mechanism for me.
      </P> */}

			<P>
				There's also a{' '}
				<Link prefetch href="/bookshelf">
					<a className="side">Bookshelf</a>
				</Link>{' '}
				section where you can find some reflections on things that I've
				read. Books are entry points for pitches of real ideas.
				Discussion needs to continue outside of the text if these ideas
				are to have any legs. I don't get to analyze all of the books
				that I read, but I try to elucidate on the ones that I find the
				most galvanizing.
			</P>

			<P>
				You can find the source for this page on{' '}
				<a target="_blank" href="https://github.com/hsavit1/blog">
					Github
				</a>
				. It's built Next.js and hosted with Zeit. The design is
				minimalist for a reason - I want you to focus on the content. As
				a bonus, the pages render pretty fast.
			</P>

			<P>
				If you like what you see, for now, contact me on{' '}
				<a target="_blank" href="https://twitter.com/cantbemorewrong">
					Twitter
				</a>
				. And if you really like what you see and want to support my
				writing, do the friendly thing and send me a donation through{' '}
				<a
					target="_blank"
					href="https://publishers.basicattentiontoken.org/"
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
