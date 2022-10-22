// How it works
let val = true;
if (val) {
  console.log("run the code");
}

// Comparison about value
var hobby = "coding";
if (hobby == "coding") {
  console.log(`I love ${hobby}`);
}

// case study
// 1. If-Else
var shopOpen = "open";
if (shopOpen === "open") {
  console.log("I'll will buy tempe and egg");
} else {
  console.log("Shop closed!");
}

// 2. If-Else if-Else
var shopOpenn = "close";
var minuteRemainingToOpen = 5;
if (shopOpenn === "open") {
  console.log("I'll will buy tempe and egg");
} else if (minuteRemainingToOpen <= 5) {
  console.log("The mini market will open soon, I'll waiting");
} else {
  console.log("Shop closed!");
}

// 3. Nested If
var shopOpennn = "open";
var tempe = "soldout";
var egg = "soldout";
if (shopOpennn == "open") {
  console.log("I'll will buy tempe and egg");
  if (tempe == "soldout" || egg == "soldout") {
    console.log("my shopping is incomplete");
    if (tempe == "soldout") {
      console.log("tempe is empty");
    } else if (egg == "soldout") {
      console.log("egg is empty");
    }
  }
} else {
  console.log("The mini market is closed, I'm home again");
}

// 4. Switch Case
var buttonPushed = 1;
switch (buttonPushed) {
  case 1:
    console.log("matikan TV!");
    break;
  case 2:
    console.log("turunkan volume TV!");
    break;
  case 3:
    console.log("tingkatkan volume TV!");
    break;
  case 4:
    console.log("matikan suara TV!");
    break;

  default:
    console.log("Tidak terjadi apa-apa");
    break;
}

// 5. Ternary Operator
var age = 20;

age < 15 ? console.log("To Young") : console.log("Old Enough");
