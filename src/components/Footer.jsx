import React from "react";
import { FaLink, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white fixed-bottom">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <p className="mb-0">
              <span>&copy; 2024 Express Engine. Created by - </span>
              <a
                href="https://www.linkedin.com/in/harsh-yadav-b49b0a140/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Harsh Yadav
              </a>
            </p>
          </div>

          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            <a href="https://www.linkedin.com/in/harsh-yadav-b49b0a140/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-light me-3" />
            </a>
            <a href="https://my-portfolio-react-6qb3.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FaLink className="text-light me-3" />
            </a>
            <a href="https://github.com/harshy1620" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-light" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
