const { Link } = require("react-router-dom");
const Navbar = () => {
 return (<>
 <nav style={{ textAlign: "center", marginTop: "20px" }}>
    <h1 className="display-4" style={{padding: 30}}>Deluxe Movies</h1>

 <Link to="/" style={{ padding: "10px" }}>
Login
</Link>
 <Link to="/signup" style={{ padding: "10px" }}>
Register
</Link>
 <Link to="/home" style={{ padding: "10px" }}>
Home
 </Link>
</nav></>
 );
};
export default Navbar;