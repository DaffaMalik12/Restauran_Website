document.addEventListener("DOMContentLoaded", function () {
  const kategoriSearchInput = document.getElementById("kategoriSearchInput");
  const resultsContainer = document.getElementById("resultsContainer");
  const allCards = document.querySelectorAll(".card-kategori");
  const originalContent = resultsContainer.innerHTML;

  kategoriSearchInput.addEventListener("input", function () {
    const searchText = kategoriSearchInput.value.toLowerCase();

    if (searchText === "") {
      resultsContainer.innerHTML = originalContent;
      return;
    }

    const filteredCards = Array.from(allCards).filter(function (card) {
      const cardTitle = card.querySelector("h1").textContent.toLowerCase();
      return cardTitle.includes(searchText);
    });

    displayFilteredResults(filteredCards);
  });

  function displayFilteredResults(filteredCards) {
    resultsContainer.innerHTML = "";

    if (filteredCards.length === 0) {
      resultsContainer.innerHTML = "<p>No results found.</p>";
    } else {
      filteredCards.forEach(function (card) {
        const clonedCard = card.cloneNode(true);
        resultsContainer.appendChild(clonedCard);

        card.addEventListener("click", function () {
          const cardLink = card.querySelector("a");
          if (cardLink) {
            const cardUrl = cardLink.getAttribute("href");
            window.location.href = cardUrl;
          }
        });
      });
    }
  }
});
