import { Request, Response } from 'express';
import pool from '../database/connect';
import { world } from '../utils/types';

export default class AddCoord {
  public static async addCoord(req: Request, res: Response): Promise<Response> {
    const {
      coordName, coordDescription, coordWorld, x, y, z,
    } = req.body;
    if (!coordName || !coordWorld || !x || !z) return res.sendStatus(400);

    const MUNDOS: world[] = ['OVERWORLD', 'NETHER', 'END'];

    if (!MUNDOS.includes(coordWorld)) return res.status(400).json({ message: `Este mundo não é um mundo válido! Mundos: ${MUNDOS}` });

    const coordExists = await pool.query('SELECT * FROM coords WHERE x = $1 AND z = $2 AND coord_world = $3;', [x, z, coordWorld]);
    if (coordExists.rowCount > 0) return res.status(409).json({ message: 'Uma cordenada neste mundo já existe neste local!' });

    const result = await pool.query(`INSERT INTO coords (coord_name, coord_description, coord_world, x, y, z)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;
    `, [coordName, coordDescription, coordWorld, x, y, z]);
    if (result.rowCount === 0) return res.status(500).json({ message: 'Ocorreu um erro ao adicionar esta coordenada!' });
    return res.status(201).json({ message: `A coordenada foi criada com sucesso, seu id é ${result.rows[0].id}` });
  }
}
