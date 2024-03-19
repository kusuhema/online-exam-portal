// // script.js

// document.addEventListener('DOMContentLoaded', function () {
//     // Set the duration in milliseconds
//     const duration = parseInt(document.getElementById('remainingTime').value);

//     // Function to update the remaining time and display
//     function updateTimer() {
//         const remainingTimeInput = document.getElementById('remainingTime');
//         const countdownElement = document.getElementById('countdown');

//         const remainingTime = parseInt(remainingTimeInput.value);
//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = Math.floor((remainingTime % 60000) / 1000);

//         // Display the remaining time
//         countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

//         remainingTimeInput.value = Math.max(0, remainingTime - 1000);

//         // Check if time is up
//         if (remainingTime <= 0) {
//             // Clear the interval to stop the timer
//             clearInterval(timerInterval);
    
//             // Auto-submit the form when time is up
//             document.getElementById('examForm').submit();
//         }
//     }

//     // Update the timer every second
//     const timerInterval = setInterval(updateTimer, 1000);
// });
