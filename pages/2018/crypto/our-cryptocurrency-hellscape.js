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

import withViews from '../../../lib/with-views';

const red = ({ children }) => (
	<h1>
		{children}
		<style jsx>{`
			h1 {
				display: inline;
				color: #ff001f;
			}
		`}</style>
	</h1>
);

export default withViews(({ views }) => (
	<Post>
		<Head>
			<title>Our Cryptocurrency Hellscape</title>
		</Head>

		<Title>Our Cryptocurrency Hellscape</Title>

		<Subtitle>
			The cryptocurrency space just went from being one of the all time
			great cash grab parties to a total bloodbath. How did we get here?
			Where do we go next?
		</Subtitle>

		<Meta date="January 17th, 2018" views={views} />

		{/* Part 1 */}
		<Section>
			<i>Where are we?</i>
		</Section>

		{/* Scene */}
		<P>
			Today is January 17th 2018. The crypto market is currently
			experiencing one of the worst downturns of the past year. Panic
			sells are being made across the board. 100 out of 100 of the top
			cryptos is in the red. I rarely check Reddit, especially when it
			comes to cryptos, but I was interested in seeing how people were
			reacting to the pandemonium. You know that people are unwell when
			you see Reddit's number 1 post of the day is a{' '}
			<a href="http://www.imdb.com/title/tt1285016/" target="_blank">
				suicide hotline support number
			</a>
			{''}
			. This comes amidst growing fear propagated by CNBC that South Korea
			is going to{' '}
			<a
				href="https://www.cnbc.com/2018/01/11/bitcoin-ripple-ethereum-prices-fall-after-south-korea-trading-ban-talk.html"
				target="_blank"
			>
				ban cryptocurrencies{''}
			</a>{' '}
			and that China is going to{' '}
			<a
				href="https://www.cnbc.com/2018/01/10/china-moves-to-shutter-bitcoin-mines.html"
				target="_blank"
			>
				ban mining
			</a>{' '}
			<i>AND</i>{' '}
			<a
				href="https://www.cnbc.com/2018/01/16/peoples-bank-of-china-virtual-currency-trade-report.html"
				target="_blank"
			>
				trading
			</a>. To top it all off, Bitconnect, one of the most notorious<Ref id="1" />{' '}
			<a
				href="https://www.youtube.com/watch?v=SVoFYeZzQeI"
				target="_blank"
			>
				blockchian ponzi schemes
			</a>, declared that it is{' '}
			<a
				href="https://thenextweb.com/hardfork/2018/01/16/bitconnect-shut-down-closed/"
				target="_blank"
			>
				shutting down
			</a>.
		</P>

		{/* Scams */}
		<P>
			This comes 2 months after some of the most absurd gains I've ever
			seen. TRON (TRX) exploded 15,000% in 2 months<Ref id="2" />. Verge
			(XVG) 30,000% in even less time<Ref id="3" />. The total crypto
			market cap has exploded hundreds of billions of dollars, from 175
			billion on October 23rd to 828 billion on January 7th. This kind of
			market movement is unprecedented, and even the New York Times has{' '}
			<a
				href="https://www.nytimes.com/2018/01/13/style/bitcoin-millionaires.html?smid=pl-share"
				target="_blank"
			>
				taken notice
			</a>{' '}
			of the great crypto party of 2017.
		</P>

		{/* Part 2 */}
		<Section>
			<i>How did we get here?</i>
		</Section>

		<P>
			This is a billion dollar question, so it's worth documenting what we
			can reason right now.
		</P>

		<P>
			The total marketcap rise largely came from the rise of the altcoins.
			We know this because Bitcoin dominance went from more than{' '}
			<a href="https://coinmarketcap.com/charts/" target="_blank">
				60% of the market in late October to only 33% on January 7th
			</a>, yet we also saw the market cap rise by 650 billion dollars.
			From late August up until late October, the market had been mostly a
			story about Bitcoin, and its momentous Thanksgiving rise to 10K.
			Altcoins had done very little in that time, and their prices in
			relation to Bitcoin tumbled. It was only a matter of time before the
			altcoins closed the gap as they had done last June.
		</P>

		{/* New Users */}
		<P>
			Undoubtedly, the number of new people entering the market was also a
			factor. Coinbase, the world's number 1 exchange, had reported users{' '}
			<a href="https://cointelegraph.com/news/bitcoin-going-mainstream-coinbase-has-more-users-than-charles-schwab">
				signing up in record numbers
			</a>{' '}
			and Binance had been reported to add{' '}
			<a
				href="https://www.bloomberg.com/news/articles/2018-01-11/world-s-top-ranked-crypto-venue-added-240-000-users-in-one-hour"
				target="_blank"
			>
				240,000 users in an hour
			</a>. All of these new investors inject new money into the market.
		</P>

		{/* New Locations */}
		<P>
			My condensed theory is that the allure of making Bitcoin-like
			profits marticulated into the altcoins. Young investors were willing
			to make dangerous moves into coins like Tron and Verge, with the
			hopes that they would see insane returns. These investors did not
			care for traditional investment principles, the market was simply
			moving too fast to read up on{' '}
			<a
				href="https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Essentials/dp/0060555661"
				target="_blank"
			>
				the classics
			</a>{' '}
			or read countless 30 page whitepapers. A large percentage of the
			investment coming in is from people who don't even understand the
			concept of what a blockchain is. No physical products exist, and you
			don't see any blockchain in mass use other than Bitcoin's.
		</P>

		<P>
			When the new investors didnt't know where to look, they turned to
			cheap sources of quick information - Youtube, Facebook, Twitter and
			Reddit became the schill centers of the internet. People with any
			sense of grip of understanding like{' '}
			<a href="https://bitcointalk.org/index.php?topic=2649386.msg27519098">
				John McAfee
			</a>{' '}
			could lead to epic pumps, just as Jamie Dimon caused the first epic{' '}
			<a href="https://www.bloomberg.com/news/articles/2017-09-12/jpmorgan-s-ceo-says-he-d-fire-traders-who-bet-on-fraud-bitcoin">
				dump
			</a>. The mania was palpable. Any new information quickly translated
			into price as all kinds of long term thinking had totally
			evaporated. Additionally, whispers of coins floating onto new
			exchanges led to some of the most extreme pumps I've ever seen.
			Ripple, being the prime example. <Ref id="4" />
		</P>

		<P>
			There was no down pressure on the market, no way to short, until the
			futures arrived in mid December. Basic game theory would tell us
			that the most reasonable thing for the market to do was to pump,
			because everybody benefited. Additionally the new investors were
			comfortable with FOMO trading and chasing, even though traditional
			trading strategies would tell you to avoid those at all costs.
		</P>

		<P>
			So once futures and negative pressure was thrown into the mix, you
			might say that it was only a matter of time before a collapse. All
			of the mania signals and bubble signals were there, but nobody could
			call a top. It's difficult where you're dealing with a new asset
			class like a cryptocurrency, because price becomes directly tied to
			sentiment. There is seemingly no cap, unless you look at the
			transaction fees or the environmental impact. <Ref id="5" />
		</P>

		<P>
			The futures market has shaken things up a bit. For the first time,
			we have a substantial amount of people who have real incentives to
			bring the price of Bitcoin down as low as possible. Bitcoin has
			entered futures markets of the CME and the CBOE in December and has
			since plummeted in price. Because Bitcoin still serves as the main
			ticket into the altcoin trading market, the plummeting price has
			spread like a virus into the rest of the altcoins.
		</P>

		<Section>
			<i>Where do we go next?</i>
		</Section>

		<P>
			People are panic selling across the board. The futures market whales
			are shaking out all of the new and inexperienced investors. Bitcoin
			continues to test the 10K psychological barrier, which is a huge
			resistance point for most new traders. When mettle is tested, the
			first things that will be let go of will be the shitcoins, the ones
			that were only purchased because of impulse and word of mouth. Hence
			the 70% dips in Tron and Ripple. However, a new class of coins with
			real value, that solve real problems, will emerge from the
			wasteland. Our job as sane investors is to find these new coins.
		</P>

		<P>
			Bitcoin came about in 2008 in reaction to the worst market crash of
			the modern era. Centralization around the banks that were "too big
			to fail" brought down the entire economy. Ironically, the next
			Bitcoin (maybe it's Vertcoin?) will be created in reaction to the
			crash ultimately initiaed by centralization around Bitcoin. I will
			continue to try to understand and identify the best and most
			reasonable solutions.
		</P>

		<FootNotes>
			<Note id="1">
				Bitconnect has since been removed from Reddit,
				coincmarketcap.com, and has closed their website and Youtube
				channels. The coin has plummeted to almost nothing in value. The
				video should be enough to tell you that it is a pure ponzi
				scheme.
			</Note>

			<Note id="2">
				Tron's rise in the market has been the most disturbing to me.
				The founder, 26 year old Justin Sun, is a notoriously annoying
				yet effective schiller on{' '}
				<a href="https://twitter.com/justinsuntron" target="_blank">
					Twitter
				</a>. Additionally the Tron whitepaper is full of{' '}
				<a
					href="https://medium.com/cryptocurrency-financial/tron-trx-plagiarism-allegations-brings-coin-60-down-since-friday-1461dfc604b1"
					target="_blank"
				>
					plagiarism
				</a>.
			</Note>

			<Note id="3">
				Verge is also notorious for its single man dev team and its
				status as a{' '}
				<a
					href="https://monero.stackexchange.com/questions/6813/what-is-the-difference-between-monero-xmr-and-verge-xvg"
					target="_blank"
				>
					lower quality privacy coin
				</a>{' '}
				compared to Monero.
			</Note>

			<Note id="4">
				Ripple's rise was painful to witness. I'm of the opinion that
				Ripple is a coin that can never make it. It's too centralized
				around the Ripple organization. It had turned Ripple's
				co-founder into one of the world's richest people{' '}
				<a href="http://markets.businessinsider.com/news/stocks/ripple-xrp-co-founder-chris-larsen-worth-37-billion-2018-1-1012408621">
					overnight
				</a>. Hilariously and thankfully, Ripple's price has plummeted
				70% since CNBC held a segment on how to buy it.
			</Note>
			<Note id="5">
				Bitcoin, with its Proof of Work consensus mechanism, can only
				rise so much in price and use, as its energy consumption is
				dangerously tied to{' '}
				<a href="https://arstechnica.com/tech-policy/2017/12/bitcoins-insane-energy-consumption-explained/">
					climate change
				</a>.
			</Note>
		</FootNotes>
	</Post>
));
