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
  
	  modal.classList.add("active");
	  modalContent.innerHTML = `
		<h1>${regionName}</h1>
		<p>Funkcja regionu: <b>${regionFunction}</b></p>
		<p>Powierzchnia: <b>${area}</b></p>
		<p>Budynek: <b>${building}</b></p>
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