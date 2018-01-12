import Page from '../layouts/main';
import Link from 'next/prefetch';
import Head from 'next/head';
import P from '../components/post/paragraph';
import TITLE from '../components/about/title';
import SUBTITLE from '../components/about/subtitle';

export default () => (
	<Page>
		<Head>
			<title>Changelog</title>
		</Head>
		<div className="about">
			<TITLE>About me</TITLE>

			<SUBTITLE>Behold, my webpage</SUBTITLE>

			<P>
				Hey you, thanks for checking out my page. I've built this site
				as a tool to elucidate on some ideas I've been having.
			</P>

			<P>
				On here you'll probably find some musings related to the
				evolution of cryptocurrencies such as Bitcoin and Ethereum, the
				purpose of the internet and other design meditations, some
				technical stuff, or maybe just some laugh worthy material.
				Actually, only cringeworthy material.
			</P>

			<P>
				You might as well check out some of my essays. Maybe you’ll find
				something useful. Maybe not?! You'll have to read to find out.
			</P>

			<P>
				I also created a bookshelf section where you can read some summaries of some things that I really enjoyed reading.
			</P>


      <P>You can find the source for this page on <a target="_blank" href="https://github.com/hsavit1/blog">github</a> </P>

			<P>Anyway, thanks for visiting my page</P> 
      
      <P>Cheers to you</P>
		</div>

    <style jsx>{`
      .about {
        max-width: 650px;
        margin: auto;
        font-size: 14px;
      }
    `}</style>
    <style jsx global>{`
      body {
        width: 100%;
        overflow-x: hidden;
      }
    `}</style>
	</Page>
);
