import { DataTypes } from 'sequelize';
import db from '../db.js';

const User = db.define('user', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default User;
