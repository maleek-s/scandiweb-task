<?php 

class ProductsView extends Products {

    public function showProducts(){
        $allProducts = $this->getProducts();
        echo json_encode($allProducts);
    }
}