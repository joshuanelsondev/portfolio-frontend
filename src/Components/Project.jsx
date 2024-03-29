// Project.jsx

import PropTypes from "prop-types";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";

export default function Project({ project }) {
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleError = (event) => {
    event.target.src = `${project.placeholder_image}`
    setShowErrorMessage(true);
  }


  return (
    <div className=" z-10 relative">
      {showErrorMessage && (
        <p aria-label={`Error loading ${project.title} project`} className='text-darkGray dark:text-primary font-semibold text-center mb-2'>Error Loading - {project.title}</p>
      )}
      <img 
        src={`${project.image}`} 
        alt={`${project.title} - Error Loading`} 
        onError={handleError}
        className="rounded-md text-primary h-60 w-[350px] sm:w-[400px] max-w-[600px] box-border" 
      />
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    placeholder_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}
