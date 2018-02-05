import Head from 'next/head';
import Post from '../../../layouts/post';
import Meta from '../../../components/post/meta';
import Quote from '../../../components/post/quote';
import P from '../../../components/post/paragraph';
import Title from '../../../components/post/title';
import Subtitle from '../../../components/post/subtitle';
import TLDR from '../../../components/post/tldr';
import BIGQ from '../../../components/post/big-question';
import Idea from '../../../components/post/idea';
import UL, { LI as ULI } from '../../../components/post/bullets-list';

import withViews from '../../../lib/with-views';

export default withViews(({ views }) => (
	<Post>
		<Head>
			<title>The Social Media Disimagination Machine</title>
		</Head>

		<Title>The Social Media Disimagination Machine</Title>

		<Subtitle>
			A contemplation of the damaging nature of the social frameworks that
			define our digital world, and a suggestion of a better direction
		</Subtitle>

		<Meta date="December 9th, 2017" views={views} />

		{/* Intro */}
		<P>
			My day job involves building smart phone applications, so naturally
			I'm shoved into thinking about the ramifications of what I'm
			designing and coding. Working in this space and dealing with as many
			"business minds" as I have dealt with has taught me that most major
			apps are essentially ads and 21st century marketing tools. These
			applications are built by companies whose financial blood flow is
			sustained by the process of cleverly taking as much from you as
			possible.
		</P>

		{/* Thesis */}
		<P>
			We feel the ramifications of this kind of robbery the hardest when
			we communicate via social media. Writing posts on Facebook is a
			<i> creatively damaging</i> habit. Facebook is a system that
			bankrupts our private inner musings, which forces all of our social
			musings to become public musings.
		</P>

		<P>
			Can I reasonably expect to write/read something that is instantly
			scrutinized by most of my connections to be of decent{' '}
			<b>substance</b>? And if my suspicions are valid that the mass
			scrutiny one may personally feel when posting on social media may be
			a dangerous symptom of a poorly designed digital framework, and
			given how penetrated social media is embedded into modern culture,
			many people must be feeling this kind of effect.
		</P>

		<BIGQ>
			<P>
				I ask, what effect is this massive community scrutiny having on
			</P>

			{/* Breakdown */}
			<UL>
				<ULI>
					The overall quality of our digitally published content
				</ULI>
				<ULI>
					Our societal embodiment of axiomatic reason and of the
					scientific method
				</ULI>{' '}
				<ULI>
					The value of individual speech in a society mired by
					identity politics, social media superstars, and group-think
					behaviors
				</ULI>
			</UL>
		</BIGQ>

		{/* Joke thesis */}
		<P>
			I'm of the opinion that relying on a "service" like Facebook for any
			of our social needs is simply lazy. Like eating a whole bag of
			Ruffles to satisfy hunger. <b>Facebook is junk food</b>. It's easily
			available and you could do better if you decided to put any effort
			into finding better options. But your rat brain is addicted to the
			immediacy of the gratification you feel when you see someone
			suddenly and perhaps unexpectedly materialize right in front of you.
		</P>

		{/* Joke Explanation */}
		<P>
			Social media is <i>social hyperbole</i>. This is the virtual
			equivalent of everyone you know, suddenly <i>right there</i> in
			front of you. The only time you would see something like this in
			real life is at what, a wedding? Or maybe you can imagine the
			biggest Starbucks of all time where everyone you know is hanging out
			and chatting. How do you look away? How would you possibly be able
			to concentrate?
		</P>

		{/* Personal */}
		<P>
			I'm 25 and going through that "I'm getting older and wiser" phase.
			My lens for looking at the world is wider than it used to be. So my
			thoughts are becoming a bit more derivative and I'm finding social
			media outlets less and less likely to be suitable for my personal
			needs to distill, concentrate and expressively write. The social{' '}
			<b>junk food</b> isn't able to provide the nutrients that I need to
			break down complex concepts.
		</P>

		{/* Personal Revelation */}
		<Idea>
			<P>
				As I've come to understand, all of the major outlets are
				insufficient for fully expressing the majority of the ideas I've
				been generating as of late.
			</P>
		</Idea>

		{/* Journey */}
		<P>
			The main existing social outlets - Facebook, Twitter, Tumblr,
			Instagram, Medium, Snapchat, Reddit - are all junk food in their own
			ways. Each of these outlets has an intended purpose, however these
			intended purposes are mostly mitigated because of their "instant
			broadcast" and financial interests. Ultimately they become thought
			suppressing, insolvent to the scientific method, and creatively
			constraining.
		</P>

		{/* Joke Explanation */}
		<P>
			They are not the tools that we can use to turn us into better, more
			creative writers. When we are better writers, we are better
			thinkers. (There's got to be a quote for that, somewhere). They can
			bring us up to least common denominator communication level of the
			rest of our social sphere, but I find that they rarely push us to go
			beyond publishing content that generates the most possible "likes."
		</P>

		<P>
			Publishing content on Facebook means that you are catering to
			everybody in your social sphere. It's "dangerous" to risk putting
			friendships on the line with a creative post that isn't necessarily
			in line with how you normally post. It's thus easiest to either not
			post or post something that is lacking in substance. But being
			imaginative is exploring different avenues of thought instead of
			entrenching yourself in these typical thought patterns. Hence, I
			will label Facebook to be the great <b>disimagination machine</b>.
		</P>

		<Quote>
			Regardless of how we brand ourselves, we are all thinkers who need
			expressive distillation tools. Facebook is social junk food, and can
			never be accepted as one of these tools.
		</Quote>

		<P>
			Every one of us has original thoughts (although sometimes I find
			it's convenient to rationalize otherwise). Although I can't state
			the true ideological purpose social media (Facebook, for example,
			has some{' '}
			<a href="http://www.imdb.com/title/tt1285016/" target="_blank">
				really disturbing beginnings
			</a>), I'd like to think that one of the primary reasons why social
			media should exist is to share <b>enriching content</b> more easily.
			Notice that I didn't just write <i>good content</i>. I consider{' '}
			<i>enriching content</i> to be content that expands the story that
			you have of the world around you.
		</P>

		<TLDR>
			If it's not possible to create fundamentally enriching content on
			Facebook, can you really expect to find fundamentally enriching
			content on Facebook?
		</TLDR>

		<P>
			If you assume consider this paradigm of what social media{' '}
			<i>should</i> be, can you really make the argument that Facebook
			exists to enrich your life?
		</P>

		<P>
			Here's my pitch to fix this problem: let's make a social network
			that doesn't encourage writing posts that are immediately seen by
			everyone you know. Social media posts should be{' '}
			<b>private by default</b>. Making all of your posts public for all
			of your friends to see doesn't give you enough time to contemplate
			the nature of the post. Maybe if people were forced to consider what
			they are about to broadcast to everyone else, they wouldn't post
			least common denominator content. Let's create an imagination
			machine. If you force people to consider their decisions, perhaps
			they wouldn't settle for the junk food.
		</P>
	</Post>
));
