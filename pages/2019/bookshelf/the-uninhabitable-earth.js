import Head from "next/head";
import Post from "../../../layouts/post";
import Meta from "../../../components/post/meta";
import Quote from "../../../components/post/quote";
import P from "../../../components/post/paragraph";
import Title from "../../../components/post/title";
import TLDR from "../../../components/post/tldr";
import Subtitle from "../../../components/post/subtitle";
import Figure, { Image } from "../../../components/post/figure";
import FR from "../../../components/post/further-reading";
import Podcasts from "../../../components/post/podcasts";
import UL, { LI as ULI } from "../../../components/post/bullets-list";

import withViews from "../../../lib/with-views";

export default withViews(({ views }) => (
  <Post>
    <Head>
      <title>The Uninhabitable Earth</title>
    </Head>
    <Title>The Uninhabitable Earth: Life After Warming</Title>
    <Meta date="March 23rd, 2019" views={views} />
    <Subtitle>Author: David Wallace-Wells</Subtitle>

    <TLDR>
      We are so incredibly close to living on a planet that is completely
      uninhabitable. By incredibly close, I mean that it's <b>already</b>{" "}
      completely uninhabitable for many species - hence, why we are seeing
      extinctions that are occurring at a rate that is 1000x faster than we've
      ever seen before. Climate change will affect all of us - that may be by
      disease, war, the economy, or by food shortages. The fact that we do what
      amounts to absolutely nothing in spite of this is incredibly disheartening
      for those of us who can read the evidence and understand that it will all
      come to an end. It didn't have to be this way. It doesn't have to be this
      way.
    </TLDR>

    <P>
      This book has all of the evidence for you to be alarmed. I've never felt
      more shaken about the reality of climate change than now, right after I've
      read this book. It doesn't make sense for me to try to pull out statistics
      that were more interesting to me, because they all tell an important part
      of what is happening.
    </P>

    <P>
      We could have staved off most of the climate disaster if we elected Al
      Gore in 2000 and actually started pushing his ideas and addressed the
      problem in a serious way. Instead, we have embraced complete lunacy and
      individualist greed.
    </P>

    <P>
      Humans occupy 94% of all living animal biomass on this planet. We are
      clearly the cause of all of what is happening. And we live in a bubble
      that is so deep that it is preventing us from seeing and addressing the
      issue at large. We are collectively rendered useless by pervasive climate amnesia. 
    </P>

    <FR title="Further Reading">
      <UL>
        <ULI>
          <a
            href="http://nymag.com/intelligencer/2017/07/climate-change-earth-too-hot-for-humans.html"
            target="_blank"
          >
            The Uninhabitable Earth
          </a>{" "}
          - The New York Magazine article that got so many reads that it led to
          the creation of the full book.
        </ULI>
      </UL>
    </FR>
  </Post>
));
