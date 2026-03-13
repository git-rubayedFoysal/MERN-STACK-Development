const userMap = new Map([
    ["name", "Alice"],
    [true, "is verified"],
    [100, "points"]
]);

userMap.set("age", 23)

// for (let [key, value] of userMap) {
//     console.log(`key : ${key}, value: ${value}`);

// }


userMap.forEach((value, key) => console.log(`${key} : ${value}`))
