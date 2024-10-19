var person = {
    ad: "Aydan",
    soyad: "Nurieva",
    age: 20,
};
var createSentenceAboutPerson = function (sexs) {
    console.log("".concat(sexs.ad, " adi, ").concat(sexs.soyad, " soyadi, ").concat(sexs.age, " yashi"));
};
createSentenceAboutPerson({
    ad: "Aydan",
    soyad: "Nuriyeva",
    age: 20,
});
createSentenceAboutPerson({
    ad: "Ido",
    soyad: "Aziyev",
});
var phonos = {
    name: "Iphone15",
    price: 7800,
};
var fruits = {
    name: "Apple",
    price: 20,
};
console.log(phonos);
console.log(phonos);
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var getTotal = function (products) {
    return products.reduce(function (cem, product) { return cem + product.price; }, 0);
};
var products = [
    { name: "Mehsul 1", price: 10.99 },
    { name: "Mehsul 2", price: 15.49 },
    { name: "Mehsul 3", price: 8.99 },
];
var totalPrice = getTotal(products);
console.log(totalPrice);
//function yaz, stringlerden ibaret arrayi parametr olaraq qebul et. funtion icinde, qebul etdiyi arrayi map-le.
var arr = [4, 5, 6, 7, 8];
var sum = function (arr) {
    var newArr = arr.map(function (x) {
        return x * 2;
    });
    return newArr;
};
sum(arr);
var friends = [
    {
        name: "Aydan",
        age: 22,
    },
    {
        name: "Fidan",
        age: 24,
    },
    {
        name: "Nergis",
        age: 53,
    },
    {
        name: "Selin",
        age: 12,
    },
];
var showNames = function (arr) {
    arr.map(function (obj) {
        console.log(obj.name, obj.age);
    });
};
showNames(friends);
var upperCase = function (yazi) {
    return yazi.toUpperCase();
};
console.log(upperCase("Aydan"));
var hasiliTap = function (reqem, multiplaer) {
    return reqem * multiplaer;
};
console.log(hasiliTap(7, 4));
var yoxlaTap = function (ad1, ad2) {
    if (ad1 === ad2) {
        return true;
    }
    else {
        return false;
    }
};
console.log(yoxlaTap("Ay", "Ay"));
console.log(yoxlaTap("Aydan", "Ay"));
// ### Başlanğıc Səviyyə
// 1. Funksiya yaradın və konsola "Salam Dünya" yazdırın
var salamDunya = function () {
    console.log("Salam Dünya");
};
salamDunya();
//2. Bir ədədin kvadratını qaytaran funksiya yazın.
var kvadratiTap = function (kvad) {
    return kvad * 2;
};
console.log(kvadratiTap(5));
//3. Bir sətirin uzunluğunu qaytaran funksiya yazın.
var uzunluguTap = function (uzun) {
    return uzun.length;
};
console.log(uzunluguTap("Aydan"));
console.log(uzunluguTap("Azerbaycan"));
console.log(uzunluguTap("EkometrikaDersindeEhtimal"));
// 4.  İki ədədin cəmini hesablayan funksiya yaradın.
var cemiTap = function (top1, top2) {
    return top1 + top2;
};
console.log(cemiTap(5, 7));
console.log(cemiTap(94, 7));
console.log(cemiTap(5, 70));
console.log(cemiTap(47, 7));
//5. Bir sətirin böyük hərflərə çevrilməsi üçün funksiya yazın.
var bigHerf = function (setir) {
    return setir.toUpperCase();
};
console.log(bigHerf("Aydan"));
console.log(bigHerf("ansjwiwhdka"));
//6. Bir ədədin tək və ya cüt olduğunu yoxlayan funksiya yaradın
var yoxlaTekCut = function (eded) {
    if (eded % 2 === 0) {
        return "eded cutdur";
    }
    else {
        return "eded tekdir";
    }
};
console.log(yoxlaTekCut(6));
console.log(yoxlaTekCut(5));
//7. Bir massivin uzunluğunu qaytaran funksiya yazın.
var uzunluqQaytar = function (adlar) {
    return adlar.length;
};
console.log(uzunluqQaytar(["Aydan", "Gulcan", "Selcan"]));
console.log(uzunluqQaytar([3, 4, 5, 6, "aydan"]));
console.log(uzunluqQaytar([true, "ay", 0, 87]));
//! 8. Verilmiş sətirdə müəyyən bir simvolun olub-olmadığını yoxlayan funksiya  yazın.
// const simvolVarMi = (satr: string, simvol: string): boolean => {
//   return satr.includes(simvol);
// };
// const satir = "Salam, dünya!";
// const simvol = "d";
// if (simvolVarMi(satir, simvol)) {
//   console.log(`Sətirdə '${simvol}' simvolu var.`);
// } else {
//   console.log(`Sətirdə '${simvol}' simvolu yoxdur.`);
// }
// 9. Bir ədədin müsbət, mənfi və ya sıfır olduğunu yoxlayan funksiya yaradın.
var reqemYoxla = function (eded) {
    if (eded % 2 === 0) {
        return "cutdur";
    }
    else if (eded % 2 === 1) {
        return "tekdir";
    }
    else {
        return "0-dir";
    }
};
console.log(reqemYoxla(8));
console.log(reqemYoxla(0));
console.log(reqemYoxla(89));
// 10. İki sətirin eyni olub-olmadığını yoxlayan funksiya yaradın.
var setiriYoxla = function (setir1, setir2) {
    if (setir1 === setir2) {
        return "beraberdir";
    }
    else {
        return "beraber deyil";
    }
};
console.log(setiriYoxla("Aydan", "Sel"));
console.log(setiriYoxla("Gul", "Gul"));
//11. Bir sətirin əksini qaytaran funksiya yazın.
var eksiniTap = function (setir) {
    return setir.split("").reverse().join("");
};
console.log(eksiniTap("aydaN"));
//12. Massivin ən böyük elementini qaytaran funksiya yazın.
var enBigTap = function (enBig) {
    return Math.max.apply(Math, enBig);
};
console.log(enBigTap([4, 3, 5, 6, 7, 8, 2, 9, 6, 5, 43, 45, 67, 8998, 8292, 24, 3565]));
// 13. Bir massivdəki bütün ədədlərin cəmini qaytaran funksiya yaradın.
var sumTap = function (num) {
    return num.reduce(function (cem, eded) { return cem + eded; }, 0);
};
console.log(sumTap([1, 2, 3, 5]));
// 14. Bir sətirdəki saitlərin sayını qaytaran funksiya yazın.
// const saitler = "aeiouAEIOU";
// const saitleriTap = (sait:string) : number => {
//   return sait.saitler("");
// }
// 15. Bir massivdə müəyyən bir ədədin olub-olmadığını yoxlayan funksiya  yaradın.
var ededYoxla = function (array, eded) {
    return array.indexOf(eded) !== -1;
};
console.log(ededYoxla([3, 4, 5, 6, 7], 5));
console.log(ededYoxla([3, 0, 5, 6, 7], 1));
//16. Bir massivdə təkrarlanan elementləri tapıb qaytaran funksiya yazın.
//17.Tarixi gün/ay/il formatında qaytaran funksiya yaradın.
// const tarixTap = (taxir :number) :number => {
//   return tarix.getDate();
// }
//18. Bir sətirdəki boşluqları çıxaran funksiya yazın.
var bosgluq = function (setr) {
    return setr.replace(/\s+/g, "");
};
console.log(bosgluq("Aydan sj ka sjjs skao"));
//19. Bir massivdəki ən kiçik elementin indeksini qaytaran funksiya yaradın.
var enKicik = function (eded) {
    return Math.min.apply(Math, eded);
};
console.log(enKicik([2, 3, 4, 5, 6]));
console.log(enKicik([0, 2, 3, 4, 5, 6]));
console.log(enKicik([-3, 2, 3, 4, 5, 6]));
//20. Bir sətirdəki sözlərin sayını qaytaran funksiya yazın.
var sozQaytar = function (soz) {
    var sozler = soz.trim().split(/\s+/);
    return sozler;
    // return soz.length;
};
console.log(sozQaytar("aydan ajsaksjs"));
console.log(sozQaytar("zarina taninmish bir blogerdir ajsaksjs"));
// 23. Verilmiş ədədlərin əksini qaytaran funksiya yazın.
var eksleriniTap = function (ededler) {
    return ededler.reverse();
};
console.log(eksleriniTap([2, 3, 4, 5, 6]));
//24. Bir sətirdəki hər bir sözün baş hərfini böyük hərflə yazan funksiya yazın.
// const capitalizeFirstLetterOfEachWord = (str: string): string => {
//   return str
//       .split(' ')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
// };
// const input = "salam dünya, necəsən?";
// const result = capitalizeFirstLetterOfEachWord(input);
// console.log(result); // "Salam Dünya, Necəsən?"
//25. İki massivdəki ümumi elementləri qaytaran funksiya yaradın.
var ikiCem = function (arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(ikiCem([1, 2, 3, 4], [5, 6, 7, 8, 9]));
//26. Bir obyektin açarlarını qaytaran funksiya yazın.
var yeniObj = {
    ad: "Aydan",
    age: 34,
    surname: "Nur",
    job: "Front",
    date: 2004,
};
var yeniObjYarat = function (yeniObj) {
    return Object.keys(yeniObj);
};
console.log(yeniObjYarat(yeniObj));
//27. Verilmiş ədədin faktorialını hesablayan funksiya yaradın.
var faktorialiniTap = function (faktorial) {
    return faktorial * (faktorial - 1);
};
console.log(faktorialiniTap(5));
console.log(faktorialiniTap(3));
console.log(faktorialiniTap(2));
console.log(faktorialiniTap(9));
console.log(faktorialiniTap(7));
console.log(faktorialiniTap(4));
//28. Bir sətirdəki hərf sırasını tərsinə çevirən funksiya yazın.
var reverseString = function (str) {
    return str.split("").reverse().join("");
};
var input = "salam dünya";
var result = reverseString(input);
console.log(result);
var tersineCevir = function (setir) {
    return setir.split("").reverse().join("");
};
console.log(tersineCevir("Aydanda front-end developerdir"));
//29. Bir massivdəki bütün ədədlərin kvadratını qaytaran funksiya yaradın.
var kvadratiniTap = function (reqem) {
    return reqem.map(function (num) { return num * num; });
};
console.log(kvadratiniTap([5, 6, 7, 8, 9]));
// 30. Bir massivdəki bütün mənfi ədədləri çıxaran funksiya yaradın
// const menfiTap = (eded: number[]): string => {
//   if (eded < 0) {
//     return "menfidir";
//   } else {
//     return "musbetdir";
//   }
// };
// console.log(menfiTap([3, 4, 5, -3, -9, -8]));
// 1.Boş bir obyekt yaradın və bir açar/dəyər cütü əlavə edin.
var obyekt = {
    ad: "aydan",
    soyad: "Nur",
};
console.log((obyekt["key"] = "value"));
//2. Verilmiş bir obyektin müəyyən bir açarını qaytaran funksiya yazın.
var getValueByKey = function (obj, key) {
    return obj[key];
};
var exampleObject = { name: "Alice", age: 25, city: "Baku" };
var value = getValueByKey(exampleObject, "age"); // 25
console.log(value);
// 3. Verilmiş bir obyektin müəyyən bir açarını silən funksiya yazın.
var obj2 = {
    ad: "Nur",
    soyad: "bekirova",
    age: 45,
};
var deleteEle = function (obj2) {
    return delete obj2.key;
};
console.log(deleteEle(obj2));
// Obyektdəki bütün açarları qaytaran funksiya yazın.
// const nese: any = {
//   name: "Alice",
//   age: 25,
//   city: "Baku",
// };
// const objectYarat = (obj: string): unknown => {
//   return Object.keys(obj);
// };
// console.log(objectYarat(nese));
//. Obyektdəki bütün dəyərləri qaytaran funksiya yazın.
// interface deyer {
//   ad: string;
//   soyad: string;
//   age: number;
// }
// const values: deyer = {
//   ad: "Aydan",
//   soyad: "nur",
//   age: 12,
// };
// const yeniDeyer = (objes: deyer): unknown => {
//   return Object.values(objes);
// };
// console.log(yeniDeyer());
// Verilmiş bir açarın obyektdə olub-olmadığını yoxlayan funksiya yazın.
function keyTeyin(obj, keys) {
    return obj.hasOwnProperty(keys);
}
var myObject = {
    name: "Aydan",
    age: 30,
    city: "Canada",
};
console.log(keyTeyin(myObject, "city"));
console.log(keyTeyin(myObject, "country"));
//7. İki obyektin birləşdirilməsini həyata keçirən funksiya yazın.
// const object1: any = {
//   ad: "aydan",
//   soyad: "nur",
// };
// const objects2: any = {
//   age: 20,
//   color: "pink",
// };
// const objBirleshdir = (object1: any, objects2: any): any => {
//   return object1.concat(objects2);
// };
// objBirleshdir(object1, objects2);
//8. Obyektdəki bütün açar/dəyər cütlərini massiv şəklində qaytaran funksiya  yazın.
