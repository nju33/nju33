import { NowRequest, NowResponse } from '@vercel/node'

const handler = (_request: NowRequest, response: NowResponse): void => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const birthTs = new Date(process.env.BIRTH_DATETIME!)
  const birthMonth = birthTs.getUTCMonth()
  const nowTs = new Date()

  let age = nowTs.getUTCFullYear() - birthTs.getUTCFullYear()
  if (nowTs.getMonth() < birthMonth) {
    age--
  }

  response.send({
    subject: 'age',
    status: age,
    color: 'F17C67'
  })
}

export default handler
