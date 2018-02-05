// import Head from 'next/head';
// import Post from '../../../layouts/post';
// import Meta from '../../../components/post/meta';
// import Quote from '../../../components/post/quote';
// import P from '../../../components/post/paragraph';
// import Title from '../../../components/post/title';
// import Subtitle from '../../../components/post/subtitle';
// import TLDR from '../../../components/post/tldr';
// import Idea from '../../../components/post/idea';
// import Section from '../../../components/post/section';
// import { Ref, FootNotes, Note } from '../../../components/post/footnotes';
// import BIGQ from '../../../components/post/big-question';
// import UL, { LI as ULI } from '../../../components/post/bullets-list';
// import FR from '../../../components/post/further-reading';

// import Figure, { Image } from '../../../components/post/figure';

// import withViews from '../../../lib/with-views';

// export default withViews(({ views }) => (
// 	<Post>
// 		<Head>
// 			<title>
// 				Centralization Problems faced by various Consensus Mechanisms
// 			</title>
// 		</Head>

// 		<Title>
// 			Centralization Problems faced by various Consensus Mechanisms
// 		</Title>

// 		<Subtitle>
// 			One big goal of cryptoassets is to decentralize the distribution of
// 			assets. Different consensus mechanisms approach this problem
// 			uniquely, yet there seems to be no clear right answer as to which is
// 			the most decentralized. Why?
// 		</Subtitle>

// 		{/* <Meta date="January 17th, 2018" views={views} /> */}

// 		<P>
// 			Understanding the underlying functionality of the cryptoasset is
// 			incredibly insightful for understanding the asset's unique approach
// 			to a real problem.
// 		</P>

// 		<P>
// 			There are quite a few consensus mechanisms, most notable being{' '}
// 			<b>
// 				Proof of Work(PoW), Proof of Stake (PoS), Delegated Proof of
// 				Stake (DPoS)
// 			</b>{' '}
// 			and <b>Byzantine Proof of Stake (BPoS)</b>. Each consensus mechanism
// 			offers its own advantages and disadvantages.
// 		</P>

// 		<P>
// 			My goal in this post is to understand why certain cryptos use the
// 			mechanisms that do, and what thats means in a much broader crypto context.
// 		</P>

//         <BIGQ>
// 			<P>
// 				What effect does using a certain consensus mechanism mean for the cryptoasset's
// 			</P>

// 			<UL>
// 				<ULI>
// 					security and potential for being exploited by an assiduous actor
// 				</ULI>

// 				<ULI>
// 					ties with governments
// 				</ULI>
				
//                 <ULI>
//                     acceptance amongst people
// 				</ULI>
// 			</UL>
// 		</BIGQ>


//         <P>
//             I'll do this by comparing a few fundamental differences between a few cryptoassets that utilize these mechanisms - Bitcoin, Bitcoin Cash, Litecoin, Vertcoin, Ethereum, Bitshares, and Neo. Many cryptos are built off of these cryptos as these are some of the biggest and most well known cryptos around. Hopefully the difference is more distinguishable when it's put in the context of one of these cryptos.
//         </P>

// 		<Idea>
// 			<P>
// 				Satoshi outlined in the <a href='http://nakamotoinstitute.org/bitcoin/' target='_blank'>abstract</a> of the original Bitcoin
// 				whitepaper that "the main benefits are lost if a trusted third
// 				party is still required to prevent double-spending." He offered
// 				his PoW solution to eliminate the need for a trusted third
// 				party. 
// 			</P>

//             <P>
//                 Unfortunately, we now understand that there are now new
// 				kinds of threats that may arise from this kind of consensus
// 				mechanism.
//             </P>
// 		</Idea>

//         <P>
//             It makes sense to start off with dissecting Satoshi's original PoW implementation, as all of the other consensus mechanisms were built as a response to the inefficiencies of the PoW system.
//         </P>

//         <P>
//             When Satoshi originally wrote the famous whitepaper in 2008, it was a really a toy implementation, a pet project. The point that he was trying to get across in the the paper was the idea of a decentralized, middleman free, secure peer to peer payment system. The idea of something like this had only existed in primitive forms prior to the publication of the paper.<Ref id='1'/> Satoshi was the first to outline the algorithm and the full PoW consensus mechanism.
//         </P>

//         <P>
//             It's important to note that with Bitcoin at it's current price level (~ $11,000) Proof of Work is one of the most secure consensus mechanisms around.
//         </P>

//         <P>
//             However, if we want to see cryptoassets and cryptocurrencies evolve into something of larger impact, more considerations of the PoW consensus mechanisms need to be made.
//         </P>        

//         <P>

//         </P>        

//         <Figure href="https://ca.rbcwealthmanagement.com/documents/616937/616953/Crypto+Currency+%2B%20Blockchain+-+RBC+-+2018+01+03.pdf/6f959d80-b77b-43c4-80cb-38e1187793a1" desc="List of currencies and their consensus mechanisms. (NEO is BPoS)">
//             <Image src="/static/currencies_algos.png" />
//         </Figure>

//         <FR>
//             <UL>
//                 <ULI>
//                     <a href="https://www.bitcoinmining.com/bitcoin-mining-centralization">Bitcoin Mining Centralization</a>
//                 </ULI>

//             </UL>
//         </FR>

// 		<FootNotes>
// 			<Note id="1">
// 				The Nakamoto institute provides a <a href='http://nakamotoinstitute.org/literature/' target='_blank'>list of resources and papers</a> that influenced the writing of Satoshi's paper in 2008. The papers written by Nick Szabo between 1997 to 2002 are said to have had particularly  profound imfluence. However, it wasn't until Satoshi's whitepaper that we saw a full solution to the double spending problem.
// 			</Note>
// 		</FootNotes>
// 	</Post>
// ));
