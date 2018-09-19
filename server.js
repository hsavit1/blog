const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const path = require('path');
const fs = require('fs');
// const helmet = require('helmet')
const brave = fs.readFileSync(path.join(__dirname, 'brave-payments-verification.txt'));

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const srv = createServer((req, res) => {
		const { pathname } = parse(req.url);
		
		if ('/.well-known/brave-payments-verification.txt' === pathname) {
			const body = brave;
			res.setHeader('Content-Type', 'text/plain');
			res.setHeader('Content-Length', Buffer.byteLength(body));
			res.end(body);

			return;
		}

		handle(req, res);
	});

	srv.listen(3000, err => {
		if (err) throw err;
		console.log('> Ready on http://localhost:3000');
	});

	process.on('SIGTERM', () => {
		console.log('> Shutting down');
		srv.close();
	});
});

// const handle = app.getRequestHandler()
// const staticPath = join(__dirname, 'static')
// const staticFiles = fs.readdirSync(staticPath)
//   .filter(item => !item.startsWith('.'))
//   .map(item => `/${item}`)

// app.prepare()
//   .then(() => {
//     const server = express()
//     server.use(helmet())

//     server.get('*', (req, res) => {
//       const parsedUrl = parse(req.url, true)
//       if (staticFiles.indexOf(parsedUrl.pathname) > -1) {
//         app.serveStatic(req, res, join(__dirname, 'static', parsedUrl.pathname))
//       } else {
//         return handle(req, res)
//       }
//     })

//     server.listen(port, (err) => {
//       if (err) throw err
//       console.log(`> Houston, we have liftoff! (http://localhost:${port})`)
//     })
// })