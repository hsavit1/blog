import Page from '../layouts/main';
import Link from 'next/link';
// import {books} from '../books.json';

import Head from 'next/head';
import Figure, { Image } from '../components/bookshelf/image';

const { books } = require('../books.json');

export default () => (
	<Page>
		<Head>
			<title>Bookshelf</title>
		</Head>
		<div className="books">
			{books.map(({ id, date, title, image }) => (
				<Book
					id={id}
					key={id}
					date={date}
					title={title}
					image={image}
				/>
			))}
		</div>

		<style jsx>{`
			.books {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: flex-start;
				align-items: flex-start;
				align-content: center;
				margin: 20;
			}
		`}</style>
	</Page>
);

const Book = ({ id, date, title, image }) => (
	<div className="book">
		<span className="date">{date}</span>

		<Link
			prefetch
			href={`/${new Date(date).getFullYear()}/bookshelf/${id}`}
		>
			<a>
				<Image src={image} type={"books"} className="image" />
			</a>
		</Link>

		<style jsx>{`
			.book {
				margin-bottom: 50px;
			}

			.date {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 160px;
				// text-align: right;
				margin-right: 60px;
				color: #999;
			}

			a {
				text-decoration: none;
			}

			@media (max-width: 500px) {
				.post {
					margin-bottom: 15px;
				}

				.date {
					display: block;
					width: inherit;
					text-align: inherit;
					font-size: 11px;
					color: #ccc;
					margin-bottom: 5px;
				}
			}
		`}</style>
	</div>
);
