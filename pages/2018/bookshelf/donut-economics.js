import Head from "next/head";
import Post from "../../../layouts/post";
import Meta from "../../../components/post/meta";
import Quote from "../../../components/post/quote";
import P from "../../../components/post/paragraph";
import Title from "../../../components/post/title";
import TLDR from "../../../components/post/tldr";
import Subtitle from "../../../components/post/subtitle";
import Figure, { Image } from "../../../components/post/figure";

import withViews from "../../../lib/with-views";

export default withViews(({ views }) => (
  <Post>
    <Head>
      <title>Donut Economics</title>
    </Head>
    <Title>
      Donut Economics: 7 Ways to Think like a 21st Century Economist
    </Title>
    <Meta date="October 13th, 2018" views={views} />
    <Subtitle>Author: Kate Raworth</Subtitle>

    <P>
      Unhinged capitalism and desire for growth have ushered an economic era
      that is perpetuating a dangerous cycle of slavishness, corporatism,
      political turmoil, apathy, and thoughtlessness. Author and economist Kate
      Raworth and her renegade economic field-mates have had enough of economic
      models created by old-school economists that don't actually encourage us
      to create an economy that works for the best interests of all humans.
    </P>

    <Figure desc="Raworth's simple donut model of the economy explains that we need to focus on the impacts of our economic policies so that important sectors don't go underrepresented or forgotten. We need to create an economy that is sustainable, regenerative, and safe for humanity.">
      <Image src="/static/books/donut.jpg" />
    </Figure>

    {/* todo */}
    <P>
      Her doughnut idea is really quite simple - if we, as a society, do not
      take enough of the basics from the world around us then we will stop
      functioning as a society and people will start dying. If, on the other
      hand, we take too much then the world will start to die and that will have
      much the same impact on the rest of us too. So, there is a doughnut of
      healthy interaction with the world in between these two extremes - and
      that is pretty much where economics ought to be trying to direct us,
      inside the doughnut of sustainable economic engagement with the world.
    </P>

    <P>
      This idea is so simple yet so powerfully captures this moment of where we
      need to evolve our thinking. Economics cirrcula are filled with lines and
      supply and demand curves that don't actually reflect the state of the
      world, or provide any impetus for thinking about the economy differently.
      Instead, we are just obsessed with the idea of the line eventually
      reaching a point that reflects growth.
    </P>

    {/* todo */}
    <P>
      The donut is, of course, the opposite of the traditional image we have of
      economics. In that other image life can only get better if things first
      get worse. We need to grow economies to a certain level before we can look
      after the planet - but once we have grown beyond that point, well, things
      start getting much better in all senses.
    </P>

    {/* todo */}
    <P>
      We are witnessing one of the planet's great extinction events - capitalism
      isn't fixing this, it is rushing it to its conclusion. To pretend that
      production can be constantly shifted away from humans as they reach the
      right level of development misses the point. The reason Chinese cities now
      have worse than early 1900s London level of air quality is because they
      are the production centres of the world now. Just because London is better
      off, doesn't mean the world is.
    </P>

    {/* todo */}
    <P>
      And this becomes a central theme here - our problem is that our economy
      only makes sense if it provides endless growth. But{" "}
      <b>endless growth on a finite planet is clearly unsustainable</b>.
      Eventually something has to give - and we seem to be rushing towards that
      point right now. The problem is that those who have swallowed the kool-aid
      provided by the images presented by the reassuring models telling us how
      the economy works are incapable of thinking outside of those images.
      Traditional economic supply and demand curves are still the basis for all
      economic classes, even though microeconomics and macroeconomics are largely
      considered bunk knowledge at this point. Economics doesn't reflect on how
      people act irrationally and economies are rigged by greedy politicians who
      manipulate the media.
    </P>

    <TLDR>
      Raworth makes many compelling arguments that we need to immediately
      rethink how economics works so that we can have some hope of a future on
      this planet. We need to stop thinking in terms of growth and instead focus
      on creating an economy that functions regeneratively. This is compulsory
      reading for everyone.
    </TLDR>
  </Post>
));
