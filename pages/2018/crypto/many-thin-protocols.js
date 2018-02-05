import Head from 'next/head';
import Post from '../../../layouts/post';
import Meta from '../../../components/post/meta';
import Quote from '../../../components/post/quote';
import P from '../../../components/post/paragraph';
import Title from '../../../components/post/title';
import Subtitle from '../../../components/post/subtitle';
import TLDR from '../../../components/post/tldr';
import Idea from '../../../components/post/idea';
import Section from '../../../components/post/section';
import { Ref, FootNotes, Note } from '../../../components/post/footnotes';
import Figure, { Image } from '../../../components/post/figure';
import FR from '../../../components/post/further-reading';
import UL, { LI as ULI } from '../../../components/post/bullets-list';
import withViews from '../../../lib/with-views';

export default withViews(({ views }) => (
	<Post>
		<Head>
			<title>Alternative Perspective: Many Thin Protocols</title>
		</Head>

		<Title>Alternative Perspective: Many Thin Protocols</Title>

		<Subtitle>
			A complementary understanding of the idea laid out in my previous
			post <i>Fat Protocols</i>.
		</Subtitle>

		<Meta date="February 4th, 2018" views={views} />

		<P>My last post on fat protocols presented a radical new idea...</P>

		<P>
			Blockchain is turning the software application layer into what is
			currently the UI layer and is turning the protocol layer into what
			is now the software application layer. This is the "blockchain
			revolution" in a nutshell.
		</P>

		<P>
			The idea of <i>fat</i> protocols is, however, somewhat confusing and
			misses an important point. This post is intended to clarify what the
			protocol layer could also look like.
		</P>

		<P>
			The 'fat' protocol concept essentially says that protocol layer is
			now the distinguishing piece between different software products.
		</P>

		<P>
			This is indisputable - we will see the rise of specific use case
			protocols, instead of what we currently have - sneaky use of the big
			3 (HTTP, SMTP, TCP/IP).
		</P>

		<P>
			Fat protocols remain an incredibly useful way of thinking about what
			the cryptocurrency and blockchain space wants to be. However it
			largely ignores the process that will happen for it to get there.
		</P>

		<P>
			Software development is largely collaborative. Rarely are
			technologies unearthed from the ground up. Most laymen refer to
			software developers as 'hackers' but usually with the understand
			that 'hacking' happens with a malicious, hijacking, sort of intent.
			'Hacking' also means hacking up a project, the process of putting a
			few pieces together to build some sort of bigger project together.
			These pieces tend to be open source projects, packages, or libraries
			that you can throw into your own project.
		</P>

		<P>
			It's rare that a software developer has the time or the multifaceted
			expertise to build a full platform, end to end, by themselves.
		</P>

		<P>
			Hackers could also be people who <b>fork</b> other open source
			projects and make additions or modifications to them.
		</P>

		<P>
			Thus far, we've seen quite a few blockchain projects develop in
			exactly this way. Bitcoin Cash, Ethereum Classic, Monero, and
			Z-Classic are prime examples of crypto projects that are almost
			exactly the same as the projects that they were forked from, with a
			couple of very small modifications.<Ref id="1" />
		</P>

		<P>
			Forks don't necessarily need to lead to small additions. Eventually
			they can differentiate to something so radically different that they
			hardly resemble each other. As an example, <a href="https://blog.zeppelin.solutions/thin-protocols-cc872258379f">here's</a> a diagram of the evolution of Linux distros. The Red Hat branch of the Linux evolutionary tree has produced a much different platform than the Debian branch. This all happened because Linux was made open source.
		</P>

		{/* <Figure
			href="https://blog.zeppelin.solutions/thin-protocols-cc872258379f"
			desc="As an example, here's a diagram of the evolution of Linux distros. The Red Hat branch of the Linux evolutionary tree has produced a much different platform than the Debian branch. This all happened because Linux was made open source."
		>
			<Image src="/static/linux_distro_timeline.png" />
		</Figure> */}

		<P>
			Forks happen for a variety of reasons. In the case of Bitcoin Cash,
			the fork happened largely out of{' '}
			<a
				href="https://hackernoon.com/thats-not-bitcoin-this-is-bitcoin-95f05a6fd6c2"
				target="_blank"
			>
				greed
			</a>, but often, forks address serious problems with the original
			software. Monero's fork of Bytecoin happened because the Bytecoin
			founder / maintainer was pretty much totally absent from the project
			and was rumored to have premined 80% (!) of the coins.
		</P>

		<P>
			The forked projects that I listed have largely taken off. Bitcoin
			Cash, Monero, and Ethereum Classic are all top 10 coins in market
			capitalization. Cryptocurrency maximalism hasn't actually happened -
			investors and developers are interested in going with the coin that
			they believe best solves a particular problem.
		</P>

		<P>
			The idea of <i>fat</i> protocols may have obscured this idea just a
			bit. A fat protocol doesn't give credence to the efficient of the
			free software market and the power of creating something that is
			open source.
		</P>

		<P>
			We will see the development of many different thin protocols.
			Continuing from my social media example: rather than creating one
			huge social media protocol that is relied upon by everybody, there
			will most likely be many forks of an original social media protocol
			and many social media protocols that are inspired by the original
			protocol but in actuality are built entirely differently.
		</P>

		<P>
			As the protocol economy develops, there will be more and more
			protocols that perhaps have a similar intent, but are built with
			unique architectural advantages and disadvantages.
		</P>

		<P>
			Investors tend to believe in the concept of maximalism because they
			are used to the titillating prospect finding a company that could be
			the next major super company, like Google or Apple, and making a ton
			of money on it.
		</P>

		<P>
			This is just an example of lazy thinking. Bitcoin is the biggest
			coin in market cap right now because it was the first coin in a
			space that is still largely very young. There are no mainstream
			blockchain products out there right now. Once consumer demands
			become more refined, we'll see a real precambian explosion in
			protocol design.
		</P>

		<P>
			My prediction for blockchain development is that the biggest
			projects will actually be the blockchains that allow
			interoperability amongst blockchains - in short, allow different
			blockchains to communicate with each other.
		</P>

		<P>
			This might not happen, at least not in the short term. In the
			beginning, we might just see developers take a much lazier route,
			where they make their coin an ERC-20 token and just have it
			compatible with coins that are also ERC-20 tokens via an exchange
			like 0x.<Ref id="2" /> Interchain communication is something that is
			still in very early stages of development, and cryptos like{' '}
			<a href="https://ark.io/" target="_blank">
				ARK
			</a>, which offers communication between sidechains, are considered
			to be a ways off from going mainstream.<Ref id="3" />
		</P>

		<P>
			Overall, if market forces and developer individualism holds true, we
			will gradually see more forking of protocols as the industry grows
			because they offer their own economic incentives. Developers want to
			get in on what could be the next major, widely adopted protocol. And
			for the less entrepreneurial developers, they understand that it's
			inefficient to utilize a bloated blockchain protocol for everything.
			This is one of the reasons why blockchain became popular in the
			first place. The inefficiencies of the over-bloated HTTP protocol
			created super companies that were centralized and mischievous.
		</P>

		<P>
			Blockchain forking will not cannibillize the market. Instead, I
			believe it will create even more product diversity, which will
			accelerate the rate at which blockchain is widely adopted.
		</P>

		<Figure
			href="https://blog.zeppelin.solutions/thin-protocols-cc872258379f"
			desc="A better visual for how the thin protocol stack will look vs. the idea of a fat protocol."
		>
			<Image src="/static/thin_protocol_stack.png" />
		</Figure>

		<P>
			One downside of this is that developers will become hesitant to dive
			into a particular technology. Developers will become very choosy
			when hacking a project together because they understand that there
			are many solutions to the problem and they'd want to use the most
			efficient one possible. So it could cause a delay in the adoption of
			blockchain altogether.
		</P>

		<P>
			At the end of the day, greater protocol distribution is a win for
			blockchain and a win for consumers. Although at first it could add
			an additional layer of difficultly in the software development
			process, it does ensure a competitive market, greater wealth
			distribution, decentralization, anti-fragility, and greater software
			diversity for the end-user. Hopefully crypto investors will put
			their money towards projects that encourage protocol diversity and
			more progress / developer fervor is placed on projects that focus on
			interchain communication.
		</P>

		<FR>
			<UL>
				<ULI>
					<a href="https://hackernoon.com/will-cryptocurrency-protocols-be-fat-or-thin-36584863b0f8">
						Will Cryptocurrency Protocols Be Fat or Thin?
					</a>{' '}
					- A lot of the thinking behind this post is influenced by
					this post. In fact, I would not have made this post had I
					not read this post. My ideas are merely answers the
					questions proposed here.
				</ULI>

				<ULI>
					<a href="https://blog.zeppelin.solutions/thin-protocols-cc872258379f">
						Thin Protocols
					</a>{' '}
					- The economic incentives for thin protocols are thoroughly
					discussed here.
				</ULI>

				<ULI>
					<a href="http://continuations.com/post/105272022635/bitcoin-clarifying-the-foundational-innovation-of">
						Bitcoin: Clarifying the Foundational Innovation of the
						Blockchain
					</a>
				</ULI>

				<ULI>
					<a href="https://www.evanvanness.com/post/166666272011/theres-no-such-thing-as-fat-protocols/amp">
						There’s no such thing as “fat protocols”
					</a> - An interesting take on how we value fat at and thin blockchain protocols
				</ULI>

				<ULI>
					<a href="https://blog.coinfund.io/invest-in-protocols-or-applications-putting-an-end-to-thoughtless-heuristics-8cb477575db1">
						Invest in protocols or applications? Putting an end to
						thoughtless heuristics.
					</a>
				</ULI>

				<ULI>
					<a href="https://blog.coinfund.io/fat-protocols-are-not-an-investment-thesis-17c8837c2734">
						Fat protocols are not an investment thesis
					</a>{' '}
					- There are some amazing graphics here
				</ULI>

				<ULI>
					<a href="https://blog.stephantual.com/web-3-0-revisited-part-one-across-chains-and-across-protocols-4282b01054c5">
						The Web 3.0 Application Stack
					</a>
				</ULI>
			</UL>
		</FR>

		<FootNotes>
			<Note id="1">
				One detail that you might want to read into is the difference
				between hard forks and soft forks - aka on-chain and off-chain
				scaling. You can read about that{' '}
				<a
					href="https://cryptocurrencyfacts.com/understanding-hard-forks-cryptocurrency/"
					target="_blank"
				>
					here
				</a>
			</Note>

			<Note id="2">
				<a
					href="https://www.ethnews.com/wanchain-developed-to-spur-inter-blockchain-cooperation"
					target="_blank"
				>
					Wanchain
				</a>{' '}
				is another decentralized exchange project that looks promising
				for transactions of ERC-20 tokens.
			</Note>

			<Note id="3">
				I believe that the ARK vision of side-chain and inter-blockchain
				communication holds a lot of promise, but their{' '}
				<a href="https://ark.io/roadmap" target="_blank">
					roadmap
				</a>{' '}
				tells me that they are still in the early stages of their
				development. For Ark to achieve it's vision, more developers
				would have to contribute to and educate themselves about it, but
				thus far, the project isn't
			</Note>
		</FootNotes>
	</Post>
));
