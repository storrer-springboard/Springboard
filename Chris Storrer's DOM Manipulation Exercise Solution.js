// Solutions to the 4.2.17 DOM Manipulation Exercises

// 1. Select the section with an id of container without using querySelector.
document.getElementById("container");
// 2. Select the section with an id of container using querySelector.
document.querySelector("#container");
// 3. Select all of the list items with a class of “second”.
document.getElementsByClassName("second");
// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelectorAll("ol > li.third");
// 5. Give the section with an id of container the text “Hello!”.
document.getElementById("container").innerText = "Hello!";

// 6. Add the class main to the div with a class of footer.
const footer = document.querySelector(".footer");
footer.classList.add("main");

// 7. Remove the class main on the div with a class of footer.
footer.classList.remove("main");
// 8. Create a new li element.
const four = document.createElement("li");
// 9. Give the li the text “four”.
four.innerText = "four";

// 10. Append the li to the ul element.
document.querySelector("ul").append(four);

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
const ol = document.querySelectorAll("ol > li")

for(let listItem of ol){
listItem.style.backgroundColor = "green";
}

// 12. Remove the div with a class of footer
const footer = document.querySelector(".footer");
footer.remove();
