function shortcut(s1, s2) {
  // your code here

	if (str1.isEmpty() || str2.isEmpty()) {
        return "";
    } else {
        // Get the initial letters of the strings
        char initial1 = str1.charAt(0);
        char initial2 = str2.charAt(0);
        
        // Return the initials as a string
        return String.valueOf(initial1) + String.valueOf(initial2);
    }
	
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
