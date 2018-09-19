import Head from 'next/head';
import Post from '../../../layouts/post';
import Meta from '../../../components/post/meta';
import Quote from '../../../components/post/quote';
import P from '../../../components/post/paragraph';
import Title from '../../../components/post/title';
import Subtitle from '../../../components/post/subtitle';
import Idea from '../../../components/post/idea';
import TLDR from '../../../components/post/tldr';

import withViews from '../../../lib/with-views';

export default withViews(({ views }) => (
	<Post>
		<Head>
			<title>The Death of Truth</title>
		</Head>
		<Title>The Death of Truth</Title>
		<Meta date="July 28th, 2018" views={views} />
		<Subtitle>Author: Michiko Kakutani</Subtitle>

		<P>
			This was a quick and enjoyable read. I probably finished it in 5
			hours. Given her background as a pulitzer-winning NYT book reviewers
			for the past 20 years, Kakutani has a tasteful opinion of how
			discourse has changed in the past 20 years.
		</P>
		<P>
			She’s quite concerned at how the Trump machine is gas-lighting with
			incendiary tweets and how the Republicans do not have the courage of
			saying “enough.” Demagoguery and fear are what define our top down
			administrative language, and this kind of language is matriculating
			itself into the masses through our “endless-you-loop" media culture.
			People now rush to confirm everything that they’ve seen on
			television with more stuff that is just repetition of the same
			verbiage.
		</P>

		<P>This is why facts are becoming harder and harder to agree upon.</P>

		<Quote>
			“The sheer volume of information allows people to cherry-pick facts
			or factoids or non-facts that support their own point of view.”
		</Quote>
		<P>
			Fear is the best kind of motivator for clickbait on the web, so
			content is created and crafted in an especially incendiary fashion.
		</P>

		<P>
			Kakutani beautifully documents the language killing campaigns of the last century. She compares the current administration of fear to that of propaganda machines of Mein Kumph / Joesph Goebbels the Leninist
			Soviets. The Soviet leadership believed that it didn’t matter
			how you viewed the administration, so long as you recognized them
			and constantly talked about them. Russian propaganda makes
			absolutely no commitment to objective reality, and neither does the
			Trump administration. The parallels are horrifying.
		</P>

		<Idea>
			When basic objective truths and language tenets are destroyed, you pave the road for an authoritarian takeover. This is when a man essentially sculpts his own language - when anything you say, no matter how false and no matter how vile, is treated as way more legitimate than what anyone else says.
		</Idea>

		<P>
			There is a known psychological anchoring tendency, where you tend to
			believe the first thing that you hear most strongly. Trump exploits
			this quality to the most extreme. He will say whatever he wants. It
			simply doesn’t matter what he says, because it is up to the people
			to decide what is true and what isn’t. He says so many incendiary
			things that it is impossible for regular people to continuously find
			new evidence to argue his claims. Eventually they just go with
			whatever he says. According to T.S. Elliot, “people are distracted
			from distraction by distraction.”
		</P>
		<Quote>
			"The goal of the powerful is often not to convince people of the
			truth,… but to produce resignation, cynicism, and a sense of
			disempowerment amongst the people. This can be done in a variety of
			ways; inundating audiences with information; producing distractions
			to dilute attention and focus; …" - Author Zeynep Tufekci of the book Twitter and the Tear Gas
		</Quote>
		<P>
			The best parts of this book come closer to the end, when Kakutani
			notes how crummy postmodernist interpretations have started to
			matriculate into our thinking and our discourse. Postmodernism was a
			school of thought popularized in the 1950s through 60s; it was a way
			to explain the current hectic state of the world by pointing out
			sources of major problems.
		</P>
		<P>
			One particular postmodernist is incredibly dangerous to our world
			today. He’s Putin’s and the Kremlin's chief propagandist, and his
			name is Vladislav Surkov. According to him, "hypocrisy in
			rationalistic paradigm of western civilization is inevitable”
			because “speech is too linear, too formal to reflect the so-called
			reality.” Clearly, this is so dangerous and poisonous to the
			acceptance of truth in discourse, and discourse in general.
		</P>
		<Quote>
			“The world is a horrible place” - Trump, in the book{' '}
			<b>Think Big</b>
		</Quote>
		<P>
			Trump is a man who is completely lacking in empathy, and his
			cynicism is a particularly dangerous for rational discourse.
		</P>
		<TLDR>
			If we are to rise out of this era, we must recognize the failure of
			postmodernist thought and we must find better use of our language to
			control the ubiquitous nihilism. There is a cesspool of discourse
			nowadays that we must recognize and choose to fight against. Irony
			and fear are Trump’s instruments of fascism. We need better
			instruments for change. As writer David Foster Wallace describes
			everything - “this is water.” Call it what you want, but facts are
			facts. If we can recognize it and interact with it differently, we
			can change this ubiquitous nihilism.
		</TLDR>
	</Post>
));
