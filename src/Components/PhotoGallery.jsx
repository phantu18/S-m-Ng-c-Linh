import React from "react";

const images = [
  {
    url: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/486795574_122111920154799066_258221945667113085_n.jpg?stp=cp6_dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGl0xQRKGwgeYxgXtcb3mAv0rzmQYyd7TrSvOZBjJ3tOlf3jXM_ylkXE-VhdSOd-sbLneqIMHR95Ox8bMjM17Cc&_nc_ohc=REgcIlqRHcsQ7kNvgHECNpY&_nc_oc=AdmtauM2qErcnTEhV4JCG8mqKUQ38B81Pds64LTMjGRVwSHAZc_fKj83WjVrRleeu-BxY0UA9YShzw2elHHKWR70&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=OgUmhIPSsqZd3dHrQiAwmQ&oh=00_AYHDxHoOJLRqGNux0TFGp7LZCik96S-R8LvbdOBes9MDSA&oe=67ED8D85",
    alt: "Product 1",
  },
  {
    url: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/486957452_122111919272799066_2528188953082252380_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFNZ1BdO3P_wE79sFZ-2ZX_WErvXKMUYzBYSu9coxRjMLVLWkA-v7v2aqrPIcHPTqadQPOhvtGe18WStEXas1g7&_nc_ohc=lONI04SaVYcQ7kNvgG4FYa4&_nc_oc=AdnTnEv0wEewCSd6Tq7En57kyhrQrE9czb89yfFVVrUESrUTuT5XIrKDU5y72WvW1ZI5Hy1lXNT7-bUHnjZLdoRv&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=OgUmhIPSsqZd3dHrQiAwmQ&oh=00_AYEJqoedz0zURQTdUWccrjZ8qrS1NYNyAIn4MGC8SWjf1w&oe=67ED9444",
    alt: "Product 2",
  },
  {
    url: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/486702192_122111199764799066_6424068935225494868_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGJz0jY2gK3JQ09L3os5-SKg1enYzHEC2ODV6djMcQLY62_xFY75Hpfp0N0PdFGP92GLlTI6n3K9t_zzWhsg9NB&_nc_ohc=qkGL9NJeIJoQ7kNvgFC3m61&_nc_oc=AdmLqVn5yzHcZgTfwyTM8-848D_9vCXdxNDVTQckwqGLxT3Qyzx6aihDb5WhmCPRrN6bgzuryGq1UUUWgHj6l7v4&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=cuvwEyJT800pzN_8nXkh7A&oh=00_AYH3rRgSm0XkcFYiSPDn1fOvR89Gi6f2fkUmH8iE2TkMFA&oe=67ED8EE4",
    alt: "Product 3",
  },
  {
    url: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/485693985_122109927236799066_1294851586016585710_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFVtudnE8LotE7Pln_7UHXYCnwvqLU3kfkKfC-otTeR-Y9On4Jp8wGdxenAXRI5YzjO8b0jT29TRyNvLlyEhN00&_nc_ohc=luye1__lixoQ7kNvgF7bVgp&_nc_oc=AdmVa_rNIik0mJhQ08wtsiTuGmdi6jlNsjzNHz5ApAIkcBdQG1UBMo_1OFh55Lent6DbyNnn_w4Hd8i8iuUadghy&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=o1yd-OfI025FALgVdKXhMg&oh=00_AYEeYusRGg0vxr4c2mhJfT8KO2szSjFINsG1NriY3xwy7A&oe=67EDAE5A",
    alt: "Product 4",
  },
  {
    url: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/484149248_122105200094799066_5252047447964573814_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEYUcnT1VqSFSMnClCy1hBAOLivDpKzIwM4uK8OkrMjA8VIgYTtR8ZNVWun-PQYvEc9cN2P-MslVfgGjbvVRR-N&_nc_ohc=0Ql8Ah-ySrMQ7kNvgEkWKw2&_nc_oc=AdlGv_7estDJhz8MqqSSsH62-sFiohKD-er1X13BKs7bkyirX8j4bddWgELO8jlWJXjPJDGdGd1K8KcHCT4heLN1&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=t1G0Vrsp_6DhGIYkqflbZg&oh=00_AYHwqXXkK1RR1XtlDBYKLMq-ru9XYOWrqueFSD4AgGfmxQ&oe=67ED9F5A",
    alt: "Product 5",
  },
  {
    url: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/486847351_122112246416799066_5172216336251176922_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEaw5-1hN1RhQ-54BSbeMQdcs0jLgG292xyzSMuAbb3bHBOVaGqB3xWbJZ1WXz8bzuaY15hMo8evyWkEsoPPFKN&_nc_ohc=6U__jfpeK7gQ7kNvgEYURU5&_nc_oc=Adnn8emK3ir_jEbbcuE4CZ__fbB3FOxHgNyZ1Sqi_jJO7NLWydcZxguVlgK58lkst7CLpqNiG5j7zUdyNdhBwEkz&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=1QscHyjkG4-CrEWzAdwrCg&oh=00_AYGLc1NbDGO6OUWAVfY5HCRXOkaG_JptAEJWmFK10qWkMw&oe=67EDA7B7",
    alt: "Product 6",
  },
];

export default function PhotoGallery() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
