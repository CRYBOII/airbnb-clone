// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const arr = [
  {
    img: "/images/471d6e78-8e18-403f-828d-8d573b37ba192.jpg",
    location: "Bangkok",
    distance: "45-minute drive",
  },
  {
    img: "/images/847cfb7f-788d-42dc-9148-f375348dde76.jpg",
    location: "Bangkok",
    distance: "45-minute drive",
  },
  {
    img: "/images/7253e011-7c22-48fd-b75d-d0da35372397.jpg",
    location: "Bangkok",
    distance: "45-minute drive",
  },
  {
    img: "/images/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg",
    location: "Bangkok",
    distance: "45-minute drive",
  },
  {
    img: "/images/e639b7ab-aee3-48ee-9743-216684a51319.jpg",
    location: "Bangkok",
    distance: "45-minute drive",
  },
  {
    img: "/images/7253e011-7c22-48fd-b75d-d0da353723973.jpg",
    location: "Bangkok",
    distance: "45-minute drive",
  },
  {
    img: "/images/52e8083e-2de2-446d-a860-534eab2505412.jpg",
    location: "Bangkok",
    distance: "45-minute drive",
  },
  {
    img: "/images/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg",
    location: "Bangkok",
    distance: "45-minute drive",
  },
]

export default function helloAPI(req, res) {
  res.status(200).json(arr)
}
