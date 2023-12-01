// function compareAudio() {
//   // Show the second spinner
//   const spinner2 = document.getElementById("spinner2");
//   spinner2.style.display = "block";

//   // Simulate a delay for 3 seconds
//   setTimeout(function () {
//     // Hide the second spinner after 3 seconds
//     spinner2.style.display = "none";

//     // Your existing code for comparing audio goes here
//     console.log(fileUrl, originalText);
//     textarea.value = data.transcribed_text;

//     // Ensure that compElement is assigned correctly
//     compElement = comp[0];
//     const comparedHtml = compareText(originalText, data.transcribed_text);
//     compElement.innerHTML = comparedHtml;
//     const wordsCorrectPerElement =
//       document.getElementById("Words-Correct-Perr");
//     const deletionsElement = document.getElementById("Deletions");
//     const insertionsElement = document.getElementById("Insertions");
//     const repetitionsElement = document.getElementById("Repetitions");
//     const substitutionsElement = document.getElementById("Substitutions");
//     const pausesElement = document.getElementById("Pauses");
//     const hesitationsElement = document.getElementById("Hesitations");
//     const selfElement = document.getElementById("Self");
//     const skippedElement = document.getElementById("Skipped");
//     const jumpedElement = document.getElementById("Jumped");
//     const duplicateElement = document.getElementById("Duplicate");
//     const accuracyElement = document.getElementById("Accuracy");
//     const audioDurationElement = document.getElementById("audio-duration");
//     const transcriptionElement = document.getElementById("transcription");
//     const transcriptionOriginalTextElement = document.getElementById(
//       "transcription-orginal-text"
//     );
//     const manualTranscriptionElement = document.getElementById(
//       "Manual-transcription"
//     );
//     const manualOriginalElement = document.getElementById("Manual-original");

//     console.log("working");
//     document.getElementById("Words-Reads").textContent = data.error_metrics.WR;
//     document.getElementById("Words-Correct").textContent =
//       data.error_metrics.WC;
//     wordsCorrectPerElement.textContent =
//       data.error_metrics["Words Correct per Minute"];
//     deletionsElement.textContent = data.deleted_words.length;
//     insertionsElement.textContent = data.inserted_words.length;
//     repetitionsElement.textContent = data.repeated_words.length;
//     substitutionsElement.textContent = data.substituted_words.length;
//     pausesElement.textContent = data.pause_metrics["Pauses (1-3 seconds)"];
//     hesitationsElement.textContent =
//       data.pause_metrics["Hesitations (3+ seconds)"];
//     skippedElement.textContent = data.skipped_lines;
//     jumpedElement.textContent = 2;
//     duplicateElement.textContent = data.duplicate_lines;
//     transcriptionOriginalTextElement.textContent = data.original_vs_audio;
//     audioDurationElement.textContent = data.audio_duration;
//     accuracyElement.textContent = data.accuracy;

//     // Your other DOM manipulations go here
//     // ...

//     // console.log("working");
//     // Continue with the rest of your logic
//   }, 3000);

//   // Additional code for comparing audio goes here
//   // ...
// }
