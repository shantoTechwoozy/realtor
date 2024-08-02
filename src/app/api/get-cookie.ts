import type { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const cookies = cookie.parse(req.headers.cookie || '');
    const myCookie = cookies.myCookie || 'Cookie not found';

    res.status(200).json({ myCookie });
}
