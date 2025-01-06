import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Link} from 'react-router-dom'


function PetDetailsPage() {
  
  const {petsId} = useParams();

  const [pet, setPets] = useState([]);
  useEffect(() => {
    const fetchPet = async() => {
      try {
      const response = await fetch(`http://localhost:4000/animals`)
      
      if (response.ok) {
        const petsData = await response.json()
        console.log(beerData)
        setPets(petsData)
  }
  } catch (error) {
  console.log(error)
  }
}
fetchPet()
  }, [])
  
  const navigate = useNavigate();
  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4" key={petsId} >
     
     <Link to={`/animals/${petsId}`}>
      {pet && (
        <>
          <img
            src={animal.photos.medium}
            alt="Pet Image"
            height="300px"
            width="auto"
          />
          <h3>{animal.type}</h3>
          <p>{animal.name}</p>
          <p>{animal.breeds}</p>
          <p>{animal.colors}</p>
          <p>{animal.age}</p>
          <p>{animal.gender}</p>
          <p>{animal.size}</p>
          <p>{animal.coat}</p>
          <p>{animal.attributes}</p>
          <p>{animal.tags}</p>
          <p>{animal.description}</p>
          

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </>
      )}
      </Link>
    </div>
  );
}

export default PetDetailsPage;