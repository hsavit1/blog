import Head from "next/head";
import Post from "../../../layouts/post";
import Meta from "../../../components/post/meta";
import Quote from "../../../components/post/quote";
import P from "../../../components/post/paragraph";
import Title from "../../../components/post/title";
import Subtitle from "../../../components/post/subtitle";
import TLDR from "../../../components/post/tldr";
import BIGQ from "../../../components/post/big-question";
import Idea from "../../../components/post/idea";
import UL, { LI as ULI } from "../../../components/post/bullets-list";
import Figure, { Image, SideBySide } from "../../../components/post/figure";
// import { TwitterTweetEmbed } from 'react-twitter-embed';

import withViews from "../../../lib/with-views";

export default withViews(({ views }) => (
  <Post>
    <Head>
      <title>Trump Brags Openly about Matthew Whitaker's Bigly Juicing</title>
    </Head>

    <Title>Trump Brags Openly about Matthew Whitaker's Bigly Juicing</Title>

    <Meta date="November  15th, 2018" views={views} />

    <P>
      WASHINGTON D.C. -- Insiders at the White House claim that "the President
      has been biting his fingernails about this one all week." What they're
      referring to is the confirmation of newly appointed Attorney General
      replacement Matthew Whitaker.
    </P>
  </Post>
));
