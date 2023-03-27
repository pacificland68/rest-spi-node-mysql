import {ListItem} from '../models/ListItem.model'

export async function getListItem(currentPage: string, pageSize: string, labelName: string){
  var result = await ListItem.findAndCountAll({
      where: {classify: labelName},
      offset: (Number(currentPage) - 1) * Number(pageSize),
      limit: Number(pageSize)
  });
  return result;
}

export async function getAllList(currentPage: string, pageSize: string){
    var result = await ListItem.findAndCountAll({
        offset: (Number(currentPage) - 1) * Number(pageSize),
        limit: Number(pageSize)
    })

    return result;
}