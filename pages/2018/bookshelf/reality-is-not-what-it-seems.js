import Head from 'next/head';
import Post from '../../../layouts/post';
import Meta from '../../../components/post/meta';
import Quote from '../../../components/post/quote';
import P from '../../../components/post/paragraph';
import Title from '../../../components/post/title';
import Subtitle from '../../../components/post/subtitle';
import TLDR from '../../../components/post/tldr';
import withViews from '../../../lib/with-views';

export default withViews(({ views }) => (
	<Post>
		<Head>
			<title>Reality is Not What it Seems</title>
		</Head>
		<Title>
			Reality is Not What it Seems - The Journey to Quantum Gravity
		</Title>
		<Meta date="June 21, 2018" views={views} />
		<Subtitle>Author: Carlo Rovelli</Subtitle>

		<P>
			The subject matter discussed in this book is really dense - Rovelli
			writes about the <b>ultimate</b> question in physics right now - the
			grand unifying question. What is the relation between quantum
			mechanics and gravity? This is what all of the knowledge we have in
			physics is coalescing into - this is, thousands of years of study
			worth.
		</P>

		<P>
			Rovelli chronicles the journey that physics has taken to get to
			where we are right now - on the brink of answering the big question.
			The story of how we got to this point is almost just as interesting
			as the answer to the question itself. The journey starts all the
			ancient Greece, where Thales of Miletus originally postulated about
			the atom.
		</P>

		<Quote>
			Experimentation and transformation in both art and science spring
			from the same root - to understand, to encapsulate the world. This
			is why I've ever found reductionism (and scientism) drearily
			limiting and worthily pompous - that utilitarian speculation over
			what art 'is for', that misapprehension of art as a kind of
			elaborate trickery, only readable in the light of neuroscience or
			physics. The best writers of fiction, artists, composers and
			scientists are, I've long felt, the ones who see the 'divide' as
			porous, and are open to findings in both great spheres of endeavour
			and experimentation.
		</Quote>

		<P>
			There is a great romanticism in the science of theoretical physics
			and the search for the ultimate answer to the ultimate question. Why
			is it that we need to ask such a question and what would it mean if
			we solve it?
		</P>

		<P>
			The nature of the topic is so abstract and so groundbreaking that
			asking these philosophical questions is elemental for finding the
			courage to answer to the scientific question.
		</P>

		<P>
			I will not attempt to regurgitate Rovelli's quantum loop gravity
			theory because even as a holder of a Bachelor's of Science in
			Mathematical Physics, I feel like it is out of my scope to write
			about this and I don't want to screw anything up. You'll have to
			read the book if you want an introduction to Rovelli's theory. Don't
			buy the audiobook - you'll want to see some of the visuals in the
			book as a reference. They'll be helpful for once he gets into the
			quantization of gravity.
		</P>

		<P>
			I suspect that this book will be more useful for those who want to
			look into what it means to be a theoretical physicist in this day
			and age. How do these physicists really think? You'd come to
			discover that physicists aren't your typical scientists - many of
			them have pondered arguably deeper and older questions than what
			most philosophers have - and unlike the philosophers they've emerged
			with axiomatic and experimental solutions. Yet, that doesn't mean
			that they ignore more romantic kinds of explanations of things.
		</P>

    <TLDR>
      A relatively quick yet tough read on modern physics starting with the Ancient Greeks and ending with Quantum Gravity. Physics is a dense subject matter, and answers to the ultimate question of quantum gravity do not come cheap. But if you are down to experience the euphoria of coming to an answer of a question that has plagued us for thousands of years, the question of "What is it that is holding us all together?" look no further. 
    </TLDR>
	</Post>
));
