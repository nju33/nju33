import { NowRequest, NowResponse } from '@vercel/node'

const handler = (_request: NowRequest, response: NowResponse): void => {
  response.send({
    subject: 'second favorite color',
    status: 'purple',
    color: '66327C'
  })
}

export default handler
