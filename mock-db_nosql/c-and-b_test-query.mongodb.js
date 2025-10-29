use("chrome-burger-db");



// // 1
// db.staff.find({}, {_id: 0, first_name: 1, last_name: 1});

// // 2
// db.menu_items.find({category: "Burger"}, {_id: 0, name: 1})

// // 3
// db.menu_items.find({}, { _id: 0, name: 1, price: 1}).sort( {price: -1});

// // 4
// db.menu_items.find({}, { _id: 0, name: 1, price: 1}).sort( {price: 1}).limit(3);

// 5
db.ingredients.aggregate([
    {
        $lookup: {
          from: "suppliers",
          localField: "supplier_id",
          foreignField: "_id",
          as: "Ingredient_Suppliers"
        }
    },
    {
        $unwind: "$Ingredient_Suppliers"
    },
    {
        $project: {
          _id: 0,
          supplier_name: "$Ingredient_Suppliers.name",
          ingredient_name: "$name"
        }
    },
    {
        $match: {
          supplier_name: "Patty's Premium Meats"
        }
    }
]);

// // 6
// db.staff.aggregate([
//     {
//         $match: {
//           first_name: "Jane", last_name: "Doe"
//         }
//     },
//     {
//         $lookup: {
//           from: "orders",
//           localField: "_id",
//           foreignField: "staff.staff_id",
//           as: "staff_orders"
//         }
//     },
//     {
//         $unwind: "$staff_orders"
//     },
    // {
    //     $project: {
    //       _id: 0,
    //       first_name: 1,
    //       last_name: 1,
    //       staff_order_id: "$staff_orders._id",
    //     }
    // }
// ]);

// // 7
// // หน้าที่ของ $first (Accumulator Operator) | เป็นการบอก MongoDB อย่างชัดเจนว่า: 
// // "สำหรับทุก Document ที่กำลังจะถูกยุบรวมเป็นกลุ่มนี้ ให้เลือกค่า staff.first_name 
// // มาจาก Document ตัวแรกสุด ที่ถูกป้อนเข้าสู่ Stage $group"
// db.orders.aggregate([
//     { $group: { _id: "$staff.staff_id", 
//                 first_name: {$first: "$staff.first_name"},
//                 last_name: {$first: "$staff.last_name"},
//                 total_order: { $sum: 1}}
//     },
//     {
//         $project: {
//           _id: 0,
//           first_name: 1,
//           last_name: 1,
//           total_order: 1
//         }
//     }
// ]);

// 8
db.orders.aggregate([
    { $group: { _id: {$dateToString: {format: "%Y-%m-%d", date: "$order_date"}}, 
                total_price: { $sum: "$total_price"}}
    },
    {
        $project: {
          _id: 0,
          sale_day: "$_id",
          total_price: 1
        }
    }
]);