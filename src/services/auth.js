// auth.js

// Mock user database
const users = [];

// Function to handle user login
export const login = (username, password) => {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  } else {
    return false;
  }
};

// Function to handle user registration
export const register = (username, password, email) => {
  const userExists = users.some(
    (user) => user.username === username || user.email === email
  );
  if (!userExists) {
    const newUser = { username, password, email };
    users.push(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    return true;
  } else {
    return false;
  }
};

// Function to check if user is authenticated
export const isAuthenticated = () => {
  return localStorage.getItem("user") !== null;
};

// Function to logout user
export const logout = () => {
  localStorage.removeItem("user");
};
