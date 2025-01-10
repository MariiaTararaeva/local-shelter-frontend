## GOOBY

Your Local Shelter Database by Pet Finder

## App Logo

".\src\assets\GoobyLogoShelter.png"

## Description

Gooby Pet Finder is a compassionate platform designed to connect pet seekers with pets in need of adoption. It also allows pet owners to list their pets for adoption, fostering a supportive and loving community for animals.
Through a seamless interface and powerful functionalities, Gooby Pet Finder aims to make the process of pet adoption intuitive and accessible.

## Features

- **404** - Users will see a customized 404 page when accessing a nonexistent route.
- **HomePage** - Introduces users to the platform and provides an overview of its purpose.
- **AllPetsPage** - Displays a list of all pets available for adoption, enabling easy browsing.
- **PetDetailsPage** - Shows detailed information about a specific pet, including images and descriptions.
- **CRUD Functionality** - Full control over pet records with Create, Read, Update, and Delete operations.

## Technologies used

**Frontend**
Framework: React
Styling: HTML, CSS, JavaScript
Carousel Integration: Slick Carousel
State Management: React hooks and Context API

**Backend**
Framework: Node.js with Express.js
API: Pet Finder (Mock backend by IRONHACK)

**Deployment**
Frontend Hosting: Netlify
Backend Hosting: Render

## Routes

**Frontend**
/ – Renders the HomePage.
/listOfPets – Displays the AllPetsPage with the full list of pets.
/pet/new – Opens a form to add a new pet.
/animals/:petsId – Displays the PetDetailsPage for a selected pet.

**Backend**
GET /animals – Fetches all pets from the database.
GET /animals/:id – Fetches details for a specific pet.
POST /animals – Adds a new pet to the database.
PUT /animals/:id – Updates pet details.
DELETE /animals/:id – Deletes a pet record.

## Links

## Collaborators

[Developer Marria Tararaeva](https://github.com/MariiaTararaeva)
[Developer Patricio Arellano](https://github.com/patoare)

### Project

[Repository Link](https://github.com/MariiaTararaeva/local-shelter-frontend) ; (https://github.com/MariiaTararaeva/local-shelter-backend)

[Deploy Link Frontend](https://your-local-shelter-gooby-petfinder.netlify.app/)
[Deploy Link Backend] (https://local-shelter-backend.onrender.com)

### Slides

[Slides Link](https://prezi.com/view/YLpQ9PUsmWzdB1O8EaGO/)

## Future Enhancements

- Improve code structure and separation for better maintainability.
- Add more routes and menu paths for seamless navigation.
- User Authentication: Allow users to sign up, log in, and manage their own pet listings.
- Advanced Search Filters: Enable filtering by location, age, breed, and other criteria.
- Add an "Adopted" tag on the pet list and a form option to mark a pet as adopted.
- Add a "Pending" status for pets that are unavailable but not yet adopted.
- Enable users to upload videos of their pets.
- Enhance the search functionality to support multiple filters simultaneously (e.g., "cat" and "male").
- Adoption Stories: Showcase successful pet adoptions to inspire and engage users.
