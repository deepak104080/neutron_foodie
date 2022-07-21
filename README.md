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
Add City - API 10
------------------------------------------------------------
Module 3 - End User
Page 1 - Login Page - API 7 and Redux
Page 2 - Registration Page - API 8
Page 3 - Add to cart - Redux
Page 4 - Checkout - login details, delivery details, payment details - API 9 (deliveryaddress, mobile, paymentdetails)
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





Pending Item
City Schema and API
Template Update/Improve
Add Restaurant/Food Item
Update Restaurant/Food Item
Improve Menu/Homepage
User Type Handling
-----------------------------------------------------------
-----------------------------------------------------------
API List
1 - http://localhost:4000/restaurants/'+tempData2.city - Restaurant - GET - Non-secure
2 - http://localhost:4000/restaurants/search/'+tempId.id; - Restaurant - GET - Non-secure
3 - http://localhost:4000/menu/'+tempId.id; - Menu - GET - Non-secure
4 - city list api - City - GET - Non-secure
5 - Add Restaurnt - POST - Restaurant - Secure/Admin
6 - Add Menu - POST - Menu - Secure/Admin
7 - Login - POST - Users - Non-secure
8 - Registration - POST - Users - Non-secure
9 - Order Placement - POST - Orders - Secure
10 - City Add - POST - City - Secure/Admin
11 - Order History/ All Orders by any user - GET - Secure
-----------------------------------------------------------
-----------------------------------------------------------
Table names
City - 
Restaurant - city, geolocation (latitude, longitude), category, veg/nonveg
Menu - name, price
Users - username, name, email, mobile, password
userdetails - address, foodpreference, city, pincode, profilepic, dob, gender
orders - orderid, rest_name, city, amount, (deliveryaddress, mobile, paymentstatus, paymentcode)
order details - menu


------------------------------------------------------------




Authentication - 
Authorization - Auth0, Passport, JWT Token



Step 1 - Back End - If Login successfull, generate jwt token and send along with response data
Step 2 - Front End - Store jwt token locally - localStorage/redux/context
Step 2.1 - Front End - Check login on front end on basis of jwt token
Step 3 - Front End - Attach jwt token along with Secure API headers
Step 4 - Back End - verify the jwt token received





Testing Libraries for React - JEST, Enzyme, react-test-rendere, react-testing-library, cypress












Teams
1) Mumtaj, Aman, Saheda, Ruchi, Purushottam
2) Aswani, Rahul, Sanjeev rajput
3) *****Abhinay, Sumesh, Charan, sanjeev kumar
4) Subhradip, Anurag, Ameen
5) Ajay, Ramanjeet, Suraj
6) *****Rishi, Purushottam, Arpit