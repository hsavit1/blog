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
import Podcasts from '../../../components/post/podcasts';
import Videos from '../../../components/post/videos';
import UL, { LI as ULI } from '../../../components/post/bullets-list';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import withViews from '../../../lib/with-views';

export default withViews(({ views }) => (
	<Post>
		<Head>
			<title>
				Summary of Cryptoassets, by Jack Tartar and Chris Burniske
			</title>
		</Head>

		<Title>
			Summary of <i>Cryptoassets</i>, by Jack Tartar and Chris Burniske
		</Title>

		<Subtitle>
			A brief yet opinionated summary of some of the ideas outlined in one
			of the first comprehensive investment writings about the crypto
			market
		</Subtitle>

		<Meta date="February 6th, 2018" views={views} />

		<P>
			What is a "Cryptoasset" ? It's an invented term conjured up by
			author Chris Berniske - a term that represents what Berniske calls a
			new "asset class."
		</P>

		<P>
			He created the term as a parallel between the words "equities" and
			"stocks," where stocks are distinguished as more speculative way of
			earning money by non-financial geeks. The term "asset" is meant to
			distinguish between cryptos of more inherent value verse a more
			speculative "token." According to Berniske, cryptos have evolved
			from their earlier proof of concept beginnings into an entire asset
			class of their own.
		</P>

		<P>
			I give the authors Jack and Chris a lot of credit. Their book{' '}
			<i>Cryptoassets</i> is a book written a space where it was
			undoubtedly going to be under a huge amount of community scrutiny.
			With the crypto market suddenly exploding, there was a calling for
			someone to step up and make some sense of the mania.
		</P>

		<Figure
			desc="Picture of the book. Click to go to the official webpage"
			href="https://www.bitcoinandbeyond.com/"
		>
			<Image src="/static/crypto/cryptoassets.jpg" />

			<style jsx>{`
            Image {
				margin: 10px 15px 0 0;
				box-shadow: 5px 10px 10px -5px grey;
                rgba(#000, .25);
                border-width: 1px;
                border-color: #000;
            }
		`}</style>
		</Figure>

		<P>
			Fortunately, I think the authors did a great job of getting readers
			up to speed with the history of crypto and arming them with the
			tools of a basic investment strategy for navigating the staying
			madness. The book assumes no particular knowledge of crypto, yet it
			walks the reader from an introduction to <b>what</b> crypto is, to
			understanding <b>why</b> a cryptoasset is an important piece in a
			balanced portfolio, concluding with <b>how</b> to evaluate different
			cryptoassets. These also happen to be the names of the three
			sections of the book, so I found it appropriate for me to structure
			my reflections with these as well.
		</P>

		<P>
			I don't want to regurgitate the entire read in a blog post. It makes
			the most sense for anyone who is new to investing in the crypto
			space to read this book cover to cover. There's simply too many
			details for me to cover in one post, and obviously the history of
			cryptocurrencies demand more than a single post. I'm more so writing
			this recap some of the bigger thoughts that I personally had while
			reading this.
		</P>

		<Section>
			<i>What</i>
		</Section>

		<P>
			The writing clearly indicates that the authors believe that you
			can't really gauge the future of crypto without first being able to
			paint a picture of what crypto is, what purpose it serves, and how
			it started. Telling the story of crypto through a historical lens
			seems relatively approachable because the history is only spans the
			last 10 years. However, with the amount of fervor that there is
			surrounding the blockchain, there's still tons of information packed
			into that 10 year time frame to digest. The 10,000 foot birds eye
			view of what exactly crypto is and how it all started that the
			author's give is much appreciated.
		</P>

		<P>
			In the first few chapters, the authors outline how crypto came about
			as a response to the 2008 financial crisis and the failing banks.
			The centralized too-big-to-fail banks simply could no longer be
			trusted to safely hold your money, and the system demanded a more
			secure and decentralized technology to act as an alternative.
		</P>

		<P>
			The authors found it important to walk the novice reader through
			Satoshi's Bitcoin inception in 2008 and all of the ideas behind his
			simple Proof of Work blockchain. The blockchain is the result of a{' '}
			<i>cryptographic</i>, <i>immutable</i>, <i>public</i>, and global
			distributed computing system.
		</P>

		<P>
			To a layman, coming into an understanding of Bitcoin and the
			blockchain with starts with talking about these three major ideas:
		</P>

		<UL>
			<ULI>
				<b>Cryptographic</b>: The mathematics behind what allows the
				computers to collaborate on an automated system of trust.
			</ULI>

			<ULI>
				<b>Immutable</b>: The blockchain is an append only system of
				information over a distributed system. This is the basis for
				understanding the ideas behind Proof of Work, how cryptographic
				information is grouped in blocks, and how the connections
				between blocks are chained together (blockchain).
			</ULI>

			<ULI>
				<b>Public</b>: Anyone, anywhere can connect to the Bitcoin
				network over an internet connection
			</ULI>
		</UL>

		{/* <Quote>
            "we will focus on public blockchains and their native assets, or what we will define as <b>cryptoassets</b>, because we believe this is where the greatest opportunity awaits the innovative investor."
        </Quote> */}

		<P>
			Once this is established, you can move into separating the
			differences between the blockchain and Bitcoin, and the potential of
			blockchain as a unique piece of technology.
		</P>

		<P>
			The authors cite the{' '}
			<i>Gartner's Hype Cycle for Emerging Technologies</i> as a thought
			provoking way of thinking about the learning process relationship
			when it comes to new innovative technologies:
		</P>

		<UL>
			<ULI>Innovation Trigger</ULI>

			<ULI>Peak of Inflated Expectations</ULI>

			<ULI>Trough of Disillusionment</ULI>

			<ULI>Slope of Enlightenment</ULI>

			<ULI>Plateau of Productivity</ULI>
		</UL>

		<Figure
			desc="The technology hype cycle"
			href="https://en.wikipedia.org/wiki/Hype_cycle/"
		>
			<Image src="/crypto/trough-of-dis.png" />
		</Figure>

		<P>
			At this time of this writing, they claim that Bitcoin is emerging
			from the third stage, the "trough." You can use the Gartner tool to
			think about the developer community interest or investor interest.
			In terms of investor interest, we can say that this was that long
			period from 2014 to mid 2016 where the price of Bitcoin If this book
			were written today, I'd say that we experienced the "Technology
			Trigger" in late 2017, and now that we have experienced a 60%
			Bitcoin market crash, we are in the "Trough of Disillusionment"
			phase. It's hard to say - you'd benefit from taking a short term and
			a long term perspective on this. Long term, we might even still be
			in the technology trigger phase. Regardless, I liked the concept of
			putting our growing relationship with Bitcoin in terms of the
			relationships that we've had with other technologies that were once
			new to us.
		</P>

		<P>
			The history lesson continued with another chapter devoted to other
			classic altcoins, like Bytecoin, Monero, Litecoin, Ripple, Steem,
			and ZCash. Understanding the differences between these and Bitcoin
			is the next major step in the exploration of cryptocurrencies. These
			major discerning differences are their supply schedule, their
			consensus mechanism, and the level of premining and funds designated
			for the core teams.
		</P>

		<P>
			A whole chapter of the birth and evolution of Ethereum and dApps
			followed. The authors want the readers to understand how Ethereum is
			defining a new generation of cryptoasset, different from the classic
			ones. dApps introduce the idea of dApp native resources known as{' '}
			<i>cryptotokens</i> also known as <i>app tokens</i>, and{' '}
			<i>cryptocommodities</i>. Many dApps use cyptotokens as their native
			units, and use Ether as the cryptocommodity to pay for those ERC-20
			cryptotokens.
		</P>

		<P>
			Overall, this section was brief but served as a nicely put together
			refresher on the history of crypto from an investor's perspective.
			The history of some of the altcoins like monero was an appreciated
			addition. Personally I think potential investors would benefit
			significantly from more reading about Bitcoin's history than what
			was outlined, but the authors did link to a few supplementary
			resources to get the student started and mentioned more than enough
			details in passing for the more inquisitive types to get started.
		</P>

		<Section>
			<i>Why</i>
		</Section>

		<P>
			This was the most thought provoking section of the book for me, as
			it pitched why cryptos should be considered for a part in any
			investor's portfolio. Essentially, why do cryptoassets have value?
			The authors consider a few classic investment strategies and apply
			them to cryptoassets.
		</P>

		<P>
			<b>Modern Portfolio Theory</b> (MPT) is a commonly referenced nobel
			prize winning strategy which provides for the construction of
			investment portfolios that maximize expected returns based upon a
			targeted level of risk. Higher returns come from higher levels of
			risk, and the <i>efficient frontier</i> defines the maximum possible
			expected return for a given level of risk. In an investment
			portfolio that takes MPT seriously, the cryptoassets can serve as
			the efficient frontier assets in that portfolio.
		</P>

		<Quote>
			"The use of this concept is valuable for building portfolios because
			it helps to visualize how some types of assets won't provide enough
			return for the risk taken."
		</Quote>

		<P>
			We want an investment that can preform well in both bull and bear
			markets. Innovative investors realize that portfolio risk can be
			mitigated by including assets that aren't correlated with
			traditional markets - cryptoassets are a prime example of this kind
			of asset. We want assets that can do well even when other
			investments are performing poorly.
		</P>

		<Quote>
			"The potential of Bitcoin and other cryptoassets is so great that we
			believe they should be considered an asset class of their own."
		</Quote>

		<P>
			The authors also mention the <b>Sharpe Ratio</b> as a method that
			can be used to calculate returns per the unit of risk taken -
			(Average Expected Returns / Standard Deviation). The higher the
			ratio, the better an asset is for compensating an investor for the
			associated risk. 2014 was the only year we had a negative Sharpe
			Ratio in Bitcoin.
		</P>

		<P>
			A discussion of the Sharpe Ratio also raises the discussion of price
			volatility. Young cryptos initially are going to be very volatile
			because they have limited trading volume and a thin order book.<Ref id="1" />{' '}
			Bitcoin has been more volatile than major tech companies like
			Amazon, Facebook, Netflix or Google, but has also had the best
			risk-reward ratio of all of those assets.
		</P>

		<P>
			So if you consider the absolute returns of Bitcoin + its volatility
			(standard deviation of the daily percent price changes) you get the
			Sharpe Ratio. When you do this you can calculate the returns on your
			investment for the amount of risk taken. Bitcoin again leads the
			tech pack considerably in this calculation. It also leads the
			indexes such as the S&P, the DJIA and the Nasdaq.
		</P>

		<P>
			A moderately ambitious investor could see an asset allocation of 70%
			stocks and 30% to bonds. Seeing how cryptoassets are uncoupled with
			the rest of the market, and given the strength of their Sharpe
			Ratio, it could make a lot of sense for a firm to operate with 1% of
			their portfolio invested in cryptoassets.
		</P>

		<P>
			Now that the authors have laid out the arguments for investing in
			cryptoassets, the next question that they ask is - what assets
			should we be looking into?
		</P>

		<Quote>
			"An asset class is a set of assets that bear some fundamental
			economic similarities to each other, and that have characteristics
			that make them distinct from other assets that are not part of that
			class."
		</Quote>

		<P>
			This quote is helpful for grouping all of the cryptos into their own
			asset class but it doesn't discern the differences between different
			cryptoassets. Looking deeper, we spot differences between
			cryptoassets that can be broken down into
		</P>

		<UL>
			<ULI>
				<i>Governance</i> - this can include the core development team,
				the miners, a organization supporting the coin, the companies
				using the the cryptoasset, the actual government, and the
				regular users. What influence does each group have on the
				development of the coin?What regulations is this coin limited
				by?
			</ULI>

			<ULI>
				<i>Supply Schedule</i> - we know Bitcoin tops out at 21 million
				coins by 2140, and gets there by cutting the rate of supply
				level inflation every 4 years. Satoshi built this system because
				he wanted to bootstrap support for Bitcoin, so he gave the early
				adopters a disproportionate amount of mining reward. This is
				possibly one of the most genius features that was incorporated
				into Bitcoin, as it was able to drive steady adoption to the
				near $10K price levels today. Coins like Steem have a much
				different issuance policy.
			</ULI>

			<ULI>
				<i>Use Cases</i> - Stores of value, privacy coins, file coins,
				etc.
			</ULI>

			<ULI>
				<i>Basis of Value</i> - the combined utility and speculative
				drivers of value, where utility value refers to the blockchain
				use case and demand, and where speculative value is the value
				that investors see for the asset in the future. Utility value
				for something like Bitcoin can be determined by how fluid the
				Bitcoin market is - to determine this you can look at the daily
				volume. The authors recommend looking at the development team to
				determine speculative value. I personally highly disagree with
				this - I think that most investors have absolutely no idea how
				to grade development team quality. The quality of the
				development team is more measurable by reading the codebase or
				at least by following along with the developer documentation.
			</ULI>
		</UL>

		<P>
			Now that the authors have laid out what exactly cryptoassets are,
			they felt the need to also show what their trading volumes have
			looked like. When looking at cryptos, if you don't know what kinds
			of crazy cycles they go through, you'll probably be dead in the
			water.
		</P>

		<P>
			We know that when a cryptoasset is launched, there's likely to be
			elevated levels of volatility. This also coincides with giant swings
			in volume.
		</P>

		<P>
			As the asset matures, there will be more liquidity in the market,
			leading to less volatility. The introduction of new exchanges as
			well as more crypto trading pairs would increase market fluidity and
			more liquidity.
		</P>

		<P>
			But there are the other factors. Media manipulation and the
			speculation of crowds can't be discounted in these markets.
		</P>

		<P>Market destabilization can be tied to</P>

		<UL>
			<ULI>The speculation of crowds</ULI>

			<ULI>"This time is different" thinking</ULI>

			<ULI>Ponzi schemes</ULI>

			<ULI>Misleading information from asset issuers</ULI>

			<ULI>Cornering and pump and dump schemes</ULI>
		</UL>

		<P>
			We've already seen this happen over the past few months (after this
			book was written). In this new emerging technology space, this
			thinking is somewhat predictable. It's not uncommon to see price
			fluctuations of 60 - 90%. We see price increases of hundreds of
			percentage points followed by long descending tails.
		</P>

		<P>
			The hype cycle is very predictable. There's a referenced phenomenon
			that they call the <i>Greater Idiot Ideal</i> which says that as
			long as you can easily find someone dumber than you to buy your
			stuff at a higher price that you'll be fine. When everyone comes to
			the realization that the stuff is really worthless, that's when you
			can sniff out a major crash.
		</P>

		<P>
			Stay away from potential scam coins and ponzi schemes. Look for the
			signs such as
		</P>

		<UL>
			<ULI>Overly Consistent returns</ULI>

			<ULI>Secretive and complex fee structure strategies</ULI>

			<ULI>Difficulty in transferring payments</ULI>

			<ULI>Comes form someone with a shared affinity</ULI>

			<ULI>Lack of open source materials</ULI>

			<ULI>No communication outlets with the core team</ULI>
		</UL>

		<P>
			This section should have emboldened the reader with an understanding
			of how to look at crytpoassets and prepared them from being
			blindsided by a significant market moving event.
		</P>

		<Figure
			desc="This is the 'Crypto J-Curve' - something that the author had mentioned in a blog post, and is a phenomenon that has consistently described the price graphs of crypto. A typical crypto graph could contain a few J-curves."
			href="https://medium.com/@cburniske/the-crypto-j-curve-be5fdddafa26"
		>
			<Image src="/static/crypto/j-curve.png" />
		</Figure>

		<Section>
			<i>How</i>
		</Section>

		<P>
			This final section introduces a few trading strategies for
			fundamental and technical analysis for the potential cryptoasset
			investor.
		</P>

		<P>
			Things to look at when analyzing the fundamental properties of an
			asset include the
		</P>

		<UL>
			<ULI>
				<i>White paper</i> - you're looking at the document that's
				written by the thought leader of the project. There should be an
				abundance of information about it listed here. Anything less
				should keep you very skeptical of a scam, marketing operation.
			</ULI>

			<ULI>
				<i>Decentralization edge</i> - what problem does this crypto
				solve?{' '}
				<b>
					Why use a blockchain? Are these decentralized networks able
					to gain traction faster than traditional centralized ones?
				</b>
			</ULI>

			<ULI>
				<i>Lindy Effect</i> - gauges the life expectancy of the
				technology. Bitcoin his the longest life expectancy because,
				it's been around the longest. If a new crypto is exposed as
				fraudulent, like a vulnerability is exposed, the community
				around it could quickly disperse. However, if a crypto has solid
				engagement and has success early on, it can resist fragility,
				just like how Ethereum resisted the DAO hack and the parity
				hack. See the Further Reading section for more about this.
			</ULI>

			<ULI>
				<i>Valuation</i>:
				<UL>
					<ULI>
						<i>Utility value</i>: Utility value is directly related
						to supply and demand characteristics. For Bitcoin, it
						could be that you can use it to safely and efficiently
						transfer value to anyone in the world. So what justifies
						the $10K per coin price? This is determined by figuring
						out the threshold amount of Bitcoin to serve the
						internet economy that it supports. You can make the
						argument that the price for Bitcoin is the minimum price
						necessary to drive the trust in it's adoption.
					</ULI>

					<ULI>
						<i>Speculative value</i>: The belief of how much utility
						value bitcoin may have left for the future
					</ULI>

					<ULI>
						<i>The velocity of money</i>: We can describe the
						velocity as the rate of turnover into fiat currencies.
						Essentially, is the crypto being used to actually
						purchase things? More velocity ~ more transactions ~
						more fluid economy ~ more value. There's an equation, V
						= PQ/M that's used to measure the velocity of
						transactions. Don't forget to consider the time frame
						the amount of units that will be available at the
						transaction time of the transaction as inflation costs
						can play a factor. There's a lot of writing linked here
						in the Further Reading section at the bottom of the
						page. Because of how important the transaction velocity
						measurement is for figuring out the value and the
						strength of an economy, there are a few competing
						opinions about how we should calculate this. I highly recommend looking into those other sources. 
					</ULI>

					<div
						style={{
							height: 240,
							display: 'flex',
							'justify-content': 'center',
							'align-items': 'center',
							'flex-direction': 'column',
							'margin-top': 0,
							'margin-bottom': 0,
							'margin-left': 0,
							'margin-right': 0,
						}}
					>
						<TwitterTweetEmbed tweetId="952625373614870534" />
						<Quote>
							Clearly, there's a lot to be learned about the velocity of transactions in crypto
						</Quote>
					</div>

					<ULI>
						<i>Discounting</i>: What is the annual inflation rate?
						How much should you pay for something now if it is going
						to be worth more in the future? Discounting is the
						reverse of interest accruing. Discounting is a function
						of risk - which for cryptos could be more than 30%. The
						authors note that this is more than double that of
						common risky stocks.
						<P />
						<P className="indent">
							Say Bitcoin has a discount rate of 30%, and the
							current price is $1000. If you predict that Bitcoin
							will reach a value of $12,382 over 10 years, and
							apply the discount rate of 30%, then that would make
							the current price of Bitcoin to be overvalued
							because ($12,380 / 1.3 ^ 10) = $898. Of course, this
							methodology is mostly garbage in, garbage out
							because it assumes so many different things.
							<style jsx>{`
								//make an indent P component

								P {
									margin-left: 20px;
									background-color: #555;
								}
							`}</style>
						</P>
					</ULI>
				</UL>
			</ULI>

			<ULI>
				<i>Community and developers</i>
			</ULI>

			<ULI>
				<i>Relation to digital siblings</i>: What is the relation of a
				certain type of crypto to other cryptos of that same type?
			</ULI>

			<ULI>
				<i>The issuance model</i>
			</ULI>
		</UL>

		<P>
			Asset security also cannot be overlooked. In a lot of ways, the
			security is the essence of cryptocurrencies. The "crypto" part of
			the word is saying that directly - crypto implies cryptography which
			implies mathematical security and truth. Security is a measure of
			protection from 51% attacks and a measure of the decentralization
			potential of the asset. It's also a measure of the decentralization
			of the miners, who, as with what we had seen from the Bitcoin Cash
			hard fork, can have a huge influence of the centralization of the
			project.
		</P>

		<P>
			The larger an asset grows in hash rate and liquidity, the more
			momentum and inertia it builds up, decreasing the likelihood of a
			51% attack. Additionally, as the mining power grows, the value of
			the "world computer" grows, because the total cost of all the
			distributed machines has increased. More computing power implies
			more computers which implies more inherent / utility value.
		</P>

		<P>
			Another thing to be cautious of is the power of specialized ASIC
			optimized miners. These are another potential threat to
			centralization as some miners may develop a much greater mining
			power edge over other miners at a fraction of the cost.<Ref id="2" />
		</P>

		<P>
			Software security risks can be mitigated with more developer support
			and a powerful developer community. It's nice when you see an
			official organization supporting and coordinating the maintenance
			duties of a crypto, such as the Ethereum Enterprise Alliance or the
			IOTA foundation, or EOS' Block.one.
		</P>

		<P>More decentralization metrics:</P>

		<UL>
			<ULI>Number of exchanges where you can buy the crypto</ULI>

			<ULI>Geolocation diversity</ULI>

			<ULI>Strength of whales</ULI>

			<ULI>Transaction Volume</ULI>
		</UL>

		<P>
			Clearly there's quite a few metrics you can use to come up with a
			valuation for crypto. Towards the end of the book the authors start
			focusing on one metric that they clearly find to be of particular
			importance - this is utilizing the volume as a basis for measuring
			the network strength. They introduce a "Crypto PE ratio" of sorts,
			which is the (network value / daily transaction volume), where the
			network value is the total market cap of the circulating coins. The
			larger the number the more of an indication that the price has
			outpaced its utility.
		</P>

		<P>
			These are most of the fundamental analysis ideas laid out in detail
			in this book. From here, you can also look at some technical
			analysis, which is the evaluation of the price and volume movements
			of an asset over time to help with the timing of buys and sells. I
			don't want to write about this part much, so I'll just throw some
			keywords that I've highlighted out there
		</P>

		<UL>
			<ULI>Trading Range</ULI>

			<ULI>
				Simple Moving Average - smooths out the price trends over a
				period of time
			</ULI>

			<ULI>Death Cross</ULI>

			<ULI>MACD</ULI>
		</UL>

		<P>
			I will end the summary here. The rest of the book encourages readers
			to look at potential trusts, ETFs, and ICOs, and of course pay
			attention to pending SEC regulations.
		</P>

		<Section>Concluding Thoughts</Section>

		<P>
			I hope that, at the very least, you skimmed down all the way to the
			bottom to read this conclusion and noticed how much you had to
			scroll just to get here. This summary was <b>long</b> - way longer
			than I wanted it to be, but I guess that's just the nature of
			getting into crypto investing. If you're somewhat new to crypto
			investing I highly encourage you to pick up this book. Unless you're
			quite the seasoned crypto investor, the book could really help you
			organize your thinking and approach to crypto investing.
		</P>

		<P>
			Don't pick up this book expecting to be some kind of blockchain
			expert. After reading you'll be equipped with some basic tools to
			think about cryptoassets from an investment standpoint. If you work
			for a bigger investment firm maybe you'll ask them to allocate a
			small percentage of the portfolio into the cryptoasset class. If you
			want to specialize in your crypto and blockchain knowledge then you
			will absolutely have to do much more work, but this book can serve
			as a good starting point. Piecing together the story of crypto isn't
			easy as the blockchain space seems to move so much faster than any
			other technological space that I have involved myself in thus far.
		</P>

		<P>
			If you're not an investor you'll still want to read this to see an
			investor's perspective - which can be quite calming in the climate of
			outrageous mania emotions that are systemic
			in the crypto space.
		</P>

		<P>
			I've listed some supplementary materials below. Most of these
			involve the authors in some capacity.
		</P>

		<FR>
			<P>
				The author Chris Berniske has a ubiquitous public image in the
				blockchain space. You can find him talking about the book or
				about parts of the book in quite a few different places. He's on
				a few podcasts and his medium page is also filled with some
				quality material.
			</P>

			<UL>
				<ULI>
					<a
						href="https://medium.com/@cburniske/cryptoasset-valuations-ac83479ffca7"
						target="_blank"
					>
						Cryptoasset Valuations
					</a>{' '}
					- The MV = PQ transaction velocity equation is broken down with a few examples
					here
				</ULI>

				<ULI>
					<a
						href="https://medium.com/@cburniske/the-crypto-j-curve-be5fdddafa26"
						target="_blank"
					>
						The Crypto J-Curve
					</a>{' '}
					- Berniske talks about the typical price trajectory taken by
					new cryptos. "For the cryptoassets that have actual utility
					value, this waxing and waning pattern will create a price
					chat that resembles a familiar pattern: the J-curve." The
					J-curve is a price manifestation of the above shifts in
					market sentiment and utility value. This is really helpful
					supplementary information for understanding crypto price
					swings
				</ULI>

				<ULI>
					<a
						href="https://medium.com/@cburniske/why-i-like-the-term-cryptoassets-ab6b76e1ee33"
						target="_blank"
					>
						Why I like the term, “Cryptoassets”
					</a>{' '}
					- Bernike talks about the taxonomy of "cryptoassets" and why
					the term is appropriate
				</ULI>

				<ULI>
					<a
						href="https://medium.com/blockchannel/on-value-velocity-and-monetary-theory-a-new-approach-to-cryptoasset-valuations-32c9b22e3b6f"
						target="_blank"
					>
						On Value, Velocity and Monetary Theory A New Approach to
						Cryptoasset Valuations
					</a>{' '}
					- The author of this post attempts to create another
					valuation technique. Clearly, finding a reliable technique
					for determining value is not easy
				</ULI>

				<ULI>
					<a
						href="https://hackernoon.com/welcome-to-bitcoins-trough-of-disillusionment-a64f64caf1b8"
						target="_blank"
					>
						Welcome to Bitcoin’s “Trough of Disillusionment”
					</a>{' '}
					- The "trough" phase of the technology hype cycle with
					respect to Bitcoin has been called almost as many times as
					the "Bubble Top." The author asks the question: "Is there
					really a technology revolution going through this Hype
					Cycle?... or will this go bust?" and concludes with a
					recommendation to "invest in the technology, not the price."
				</ULI>

				<ULI>
					<a
						href="https://medium.com/incerto/an-expert-called-lindy-fdb30f146eaf"
						target="_blank"
					>
						An Expert Called Lindy
					</a>{' '}
					- Nassim Taleb discusses the phenomena of the Lindy Effect
					and puts it in the perspective of anti-fragility
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
			</UL>
		</FR>

		<Videos>
			<UL>
				<ULI>
					<a href="https://www.youtube.com/watch?v=UrMQGBA-laM">
						Ringing the Bell on a New Asset Class
					</a>
				</ULI>

				<ULI>
					<a
						href="https://www.youtube.com/watch?v=ooKXtFoMjtY"
						target="_blank"
					>
						What are Cryptoassets Actually Worth? with Chris
						Burniske
					</a>
				</ULI>
			</UL>
		</Videos>
		<Podcasts>
			<UL>
				<ULI>
					<a href="https://www.youtube.com/watch?v=R0Vvd7MwBYk">
						{' '}
						EpicCenter podcast
					</a>
				</ULI>

				<ULI>
					<a href="http://investorfieldguide.com/burniske/">
						{' '}
						Investor's Field Guide Podcast
					</a>
				</ULI>

				<ULI>
					<a href="http://unchainedpodcast.co/want-higher-returns-invest-in-bitcoin-say-arks-chris-burniske-and-coinbases-adam-white">
						{' '}
						Unchained Podcast
					</a>
				</ULI>

				<ULI>
					<a href="https://www.hiddenforcespod.com/value-cryptocurrency-chris-burniske-cryptoassets/">
						{' '}
						Hidden Forces Podcast
					</a>
				</ULI>
			</UL>
		</Podcasts>

		<FootNotes>
			<Note id="1">
				The amount of money in the market is known as{' '}
				<i>market liquidity</i>. Usually if a market is more liquid a
				market it is considered to be more stable.
			</Note>

			<Note id="2">
				There's an index called the Hirfindahl-Hirschman Index (HHI)
				that measures the market concentration and market competition.
			</Note>
		</FootNotes>
	</Post>
));
