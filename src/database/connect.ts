import { createConnection, ConnectionOptions, Connection } from "typeorm";
import { config } from "dotenv";
import { parse } from "pg-connection-string";

config();

const parsed = parse(process.env.DATABASE_URL);
const isProd = (): boolean => process.env.NODE_ENV === "production";

const options: ConnectionOptions = {
   type: "postgres",
   host: parsed.host,
   username: parsed.user,
   password: parsed.password,
   database: parsed.database,
   synchronize: true,
   logging: false,
   entities: [...(isProd() ? ["dist/model/**/*"] : ["src/model/**/*"])],
};

const connect = async (): Promise<Connection> => {
   return createConnection(options);
};
export { connect };
