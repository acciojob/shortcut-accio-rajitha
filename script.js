function shortcut(s1, s2) {
  // your code here
	if (s1 === "" || s2 === "") {
    return "";
  } else {
    // Get the initial letters of the strings
    let initial1 = s1[0];
    let initial2 = s2[0];
    
    // Return the initials as a string
    return initial1 + initial2;
  }

	
	
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
