import Head from 'next/head';
import Post from '../../layouts/post';
import Meta from '../../components/post/meta';
import Quote from '../../components/post/quote';
import P from '../../components/post/paragraph';
import Title from '../../components/post/title';
import TLDR from '../../components/post/tldr';
import UL, { LI as ULI } from '../../components/post/bullets-list';

import withViews from '../../lib/with-views';

export default withViews(({ views }) => (
	<Post>
		<Head>
			<title>The Social Media Disimagination Machine</title>
		</Head>

		<Title>The Social Media Disimagination Machine</Title>
		{/* <h5>And why nothing else is suitable</h5> */}

		<Meta date="December 9th, 2017" views={views} />

		<P>
			Why is it that I find writing Facebook posts to be so{' '}
			<i>creatively damaging?</i> Can I reasonably expect to write/read
			something that is instantly scrutinized by most of my connections to
			be of real substance? And what effect is this having on the overall
			quality of our published content, our embodiment of the scientific
			method, and of the value of individual speech?f
		</P>

		<P>
			I'm of the opinion that relying on Facebook for any of our social
			needs is simply lazy. Kinda like taking ecstasy in the hope of
			meeting your next best friend. This is wishful thinking.
		</P>

		<P>
			In this essay I want to take a few minutes to observe the main
			existing digital social outlets - Facebook, Twitter, Tumblr,
			Instagram, Medium, Snapchat, Reddit, Quora. I'll attempt to
			breakdown why I feel that they are insufficient for expressive
			writing and what could be done to fill that creative gap.
		</P>

		<P>
			As my understanding of the world continues to grow and as my
			reasoning behind my personal beliefs becomes increasingly more
			derivative, I'm finding each of these outlets less and less likely
			to be suitable for my personal expressive writing needs.
		</P>

		<Quote>
			As I've come to understand, all of the major outlets are insufficent
			for expressing the majority of the ideas I've been generating as of
			late.
		</Quote>

		<P>
			Each of these outlets has an intended purpose, however what I've
			come to realize is that these intended purposes are ultimately
			thought surpressing, insolvent to the scientific method, and
			creatively constraining.
		</P>

		<P>
			They are not the tools that we can use to turn us into better
			writers. When we are better writers, we are better thinkers.
			(There's got to be a quote for that, somewhere). They can bring us
			up to speed with the rest of our social sphere, but I find that they
			rarely push us to go beyond publishing content that generates the
			most possible "likes"
		</P>

		<Quote>Regardless of how we brand ourselves, we are all writers.</Quote>

		<P>
			Every one of us has original thoughts (although sometimes I find
			it's convenient to rationalize otherwise). I can't state the true
			intended purpose of all social media (Facebook, for example, has
			some{' '}
			<a href="http://www.imdb.com/title/tt1285016/" target="_blank">
				really distrubing beginnings
			</a>), I'd like to think that one of the primary reasons why social
			media exists is to share <b>enriching content</b> more easily.
			Notice that I didn't just write <i>good content</i>. I consider{' '}
			<i>enriching content</i> to be content that is important to your
			understanding of your life and the world around you. If it's not
			possible to create fundamentally enriching content on Facebook, can
			you really expect to find fundamentally enriching content on
			Facebook?
		</P>

		<TLDR>
			If you assume consider this paradigm of what social media{' '}
			<i>should</i> be, can you really make the argument that Facebook
			exists to enrich your life?
		</TLDR>

		<P>
			When you create a Facebook post, it's the virtual equivalent of
			speaking at a town hall meeting. You're speaking in front of all of
			the people you're connected with, potentially hundred or thousands
			of people. Effectively, posting on your Facebook timeline is like
			being the center of attention at the biggest party you've ever been
			to. So what are you going to say? Pitch some reasoning to show how
			you can break down the meaning of the fundamental theorem of
			calculus. So not cool.
		</P>

		<P>
			I've been using Facebook in this analogy, but there is a fundamental
			overarching concept at play here. Social media giants are setting
			you up to post at a <i>least common denominator</i> comprehension
			level. You can't pitch your brainiest ideas on Facebook because
			<br />
			<UL>
				<ULI>Nobody will read it if it's too derivative</ULI>
				<ULI>
					You'll get looked upon as if you're killing the party that
					all of your friends are at
				</ULI>
			</UL>
			Naturally, Facebook has created a cesspool of least common
			denominator language.
		</P>
	</Post>
));
