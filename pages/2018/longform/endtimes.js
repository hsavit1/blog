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
import { Ref, FootNotes, Note } from '../../../components/post/footnotes';
import FR from '../../../components/post/further-reading';
import { TwitterTweetEmbed } from 'react-twitter-embed';

import withViews from '../../../lib/with-views';

export default withViews(({ views }) => (
	<Post>
		<Head>
			<title>
				Endtimes: Confronting the Reality of a Climate Endgame
			</title>
		</Head>
		<Title>Endtimes: Confronting the Reality of a Climate Endgame</Title>
		<Subtitle>
			Calling all people of the world: the time to act is NOW.
		</Subtitle>
		<Meta date="October 9th, 2018" views={views} />

		<TLDR>
			The latest UN climate reports shows that, unless we are comfortable
			with witnessing the <b>termination of the human species</b>, we have
			no time left for complacency. Will we remain stubborn and
			comfortable in the face of cataclysmic disaster or will we seriously
			consider stepping out of our comfort zones for the sake of humanity?
		</TLDR>

		{/* intro */}
		<P>
			Unless we as a society can mobilize immediately and at an
			unprecedented pace and scale, certain disaster is right around the
			corner. The latest reports coming from the United Nations spell
			global temperature rises to be unstoppable by the year 2030 if we
			continue at the pace that we are on now. <Ref id="1" />
		</P>

		{/* <div
			style={{
				display: 'flex',
				'justify-content': 'center',
				'align-items': 'center',
				'flex-direction': 'column',
				'margin-top': 0,
				'margin-bottom': 0,
				'margin-left': 0,
				'margin-right': 0,
			}}
		>
			<TwitterTweetEmbed tweetId="1049286953244524545" />
		</div> */}

		<P>
			What are we as a society going to do about it? And what are we as
			individual people going to do to pitch into the fight? In order to
			help frame this question, which might I add, is{' '}
			<i>SERIOUSLY INCONVENIENT</i>, I ask a moral question.
		</P>

		<Quote>
			When everything that you know is going to surely die, what else is
			there left for you to do but to pitch in the fight against the
			climate threat?
		</Quote>

		<P>
			Most people do not look into the future in the way that I do. Maybe
			it's because of my background in studying time and quantum mechanics
			and higher dimensional spaces. I don't know. But I believe that my
			perspective can help other people see the future differently. It's
			really not that hard if you try, so I beg of you to read on.
		</P>

		<FootNotes>
			<Note id="1">
				<a href="https://www.ipcc.ch/report/sr15/" target="_blank">
					ipcc Intergovernmental Panel on Climate Change Special
					Report
				</a>
				- Global Warming of 1.5 °C: an IPCC special report on the
				impacts of global warming of 1.5 °C above pre-industrial levels
				and related global greenhouse gas emission pathways, in the
				context of strengthening the global response to the threat of
				climate change, sustainable development, and efforts to
				eradicate poverty
			</Note>

			<Note id="2">
				<a
					href="https://www.gov.ca.gov/2018/10/07/ipccreport/"
					target="_blank"
				>
					Governor Brown Issues Statement on New UN Intergovernmental
					Panel on Climate Change Report
				</a>
				- California Govenor Jerry Brown's press statement on the
				climate report
			</Note>
		</FootNotes>

		<FR title="Further Reading">
			<UL>
				<ULI>
					<a
						href="https://www.wired.com/2017/04/hey-computer-scientists-stop-hating-humanities/"
						target="_blank"
					>
						Hey, Computer Scientists! Stop Hating on the Humanities
					</a>
				</ULI>

				<ULI>
					<a
						href="https://www.huffingtonpost.com/david-h-bailey/why-science-needs-the-hum_b_12518484.html"
						target="_blank"
					>
						Why Science Needs the Humanities
					</a>
				</ULI>
			</UL>
		</FR>
	</Post>
));
