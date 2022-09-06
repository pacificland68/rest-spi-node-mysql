import {object, number, string, TypeOf} from 'zod'

// const payload = {
//   body: object({

//   })
// }

const params = {
  query: object({
    id: string({
      required_error: "id is required"
    }),
    currentPage: string({
      required_error: "currentPage is required"
    }),
    pageSize: string({
      required_error: "pageSize is required"
    })
  })
}

const allTaskParams = {
  query: object({
    currentPage: string({
      required_error: "currentPage is required"
    }),
    pageSize: string({
      required_error: "pageSize is required"
    })
  })
}

export const getTaskInfoSchema = object({
  ...params
})

export const getAllTaskInfoSchema = object({
  ...allTaskParams
})

export type UpdateTaskInfoInput = TypeOf<typeof getTaskInfoSchema>
export type AllTaskInfoInput = TypeOf<typeof getAllTaskInfoSchema>