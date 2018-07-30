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
import Figure, { Image } from '../../../components/post/figure';
import { TwitterTweetEmbed } from 'react-twitter-embed';

import withViews from '../../../lib/with-views';

export default withViews(({ views }) => (
	<Post>
		<Head>
			<title>Fox News Host Invites Zombie Hitler to Panel</title>
		</Head>

		<Title>Fox News Host Invites Zombie Hitler to Panel</Title>

		<Meta date="July 30th, 2018" views={views} />

        <Figure desc="Zombie Hitler made a brief appearance on yesterday's panel / Getty">
            <Image src="/static/zombie_hitler.jpg" />
        </Figure>

        <P>
            LOS ANGELES -- Regular pundits David Bossie and Alan Dershowitz were unavailable last night as they both had forgotten that they had a signed up for a late poker game with the Satanic Emperor of the Underworld and were dragged out of the newsroom by gargoyles of an interdimensional demonic chamber.
            In a frantic search for a new fresh Trump surrogate on last night's panel, Fox News anchor Sean Hannity was pleased to discover that Zombie Hitler had the night off and was available to speak on the panel on behalf of the 45th President.
        </P>

        <P>
            "His speech was a little rusty but that's understandable given that he spent all of those years buried in the ground and that worms were pouring out of his mouth. He's still pretty up to date when it comes to topics like the fake news mainstream media, the insane leftist cult, and border security. He's really an expert. We are happy to hear the voices of outsiders who can speak so lucidly on behalf of the president."
        </P>

        <P>
            After the program, Hannity and Zombie Hitler were able to play a little catch up on their personal lives. The zombie pundit was pleased to inform Hannity that Roger Ailes sends his warmest regards.  
        </P>

	</Post>
));
