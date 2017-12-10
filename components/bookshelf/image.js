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

const Image = ({ width, src }) => (
	<div>
		<img width={width} src={src} />
		<style jsx>{`
			img {
				width: 180px;
				height: 300px;
				margin: 15px 15px 0 0;
			}
		`}</style>
	</div>
);

export { Image };
