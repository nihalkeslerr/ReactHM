import getData from "./index.js";


getData(1)
  .then((completeData) => console.log("Veriler Başarılı Bir Şekilde Çekildi: ", completeData))
    .catch((err) => console.log("Veri Çekiminde Hata Meydana Geldi: ", err));
  
