import Head from "next/head";
import Post from "../../../layouts/post";
import Meta from "../../../components/post/meta";
import Quote from "../../../components/post/quote";
import P from "../../../components/post/paragraph";
import Title from "../../../components/post/title";
import TLDR from "../../../components/post/tldr";
import Subtitle from "../../../components/post/subtitle";

import FR from "../../../components/post/further-reading";
import Podcasts from "../../../components/post/podcasts";
import UL, { LI as ULI } from "../../../components/post/bullets-list";

import withViews from "../../../lib/with-views";

export default withViews(({ views }) => (
  <Post>
    <Head>
      <title>
        Lost Connections: Unlocking the Real Causes of Depression and Anxiety
      </title>
    </Head>
    <Title>
      Lost Connections: Unlocking the Real Causes of Depression and Anxiety
    </Title>
    <Meta date="November 21st, 2018" views={views} />
    <Subtitle>Author: Johann Hari </Subtitle>

    <TLDR>
      We have an addiction to quick answers and easy solutions. Prescribing
      medication like Prozac and other kinds of SSRIs are mostly ineffective,
      and at worst, even more destructive than doing nothing at all. The
      solution to depression oftentimes is fixing the situation that the person
      has trapped themselves in. You have to break the person's addiction to
      their ego, and the person's addiction to their broken way of living. If
      you see someone in agony, show some sympathy, and see it as your moral
      obligation to try to re-establish their relationship with society.
    </TLDR>

    <FR title="Further Reading">
      <UL>
        <ULI>
          <a
            href="https://www.thecut.com/2018/05/microdosing-guide-and-explainer.html"
            target="_blank"
          >
            Microdosing’s Micromoment
          </a>{" "}
          - Consuming crumb-size amounts of psychedelics — not to get high but
          to feel more focused and creative and present — has moved a tiny bit
          mainstream.
        </ULI>
      </UL>
    </FR>

    <Podcasts>
      <UL>
        <ULI>
          <a href="https://tim.blog/2018/05/06/michael-pollan-how-to-change-your-mind/">
            {" "}
            Michael Pollan — Exploring The New Science of Psychedelics
          </a>
        </ULI>
      </UL>
    </Podcasts>
  </Post>
));
