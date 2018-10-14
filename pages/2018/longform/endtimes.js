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
      <title>Endtimes: Confronting the Reality of a Climate Endgame</title>
    </Head>
    <Title>Endtimes: Confronting the Reality of a Climate Endgame</Title>
    <Subtitle>
      Calling all people of the world: there is a war going on and the time to
      act is NOW.
    </Subtitle>
    <Meta date="October 9th, 2018" views={views} />

    <TLDR>
      The latest UN climate reports shows that, unless we are comfortable with
      witnessing the <b>termination of the human species</b>, we have no time
      left for complacency. Will we remain stubborn and comfortable in the face
      of cataclysmic disaster or will we seriously consider stepping out of our
      comfort zones for the sake of humanity and all of its future descendants?
    </TLDR>

    {/* intro */}
    <P>
      Unless we as a society can mobilize immediately and at an unprecedented
      pace and scale, certain disaster is right around the corner. The latest
      reports coming from the United Nations spell global temperature rises to
      be unstoppable by the year 2030 if we continue at the pace that we are on
      now. <Ref id="1" />
    </P>

    <div
      style={{
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        "flex-direction": "column",
        "margin-top": 0,
        "margin-bottom": 0,
        "margin-left": 0,
        "margin-right": 0
      }}
    >
      <TwitterTweetEmbed tweetId="1049286953244524545" />
    </div>

    <P>
      What are we as a society going to do about it? And what are we as
      individual people going to do to pitch into the fight? In order to help
      frame this question, which might I add, is <i>SERIOUSLY INCONVENIENT</i>,
      I ask a moral question.
    </P>

    <Quote>
      When everything that you know is going to surely die, what else is there
      left for you to do but to pitch in the fight against the climate threat?
    </Quote>

    <P>
      Most people do not look into the future in the way that I do. Maybe it's
      because of my obsession with studying time, quantum mechanics, and higher
      dimensional spaces. I don't know. But I believe that my perspective can
      help other people see the future differently. It's really not that hard if
      you try, so I beg of you to read on.
    </P>

    <P>
      Physicists do not buy into the concept of construct of time. We are living
      in the past just as much as we are living in the future. There is no
      "now". We exist in the world and we will continue to exist in the world
      until our body is no longer able to fight against the entropy induced
      decay of our biological system. Unless you plan on dying today, you will
      live in the future. Not caring about the future means that you don't
      understand what it means to care about your own existence.
    </P>

    <P>
      You might react just as many do to this: "I don't care, because by the
      time that total disaster comes, I will already be dead."
    </P>

    <P>
      This is partly true. Yes, you will be dead at some point. But your
      children or grandchildren won't be. But they will be suffering as the
      planet that they will be born into will surely be engulfed in apocalyptic
      world war over limited amounts of resources on a planet that is rapidly
      heating up.
    </P>

    <Idea>
      Think about your future. You are yourself in the future. You're also your
      grandchildren - they're the biology of you that continues to live on.
      That's how humans continue to occupy the planet. By doing nothing about
      climate change now, you are watching your future self suffer, and you
      signal that you are genuinely okay with that. If you're not comfortable
      with your future self living in a hell on Earth, seriously reconsider what
      your real problems are now, and tackle those first, with the knowledge
      that your future self is begging you to do just that.
    </Idea>

    <P>
      If you're not pitching into the fight, you are radically turning your
      shoulder at the face of certain hell for your future self. It doesn't have
      to be this way. If we can stave climate change off a bit longer, we can
      extend the amount of time that humanity has to figure something better out
      to ensure the survival of the species. But we need your help, NOW.
    </P>

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
