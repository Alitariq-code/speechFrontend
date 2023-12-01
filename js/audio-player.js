// // script.js
// function getFile(event) {
//   const fileInput = event.target;
//   const fileText = document.querySelector(".fileText");
//   fileText.textContent = fileInput.files[0].name;
// }

// function uploadAudio() {
//   const fileInput = document.getElementById("fileInp");
//   const uploadedAudio = document.getElementById("uploaded-audio");
//   const spinner = document.getElementById("spinner1");

//   // You can perform additional validation here if needed

//   if (fileInput.files.length > 0) {
//     const file = fileInput.files[0];
//     const objectUrl = URL.createObjectURL(file);

//     // Update the audio element source
//     uploadedAudio.src = objectUrl;

//     // Show the spinner while the audio is loading
//     spinner.style.display = "block";

//     // Optional: You can hide the file upload UI or show a success message
//     // depending on your requirements.

//     // Example: Hide the file upload UI after 3 seconds
//     setTimeout(() => {
//       spinner.style.display = "none";
//     }, 3000);
//   }
// }
