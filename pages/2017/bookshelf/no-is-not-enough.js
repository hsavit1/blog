import Head from 'next/head';
import Post from '../../../layouts/post';
import Meta from '../../../components/post/meta';
import Quote from '../../../components/post/quote';
import P from '../../../components/post/paragraph';
import Title from '../../../components/post/title';
import TLDR from '../../../components/post/tldr';
import Subtitle from '../../../components/post/subtitle';
import FR from '../../../components/post/further-reading';
import UL, { LI as ULI } from '../../../components/post/bullets-list';
import withViews from '../../../lib/with-views';

export default withViews(({ views }) => (
	<Post>
		<Head>
			<title>No is Not Enough</title>
		</Head>
		<Title>No Is Not Enough: Defeating the New Shock Politics </Title>
		<Meta date="December 12th, 2017" views={views} />
		<Subtitle>Author: Naomi Klein</Subtitle>

		<P>
			Naomi Klein has been fighting for change for quite some time.
			Clearly she's seen enough - hence the title of her book{' '}
			<i>No is Not Enough</i>. She paints a picture of the culture of
			cruelty perpetuated by the Trump administration and makes the point
			that this administration is far more sinister than that of any
			previous administration.
		</P>

		<P>
			The title is designed to spur action from a generation of young
			people who have, by design, been swamped with endless amounts of
			disinformation, misinformation, and misdirection. Parts of the
			public sector were handed off to the corporate free market, coupled
			with the commodification of everything, and the culture of
			dissatisfaction that this is premised on (where growth is the only
			virtue, and growth requires the endless production of new needs, and
			new needs require the production of desires we never had before, and
			these desires can only be desires if they produce in us the feeling
			of being dissatisfied with whatever we have, and more. Clearly, we
			need action because the landscape continues to be more and more
			adversarial against regular people.
		</P>

		<P>
			Klein uses the first half of this book to apply lessons learned from
			her other writings - <i>The Shock Doctrine</i> and <i>No Logo</i>.{' '}
			<i>No Logo</i>, Klien's first book, was about how mega companies no
			longer use traditional forms of advertising to establish their
			presence. Companies like Gatorade will find ways to ingrain
			themselves into your psyche without even saying who they are by
			associating themselves with people who embody their style and their
			message. In the <i>Shock Doctrine</i> she argues that neoliberal
			free market policies have risen to prominence in some developed
			countries because of a deliberate strategy of "shock therapy. It's a
			story of how corporate giants will wage chaos with the eventual goal
			of creating a ubiquitous presence that we ultimately accept.
		</P>

		<P>
			Now you might see why Klein is so outspoken right now. The same
			things that she has written about are happening again - except that
			the name brand that has trojan horsed itself into the American
			psyche is the Trump brand. Trump has made a career of positioning
			himself as a "successful" person - to the point where, the
			uninformed will just accept whatever he says as fact. Trump has
			engendered a new kind of insidious following - one in which the
			people do not, under any circumstances, question his tactics.
		</P>

		<P>
			The title is called "No is Not Enough" because we simply have no
			time left in fighting this. Klein devotes a significant amount of
			time to writing about how we can organize to subvert this perpetual
			narrative before the consequences become even deadlier. Like Henry
			Giroux, Klein wants sub movements to unite in a much larger
			movement. She attempts to find some universal truths behind the
			unique individual movements of various disparate issues: the
			problems from the provision of health care, to improved food quality
			and supply, to rights for refugees, to an end of the slaughter that
			causes refugees, to black lives matter, to stopping environmental
			destruction, to the crisis of systemic sexism, to removing the
			threat of nuclear war, and on and on and on.
		</P>

		<TLDR>
			The problem is our lack of agency. The young generations of liberals
			are too quick to give in and are not willing to put up a continuous
			fight against the politicians who spend their days trying to take
			away from the people who need the most help in favor of the wealthy.
			Young people need to organize and unite, and they need to do it
			before we're all dead and no longer able.
		</TLDR>

		<FR>
			<UL>
				<ULI>
					<a
						href="https://theintercept.com/staff/naomi-klein/"
						target="_blank"
					>
						The Intercept
					</a>{' '}
				</ULI>

				<ULI>
					<a
						href="https://en.wikipedia.org/wiki/No_Logo"
						target="_blank"
					>
						No Logo
					</a>{' '}
				</ULI>

				<ULI>
					<a
						href="https://thischangeseverything.org/"
						target="_blank"
					>
						This Changes Everything - Capitalism vs the Climate
					</a>{' '}
				</ULI>

				<ULI>
					<a
						href="https://en.wikipedia.org/wiki/The_Shock_Doctrine"
						target="_blank"
					>
						The Shock Doctrine
					</a>{' '}
				</ULI>
			</UL>
		</FR>
	</Post>
));
