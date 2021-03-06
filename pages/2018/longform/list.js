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
import { Ref, FootNotes, Note } from "../../../components/post/footnotes";
import FR from "../../../components/post/further-reading";
import { TwitterTweetEmbed } from "react-twitter-embed";

import withViews from "../../../lib/with-views";

export default withViews(({ views }) => (
  <Post>
    <Head>
      <title>
        Giant List of Human Created Bullshit that Will Lead to Unprecedented
        Human and Ecological Genocide Unless Immediately Addressed
      </title>
    </Head>
    <Title>
      Giant List of Human Created Bullshit that Will Lead to Unprecedented Human
      and Ecological Genocide Unless Immediately Addressed
    </Title>
    <Subtitle>A list of the</Subtitle>
    <Meta date="October 9th, 2018" views={views} />
    <TLDR>
      <P>
        I am tired of being blindsided and emotionally paralyzed by countless
        media stories about how everything is suddenly going to total shit. This
        is reality of living in America in the year 2018. We are holding onto a
        figurative wheel of a bus that is driving straight into the Aushwitz of
        the 21st century if we don't dramatically take control of the wheel.
        Unfortunately, because everything is seemingly on fire, nobody knows
        what direction to turn to. Confusion, nihilism, and whataboustism are
        suffocating and preventing us from solving the problems that we need to
        solve to ensure the survival of life on Earth.
      </P>

      <P>
        I am actively putting this list together to categorically outline all of
        the human created reasons that the world is experiencing so much pain.
        Ideally this list will be read by the masses and galvanize them with an
        incredible energy that they will use to tackle these problems before the
        damage is irreversible.
      </P>
    </TLDR>

    <P>
      This is a living document. I will continuously add to and format this page
      so that it can serve as a quick reference.
    </P>

    <Idea>
      Think about your future. You are yourself in the future. You're also your
      grandkids - they're the biology of you that continues to live on. That's
      how humans continue to occupy the planet. By doing nothing about climate
      change now, you are watching your future self suffer, and you signal that
      you are genuinely okay with that. If you're not comfortable with living
      with your future self living in a hell on Earth, reconsider what your
      problems are now, and tailor them, knowing that your future self is
      begging you to do just that.
    </Idea>
    <P>
      If you're not pitching into the fight, you are radically turning your
      shoulder at the face of certain hell for your future self. It doesn't have
      to be this way. If we can stave climate change off a bit longer, we can
      extend the amount of time that humanity has to figure something better out
      to ensure the survival of the species. But we need your help, NOW.
    </P>
  </Post>
));
