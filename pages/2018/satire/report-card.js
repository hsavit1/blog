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

import withViews from '../../../lib/with-views';

export default withViews(({ views }) => (
	<Post>
		<Head>
			<title>Voters Demand Release of Stable Genius' 3rd grade Report Card</title>
		</Head>

		<Title>Voters Demand Release of Stable Genius' 3rd grade Report Card</Title>

		<Meta date="January 18th, 2018" views={views} />

        <Figure desc="Photograph by Chris Kleponis / Getty">
            <Image src="/static/stable-genius.jpg" />
        </Figure>

        <P>
            WASHINGTON -- One day after President Donald J. Trump released his <i>Highly-Aniticipated 2017 Fake News Media Awards</i>, and three days after Dr. Ronny Jackson revealed that Trump easily passed his cognitive exam with a perfect score, voters from around the country are firing back.
        </P>

        <P>
            "You know one thing that deserves a fake news award that didn't get one? This whole 'I'm a stable genius' thing," one source said. "I don't buy it." 
        </P>

        <P>
            The ensuing discussion of the President's mental fitness has escalated onto social media, under the hashtag #ReleaseTheReportCards. CNN anchor Anderson Cooper has argued that the release of the President's third grade report cards would be helpful for determining whether or not the President has been mentally stable and consistent throughout his life. Additionally, a genius level IQ would certainly have no problem with third grade assessment.
        </P>

        <P>
            "We don't really know if the President made it through the third grade," another source said. "I want proof. But I also wouldn't be surpirsed if daddy gave him a couple of hundred lunch money bucks to pay off his teachers. Nevertheless I want to see the report cards."
        </P>

        <P>
            When asked about the report cards, Sarah Huckabee Sanders cited that "when you look around the oval office, you can see that the President has some of the finest and most colorful crayon drawings I've ever seen. There is absolutely no way that the President did not pass the third grade with perfect marks."  
        </P>

        <P>
            However, when pressed about why the President doesn't just release the report cards and put the issue to rest, Sanders said that the President will not be releasing the report cards at this time, or ever. 
        </P>

        <P>
            "He feels no need to provide any more evidence of his superior genius," Sanders abruptly replied. "The President has done more work to make America great again than any of the other presidents in history, and you should all just accept that and move on with your bullshit lives already." 
        </P>

        <P>
            Allegedly, insider information has leaked about the supposed crayon masterpieces perched on a mostly empty oval office bookshelf. The report cites a simple stick figure standing on a beach under a sun with two disproportionately large circles as boobs.
        </P>

	</Post>
));
