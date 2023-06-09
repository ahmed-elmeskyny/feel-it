// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import axios from "axios";

export default async (req, res) => {
  try {
    const url = req.query.url;
    console.log(url);
    const response = await axios.post(
      "http://127.0.0.1:5000/nlp_model",
      {
        url_str: url,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
