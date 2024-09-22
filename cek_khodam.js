import $ from "jquery";

const cek_khodam = (element) => {
  element.text("Cek Khodam");
  const kodam = [
    "Cacing laut",
    "Ayam Palekko",
    "Es kelapa gula merah",
    "Tengkorak Teknik",
    "Warung boti",
    "beruang malino",
    "kordinator ramtek",
    "nyamuk racing",
    "el kecepatan",
    "Tengkorak Teknik",
  ];
  element.click(() => {
    let name = $("#nameInput").val();
    let random = Math.floor(Math.random() * kodam.length);

    if (name) {
      alert(`${name}, khodam anda adalah ${kodam[random]}`);
      // $(".judul").text(`${name}, khodam anda adalah ${kodam[random]}`);
    } else {
      alert("Mohon masukkan nama Anda.");
    }

    console.log(`${name}, khodam anda adalah ${kodam[random]}`);
  });
};

export default cek_khodam;
