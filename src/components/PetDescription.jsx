import { useNavigate } from "react-router-dom";

const PetDetails = ({ pet }) => {
  const navigate = useNavigate();
  return (
    <div className="textDetails">
      <h1 className="detailsTitle">{pet?.name || "No name available"}</h1>
      <p>
        <strong>Description:</strong>{" "}
        {pet?.description || "No description available"}
      </p>
      <p>
        <strong>Type:</strong> {pet?.type || "Unknown"}
      </p>
      <p>
        <strong>Species:</strong> {pet?.species || "Unknown"}
      </p>
      <p>
        <strong>Breed:</strong> {pet?.breeds?.primary || "Unknown"}{" "}
        {pet?.breeds?.mixed ? "(Mixed)" : ""}
      </p>
      <p>
        <strong>Age:</strong> {pet?.age || "Unknown"}
      </p>
      <p>
        <strong>Gender:</strong> {pet?.gender || "Unknown"}
      </p>
      <p>
        <strong>Size:</strong> {pet?.size || "Unknown"}
      </p>
      <p>
        <strong>Coat:</strong> {pet?.coat || "Unknown"}
      </p>
      <p>
        <strong>Color:</strong> {pet?.colors?.primary || "Unknown"}
      </p>

      <h3>Attributes</h3>
      <ul>
        <li>
          Spayed/Neutered: {pet?.attributes?.spayed_neutered ? "Yes" : "No"}
        </li>
        <li>House Trained: {pet?.attributes?.house_trained ? "Yes" : "No"}</li>
        <li>Shots Current: {pet?.attributes?.shots_current ? "Yes" : "No"}</li>
        <li>Special Needs: {pet?.attributes?.special_needs ? "Yes" : "No"}</li>
      </ul>

      <h3>Environment</h3>
      <ul>
        <li>Good with Children: {pet?.environment?.children ? "Yes" : "No"}</li>
        <li>Good with Dogs: {pet?.environment?.dogs ? "Yes" : "No"}</li>
        <li>Good with Cats: {pet?.environment?.cats ? "Yes" : "No"}</li>
      </ul>

      <h3>Contact Information</h3>
      <p>Email: {pet?.contact?.email || "Not available"}</p>
      <p>Phone: {pet?.contact?.phone || "Not available"}</p>
      <p>
        Address:{" "}
        {`${pet?.contact?.address?.address1 || ""}, ${
          pet?.contact?.address?.city || ""
        }, ${pet?.contact?.address?.state || ""} ${
          pet?.contact?.address?.postcode || ""
        }, ${pet?.contact?.address?.country || ""}`}
      </p>

      <div>
        <button className="backButton" onClick={() => navigate(-1)}>
          Back
        </button>
        <button
          className="editButton"
          onClick={() => navigate(`/newpetform/${pet.id}`, { state: { pet } })}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default PetDetails;
