const personInfo = {
    name:"skullKim",
    age:21,
    gender:"Male",
    favMoviews: ["dead pool", "Kings man"],
    favFood:[
        {
            name: "KimChi",
            fatty: false
        },
        {
            name: "cheese burger",
            fatty: true
        }
    ]
}
console.log(personInfo);
console.log(personInfo.age);
personInfo.name = "kyk";
console.log(personInfo.name);
console.log(personInfo.favMoviews);
console.log(personInfo.favMoviews[0]);
console.log(personInfo.favFood[0]);
console.log(personInfo.favFood[1].name);