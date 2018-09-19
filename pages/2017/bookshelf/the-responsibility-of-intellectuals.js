import Head from 'next/head';
import Post from '../../../layouts/post';
import Meta from '../../../components/post/meta';
import P from '../../../components/post/paragraph';
import Title from '../../../components/post/title';
import Subtitle from '../../../components/post/subtitle';
import Quote from '../../../components/post/quote';
import Idea from '../../../components/post/idea';
import TLDR from '../../../components/post/tldr';
import FR from '../../../components/post/further-reading';
import Videos from '../../../components/post/videos';
import UL, { LI as ULI } from '../../../components/post/bullets-list';
import withViews from '../../../lib/with-views';

export default withViews(({ views }) => (
	<Post>
		<Head>
			<title>The Responsibility of Intellectuals</title>
		</Head>
		<Title>The Responsibility of Intellectuals</Title>
		<Meta date="November 8, 2017" views={views} />

		<Subtitle>Author: Noam Chomsky</Subtitle>

		<Quote>
			"It is the responsibility of intellectuals to speak truth and expose
			lies."
		</Quote>

		<P>
			As a nineteen-year-old undergraduate in 1947, Noam Chomsky was
			deeply affected by articles about the responsibility of
			intellectuals written by Dwight Macdonald, an editor of Partisan
			Review and then of Politics. Twenty years later, as the Vietnam War
			was escalating, Chomsky turned to the question himself, noting that
			"intellectuals are in a position to expose the lies of governments"
			and to analyze their "often hidden intentions."
		</P>

		<Quote>
			"When we consider the responsibility of intellectuals, our basic
			concern must be their role in the creation and analysis of
			ideology."
		</Quote>

		<P>
			Clearly, Chomsky has a problem with most intellectuals in that they
			don't effectively channel their energies towards solving moral
			problems. 
		</P>

		<Quote>
			"Large gifts to Cuba and China might not succeed in alleviating the
			authoritarianism, but they are far more likely to help than lectures
			on democratic values."
		</Quote>

		<Quote>
			"If it is the responsibility of intellectuals to insist upon truth,
			then it is also their duty to see events in their historical
			perspective."
		</Quote>

		<Quote>
			"Since power tends to prevail, intellectuals who serve their
			governments are considered to be the responsible ones."
		</Quote>

		<Quote>
			"Privilege yields opportunity, and opportunity confers
			responsibilities."
		</Quote>

		<Quote>
			"One choice is to follow the path of integrity, wherever it may
			lead."
		</Quote>

		<Quote>
			"The long tradition of naiveté and self-righteousness that
			disfigures our intellectual history, however, must serve as a
			warning to the third world, if such a warning is needed, as to how
			our protestations of sincerity and benign intent are to be
			interpreted".
		</Quote>

		<P>
			The book refers to the actions and subservience of the intellectual
			class - technocrats and experts, to justify even the most atrocious
			of crimes, whereas opposition came from unlikely sources - on moral
			grounds, from "mathematicians, chemists, and psychologists". This
			was the case not only in the US, but also within the Soviet Union.
		</P>

		<P>
			We are facing a political body, the GOP, that is arguably more
			dangerous than either the Soviets or the Nazis. The GOP, with their
			undivided denial of truth and science-based evidence, would do
			absolutely nothing in the face of imminent danger. Concerning the
			GOP's denial of global warming, Chomsky writes that we are
		</P>

		<Quote>
			“racing as rapidly as possible to destruction of organized human
			life.”
		</Quote>

		<Idea>
			Thus the imperative to be an intellectual in this dangerous day and
			age should be greater than ever. If we want to keep the tribe of
			humanity alive then it will be up to intellectuals to stand up to
			the thoughtless, the unconcerned, the sadistic, the greedy, those
			that are living a life of moral amnesia, and expose them for who
			they really are. Those people tend to be in the most thoughtless and
			unconcerned party America has ever seen, the GOP.
		</Idea>

		<P>
			Chomsky obviously has held a storied career, even 50+ years after
			publishing this text. This text is one of rarer pieces that is not
			totally about pointing out problems or hypocrisies. Rather, the aim
			of this writing is to showcase what makes Chomsky tick. You see the
			forging of Chomsky's uniquely powerful moral philosophy. Even now at
			89 years old, he's still assuming his intellectual duty. His mind
			does not stop working, and there is something to be deeply admired
			there.
		</P>

		<TLDR>
			The Responsibility of Intellectuals is quite a short book - it's
			really just 2 essays. But in an effort to condense it even further,
			you can say that it is about the responsibility of the privileged
			intellectuals in society to challenge the unquestionable authority
			and assumed moral superiority of US imperialism. The US is not, by
			default, a moral authority; rather it is more often an amoral force
			that needs its intentions and actions interrogated and, ultimately,
			to be held accountable for its international terrorism.
		</TLDR>

		<FR>
			<UL>
				<ULI>
					<a
						href="https://www.salon.com/2017/02/11/noam-chomskys-responsibility-of-intellectuals-after-50-years-its-an-even-heavier-responsibility-now/"
						target="_blank"
					>
						Noam Chomsky’s “Responsibility of Intellectuals” after
						50 years: It’s an even heavier responsibility now
					</a>{' '}
				</ULI>
			</UL>
		</FR>

		<Videos>
			<UL>
				<ULI>
					<a
						href="https://upliftconnect.com/noam-chomsky-responsibility-intellectuals/"
						target="_blank"
					>
						Noam Chomsky on The Responsibility of ‘Intellectuals’
					</a>{' '}
				</ULI>
			</UL>
		</Videos>
	</Post>
));
