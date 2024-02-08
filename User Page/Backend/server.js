const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders: ["Content-Type"], // Menambahkan 'Content-Type' ke dalam daftar header yang diizinkan
  })
);

app.use(bodyParser.json()); // Middleware untuk mengurai body JSON dari permintaan

// Konfigurasi koneksi ke database
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Ganti dengan username database Anda
  password: "", // Ganti dengan password database Anda
  database: "cart",
});

// Koneksi ke database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Database connected");
});

// Route untuk menambahkan produk baru ke database
app.post("/products", (req, res) => {
  const { image, harga, namaProducts, catatan } = req.body;

  // Query untuk menambahkan produk baru ke database
  const sql = `INSERT INTO products (image, harga_products, nama_products, catatan_poducts) VALUES (?, ?, ?, ?)`;
  db.query(sql, [image, harga, namaProducts, catatan], (err, result) => {
    if (err) {
      throw err;
    }
    console.log("Product added:", result);
    res.status(201).send("Product added successfully"); // Memberikan respons bahwa produk berhasil ditambahkan
  });
});

// Route untuk menghapus produk dari database berdasarkan ID produk
app.delete("/products/:id", (req, res) => {
  const productId = req.params.id;

  // Query untuk menghapus produk dari database berdasarkan ID produk
  const sql = `DELETE FROM products WHERE id_products = ?`;
  db.query(sql, [productId], (err, result) => {
    if (err) {
      throw err;
    }
    console.log("Product deleted:", result);
    res.status(200).send(`Product with ID ${productId} deleted successfully`); // Memberikan respons bahwa produk berhasil dihapus
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
