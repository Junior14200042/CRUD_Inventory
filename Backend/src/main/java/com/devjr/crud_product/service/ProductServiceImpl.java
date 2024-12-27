package com.devjr.crud_product.service;

import com.devjr.crud_product.model.Product;
import com.devjr.crud_product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements IProductService {

    @Autowired
    ProductRepository productRepository;

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Product findById(Integer id) {

        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()) {

            return  product.get();

        }
        return product.orElseThrow();
    }

    @Override
    public void save(Product product) {
        productRepository.save(product);
    }

    @Override
    public void delete(Integer id) {
        productRepository.deleteById(id);
    }

    @Override
    public Product updateById(Integer id, Product product) {

        Optional<Product> productExist = productRepository.findById(id);

        if(productExist.isPresent()){
            Product p=productExist.get();

            p.setDescription(product.getDescription());
            p.setPrice(product.getPrice());
            p.setExist(product.getExist());

            productRepository.save(p);

        }

        return null;
    }
}
