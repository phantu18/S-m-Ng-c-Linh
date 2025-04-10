import React from "react";

const images = [
  {
    url: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/486957452_122111919272799066_2528188953082252380_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFNZ1BdO3P_wE79sFZ-2ZX_WErvXKMUYzBYSu9coxRjMLVLWkA-v7v2aqrPIcHPTqadQPOhvtGe18WStEXas1g7&_nc_ohc=4QClCh-NATMQ7kNvwE2PmZ0&_nc_oc=Adl5q7whpDW_UsJJ9Xm_ZmIwKc2rCqnfSCUwh2_0gNHRhVHvv-69Pc7Ep9OcrGT8vs-H5c0kRQvuBA6W8HZHU_Oc&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=rIne5ZY6d0RfOcwgkDHnCg&oh=00_AfEEmmgO1JK78xp-685-OdM8Tak_rmnvQc3VrKmUiOFm3g&oe=67FCF5C4",
    alt: "1",
  },
  {
    url: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/486795574_122111920154799066_258221945667113085_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGl0xQRKGwgeYxgXtcb3mAv0rzmQYyd7TrSvOZBjJ3tOlf3jXM_ylkXE-VhdSOd-sbLneqIMHR95Ox8bMjM17Cc&_nc_ohc=Lf9D6UiEZJ8Q7kNvwGSqym1&_nc_oc=AdmNfbPxtt9aqgeC0c8xqPL_S1dL4vEu6zLmEDSbkCM68gHB1BUNDALBGnMARusC_bUPfwAgy9BhCCTD45v6-yQ_&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=0mA3_uE7F97dQjRnJuVMVg&oh=00_AfGCGjPSG8LvR_MTZcaVetOBVJfLvfxKgCslO2LRgrye4g&oe=67FD2745",
    alt: "2",
  },
  {
    url: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/485693985_122109927236799066_1294851586016585710_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFVtudnE8LotE7Pln_7UHXYCnwvqLU3kfkKfC-otTeR-Y9On4Jp8wGdxenAXRI5YzjO8b0jT29TRyNvLlyEhN00&_nc_ohc=bqlViXim4WwQ7kNvwEQRTTO&_nc_oc=AdlDvwCI1uwMatEsOZLNEc7GyUjmdROCiJDjQ5h3YbGomAwpdmXh-wkSnSj6SJHg_Lw9dUS0J3Qs11-vBCUh-hpQ&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=72qR9ATRV5wfeTi9lZqogg&oh=00_AfFwJQSvwJ1UPIqKgamUkSPoYm0J78jCDaVNZBSLh2od2w&oe=67FD0FDA",
    alt: "3",
  },
  {
    url: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/485693512_122109578978799066_981922405166830781_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGFej6cv-_-oAf9PY9KiWKlwRVP-u_SEYDBFU_679IRgOLuntsaR9CrkoH0D7dhpb6bdJmE1wtxCuNuaaC0aVHC&_nc_ohc=szb3kzXav-QQ7kNvwGxMx3b&_nc_oc=Adnl-g3unIet-iTin1UN6RFCX90vfv4SjR1nPHkvjQNGIiHRowGW0SKIwNEkI210xuysm1LNLmgspqHrkMvcH7v8&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=12PUyRl2e34xrh7YceTxYw&oh=00_AfHjDIvH8XT48rLpGKGas9dG6-rZraSvS02jNIFlVhtUAA&oe=67FCF822",
    alt: "4",
  },
  {
    url: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/484149248_122105200094799066_5252047447964573814_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEYUcnT1VqSFSMnClCy1hBAOLivDpKzIwM4uK8OkrMjA8VIgYTtR8ZNVWun-PQYvEc9cN2P-MslVfgGjbvVRR-N&_nc_ohc=kg83aOSYR5AQ7kNvwFnrLAp&_nc_oc=AdnnaH_DdBVBOyzBirymF4Hpf3UVWmmJ1JBuLlwOzHT7pElFjheDGhCnRo_O5D_ttHWbNQhhIvXFozIHomAUPTjS&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=yR2yl1LmMlfZkp-SWZvl9w&oh=00_AfEQOCCEHgCvuNseI2BFRTYxL8tVQw5w9ZA3MGtbwHtEdw&oe=67FD00DA",
    alt: "5",
  },
  {
    url: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/486847351_122112246416799066_5172216336251176922_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEaw5-1hN1RhQ-54BSbeMQdcs0jLgG292xyzSMuAbb3bHBOVaGqB3xWbJZ1WXz8bzuaY15hMo8evyWkEsoPPFKN&_nc_ohc=9JLxjNa_NegQ7kNvwGnuuPR&_nc_oc=AdksVRbwEO0eXC_15-GlMVMsvp5rXBAug6GAXWmaEZ3ti7PRN7VspwGrPmH8hD-E6CnnQpeUyuGcOOGeSN_o4chh&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=E4bNmDWAhwm9R5SI-AaXiQ&oh=00_AfHy_4uu7MJMMd7bEt5K3x6niVruAZw14s8QxmIXYMJJhQ&oe=67FD0937",
    alt: "6",
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
