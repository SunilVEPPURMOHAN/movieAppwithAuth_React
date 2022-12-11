# This is a simple Movie App that uses Authentication to filter users

# Contents
1. *Register Page*: Email, Password and Name for Registration
2. *Login Page*: Email and Login for Authentication -> Redirect to Home Page
3. *Home Page*:
 a) Search by title
 b) Filter by Genre
 c) Sort by Rating and Year
 d) Paginate
 e) Logout Button
*WIP*
4. MyMovies Page (to be built) 
5. Admin page (to be built)

# Architectural Choices
1. MongoDB - Backend hosted in Cyclic: 
    a) Two Models - User and Movies. User can be admin or normal.
    b) JWT tokenization used for login
2. 

# Assumptions Made
1. Initially there is only one admin user admin1. Any new user is a normal user by default until promoted by admin1.
2. Title + Year uniquely identifies each entry in the database
3. MyMovies page only consists of movies "Created" by that user.
4. User can only edit movies "Created" by self.





