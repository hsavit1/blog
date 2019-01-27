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
        Why do we even use Computers? Revisiting the Purpose of an Important and
        Dangerous Technology
      </title>
    </Head>
    <Title>
      Why do we even use Computers? Revisiting the Purpose of an Important and
      Dangerous Technology
    </Title>
    <Subtitle>
      As software continues to infiltrate itself into our pockets and our lives,
      it becomes a sociological game changer. Is it breaking civilization? I
      explore.
    </Subtitle>
    <Meta date="October 20th, 2018" views={views} />

    <TLDR>
      Computers are truth telling machines, and the software that runs on them
      helps us come closer to discovering what the actual truth is... if that's
      what our intent is. Hardly anyone uses these machines as they were
      originally intended, and that dangerous misuse is creating a culture of
      collective apathy in a time when humanity needs collective agency.
    </TLDR>

    {/* intro */}
    <P>
      Super computers are widespread nowadays - in case you forgot, yes, you've
      got one in your pocket. Your smartphone is a supercomputer, hell, even
      your microwave could be a supercomputer. Computers and internet networks
      have made information transfer happen in ways that have been historically
      impossible. Yet the immediacy of information has not exactly propelled
      humanity to prosperity. The technology works as it should, yet we’re not
      actually seeing the marked improvements in society and culture that one
      would expect. Around the world, from Europe to North and South America,
      we’re seeing rises in the occurrences of fascism
      <Ref id="1" />, we’re not seeing the necessary structural mobilization
      needed to tackle climate change, and we’re seeing a new complacent
      generation of young people. Software's ubiquitous place in society could
      be a key talking for when describing what has gone wrong with our
      collective lack of agency in this era.
    </P>

    <P>
      As a person with formal training in the arts of mathematics, physics,
      computer sciences, and software development, here’s my interpretation of
      what computers are useful for: computers were designed by mathematicians
      to be calculating machines that could deliver mathematical truths through
      digitally calculating what was considered arduous and tedious. On top of
      computers,{" "}
      <a href="https://en.wikipedia.org/wiki/Tim_Berners-Lee" target="_blank">
        Tim-Berners Lee
      </a>
      , a CERN contract engineer, created the HTTP protocol, to easily share
      these uniquely discovered truths between scientists, who each had access
      to their own computing machines. This HTTP protocol would become the
      backbone of the internet.
    </P>

    <Quote>
      Software helps us arrive at the information we need, quicker. Of course,
      that's only useful if we’re actually looking for answers.
    </Quote>

    <P>
      With more than a billion smartphone users, it's tough to imagine that
      people are all using them as intended. The "information" that is peddled
      over the internet <i>could</i> be the truth, but it generally isn't.
      Facebook is the center of the internet for most people. In countries like
      Indonesia,{" "}
      <a
        href="https://qz.com/333313/milliions-of-facebook-users-have-no-idea-theyre-using-the-internet/"
        target="_blank"
      >
        people don't even know what the difference is.
      </a>
    </P>

    <P>
      In the American school systems, we see nothing in our public education
      system about how to <b>responsibly</b> use the internet. The internet
      should be bringing us closer to what the truth is, yet it's actually doing
      the exact opposite. It's creating a disinformation culture where people
      are openly rejecting the truth in favor of their own facts. And social
      media companies absolutely do not care, so long as this creates profit for
      themselves. So we have created a culture where everyone wields this
      incredibly powerful technology, which should provide us with key
      information on how to live and explore our complex world, yet we have no
      tradition or cultural understanding of how it should be utilized.
    </P>

    <Idea>
      If we just used computers as they were originally intended, as truth
      machines, it would eliminate most of the disinformation and apathy
      problems that are crippling society in this critical moment. Instead of
      trying to bring justice to each manipulative internet advertising and
      social media company, maybe it's easier to simply educate each other, and
      especially our youth as to what responsible computer use looks like.
      Computers are truth machines. Not fun machines. Let's keep it that way.
    </Idea>

    <FootNotes>
      <Note id="1">
        <a
          href="https://www.democracynow.org/2018/10/5/could_brazil_return_to_a_dictatorship"
          target="_blank"
        >
          Could Brazil return to a Dictatorship?
        </a>
      </Note>
    </FootNotes>

    <FR title="Further Reading">
      <UL>
        <ULI>
          <a
            href="https://www.theguardian.com/commentisfree/2018/apr/06/hungary-democracy-britain-orban-brexit-deal"
            target="_blank"
          >
            Hungary’s war on democracy is a war on democracy everywhere
          </a>
        </ULI>
      </UL>
    </FR>
  </Post>
));
