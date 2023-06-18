const productsList = [
    {id: 1, img: "https://f.fcdn.app/imgs/ff0128/www.covercompany.com.uy/coveuy/7b15/original/catalogo/2-3386_9569_1/2000-2000/iphone-14-128gb-6gb-ram-5g-6-1-chip-a15-bionic-oled-retina-xdr-violeta.jpg",type: "Phone", brand:"Apple", model: "iPhone 14", price: 1199},
    {id: 2, img: "https://f.fcdn.app/imgs/f7809c/www.zonatecno.com.uy/zoteuy/f594/original/catalogo/102705_102705_1/2000-2000/celular-apple-iphone-14-pro-max-256gb-6gb-deep-purple-celular-apple-iphone-14-pro-max-256gb-6gb-deep-purple.jpg",type: "Phone", brand:"Apple", model: "iPhone 14 Pro Max", price: 1700},
    {id: 3, img: "https://f.fcdn.app/imgs/70e3aa/stienda.uy/sam/9eaa/original/catalogo/S2312888060947455801/1920-1200/samsung-galaxy-s23-128gb-5g-light-pink.jpg",type: "Phone", brand:"Samsung", model: "Galaxy S23", price: 1049},
    {id: 4, img: "https://f.fcdn.app/imgs/3f7de9/stienda.uy/sam/83d2/original/catalogo/SM-A145RZKVEUB88060948554321/800_800/samsung-galaxy-a14-lte-128-gb-green.jpg",type: "Phone", brand:"Samsung", model: "A14", price: 259},
    {id: 5, img: "https://mobilestore.com.uy/site/wp-content/uploads/2023/04/ZDAxZjVhM2_559-484x484.png",type: "Phone", brand:"Motorola", model: "Moto G72", price: 375},
    {id: 6, img: "https://cdn.dxomark.com/wp-content/uploads/medias/post-130310/Xiaomi-12T_featured-image-packshot-review.jpg",type: "Phone", brand:"Xiaomi", model: "12 Pro", price: 499},
    {id: 7, img: "https://f.fcdn.app/imgs/4ee267/artcomputer.com.uy/artcuy/bb95/original/catalogo/AW845SG_AW845SG_1/2000-2000/apple-watch-series-8-45mm-midnight-apple-watch-series-8-45mm-midnight.jpg",type: "Smart Watch",brand: "Apple", model: "Series 8", price: 559},
    {id: 8, img: "https://m.media-amazon.com/images/I/71-bUn+jA1L.jpg",type: "Smart Watch",brand: "Samsing", model: "Galaxy Watch 4", price: 390},
    {id: 9, img: "https://cdn.shopify.com/s/files/1/0271/8302/2166/products/GT3-Runner-Black-Left.jpg?v=1681265050",type: "Smart Watch",brand: "Huawei", model: "Gt Runner", price: 259},
    {id: 10, img: "https://tatauy.vtexassets.com/arquivos/ids/284249-800-800?v=637789790016800000&width=800&height=800&aspect=true",type: "Smart Watch",brand: "Xiaomi", model: "Amazfit Gt", price: 129},
    {id: 11, img: "https://cdn.awsli.com.br/1718/1718332/produto/175646085/07-thawmb.jpg",type: "Smart Watch",brand: "Smart-Watch", model: "W28 Pro Serie 8", price: 84},
    {id: 12, img: "https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00071171954889l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",type: "Game Console",brand: "Play Station", model: "5", price: 808},
    {id: 13, img: "https://m.media-amazon.com/images/I/51ojzJk77qL.jpg",type: "Game Console",brand: "xBox", model: "Series X", price: 600},
    {id: 14, img: "https://m.media-amazon.com/images/I/71UiJ0O6vTL.jpg",type: "Game Console",brand: "Nintendo Switch", model: "Deluxe", price: 699},
    {id: 15, img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481",type: "Laptop", brand: "Apple", model: "MacBook Pro", price: 2899},
    {id: 16, img: "https://f.fcdn.app/imgs/5a923c/www.covercompany.com.uy/coveuy/6cda/original/catalogo/2-3918_10531_2/1500-1500/apple-macbook-air-m2-13-6-512gb-ssd-8gb-ram-2022-espanol-starlight.jpg",type: "Laptop", brand: "Apple", model: "MacBook Air M2", price: 1829},
    {id: 17, img: "https://unitytech.uy/wp-content/uploads/2021/11/Notebook-Asus-Laptop-X515ea-bq967t-Core-i3-Gen-11-4gb-SSD-128-Gb-15.6-FHD-W10-2.jpg",type: "Laptop", brand: "ASUS", model: "X515EA", price: 599},
    {id: 18, img: "https://f.fcdn.app/imgs/546227/www.zonatecno.com.uy/zoteuy/fc45/original/catalogo/103210_103210_4/1500-1500/notebook-dell-vostro-3501-i3-1005g1-256gb-8gb-15-6-win-10p-notebook-dell-vostro-3501-i3-1005g1-256gb-8gb-15-6-win-10p.jpg",type: "Laptop", brand: "Dell", model: "Vostro 3501", price: 568},
    {id: 19, img: "https://f.fcdn.app/imgs/771193/www.covercompany.com.uy/coveuy/0d48/original/catalogo/2-3815_10298_2/1500-1500/notebook-lenovo-ideapad-3-15-6-512gb-ssd-8gb-ram-intel-i3-12va-gen-abyss-blue.jpg",type: "Laptop", brand: "Lenovo", model: "typeealPad", price: 299},
    {id: 20, img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5579/5579225cv13d.jpg",type: "Laptop", brand: "Lenovo", model: "N23 Celeron", price: 210},
    {id: 21, img: "https://f.fcdn.app/imgs/cfbcc9/amvstore.com.uy/amvsuy/8ef0/original/catalogo/2416_2416_1/2000-2000/apple-airpods-max-plateado-mgyj3am-apple-airpods-max-plateado-mgyj3am.jpg",type: "Music", brand: "Apple", model: "AirPods Max", price: 815},
    {id: 23, img: "https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/0/0/000235790_wh-h900n-nm_e_1.jpg",type: "Music", brand: "Sony", model: "WH-H900N", price: 476},
    {id: 24, img: "https://www.sony.com.sv/image/dd18cf93606d238305a733d336c45537?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320",type: "Music", brand: "Sony", model: "WH-XB910N", price: 239},
    {id: 26, img: "https://www.infinit.com.uy/imgs/productos/productos35_16454.jpg",type: "Music", brand: "JBL", model: "Tune 500", price: 33},
    {id: 22, img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000",type: "Music", brand: "Apple", model: "AirPods 3ª Gen", price: 339},
    {id: 25, img: "https://unitytech.uy/wp-content/uploads/2022/03/Auriculares-JBL-TUNE-115TWS-Negro-1.jpg",type: "Music", brand: "JBL", model: "Tune 115TWS", price: 89},
];

// https://f.fcdn.app/imgs/ff0128/www.covercompany.com.uy/coveuy/7b15/original/catalogo/2-3386_9569_1/2000-2000/iphone-14-128gb-6gb-ram-5g-6-1-chip-a15-bionic-oled-retina-xdr-violeta.jpg
// https://f.fcdn.app/imgs/f7809c/www.zonatecno.com.uy/zoteuy/f594/original/catalogo/102705_102705_1/2000-2000/celular-apple-iphone-14-pro-max-256gb-6gb-deep-purple-celular-apple-iphone-14-pro-max-256gb-6gb-deep-purple.jpg
// https://f.fcdn.app/imgs/70e3aa/stienda.uy/sam/9eaa/original/catalogo/S2312888060947455801/1920-1200/samsung-galaxy-s23-128gb-5g-light-pink.jpg
// https://f.fcdn.app/imgs/3f7de9/stienda.uy/sam/83d2/original/catalogo/SM-A145RZKVEUB88060948554321/800_800/samsung-galaxy-a14-lte-128-gb-green.jpg
// https://mobilestore.com.uy/site/wp-content/uploads/2023/04/ZDAxZjVhM2_559-484x484.png
// https://cdn.dxomark.com/wp-content/uploads/medias/post-130310/Xiaomi-12T_featured-image-packshot-review.jpg
// https://f.fcdn.app/imgs/4ee267/artcomputer.com.uy/artcuy/bb95/original/catalogo/AW845SG_AW845SG_1/2000-2000/apple-watch-series-8-45mm-midnight-apple-watch-series-8-45mm-midnight.jpg
// https://m.media-amazon.com/images/I/71-bUn+jA1L.jpg
// https://cdn.shopify.com/s/files/1/0271/8302/2166/products/GT3-Runner-Black-Left.jpg?v=1681265050
// https://tatauy.vtexassets.com/arquivos/ids/284249-800-800?v=637789790016800000&width=800&height=800&aspect=true
// https://cdn.awsli.com.br/1718/1718332/produto/175646085/07-thawmb.jpg
// https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00071171954889l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF
// https://m.media-amazon.com/images/I/51ojzJk77qL.jpg
// https://m.media-amazon.com/images/I/71UiJ0O6vTL.jpg
// https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481
// https://f.fcdn.app/imgs/5a923c/www.covercompany.com.uy/coveuy/6cda/original/catalogo/2-3918_10531_2/1500-1500/apple-macbook-air-m2-13-6-512gb-ssd-8gb-ram-2022-espanol-starlight.jpg
// https://unitytech.uy/wp-content/uploads/2021/11/Notebook-Asus-Laptop-X515ea-bq967t-Core-i3-Gen-11-4gb-SSD-128-Gb-15.6-FHD-W10-2.jpg
// https://f.fcdn.app/imgs/546227/www.zonatecno.com.uy/zoteuy/fc45/original/catalogo/103210_103210_4/1500-1500/notebook-dell-vostro-3501-i3-1005g1-256gb-8gb-15-6-win-10p-notebook-dell-vostro-3501-i3-1005g1-256gb-8gb-15-6-win-10p.jpg
// https://f.fcdn.app/imgs/771193/www.covercompany.com.uy/coveuy/0d48/original/catalogo/2-3815_10298_2/1500-1500/notebook-lenovo-ideapad-3-15-6-512gb-ssd-8gb-ram-intel-i3-12va-gen-abyss-blue.jpg
// https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5579/5579225cv13d.jpg
// https://f.fcdn.app/imgs/cfbcc9/amvstore.com.uy/amvsuy/8ef0/original/catalogo/2416_2416_1/2000-2000/apple-airpods-max-plateado-mgyj3am-apple-airpods-max-plateado-mgyj3am.jpg
// https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000
// https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/0/0/000235790_wh-h900n-nm_e_1.jpg
// https://www.sony.com.sv/image/dd18cf93606d238305a733d336c45537?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320
// https://unitytech.uy/wp-content/uploads/2022/03/Auriculares-JBL-TUNE-115TWS-Negro-1.jpg
// https://www.infinit.com.uy/imgs/productos/productos35_16454.jpg
