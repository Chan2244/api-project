fetch("https://iskarr.github.io/austindonovan.github.io/api/business.json")
  .then(response => response.json()) // Parse the response as JSON
  .then(data => console.log(data)) // Process the retrieved data
  .catch(error => console.error('Error fetching data:', error))