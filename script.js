document.getElementById("bukaBtn").addEventListener("click", mulaiCountdown);


function mulaiCountdown() {
  const countdown = document.getElementById("countdown");
  const pesan = document.getElementById("pesan");
  const button = document.getElementById("bukaBtn");
  const subtitle = document.querySelector(".subtitle");
  const body = document.getElementById("body");
  const musik = document.getElementById("musik");
  const hadiahBtn = document.getElementById("hadiahBtn");
  const hadiah = document.getElementById("hadiah");
  const hadiahImg = document.querySelector(".hadiah-img");
  const hadiahText = document.querySelector(".hadiah-text");


  button.style.display = "none";
  subtitle.style.display = "none";
  countdown.classList.remove("hidden");

  const hitungan = ["3", "2", "1", "Siap!"];
  let index = 0;

  function tampilHitung() {
    if (index < hitungan.length) {
      countdown.textContent = hitungan[index];

      // Reset animasi dengan paksa
      countdown.classList.remove("countdown");
      void countdown.offsetWidth; // trik reflow
      countdown.classList.add("countdown");

      setTimeout(() => {
        index++;
        tampilHitung();
      }, 1000);
    } else {
      countdown.classList.add("hidden");
      pesan.classList.remove("hidden");

      body.classList.add("bg-ultah");

      musik.play();

      // ❗ Tampilkan tombol hadiah
      hadiahBtn.classList.remove("hidden");

      // ✅ Tambahkan event listener DI SINI
      hadiahBtn.addEventListener("click", () => {
        hadiah.classList.remove("hidden");
        hadiahImg.classList.add("show");
        hadiahText.classList.add("show");
      });
    }
  }

  tampilHitung();
}
