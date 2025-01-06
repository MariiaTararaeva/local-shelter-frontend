import { Link } from "react-router-dom";

function HomePage() {
    return(
        <div>
        <h1 style={{color: "white" }}>This is the Home Page</h1>
        <Link to="/listOfPets">
        <div className="card" style={{ border: '2px solid black', textAlign: 'center', backgroundColor: "#591C21", color: "white", margin: "5px 10px 30px 5px" }}>
        <h5>Know your future Pet</h5>
        <button type="button">Ready ?</button>
        </div>
        </Link>
        <Link to="/contact">
        <div className="card" style={{ border: '2px solid black', textAlign: 'center', backgroundColor: "#591C21", color: "white", margin: "5px 10px 30px 5px" }}>
        <h5>Let's get in touch</h5>
        <button type="button">Your Details</button>
        </div>
        </Link>
        </div>
    )
}
export default HomePage;