import {Table, Model, Column, DataType} from "sequelize-typescript"

@Table({
    timestamps: false,
    tableName: 'list_item'
})

export class ListItem extends Model<ListItem>{

    @Column({
        type: DataType.STRING
    })
    author!: string

    @Column({
        type: DataType.STRING
    })
    mode!: string

    @Column({
        type: DataType.STRING
    })
    title!: string

    @Column({
        type: DataType.STRING
    })
    classify!: string

    @Column({
        type: DataType.DATE
    })
    update_time!: Date

    @Column({
        type: DataType.DATE
    })
    create_time!: Date

    @Column({
        type: DataType.NUMBER
    })
    browse_count!: number

    @Column({
        type: DataType.NUMBER
    })
    collection_count!: number

    @Column({
        type: DataType.NUMBER
    })
    comments_count!: number

    @Column({
        type: DataType.STRING
    })
    cover!: string

    @Column({
        type: DataType.NUMBER
    })
    thumbs_up_count!: number
}


