// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const arr = [
  {
    img: "/images/2f13349d-879d-43c6-83e3-8e5679291d532.jpg",
    title: "Outdoor getaways",
  },
  {
    img: "/images/36f53e61-db8d-403c-9122-5b761c0e42644.jpg",
    title: "Unique stays",
  },
  {
    img: "/images/7d82ca14-56e5-4465-8218-dcfa7d69b6ac4.jpg",
    title: "Entire homes",
  },
  {
    img: "/images/10a638e1-6aff-4313-8033-1275cec839875.jpg",
    title: "Pets allowed",
  },
]

export default function helloAPI(req, res) {
  res.status(200).json(arr)
}
