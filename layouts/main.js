import Meta from '../components/meta';
import Link from 'next/prefetch';
// import { TwitterFollowButton } from 'react-twitter-embed';

export default ({ children }) => (
	<div className="main">
		<div className="logo">
			<Link href="/">
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
				padding: 25px 50px;
				background-color: #fff8ee;
			}

			.logo {
				padding-bottom: 50px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}

			a {
				text-decoration: none;
			}

			@media (max-width: 500px) {
				.main {
					padding: 25px 15px;
				}

				.logo {
					padding-bottom: 20px;
				}
			}
		`}</style>
	</div>
);
