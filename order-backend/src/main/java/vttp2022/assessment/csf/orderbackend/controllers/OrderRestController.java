package vttp2022.assessment.csf.orderbackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import vttp2022.assessment.csf.orderbackend.models.Order;
import vttp2022.assessment.csf.orderbackend.models.OrderSummary;
import vttp2022.assessment.csf.orderbackend.services.OrderService;

@Controller("/api")
public class OrderRestController {

    @Autowired
    private OrderService service;

    @PostMapping("/order")
    public ResponseEntity<String> createOrder(Order order){
        service.createOrder(order);
        return new ResponseEntity<String>(HttpStatus.OK);
    }

    @GetMapping("/order/<email>/add")
    public ResponseEntity<String> getOrders(@PathVariable("email") String email){
        List<OrderSummary> List=service.getOrdersByEmail(email);
        return new ResponseEntity<String>(HttpStatus.OK);
    }


    public OrderService getService() {
        return service;
    }

    public void setService(OrderService service) {
        this.service = service;
    }
}

