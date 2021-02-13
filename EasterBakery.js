function easterBakery(input){

    let priceFlourKg = Number(input[0]);
    let kgFlour = Number(input[1]);
    let kgSugar = Number(input[2]);
    let eggShells = Number(input[3]);
    let packageMay = Number(input[4]);

    let sugar = 0.75;
    let egg = 1.1;
    let may = 0.2;

    let priceSugarKg = priceFlourKg * sugar;
    let priceEggShells = priceFlourKg * egg;
    let priceMaya = priceSugarKg * may;
    let sumFlour = priceFlourKg * kgFlour;
    let sumSugar = priceSugarKg * kgSugar;
    let sumEgg = priceEggShells * eggShells;
    let sumMay = priceMaya * packageMay;
    let totalSum = (sumFlour + sumSugar + sumEgg + sumMay).toFixed(2);

    console.log(totalSum);

}
easterBakery(["50", "10", "3.5", "6", "1"]); 
easterBakery(["63.44", "3.57", "6.35", "8", "2"]); 
