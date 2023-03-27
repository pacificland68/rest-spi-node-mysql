import {Table, Model, Column, DataType} from "sequelize-typescript"

@Table({
  timestamps: false,
  tableName: 'label'
})


export class Label extends Model<Label>{
  @Column({
    type:DataType.STRING,
    allowNull: false
  })
  name!: string
}