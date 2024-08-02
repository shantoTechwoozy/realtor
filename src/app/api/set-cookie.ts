import type { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Set-Cookie', cookie.serialize('myCookie', 'cookieValue', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
    }));
    res.status(200).json({ message: 'Cookie set' });
}
