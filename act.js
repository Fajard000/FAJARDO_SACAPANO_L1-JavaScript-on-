// Prompt the user to enter their role 
let role = prompt("Enter your role(choose from 1-4) 1)Department Head  2)Faculty  3)Student Officer 4)Student):");


// allow user to enter their role and name
if (role === "1") {
  let role="Department Head"
  let name = prompt("Enter your name:");
    console.log("Role" +": "+ role +" "+ "Name: " + name);
} else if (role === "2") {
  let role="Faculty"
  let name = prompt("Enter your name:");
    console.log("Role" +": "+ role +" "+ "Name: " + name);
} else if (role === "3") {
    let role="Student Officer"
    let name = prompt("Enter your name:");
      console.log("Role" +": "+ role +" "+ "Name: " + name);
} else if (role === "4") {
    let role="Student"
    let name = prompt("Enter your name:");
      console.log("Role" +": "+ role +" "+ "Name: " + name);
} else {
    console.error("Unknown role! Access denied.");
}

// Prompt the user to enter their password 
let password = prompt("Enter your password:");

// Check password validity based on role
//using switch case
switch (role) {
    case "1":
        if (password === "SiEsD3ptH34d") {
            console.log("Password is valid.");
        } else {
            console.error("Incorrect password!");
        }
        break;
    case "2":
        if (password === "SiEsF4cu1ty") {
            console.log("Password is valid.");
        } else {
            console.error("Incorrect password!");
        }
        break;
    case "3":
        if (password === "#CCSOAko") {
            console.log("Password is valid.");
        } else {
            console.error("Incorrect password!");
        }
        break;
    case "4":
        if (password === "3SapatNa!") {
            console.log("Password is valid.");
        } else {
            console.error("Incorrect password!");
        }
        break;
    default:
        console.error("No password validation performed for unknown role.");
}
