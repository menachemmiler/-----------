


//פונקציה שמקבלת מערך של מספרים ומחזירה את המערך בסדר עולה, עם המספרים הזוגיים בלבד.
const filterAndSortEvenNumbers = (arry) => {
    return arry.filter((x) => {return x % 2 == 0}).sort((a, b) => a-b);
}

const myArry = [1, 5, 3, 7, 2, 4, 8, 2, 10];

// console.log(filterAndSortEvenNumbers(myArry));

//פונקציה שמקבלת מערך של מספרים ומחזירה מערך חדש ללא מספרים כפולים.
const filterDoubleNumbers = (arryNumbers) => {
    const newArr = [];
    for(const i of arryNumbers){
        if(!newArr.includes(i)) newArr.push(i)
    }
    return newArr;
}
// console.log(filterDoubleNumbers(myArry));


//פונקציה שמקבלת מחרוזת ומחזירה מחרוזת שבה כל המילים מתחילות באות גדולה, פרט למילים שמסתיימות בנקודה
const getStringWithUpercase = (string) => {
    return string.split(" ").map(a => !(a[a.length - 1] == ".") ?  a[0].toUpperCase() + a.slice(1) : a);
} 
const myStr = "schcs sdhjcbdsh sdhcv. sdcbd sdcds.";
console.log(getStringWithUpercase(myStr))


