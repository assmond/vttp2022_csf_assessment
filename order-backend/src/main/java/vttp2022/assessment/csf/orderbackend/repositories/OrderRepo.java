package vttp2022.assessment.csf.orderbackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import vttp2022.assessment.csf.orderbackend.models.Order;
import vttp2022.assessment.csf.orderbackend.models.OrderSummary;

import java.util.List;

public interface OrderRepo extends JpaRepository<Order, Integer> {

    @Query( "select o from 'Order' o where email= :email" )
    List<OrderSummary> findOrderByEmail(@Param("email") String email);

}
