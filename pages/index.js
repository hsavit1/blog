import Page from "../layouts/main";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

const name = styled.h1`
  font-size: 48px;
  font-family: "Monaco";
`;

export default () => (
  <Page>
    <Head>
      <title>Henry Savit</title>
    </Head>

    <div className="home">
      <h1>Henry Savit</h1>

      <div className="earth">
        <div className="earth--shadow" />
      </div>
      <div className="moon" />
      <div className="stars" />

 {/* <h3>Calling all people - Protect this Rock!</h3> */}
      <Link href="/problems">
        <a><h3>Calling all people - Protect this Rock!</h3></a>
      </Link>

      <div className="main">
        <nav>
          <Link prefetch href="/longform">
            <a>Essays</a>
          </Link>
          <Link prefetch href="/bookshelf">
            <a>Bookshelf</a>
          </Link>
          <Link prefetch href="/satire">
            <a>Satire</a>
          </Link>
          <Link prefetch href="/cryptos">
            <a>Crypto</a>
          </Link>
          <Link prefetch href="/about">
            <a>About</a>
          </Link>
        </nav>
      </div>
    </div>
    <style jsx>{`
      .earth {
        height: 200px;
        width: 200px;
        border-radius: 50%;
        background-color: #3380b5;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        overflow: hidden;
        z-index: 2;
        box-shadow: inset -30px 0 rgba(0, 0, 0, 0.2),
          0 0 0 120px rgba(20, 106, 221, 0.1),
          0 0 0 300px rgba(20, 106, 221, 0.1),
          0 0 0 500px rgba(20, 106, 221, 0.1);
      }

      /* Land */
      .earth:before {
        content: "";
        position: absolute;
        background: #85c567;
        height: 30px;
        width: 75px;
        left: 0;
        top: 50px;
        display: block;
        border-radius: 40px;
        -webkit-animation: rotateElement linear 25s infinite;
        animation: rotateElement linear 25s infinite;
        box-shadow: 0px 75px 0 -5px #85c567, 5px 35px 0 -3px #85c567,
          35px 125px 0 -9px #85c567, 120px -15px 0 -7px #85c567,
          135px -55px 0 -9px #85c567, 150px 25px 0 7px #85c567,
          220px 70px 0 -2px #85c567, 235px -35px 0 -3px #85c567,
          280px 85px 0 3px #85c567, 320px 30px 0 1px #85c567,
          400px 0 0 0 #85c567, 400px 75px 0 -5px #85c567,
          405px 35px 0 -3px #85c567, 435px 125px 0 -9px #85c567,
          520px -15px 0 -7px #85c567, 535px -55px 0 -9px #85c567,
          550px 25px 0 7px #85c567, 620px 70px 0 -2px #85c567,
          635px -35px 0 -3px #85c567, 680px 85px 0 3px #85c567,
          720px 30px 0 1px #85c567;
      }

      /* Clouds */
      .earth:after {
        content: "";
        position: absolute;
        background: white;
        height: 20px;
        width: 60px;
        left: 0px;
        top: 50px;
        display: block;
        border-radius: 40px;
        -webkit-animation: rotateElement linear 15s infinite;
        animation: rotateElement linear 15s infinite;
        box-shadow: 10px 50px 0 3px white, 50px -15px 0 2px white,
          70px 70px 0 -1px white, 100px 25px 0 1px white,
          110px 105px 0 -4px white, 140px 75px 0 -3px white,
          250px -25px 0 -1px white, 210px 50px 0 1px white,
          340px 130px 0 1px white, 400px 0px 0 0 white, 410px 50px 0 3px white,
          500px 25px 0 1px white, 450px -15px 0 2px white,
          470px 70px 0 -1px white, 540px 75px 0 -3px white,
          510px 105px 0 -4px white, 650px -25px 0 -1px white,
          610px 50px 0 1px white, 740px 130px 0 1px white;
      }

      .earth--shadow {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        position: absolute;
        background-color: transparent;
        z-index: 4;
        box-shadow: inset -30px 0 rgba(0, 0, 0, 0.1);
      }

      .moon {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        position: absolute;
        background-color: #a5a5a5;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        overflow: auto;
        z-index: 10;
        box-shadow: inset -3px 0 rgba(0, 0, 0, 0.2);
        -webkit-animation: moonOrbit ease-in-out 15s infinite;
        animation: moonOrbit ease-in-out 15s infinite;
      }

      .moon:after {
        content: "";
        height: 5px;
        width: 5px;
        border-radius: 50%;
        background: gray;
        position: absolute;
        top: 8px;
        left: 10px;
        box-shadow: -4px 3px 0 -1px gray, 4px 2px 0 -1px gray,
          -2px -6px 0 -1px gray;
      }

      .stars {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        position: absolute;
        background-color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        overflow: auto;
        z-index: 1;
        box-shadow: 510px -450px 0 1px white, 490px -125px 0 -2px white,
          150px -150px 0 -1px white, 130px 270px 0 -1px white,
          480px 475px 0 -3px white, -610px 605px 0 -4px white,
          570px 750px 0 -3px white, -550px 425px 0 1px white,
          650px -105px 0 -2px white, 310px 60px 0 -1px white,
          -340px 175px 0 -3px white, -610px 1205px 0 -4px white,
          500px 450px 0 -3px white, -500px 125px 0 1px white,
          -150px -615px 0 -2px white, -110px -370px 0 -1px white,
          -440px -175px 0 -3px white, -610px -205px 0 -4px white,
          410px -450px 0 -3px white, 390px -125px 0 -2px white,
          50px -250px 0 -1px white, 30px -170px 0 -1px white,
          380px 375px 0 -5px white, -710px 705px 0 -6px white,
          470px -650px 0 -3px white, -450px 425px 0 1px white,
          550px -205px 0 -5px white, 210px 50px 0 -1px white,
          -240px 275px 0 -5px white, -510px 120px 0 -4px white,
          600px 550px 0 -3px white, -400px 225px 0 1px white,
          -250px -515px 0 -2px white, -310px -170px 0 -4px white,
          -340px -275px 0 -4px white, -510px -305px 0 -5px white;
      }

      .inspiration {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: white;
        font-size: 10px;
      }
      .inspiration a {
        color: white;
      }

      @-webkit-keyframes rotateElement {
        0% {
          -webkit-transform: translate(0, 0);
          transform: translate(0, 0);
        }
        100% {
          -webkit-transform: translate(-400px, 0);
          transform: translate(-400px, 0);
        }
      }

      @keyframes rotateElement {
        0% {
          -webkit-transform: translate(0, 0);
          transform: translate(0, 0);
        }
        100% {
          -webkit-transform: translate(-400px, 0);
          transform: translate(-400px, 0);
        }
      }
      @-webkit-keyframes moonOrbit {
        0% {
          -webkit-transform: translate(-250px, 0);
          transform: translate(-250px, 0);
          z-index: 10;
        }
        20% {
          z-index: -1;
        }
        50% {
          -webkit-transform: translate(250px, 0);
          transform: translate(250px, 0);
        }
        100% {
          -webkit-transform: translate(-250px, 0);
          transform: translate(-250px, 0);
        }
      }
      @keyframes moonOrbit {
        0% {
          -webkit-transform: translate(-250px, 0);
          transform: translate(-250px, 0);
          z-index: 10;
        }
        20% {
          z-index: -1;
        }
        50% {
          -webkit-transform: translate(250px, 0);
          transform: translate(250px, 0);
        }
        100% {
          -webkit-transform: translate(-250px, 0);
          transform: translate(-250px, 0);
        }
      }

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
        margin: 15px;
        text-decoration: none;
        align-self: flex-end;
        background-color: white;
        font-size: 32px;
        background-color: #ff4484;
        color: #fff;
        text-decoration: none;
        word-wrap: normal;
      }

      a:hover {
        background-color: #665f55;
        color: #fff;
      }

      h1 {
        // font-size: 64px;
        font-family: Menlo;
        writing-mode: vertical-lr;
        text-transform: uppercase;
        font-weight: 1200;
        font-size: 6rem;
        flex: 1;
        align-self: flex-end;
        text-overflow: clip;
        // width: 100px;
      }

      h3 {
        font-family: Menlo;
        text-transform: uppercase;
        font-weight: 1200;
        font-size: 2rem;
        justify-self: flex-end;
        align-self: flex-end;
        text-overflow: clip;
        // width: 100px;
      }

      img {
        height: 16;
        width: 16;
      }
      @media (max-height: 350x) {
        h1 {
          font-size: 2.2rem;
          margin-top: 100px;
        }
      }

      @media (max-width: 800x) {
        h1 {
          font-size: 4.2rem;
          margin-top: 100px;
        }
      }

      @media (max-height: 815px) {
        h1 {
          font-size: 6rem;
          margin-top: 100px;
        }
      }

      @media (max-height: 700px) {
        h1 {
          font-size: 5rem;
          margin-top: 100px;
        }
      }

      @media (max-height: 650px) {
        h1 {
          font-size: 4.7rem;
          margin-top: 100px;
        }
        h3 {
          font-size: 1.2rem;
        }
        a {
          font-size: 22px;
        }
      }
    `}</style>
  </Page>
);
