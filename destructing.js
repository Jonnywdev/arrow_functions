// Destructing Arrays

let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

let [john, mary, joe] = ages;

console.log(john, mary, joe);

// Destructing Objects
let jobs = {
    mike: "designer",
    gill: "developer",
    paula: "accountant",
};

let{ mike, gill, paula } = jobs;

console.log(mike, gill, paula);

// Destructing Subsets

let languages = ["english", "french", "spanish", "german", "japanese"];

let [johnNative, johnSecondary] = languages;

console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondry] = languages;

console.log(maryNative, marySecondry);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};

let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);



// Using Rest Parameter syntax

let fruits = ["apple", "pineapple", "orange", "bananna", "peach", "raspberry"];
let [favourite, secondFavourite, ...others] = fruits;

console.log(favourite);
console.log(secondFavourite);
console.log(others);

let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "veg",
    andrea: "streak"
};

let { brian, anna, ...rest} = favouriteFoods;

console.log(brian);
console.log(anna);
console.log(rest);