import {Label} from '../models/Label.model'

export async function findAllLabel(){
    var result = await Label.findAll()
    return result
}