import express from 'express';
import parser from 'body-parser';
// eslint-disable-next-line import/extensions
import logger from './logger/logger';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(parser.json());

app.listen(PORT, () => {
  logger.info(`Server starts at port ${PORT}`);
});
