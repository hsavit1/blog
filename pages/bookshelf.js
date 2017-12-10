import Page from '../layouts/main';
import Link from 'next/prefetch';
import { books } from '../books';
import Head from 'next/head';
import Figure, { Image } from '../components/bookshelf/image';

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

		<Link href={`/${new Date(date).getFullYear()}/${id}`}>
			<a>
				<Image src={image} className="image"/>
			</a>
		</Link>

		<style jsx>{`
			.book {
				margin-bottom: 10px;
			}


            .image {
                width: 200;
                height: 300;
            }

			.date {
				display: inline-block;
				width: 140px;
				text-align: right;
				margin-right: 30px;
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
