import { NowRequest, NowResponse } from '@vercel/node'

const handler = (_request: NowRequest, response: NowResponse): void => {
  response.send({
    subject: 'last name',
    status: '純',
    color: 'F17C67'
  })
}

export default handler
