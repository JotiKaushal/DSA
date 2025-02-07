var convertToTitle = function(columnNUmber){
    let result = "";
    while(columnNUmber > 0){
        columnNUmber--;
        console.log(1,(columnNUmber%26));
        console.log(2,"A".charCodeAt(0));
        console.log(3,(columnNUmber%26)+"A".charCodeAt(0));
        console.log(4,String.fromCharCode((columnNUmber%26)+"A".charCodeAt(0)));
        
        result = String.fromCharCode((columnNUmber%26)+"A".charCodeAt(0)) + result;
        console.log(5,result);
        
        columnNUmber = Math.floor(columnNUmber/26);
        console.log(6,columnNUmber);
        
    }
    return result;
}

console.log(convertToTitle(701))


// The reason for doing columnNUmber-- in the given code is to adjust for zero-based indexing when converting a number to an Excel-style column title (like "A", "B", ..., "Z", "AA", etc.).

// Explanation:
// Excel columns are 1-based, meaning:

// Column 1 corresponds to "A",
// Column 2 corresponds to "B",
// ...,
// Column 26 corresponds to "Z",
// Column 27 corresponds to "AA", and so on.
// However, when using modulo (%) and division (/) operations, it's more convenient to work with zero-based indexing (where "A" would correspond to 0, "B" to 1, ..., "Z" to 25). Without this adjustment, calculations would be off by one.

// Why columnNUmber--?
// The decrement (columnNUmber--) shifts the range from 1-26 (1-based) to 0-25 (0-based).
// This makes it easier to calculate the correct character using String.fromCharCode(...).
// It ensures that the modulo operation (columnNUmber % 26) correctly maps:
// A → 0
// B → 1
// ...
// Z → 25
// AA → 26, and so on.
// Example: convertToTitle(701)
// 701 should correspond to "ZY":

// 701 - 1 = 700
// 700 % 26 = 24 → "Y" ("A".charCodeAt(0) + 24)
// 700 / 26 = 26
// 26 - 1 = 25
// 25 % 26 = 25 → "Z"
// Final result: "ZY"
// Thus, columnNUmber-- correctly shifts the indexing, ensuring the logic matches Excel's column naming system.