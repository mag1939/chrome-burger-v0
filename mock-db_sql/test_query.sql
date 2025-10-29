-- 4
-- SELECT name as menu, price
-- FROM menuitems
-- ORDER BY price ASC
-- LIMIT 3
-- ;

-- 5
-- SELECT ingredients.name as ingredient, suppliers.name as supplier
-- FROM ingredients
-- JOIN suppliers
-- ON ingredients.supplier_id = suppliers.supplier_id
-- WHERE suppliers.name LIKE 'Patty%'
-- WHERE suppliers.name = 'Patty''s Premium Meats'
-- ;

-- 6
-- SELECT order_id, staff_id
-- FROM orders
-- WHERE staff_id = 1
-- ;

--7
-- SELECT s.first_name as First_Name, s.last_name as Last_Name, COUNT(s.staff_id) as Total_Order
-- FROM staff s
-- RIGHT JOIN orders o
-- ON s.staff_id = o.staff_id
-- GROUP BY s.staff_id 
-- ;

-- 8
SELECT  DATE(order_date) as sales_day, 
        COUNT(order_date) as total_order, 
        SUM(total_price) as total_price
FROM orders
GROUP BY sales_day
ORDER BY sales_day
;

-- 9
SELECT mi.name, SUM(oi.quantity) as total_sold
FROM orderitems oi
JOIN menuitems mi
ON oi.item_id = mi.item_id
GROUP BY mi.name
ORDER BY total_sold DESC 

;


-- 10
SELECT i.name as ingredient, ri.quantity_needed, i.unit
FROM recipeitems ri
JOIN ingredients i ON ri.ingredient_id = i.ingredient_id
JOIN menuitems mi ON ri.item_id = mi.item_id
WHERE mi.name = 'Bacon Cheeseburger'
;

