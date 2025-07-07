// Welcome message (JS)
document.getElementById("welcomeMessage").innerText = "Welcome to Armin's Burger – Where Every Bite is Happiness!";

// Custom input function
function showMenu() {
  const item = document.getElementById("favMenu").value;
  const output = document.getElementById("menuOutput");
  if (item.trim() === "") {
    output.innerText = "Please enter your favorite item!";
  } else {
    output.innerText = `Awesome! We'll make sure to keep more ${item} ready for you! 🍔`;
  }
}