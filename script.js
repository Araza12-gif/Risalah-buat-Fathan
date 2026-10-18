
const envelope = document.getElementById("envelope");
const envelopeArea = document.getElementById("envelopeArea");
const letter = document.getElementById("letter");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");

openButton.addEventListener("click", () => {
  envelope.classList.add("open");

  openButton.disabled = true;
  openButton.textContent = "Membuka surat...";

  setTimeout(() => {
    envelopeArea.classList.add("hidden");
    letter.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, 750);
});

closeButton.addEventListener("click", () => {
  letter.classList.add("hidden");
  envelopeArea.classList.remove("hidden");

  envelope.classList.remove("open");
  openButton.disabled = false;
  openButton.innerHTML = 'Buka surat ini <span>✧</span>';

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
