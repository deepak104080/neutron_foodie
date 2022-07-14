# Foodie - 

Foodie - Multipage Food Listing and Delivery App



MVP - Minimum Viable Product
------------------------------------------------------------
Module 1 - End User
page 1 - homepage - API 4
Page 2 - location based restaurent list - API 1
page 3 - restaurant page - API 2 and API 3
------------------------------------------------------------


Module 2 - Admin
Add Restaurant - API 5
Add Food - API 6
------------------------------------------------------------
Module 3 - End User
Page 1 - Login Page - API 7
Page 2 - Registration Page - API 8
Page 3 - cart - 
Page 4 - checkout - login details, delivery details, payment details - API 9
Page 5 - Order Placed Page
------------------------------------------------------------
Module 4 - End User
Page 1 - history of orders
Page 2 - profile
Page 3 - addresses
Page 4 - Change Password
Page 5 - Forgot Password
------------------------------------------------------------

Module 5 - End User
Page1 - reviews, bookmark/favourite
Page 2 - wallet/credit/discount/cashback


-----------------------------------------------------------
-----------------------------------------------------------
API List
1 - http://localhost:4000/restaurants/'+tempData2.city - Restaurant - GET
2 - http://localhost:4000/restaurants/search/'+tempId.id; - Restaurant - GET
3 - http://localhost:4000/menu/'+tempId.id; - Menu - GET
4 - city list api - City - GET
5 - Add Restaurnt - POST - Restaurant
6 - Add Menu - POST - Menu
7 - Login - POST - Users
8 - Registration - POST - Users
9 - Order Placement - POST - Orders

-----------------------------------------------------------
-----------------------------------------------------------
Table names
City
Restaurant - city, geolocation (latitude, longitude), category, veg/nonveg
Menu - name, price
Users - username, name, email, mobile, password
userdetails - address, foodpreference, city, pincode, profilepic, dob, gender
orders - delivery, payment, menu
order details


------------------------------------------------------------


Authentication - 
Authorization - Auth0, Passport, JWT Token



Testing Libraries for React - JEST, Enzyme, react-test-rendere, react-testing-library, cypress












Teams
1) Mumtaj, Aman, Saheda, Ruchi, Purushottam
2) Aswani, Rahul, Sanjeev rajput
3) Abhinay, Sumesh, Charan, sanjeev kumar
4) Subhradip, Anurag, Ameen
5) Ajay, Ramanjeet, Suraj
6) Rishi, Purushottam, Arpit