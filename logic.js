function absen() {
  const nama = document.getElementById("nama").value;

  if (nama === "") {
    alert("Nama wajib diisi!");
    return;
  }

  // simpan status absen
  localStorage.setItem("absen", "true");
  localStorage.setItem("namaPegawai", nama);

  // pindah ke dashboard
  window.location.href = "index.html";
}
function tampilkanPegawai() {
  const list = document.getElementById("pegawaiList");
  if (!list) return;

  const pegawaiAktif = JSON.parse(localStorage.getItem("pegawaiAktif")) || [];

  list.innerHTML = "";

  pegawaiAktif.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${p.nama}</strong>
      <span>(${p.jamMasuk})</span>
    `;
    list.appendChild(li);
  });
}

tampilkanPegawai();
