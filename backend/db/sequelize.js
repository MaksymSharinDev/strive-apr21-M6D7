import { Sequelize } from 'sequelize'
const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    { host: process.env.PGHOST, dialect: "postgres" }
);
sequelize.authenticate()
    .then(() => console.log("Connection has been established to the database "))
    .catch((e) => console.log("Unable to establish connection to the database:", e));

export default sequelize