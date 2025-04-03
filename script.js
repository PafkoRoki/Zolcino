window.onload = function () {
	document.getElementById('loader').style.display = 'none';
	document.getElementById('content').style.display = 'block';
  };
  
  //------------------------------------------------------------------------------------------------------------
  
  function toggleBar() {
	const bar = document.getElementById("slideUpBar");
	bar.classList.toggle("show");
  }
  
  //------------------------------------------------------------------------------------------------------------
  
  document.addEventListener("DOMContentLoaded", function () {
	const paths = document.querySelectorAll(".svg-map path");
	const modal = document.getElementById("modal");
	const modalContent = document.getElementById("modal-content");
	const closeModal = document.getElementById("close-modal");
  
	// Add event listeners to each path
	paths.forEach((path) => {
	  path.setAttribute("tabindex", "0"); // Enable keyboard focus
	  path.addEventListener("click", (e) => openModal(e.target));
	  path.addEventListener("keydown", function (e) {
		if (e.key === "Enter") openModal(e.target);
	  });
	});
  
	// Function to open the modal and update content
	function openModal(target) {
		const regionName = target.dataset.name || "Nieznany region";
		const regionFunction = target.getAttribute("region-function") || "Brak informacji o funkcji regionu";
		const area = target.getAttribute("data-area") || "Brak informacji o powierzchni";
		const building = target.getAttribute("data-building") || "Brak informacji o budynku";
		const quarter = target.getAttribute("data-quarter") || "Brak informacji o kwartale";
		const pum = target.getAttribute("data-pum") || "Brak informacji o PUM";
		const pumk = target.getAttribute("data-pumk") || "Brak informacji o cenie PUM";
		const price = target.getAttribute("data-price") || "Brak informacji o cenie";
	  
		modal.classList.add("active");
		modalContent.innerHTML = `
		  <h1>${regionName}</h1>
		  <hr> <!-- Horizontal line below the region name -->
		  <table class="modal-table">
			<tr><td>Funkcja regionu:</td><td><b>${regionFunction}</b></td></tr>
			<tr><td>Powierzchnia:</td><td><b>${area}</b></td></tr>
			<tr><td>Budynek:</td><td><b>${building}</b></td></tr>
			<tr><td>Kwartał:</td><td><b>${quarter}</b></td></tr>
			<tr><td>Przybliżony PUM:</td><td><b>${pum}</b></td></tr>
			<tr><td>Cena 1 m² PUM:</td><td><b>${pumk}</b></td></tr>
			<tr><td>Cena:</td><td><b>${price}</b></td></tr>
		  </table>
		`;
	  }
	// Close modal when the close button is clicked
	closeModal.addEventListener("click", () => {
	  modal.classList.remove("active");
	});
  
	// Close modal when clicking outside the modal content
	window.addEventListener("click", function (e) {
	  if (e.target === modal) {
		modal.classList.remove("active");
	  }
	});
  
	// Close modal on "Escape" key
	document.addEventListener("keydown", function (e) {
	  if (e.key === "Escape") {
		modal.classList.remove("active");
	  }
	});
  });