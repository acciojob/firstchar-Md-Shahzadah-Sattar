function firstChar(text) {
  const trimmedText = text.trim();

  if (trimmedText !== '') {
    return trimmedText.charAt(0);
  } else {
    return '';
  }
}

// Example of using the function with user input
const text = prompt("Enter text:");
alert(firstChar(text));
