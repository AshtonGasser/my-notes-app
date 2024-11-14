# Notes CRUD Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

this project is a simple, user-friendly notes application built as a CRUD (Create, Read, Update, Delete) app using React and local storage. The app allows users to sign up, log in, and manage notes. It’s designed to showcase skills in frontend development, state management, and persistence with local storage

**Features**

    - User Authentication: Simulates user authentication with local storage, allowing users to sign up and log in.
    
    - Create Notes: Add new notes with a title, content, and a timestamp for easy tracking.

    - Read Notes: View a list of notes, displaying titles, content, and creation times.

    - Update Notes: Edit existing notes, keeping details like timestamps intact.

    - Delete Notes: Remove notes individually, with instant UI updates and persistence.

    - Local Storage: Data persistence through local storage to retain notes across sessions.

***Project Structure***

The app was structured with modularity and scalability in mind:
    - Authentication Component: Manages sign-up and login with conditional rendering based on authentication state.

    - Notes Component: Handles the core CRUD functionality for notes.

    - Edit Note Modal: Provides inline editing of notes within the Notes component.

    - Responsive UI: Styled using Material-UI for a clean, accessible design.

## Technologies Used

    - React: Functional components and hooks for managing UI and state.

    - Material-UI (MUI): Styled components for an accessible, polished UI.

    - Local Storage: Client-side persistence to ensure notes remain between sessions.

## How to Run the Project

1. Clone the repository:

git clone [https://github.com/ashton/notes-crud-app.git]

2. Navigate to the project directory:

cd my-notes-app

Install dependencies:

- npm install

4. Run the app in development mode:

npm start

5.	Open the app in your browser at [http://localhost:3000] to start managing notes.

### Usage

    1. Sign Up: Create an account by entering an email and password.

    2. Log In: Access the notes app by logging in with the registered account.

    3. Add Notes: Click on “Add Note” to create a new note with a title and content.

    4. Edit Notes: Use the edit icon on each note to modify its title or content.

    5. Delete Notes: Remove notes individually by clicking the delete icon.

    6. Logout: Use the logout button to clear the session.

***Future Enhancements***

    • Backend Integration: Replace local storage with a backend API for centralized data storage.

    • Enhanced Authentication: Add secure, token-based authentication.

    • Search and Filter: Implement search and filter features for easier note management.