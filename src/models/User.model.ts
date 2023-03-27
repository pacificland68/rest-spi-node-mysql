import {Table, Model, Column, DataType} from 'sequelize-typescript'

@Table({
    timestamps: false,
    tableName: 'user'
})

export class User extends Model<User>{

    @Column({
        type: DataType.STRING
    })
    author_name!: string

    @Column({
        type: DataType.STRING
    })
    avatar!: string

    @Column({
        type: DataType.STRING
    })
    explain!: string
}