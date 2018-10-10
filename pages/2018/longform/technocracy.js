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

import withViews from "../../../lib/with-views";

export default withViews(({ views }) => (
  <Post>
    <Head>
      <title>
        Programming: The Authoritarian and Technocrat Approved Occupation of
        Slavish Anti-Social Dummies
      </title>
    </Head>
    <Title>
      Programming: The Authoritarian and Technocrat Approved Occupation of
      Slavish Anti-Social Dummies
    </Title>
    <Subtitle>
      We need as many active community members as possible to galvanize action
      against the draconian Trump administration. Not a culture of uninformed,
      insular programming monkeys.
    </Subtitle>
    <Meta date="October 6th, 2018" views={views} />
    {/* intro */}
    <P>
      You don't have to look very far to see that software development is an
      occupation on the rise. The computer science degree is becoming
      increasingly more coveted as we plunge deeper into the internet age.
      Online courses (MOOC) and code bootcamps are popping up everywhere as
      people are scrambling to find career relevancy. Computer science is
      getting introduced at the youth level in class curricula, replacing
      humanities courses that are seen as irrelevant in the modern age.{" "}
      <Ref id="1" />
    </P>
    {/* thesis */}
    <P>
      Yet, there remains a dark side to the discipline. The harassment of women
      within the field has been well documented and shows few signs of changing
      for the better. Common software developer stereotypes haven't changed much
      either. You probably know of them. They're often males or LGBTQ under age
      30, sexless, posses a couple of social skills, live in a major city like
      SF or NYC, they show up to work late, don hoodies, work long hours alone
      in their basements, and are as hyper obsessed with detail scrutiny as they
      are with their coffee beans. No wonder why straight women have a rough
      time fitting in. The developer lifestyle molds people that aren't
      interested in engaging in the tango and romance of a non-technical,
      non-bureaucratic conversation with type of person who they haven't dealt
      with previously. As one would expect, the community, despite all of the
      efforts to be more inclusive, fundamentally cannot be because it's
      constituents are not aware of what changes that they really need to make.
      And as a result, male software developers categorize nearly 80% of the workforce.
    </P>
    {/* idea */}
    <P>
      You may be tempted to brush this stereotyping off as trivial details that
      will eventually sort themselves out as more people become involved in the
      field. I'm writing this to inform you that this is a dangerous line of
      thinking. The field is not going to sort itself out on its own without
      people taking the initiative to consider why exactly it's so broken in the
      first place. And (as is often the case nowadays) once you discover where
      these problems come from, you'd realize that the root of the problem runs
      at political depths.
    </P>
    {/* detailed thesis */}
    <P>
      The Trump administration has brazenly and unabashedly brought the GOP's
      intentions into plain sight. It's not difficult to string together the
      general plan for the Trump administration and the Republican party in
      general. With a changing census, the party of traditional white elites
      cannot stand as it traditionally has. The only way that it can win is by
      limiting voter turnout for the democrats. Trump's preferred way of doing
      this is to continuously attack the social systems that vulnerable peoples
      rely upon, to create negative feedback loops of hopelessness and despair.
      These attacks don't seem to be letting up at all, and between pulling
      American out of the Paris climate agreement, the tax bill, the gutting of
      health care, the mass deportation of immigrants, the trade wars, and the
      appointment of supreme court justices, his administration has been largely
      successful at getting his craven agenda pushed along. The Trump
      administration hammers at every wedge issue, and by doing so, creates a
      continuous circus of despair, and establishes new levels of normal where
      anguish becomes commonplace and hopelessness runs rampant.
    </P>
    {/*  */}
    <P>
      The kinds of extreme conservatism that the Trump administration gets away
      demands an extreme pushback response amongst educated citizens, but that's
      not what we're seeing. Despite endless reporting from news outlets, the
      same young and educated people who stayed at home during the 2016
      presidential election have become comatose to the dehumanizing nature of
      the Republican party, and show few signs of seriously organizing against
      the keptocratic administration that is doing its best to ostracize them.
    </P>

    <P>
      I know software developers because I am one and I have went to university
      with them and I have worked with them for the years since. I don't
      consider myself a symbol of the rest of the people I work with - and I can
      prove this because I have enough concern that I feel the need to write
      about it. You don't have to dig that deep into{" "}
      <a href="" target="_blank">
        HackerNoon
      </a>{" "}
      to realize that developers are more concerned about developer productivity
      than they are about using software as an exploration into framing and
      solving structural social issues. I also came to software development from
      the arts and sciences department, unlike most software developers. I
      didn't write this piece with stats or figures because I believe that my
      experience working as a software developer should be enough to make me
      credible to speak out in this domain.
    </P>

    <Idea>
      I want to draw a conclusion that the culture of the software development
      space is same culture that gave rise to Trump. Unchecked and unethical
      profit driven social media platforms like Facebook and Instagram have
      played a huge part in crippling this country. Like the software developers
      who created the platform, young voters are isolated, disconnected, and
      uninspired to take serious action against the oppressive regimes.
    </Idea>

    <Quote>
      Had the developers felt a greater sense of social agency, perhaps they
      wouldn't have created a system that inundates instead of inspires.
    </Quote>

    <P>
      Facebook didn't have to be the platform that it is now. If software
      developers actually cared about the implications of what they were doing,
      they wouldn't have unquestionably followed 19 year old Zuckerberg's lead.
      But software developers aren't critical thinkers and they aren't
      encouraged to be social activists by leaders in the industry.{" "}
      <Ref id="2" /> Instead, they're encouraged to just make things for the
      sake of making things. They're often insular "monkeys" who take very
      specific design instructions and turn them into a functional user
      interface. No thinking beyond that is encouraged because it is seen by the
      managerial class as inefficient.
    </P>

    <P>
      Programmers aren't evaluated for their line of duty by their ethics, but
      by their ability to produce a working product. Nowhere to be found in the
      programming interview bible, <i>Cracking the Coding Interview</i>, can you
      find a chapter on the moral obligation of a developer to speak out against
      the banalities of corporate system. Instead, what you see is hundred of
      pages of impractical problems such as how to sort elements of a binary
      tree. Most UI and web engineers will never encounter such a problem.
      Programmers are trained to leave all of the ethics decisions up to their
      higher up managers, otherwise they risk being replaced by some more
      desperate developer from a developing country.
    </P>

    <P>
      We shouldn't consider programming <i>easy</i>, we should look upon it for
      what it really is. It's a practice that demands ethical social agents who
      use the power of code to advance certain types of ideas. Programming isn't
      the equivalent of literacy - it doesn't have the same level of essential
      skill that reading and writing provides. That being said, programming can
      offer tremendous benefits to the masses if the right people specialize in
      it, just like how cinema can be a powerful and expressive art form if the
      right director is in place to hone in on an important message.
    </P>

    <P>
      Programming can be an important skill for those who can think in terms of
      educating the masses through innovative and inspiring interfaces. For the
      rest, it's not a great skill to try to obtain because the learning curve
      is way too steep. People should express themselves in ways that are most
      effective <i>for them</i>, not in ways that are contrived. If you're
      comfortable with occupying your time with something that is a poor conduit
      for channeling your idea, then you're wasting your time and you're going
      to carry that mentality over to other avenues in your life.
    </P>

    <TLDR>
      We're at a breaking point. Society is quickly embracing the field of
      computer science without considering the ethical implications of gutting
      other subjects from school curricula, especially in the humanities. Force
      feeding students into computer science without also encouraging agency is
      an easy strategy for Republican plutocrats and Authoritarians like Trump
      who benefit from a corpus of non-critical-reasoning, ostracized,
      uninterested, undetermined, and uninspired voting block.
    </TLDR>

    <FootNotes>
      <Note id="1">
        <a
          href="https://obamawhitehouse.archives.gov/blog/2016/01/30/computer-science-all"
          target="_blank"
        >
          Computer Science For All White House Initiative
        </a>
      </Note>

      <Note id="2">
        <a
          href="http://education.abc.net.au/home#!/media/1618376/"
          target="_blank"
        >
          Hour of Code: Mark Zuckerberg teaches Repeat Loops
        </a>
      </Note>
    </FootNotes>

    <FR title="Further Reading">
      <UL>
        <ULI>
          <a
            href="https://www.wired.com/2017/04/hey-computer-scientists-stop-hating-humanities/"
            target="_blank"
          >
            Hey, Computer Scientists! Stop Hating on the Humanities
          </a>
        </ULI>

        <ULI>
          <a
            href="https://www.huffingtonpost.com/david-h-bailey/why-science-needs-the-hum_b_12518484.html"
            target="_blank"
          >
            Why Science Needs the Humanities
          </a>
        </ULI>
      </UL>
    </FR>
  </Post>
));
