export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  shopLink: string;
  images: string[];
  category: string;
  likes: number;
}

export const products = [
  {
    id: 113138428,
    name: 'Apple iPhone 15 Pro Max 256Gb синий',
    price: 635298,
    description: 'Apple iPhone 15 Pro Max 256Gb синий',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138428/?c=750000000',
    category: 'Smartphones and gadgets',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h64/h50/83559848575006.png?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hc5/hce/83559848640542.png?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hab/hed/83559848706078.png?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h82/h9f/83559848771614.png?format=preview-medium']
  },

  {
    id: 113138109,
    name: 'Apple iPhone 15 Pro 128Gb черный',
    price: 532819,
    description: 'Apple iPhone 15 Pro 128Gb черный',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-chernyi-113138109/?c=750000000',
    category: 'Smartphones and gadgets',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h02/h35/83559605960734.png?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h2a/hc0/83559605993502.png?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h53/h5d/83559613530142.png?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hc7/h84/83559613595678.jpg?format=preview-medium']
  },

  {
    id: 113138191,
    name: 'Apple iPhone 15 Pro 256Gb черный',
    price: 589616,
    description: 'Apple iPhone 15 Pro 256Gb черный',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-113138191/?c=750000000',
    category: 'Smartphones and gadgets',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h89/hdb/83559618379806.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h9c/h50/83559618445342.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/had/hcc/83559618510878.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h54/he2/83559618576414.jpg?format=preview-medium']
  },

  {
    id: 106363144,
    name: 'Apple iPhone 14 128Gb starlight',
    price: 327036,
    description: 'Apple iPhone 14 128Gb starlight',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-starlight-106363144/?c=750000000',
    category: 'Smartphones and gadgets',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h9f/h49/64481569832990.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hab/h36/64481571733534.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/ha4/h8c/64481575665694.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/ha0/h6a/64481577664542.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h6f/h56/64481579663390.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h2d/h5f/64481582612510.jpg?format=preview-medium']
  },

  {
    id: 110044379,
    name: 'Samsung Galaxy A54 5G 8 ГБ/256 ГБ черный',
    price: 179990,
    description: 'Samsung Galaxy A54 5G 8 ГБ/256 ГБ черный',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-8-gb-256-gb-chernyi-110044379/?c=750000000',
    category: 'Smartphones and gadgets',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h81/h13/80435536887838.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h3b/h88/80435537412126.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hf8/hdc/80435537936414.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hb3/h50/80435538460702.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hc4/h5d/80435538984990.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hc1/h3a/80435539509278.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h81/h59/80435540033566.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hc4/h04/80435540557854.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hbb/h1c/80435541082142.jpg?format=preview-medium']
  },

  {
    id: 104078887,
    name: 'Apple iPhone 13 128Gb зеленый',
    price: 298775,
    description: 'Apple iPhone 13 128Gb зеленый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000',
    category: 'Smartphones and gadgets',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hd1/h2f/64255724159006.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h51/h3e/64255726747678.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hdd/hf3/64255730286622.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h68/hb0/64255733039134.jpg?format=preview-medium']
  },

  {
    id: 110917697,
    name: 'Xiaomi Redmi 12 4G 8 ГБ/256 ГБ серебристый',
    price: 69603,
    description: 'Xiaomi Redmi 12 4G 8 ГБ/256 ГБ серебристый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-serebristyi-110917697/?c=750000000',
    category: 'Smartphones and gadgets',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h54/hfb/81334459990046.png?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h84/h36/81334460022814.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hac/hf9/81334460055582.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h2e/h6b/81334460121118.png?format=preview-medium']
  },

  {
    id: 113137929,
    name: 'Apple iPhone 15 128Gb голубой',
    price: 381345,
    description: 'Apple iPhone 15 128Gb голубой',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000',
    category: 'Smartphones and gadgets',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hd1/h07/83559339032606.png?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h56/hbb/83559339065374.png?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h2e/hae/83559331856414.png?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h71/hd3/83559331921950.png?format=preview-medium']
  },

  {
    id: 113138461,
    name: 'Apple iPhone 15 Pro Max 512Gb серый',
    price: 751138,
    description: 'Apple iPhone 15 Pro Max 512Gb серый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-512gb-seryi-113138461/?c=750000000',
    category: 'Smartphones and gadgets',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h1d/hf3/83559849361438.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h8c/h66/83559849426974.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hdb/h78/83559849492510.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hf5/h59/83559849558046.jpg?format=preview-medium']
  },

  {
    id: 102298145,
    name: 'Apple iPhone 13 128Gb розовый',
    price: 295825,
    description: 'Apple iPhone 13 128Gb розовый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000',
    category: 'Smartphones and gadgets',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h16/h64/64000133005342.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h89/hd5/64000136019998.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hf9/hdc/64000138313758.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h02/hdb/64000140935198.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h01/h7f/64000143032350.jpg?format=preview-medium']
  },

  {
    id: 102298364,
    name: 'Apple iPhone 13 128Gb синий',
    price: 297028,
    description: 'Apple iPhone 13 128Gb синий',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000',
    category: 'Smartphones and gadgets',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hb4/h03/64206207352862.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hb8/h32/64206209384478.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/he8/h1c/64206212857886.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h16/h4d/64206215020574.jpg?format=preview-medium']
  },

  {
    id: 106363117,
    name: 'Apple iPhone 14 128Gb сиреневый',
    price: 329826,
    description: 'Apple iPhone 14 128Gb сиреневый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-sirenevyi-106363117/?c=750000000',
    category: 'Smartphones and gadgets',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h33/hf7/64401467899934.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hed/hd4/64401469243422.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h46/h6a/64401470390302.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hcb/h63/64401473536030.jpg?format=preview-medium']
  },

  {
    id: 105073150,
    name: 'Kingston DTXM/128GB 128 Гб',
    price: 3384,
    description: 'Kingston DTXM/128GB 128 Гб',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/kingston-dtxm-128gb-128-gb-105073150/?c=750000000',
    category: 'Peripherals',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h4c/ha7/65112949096478.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h9d/h93/65112951652382.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hf9/h73/65112954273822.jpg?format=preview-medium']
  },

  {
    id: 106111650,
    name: 'ILAN RGB800',
    price: 2994,
    description: 'ILAN RGB800',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/ilan-rgb800-106111650/?c=750000000',
    category: 'Peripherals',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hf6/h39/64506361905182.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hf1/h6a/64506364592158.jpg?format=preview-medium']
  },

  {
    id: 106785769,
    name: 'LEAVEN K620 черный',
    price: 9700,
    description: 'LEAVEN K620 черный',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/leaven-k620-chernyi-106785769/?c=750000000',
    category: 'Peripherals',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h73/h8c/64562900140062.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h84/h79/66542442446878.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hf8/h86/66542442971166.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hc2/hef/66542443495454.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h3a/h54/66542444019742.jpg?format=preview-medium']
  },

  {
    id: 108213498,
    name: 'Sanc M2442PH серый',
    price: 58580,
    description: 'Sanc M2442PH серый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/sanc-m2442ph-seryi-108213498/?c=750000000',
    category: 'Peripherals',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h24/h7a/67278437548062.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hbe/hfb/67278437810206.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h21/h12/67278438072350.jpg?format=preview-medium']
  },

  {
    id: 109753958,
    name: 'Art Strata',
    price: 3985,
    description: 'Art Strata',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/art-strata-109753958/?c=750000000',
    category: 'Peripherals',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/he9/hbc/79798659809310.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h14/h41/79798661644318.jpg?format=preview-medium']
  },

  {
    id: 110621090,
    name: 'Ajazz AJ199 белый',
    price: 28804,
    description: 'Ajazz AJ199 белый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/ajazz-aj199-belyi-110621090/?c=750000000',
    category: 'Peripherals',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h86/h7d/80990103863326.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/ha0/h45/80990103896094.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hb6/h3d/80990103568414.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h17/hbc/80990103633950.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h6b/h04/80990103765022.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/ha5/h77/80990103830558.jpg?format=preview-medium']
  },

  {
    id: 110860164,
    name: 'Havit MS1005 черный',
    price: 2898,
    description: 'Havit MS1005 черный',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/havit-ms1005-chernyi-110860164/?c=750000000',
    category: 'Peripherals',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h70/hd3/81276891922462.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h27/h83/81276894216222.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hfc/h32/81276896378910.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hb5/h6a/81276898639902.jpg?format=preview-medium']
  },

  {
    id: 7300440,
    name: 'Transcend TS1TSJ25M3S 1000 ГБ',
    price: 36900,
    description: 'Transcend TS1TSJ25M3S 1000 ГБ',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/transcend-ts1tsj25m3s-1000-gb-7300440/?c=750000000',
    category: 'Peripherals',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hd4/hc5/63780788305950.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h56/h69/63780789059614.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h3f/hda/63780789420062.jpg?format=preview-medium']
  },

  {
    id: 9100196,
    name: 'Logitech M170 910-004642 серый',
    price: 4012,
    description: 'Logitech M170 910-004642 серый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/logitech-m170-910-004642-seryi-9100196/?c=750000000',
    category: 'Peripherals',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h9c/hef/63774263312414.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h85/h8c/63774263738398.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h23/h6b/63774264197150.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/he5/hf1/63774264655902.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h92/h8b/63774265049118.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h2c/h4a/63774265507870.jpg?format=preview-medium']
  },

  {
    id: 9200601,
    name: 'X-Game XK-200UB черный',
    price: 2449,
    description: 'X-Game XK-200UB черный',
    rating: 4.5,
    shopLink: 'https://kaspi.kz/shop/p/x-game-xk-200ub-chernyi-9200601/?c=750000000',
    category: 'Peripherals',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h87/h6b/63813579538462.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hf9/he4/63813583339550.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h31/ha9/63813586354206.jpg?format=preview-medium']
  },

  {
    id: 101738150,
    name: 'Sanc M2736PB черный',
    price: 68100,
    description: 'Sanc M2736PB черный',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/sanc-m2736pb-chernyi-101738150/?c=750000000',
    category: 'Peripherals',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h48/h43/64310085910558.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h5e/h28/64310088138782.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h97/hc5/64310091350046.jpg?format=preview-medium']
  },

  {
    id: 102134869,
    name: 'Xiaomi Mi Portable Mouse 2 BXSBMW02-BLACK черный',
    price: 6779,
    description: 'Xiaomi Mi Portable Mouse 2 BXSBMW02-BLACK черный',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/xiaomi-mi-portable-mouse-2-bxsbmw02-black-chernyi-102134869/?c=750000000',
    category: 'Peripherals',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/he9/h5d/64030413226014.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hb6/h53/64030414897182.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h84/hef/64030418468894.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h0e/ha5/64030420434974.jpg?format=preview-medium']
  },

  {
    id: 103651402,
    name: 'Veles для iPhone 13 Pro Max прозрачный',
    price: 139,
    description: 'Veles для iPhone 13 Pro Max прозрачный',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/veles-dlja-iphone-13-pro-max-prozrachnyi-103651402/?c=750000000',
    category: 'Phone accessories',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hbf/hee/64409282281502.jpg?format=preview-medium']
  },

  {
    id: 104505586,
    name: 'G-Case для Apple iPhone 11 прозрачный',
    price: 505,
    description: 'G-Case для Apple iPhone 11 прозрачный',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/g-case-dlja-apple-iphone-11-prozrachnyi-104505586/?c=750000000',
    category: 'Phone accessories',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h96/h43/64439548149790.jpg?format=preview-medium']
  },

  {
    id: 106559203,
    name: 'Smart Case для Apple iPhone 11 белый',
    price: 547,
    description: 'Smart Case для Apple iPhone 11 белый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/smart-case-dlja-apple-iphone-11-belyi-106559203/?c=750000000',
    category: 'Phone accessories',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hac/h79/64378075054110.jpg?format=preview-medium']
  },

  {
    id: 106561217,
    name: 'OEM для Apple iPhone 13 синий',
    price: 435,
    description: 'OEM для Apple iPhone 13 синий',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/oem-dlja-apple-iphone-13-sinii-106561217/?c=750000000',
    category: 'Phone accessories',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hf6/h0c/63607204839454.jpg?format=preview-medium']
  },

  {
    id: 106598111,
    name: 'OEM для Apple iPhone 14 Pro Max прозрачный',
    price: 299,
    description: 'OEM для Apple iPhone 14 Pro Max прозрачный',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/oem-dlja-apple-iphone-14-pro-max-prozrachnyi-106598111/?c=750000000',
    category: 'Phone accessories',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hd3/h8d/63611490631710.jpg?format=preview-medium']
  },

  {
    id: 106598163,
    name: 'OEM для Apple iPhone 14 Pro прозрачный',
    price: 294,
    description: 'OEM для Apple iPhone 14 Pro прозрачный',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/oem-dlja-apple-iphone-14-pro-prozrachnyi-106598163/?c=750000000',
    category: 'Phone accessories',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h0e/h1f/63567316516894.jpg?format=preview-medium']
  },

  {
    id: 106763053,
    name: 'OEM для Apple iPhone 14 Pro Max прозрачный',
    price: 337,
    description: 'OEM для Apple iPhone 14 Pro Max прозрачный',
    rating: 4.5,
    shopLink: 'https://kaspi.kz/shop/p/oem-dlja-apple-iphone-14-pro-max-prozrachnyi-106763053/?c=750000000',
    category: 'Phone accessories',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h1c/h93/63648401195038.jpg?format=preview-medium']
  },

  {
    id: 107118653,
    name: 'Чехол SeeDoo Defense Clear Case для iPhone 14 Pro. Прозрачный',
    price: 260,
    description: 'Чехол SeeDoo Defense Clear Case для iPhone 14 Pro. Прозрачный',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/chehol-seedoo-defense-clear-case-dlja-iphone-14-pro-prozrachnyi-107118653/?c=750000000',
    category: 'Phone accessories',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hc4/hd2/63805367353374.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h07/h7e/63805367877662.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h12/hb7/63805368401950.jpg?format=preview-medium']
  },

  {
    id: 107186278,
    name: 'OEM для Apple iPhone 14 Pro прозрачный',
    price: 348,
    description: 'OEM для Apple iPhone 14 Pro прозрачный',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/oem-dlja-apple-iphone-14-pro-prozrachnyi-107186278/?c=750000000',
    category: 'Phone accessories',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h54/ha2/63875498344478.jpg?format=preview-medium']
  },

  {
    id: 107375173,
    name: 'Smart Case для Apple iPhone 13 белый',
    price: 547,
    description: 'Smart Case для Apple iPhone 13 белый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/smart-case-dlja-apple-iphone-13-belyi-107375173/?c=750000000',
    category: 'Phone accessories',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hba/hb0/65215605506078.jpg?format=preview-medium']
  },

  {
    id: 107608091,
    name: 'OEM для Apple iPhone 14 прозрачный',
    price: 297,
    description: 'OEM для Apple iPhone 14 прозрачный',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/oem-dlja-apple-iphone-14-prozrachnyi-107608091/?c=750000000',
    category: 'Phone accessories',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hdc/h49/65837163347998.jpg?format=preview-medium']
  },

  {
    id: 107664467,
    name: 'OEM для Apple iPhone 14 Pro прозрачный',
    price: 147,
    description: 'OEM для Apple iPhone 14 Pro прозрачный',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/oem-dlja-apple-iphone-14-pro-prozrachnyi-107664467/?c=750000000',
    category: 'Phone accessories',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h1d/h8b/65986379808798.jpg?format=preview-medium']
  },
  {
    id: 109066184,
    name: 'Midea MO35000GB черный',
    price: 134830,
    description: 'Midea MO35000GB черный',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/midea-mo35000gb-chernyi-109066184/?c=750000000',
    category: 'Home equipment',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h55/h7d/69398361341982.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h27/h80/69398361866270.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h43/hf1/69398362390558.jpg?format=preview-medium']
  },

  {
    id: 110273332,
    name: 'Toshiba TW-BL70A2UZ SS серый',
    price: 189990,
    description: 'Toshiba TW-BL70A2UZ SS серый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/toshiba-tw-bl70a2uz-ss-seryi-110273332/?c=750000000',
    category: 'Home equipment',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/he8/h0b/80716616433694.png?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h43/he9/80716616466462.png?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h32/h6d/80716616531998.png?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h8c/h57/80716616597534.png?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h9a/hd4/80716616663070.png?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h65/h8d/80716616728606.png?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/had/h99/80716616794142.png?format=preview-medium']
  },

  {
    id: 112420571,
    name: 'Samsung WW80AGAS26AELD белый',
    price: 204066,
    description: 'Samsung WW80AGAS26AELD белый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/samsung-ww80agas26aeld-belyi-112420571/?c=750000000',
    category: 'Home equipment',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hb7/h21/82639361343518.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h8c/h28/82639363440670.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h37/h32/82639364751390.jpg?format=preview-medium']
  },

  {
    id: 114195262,
    name: 'LG F2J3NS8W белый',
    price: 166482,
    description: 'LG F2J3NS8W белый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/lg-f2j3ns8w-belyi-114195262/?c=750000000',
    category: 'Home equipment',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h64/h47/84397882310686.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hf9/hba/84398528004126.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h5b/hd0/84398528036894.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h88/h6b/84397882507294.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h5a/hde/84397882572830.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h40/hfd/84397882638366.jpg?format=preview-medium']
  },

  {
    id: 2701652,
    name: 'Бирюса 120 белый',
    price: 123399,
    description: 'Бирюса 120 белый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/birjusa-120-belyi-2701652/?c=750000000',
    category: 'Home equipment',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h87/h35/63762400018462.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hab/h43/63762401230878.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h2a/h93/63762402476062.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h29/h22/63762403983390.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h9c/h01/63762404769822.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h3d/h87/63762406277150.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hf8/hec/63762407915550.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h63/h52/63762409685022.jpg?format=preview-medium']
  },

  {
    id: 2800688,
    name: 'Бирюса 355KX 330 л белый',
    price: 156380,
    description: 'Бирюса 355KX 330 л белый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/birjusa-355kx-330-l-belyi-2800688/?c=750000000',
    category: 'Home equipment',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h0c/h67/63833061195806.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h06/hd1/63833065062430.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h65/h5e/63833068306462.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h81/h5c/63833072500766.jpg?format=preview-medium']
  },

  {
    id: 3601437,
    name: 'LG F-2M5HS6W белый',
    price: 200993,
    description: 'LG F-2M5HS6W белый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/lg-f-2m5hs6w-belyi-3601437/?c=750000000',
    category: 'Home equipment',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h07/h4e/67091855245342.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hfa/h82/67091855507486.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hc4/ha2/67091855769630.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hc0/hf0/67091856031774.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h2f/h14/67091856293918.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hbd/h0c/67091856556062.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h13/h96/67091856818206.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hfb/h95/67091857342494.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hb8/hea/67091857866782.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hc7/hf3/67091858391070.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h1f/h4e/67091858915358.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/ha9/h1a/67091859439646.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/ha8/h85/67091859963934.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h6c/hfe/67091860488222.jpg?format=preview-medium']
  },

  {
    id: 3601479,
    name: 'Indesit EWSD 51031 BK CIS белый',
    price: 109990,
    description: 'Indesit EWSD 51031 BK CIS белый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/indesit-ewsd-51031-bk-cis-belyi-3601479/?c=750000000',
    category: 'Home equipment',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h21/h30/63825364385822.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h50/h7c/63825367334942.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h61/hc3/63825371267102.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hbb/h5f/63825374412830.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/heb/h1f/63825377493022.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h1b/h0a/63825380966430.jpg?format=preview-medium']
  },

  {
    id: 106577567,
    name: 'Midea MFN60-S1003S Slim серый',
    price: 126950,
    description: 'Midea MFN60-S1003S Slim серый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/midea-mfn60-s1003s-slim-seryi-106577567/?c=750000000',
    category: 'Home equipment',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h20/hae/64378263011358.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hc7/h61/64378266124318.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h3c/hc1/64378303610910.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h35/h5a/64378306265118.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h0d/h89/64378308460574.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hec/h27/64378311213086.jpg?format=preview-medium']
  },

  {
    id: 106761960,
    name: 'Leadbros MG80-14586B серый',
    price: 169990,
    description: 'Leadbros MG80-14586B серый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/leadbros-mg80-14586b-seryi-106761960/?c=750000000',
    category: 'Home equipment',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h66/hc4/83057081253918.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h3f/h01/83057081286686.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h31/ha3/83057081319454.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h6d/h8d/83057081352222.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h0a/h78/83057081384990.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hb2/he3/83057081417758.jpg?format=preview-medium']
  },

  {
    id: 100509545,
    name: 'LG F2V5GG2S серый',
    price: 323936,
    description: 'LG F2V5GG2S серый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/lg-f2v5gg2s-seryi-100509545/?c=750000000',
    category: 'Home equipment',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/ha0/he6/63942512640030.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h0c/hd1/63942515916830.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h21/h99/63942518308894.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h29/h6f/63942523387934.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h78/hf6/63942525976606.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hd0/h21/63942528696350.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h22/h48/63942531874846.jpg?format=preview-medium']
  },

  {
    id: 106788016,
    name: 'LG F2J6HG7W белый',
    price: 250000,
    description: 'LG F2J6HG7W белый',
    rating: 5.0,
    shopLink: 'https://kaspi.kz/shop/p/lg-f2j6hg7w-belyi-106788016/?c=750000000',
    category: 'Home equipment',
    likes: 0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h8d/h36/64431786786846.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hd8/h11/64431790063646.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/hf5/h45/64431792095262.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h79/hc9/64431794651166.jpg?format=preview-medium','https://resources.cdn-kaspi.kz/img/m/p/h13/h8a/64431797600286.jpg?format=preview-medium']
  },


];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/