import { NowRequest, NowResponse } from '@vercel/node'

const handler = (_request: NowRequest, response: NowResponse): void => {
  response.send({
    subject: 'birthplace',
    status: 'Japan',
    color: 'C22047'
  })
}

export default handler
