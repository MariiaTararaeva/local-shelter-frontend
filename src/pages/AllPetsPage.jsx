import { Link } from "react-router-dom";
function AllPetsPage () {
return(
    <div>
 <h1 style={{color: "white" }}>List of all our Pets</h1>
<Link to='/'>
<div className="card" style={{ border: '2px solid black', textAlign: 'center', backgroundColor: "#591C21", color: "white", margin: "5px 10px 30px 5px" }}>
        <h5>Back to Home Page</h5>
        <button type="button">PetFinder MP</button>
        </div>
</Link>
</div>
)
}
export default AllPetsPage;