import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../config/pg'

export interface AddressValidStatusInstance extends Model {
  idAddressValidStatus: number

  wasValid: boolean
}

const AddressValidStatus = sequelize.define<AddressValidStatusInstance>(
  'AddressValidStatus',
  {
    idAddressValidStatus: {
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },

    wasValid: {
      type: DataTypes.BOOLEAN
    },
  },
  {
    tableName: 'AddressValidStatus',
    freezeTableName: true,
    timestamps: false,
  }
)

export default AddressValidStatus