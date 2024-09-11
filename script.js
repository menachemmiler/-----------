


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
    const newArr = string.split(" ").map(a => !(a[a.length - 1] == ".") ?  a[0].toUpperCase() + a.slice(1) : a);
    return newArr.join(" ")
} 
const myStr = "schcs sdhjcbdsh sdhcv. sdcbd sdcds.";
// console.log(getStringWithUpercase(myStr))


function MissionObg(text, id){
    this.text = text;
    this.id = id;
}

const saveTasks = (tasks) => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
}

const loadTasks = () => {
    const tryLoad = localStorage.getItem("Tasks");
    return tryLoad ? JSON.parse(tryLoad) : []
}

const addTask = (newTask) => {
    const tryLoad = localStorage.getItem("Tasks");
    const newArr = tryLoad ? JSON.parse(tryLoad) : [];
    newArr.push(newTask);
    localStorage.setItem("Tasks", JSON.stringify(newArr));
}

const removeTask = (id) => {
    const tryLoad = localStorage.getItem("Tasks");
    const newArr = tryLoad ? JSON.parse(tryLoad) : [];
    const arrToSave = newArr.filter((a) => (a.id != id)); 
    localStorage.setItem("Tasks", JSON.stringify(arrToSave));
}

// const myTasks = [new MissionObg("first", 1), new MissionObg("second", 2)]

// saveTasks(myTasks);
// console.log(loadTasks())

// addTask(new MissionObg("new task", 3));
// console.log(loadTasks())

// removeTask(2)
// console.log(loadTasks())




