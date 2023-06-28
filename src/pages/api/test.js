// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import axios from "axios";

export default async (req, res) => {
  try {
    const comment = req.query.comment;
    console.log(comment);
    const response = await axios.post(
      "http://127.0.0.1:5000/nlp_test",
      {
        comment: comment,
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
