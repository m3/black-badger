const PRODUCTS = [
  {
    id: 10434767520086,
    slug: "zirc-pawprint-dogtag",
    title: "Zirc pawprint dogtag",
    price: "400.00",
    description: "FINALLY available to the public! These dogtags have been developed by myself and Pat Pruitt. Milled from solid Zirconium metal (blowtorched black) with tech hex background patterning and deep engraved Black Badger logo.",
    shopifyImages: [
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/files/IMG_8417.png?v=1777744513",
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/files/IMG_8418.jpg?v=1777744498"
    ],
    billet: "images/109573705_3273454609437545_5486113242067362075_n.jpg",
    lume: "images/124633606_145774277273737_1759764295287620559_n.jpg",
    process: ["mpsn07n8-mpsa2i95-image.png"],
    material: "Solid Zirconium / Pat Pruitt Collaboration",
    labNote: "Collaborated with Pat Pruitt on these. Zirconium behaves differently under a torch—it's like painting with fire."
  },
  {
    id: 10288833167702,
    slug: "20th-anniversary-ring",
    title: "The Black Badger 20th Anniversary Ring",
    price: "2000.00",
    sizes: ["21.5 mm","21 mm","22 mm","19.5 mm","20.5 mm","20 mm","22.5 mm","19 mm","18.5 mm"],
    description: "It's been 20 years since I started Black Badger! From fun little objects to a highly innovative contributor to the Swiss watch industry.",
    shopifyImages: [
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/files/IMG_7859.jpg?v=1774263924",
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/files/IMG_7860.jpg?v=1774263924",
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/files/IMG_7876.jpg?v=1774263924"
    ],
    billet: "images/15258897_1650176368613635_1964943762643746816_a.jpg",
    lume: "images/16465080_1209822362406243_228716466029985792_a.jpg",
    sketches: {
      blueprint: "mpsmsn28-mps9y8an-image.png",
      technical: "mpsn07q7-mps9y8an-image.png"
    },
    process: ["mpsn07mt-mpsa3dfj-image.png", "mpsn07me-mpsa4vwd-image.png"],
    material: "Proprietary Composite / 20 Years of R&D",
    labNote: "Two decades of smelling like a machine shop distilled into one ring. It's not just jewelry; it's a timeline."
  },
  {
    id: 2831768453201,
    slug: "fordite-micarta-ring",
    title: "Fordite / Vintage Westinghouse Micarta ring",
    price: "900.00",
    description: "Fordite combined with an outer layer milled from 1940s Westinghouse Micarta. Used as an electrical insulator, comprised of layers of linen fabric impregnated with phenolic resin.",
    shopifyImages: [
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/products/1A7766A5-92FC-4372-997D-E177D9D0F877.jpeg?v=1554712384",
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/products/C7707B66-44BD-4FDF-9D28-E3C6D41F3AE4.jpeg?v=1554712384"
    ],
    billet: "images/156115335_445187510163291_3329420832664336264_n.jpg",
    lume: "images/258607852_631379791357681_226942057115413027_n.jpg",
    process: ["mpsn07m1-mpsa6v5v-image.png"],
    material: "1940s Westinghouse / Ford Rouge Plant",
    labNote: "Combined rare Fordite with Westinghouse Micarta from the 1940s. It smells like industrial optimism."
  },
  {
    id: 10187838390614,
    slug: "damascus-steel-fordite",
    title: "Damascus Steel and Fordite",
    price: "1500.00",
    sizes: ["17 mm","18 mm","21.5 mm","16.5 mm","21 mm","22 mm","17.5 mm","19.5 mm","20.5 mm","20 mm","22.5 mm","19 mm","18.5 mm"],
    description: "One of our most popular designs. Patterned Damascus hand forged by Chris Ploof, paired with brilliantly colored Fordite from Detroit's auto factories.",
    shopifyImages: [
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/files/IMG_7305_bc705bf7-fb14-4818-b8f8-3e98b186d1f2.jpg?v=1770910527",
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/files/69FC5F35-5F47-4FC9-A249-C3CFB1DFB7D9.jpg?v=1770919111"
    ],
    billet: "images/173695269_783143255961858_4859049672483575862_n.jpg",
    lume: "images/201958664_100772432234332_3769945858959768558_n.jpg",
    process: ["mpsn07ny-mpsa132a-image.png"],
    material: "Chris Ploof Forge / Detroit Salvage",
    labNote: "Chris Ploof forged this Damascus for me. The Fordite adds the soul of old Detroit."
  },
  {
    id: 10187723276630,
    slug: "tvabla-ring",
    title: "The TvåBlå ring",
    price: "1800.00",
    sizes: ["17 mm","18 mm","21.5 mm","16.5 mm","21 mm","22 mm","17.5 mm","19.5 mm","20.5 mm","20 mm","22.5 mm","19 mm","18.5 mm"],
    description: "TvåBlå means 'two blue' in Swedish. A close cousin to the Bluetongue® and Zirconium ring, featuring a brilliant blue interior.",
    shopifyImages: [
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/files/IMG_5166.jpg?v=1770908570",
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/files/IMG_5134.jpg?v=1770911628"
    ],
    billet: "images/23498982_505736786461333_3166835548264652800_n.jpg",
    lume: "images/25017166_2017362155198562_8394137246407589888_n.jpg",
    process: ["mpsn07nv-mpsa1ndu-image.png"],
    material: "Damasteel Bluetongue / Swedish Zirconium",
    labNote: "'TvåBlå' means 'Two Blue'. It's a Swedish pun, and if you don't get it, I'll show myself out."
  },
  {
    id: 6730178363473,
    slug: "horizon-orange-lume",
    title: "Horizon: Vintage racing-inspired series",
    price: "475.00",
    sizes: ["16.5 mm","21.5mm","17.5 mm","20.5mm","19.5mm","22.5mm","18.5 mm"],
    description: "Features a brand new proprietary orange lume developed with Swiss Super-LumiNova. Glows bright orange in darkness with an iconic orange daytime color.",
    shopifyImages: [
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/products/image_0c7e0d4b-64d0-4da5-bf6d-1856b7c037c1.jpg?v=1638791203",
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/products/image_f597cbc7-2b61-4a96-b359-7c8a300ca5d8.jpg?v=1638791215"
    ],
    billet: "images/272099248_311784397628133_660527836006071145_n.jpg",
    lume: "images/284043445_1067268314190659_8507055683150843439_n.jpg",
    process: ["mpsn07oo-mps9ym09-image.png"],
    material: "Swiss Super-LumiNova / Gulf Racing Heritage",
    labNote: "Developed a proprietary orange lume with Super-LumiNova. It's the exact shade of 1960s speed."
  },
  {
    id: 10186789912918,
    slug: "bluetongue-zirconium",
    title: "Bluetongue Damascus Steel and Zirconium ring",
    price: "1800.00",
    sizes: ["17 mm","18 mm","21.5 mm","16.5 mm","21 mm","22 mm","17.5 mm","19.5 mm","20.5 mm","20 mm","22.5 mm","19 mm","18.5 mm"],
    description: "An instant favorite. Combines an inner of flame-oxidized Zirconium with an outer milled from Damasteel's Bluetongue® Damascus steel pattern.",
    shopifyImages: [
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/files/Bluetongue_Zirc.jpg?v=1770888933",
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/files/IMG_6373.jpg?v=1770888889"
    ],
    billet: "images/287505266_3269731653284510_1150526066041335722_n.jpg",
    lume: "images/298717862_173889198457541_3229643596129260307_n.jpg",
    process: ["mpsn07nk-mpsa22t9-image.png"],
    material: "Damasteel AB / Flame-Oxidized Zirconium",
    labNote: "Acid-etching the Bluetongue pattern reveals concentric circles that look like topographical maps of a cool planet."
  },
  {
    id: 2809706709073,
    slug: "horizon-ceramic",
    title: "Horizon ring (double stripe ceramic)",
    price: "425.00",
    sizes: ["18.5mm","21.5mm","20.5mm","19.5mm","22.5mm","16.5mm","17.5mm"],
    description: "The start of something special. Matte black ceramic with two narrow stripes of Badgerite lume material powered by Swiss Super-LumiNova®.",
    shopifyImages: [
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/products/414012-3eecfcb4487e401094afb910e6eefe7f.jpg?v=1554186874",
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/products/414012-d77cb3ded3234cb79b751656e698269f.jpg?v=1554186875"
    ],
    billet: "images/378533165_1010523203429470_1052406886933962212_n.jpg",
    lume: "images/41953372_2282052308747619_324117310400888832_n.jpg",
    process: ["mpsn07oy-mps9yio5-image.png"],
    material: "Matte Black Ceramic / Badgerite Lume",
    labNote: "Badgerite is my secret sauce. It's what happens when you decide the watch industry isn't bright enough."
  },
  {
    id: 2809706578001,
    slug: "horizon-titanium",
    title: "Horizon ring (double stripe titanium)",
    price: "425.00",
    sizes: ["18.5mm","21.5mm","20.5mm","19.5mm","22.5mm","16.5mm","17.5mm"],
    description: "Titanium ring featuring two narrow stripes of Badgerite lume material. By far the most versatile ring in the lineup.",
    shopifyImages: [
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/products/414012-cbd2ba382fd94617908fa69ddbe60446.jpg?v=1554186874",
      "https://cdn.shopify.com/s/files/1/0089/0175/4961/products/414012-8380354025db447f8e9f405a169d5a32.jpg?v=1554186876"
    ],
    billet: "images/424459147_1114706066636587_397693242909840195_n.jpg",
    lume: "images/426031462_355029414097701_8703517397122770466_n.jpg",
    process: ["mpsn07oo-mps9ym09-image.png"],
    material: "Aerospace Titanium / Badgerite Lume",
    labNote: "Titanium is the workhorse of the future. Light, strong, and it loves a good stripe."
  }
];
