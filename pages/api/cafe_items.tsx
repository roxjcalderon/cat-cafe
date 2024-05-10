'use server'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

    const url_base = `${process.env.RAILS_SERVER_URL}/api/v1/cafe_items/`;
    
    const result =  await fetch(url_base, {
        method: "GET"
    }).then(response => {
      return response.json();
    }).catch((error) => {
        throw new Error("Something went wrong");
    });

   res.status(200).json(result)
}
