import Head from 'next/head';
import Post from '../../../layouts/post';
import Meta from '../../../components/post/meta';
import Quote from '../../../components/post/quote';
import P from '../../../components/post/paragraph';
import Title from '../../../components/post/title';
import TLDR from '../../../components/post/tldr';
import Subtitle from '../../../components/post/subtitle';
import FR from '../../../components/post/further-reading';
import UL, { LI as ULI } from '../../../components/post/bullets-list';
import Podcasts from '../../../components/post/podcasts';
import Videos from '../../../components/post/videos';
import withViews from '../../../lib/with-views';

export default withViews(({ views }) => (
  <Post>
    <Head><title>How to Live</title></Head>
    <Title>How to Live</Title>
    <Subtitle>How to Live: A Life of Montaigne in One Question and Twenty Attempts at an Answer</Subtitle>
    <Meta date="January 10, 2017" views={ views } />

    <P>
      WIP
    </P>

  </Post>
))
