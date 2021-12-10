"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pg_1 = require("../config/pg");
const AddressValidStatus = pg_1.sequelize.define('AddressValidStatus', {
    idAddressValidStatus: {
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    wasValid: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
}, {
    tableName: 'AddressValidStatus',
    freezeTableName: true,
    timestamps: false,
});
exports.default = AddressValidStatus;
