// Import the getAll function from your other file
import { getAll } from './getAll.js';

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Call the getAll function to fetch the data
    getAll()
        .then((data) => {
            // Get a reference to the div where you want to display the data
            const fruitListDiv = document.getElementById("fruit-data");

            // Loop through the data and append it to the fruitListDiv
            data.forEach((fruitHtml) => {
                const fruitContainer = document.createElement('div');
                fruitContainer.innerHTML = fruitHtml;
                fruitListDiv.appendChild(fruitContainer);
            });
        })
        .catch((error) => {
            console.error(error);
        });
});
