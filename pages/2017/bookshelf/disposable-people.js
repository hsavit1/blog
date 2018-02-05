import Head from 'next/head'
import Post from '../../../layouts/post'
import Meta from '../../../components/post/meta'
import Quote from '../../../components/post/quote'
import P from '../../../components/post/paragraph'
import Title from '../../../components/post/title'
import TLDR from '../../../components/post/tldr'

import withViews from '../../../lib/with-views'

export default withViews(({ views }) => (
  <Post>
    <Head><title>Disposable People</title></Head>
    <Title>Disposable People</Title>
    {/* <Meta date="December 10th, 2017" views={ views } /> */}

    <P>
      WIP
    </P>

  </Post>
))
