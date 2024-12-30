import { DataTypes } from 'sequelize';
import db from '../db.js';
import User from './Users.js';
import Store from './Stores.js';

const Ticket = db.define('ticket', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  starts: {
    type: "TIMESTAMP",
    allowNull: false
  },
  ends: {
    type: "TIMESTAMP",
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM([
      "open",
      "pending",
      "resolved",
      "closed",
      "new",
      "assigned",
      "in progress"
    ]),
    allowNull: false
  },
  comments: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

User.hasMany(Ticket, {
  foreignKey: {
    name: "id_user",
    type: DataTypes.STRING,
    allowNull: false
  }
});

Store.hasMany(Ticket, {
  foreignKey: {
    name: "id_store",
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Ticket;
