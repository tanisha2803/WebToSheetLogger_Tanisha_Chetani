// Simplified popup script - DOMContentLoaded not needed since script is at end of body
console.log("Popup script loaded");

// Add interactive elements if needed
document.addEventListener('DOMContentLoaded', function() {
  console.log("Popup DOM fully loaded");
  document.querySelector('h1').addEventListener('click', () => {
    console.log("Heading clicked!");
  });
});