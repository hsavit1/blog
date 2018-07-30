import Page from '../layouts/main'
import Link from 'next/prefetch'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
      <title>Henry Savit</title>
    </Head>

  <div>
    <div className="home">
      <div className="main">
        <h1>Henry Savit</h1>
        <nav>
          <Link href="/about"><a>About</a></Link>
          <Link href="/longform"><a>Essays</a></Link>
          <Link href="/satire"><a>Satire</a></Link>
          <Link href="/cryptos"><a>Crypto</a></Link>
          <Link href="/bookshelf"><a>Bookshelf (WIP)</a></Link>
          <a target="_blank" href="https://twitter.com/cantbemorewrong">Twitter</a>        
        </nav>

        <div className="twitter">
            {/* <TwitterMentionButton 
              screenName="CantBeMoreWrong" 
              options={
                {
                  size: "large", 
                }
              } 
            /> */}
        </div>

      </div>

    </div>

  </div>
    <style jsx>{`
      .home {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
      }

      .main {
        flex: none;
        text-align: center;
      }

      h1 {
        font-size: 14px;
        font-weight: normal;
      }

      nav {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        margin-bottom: 20px;
      }

      a {
        display: inline-block;
        margin:15px;
        text-decoration: none;
      }

      .twitter {    
        // position: absolute;
        // right: 15;
        // bottom: 15;    
      }

    `}</style>
  </Page>
)
