const cardData = [
  {
    name: "ASUS ROG RTX 4090 24GB",
    preOrder: true,
    price: "2999.99",
    source: "/images/GPUs/4090.png",
    description: "High performance GPU for mining crypto",
    longDescription:
      "The ASUS ROG RTX 4090 24GB is a high-performance graphics card designed for mining cryptocurrency. It features 10496 CUDA cores, 328 Tensor Cores, and 82 RT Cores for outstanding performance in demanding workloads. With 24GB of GDDR6X memory, this card can handle even the most memory-intensive tasks. ",
    longDescription2:
      "The card also features ASUS's MaxContact technology, which ensures optimal thermal transfer between the GPU and cooling system. This is the perfect card for miners who demand the very best performance and reliability.",
  },
  {
    name: "RTX 4080",
    price: "2599.99",
    source: "/images/GPUs/4080.png",
    description: "Top-tier GPU for mining cryptocurrency",
    longDescription:
      "The RTX 4080 is a top-tier graphics card designed for mining cryptocurrency. It features 8192 CUDA cores, 256 Tensor Cores, and 64 RT Cores for exceptional performance in demanding workloads. With 16GB of GDDR6X memory, this card can handle even the most memory-intensive tasks.",
    longDescription2:
      "The card also features advanced cooling technology to keep the GPU running at optimal temperatures during extended mining sessions.",
  },
  {
    name: "RTX 4070 Ti",
    price: "1999.99",
    source: "/images/GPUs/4070.png",
    description: "Powerful GPU for mining crypto",
    longDescription:
      "The RTX 4070 Ti is a powerful graphics card designed for mining cryptocurrency. It features 6144 CUDA cores, 192 Tensor Cores, and 48 RT Cores for outstanding performance in demanding workloads. With 12GB of GDDR6X memory, this card can handle even the most memory-intensive tasks.",
    longDescription2:
      "The card also features a dual-fan cooling system to keep the GPU running cool and quiet during extended mining sessions.",
  },
  {
    name: "RTX 3090 Ti",
    price: "4499.99",
    source: "/images/GPUs/3090Ti.png",
    description: "Cutting-edge GPU for mining",
    longDescription:
      "The RTX 3090 Ti is a cutting-edge graphics card designed for mining cryptocurrency. It features 10496 CUDA cores, 328 Tensor Cores, and 82 RT Cores for outstanding performance in demanding workloads. With 24GB of GDDR6X memory, this card can handle even the most memory-intensive tasks.",
    longDescription2:
      "The card also features advanced cooling technology to keep the GPU running at optimal temperatures during extended mining sessions.",
  },
  {
    name: "RTX 3090",
    source: "/images/GPUs/3090.png",
    description: "High-end GPU for mining crypto",
    longDescription:
      "The NVIDIA GeForce RTX 3090 is a high-end graphics card designed for gamers and professionals who demand the best performance. It is powered by the NVIDIA Ampere architecture and features 10496 CUDA cores, 328 Tensor Cores, 82 RT Cores, and 328 Texture Units. The card also has 24GB of GDDR6X memory and a memory bandwidth of 936 GB/s, which is ideal for mining cryptocurrency.",
    longDescription2:
      "In addition to its impressive performance, the RTX 3090 is equipped with advanced features such as real-time ray tracing and AI-enhanced graphics. It also supports HDMI 2.1 and DisplayPort 1.4a, allowing it to output high-resolution graphics and high frame rates. The card is ideal for mining cryptocurrencies such as Ethereum, which require high computational power and memory bandwidth.",
    price: "$3,999.99",
  },
  {
    name: "RTX 3080 Ti",
    source: "/images/GPUs/3080Ti.png",
    description: "Premium GPU for mining cryptocurrency",
    longDescription:
      "The NVIDIA GeForce RTX 3080 Ti is a premium graphics card designed for gamers and professionals who require the best performance. It is based on the NVIDIA Ampere architecture and features 10240 CUDA cores, 320 Tensor Cores, 80 RT Cores, and 320 Texture Units. The card also has 12GB of GDDR6X memory and a memory bandwidth of 912 GB/s, making it ideal for mining cryptocurrency.",
    longDescription2:
      "The RTX 3080 Ti also features advanced features such as real-time ray tracing and AI-enhanced graphics, as well as HDMI 2.1 and DisplayPort 1.4a connectivity. The card is ideal for mining cryptocurrencies that require high computational power and memory bandwidth, such as Ethereum.",
    price: "1,899.99",
  },
  {
    name: "RTX 3080",
    source: "/images/GPUs/3080.png",
    description: "Advanced GPU for mining crypto",
    longDescription:
      "The NVIDIA GeForce RTX 3080 is an advanced graphics card designed for gamers and professionals who need high performance. It is based on the NVIDIA Ampere architecture and features 8704 CUDA cores, 272 Tensor Cores, 68 RT Cores, and 272 Texture Units. The card also has 10GB of GDDR6X memory and a memory bandwidth of 760 GB/s, making it ideal for mining cryptocurrency.",
    longDescription2:
      "In addition to its impressive performance, the RTX 3080 also features advanced features such as real-time ray tracing and AI-enhanced graphics. It supports HDMI 2.1 and DisplayPort 1.4a connectivity, which allows it to output high-resolution graphics and high frame rates. The card is ideal for mining cryptocurrencies that require high computational power and memory bandwidth, such as Ethereum.",
    price: "1,799.99",
  },

  {
    name: "RTX 3070",
    source: "/images/GPUs/3070.png",
    description: "Top-performing GPU for mining",
    longDescription:
      "The NVIDIA GeForce RTX 3070 is an advanced graphics card designed for gamers and professionals who need high performance. It is based on the NVIDIA Ampere architecture and features 8704 CUDA cores, 272 Tensor Cores, 68 RT Cores, and 272 Texture Units. The card also has 10GB of GDDR6X memory and a memory bandwidth of 760 GB/s, making it ideal for mining cryptocurrency.",
    longDescription2:
      "In addition to its impressive performance, the RTX 3070 also features advanced features such as real-time ray tracing and AI-enhanced graphics. It supports HDMI 2.1 and DisplayPort 1.4a connectivity, which allows it to output high-resolution graphics and high frame rates. The card is ideal for mining cryptocurrencies that require high computational power and memory bandwidth, such as Ethereum.",
    price: "1,199.99",
  },
  {
    name: "RTX 3070 Ti",
    source: "/images/GPUs/3070Ti.png",
    description: "Performance-focused GPU for mining",
    longDescription:
      "The NVIDIA GeForce RTX 3070Ti is an advanced graphics card designed for gamers and professionals who need high performance. It is based on the NVIDIA Ampere architecture and features 8704 CUDA cores, 272 Tensor Cores, 68 RT Cores, and 272 Texture Units. The card also has 10GB of GDDR6X memory and a memory bandwidth of 760 GB/s, making it ideal for mining cryptocurrency.",
    longDescription2:
      "In addition to its impressive performance, the RTX 3070Ti also features advanced features such as real-time ray tracing and AI-enhanced graphics. It supports HDMI 2.1 and DisplayPort 1.4a connectivity, which allows it to output high-resolution graphics and high frame rates. The card is ideal for mining cryptocurrencies that require high computational power and memory bandwidth, such as Ethereum.",
    price: "1,499.99",
  },
  {
    name: "RTX 3060 Ti",
    source: "/images/GPUs/3060Ti.png",
    description: "Efficient GPU for mining cryptocurrency",
    longDescription:
      "The NVIDIA GeForce RTX 3060Ti is an advanced graphics card designed for gamers and professionals who need high performance. It is based on the NVIDIA Ampere architecture and features 8704 CUDA cores, 272 Tensor Cores, 68 RT Cores, and 272 Texture Units. The card also has 10GB of GDDR6X memory and a memory bandwidth of 760 GB/s, making it ideal for mining cryptocurrency.",
    longDescription2:
      "In addition to its impressive performance, the RTX 3060Ti also features advanced features such as real-time ray tracing and AI-enhanced graphics. It supports HDMI 2.1 and DisplayPort 1.4a connectivity, which allows it to output high-resolution graphics and high frame rates. The card is ideal for mining cryptocurrencies that require high computational power and memory bandwidth, such as Ethereum.",
    price: "1,099.99",
  },
  {
    name: "RTX 3060",
    source: "/images/GPUs/3060.png",
    description: "Solid GPU for mining crypto",
    longDescription:
      "The NVIDIA GeForce RTX 3060 is an advanced graphics card designed for gamers and professionals who need high performance. It is based on the NVIDIA Ampere architecture and features 8704 CUDA cores, 272 Tensor Cores, 68 RT Cores, and 272 Texture Units. The card also has 10GB of GDDR6X memory and a memory bandwidth of 760 GB/s, making it ideal for mining cryptocurrency.",
    longDescription2:
      "In addition to its impressive performance, the RTX 3060 also features advanced features such as real-time ray tracing and AI-enhanced graphics. It supports HDMI 2.1 and DisplayPort 1.4a connectivity, which allows it to output high-resolution graphics and high frame rates. The card is ideal for mining cryptocurrencies that require high computational power and memory bandwidth, such as Ethereum.",
    price: "999.99",
  },
  {
    name: "RTX 3050",
    source: "/images/GPUs/3050.png",
    description: "Entry-level GPU for mining cryptocurrency",
    longDescription:
      "The NVIDIA GeForce RTX 3050 is an advanced graphics card designed for gamers and professionals who need high performance. It is based on the NVIDIA Ampere architecture and features 8704 CUDA cores, 272 Tensor Cores, 68 RT Cores, and 272 Texture Units. The card also has 10GB of GDDR6X memory and a memory bandwidth of 760 GB/s, making it ideal for mining cryptocurrency.",
    longDescription2:
      "In addition to its impressive performance, the RTX 3050 also features advanced features such as real-time ray tracing and AI-enhanced graphics. It supports HDMI 2.1 and DisplayPort 1.4a connectivity, which allows it to output high-resolution graphics and high frame rates. The card is ideal for mining cryptocurrencies that require high computational power and memory bandwidth, such as Ethereum.",
    price: "899.99",
  },
];

export default cardData;
