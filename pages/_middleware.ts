import helmet from 'helmet'
import nc from 'next-connect';

const handler = nc({
    onError: () => {},
    onNoMatch: () => {},
})
  
handler.use(helmet())

export default handler;