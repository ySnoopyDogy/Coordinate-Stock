import express from 'express';
import parser from 'body-parser';
// eslint-disable-next-line import/extensions
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import logger from './logger/logger';
import routes from './routes';

const app = express();
const { PORT } = process.env;

app.use(parser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(expressLayouts);
app.use(parser.urlencoded());
app.use(routes);

app.listen(PORT, () => {
  logger.info(`Server starts at port ${PORT}`);
});
