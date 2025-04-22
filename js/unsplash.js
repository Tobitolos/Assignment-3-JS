// This script fetches images from the Unsplash API based on a search query
// and displays them on the webpage.

// This function runs when you search for images
async function searchImages() {
  // Get the search query entered by the user
  const query = document.getElementById('searchQuery').value;

  // Link to documetation page i used ('https://unsplash.com/documentation') to get the API key
  

  // Your Unsplash API access key
  const accessKey = 'K7zVnbyihLCNXxVOh_WJeUX2GC9RPLlZ9d-7OgqfIUI';

  // Fetch data from Unsplash using the search query and access key
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`);

  // Convert the response data to JSON format
  const data = await response.json();

  // Select the div element where images will be displayed
  const resultsDiv = document.getElementById('results');

  // Clear previous search results
  resultsDiv.innerHTML = '';

  // Loop through each image returned from Unsplash
  data.results.forEach(image => {
    // Create an img element for each image
    const img = document.createElement('img');

    // Set the source (URL) of the image to the small size image from Unsplash
    img.src = image.urls.small;

    // Set alternative text for accessibility
    img.alt = image.alt_description;

    // Add the image to the results div
    resultsDiv.appendChild(img);
  });
}
