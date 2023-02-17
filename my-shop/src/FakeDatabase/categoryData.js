const fetchCategoryData = (name) => {
  if (name == "Graphic Cards") {
    return cardData;
  } else if (name == "ASIC Miners") {
    return asicData;
  } else {
    return gadgetData;
  }
};

const asicData = {
  description:
    "Looking to mine cryptocurrency on an industrial scale? Our collection of ASIC miners offers top-of-the-line performance for serious miners. With the latest hardware from leading manufacturers, you'll have everything you need to stay ahead of the competition and maximize your earnings.",
};

const cardData = {
  description:
    "Our selection of high-performance graphics cards is perfect for anyone looking to build a powerful gaming PC or mine cryptocurrency. With cutting-edge technology from top brands like NVIDIA and AMD, you'll be able to run the latest games and applications with ease. Plus, with advanced cooling and overclocking features, you can push your hardware to the limit for even better performance.",
};

const gadgetData = {
  description:
    "From hardware wallets to mining accessories, our selection of crypto gadgets has everything you need to take your crypto game to the next level. Keep your digital assets secure with the latest hardware wallets, or optimize your mining setup with advanced power supplies, cooling systems, and more. With our selection of crypto gadgets, you'll be able to stay ahead of the curve and maximize your earnings.",
};

export default fetchCategoryData;
