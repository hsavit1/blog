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
      <title>Humans came so close, but Failed, Epically</title>
    </Head>
    <Title>Humans came so close, but Failed, Epically</Title>
    <Subtitle>
      It's a shame that humanity has not taken on this final hurdle.
    </Subtitle>
    <Meta date="April 25th, 2019" views={views} />

    <TLDR>
      Humanity could not organize itself effectively enough to escape the weight
      of its own omnipresent existence. We came so close to being able to do so,
      but due to recent "advances" in media technology and government, we
      distanced ourselves from the seriousness of these problems. Most of us
      sadistically put fingers in our ears and turned our shoulders when the
      problem threw itself into our purview. And American politics encouraged us
      to look away.
    </TLDR>

    {/* intro */}
    <P>
      The severity of this crisis is so clear, yet we cannot figure out how to
      create collective action to take it on. Climate change will lead to human
      extinction within the next few hundred years, and make our current lives
      much more difficult over the next few decades. Unfortunately, our
      evolution as a species was not effective enough to give weight to problems
      that we are going to face decades down the road.
      <Ref id="1" />
    </P>

    <Quote />

    <P>
      I say this in jest, of course. We have all of the tools to be able to
      understand that this crisis is as serious as it really is. Scientists have
      painted a dire picture of the reality that we are going to experience.
      It's so real that it is also unreal; unreal because we won't even be able
      to experience the reality of it - we'll be either dead or living in an
      apocalyptic state when the reality hits.
    </P>

    <P>
      It's a joke that we are falling victim to the political and the
      technocratic classes that are perpetuating this problem. Injustices are so
      pervasive that the climate problem has taken a backseat in our collective
      consciousness. It doesn't need to be this way. We have so many respectable
      minds that are painting the picture of what the future is going to look
      like. Perhaps it could be better if we had evolved with an ability to
      weigh our future suffering with a proper orders of magnitude. But that
      evolution is never going to happen.
    </P>

    <P>
      We need action <i>now</i>. The mass inundation is killing every living
      thing on this earth. To salvage what we have, we must somehow invigorate
      the masses to realize the scale of this problem, and their power to change
      its course. We do not need political scoring points that are baseless and
      create measured, incremental progress. Instead, we need to treat this for
      what it seriously is: an <i>emergency</i>.
    </P>

    <Idea>
      Our collective climate amnesia is killing everything. Let's treat this
      like the emergency that it is.
    </Idea>

    <FootNotes>
      <Note id="1">
        <a href="https://www.ipcc.ch/report/sr15/" target="_blank">
          ipcc Intergovernmental Panel on Climate Change Special Report
        </a>
        - Global Warming of 1.5 °C: an IPCC special report on the impacts of
        global warming of 1.5 °C above pre-industrial levels and related global
        greenhouse gas emission pathways, in the context of strengthening the
        global response to the threat of climate change, sustainable
        development, and efforts to eradicate poverty
      </Note>

      <Note id="2">
        <a href="https://www.gov.ca.gov/2018/10/07/ipccreport/" target="_blank">
          Governor Brown Issues Statement on New UN Intergovernmental Panel on
          Climate Change Report
        </a>
        - California Govenor Jerry Brown's press statement on the climate report
      </Note>
    </FootNotes>

    <FR title="Further Reading">
      <UL>
        <ULI>
          <a
            href="http://nymag.com/intelligencer/2018/10/un-says-climate-genocide-coming-but-its-worse-than-that.html/"
            target="_blank"
          >
            UN Says Climate Genocide Is Coming. It’s Actually Worse Than That.
          </a>
        </ULI>

        <ULI>
          <a
            href="https://www.vox.com/2018/10/10/17952334/climate-change-global-warming-un-ipcc-report-solutions-carbon-tax-electric-vehicles"
            target="_blank"
          >
            10 ways to accelerate progress against climate change
          </a>
        </ULI>

        <ULI>
          <a
            href="https://www.newyorker.com/magazine/2018/10/15/how-to-write-about-a-vanishing-world"
            target="_blank"
          >
            How to Write About a Vanishing World
          </a>{" "}
          - Scientists chronicling ecological destruction must confront the loss
          of their life’s work and our planet’s riches.
        </ULI>
      </UL>
    </FR>
  </Post>
));
