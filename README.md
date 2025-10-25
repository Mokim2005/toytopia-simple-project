# ToyTopia

## Project Purpose

ToyTopia is a vibrant and playful online marketplace for kids' toys, designed to help families discover and support local toy sellers. Users can log in, browse toys, view detailed information, leave feedback or ratings, and interact with a responsive and engaging interface.


## Live URL

[Your Live Project URL Here]

Open terminal (or command prompt) on your computer.

Navigate to the folder where you want to save the project, e.g., Desktop:

bash
Copy code
cd Desktop
Clone the repository using:

bash
Copy code
git clone https://github.com/username/toytopia.git
Replace the URL with your actual GitHub repository link.

This will create a folder called toytopia with all the project files.

Move inside the project folder:

bash
Copy code
cd toytopia
2️⃣ How to Install Packages
Most modern web projects use npm packages for additional functionality. Installing packages makes the project run properly on your machine.

Steps:

Make sure you are inside the project folder.

Run:

bash
Copy code
npm install
This reads the package.json file and installs all required packages.

After this, a node_modules folder will appear in your project (contains all the packages).

3️⃣ How to Start the Project
To run the project in your local browser:

bash
Copy code
npm run dev
This will start the development server.

Open your browser and go to the URL shown in terminal (usually http://localhost:5173).

4️⃣ Functionality Description (ToyTopia)
Authentication: Login/register using email/password and Google; protected routes require login.

Home Page: Slider, Popular Toys section, and extra sections.

Toy Details Page: Shows detailed toy info, form for “Try Now”. Protected route.

Profile Page: Users can view and update their name and photoURL.

Navbar & Footer: Present on all pages, responsive, shows user info if logged in.

Dynamic Titles: Each page has a custom title.

Password Validation: Enforces uppercase, lowercase, minimum length; toggleable visibility.

Animations & Slider: Swiper slider for images, AOS for scroll animations.

Notifications: Toast messages and SweetAlert2 alerts for success/error actions.

Forgot Password: Allows users to reset their password via email.

404 Page: Displays if a route does not exist.

Extra Private Route: Additional meaningful protected page.

## Key Features

- **User Authentication**: Email/password and Google login integration using Firebase.
- **Protected Routes**: Access private pages only after login, with persistent user session on reload.
- **Navbar & Footer**: Fully responsive navigation and footer with active routes, user profile display, and login/logout functionality.
- **Home Page Sections**: Slider (using Swiper), Popular Toys section, and two additional sections.
- **Toy Details Page**: Protected route with detailed toy info and a “Try Now” form.
- **Profile Page**: Users can view and edit name and photoURL using Firebase updateProfile().
- **Dynamic Titles**: Each page has a dynamic document title.
- **Password Validation**: Registration form enforces uppercase, lowercase, and minimum length rules with toggleable password visibility.
- **Notifications & Alerts**: Success and error messages using React Toastify and SweetAlert2.
- **404 Page**: Custom page for routes not found.
- **Extra Private Route**: An additional meaningful protected page for enhanced functionality.
- **Animations & Slider**: Interactive elements implemented with AOS animations and Swiper slider.
- **Forgot Password**: Fully functional reset password workflow integrated with Firebase.

## Technologies & NPM Packages Used

- **React** (`^19.1.1`) – Frontend framework
- **React Router** (`^7.9.4`) – Routing for pages
- **Firebase** (`^12.4.0`) – Authentication and backend services
- **TailwindCSS** (`^4.1.15`) – Styling
- **@tailwindcss/vite** (`^4.1.15`) – Tailwind integration with Vite
- **AOS** (`^2.3.4`) – Scroll animations
- **Framer Motion** (`^12.23.24`) – Advanced animations
- **React Icons** (`^5.5.0`) – Icon library
- **React Toastify** (`^11.0.5`) – Notifications
- **SweetAlert2** (`^11.26.3`) – Pop-up alerts
- **Swiper** (`^12.0.3`) – Sliders and carousels
- **Recharts** (`^3.3.0`) – Chart and data visualization

## JSON Data

Toy data is stored in JSON format and images are hosted on external platforms like imgbb/postimages. Example structure:

```json
{
  "toyId": 1,
  "toyName": "Lego Classic Bricks",
  "sellerName": "Toys R Us Local",
  "sellerEmail": "contact@toysruslocal.com",
  "price": 49.99,
  "rating": 4.7,
  "availableQuantity": 75,
  "description": "A timeless set of colorful Lego bricks that encourages creativity and problem-solving. Kids can build anything they imagine, from houses to vehicles.",
  "pictureURL": "https://cdn.pixabay.com/photo/2016/03/31/20/11/lego-1297582_1280.png",
  "subCategory": "Building Blocks"
}
```
