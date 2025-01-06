import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import { useParams, Navigate } from "react-router-dom";
function AllPetsPage () {
    
const [pets, setPets] = useState([]);
const fetchPets = async () => {
    try {
        const response = await fetch ('http://localhost:4000/animals')
        if (response.ok) {
            const petsData = await response.json()
            console.log(petsData)
            setPets(petsData)
        }
    } catch (error) {
        console.log (error)
    }
}

useEffect (() =>{
    fetchPets()
}, [])


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