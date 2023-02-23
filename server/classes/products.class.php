<?php 

abstract class Products extends Dbh {

    protected $sku;
    protected $name;
    protected $price;
    protected $size;
    protected $height;
    protected $width;
    protected $length;
    protected $weight;

    protected function getProducts() {
        $sql = "SELECT * FROM products";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();
        $allProducts = $stmt->fetchAll();
        return $allProducts;
    }

    protected function setProducts($sku,$name,$price,$size,$height,$width,$length,$weight) {
        $sql = "INSERT INTO products(sku, name, price, size, height, width, length, weight) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$sku, $name, $price, $size, $height, $width, $length, $weight]);
    }

    protected function removeProducts($id) {
            $sql = "DELETE FROM products WHERE id = $id";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute();
    }

}
