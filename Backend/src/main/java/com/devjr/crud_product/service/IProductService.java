package com.devjr.crud_product.service;

import com.devjr.crud_product.model.Product;

import java.util.List;

public interface IProductService {

    List<Product> findAll();

    Product findById(Integer id);

    void save(Product product);

    void delete(Integer id);

    Product updateById(Integer id,Product product);



}
