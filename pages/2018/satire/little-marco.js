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
			<title>Little Marco Hires Personal Prayer Trainer</title>
		</Head>

		<Title>Little Marco Hires Personal Prayer Trainer</Title>

		<Meta date="February 15th, 2018" views={views} />

        <Figure >
            <Image src="/static/marco-rubio.jpg" width={300}/>
        </Figure>

        <P>
            FLORIDA -- Following a traumatic day of a school shooting in Parkland, Florida where 17 students were killed and 14 more were injured, Senator Marco Rubio, otherwise known as "Little Marco," could be found on his knees with sweat bullets dripping down his face, crying the psalms of John out loud in full volume. 
        </P>
        
        <div
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
            <TwitterTweetEmbed tweetId="964085509025878017" />    
        </div>
        
        <P>
            Also heard in the room were shouts from Little Marco's new personal prayer trainer, Big Prayer Nick, whom Little Marco had hired in response to the devastating tragedy. "MORE PASSION! AND MORE THANK YOUS FOR OUR LORD AND SAVIOR!!"
        </P>

        <P>
            "I just need to pray harder. These people, these kids, they are counting on me to pray harder!" he said. "This can't happen again. I know in my heart of hearts that this will never happen again. My prayers will be bigger and stronger than ever." 
        </P>

	</Post>
));
