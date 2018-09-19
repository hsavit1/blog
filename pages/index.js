import Page from '../layouts/main'
import Link from 'next/prefetch'
import Head from 'next/head'
import styled from 'styled-components'

const name = styled.h1`
  font-size: 48px;
  font-family: 'Monaco';
`;

export default () => (
  <Page>
    <Head>
      <title>Henry Savit</title>
    </Head>

  <div>
    <div className="home">

        <h1>Henry Savit</h1>
      <div className="main">
        <nav>
          <Link href="/longform"><a>Essays</a></Link>
          <Link href="/bookshelf"><a>Bookshelf</a></Link>
          <Link href="/satire"><a>Satire</a></Link>
          <Link href="/cryptos"><a>Crypto</a></Link>
          <Link href="/about"><a>About</a></Link>
        </nav>

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
        justify-content: space-between;
        // align-items: center;
        // justify-content: center;
        z-index: -1;
        background-color: #fff8ee;
      }

      .main {
        flex: none;
        text-align: center;
      }

      h1 {
        // font-size: 64px;
        font-family: Menlo;
        writing-mode: vertical-lr;
        text-transform: uppercase;
        font-weight: 1200;
        font-size: 7.2rem;      
        flex: 1;
        align-self: flex-end;
        text-overflow: clip;
        // width: 100px;
      }

      nav {
        align-self: flex-start;
        display: flex;
        width: 100;
        flex-direction: column;
        margin-top: 100px;
        // justify-content: flex-end;
        // margin-bottom: 20px;
      }

      a {
        display: inline-block;
        margin:15px;
        text-decoration: none;
        align-self: flex-end;
        background-color: white;
        font-size: 32px;    
        background-color: #FF4484;
        color: #fff;
        text-decoration: none;
        word-wrap: normal;
      }

      a:hover {
        background-color: #665f55;
        color: #fff;
      }

      @media (max-height: 815px) {
				h1 {
          font-size: 6.6rem;     
          margin-top: 100px; 
        }
      }
      
      @media (max-height: 700px) {
				h1 {
          font-size: 6.2rem;     
          margin-top: 100px; 
        }
			}

      @media (max-height: 650px) {
				h1 {
          font-size: 5.2rem;     
          margin-top: 100px; 
        }
        a {
          font-size: 22px;     
        }

			}

    `}</style>
  </Page>
)
