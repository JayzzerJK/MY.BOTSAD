import assets from "./assets";

const NFTData = [
  {
    id: "NFT-01",
    name: "Фиалка",
    creator: "Violaceae dactyloides",
    price: "Декоративное",
    image: assets.nft01,
  },
  {
    id: "NFT-02",
    name: "Лапчатка",
    creator: "Rosaceae tollii",
    price: "Медоносное, декоративное",
    image: assets.nft02,
  },
  {
    id: "NFT-03",
    name: "Редовския",
    creator: "Cruciferae sophiifolia",
    price: "Декоративное",
    image: assets.nft03,
  },
  {
    id: "NFT-04",
    name: "Родиола",
    creator: "Crassulaceae rosea",
    price: "Лекарственное",
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur.",
    image: assets.nft04,
    bids: [
      {
        id: "BID-41",
        name: "Jessica Tan",
        price: 56.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-42",
        name: "Jennifer Sia",
        price: 54.25,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-43",
        name: "Rosie Wong",
        price: 55.15,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-44",
        name: "Vincent Swift",
        price: 54.15,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
];

export { NFTData };
