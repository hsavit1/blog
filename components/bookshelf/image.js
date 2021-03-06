import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
	from { transform: scale3d(1, 1, 1); }

	/* 50% { transform: scale3d(1.05, 1.05, 1.05); } */

	to { transform: scale3d(1, 1, 1); }
`;

const StyledImage = styled.img`
	width: 160px;
	height: 230px;
	margin: 10px 15px 0 0;
	box-shadow: 5px 10px 10px -5px grey;
	color: rgba(#000, .25);

	src: ${props => props.src};

	/* &:hover {
		animation: ${pulse};
		animation-duration: 1s;
	} */
`;

// const Image = ({ width, src }) => (
// 	<div>
// 		<StyledImage src={`/static/${src}`}/>
// 	</div>
// );

export default ({ desc, href, children, wide }) => (
	<div className={wide && 'wide'}>
		{href ? (
			<a href={href} target="_blank">
				{children}
			</a>
		) : (
			children
		)}
		{/* {desc && <p>{desc}</p>} */}
		<style jsx>{`
			div {
				text-align: center;
				margin-bottom: 20px;
			}

			p {
				font-size: 13px;
				color: #999;
				text-align: center;
				font-style: oblique;
				display: block;
			}

			.wide {
				background: #f2f2f2;
				position: relative;
			}
		`}</style>
	</div>
);

const Image = ({ width, src, type }) => (
	<div className="grow">
		<img width={width} src={`/static/${type}/${src}`} />
		<style jsx>{`
			img {
				width: 160px;
				height: 230px;
				margin: 10px 15px 0 0;
				box-shadow: 5px 10px 10px -5px grey;
				rgba(#000, .25);
			}
			
			.grow {
				transition: all .2s ease-in-out;
			  }
			
			.grow:hover {
				transform: scale(1.05);
			}			  

		`}</style>
	</div>
);

export { Image };
