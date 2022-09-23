function copy() {
    // website address
    const webAddress = "https://descendantsofadell.netlify.app"
  
    // // Select the text field
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(webAddress);
    
  
    // Alert the copied text
    alert("Copied the text: " + webAddress);
  }