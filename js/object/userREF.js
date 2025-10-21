// const user ={
//     name:"raju",
//    age:23,
//     emailId:"rajusharma@gmail.com",
//     amount:2343
// }


// // refence dono ka ek hai
// const user2 =user;
// user2.age=90;
// console.log(user);


// // imp
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


// for(let keys in user){
//     console.log(keys);
    
// }


// for(let keys in user){
//     console.log(keys,user[keys]);   
    
// }


// ++++++++++++++++++++++++++++++++++++++
// const user ={
//     name:"raju",
//    age:23,
//     emailId:"rajusharma@gmail.com",
//     amount:2343
// }


// // const name =user.name;
// // const age = user.age;



// //obj ko destructing 
// const {name,age}= user;

// // arrays ka de 
// const arr =[10,20,30,45,78];
// const [first,second]=arr;
// console.log(first,second);


// console.log(name,age);

// ==========================================
const user ={
    name:"raju",
   age:23,
    emailId:"rajusharma@gmail.com",
    amount:2343
}

const temnparr =Object.keys(user);
console.log(temnparr);

// for(let keys of temnparr){
//     console.log(keys);
    
// }

// for(let values of Object.values(user)){
//     console.log(values);
    
// }


for(let values of Object.entries(user)){
    console.log(values);
    
}