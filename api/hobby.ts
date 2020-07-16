import { NowRequest, NowResponse } from '@vercel/node'

const handler = (_request: NowRequest, response: NowResponse): void => {
  response.send({
    subject: 'hobby',
    status: 'Drawing an illustration',
    color: 'F17C67'
  })
}

export default handler
