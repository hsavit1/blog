import Head from 'next/head';
import Post from '../../../layouts/post';
import Meta from '../../../components/post/meta';
import Quote from '../../../components/post/quote';
import P from '../../../components/post/paragraph';
import Title from '../../../components/post/title';
import Subtitle from '../../../components/post/subtitle';
import TLDR from '../../../components/post/tldr';
import Idea from '../../../components/post/idea';
import Section from '../../../components/post/section';
import { Ref, FootNotes, Note } from '../../../components/post/footnotes';
import Figure, { Image } from '../../../components/post/figure';

import withViews from '../../../lib/with-views';
import { LI } from '../../../components/post/bullets-list';

export default withViews(({ views }) => (
	<Post>
		<Head>
			<title>Bitcoin's Climate Change Problem</title>
		</Head>

		<Title>Bitcoin's Climate Change Problem</Title>

		<Subtitle>
			
		</Subtitle>

		{/* <Meta date="January 17th, 2018" views={views} /> */}


        <UL>
            <LI>
                <a href='http://www.businessinsider.com/bitcoin-price-movement-explained-by-one-equation-fundstrat-tom-lee-metcalf-law-network-effect-2017-10'>Analyst says 94% of bitcoin's price movement over the past 4 years can be explained by one equation</a>

                This model is based on Metcalfe's law, which says the value of a network is proportional to the square of the number of users on the network
            </LI>
			
			<LI>
                {/* <a href='https://www.marketwatch.com/story/is-bitcoin-in-a-bubble-this-metric-suggests-theres-more-room-to-grow-2017-06-08'>Is bitcoin in a bubble? This metric suggests there’s more room to grow </a> */}

            </LI>
        </UL>


	</Post>
));
