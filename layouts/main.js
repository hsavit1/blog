import Meta from '../components/meta';
import Link from 'next/link';
// import { TwitterFollowButton } from 'react-twitter-embed';

export default ({ children }) => (
	<div className="main">
		<div className="logo">
			<Link prefetch href="/">
				<a>Home</a>
			</Link>
			{/* <Link href="/about"><a>About</a></Link> */}

			{/* <TwitterFollowButton 
              screenName="CantBeMoreWrong" 
              options={
                {
                  size: "small", 
                }
              } 
            /> */}

		</div>

		{children}

		{/* global styles and meta tags */}
		<Meta />

		{/* local styles */}
		<style jsx>{`
			.main {
				padding: 20px 20px;
				background-color: #fff8ee;
			}

			.logo {
				padding-bottom: 10px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}

			a {
				text-decoration: none;
			}

		`}</style>
	</div>
);
