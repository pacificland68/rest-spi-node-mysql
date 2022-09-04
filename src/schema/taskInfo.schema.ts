import {object, number, string, TypeOf} from 'zod'

// const payload = {
//   body: object({

//   })
// }

const params = {
  params: object({
    id: string({
      required_error: "id is required"
    })
  })
}

export const getTaskInfoSchema = object({
  ...params
})

export type UpdateTaskInfoInput = TypeOf<typeof getTaskInfoSchema>