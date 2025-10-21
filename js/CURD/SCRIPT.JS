// // Create a new h2 element
// const newElement = document.createElement("h2");
// newElement.id = "second";
// newElement.textContent = "Strike is coming"; 
// newElement.style.color = "red";
// newElement.style.fontSize = "25px";
// newElement.setAttribute("hello", "ji");
// newElement.classList.add("holi");

// // Find element with ID "first" and insert newElement after it
// const element = document.getElementById("first");
// element.after(newElement);

// // Create a new h3 element
// const element3 = document.createElement("h3");
// element3.textContent = "Happy Diwali";
// element3.id = "third";

// // Insert element3 after newElement
// newElement.after(element3);

// // Show an alert with element3's tag name
// alert(element3.tagName);



// ---------------------- NOB--------------------------------------------------------------------------->


// // 1️⃣ Get the <ul> element
// const unorderlist = document.getElementById("listing");

// // 2️⃣ Create a new <li> element
// const addli = document.createElement("li");

// //  Add text content to the <li>
// addli.textContent = "milk";


// const addli2 = document.createElement("li");

// //  Add text content to the <li>
// addli2.textContent = "halwa";



// const addli3 = document.createElement("li");

// //  Add text content to the <li>
// addli3.textContent = "paneer";



// //  Append the <li> into the <ul>
// unorderlist.append(addli);
// unorderlist.append(addli2);
// unorderlist.prepend(addli3)



// ------------------------ PRO------------------------------------------------------
// const items = ["milk", "bread", "paneer","sugar"];
// const unorderlist = document.getElementById("listing");
// for(let element of items){
//     const list = document.createElement("li");
//     list.textContent=element;
//     unorderlist.append(list)
    
// }
    
// ------------------------------ ultrapro-------------------------------------

const items = ["milk", "bread", "paneer","sugar"];
const unorderlist = document.getElementById("listing");
const fragment = document.createDocumentFragment();
for(let element of items){
    const list = document.createElement("li");
    list.textContent=element;
    fragment.append(list);
    
}
unorderlist.append(fragment);

const s1 = document.getElementById("first");
s1.remove();
      