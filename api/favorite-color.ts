import { NowRequest, NowResponse } from '@vercel/node'

const handler = (_request: NowRequest, response: NowResponse): void => {
  response.send({
    subject: 'favorite color',
    status: 'orange',
    color: 'F17C67'
  })
}

export default handler
