package com.devjr.crud_product.controller;


import com.devjr.crud_product.model.Product;
import com.devjr.crud_product.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:4200")
@Controller
@RestController
@RequestMapping("/inventory-app")
public class ProductController {

    @Autowired
    IProductService productService;

    @GetMapping
    public List<Product> findAll(){
        return productService.findAll();
    }

    @GetMapping("/{id}")
    public Product findById(@PathVariable Integer id){
        return  productService.findById(id);
    }

    @PostMapping
    public void save(@RequestBody Product product){
         productService.save(product);
    }
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Integer id){
        productService.delete(id);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Integer id, @RequestBody Product product){
        return  productService.updateById(id,product);
    }
}
