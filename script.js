
document.addEventListener("DOMContentLoaded", function() {
  // Get the RSVP form element
  var rsvpForm = document.getElementById("rsvpForm");

  // Get the response message element
  var responseMessageElement = document.getElementById("response-message");

  // Initialize variables to store the response counts
  var yesCount = 0;
  var noCount = 0;

  // Add event listener to the form submission
  rsvpForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the selected response option
    var responseOption = document.querySelector('input[name="response"]:checked').value;

    // Update the response counts based on the selected option
    if (responseOption === "yes") {
      yesCount++;
    } else if (responseOption === "no") {
      noCount++;
    }

    // Display the response message on the webpage
    responseMessageElement.textContent = responseOption === "yes" ? "Thank you for confirming!" : "No, you should attend.";
    responseMessageElement.style.display = "block";

    // Set a timeout to hide the response message after 3 seconds
    setTimeout(function() {
      responseMessageElement.style.display = "none";
    }, 3000);

    // Reset the form
    rsvpForm.reset();

    // Log the response counts
    console.log("Yes Count:", yesCount);
    console.log("No Count:", noCount);
  });
});

