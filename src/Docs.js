import React from 'react';

const Docs = ({ documentsRead, handleDocumentClick }) => {
  const documentInfo = {
    terms: {
      title: "Terms and Conditions",
      description: "Understand the terms and conditions of our banking services, including account usage policies, fees, and customer responsibilities.",
      path: "/terms.pdf"
    },
    privacy: {
      title: "Privacy Policy",
      description: "Learn how we protect your personal information and ensure your privacy. This document outlines our data collection, use, and sharing practices.",
      path: "/privacy.pdf"
    },
    fee: {
      title: "Fee Schedule",
      description: "Review the fees associated with our various banking services. This document provides detailed information on charges for transactions, account maintenance, and other services.",
      path: "/fee.pdf"
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {['terms', 'privacy', 'fee'].map((docType) => (
        <div
          key={docType}
          className="bg-white p-6 rounded-lg shadow-md relative"
          onClick={() => handleDocumentClick(docType)}
          style={{ cursor: 'pointer' }}
        >
          <h3 className="text-xl font-bold mb-4">{documentInfo[docType].title}</h3>
          <p className="mb-4">{documentInfo[docType].description}</p>
          <a
            href={documentInfo[docType].path}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read and Review
          </a>
          {documentsRead[docType] && (
            <span className="absolute top-4 right-4 text-green-500">
              <svg className="w-6 h-6" viewBox="0 0 20 20">
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Docs;
