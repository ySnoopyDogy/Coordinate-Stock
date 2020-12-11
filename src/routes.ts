import { Router } from 'express';

import ListController from './controllers/ListController';
import AddCoordController from './controllers/AddCoordController';

const router = Router();

router.get('/:id?', ListController.all);

router.post('/api/add', AddCoordController.addCoord);

router.get('/*', (req, res) => res.sendStatus(404));

export default router;
