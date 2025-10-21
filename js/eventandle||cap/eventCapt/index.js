// const child = document.getElementById("child");
// child.addEventListener('click',()=>{
//     child.style.color="white";
//     child.textContent="I am clicked";
// })




// const parent = document.getElementById("parent");
// parent.addEventListener('click',()=>{
//     console.log(parent.children);
    
// })

// for(let child of parent.children){
//     console.log(child);

//     child.addEventListener('click',()=>{
//         child.textContent = " I am click";
//     })
    
// }


// most

const grandoparent = document.getElementById("grandparent");
grandoparent.addEventListener('click',(e)=>{
    console.log(e);
    
    console.log("Grandparent is clicked");
    
})


const parent= document.getElementById("parent");
parent.addEventListener('click',()=>{
    console.log("parent is clicked");
    
})

constchild= document.getElementById("child");
child.addEventListener('click',()=>{
    console.log("child is clicked");
    
})