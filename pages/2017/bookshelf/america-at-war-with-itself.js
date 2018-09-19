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
import Podcasts from '../../../components/post/podcasts';
import Videos from '../../../components/post/videos';
import withViews from '../../../lib/with-views';

export default withViews(({ views }) => (
	<Post>
		<Head>
			<title>America at War with Itself</title>
		</Head>
		<Title>America at War with Itself </Title>
		<Meta date="November 11, 2017" views={views} />
		<Subtitle>Author: Henry Giroux</Subtitle>

		<P>
			This is, without question, the most galvanizing text that I've ever
			come across. I've read lots of Chomsky and plenty of scientific
			philosophers, but none of them paint a picture of the world today
			like Dr. Giroux can. No book has made me want to get out there in
			the world like this book has. Perhaps because this subject is the
			current spirit of the times - America right now over the past 3
			years has been total political lunacy and theatre. At least, that
			was my perception. The real story is that it has been this way for
			some time.
		</P>

		<P>
			There are some incredible quotes in this book. I'm really just
			cherry picking by listing only a select few here. To do the book
			justice, I think it's more important to feel the need to go out in
			the world and perform a civic duty to your community - educate in
			some way. Break the chains are crippling the dying communities of
			America in this era.
		</P>

		<P>
			There is just so much substance packed into this short book that
			it's disrespectful to the man behind it for me to try to paraphrase
			the whole text. I want to emphasize that you should go out and read
			it.
		</P>

		<P>
			Regardless, there are some key messages that you should take home
			and think about, regardless of whether or not you read it.
		</P>

		<TLDR>
			America is at war with itself because the American government and
			capitalist machine is adversarial towards the betterment of it's
			people. Trump is a just a standard Republican and is symptom of a
			much deeper problem in American culture. Hyper-celebritism,
			hyper-masculinity, the celebration of money over civics and
			community, the dumbing down of curricula in schools, the growing
			fascist movement and authoritarian state, casino capitalism, and
			exacerbated corporatism are all playing a part in destroying the
			American psyche, as we march forward towards the fabled "it can
			never happen here" totalitarian state once described by Hannah
			Arendt during the days of post Nazi Germany.
		</TLDR>

		<P>
			Giroux points out that the solution to our growing problem is to
			somehow inject some kind of new social consciousness into people.
			Most people are so isolated now that we as a whole are completely
			morally bankrupt. We are a culture that doesn't bat an eye at the
			face of cruelty.
		</P>

		<Quote>
			"What is the relationship between learning and social change? What
			does it mean to know something? How are different forms of knowledge
			valued? How should one align their desires? Pedagogy is always about
			power, because it cannot be separated from how subjectivities are
			formed, desires mobilized, how some experiences are legitmized and
			others are not, or how some knowledge is considered acceptable while
			other knowledge is excluded from the curriculum... pedagogy is
			critical to social change because it is about altering the way that
			people see things."
		</Quote>

		<Quote>
			"The 2016 presidential contest increasingly resembled reality TV
			shows such as <i>American Idol</i>, where the superficial trumps
			substance and the audience appears to communicate with the spectacle
			by voting."
		</Quote>

		<Quote>
			"Hannah Arendt was right in stating that 'the aim of totalitarian
			education has never been to instill convictions but to destroy the
			capacity to form any,' suggesting that totalitarianism was as much
			about the production of thoughtlessness as it was about the
			imposition of brute force, gaping innequality, corporatism, and the
			spectacle of violence... Totalitarianism is a complex system that is
			deeply woven in American ideology, governance, law enforcement, and
			policy."
		</Quote>

		<Quote>
			"A society that chooses to incarcerate people rather than to educate
			them is a society that is at war with itself."
		</Quote>

		<Quote>
			"Americans are now living in an age of organized forgetting, an age in which a flight from responsibility is measured in increasing acts of corruption, violence, trauma, and the struggle to survive."
		</Quote>

		<Quote>
			"...our children are increasingly forced to live in theatres of violence, injury, terror, and trauma."
		</Quote>

    <Quote>
      "...economics cannot drive politics, violence cannot be the organizing principle of the state, and markets cannot define the present and the future."
    </Quote>

    <P>
      Giroux wants the restoration of our collective cultural memory. As the education system continues to disintegrate and as America's education system continues to fall on all international rankings, and as our university systems continue to resemble instruments of corporations, our sense of collective history and historical memory is becoming wiped out. Nobody understands the machine that they are a part of because history is not preached in our culture. Our culture pushes us towards isolation in the worst way, where we are gears in a money producing machine instead of fundamental pieces of our community. After all, democracy is something that needs to be worked towards. Democracy itself is a system that demands people engage with it - and people nowadays are not doing that in the slightest. No wonder why America's voting percentages are so low, even as the stakes become so much higher.
    </P>

    <Quote>
      "The future now appears to us as a terrain of viable escape except to draw upon the logics of those predatory formations that put us there in the first place. Lacking an alternative image of the world, we are merely requested to see it as a predestined and catastrophically fated. This is revealing of the nihilism of our times that forces us to accept that the only world conceivable is the one we are currently forced to endure: a world that forces us all to become witness to its spectacles of violence and demands we accept that all things are ultimately precarious by default."
    </Quote>

    <Quote>
      "It is time to remind ourselves that critical ideas are a matter of critical importance. Those public spheres in which critical thought is nurtured provide the minimal conditions for people to become worldly, take home important social issues, an alleviate human suffering in order to make more equatable and just societies."
    </Quote>

    <P>
      {/* A prominent feeling of mine after reading this is just how energized Giroux is, yet so sick of it. He has stringed together so many seemingly disparate ideas to shatter what is the accepted American reality. I can tell he's tired of this. Nobody can put all of the quotable things together like he has without feeling angry for a long time.    */}
    </P>

		<FR>
			<UL>
				<ULI>
					<a
						href="https://www.amazon.com/Zombie-Politics-Culture-Casino-Capitalism/dp/1433127199"
						target="_blank"
					>
						Zombie Politics and Culture in the Age of Casino
						Capitalism
					</a>{' '}
				</ULI>
			</UL>
		</FR>

		<Videos>
			<UL>
				<ULI>
					<a href="https://vimeo.com/80047135" target="_blank">
						Henry Giroux on ‘Zombie’ Politics
					</a>{' '}
				</ULI>
			</UL>
		</Videos>
	</Post>
));
