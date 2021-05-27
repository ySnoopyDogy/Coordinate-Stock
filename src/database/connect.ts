import { Pool } from 'pg';

class DatabaseConnection {
  private retries: number;

  public pool: Pool

  constructor(maxRetries: number) {
    this.retries = maxRetries;
  }

  async connect() {
    while (this.retries > 0) {
      try {
        this.pool = new Pool({
          user: process.env.DB_USER,
          host: process.env.DB_HOST,
          database: process.env.DATABASE,
          password: process.env.DB_PASSWORD,
          port: 5432,
        });
        break;
      } catch {
        this.retries -= 1;
        // eslint-disable-next-line no-console
        console.log(`Erro ao se conectar à DB! Tentarei novamente em 5 segundos, tentativas restantes: ${this.retries}`);
        // eslint-disable-next-line no-await-in-loop
        await new Promise((res) => setTimeout(res, 5000));
      }
    }
  }
}

const connection = new DatabaseConnection(5);

export default connection.pool;
