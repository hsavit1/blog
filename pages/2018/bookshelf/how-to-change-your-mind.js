import Head from 'next/head';
import Post from '../../../layouts/post';
import Meta from '../../../components/post/meta';
import Quote from '../../../components/post/quote';
import P from '../../../components/post/paragraph';
import Title from '../../../components/post/title';
import TLDR from '../../../components/post/tldr';
import Subtitle from '../../../components/post/subtitle';

import FR from '../../../components/post/further-reading';
import Podcasts from '../../../components/post/podcasts';
import UL, { LI as ULI } from '../../../components/post/bullets-list';

import withViews from '../../../lib/with-views';

export default withViews(({ views }) => (
	<Post>
		<Head>
			<title>How to Change Your Mind</title>
		</Head>
		<Title>How to Change Your Mind</Title>
		<Meta date="June 30, 2018" views={views} />
		<Subtitle>Author: Michael Pollan</Subtitle>

		<P>
			Michael Pollan is an author I've kept up with for some time.
			Although he's clearly an older and more cerebral kind of academic
			thinker, he is likeable. You have to admire his willingness to feel
			authentic and his quest to discover who we truly are and what
			emotions we should truly feel.
		</P>

		<P>
			I met with Pollan for the launch of this book in New York. The
			mystique of the new psychedelic subject matter was clearly a hit and
			the Barnes and Noble I met him at packed to a full house. Before the
			event, he had already been invited on some major podcasts - Ezra
			Klien's podcast, Joe Rogan's Podcast, Sam Harris' Podcast, etc.
			Pollan is a name brand and a respected one at that. And he is
			technically a tv star - his show <i>Cooked</i> is on Netflix.
		</P>

		<P>
			So it's shocking to see a man of his academic stature and of his age
			put his reputation on the line and jump into a subject matter like
			this. He had written some flowery language about cannabis in his
			book <i>The Botany of Desire, a Plant's Eye View of the World</i>,
			but there is a big step that is taken to jump from a relatively
			innocuous plant like cannabis to exploring the wild nature of
			reality and the universe with 5-meo-DMT. In the{' '}
			<i>Botany of Desire</i>, Pollan noted how cannabis could one day
			could be the medical breakthough plant that could perform mirables
			if it's studied and understood more scientifically. In this book, he
			takes that enthusiasm and applies it to another kind of plant that
			is also deeply misunderstood - the psilosybin mushroom.
		</P>

		<P>
			Pollan talks about at length in the first part of the book about how
			our politics have destroyed what could have been an essential part
			of everyday life. Once LSD had been outlawed in the 60s, everything
			associated with mind-altering substances took a major downturn. If
			you were studying psychedelics, you'd soon find yourself out of a
			job or even running to another continent like ex-harvard professor
			and LSD promoter Tim Leary. The social fear cultivated by the Nixon
			administration was catastrophic for the burgeoning psychedelic
			community.
		</P>

		<P>
			You have to admire Pollan's courage and willingness to discover what
			the nature behind these naturally occurring psychedelic substances.
			He clearly is nervous in all of his experiences, but for the sake of
			science, he gives mushrooms, LSD, and DMT a good college try.
		</P>

		<P>
			It's important to understand the social history of these substances
			just as much as it is to understand the scientific nature of them.
			Your experience on one of these drugs will be significantly impacted
			by your anxiety when taking them. This anxiety doesn't need to exist
			as it does - it comes from a polluted culture that has been
			perpetuated by people who are clearly not in the know.
		</P>

		<P>
			After reading about Pollan's experience, I came to the conclusion
			that the presence of a drug shaman character to get you settled and
			into the mood for taking a temporary consciousness-alternating
			substance is necessary. There needs to be a professional in the room
			that can make sure that you are in the right state of mind where you
			are open to a new kind of experience. You have to be willing and
			open to accept the concept that you can see something in a new
			light. The absurdity of some of the shamans that Pollan had
			interacted with seems like a necessary step - they should be
			ridiculous! If you are too judgmental where you are so picky about
			something that clearly doesn't matter at all, you are not open
			minded enough to imbibe in a powerful psychedelic.
		</P>

		<P>
			I won't describe Pollan's experiences but I will decribe the
			results. He looks at life a bit differently now. Clearly,
			psychedelics can be helpful for such a wide range of mental
			illnesses. Brain scans (fMRI's) have shown that something called the
			default mode network is turned off in people undergoing psychedelic
			sessions. The default mode network is the portion of the brain that
			is active when not actively thinking about anything. It acts as a
			filter on the fire hose of sensations that the body encounters, and
			also acts as a filter on the subconscious. The hypothesis is that
			the ego temporarily loses its dominion, and the unconscious, now
			unregulated, comes to an observable space. Brain scans show that
			psychedelics rewire the brain. Whether this rewiring is temporary or
			permanent is not known. It is interesting that the brains of
			experienced meditators look very similar to those on psilocybin.
			Both dramatically reduce activity in the default mode network.
		</P>

		<TLDR>
			Hopefully, this book continues to make some ripple effects about the
			tough to define nature of what psychedelic drugs really are and how
			we humans should treat them (or treat ourselves with them). We don't
			scientifically fully understand them, but we do know that there is
			an unjust culture of cruelty that has poisoned our relationship with
			them. Like Pollan, before and after his trips, when considering
			these things that we don't really know, we should try to keep an
			open mind - because the world is beyond our comprehension and your
			mind is naturally good at anchoring your perception in a certain way
			to shield you from what may actually be.
		</TLDR>

		<FR title="Further Reading">
			<UL>
				<ULI>
					<a
						href="https://www.thecut.com/2018/05/microdosing-guide-and-explainer.html"
						target="_blank"
					>
						 Microdosing’s Micromoment
					</a>{' '} - Consuming crumb-size amounts of psychedelics — not to get high but to feel more focused and creative and present — has moved a tiny bit mainstream. 
				</ULI>
			</UL>
		</FR>

		<Podcasts>
			<UL>
				<ULI>
					<a href="https://tim.blog/2018/05/06/michael-pollan-how-to-change-your-mind/">
						{' '}
						Michael Pollan — Exploring The New Science of Psychedelics
					</a>
				</ULI>
			</UL>
		</Podcasts>

	</Post>
));
