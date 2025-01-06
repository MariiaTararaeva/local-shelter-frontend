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
      <h1 style={{ color: 'white' }}> List of All Animals</h1>
      <div className='animal-list'>
        {animals.length > 0 ? (
          animals.map((animal) => (
            <div
              key={animal.id}
              style={{
                border: '1px solid #ccc',
                margin: '10px',
                padding: '10px',
                borderRadius: '5px',
                backgroundColor: '#F9F9F',
                textAlign: 'center',
              }}
            >
              <h3>{animal.name}</h3>
              <p>Type: {animal.type}</p>
              <p>Age: {animal.age}</p>
              <img
                src={animal.photos && animal.photos[0] ? animal.photos[0].small : 'defaultImage.jpg'}
                alt="Pet Pic"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <div style={{ marginTop: '10px' }}>
                <Link
                  to={`/animals/${animal.id}`}
                  style={{
                    textDecoration: 'none',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '5px',
                  }}
                >
                  View Details
                </Link>
              </div>
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












