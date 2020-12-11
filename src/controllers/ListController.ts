import { Request, Response } from 'express';
import pool from '../database/connect';

export default class ListController {
  public static async all(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;
    if (id) {
      const result = await pool.query('SELECT * FROM coords WHERE id = $1', [id]);
      if (result.rowCount === 0) return res.status(404).json({ message: 'Não existe nenhuma coordenada com este id no banco de dados' });
      return res.status(200).send(result.rows[0]);
    }
    const results = await pool.query('SELECT * FROM coords');
    return res.render('pages/home', { table: results.rows });
  }
}
