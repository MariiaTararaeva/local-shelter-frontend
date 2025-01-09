import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/App.css"; // Custom styles
import CarouselContainer from "../components/CarouselContainer";
import PetDetails from "../components/PetDescription";
import logo from "../assets/localShelterLogoImage.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PetDetailsPage() {
  const { petsId } = useParams();
  const [pet, setPet] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/animals`);
        if (!response.ok) {
          throw new Error("Failed to fetch animals");
        }
        const animalsData = await response.json();

        const foundPet = animalsData.find(
          (animal) => String(animal.id) === String(petsId)
        );
        if (!foundPet) {
          throw new Error(`Pet with ID ${petsId} not found`);
        }
        setPet(foundPet);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPet();
  }, [petsId]);

  if (loading) return <p>Loading pet details...</p>;
  if (error) return <p>Error: {error}</p>;

  // Prepare media for the carousel
  const media = [
    ...(pet?.photos || []).map((photo) => ({
      type: "image",
      url: photo?.large || logo, // Use large-sized images, fallback to logo
    })),
    ...(pet?.videos || []).map((video) => ({
      type: "video",
      url: video, // Use video URL if available
    })),
  ];

  // Ensure at least one media element is available
  if (media.length === 0) {
    media.push({ type: "image", url: logo });
  }

  return (
    <div className="pet-details-page">
      <CarouselContainer
        pet={pet}
        media={media}
        logo={logo}
        navigate={navigate}
      />
      <PetDetails pet={pet} />
    </div>
  );
}

export default PetDetailsPage;
