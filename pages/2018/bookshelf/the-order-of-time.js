import Head from 'next/head';
import Post from '../../../layouts/post';
import Meta from '../../../components/post/meta';
import P from '../../../components/post/paragraph';
import Title from '../../../components/post/title';
import Subtitle from '../../../components/post/subtitle';
import Idea from '../../../components/post/idea';
import FR from '../../../components/post/further-reading';
import UL, { LI as ULI } from '../../../components/post/bullets-list';

import withViews from '../../../lib/with-views';
import TLDR from '../../../components/post/tldr';

export default withViews(({ views }) => (
	<Post>
		<Head>
			<title>The Order of Time</title>
		</Head>
		<Title>The Order of Time</Title>
		<Meta date="July 24, 2018" views={views} />
		<Subtitle>Author: Carlo Rovelli</Subtitle>

		<P>
			If you are unfamiliar with the most interesting developments in
			physics, look no further than the sub-field of quantum physics.
			Quantum Mechanics was my favorite course in college, because of the
			new realms of possibility that it unlocked.
		</P>

		<P>
			In the quantum / subatomic world, things don't behave as the do in
			the space of bodies that we can see. Things appear in a
			superposition of here and there - which makes you question what
			really <i>is</i>.
		</P>

		<P>
			Carlo's book is not technically dense - at least compared to the way
			that most physicists write. He lists only one equation in the whole
			book and hand waves over the rest. If you don't trust him, check out
			his other book{' '}
			<a href="https://www.amazon.com/Reality-Not-What-Seems-Journey/dp/0735213925">
				<i>Reality is Not What it Seems</i>
			</a>
			, which is an exploration of his pitched concept of quantum loop
			gravity. Unless you're a seasoned physicist, you will not question
			his background on the subject.
		</P>

		<P>
			Benedict Cumberbatch reads the audiobook, and that's probably by
			design. The ideas behind the book should be accessible to everyone
			and they shouldn't need to be read by a scientific expert. A month
			after reading this book, the main thing that I can reflect back upon
			is how this book comes across as ontological. Some big questions are
			proposed and that's all there really is to this, because there are
			no truly agreed upon answers.
		</P>

		<P>I'll try to list a few of them.</P>

		<Idea>
			<ul>
				<li>
					What is the future and what makes it different from the
					past?
				</li>
				<li>Does time really exist?</li>
				<li>What is now? What does living right now mean?</li>
				<li>What does it mean to be "present" in this moment?</li>
				<li>
					Einstein showed that time and space are relative. So are we
					really living in the same time?
				</li>
				<li>
					Where does memory come from? How do our minds create the
					concept of time?
				</li>
				<li>
					Given that the universe is so old, is there even time? We
					are all living in the blink of an eye when you consider the
					lifetime of the universe.
				</li>
				<li>
					How does language affect our perception of time, past and
					future?
				</li>
				<li>
					What does entropy actually mean in terms of
					time/reality/energy and its importance?
				</li>
				<li>
					Can we live with the understanding of the fourth dimension -
					with time as the fourth cartesian coordinate?{' '}
				</li>
				<li>
					How does the fifth dimension open our perspectives about the
					multiverse and the multidimensionality of things?
				</li>
			</ul>
		</Idea>

		<P>
			Clearly, some deep stuff. But for me, that's also{' '}
			<b>the best kind of stuff.</b> Physics can wildly, maddeningly, and
			beautifully open and add to your perspective as to what all of{' '}
			<i>this</i> really is.
		</P>

		<TLDR>
			Rovelli wants you to take on the relatively common worldview amongst
			advanced degree mathematical physicists - that time itself is an
			illusion. Like how Ludwig Wittgenstein once described, he
			understands that the language that we use to describe things is the
			limits of our understanding of them. In this case, we're discussing
			time. Time is mysterious and has always been mysterious - but if we
			use teachings from modern day physics, we can develop a better
			language for it. This could unlock some of the deepest truths that
			we could possibly fathom.
		</TLDR>

		<FR>
			<UL>
				<ULI>
					<a
						href="http://nautil.us/blog/forget-everything-you-think-you-know-about-time"
						target="_blank"
					>
						Forget everything you know about time
					</a>{' '}
				</ULI>

				<ULI>
					<a
						href="http://nautil.us/issue/36/aging/to-understand-your-past-look-to-your-future"
						target="_blank"
					>
						To Understand Your Past, Look to Your Future
					</a>{' '}
				</ULI>

				<ULI>
					<a
						href="http://nautil.us/issue/64/the-unseen/the-end-of-time"
						target="_blank"
					>
						The End of Time
					</a>{' '}
				</ULI>

				<ULI>
					<a
						href="https://neurosciencenews.com/time-perception-9771/"
						target="_blank"
					>
						Time Perception in the brain
					</a>{' '}
				</ULI>

				<ULI>
					<a
						href="http://nautil.us/issue/64/the-unseen/geology-makes-you-time_literate/"
						target="_blank"
					>
						The unseen geology makes you time literate
					</a>{' '}
				</ULI>
			</UL>
		</FR>
	</Post>
));
