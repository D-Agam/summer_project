import React, { useState, useRef } from 'react';

const DocumentUpload = () => {
    const [identityDocument, setIdentityDocument] = useState(null);
    const [accountDocument, setAccountDocument] = useState(null);

    const acceptedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    const maxSize = 5 * 1024 * 1024;

    const validateFile = (file) => {
        if (!acceptedTypes.includes(file.type)) {
            alert('Invalid file type. Please upload a PDF, JPG, JPEG, or PNG file.');
            return false;
        }
        if (file.size > maxSize) {
            alert('File is too large. Please upload a file smaller than 5MB.');
            return false;
        }
        return true;
    };

    const handleFileChange = (event, setDocument) => {
        const file = event.target.files[0];
        if (file && validateFile(file)) {
            setDocument(file);
        }
    };

    const handleDrop = (event, setDocument) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file && validateFile(file)) {
            setDocument(file);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!identityDocument || !accountDocument) {
            alert('Please upload both documents before submitting.');
            return;
        }
        alert('Form submitted! File upload simulation complete.');
    };

    const UploadArea = ({ document, setDocument, title }) => {
        const fileInputRef = useRef();

        return (
            <div
                className="p-10 text-center border-2 border-gray-300 border-dashed rounded-md cursor-pointer"
                onDrop={(e) => handleDrop(e, setDocument)}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current.click()}
            >
                {document ? (
                    <p className="text-gray-600">{document.name}</p>
                ) : (
                    <>
                        <p className="text-gray-600">Select a document</p>
                        <p className="text-sm text-gray-500">Or drag and drop one file here</p>
                    </>
                )}
                <input
                    type="file"
                    id={`fileInput${title}`}
                    ref={fileInputRef}
                    className="hidden"
                    onChange={(e) => handleFileChange(e, setDocument)}
                />
            </div>
        );
    };

    return (
        <div className="max-w-3xl p-5 mx-auto">
            <div className="p-5 bg-gray-100 rounded-lg">
                <h1 className="mb-1 text-2xl font-bold text-pink-500">Document upload</h1>
                <p className="mb-5 text-gray-600">We just need a little more information from you.</p>

                <div className="p-4 mb-5 bg-pink-100 border-l-4 border-pink-500">
                    <h2 className="mb-1 font-semibold text-pink-500">We need some documents from you</h2>
                    <p className="text-gray-700">
                        Please upload one document from each section below for verification.
                    </p>
                </div>

                <div className="flex justify-between mb-5">
                    <div className="w-5/12">
                        <h3 className="mb-1 text-sm font-semibold text-gray-600">IDENTITY VERIFICATION</h3>
                        <ul className="pl-5 text-sm text-gray-600 list-disc">
                            <li>Indian Passport (Not expired)</li>
                            <li>Non-Indian Passport - also provide a copy of your Residence Permit issued by Indian Home Office (Not expired)</li>
                            <li>Indian Driving Licence (Full or provisional, not expired)</li>
                            <li>Indian Aadhaar Card</li>
                        </ul>
                    </div>
                    <div className="w-5/12">
                        <h3 className="mb-1 text-sm font-semibold text-gray-600">NOMINATED ACCOUNT VERIFICATION</h3>
                        <ul className="pl-5 text-sm text-gray-600 list-disc">
                            <li>Bank statement/Building Society statement (Last 3 months)</li>
                        </ul>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-5 bg-white rounded-lg">
                    <h2 className="mb-3 text-xl font-semibold">IDENTITY VERIFICATION</h2>
                    <label htmlFor="documentType" className="block mb-1 text-sm text-gray-600">SELECT DOCUMENT TYPE</label>
                    <select id="documentType" name="documentType" className="w-full p-2 mb-5 border border-gray-300 rounded">
                        <option value="">Indian Passport (Not expired)</option>
                        <option value="">Non-Indian Passport</option>
                        <option value="">Indian Driving Licence (Full or provisional, not expired)</option>
                        <option value="">Indian Aadhaar Card</option>
                    </select>

                    <UploadArea
                        document={identityDocument}
                        setDocument={setIdentityDocument}
                        title="Identity"
                    />

                    <p className="mt-1 text-xs text-gray-500">Accepted formats: PDF, JPG, JPEG, PNG</p>
                    <p className="mb-5 text-xs text-gray-500">Max file size: 5MB</p>

                    <br></br>

                    <h2 className="mb-3 text-xl font-semibold">NOMINATED ACCOUNT VERIFICATION</h2>
                    <label htmlFor="accountDocumentType" className="block mb-1 text-sm text-gray-600">SELECT DOCUMENT TYPE</label>
                    <select id="accountDocumentType" name="accountDocumentType" className="w-full p-2 mb-5 border border-gray-300 rounded">
                        <option value="">Bank statement/Building Society statement (Last 3 months)</option>
                    </select>

                    <UploadArea
                        document={accountDocument}
                        setDocument={setAccountDocument}
                        title="Account"
                    />

                    <p className="mt-1 text-xs text-gray-500">Accepted formats: PDF, JPG, JPEG, PNG</p>
                    <p className="mb-5 text-xs text-gray-500">Max file size: 5MB</p>

                    <button type="submit" className="float-right px-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600">Continue</button>
                    <br />
                    <br />
                </form>
            </div>
        </div>
    );
};

export default DocumentUpload;
