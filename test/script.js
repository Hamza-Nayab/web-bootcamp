document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const suggestionsContainer = document.getElementById("suggestionsContainer");
  
    searchInput.addEventListener("input", function() {
      const searchTerm = this.value.trim().toLowerCase();
  
      // Fetch suggestions from JSON file
      fetch('suggestions.json')
        .then(response => response.json())
        .then(data => {
          const suggestions = data.filter(item => item.toLowerCase().includes(searchTerm));
          displaySuggestions(suggestions);
        });
    });
  
    function displaySuggestions(suggestions) {
      suggestionsContainer.innerHTML = "";
      if (suggestions.length > 0) {
        suggestions.forEach(suggestion => {
          const suggestionElement = document.createElement("div");
          suggestionElement.classList.add("suggestion");
          suggestionElement.textContent = suggestion;
          suggestionElement.addEventListener("click", function() {
            searchInput.value = suggestion;
            suggestionsContainer.innerHTML = "";
          });
          suggestionsContainer.appendChild(suggestionElement);
        });
        suggestionsContainer.style.display = "block";
      } else {
        suggestionsContainer.style.display = "none";
      }
    }
  
    // Hide suggestions when clicking outside the search box
    document.addEventListener("click", function(event) {
      if (!searchInput.contains(event.target)) {
        suggestionsContainer.innerHTML = "";
      }
    });
  });
  