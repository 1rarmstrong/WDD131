// Step 1 - creating and adding a paragraph - done for me

const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

// Step 2 - creating and adding an image - done for me

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);

// Step 3 - creating and adding a div - done for me.

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// Step 4 - creating and adding section, section's h2, section's p - on my own.

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>I did it</h2><p>Here's my own paragraph!</p>";
document.body.appendChild(newSection);
