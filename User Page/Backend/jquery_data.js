$(document).ready(function () {
  $("button").click(function () {
    var image = $(".gambar img").attr("src");
    var harga = $(".harga").text();
    var namaProducts = $(".nama_products").text(); 
    var catatan = $(".Catatan").val();

    var data = {
      image: image,
      namaProducts: namaProducts, 
      harga: harga,
      catatan: catatan,
    };

    $.ajax({
      type: "POST",
      url: "http://localhost:3000/products",
      data: JSON.stringify(data),
      contentType: "application/json",
      success: function (response) {
        console.log(response);
        alert("Data berhasil disimpan ke database");
      },
      error: function (xhr, status, error) {
        console.error(xhr.responseText);
        alert("Terjadi kesalahan saat menyimpan data ke database");
      },
    });
  });
});
