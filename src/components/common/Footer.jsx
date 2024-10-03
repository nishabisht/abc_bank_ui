import React from "react";

// Create a footer for the bank UI
function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <span className="">© 2023 ABC Bank. All rights reserved.</span>
        <nav className="float-right">
          <a href="/privacy-policy" className="text-white mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className="text-white mx-2">Terms of Service</a>
          <a href="/contact" className="text-white mx-2">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;