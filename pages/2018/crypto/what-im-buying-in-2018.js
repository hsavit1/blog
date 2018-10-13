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
import Figure, { Image, SideBySide } from '../../../components/post/figure';
import FR from '../../../components/post/further-reading';
import Podcasts from '../../../components/post/podcasts';
import Videos from '../../../components/post/videos';
import UL, { LI as ULI } from '../../../components/post/bullets-list';
import withViews from '../../../lib/with-views';

export default withViews(({ views }) => (
	<Post>
		<Head>
			<title>Protocol Investing in 2018</title>
		</Head>

		<Title>Protocol Investing in 2018</Title>

		<Subtitle>
			2018 will be the year of the dApps. What protocol layers will
			capture their value?
		</Subtitle>

		<Meta date="February 9th, 2018" views={views} />

		<P>
			We are at a point in 2018 in the crypto markets where the stakes are
			high and the rewards are potentially great. How do we approach
			trading this?
		</P>

		<Figure desc="The left image gives me bearish thoughts, while the right looks like a regular, normal, healthy correction in an otherwise very bullish market. But it's the same 1 year timeframe and the same asset being charted (total market cap). The left shows a traditional chart and the right is a log scale. 2 perspectives may have your head spinning with possibilities - so how do I approach gauging this market?">
			<SideBySide
				src1="/static/crypto/six-month-range.png"
				src2="/static/crypto/six-month-log-scale.png"
			/>
		</Figure>

		<P>
			For the next month and a half, the charts give almost as many
			bearish sentiments as they give bullish sentiments. If the latest
			bounce is just the beginning or a major correction, and I trade it
			hesitantly, I could be missing out on incredibly gains. Likewise, if
			this is just a dead man's bounce or a shakeout, and the market
			continues on a downtrend to 85% correction levels, and I play my
			cards too strong, then I risk incredible losses. If I had a gun
			pointed towards my head asking for picks in 2018, how would I
			approach this?
		</P>

		<P>
			I hunker down to the fundamentals. How did we get to where we are
			now, what is the trajectory of blockchain technology development up
			to this point, what developments will occur over the next year, and
			how will the value of those developments translate into value /
			prices changes?
		</P>

		<P>
			2017 was obviously a huge year for cryptocurrencies, driven in large
			part due to the rise of Ethereum and Ethereum based alt coins. We
			know this because Bitcoin has quickly fallen from an 88% dominance
			of the total cryptocurrency market capitalization to only a 34%
			dominance level today.<Ref id="6" /> The Ethereum blockchain has
			also grown to be the most highly traded of all of the blockchains.<Ref id="5" />
		</P>

		<P>
			What Ethereum has taught us is that the crypto world is now somewhat
			familiar with cryptocurrencies that serve purposes beyond that a
			store of value. The idea of smart contracts is not as foreign as it
			used to be, and software developers are taking notice.
		</P>

		<P>
			The 2017 altcoin scene has largely been the year of proof of concept
			project ideas and whitepapers. Major Ethereum smart contract
			protocol competitors that round out the top spots in the market cap
			list have no underlying applications that utilize them.
		</P>

		<P />

		{/* ~34 billion market cap for the non ethereum projects */}

		<UL>
			<ULI>
				<b>Ethereum</b> - $79.424 billion market cap - Has a few major
				projects built off of this, including Augur, Gnosis, 0x,
				District0x, Aragon, Decentraland, First Blood, Storj, Lunyr, and
				almost 1,000 more dapps listed on the{' '}
				<a href="https://www.stateofthedapps.com" target="_blank">
					State of the Dapps website
				</a>. So that's 9 major Ethereum projects + a long listing of
				many smaller Ethereum projects
			</ULI>
			<ULI>
				<b>Cardano</b> - $9.606 billion market cap - doesn't even have a
				finished project or some kind of test network
			</ULI>
			<ULI>
				<b>Stellar</b> - $6.810 billion market cap - The Kin project
				recently just switched to using the Stellar blockchain from the
				Ethereum blockchain. A{' '}
				<a
					href="http://lunch.publicstellar.com/icos-on-stellar/"
					target="_blank"
				>
					couple of small projects
				</a>{' '}
				have had ICO launches on Stellar.
			</ULI>
			<ULI>
				<b>NEO</b> - $6.586 billion market cap - about 10 ICOs, listed{' '}
				<a href="http://neoi.co/" target="_blank">
					here
				</a>. Most notable is Red Pulse. Also the AdEx project.
			</ULI>
			<ULI>
				<b>EOS</b> - $5.543 billion market cap - Only one dapp that is
				worth nothing IMO - That one is Everipedia, a wikipedia clone on
				the blockchain. You can see a few EOS dapps listed{' '}
				<a
					href="https://eosforum.org/t/eos-dapp-collection-10-listed-currently/309"
					target="_blank"
				>
					here
				</a>.
			</ULI>
			<ULI>
				<b>Lisk</b> - $2.899 billion market cap - Not ready for dapp
				development
			</ULI>
			<ULI>
				<b>Qtum</b> - $1.982 billion market cap - Has about 15 ICOs that
				you can see on the QTUM Explorer{' '}
				<a href="https://qtumexplorer.io/tokens" target="_blank">
					website
				</a>. Most notable is Medibloc
			</ULI>
		</UL>

		<P>
			The total value of all of these coins that aren't Ethereum is ~$34
			billion, slightly less than half as much as Ethereum. Yet the number
			of projects built on these platforms is way less than half of that
			of the Ethereum projects. Ethereum by far leads the pack
		</P>

		<P>
			Previous posts that I've made have discussed how the blockchain is
			re-engineering the way we understand applications.
		</P>

		<P>
			My{' '}
			<a
				href="savits-blog.now.sh/2018/crypto/fat-protocols"
				target="_blank"
			>
				first post
			</a>{' '}
			discussed the influential and highly cited idea of{' '}
			<i>fat protocols</i>, which was one of the first understandings of
			what the blockchain application architecture could potentially look
			like.
		</P>

		{/* <P>
		This post was influential because it outlined a principle of what the new blockchain backed economy could look like.
		</P> */}

		<P>
			It advocated for somewhat of a "super protocol" - one protocol that
			would define an entire industry use case. There's reason to believe
			that this kind of thinking was influential for both developers and
			investors, and contributed to the idea of <b>protocol maximalism</b>.<Ref id="1" />
		</P>

		<P>
			Protocol maximalism starts with the belief that the blockchain needs
			to be of a certain mass and price/value to be influential enough to
			bulldoze its existence and create change. It advocates for ignoring
			other potential solutions as contributing to them is{' '}
			<i>unethical</i> - because the "network effects" of working on the
			largest blockchain project cannot be ignored.
		</P>

		<Quote>
			Bitcoin maximalists often use “network effects” as an argument, and
			claim that it is futile to fight against them. - Vitalik Buterin
		</Quote>

		<P>
			This thinking virally proliferates into investment strategies, I'm
			thinking because the first investors were most likely the software
			developers. Investors want to place their bets in a coin that will
			become the "does it all" super-coin that hordes all transaction
			volume and outlasts all other coins.
		</P>

		<P>
			If you are a believer in this idea of protocol maximalism, it makes
			it hard to envision a world in which Ethereum could co-exist with
			other platforms like NEO and QTUM. Why would those other platforms
			exist if everything would be built off of the Ethereum platform? How
			could a platform like NEO have any value if all the tokens would be
			circulating off of the Ethereum blockchain?
		</P>

		<P>
			<a href="https://en.wikipedia.org/wiki/Mechanism_design">
				Mechanism design
			</a>{' '}
			is an applied economics and game theoretical field that takes an
			approach to designing incentive structures to get rational actors to
			behave in a certain way. Mechanism design is{' '}
			<a
				href="https://medium.com/blockchannel/a-crash-course-in-mechanism-design-for-cryptoeconomic-applications-a9f06ab6a976"
				target="_blank"
			>
				commonly applied
			</a>{' '}
			to cryptoeconomics because cryptoeconomic systems are fundamentally
			new ways of incentivizing behavior.
		</P>

		<P>
			What mechanism design shows us is that a "winner take all" approach
			to protocols is misguided because it doesn't take into consideration
			the economic incentive structure of blockchain application
			developers to work on their own projects instead of buttressing an
			existing project. It also doesn't consider the ramifications of open
			source project forking, which is a totally uncharted waters concept
			from a normal business standpoint.
		</P>

		<P>
			I posted{' '}
			<a
				href="savits-blog.now.sh/2018/cryptos/many-thin-protocols"
				target="_blank"
			>
				a critique
			</a>{' '}
			of the "fat protocol" mantra about how the blockchain application
			architecture will be defined by a thin application protocol that
			cohesively utilizes many underlying thin protocols.
		</P>

		<P>
			In that post, I referenced a few writing pieces describing how there
			is incentive for software developers to fork, as they gain
			disproportionate economic opportunities from taking control of their
			own brand of coin. Rather than take initiative to beef up codebases
			for existing protocols, we will see software developers opt to fork
			and create very similar protocols with their own unique additions. I
			didn't really know a good word for the incentive structure forces
			that push for greater diversity of protocols, so I refer to them as
			"market forces."
		</P>

		<P>
			I also shot down the concept of "fat protocol economics," the
			misguided idea that the platform protocol is the one that captures
			the most value by virtue of being the entrance into all of its
			underlying dapps. Application protocols built off of the platform
			protocol can absolutely capture as much value as the platform
			itself. However, this understanding is not one that I expect to be
			picked up by investors any time soon.
		</P>

		<P>
			So now we have a working picture of where the blockchain is headed.
			It's going to mature from a simple cryptocurrency to becoming the
			backbone for full-on, decentralized economies. The blockchain has
			evolved its focus from its first generation as a mathematically
			secure crypto-commodity like Bitcoin, to a smart contract capable
			blockchain like Ethereum with a few smaller decentralized
			applications working on that smart contract platform (like Augur,
			Gnosis), to a future stage of even smaller dApps working across
			different platforms via inter-chain solutions (ARK, Polkadot,
			Cosmos).
		</P>

		<P>
			This is the blockchain evolution in a nutshell. What started as a
			very simple use case has a roughly defined path of growth towards a
			diverse inter-blockchain based protocol economy. A{' '}
			<i>precambrian explosion</i> of sorts that resembles the rapid
			growth of the internet boom in the early 2000s.
		</P>

		<P>
			We have an idea of what the start (Generation 1 blockchains) and the
			finish (Generation 3 blockchains) of the blockchain journey will
			look like, and an understanding of the "market forces" that will
			push us from Generation 2 to Generation 3.
		</P>

		<Figure desc="Very rough sketch of what our crypto evolution looks like">
			<Image src="/static/crypto/evolution.jpg" width={400} />
		</Figure>

		<P>
			How long will it take to evolve from our current state of competing
			dapp protocol platforms to a the full dapp ecosystem of
			interconnected blockchains and blockchain represented economies?
		</P>

		<P>
			There are only a few interchain platforms that are even worth
			mentioning at this point. Those are Ark, Polkadot, Cosmos, and
			Blockstack. Of these, only Ark seems to be anywhere close to making
			a working product beyond a whitepaper, however they are still at
			best only 50% through their{' '}
			<a href="https://ark.io/roadmap" target="_blank">
				roadmap
			</a>{' '}
			to create a working product. The Cosmos and Blockstack projects are
			focused on creating an "internet of blockchains" and a
			"decentralized internet of dapps," which is incredibly ambitious. I
			know from experience that I've had in interviewing with Blockstack
			that they are still pretty far off, and the Cosmos project faces
			it's own challenges. Polkadot is another project that holds much
			potential but still has yet a ways to go before their product gets
			released. Peering around their github page gives me the impression
			that they'd be quite lucky to have a release candidate ready for
			2018.
		</P>

		<P>
			The future of an interchain blockchain economy is quite promising
			because it would allow for much greater fluidity between different
			blockchain backed markets. We know from quite a few sources and from
			the economic theory of the{' '}
			<a
				href="https://en.wikipedia.org/wiki/Equation_of_exchange"
				target="_blank"
			>
				equation of exchange
			</a>{' '}
			that the velocity of transactions is correlated with economic
			strength.<Ref id="2" /> Industries that are built off of the
			blockchain could gain enormous value off of increased transaction
			volume between different blockchain backed markets. Once the market forces play out the blockchain backed economic future looks bright.
		</P>

		<P>
			However, baby steps will be taken before we get to this point. There
			is a process.
		</P>

		<Idea>
			Before we can reach the point of communication between different
			blockchains (Generation 3) there will be many attempts to get full
			use of the protocol token platforms that are currently available.
			2018 will be the year defined by seeing fully realized, working,
			useful dapps.
		</Idea>

		<P>
			Essentially, even though it is totally misguided in that they may
			create siloed information blockchains in the short term, we will see
			a push in the short term for discovering the next Ethereum-like
			platform to create these dapps. Fat protocol economics will push the
			price of this protocol to insanely high levels.<Ref id="3" />
		</P>

		<P>
			This year will <b>not</b> be the year defined by interchain
			blockchains. We will see Blockstack listed on coinmarketcap.com, and
			we might even see significant percentage gains in coins like Ark as
			it continues to hit milestones in its roadmap, but market gains in
			2018 will not be defined by inter-blockchain communication. The
			conversation about blockchain will not suddenly change to "how can
			we interoperate between different chains?" when there are only at
			best, marginally used blockchain applications (listed above).
		</P>

		<P>
			While we are stuck in Generation 2, the "fat protocol" thinking will
			be the kind of thinking that investors and new software developers
			will base their decisions off of - the kind of thinking that
			advocates for a "protocol platform" <b>maximalism</b>.
		</P>

		<P>
			You can boil this down to my team versus your team reasoning. The
			mindset sounds something like:
		</P>

		<Quote>
			"My platform protocol (team) is better than your platform protocol
			(team). Everyone will use my protocol (team) because your platform
			(team) is future vaporware. Look, other developers will flock to my
			platform (team) because it holds structural advantages that your
			platform (team) doesn't have, like Proof of Stake. All of the dapps
			will get built off of my protocol (team) when other devs notice how
			much better the structural advantages are. The economy will run
			through my protocol (team) because all of the transactions will
			occur through dapps built off of it, thus giving it the greatest
			transaction velocity. That's why my platform protocol (team) is
			worth everything while yours is worthless. I would never consider
			writing dapps on your platform" - your run of the mill Solidity
			developer
		</Quote>

		<P>
			Although flawed, this is the pervasive thinking. This is why I will
			limit my big investments for 2018 to platform protocols.
		</P>

		<Figure desc="This is the reality of the blockchain space in 2018. We are not mature enough to see working inter-blockchain protocol solutions, so instead I expect to see many jockeying platform protocol blockchain silos. Investors will gamble heavily to try to discover while silo will challenge Ethereum to be the leading silo. I argue that the leading silo will be the one with the most dapps.">
			<Image src="/static/crypto/protocol-reality.jpeg" />
		</Figure>

		<P>
			As a mobile software developer in industry, I've seen plenty of
			maximalist arguments made amongst iOS and Android software
			developers. In all fairness, as a developer you must learn a unique
			language to develop for each platform respectively, so you are
			forced to choose to specialize development for one operating system
			or the other, in somewhat of a zero sum fashion. Being only partly
			capable in either framework would render you useless overall if
			you're in charge of a major project. It's too cumbersome for most
			developers to try to develop for both platforms because each
			platform has a totally distinct underlying architecture and
			programming language that has it's own intricacies. Organizing a
			community around a third operating system, like Microsoft Windows
			Mobile, would put a serious strain on developers, as they can barely
			organize around themselves to maintain applications for the existing
			ones.
		</P>

		<P>
			Decentralized application development is slightly different because
			as of right now, smart contracts tend to be much shorter in codebase
			length compared to robust codebases mobile operating system
			applications. We won't be limited to only 2 major platform
			protocols, perhaps there will be room for a few more.
		</P>

		<P>
			The EOS platform is one that plans on shaking this up a bit, as they
			want to be a smart contract operating system of sorts. They want to
			be a solution that handles major parts of the application stack,
			like user authentication, the storage / file system layer, load
			balancing, and deployment.<Ref id="4" /> But they don't plan on
			fully launching their product until this June, and there is only one
			serious project being built off of it (<a
				href="https://twitter.com/Everipedia"
				target="_blank"
			>
				Everipedia
			</a>). By the time June runs around, I expect EOS to run up in
			price, however this is not a top pick for 2018 because I don't see
			many developers being able to take advantage of the EOS platform to
			produce dapps this year. Their application stack is too deep for
			most new decentralized application developers to seriously take
			advantage of quickly. Also, after meeting with some of the core
			people at an EOS meetup in New York City the other day, it didn't
			seem like the platform launch was destined to roll out smoothly.<Ref id="7"/>
		</P>

		<P>
			Investors want to see products in 2018. After the massive correction
			that we experienced in January, investor mania can be restored via
			platforms that offer ways to create <b>working</b> decentralized
			applications. It's humiliating for an investor to gamble all of his
			money away on a platform that never had a product to being with. So
			I expect platforms that offer ways of getting dapps up quickly to be
			most desireable.
		</P>

		<P>
			One project that has really caught my attention is a very new
			project called <a href="https://www.zilliqa.com/">Zilliqa</a>, which
			launched only a few weeks ago. It currently sits at 62nd in market
			cap at 5.1 cents with a total market cap of $332 million. Zilliqa
			promises to be a high-throughput blockchain, one that currently
			offers a reported 2488 transactions per second, with more potential
			to scale. It leverages Proof of Work to establish identities for its
			mining, but this operation is not performed that often so there
			aren't many energy concerns. Consensus is reached through an
			optimized "practical" Byzantine Fault Tolerant protocol, which they
			label pBFT. Advantages of pBFT are
		</P>
			
	<UL>
		<ULI>
			It is less computationally intensive than PoW, therefore consumes less energy
		</ULI>

		<ULI>
			It can leverage a small consensus group for efficiency
		</ULI>

		<ULI>
			It gives finality to transactions. Finality is, at the end of the protocol, when all the honest nodes agree on the proposed bloc. So you won't see something like "6 more confirmations required" 			
		</ULI>
	</UL>

		<P>
			This is very similar to the consensus mechanism that NEO and Hyperledger
			use. Additionally, Zilliqa's scaling is achieved through a process called sharding, which is
			what Ethereum plans on implementing over the next 3 - 5 years. Sharding is the process of splitting computation tasks amongst parallel sub-committees, outherwise known as <i>shards</i>. Big computations are broken up into many small processes that get evaluated at the same time, in parallel. This is quite interesting because they have already implemented Ethereum's scaling mechanism on their testnet years ahead of when we're projected to see it on Ethereum's.
		</P>

		<P>
			The Zilliqa project is quite refreshing in that it has pretty
			realistic expectations. They know that developers make mistakes and
			that smart contracts can't afford to have holes in them, so they've
			thrown them a bone by creating a streamlined, non-turing complete
			programming language called "Scilla" to work off of it.
		</P>

		<P>This is something that caught my attention for a few reasons</P>

		<UL>
			<ULI>
				Writing a new programming language says a lot about the quality
				of the team behind the project. I have yet to have seen any
				other protocol platform crypto implement their own unique smart
				contract programming language. This speaks volumes of the
				competence level behind the crypto. Truth be told, the project
				is run by mostly PHD researchers. The team is still quite small,
				with only 5 full time developers as of right now (plans to hire
				> 20 more).
			</ULI>
			<ULI>
				The team is concerned about contract security and potential
				hacks. A focused and limited smart contract programming language
				could be key in writing bug free code.
			</ULI>
			<ULI>
				The straightforward language syntax will get developers
				comfortable and familiar quickly. In the documentation they
				supply an contract that shows how to fund a crowdfunding
				campaign.
			</ULI>
			<ULI>
				The programming language is quite small and can compile
				relatively quickly.
			</ULI>
			<ULI>The developer documentation was very easy to read.</ULI>
			<ULI>
				You can prove the security of your smart contract using a proof
				assistant <a href="https://coq.inria.fr/" target="_blank">COQ</a>. This is a huge feature for a new smart
				contract developer looking to crack into the space, as they wouldn't have to worry about potential security holes in their smart contracts.
			</ULI>
			<ULI>
				The team has stated that they are also working with higher level
				programming languages that can compile into the Scilla which
				would serve as an intermediate language.
			</ULI>
		</UL>

		<P>
			This project feels similar to the Cardano project in a lot of ways,
			at a 30th of the market cap. Obviously they have different
			approaches to consensus and scaling. Cardano has a philosophy that
			sharding should be easy to implement once you have PoS. The
			Zilliqa team takes a different stance. Non-technically, it's perhaps
			slacking a bit behind in evangelism, however the quality of
			materials that have been released seem to be quite high. The chief
			marketing officer held a <a href="https://www.linkedin.com/in/christelquek/">leading position as 's
			head of content</a>. The Zilliqa team has been doing significant outreach
			in the United States over the past few weeks. I've seen them
			appear on podcasts, they've presented at NEO devcon, and at Stanford
			and Berkley. Community outreach extends to Reddit, Medium, Slack,
			and Telegram. The core team all can speak in English and Mandarin.
		</P>

		<P>
			However it should be stated that they are actually quite ahead of
			Cardano as they are already about to launch their testnet and plan
			on launching a mainnet within the next 3 months.
		</P>

		<P>
			Unfortunately, right now Zilliqa is only traded on a few smaller
			exchanges, Huobi, Gate.io, and Etherdelta, pulling in $11 million USD in
			volume per day. Compared to its market cap, this is a stable
			figure.
		</P>

		<P>
			Zilliqa is heavily rumored to be launching on Binance in the coming
			months. This is when I plan on adding a significant investment, as
			it would coincide with the launch of their mainnet. It also would be
			near the same time that EOS is launching their mainnet, so I'd
			expect a spike in interest levels for potential "Ethereum killers."
		</P>

		<P>
			I also have reason to believe that the price of their initial launch
			was a bit high. In the perspective of the{' '}
			<a
				href="https://medium.com/@cburniske/the-crypto-j-curve-be5fdddafa26"
				target="_blank"
			>
				crypto J-Curve
			</a>, I'd expect a consolidation over the next 2 months before
			significant rise up.
		</P>

		<Figure desc="The left image gives me bearish thoughts, while the right looks like a regular, normal, healthy correction in an otherwise very bullish market. But it's the same 1 year timeframe and the same asset being charted (total market cap). The left shows a traditional chart and the right is a log scale. 2 perspectives may have your head spinning with possibilities - so how do I approach gauging this market?">
			<SideBySide
				src1="/static/crypto/zilliqa_chart.png"
				src2="/static/crypto/j-curve.png"
			/>
		</Figure>


		<P>Potential catalysts for the Zillqa project:</P>

		<UL>
			<ULI>
				Positive news from their one main project partner,{' '}
				<a href="https://blog.zilliqa.com/partnership-with-mindshare-cd06cae713b8">
					Mindshare
				</a>, a major advertising platform bast in Asia.
			</ULI>

			<ULI>
				Positive developer feedback after working with the Scilla
				programming language, and committed dapps to the platform.
			</ULI>

			<ULI>
				Introduction of privacy features to the smart contract layer
				using primitives such as zk-SNARKs, private function evaluation
				and cryptographic commitments
			</ULI>

			<ULI>First dapps are expected in Q3 2018</ULI>

			<ULI>Early miner enthusiasm</ULI>
		</UL>

		<P>
			At 5 cents the coin is also priced favorably to crypto investors who
			still fall for the trick of buying "cheap" coins.
		</P>

		<P>
			I am also looking at how this Zilliqa will handle off-chain
			solutions
		</P>

		<P>
			I will be employing a strategy of buying a small amount of this coin
			twice a week for the next 5 weeks, as I'm not particularly sure if
			our market is out of its slump (although there are quite a few
			bullish signs as of late). Once this coin reaches Binance, I will
			also be putting a quick buy and sell to take advantage of the
			guaranteed spike in price.
		</P>

		<P>
			If the team continues to pump out positive news, and the market
			becomes bullish again, I will be keeping a close eye on this project
			for a potential Cardano-like spike. I have been quite impressed with
			the technical nature of this project and with the transparent
			messages left by the core team.
		</P>

		<TLDR>
			2018 will be the year of the dapps. For investors, that means
			investing in platform protocol tokens with underlying dapps. Keep
			tabs on Ethereum, NEO, EOS (starting in June), Stellar, and my
			darkhorse, Zilliqa.
		</TLDR>

		<FR>
			<UL>
				<ULI>
					<a
						href="https://www.coindesk.com/blockchain-token-velocity-problem/"
						target="_blank"
					>
						The Blockchain Token Velocity Problem
					</a>{' '}
					- Velocity is one of the key levers that will influence
					long-term, non-speculative value. Hence, protocol designers
					will be well served to incorporate mechanisms into their
					protocols that encourage holding, not just usage.
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

				<ULI>
					<a
						href="https://www.norupp.com/a-comparative-approach-to-crypto-asset-analysis/"
						target="_blank"
					>
						A Comparative Approach to Crypto Asset Analysis
					</a>{' '}
					- An analysis based off of the target market / potential
					market share, as well as a "crypto P/E ratio," to calculate
					the price of BAT in 2020. The P/E ratio comes from the daily
					transaction velocity.
				</ULI>

				<ULI>
					<a
						href="https://s3.eu-west-2.amazonaws.com/john-pfeffer/An+Investor%27s+Take+on+Cryptoassets+v6.pdf"
						target="_blank"
					>
						An (Institutional) Investor's Take on Cryptoassets
					</a>{' '}
					- A longer, 26 page piece on determining value of
					cryptoassets using some of the priciples highlighted in this
					book
				</ULI>

				<ULI>
					<a
						href="https://medium.com/newtown-partners/velocity-of-tokens-26b313303b77"
						target="_blank"
					>
						Velocity of Tokens
					</a>{' '}
					- Discusses how token velocity is quite misunderstood as a
					valuation metric. Token velocity is a poorly understood
					subject with potentially huge implications for valuing
					cryptoassets. Compares different techniques of measuring the
					velocity of a cryptoasset, and the effects of low and high
					velocities on the price of the crypto.
				</ULI>

				<ULI>
					<a
						href="https://vitalik.ca/general/2017/10/17/moe.html"
						target="_blank"
					>
						On Medium-of-Exchange Token Valuations
					</a>{' '}
					- Vitalik Buterin
				</ULI>
			</UL>
		</FR>

		<FR title="Zilliqa References">
			<UL>
				<ULI>
					<a
						href="https://docs.zilliqa.com/zilliqa-slides-updated.pdf"
						target="_blank"
					>
						Presentiation Slides
					</a>{' '}
				</ULI>

				<ULI>
					<a
						href="https://www.reddit.com/r/zilliqa/comments/7vlxyx/ask_us_anything_zilliqa_ama/?st=JDJ1FQHH&sh=6d3f6a10"
						target="_blank"
					>
						Reddit AMA with the core team
					</a>{' '}
				</ULI>

				<ULI>
					<a
						href="https://docs.zilliqa.com/positionpaper.pdf"
						target="_blank"
					>
						Zilliqa Position Paper
					</a>{' '}
				</ULI>

				<ULI>
					<a href="https://www.zilliqa.com/" target="_blank">
						Website
					</a>{' '}
				</ULI>

				<ULI>
					<a
						href="https://docs.zilliqa.com/whitepaper.pdf"
						target="_blank"
					>
						Whitepaper
					</a>{' '}
				</ULI>

				<ULI>
					<a
						href="https://arxiv.org/pdf/1801.00687.pdf"
						target="_blank"
					>
						Scilla language Whitepaper
					</a>{' '}
				</ULI>

				<ULI>
					<a
						href="https://docs.zilliqa.com/techfaq.pdf"
						target="_blank"
					>
						Technical FAQs
					</a>{' '}
				</ULI>

				<ULI>
					<a href="https://blog.zilliqa.com/" target="_blank">
						Zilliqa Medium Blog
					</a>{' '}
				</ULI>

				<ULI>
					<a
						href="https://blog.zilliqa.com/zilliqa-bounty-program-68e6b7e8016f"
						target="_blank"
					>
						Zilliqa Bounty Program
					</a>{' '}
				</ULI>

				<ULI>
					<a
						href="https://soundcloud.com/epicenterbitcoin/eb-209"
						target="_blank"
					>
						Epicenter Podcast
					</a>{' '}
				</ULI>

				<ULI>
					<a
						href="https://itunes.apple.com/us/podcast/crypto-101/id1262351840?mt=2&i=1000399691749"
						target="_blank"
					>
						Crypto 101 Podcast
					</a>{' '}
				</ULI>
			</UL>
		</FR>

		<FootNotes>
			<Note id="1">
				Buterin argues against the toxicity of Bitcoin maximalism{' '}
				<a
					href="https://blog.ethereum.org/2014/11/20/bitcoin-maximalism-currency-platform-network-effects/"
					target="_blank"
				>
					here
				</a>.
			</Note>
			<Note id="2">
				I have written in previous posts and sourced a few writings
				about measuring blockchain value as a function of transaction
				velocity. The most commonly approach is the equation MV = PQ,
				however
			</Note>
			<Note id="3">
				Fat protocol economics is the economic belief that the fat
				protocol layer is the one that captures the most value. This is
				bunk in my opinion. Application protocols can absolutely capture
				more value than platform protocols. Read my "Many Thin
				Protocols" post for a deeper look into this.
			</Note>
			<Note id="4">
				You can check out a basic EOS application architecure{' '}
				<a href="https://steemit.com/eos/@eosio/introducing-eos-io-application-stack">
					here
				</a>.
			</Note>
			<Note id="5">
				If you include all of the ERC20 tokens, the most processed
				transactions go through the Ethereum blockchain. -{' '}
				<a
					href="https://www.financemagnates.com/cryptocurrency/news/ethereum-blockchain-dominates-worlds-transactions/"
					target="_blank"
				>
					source
				</a>
			</Note>
			<Note id="6">
				Taken off of coinmarketcap.com -{' '}
				<a href="https://coinmarketcap.com/charts/" target="_blank">
					source
				</a>
			</Note>
			<Note id="7">
				The June deadline seemed quite ambitious and the community is not on the same page as the core team as far as governance is concerned. Although the meetup brought almost 200 interested EOS developers, not a minute of the hour and a half Q and A was spent talking about how to build dapps. Instead, I sat through an hour and a half long shouting match between the community and the core (and very libertarian) team, mostly about how potential changes could be made to EOS' "constitution" and about voting rights. 
			</Note>
		</FootNotes>
	</Post>
));
