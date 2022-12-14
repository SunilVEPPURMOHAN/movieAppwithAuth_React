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
4. MyMovies Page
 a) Same features as Home page
 b) (pending) edit, create and delete
 c) load movies using JSON (backend apis ready)
5. Admin page (to be built)

# Architectural Choices
1. MongoDB - Backend hosted in Cyclic: 
    a) Two Models - User and Movies. User can be admin or normal.
    b) JWT tokenization used for login
2. Only two major classifications and relationships. Movies and Users who created them.
3. Cyclic to host back-end as it as free
4. React Bootstrap for css as many components were readily available

# Assumptions Made
1. Initially there is only one admin user admin1. Any new user is a normal user by default until promoted by admin1.
2. Title + Year uniquely identifies each entry in the database
3. MyMovies page only consists of movies "Created" by that user.
4. User can only edit movies "Created" by self.
5. Admins can see list of users and promote and delete other users

# Problems faced
1. Preventing unlimited rerendering of React components with so many states. UseMeMo helped
2. Designing the pages. Mixing React Bootstrap and other style components.
3. axios calls going down. Debugging the cause was time consuming.
4. Hosting backend in *Cyclic* ; debugging was tricky
5. CORS is a major pain




