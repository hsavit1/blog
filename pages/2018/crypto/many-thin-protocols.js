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
			post <i>Fat Protocols</i>. How do protocols capture value?
		</Subtitle>
		<Meta date="February 4th, 2018" views={views} />
		<P>My last post on fat protocols presented a radical new idea...</P>
		<P>
			Protocols are simply well defined methods of communication rules,
			behaviors, and formats between two or more nodes on a network.
			Applications are software products that utilize these protocols to
			send and receive information. Blockchain is turning the software
			application layer into what is currently the UI layer and is turning
			the protocol layer into what is now the software application layer.
			This is the "blockchain revolution" in a nutshell.
		</P>
		<P>
			The idea of a <i>fat protocol</i> is, however, somewhat confusing
			and misses an important point. This post is intended to clarify what
			the protocol layer could also look like.
		</P>
		<P>
			The 'fat' protocol concept essentially says that protocol layer is
			now the distinguishing piece between different software products.
		</P>
		<P>
			This is indisputable - we will see the rise of specific use case
			protocols, instead of what we currently have - sneaky use of the big
			3 protocols that define ~ 99.9% of today's internet (HTTP, SMTP,
			TCP/IP).
		</P>
		<P>
			Although the fat protocol concept remains a useful introductory way
			of thinking about how the protocol layer will be the dominant layer
			in defining the blockchain, it largely ignores the process and
			market forces for it to get there.
		</P>
		<P>
			Software development is largely collaborative. Rarely are
			technologies unearthed from the ground up. 'Hacking' also hacking up
			a project, the process of putting a few pieces together to build
			some sort of bigger project together. These pieces tend to be open
			source projects, packages, or libraries that you can throw into your
			own project. It's rare that a software developer has the time or the
			multifaceted expertise to build a full platform, end to end, by
			themselves.
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
			hardly resemble each other.
		</P>
		<Figure
			href="https://blog.zeppelin.solutions/thin-protocols-cc872258379f"
			desc="As an example, here's a diagram of the evolution of Linux distros. The Red Hat branch of the Linux evolutionary tree has produced a much different platform than the Debian branch. This all happened because Linux was made open source."
		>
			<Image src="/static/crypto/linux_distro_timeline.png" />
		</Figure>
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
			The forked projects that I listed have all pretty much taken off.
			Bitcoin Cash, Monero, and Ethereum Classic are all top 10 coins in
			market capitalization. Cryptocurrency maximalism hasn't necessarily
			happened - investors and developers are either self-interested in
			making money on alternative coins or interested in going with the
			coin that they believe best solves a particular problem.
		</P>
		<P>
			The idea of <i>fat</i> protocols obscures this idea just a bit. Fat
			protocols implies that there will be one giant fat protocol per
			industry use case. A single protocol per blockchain use case doesn't
			give credence to the efficiency of the free software market in
			choosing the right tool for the right job, the incentive structure
			for software developer's to continue working on a big project,
			forking economics, and the power of creating something that is open
			source.
		</P>
		<P>
			Natural market forces should push for the development of many
			different thin protocols. Continuing from my social media example
			mentioned in <i>Fat Protocols</i>: rather than creating one huge
			social media protocol that is relied upon by everybody, there will
			most likely be many forks of an original social media protocol and
			many social media protocols that are inspired by the original
			protocol but in actuality are built entirely differently.
		</P>
		<Figure
			href="https://blog.zeppelin.solutions/thin-protocols-cc872258379f"
			desc="A better visual for how the thin protocol stack will look vs. the idea of a fat protocol."
		>
			<Image src="/static/crypto/thin_protocol_stack.png" />
		</Figure>
		<P>
			As the protocol economy develops, there will be more and more
			protocols that perhaps have a similar intent, but are built with
			unique architectural advantages and disadvantages.
		</P>
		<P>
			Protocol diversity has been seen by Bitcoin maximalists as some kind
			of leveling agent. If there are more protocols/cryptos then how can
			we have an agreed upon store of value?
		</P>
		{/* <P>
			I argue that investors tend to believe in the concept of maximalism
			because they are captivated by the prospect of finding a company
			that could be the next major super company, like Google or Apple,
			and making a ton of money on it. The big discerning difference between
			major companies and blockchain protocols is that the protocols are open sourced, and you'd have to understand the politics of maintaining an open-sourced project to gauge 
		</P> */}
		<P>
			This is just an example of lazy thinking. Bitcoin is the biggest
			coin in market cap right now because it was the first coin in a
			space that is still largely very young. There are no mainstream
			blockchain products out there right now. Once consumer demands
			become more refined, we'll see a real precambrian explosion in
			protocol design.
		</P>
		<P>
			Investors have also held a kind of bias against "protocol tokens"
			which is also a misunderstanding of the application - protocol
			relationship. I like the real world example used in{' '}
			<a
				href="https://blog.coinfund.io/invest-in-protocols-or-applications-putting-an-end-to-thoughtless-heuristics-8cb477575db1"
				target="_blank"
			>
				this post
			</a>. It re-examines the relationship between a gas company like
			British Petroleum (BP) and an airline company like American Airlines
			(AA). In this relationship, BP is a sort of "base protocol" because
			it produces the good that literally fuels lots of industries - the
			car industry, manufacturing, airlines, etc. AA would be the
			"protocol token" because it uses BP's gas to create another type of
			industry. You wouldn't necessarily say that BP is worth more than AA
			because its protocol is at more base level than AA's protocol level.
			AA might be able to capture and hold value in ways that BP isn't
			able to. The application - protocol relationship is misunderstood
			because an application doesn't necessarily imply less value than a
			protocol. Even though the application is not necessarily as
			antifragile or anti-volatile as a the protocols that it utilizes,
			that does not necessarily mean that it is <i>valueless</i>. It is a
			thoughtless heuristic to say that the application is always going to
			be worth less than the protocol. Clearly the thinking needs to be
			refined.
		</P>
		{/* <P>
			Maybe a different application would be less valuable - an extension of this thought exercise would be showing a company like United Airlines (UA) as a competing application to AA that uses BP's protocol. UA offers a less desireable customer experience as AA - their seats are smaller, they don't offer in-flight snacks, and their stewardesses are all nearing retirement. Value won't flow through UA as 
		</P> */}
		<Idea>
			The "fat protocol" thesis by fellow Brooklynite Joel Monegro did not
			fully frame how the protocol will reside in the new application
			stack. Great insights about this can be deduced by first drawing a
			diagram and understanding the new application stack to show a
			cohesive group of many "thin" protocols and from observing the
			cryptoeconomics of protocol forking. We must work harder to
			understand how value flows between protocols and how protocols
			capture and hold value to form a more complete business perspective.
		</Idea>
		<Figure
			href="https://blog.coinfund.io/fat-protocols-are-not-an-investment-thesis-17c8837c2734"
			desc="Protocol layer economics. What is 'above' on the stack is an application for the protocol that sits below it."
		>
			<Image src="/static/crypto/protocol-value.jpeg" />
		</Figure>
		<P>
			My prediction for blockchain development is that the biggest
			projects will actually be the blockchains that allow
			interoperability amongst blockchains - in short, allow different
			blockchains to communicate with each other.
		</P>
		<P>
			This might not happen, at least not in the short term. In the
			beginning, we might see developers take a much lazier route, where
			they make their coin an ERC-20 token and just have it compatible
			with coins that are also ERC-20 tokens via an exchange like 0x.<Ref id="2" />{' '}
			Interchain communication is something that is still in very early
			stages of development, and cryptos like{' '}
			<a href="https://cosmos.network/" target="_blank">
				Cosmos
			</a>, which offers an "internet" of interoperable blockchains and{' '}
			<a href="https://polkadot.io/" target="_blank">
				Polkadot
			</a>, which offers communication between chains, are considered to
			be a ways off from going mainstream. The closest we have is{' '}
			<a href="https://ark.io/">Ark</a>, which still needs to gain some
			major traction in the market cap space.<Ref id="3" />
		</P>
		<P>
			Overall, market forces should incentivize developers to continue
			creating their own protocols and we will gradually see more forking
			as the industry grows. Developers want to get in on what could be
			the next major, value holding protocol. And for the less
			entrepreneurial developers, they understand that it's inefficient to
			utilize a bloated blockchain protocol for everything. This is one of
			the reasons why blockchain became popular in the first place. The
			inefficiency of the HTTP protocol to satisfy unique application
			demands is what created super companies that were centralized and
			mischievous.
		</P>
		<P>
			Blockchain forking will not cannibilize the market. Instead, I
			believe it will create even more product diversity, which will
			accelerate the rate at which coins move around the market, boosting
			the crypto economy.
		</P>
		2
		<P>
			The scary scenario would be a continuation of our current
			trajectory, while would lead to the creation of many siloed
			protocols that are all vying to be the supreme, centralized, all
			encompassing protocol. Kind of like what Ethereum is today (more
			than half of all blockchain transactions occur over the Ethereum
			protocol). This would be dangerous as it would be more or less what
			we are currently experiencing - siloed data over a few protocols,
			incredibly volatile market swings, and a lack of developer focus.
			This is also a major security flaw. If somehow all of the dApps were
			based off the Ethereum blockchain, and there were another hack like
			the Parity wallet hack, we'd see a major market crash.
		</P>
		<P>
			The lack of focus would in part stem from hesitance to dive into a
			particular technology. Developers will become very choosy when
			hacking a project together because they understand that there are
			many solutions to the problem and they'd want to use the most
			efficient one possible. So it could cause a delay in the adoption of
			blockchain altogether.
		</P>
		<TLDR>
			Once blockchain technology really takes off, we will not see thin
			applications with fat protocols, but thin applications with many
			thin protocols, and interchain blockchains. Market forces should
			push us in this direction of greater protocol diversity. Opposing
			these market forces would lead to a disastrous, centralized mess.
			Let's continue to study the cryptoeconomics of forking and of the
			application - protocol relationship as this gives us great insights
			into how we value protocols.
		</TLDR>
		<P>
			At the end of the day, greater protocol distribution is a win for
			blockchain and a win for consumers. Although at first it could add
			an additional layer of difficultly in the software development
			process, it does ensure a competitive market, greater wealth
			distribution, decentralization, antifragility, and greater software
			diversity for the end-user. Hopefully crypto investors will put
			their money towards projects that encourage protocol diversity and
			more progress / developer fervor is placed on projects that focus on
			interchain communication.
		</P>
		<FR>
			<UL>
				<P />
				<P>
					<i>The Blockchain Stack</i>
				</P>

				<ULI>
					<a
						href="http://continuations.com/post/105272022635/bitcoin-clarifying-the-foundational-innovation-of"
						target="_blank"
					>
						Bitcoin: Clarifying the Foundational Innovation of the
						Blockchain
					</a>{' '}
					- The blockchain is organizationally decentralized but
					logically centralized
				</ULI>

				<ULI>
					<a
						href="https://spectrum.ieee.org/tech-history/cyberspace/osi-the-internet-that-wasnt"
						target="_blank"
					>
						OSI: The Internet That Wasn’t
					</a>{' '}
					- How TCP/IP eclipsed the Open Systems Interconnection
					standards to become the global protocol for computer
					networking. You'll get some protocol history here
				</ULI>

				<ULI>
					<a
						href="http://joel.mn/post/103546215249/the-blockchain-application-stack"
						target="_blank"
					>
						The Blockchain Application Stack
					</a>{' '}
					- Joel Monegro, in an original post, introduces what a
					Bitcoin applicaiton stack could look like
				</ULI>

				<ULI>
					<a
						href="https://blog.stephantual.com/web-3-0-revisited-part-one-across-chains-and-across-protocols-4282b01054c5"
						target="_blank"
					>
						The Web 3.0 Application Stack
					</a>{' '}
					- Stephan Tual points out the original vision of Ethereum
					was to bring about the decentralized Web 3.0, not a siloed
					Ethereum web. He also argues that running everything on an
					Ethereum stack would be totally impractical.
				</ULI>

				<P />
				<P>
					<i>Forking Politics</i>
				</P>

				<ULI>
					<a
						href="https://medium.com/@FEhrsam/accelerating-evolution-through-forking-6b0bba85a2ba"
						target="_blank"
					>
						Accelerating Evolution Through Forking
					</a>{' '}
					- Fred Ehrsam discusses the economic incentives of forking
					and how we can incentivize fork creators
				</ULI>

				<ULI>
					<a
						href="https://medium.com/newtown-partners/crypto-network-effects-are-driving-thin-protocols-a4108e94b1a"
						target="_blank"
					>
						Crypto-network effects are driving Thin Protocols
					</a>{' '}
					- This author makes a very convincing point regarding the
					incentive structure of protocol forking vs improving an
					existing system. Software developers are much more
					incentivized to fork, as the potential monetary gains are
					enormous in comparison. These incentive structure forces are
					what will drive crypto protocols thinner and thinner, until
					someone develops a new way to incentivize main-chain
					protocol improvements.
				</ULI>

				<P />
				<P>
					<i>Fat or Thin Protocols?</i>
				</P>

				<ULI>
					<a
						href="https://blog.coinfund.io/platform-currencies-may-soon-be-obsolete-78d9b263d902"
						target="_blank"
					>
						Platform currencies may soon be obsolete
					</a>{' '}
					- States a few solid points concerning the risks of sticking
					to a single platform currency and the dangers of hosting all
					dApps on a single blockchain
				</ULI>

				<ULI>
					<a
						href="https://hackernoon.com/will-cryptocurrency-protocols-be-fat-or-thin-36584863b0f8"
						target="_blank"
					>
						Will Cryptocurrency Protocols Be Fat or Thin?
					</a>{' '}
					- A lot of the thinking behind this post is influenced by
					this post. In fact, I would not have made this post had I
					not read this post. My ideas are merely answers the
					questions proposed here.
				</ULI>

				<ULI>
					<a
						href="https://blog.zeppelin.solutions/thin-protocols-cc872258379f"
						target="_blank"
					>
						Thin Protocols
					</a>{' '}
					- The economic incentives for thin protocols are thoroughly
					discussed here.
				</ULI>

				<ULI>
					<a
						href="https://www.evanvanness.com/post/166666272011/theres-no-such-thing-as-fat-protocols/amp"
						target="_blank"
					>
						There’s no such thing as “fat protocols”
					</a>{' '}
					- An interesting take on how we value fat at and thin
					blockchain protocols
				</ULI>

				<P />
				<P>
					<i>Determining Value in the Protocol Layer</i>
				</P>

				<ULI>
					<a
						href="https://blog.coinfund.io/invest-in-protocols-or-applications-putting-an-end-to-thoughtless-heuristics-8cb477575db1"
						target="_blank"
					>
						Invest in protocols or applications? Putting an end to
						thoughtless heuristics.
					</a>{' '}
					- Frames the question how we value protocols with a very
					thought provoking example.
				</ULI>

				<ULI>
					<a
						href="https://blog.coinfund.io/fat-protocols-are-not-an-investment-thesis-17c8837c2734"
						target="_blank"
					>
						Fat protocols are not an investment thesis
					</a>{' '}
					- This is an insightful read regarding what a protocol
					really is and how value flows in a stack of many protocols.
				</ULI>

				<ULI>
					<a
						href="https://medium.com/newtown-partners/application-protocols-are-the-better-investment-heres-why-7a2efdde594e"
						target="_blank"
					>
						Application Protocols are the better investment. Here’s
						why.
					</a>{' '}
					- One of my favorite reads. This guy crushes the myth that
					the top down protocols are the ones that accrue the most
					value. The application layer is critically important for
					capturing value.
				</ULI>

				<ULI>
					<a
						href="https://medium.com/@ryanshea/protocol-tokens-1ed44fa89453"
						target="_blank"
					>
						When to Use Protocol Tokens
					</a>{' '}
					- Ryan Shea of the Blockstack decentralized internet project
					frames 2 key questions to ask yourself when understanding
					whether or whether to not use protocol token when developing
					decentralized app networks
				</ULI>

				<ULI>
					<a
						href="https://tokeneconomy.co/on-tokens-value-a2617d4b0313"
						target="_blank"
					>
						On Tokens Value
					</a>{' '}
					- By owning a token one has the right and the incentive to
					participate in an economy (existing or future). This piece
					discusses how cryptotokens are the basis for their
					underlying decentralized economy, which could grow and have
					symbiotic effects for that economy's participants. So tokens
					can't be valued in the same way that a company's equity gets
					valued, they should be valued for the decentralized economy
					that they create.
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
				Polkadot looks like it still has a ways to go in their roadmap.
				Cosmos has an idea that is very questionable to me because of
				it's relationship with the{' '}
				<a href="https://www.tendermint.com/" target="_blank">
					Tendermindt
				</a>{' '}
				technology, which I am still not sold on. These cryptos are
				clearly visions for the future. Look at Ark as the most
				realistic interchain crypto.
			</Note>
		</FootNotes>
	</Post>
));
