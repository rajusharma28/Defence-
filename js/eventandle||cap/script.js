
// EX1

// function handleclick(){
//     const element = document.getElementById("first");
//     element.textContent ="jay shree ram";
// }


// Ex2

const element = document.getElementById("first");
// element.onclick= function handleclick(){
//     element.textContent = "world";
// }

// best

element.addEventListener('mouseenter',()=>{
    element.textContent = "raju";

})

element.addEventListener('mouseenter',()=>{
    element.style.backgroundColor="red";
})

