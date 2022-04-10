import type { NextApiRequest, NextApiResponse } from 'next'
import isBase64 from 'is-base64'
import magnetToTorrent from 'magnet-to-torrent';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { magnet } = req.query

  if (!magnet || !isBase64(magnet as string ))
      return res.json({ error: 'Provide a valid magnet Base64 string. E.g., /api/link/<Base64 Magnet>' })

  const buff = Buffer.from(magnet as string, 'base64')
  const magnetString = buff.toString()

  if (!magnetToTorrent.isMagnet(magnetString)) return res.json({ error: 'Invalid magnet' })

  res.redirect(magnetString)
}
