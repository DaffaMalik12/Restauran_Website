fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((data) => {
    const productsContainer = document.getElementById("products-container");
    let totalPrice = 0; // Variabel untuk menyimpan total harga
    console.log(totalPrice);

    data.forEach((product) => {
      // Buat elemen kartu
      const card = document.createElement("div");
      card.classList.add("card");

      // Buat elemen gambar
      const image = document.createElement("img");
      image.src = product.image;
      card.appendChild(image);

      // Buat elemen konten
      const content = document.createElement("div");
      content.classList.add("content");

      // Buat elemen judul
      const h2 = document.createElement("h2");
      h2.textContent = product.nama_products;
      content.appendChild(h2);

      // Buat elemen harga
      const h5 = document.createElement("h5");
      h5.textContent = product.harga_products;
      content.appendChild(h5);

      // Tambahkan elemen konten ke dalam kartu
      card.appendChild(content);

      // Tambahkan kartu ke dalam kontainer produk
      productsContainer.appendChild(card);

      // Tambahkan Harga Produk Ke Total Harga
      totalPrice += parseFloat(product.harga_products);
    });

    // Tampilkan total harga
    const totalPriceElement = document.createElement("span");
    totalPriceElement.textContent = `${totalPrice}`;
    document.getElementById("total-price").appendChild(totalPriceElement);
  })
  .catch((error) => console.error("Error fetching products:", error));
