$(document).ready(function () {
  $("button").click(function () {
    var image = $(".gambar img").attr("src");
    console.log(image);
    var harga = $(".harga").text();
    console.log(harga);
    var namaProducts = $(".nama_products").text();
    console.log(namaProducts);

    var catatan = $(".Catatan").val();
    console.log(catatan);

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
