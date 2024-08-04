# PokeRanker

**PokeRanker** is an interactive web application that allows users to rate any of the original 151 Pokémon. Users can give ratings based on their personal opinions, ranging from 1 to 5. The app is designed to provide a fun experience for Pokémon enthusiasts while demonstrating CRUD operations with modern web technologies.

## Project Overview

PokeRanker consists of a frontend developed with **React** and **TypeScript**, and a backend built with **Express.js**. The application utilizes **Auth0** for secure authentication, with user information stored in context. The UI is crafted using **ChakraUI**, and **React Hook Form** is used for form control. The backend currently uses vanilla JavaScript but will be migrated to TypeScript in the future. An **SQLite** database is used for storing Pokémon and ratings data.

## Target Audience

This project is for:
- Pokémon fans interested in sharing their opinions on the original 151 Pokémon.
- Developers looking to explore CRUD applications with a modern tech stack.
- Anyone interested in experimenting with authentication and database interaction in web applications.

## Key Features

- **Secure Authentication**: Utilizes Auth0 for user authentication, ensuring secure access to the app.
- **Single Page Application**: Built as a SPA, providing fast and seamless navigation.
- **Interactive Ratings**: Users can rate Pokémon from 1 to 5 and see aggregated ratings.
- **Responsive Design**: Uses ChakraUI for a visually appealing and responsive interface.
- **API Endpoints**: Several endpoints are available to fetch Pokémon data and user ratings.

## Installation Instructions

1. **Clone the Repository**

2. **Install Dependencies**:
   - Frontend:
     ```bash
     cd client
     npm install
     ```
   - Backend:
     ```bash
     cd backend
     npm install
     ```

3. **Setup Auth0**:
   - Create a `.env` file in the `client/src` directory with the following:
     ```env
     VITE_AUTH0_DOMAIN=your_auth0_domain
     VITE_AUTH0_CLIENT_ID=your_auth0_client_id
     ```

4. **Initialize Database**:
   - Run the `loadScript.js` script in the backend to set up the database:
     ```bash
     cd backend
     node loadScript.js
     ```
   - This pulls from the PokeAPI and sets up your database formatted correctly for the Pokemon and Ratings.

5. **Run the Application**:
   - Start the backend server:
     ```bash
     npm start
     ```
   - Start the frontend development server:
     ```bash
     npm run dev
     ```

## Usage Examples

PokeRanker can be adapted for various scenarios where aggregated ratings are needed. Here are a few examples:

- **Educational Use**: Teachers could modify the app to collect student feedback on course materials, though refactoring the database schema and scripts would be necessary.
- **Corporate Use**: Businesses could use it internally to rate aspects of professional development courses. The backend APIs prevent spam ratings, so employees would update existing ratings rather than creating new ones.

Although repurposing the app for other uses requires some development work, the existing APIs provide a robust foundation.

## Contributing Guidelines

PokeRanker is intended to be a solo project, but contributions are welcome. If you'd like to fork or contribute, please ensure that any changes are thoroughly documented in the pull request for review.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you see fit.

## Additional Information

### Tech Stack

- **Frontend**:
  - React
  - TypeScript
  - Auth0 for authentication
  - ChakraUI for the UI components
  - React Hook Form for form management

- **Backend**:
  - Express.js
  - SQLite for database management
  - JavaScript (with plans to migrate to TypeScript)

### Contact

For more information or inquiries, please contact me via GitHub.

---

### Notes

1. **Auth0 Details**: Ensure to replace `your_auth0_domain` and `your_auth0_client_id` with actual values from your Auth0 account.
