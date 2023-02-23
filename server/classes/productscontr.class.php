<?php 

class ProductsContr extends Products {

    public function createProduct($allData) {
        $value = get_object_vars($allData);
        $myNewArr = $value;

        $this->sku = trim($myNewArr["sku"]);
        $this->name = trim($myNewArr["name"]);
        $this->price = trim($myNewArr["price"]);
        $this->size = $myNewArr["size"];
        $this->height = $myNewArr["height"];
        $this->width = $myNewArr["width"];
        $this->length = $myNewArr["length"];
        $this->weight = $myNewArr["weight"];
        $this->setProducts($this->sku,$this->name,$this->price,$this->size,$this->height,$this->width,$this->length,$this->weight);
    }

    public function removeProduct($id) {
        $this->removeProducts($id);
    }

}