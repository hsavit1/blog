import Head from "next/head";
import Post from "../../../layouts/post";
import Meta from "../../../components/post/meta";
import Quote from "../../../components/post/quote";
import P from "../../../components/post/paragraph";
import Title from "../../../components/post/title";
import TLDR from "../../../components/post/tldr";
import Subtitle from "../../../components/post/subtitle";

import withViews from "../../../lib/with-views";

export default withViews(({ views }) => (
  <Post>
    <Head>
      <title>Welcome to Dumbfuckistan</title>
    </Head>
    <Title>Welcome to Dumbfuckistan</Title>
    <Meta date="October 13th, 2018" views={views} />
    <Subtitle>Author: Ian Gurwitz</Subtitle>

    <P>
      I am completely guilty of loving every bit of this. Gurwitz writes in a
      way that no other author I've ever seen write. I'd say that his most
      similar persona is that of Bill Maher, but even he has written nothing as
      silver-tongued as this. But to follow through with the comparison,
      Gurwitz's book is the literary equivalent of Maher's <i>Real Time</i>, or
      even of Mike Judge's iconic{" "}
      <a href="https://www.imdb.com/title/tt0387808/">
        <i>Idiocracy</i>
      </a>
      . Calling out all of the people that are leading to the demise of America
      is profoundly cathartic, in ways that I couldn't imagine, even after years
      of watching <i>The Daily Show</i>, <i>The Colbert Report</i>, and{" "}
      <i>Real Time</i>.
    </P>

    <P>
      Gurwitz does what I've never experienced from other authors. He
      metaphorically reached out of the paper, grabbed me by my head, pointed me
      in the direction of all of the dumb people that are roaming the
      countryside of this country and peeled my eyes open. These idiots are so
      obviously doing what is the exact opposite of what we as a country need
      them to do to promote a peaceful society that won't result in the death of
      all of us. Whether it's religious nutjobs, racists, sexists, misogynists,
      fatasses, couch potatoes, gun nuts, drug addicts, book loathers, insane
      capitalists, or alcoholics, Gurwitz shows no sympathy. In his mind,
      there's just no time for listening ot the dumbasses that are so clearly
      acting in their worst interests. Society can't advance to the level that
      it needs to be at if we keep apologizing for idiots who, with all of the
      available knowledge of the world, choose to be the worst people they can
      be.
    </P>

    <P>
      Of course, the group that Gurwitz is targeting are the conservatives. One
      of the reason why Trump became such is because, well, idiots, who continue
      to act out of their best interests, voted for him. Idiots don't care to do
      the rational thing, and voting for Trump is a prime example of that
      tendency to self-harm. It's like cutting yourself. There's no reason to do
      that. No matter how terrible your psychological makeup is, don't ever do
      that. There's no excuse for causing abject harm to yourself, even if it's
      a cry for help.
    </P>

    <Quote>
      “The main thing wrong with religion is that people have gotten it wrong.
      The goal is to understand religion as it should be understood, as
      traditions, myths, symbols, and practices intended to lead one to a
      deeper, more profound experience of human life. The desire for this
      knowledge is hard wired in us. That won’t disappear. Unless of course we
      wipe each other out in the next holy war, in which case we’ve successfully
      screwed ourselves.”
    </Quote>

    <Quote>
      “Donald Trump is Dumbfuckistan incarnate. Just as Sarah Palin was its head
      cheerleader, Trump is its star quarterback. It was hardly surprising that
      she showed up in Iowa to endorse him, delivering a speech that made her
      sound like a drunken stroke victim. They made quite a pair, standing on
      stage: the unstoppable farce meets the unshameable object. Trump”
    </Quote>

    <Quote>
      “We assume Orwell’s 1984 dystopian nightmare can’t happen here, yet we’ve
      been narcotized into a more ominous Orwellian somnambulism. We’re
      inebriated on our own mythology, priapic at our military supremacy, and
      malleable via our ionic imagery, whether it’s Jesus or the flag. Jacked up
      on Adderall, Red Bull and patriotism, we only unite in war, tragedy and
      the Super Bowl. We’ve become style over substance, image over reality,
      propaganda over truth, and symbol over meaning. We claim to value
      education, yet mistrust intelligence. Immune to facts, frightened of
      change, we think magically; magic potions that will heal us, magic diets
      that will shrink us, and magic beliefs that will save us. And we think all
      this behavior has been blessed by a big daddy in the sky who lovingly
      placed us here for profit, guns, and heterosexual marriage. Perhaps
      evolution is a myth, in that we seem to be devolving. The”
    </Quote>

    <Quote>
      “But, at the end of the day, the problem isn’t money, lies, propaganda,
      negative ads, dirty tricks, decentralized news, talking points, or trumped
      up investigations. The problem is that they work on us. And they work
      because we’re uncritical, uneducated, and uninformed. A smarter electorate
      would be more skeptical of the lies. In fact, the incendiary tone and
      hyperbolic rhetoric in the message would instantly lead one to question
      the content."
    </Quote>

    <P>
      What Gurwitz paints so clearly is that liberals need to stop pointing
      fingers at themselves and they need to press themselves harder to point
      out all of the bullshit that emanates from thumb suckers on the right. If
      we are able to clairvoyantly identify how those people are systemically
      acting against their best interests, we can address them instead of accept
      their bullshit. In the year 2018, acting like a sexist or a racist should
      be intolerable. Society needs to quickly evolve if we're ever going to
      save ourselves from our own extinction. And we can't do that if we
      continue to regress intellectually.
    </P>

    <TLDR>
      America unfortunately is flooded with dumbasses who act in the opposite
      direction of their best interests. Those of us who are still sentient need
      to remain vigilant towards those who have completely given up on being a
      productive member of society in favor of nihilism and self interest.
    </TLDR>
  </Post>
));
