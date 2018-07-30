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
			<title>Reflection: Fat Protocols</title>
		</Head>

		<Title>Reflection: Fat Protocols</Title>

		<Subtitle>
			A reflection on the most influential non-technical piece I've read regarding crypto 
		</Subtitle>

		<Meta date="January 28th, 2018" views={views} />

        <P>
            If you need to read one article about the future of Ethereum, or if you'd like to understand crypto applications, also known as dapps (decentralized applications) make it <a href='http://www.usv.com/blog/fat-protocols' target='_blank'>this one</a>.
        </P>

        <P>
            I'm in the middle of writing a few other posts and doing a whole bunch of other things, however I thought it was important to make a short post to readdress how important that piece is.
        </P>

        <P>
            The article distills the idea of our future web 3.0 and decentralized applications into 1 simple idea: the fat protocol. 
        </P>

        <P>
            The way the web is currently architected is around a few protocols: HTTP (HyperText Transfer Protocol) for transferring HTML markup, SMTP (Simple Mail Transfer Protocol) for email transmission, and TCP/IP (Transmission Control Protocol/Internet Protocol), the suite of communications protocols used to connect hosts on the Internet.
        </P>

        <P>
            There are a few more but this is basically 99% of use cases. All the websites that you visit essentially perform functions on top of what these protocols are capable of doing.
        </P>

        <Figure desc="The protocol layer thus far has been thin and the application layer is fat. This has just been the way that computers and internet browsers have developed.">
            <Image src="/static/thin-protocol.png" />
        </Figure>

        <P>
            So because there is little innovation on the protocol layer, innovation has happened on the application layer. Sites like Facebook, Google, etc have had to creatively work with a very limited protocol.
        </P>

        <P>
            Sites are all somewhat doing the same thing, because they are only capable of sending few types of datum. 
        </P>
            
        <P>
            The internet is just a simple HTTP / TCP / IP / SMTP transfer service. The browsers are just mediums that can send and receive these data types.
        </P>

        <P>
            This is a big reason why the internet is just so toxic now. Innovation has stifled and Facebook and Google have taken a pernicious approach. 
        </P>

        <P>
            They want to be the <b>one place</b> where you do your online socializing or internet searching. 
        </P>

        <P>
            But how can they realistically be the one place when all they do is transfer stuff over this simple protocol? How can they stay unique in a field of very similarly performing sites?
        </P>

        <P>
            They record stuff about you. 
        </P>

        <P>
            Over time, they learn about you and keep this information to themselves. They perform big data analytics on this information, then use AI to creatively sell your information back to you in the form of targeted ads. 
        </P>

        <P>
            Essentially, they steal as much from you as possible, such as credit card information and email information, and make it more convenient for you to use their site next time. You choose not to use other sites because they don't know anything about you and you'd have to go through the whole process again of slowly giving away all of your personal information. This is a painful and lengthy process and naturally you don't want to do it because it's sleezy and wrong to begin with.
        </P>

        <P>
            The blockchain invention can change the internet and free us from these thieves.  
        </P>

        <P>
            These internet thieves make their services "free" for a reason - because it should be known that you're giving them <i>plenty</i> of valuable information about yourself.  
        </P>

        <P> 
            Also don't forget - there's a good chance they can lose this valuable information, costing you more than you could ever imagine. See <a href="https://www.consumer.ftc.gov/blog/2017/09/equifax-data-breach-what-do" target="_blank">Equifax</a>.
        </P>

        <P>
            This is obviously terrible. You're trusting a website to be totally responsible with everything that you've given them. 
        </P>

        <P>
            The blockchain gives us the ability to create many protocols, hence the article's "fat protocols" moniker. This is the web 3.0
        </P>

        <P> 
            A web 3.0 future is one in which we could have a unique social <i>protocol</i>. Imagine a protocol that was only used to send texts for social media posts. Rather than send over HTTP, you'd send over something called, say, STP (social transfer protocol).
        </P>

        <Figure desc="This is the blockchain created future, call it: web 3.0. The services you see on the internet would just be your preferred way of interacting with 1 or many protocols.">
            <Image src="/static/fat-protocol.png" />
        </Figure>

        <P>
            Using that protocol would be free, just like using the HTTP protocol is free for any site.
        </P>

        <P>
            Facebook would be just one of many applications that could interact with the social transfer protocol. 
        </P>

        <P>
            You wouldn't have to use Facebook if you didn't like how Facebook was working for you. Just like how you don't have to use the Apple Mail application on your iPhone if you prefer to use the Gmail application.
        </P>

        <P>
            So how would Facebook make any money in this scenario if they can't really steal anything unique from you? Well, you'd probably <b>pay for the service of your choice</b> but that's actually a good thing! 
        </P>

        <P>
            No more stealing, no more click-baiting. Just use the service that works for you and pay for that. 
        </P>
        
        <FR>
            <UL>
                <ULI>
                    <a href="https://www.nytimes.com/2018/01/16/magazine/beyond-the-bitcoin-bubble.html">New York Times: Beyond the Bitcoin Bubble</a> - Paints the story of crypto and it's potential use cases   
                </ULI>

                <ULI>
                    <a href="https://ethereum.stackexchange.com/questions/383/what-is-a-dapp">What is a DAPP?</a>
                </ULI>

                <ULI>
                    <a href="https://medium.com/@FEhrsam/the-dapp-developer-stack-the-blockchain-industry-barometer-8d55ec1c7d4">The dApp Developer Stack: The Blockchain Industry Barometer</a>
                </ULI>

                <ULI>
                    <a href="http://joel.mn/post/104755282493/the-shared-data-layer-of-the-blockchain">The Shared Data Layer of The Blockchain Application Stack</a>
                </ULI>


                <ULI>
                    <a href="http://continuations.com/post/148098927445/crypto-tokens-and-the-coming-age-of-protocol">Crypto Tokens and the Coming Age of Protocol Innovation</a>
                </ULI>

                <ULI>
					<a href="https://medium.com/blockchannel/antifragility-and-optionality-in-fat-protocols-9ba7300a55c5">
                        Antifragility and Optionality in Fat-Protocols
					</a> - Discusses how the protocol layer creates an anti-fragile ecosystem for crypto
                </ULI>
            </UL>
        </FR>

	</Post>
));
