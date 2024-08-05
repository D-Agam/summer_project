import React, { useState, useEffect } from 'react';
import Docs from '../Docs';

const Documents = () => {
  const [documentsRead, setDocumentsRead] = useState({
    terms: false,
    privacy: false,
    fee: false,
  });

  const handleDocumentClick = (docType) => {
    setDocumentsRead((prevDocs) => ({
      ...prevDocs,
      [docType]: true,
    }));
  };

  useEffect(() => {
    const allRead = Object.values(documentsRead).every((value) => value);
    const startAppButton = document.getElementById('start-app');
    if (allRead) {
      startAppButton.classList.remove('cursor-not-allowed', 'bg-gray-300', 'text-gray-500');
      startAppButton.classList.add('cursor-pointer', 'bg-blue-500', 'text-white');
      startAppButton.href = '#application';
    } else {
      startAppButton.classList.add('cursor-not-allowed', 'bg-gray-300', 'text-gray-500');
      startAppButton.classList.remove('cursor-pointer', 'bg-blue-500', 'text-white');
      startAppButton.removeAttribute('href');
    }
  }, [documentsRead]);

  return (
    <section id="documents" className="bg-gray-200 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-900">
          Important documents to read and review
        </h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-6">
          Please read and review the following documents carefully to be able to move further.
        </h3>
        <Docs documentsRead={documentsRead} handleDocumentClick={handleDocumentClick} />
        <a 
          id="start-app"  href="#application"
          className="block mt-8 py-2 px-4 rounded-full cursor-not-allowed bg-gray-300 text-gray-500 w-48 mx-auto">
          Start Application
        </a>
      </div>
    </section>
  );
};

export default Documents;
