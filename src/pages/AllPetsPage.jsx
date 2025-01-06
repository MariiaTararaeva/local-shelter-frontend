import "../styles/AllPetsPage.css"; 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllAnimalsPage() {
  const [animals, setAnimals] = useState([]); // State to store fetched animals
  const [error, setError] = useState(null); // State for error handling
  const [loading, setLoading] = useState(true); // State for loading state
  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch('http://localhost:4000/animals'); // Backend endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch animals');
        }
        const animalsData = await response.json(); // Parse response
        console.log('Fetched Animals:', animalsData); // Debugging
        setAnimals(animalsData); // Update state with fetched data
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message); // Set error state
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };
    fetchAnimals();
  }, []);
  if (loading) {
    return <p>Loading animals...</p>; // Show loading message
  }
  if (error) {
    return <p>Error: {error}</p>; // Show error message
  }


  return (
    <div className="container">

      <h1 className="title"> List of All Animals</h1>

      <div className='animal-list'>
        {animals.length > 0 ? (
          animals.map((animal) => (
            <div className="petBox"
              key={animal.id} >

              <h3>{animal.name}</h3>
              <p>Type: {animal.type}</p>
              <p>Age: {animal.age}</p>
              <img className="photoBox"
                src={animal.photos && animal.photos[0] ? animal.photos[0].small : 'defaultImage.jpg'}
                alt="Pet Pic"
              />
               <Link to={`/animals/${animal.id}`}>
                    <button  className="buttonBox" type="button" >Details</button>
                </Link>
              </div>
            
          ))
        ) : (
          <p>No animals available</p>
        )}
      </div>
    </div>
  );
}
export default AllAnimalsPage;












