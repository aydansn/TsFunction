//? Objects as parameters:
type PersonType = {
  ad: string;
  soyad: string;
  age?: number;
  birtYear?: number;
};

const person: PersonType = {
  ad: "Aydan",
  soyad: "Nurieva",
  age: 20,
};

const createSentenceAboutPerson = (sexs: PersonType) => {
  console.log(`${sexs.ad} adi, ${sexs.soyad} soyadi, ${sexs.age} yashi`);
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

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
  name?: string;
  price: number;
};

const phonos: Product = {
  name: "Iphone15",
  price: 7800,
};
const fruits: Product = {
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

const getTotal = (products: Product[]): number => {
  return products.reduce((cem, product) => cem + product.price, 0);
};

const products: Product[] = [
  { name: "Mehsul 1", price: 10.99 },
  { name: "Mehsul 2", price: 15.49 },
  { name: "Mehsul 3", price: 8.99 },
];

const totalPrice = getTotal(products);
console.log(totalPrice);

//function yaz, stringlerden ibaret arrayi parametr olaraq qebul et. funtion icinde, qebul etdiyi arrayi map-le.

const arr = [4, 5, 6, 7, 8];

const sum = (arr: number[]): number[] => {
  const newArr = arr.map((x) => {
    return x * 2;
  });
  return newArr;
};
sum(arr);

interface names {
  name: string;
  age: number;
}

const friends: names[] = [
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

const showNames = (arr: names[]): void => {
  arr.map((obj: names) => {
    console.log(obj.name, obj.age);
  });
};

showNames(friends);

const upperCase = (yazi: string): string => {
  return yazi.toUpperCase();
};
console.log(upperCase("Aydan"));

const hasiliTap = (reqem: number, multiplaer: number): number => {
  return reqem * multiplaer;
};
console.log(hasiliTap(7, 4));

const yoxlaTap = (ad1: string, ad2: string): boolean => {
  if (ad1 === ad2) {
    return true;
  } else {
    return false;
  }
};
console.log(yoxlaTap("Ay", "Ay"));
console.log(yoxlaTap("Aydan", "Ay"));

// ### Başlanğıc Səviyyə
// 1. Funksiya yaradın və konsola "Salam Dünya" yazdırın

const salamDunya = (): void => {
  console.log("Salam Dünya");
};

salamDunya();

//2. Bir ədədin kvadratını qaytaran funksiya yazın.

const kvadratiTap = (kvad: number): number => {
  return kvad * 2;
};
console.log(kvadratiTap(5));

//3. Bir sətirin uzunluğunu qaytaran funksiya yazın.

const uzunluguTap = (uzun: string): number => {
  return uzun.length;
};

console.log(uzunluguTap("Aydan"));
console.log(uzunluguTap("Azerbaycan"));
console.log(uzunluguTap("EkometrikaDersindeEhtimal"));

// 4.  İki ədədin cəmini hesablayan funksiya yaradın.

const cemiTap = (top1: number, top2: number): number => {
  return top1 + top2;
};
console.log(cemiTap(5, 7));
console.log(cemiTap(94, 7));
console.log(cemiTap(5, 70));
console.log(cemiTap(47, 7));

//5. Bir sətirin böyük hərflərə çevrilməsi üçün funksiya yazın.

const bigHerf = (setir: string): string => {
  return setir.toUpperCase();
};
console.log(bigHerf("Aydan"));
console.log(bigHerf("ansjwiwhdka"));

//6. Bir ədədin tək və ya cüt olduğunu yoxlayan funksiya yaradın

const yoxlaTekCut = (eded: number): string => {
  if (eded % 2 === 0) {
    return "eded cutdur";
  } else {
    return "eded tekdir";
  }
};
console.log(yoxlaTekCut(6));
console.log(yoxlaTekCut(5));

//7. Bir massivin uzunluğunu qaytaran funksiya yazın.

const uzunluqQaytar = (adlar: unknown[]): number => {
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

const reqemYoxla = (eded: number): string => {
  if (eded % 2 === 0) {
    return "cutdur";
  } else if (eded % 2 === 1) {
    return "tekdir";
  } else {
    return "0-dir";
  }
};
console.log(reqemYoxla(8));
console.log(reqemYoxla(0));
console.log(reqemYoxla(89));

// 10. İki sətirin eyni olub-olmadığını yoxlayan funksiya yaradın.

const setiriYoxla = (setir1: string, setir2: string) => {
  if (setir1 === setir2) {
    return "beraberdir";
  } else {
    return "beraber deyil";
  }
};

console.log(setiriYoxla("Aydan", "Sel"));
console.log(setiriYoxla("Gul", "Gul"));

//11. Bir sətirin əksini qaytaran funksiya yazın.

const eksiniTap = (setir: string): string => {
  return setir.split("").reverse().join("");
};
console.log(eksiniTap("aydaN"));

//12. Massivin ən böyük elementini qaytaran funksiya yazın.

const enBigTap = (enBig: number[]): number => {
  return Math.max(...enBig);
};
console.log(
  enBigTap([4, 3, 5, 6, 7, 8, 2, 9, 6, 5, 43, 45, 67, 8998, 8292, 24, 3565])
);

// 13. Bir massivdəki bütün ədədlərin cəmini qaytaran funksiya yaradın.

const sumTap = (num: number[]): number => {
  return num.reduce((cem, eded) => cem + eded, 0);
};
console.log(sumTap([1, 2, 3, 5]));

// 14. Bir sətirdəki saitlərin sayını qaytaran funksiya yazın.

// const saitler = "aeiouAEIOU";
// const saitleriTap = (sait:string) : number => {
//   return sait.saitler("");
// }

// 15. Bir massivdə müəyyən bir ədədin olub-olmadığını yoxlayan funksiya  yaradın.

const ededYoxla = (array: number[], eded: number): boolean => {
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

const bosgluq = (setr: string): string => {
  return setr.replace(/\s+/g, "");
};
console.log(bosgluq("Aydan sj ka sjjs skao"));

//19. Bir massivdəki ən kiçik elementin indeksini qaytaran funksiya yaradın.

const enKicik = (eded: number[]): number => {
  return Math.min(...eded);
};

console.log(enKicik([2, 3, 4, 5, 6]));
console.log(enKicik([0, 2, 3, 4, 5, 6]));
console.log(enKicik([-3, 2, 3, 4, 5, 6]));

//20. Bir sətirdəki sözlərin sayını qaytaran funksiya yazın.

const sozQaytar = (soz: string): any => {
  const sozler = soz.trim().split(/\s+/);
  return sozler;
  // return soz.length;
};
console.log(sozQaytar("aydan ajsaksjs"));
console.log(sozQaytar("zarina taninmish bir blogerdir ajsaksjs"));

// 23. Verilmiş ədədlərin əksini qaytaran funksiya yazın.

const eksleriniTap = (ededler: number[]): unknown => {
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

const ikiCem = (arr1: number[], arr2: number[]): number[] => {
  return arr1.concat(arr2);
};

console.log(ikiCem([1, 2, 3, 4], [5, 6, 7, 8, 9]));

//26. Bir obyektin açarlarını qaytaran funksiya yazın.

const yeniObj: unknown = {
  ad: "Aydan",
  age: 34,
  surname: "Nur",
  job: "Front",
  date: 2004,
};

const yeniObjYarat = (yeniObj: any): any => {
  return Object.keys(yeniObj);
};
console.log(yeniObjYarat(yeniObj));

//27. Verilmiş ədədin faktorialını hesablayan funksiya yaradın.

const faktorialiniTap = (faktorial: number): number => {
  return faktorial * (faktorial - 1);
};

console.log(faktorialiniTap(5));
console.log(faktorialiniTap(3));
console.log(faktorialiniTap(2));
console.log(faktorialiniTap(9));
console.log(faktorialiniTap(7));
console.log(faktorialiniTap(4));

//28. Bir sətirdəki hərf sırasını tərsinə çevirən funksiya yazın.

const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};
const input = "salam dünya";
const result = reverseString(input);
console.log(result);

const tersineCevir = (setir: string): string => {
  return setir.split("").reverse().join("");
};

console.log(tersineCevir("Aydanda front-end developerdir"));

//29. Bir massivdəki bütün ədədlərin kvadratını qaytaran funksiya yaradın.

const kvadratiniTap = (reqem: number[]): number[] => {
  return reqem.map((num) => num * num);
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

let obyekt: { [key: string]: string } = {
  ad: "aydan",
  soyad: "Nur",
};

console.log((obyekt["key"] = "value"));

//2. Verilmiş bir obyektin müəyyən bir açarını qaytaran funksiya yazın.
const getValueByKey = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const exampleObject = { name: "Alice", age: 25, city: "Baku" };
const value = getValueByKey(exampleObject, "age"); // 25

console.log(value);
// 3. Verilmiş bir obyektin müəyyən bir açarını silən funksiya yazın.

let obj2: any = {
  ad: "Nur",
  soyad: "bekirova",
  age: 45,
};

const deleteEle = (obj2: any): unknown => {
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

function keyTeyin(obj: any, keys: any): boolean {
  return obj.hasOwnProperty(keys);
}

const myObject = {
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
