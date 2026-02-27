import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // <--- Mencegah email kembar dari level database
        validate: {
            notEmpty: true,
            isEmail: true 
        }
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.TEXT
    },
},{
    freezeTableName:true
});

export default Users