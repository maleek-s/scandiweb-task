<?php
include 'includes/class-autoload.inc.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: true"); 
header('Access-Control-Allow-Headers: origin, content-type, accept');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header('Access-Control-Max-Age: 86400');


$method = $_SERVER['REQUEST_METHOD'];
switch($method){
    case "POST":
        $postObj = new ProductsContr();
        $postObj->createProduct(json_decode(file_get_contents(('php://input'))));
        break;

        //this solution was initially added

    case "DELETE":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $id = $path[1];
        $deleteObj = new ProductsContr();
        $deleteObj->removeProduct($id);
        break;

        //This solution was implemented due to 000webhost restrictions

    case "GET":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $id = $path[1];
        if ($id) {
            $deleteObj = new ProductsContr();
            $deleteObj->removeProduct($id);
        } else {
            $getObj = new ProductsView();
            $getObj->showProducts();
        }
        break; 
}

