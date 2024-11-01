import { CreationOptional, DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

export interface ColaboradoresModel extends Model {
  nome: string;
  password: string;
  email: number;
  id: CreationOptional<number>;
  creationDate: number;
  userNick: string;
}

export const Colaboradores = sequelize.define<ColaboradoresModel>(
  "Colaboradores",
  {
    nome: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true,
    },
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    id: DataTypes.INTEGER,
    creationDate: DataTypes.INTEGER,
    userNick: DataTypes.STRING,
  }
);
