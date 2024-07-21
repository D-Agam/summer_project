import React, { useState } from 'react';

const Security = () => {
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [currentPasswordValidation, setCurrentPasswordValidation] = useState('');
    const [newPasswordValidation, setNewPasswordValidation] = useState('');
    const [confirmPasswordValidation, setConfirmPasswordValidation] = useState('');

    const handleContainerClick = () => {
        setShowChangePassword(true);
    };

    const handleCancelClick = () => {
        setShowChangePassword(false);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setCurrentPasswordValidation('');
        setNewPasswordValidation('');
        setConfirmPasswordValidation('');
    };

    const handleSubmitClick = () => {
        setCurrentPasswordValidation('');
        setNewPasswordValidation('');
        setConfirmPasswordValidation('');

        let isValid = true;

        if (currentPassword === '') {
            isValid = false;
            setCurrentPasswordValidation('Current password is required.');
        }

        if (newPassword.length < 8) {
            isValid = false;
            setNewPasswordValidation('New password must be at least 8 characters long.');
        } else if (!/[0-9]/.test(newPassword) || !/[A-Z]/.test(newPassword)) {
            isValid = false;
            setNewPasswordValidation('New password must contain at least 1 number and 1 UPPER case letter.');
        } else if (/(.)\1{2,}/.test(newPassword)) {
            isValid = false;
            setNewPasswordValidation('New password must not contain sequences or repeated characters.');
        }

        if (confirmPassword !== newPassword) {
            isValid = false;
            setConfirmPasswordValidation('Confirm password must match the new password.');
        }

        if (isValid) {
            const payload = {
                currentPassword: currentPassword,
                newPassword: newPassword
            };

            fetch('http://localhost:8578/api/v1/customers/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Password changed successfully!');
                    setShowChangePassword(false);
                    setCurrentPassword('');
                    setNewPassword('');
                    setConfirmPassword('');
                } else {
                    alert('Error: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while changing the password.');
            });
        }
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-3xl">
                <h2 className="text-2xl font-bold mb-4 pl-8">Privacy & Security</h2>
                {showChangePassword && (
                    <p className="text-sm pl-8 text-gray-600 mt-4">Keep your details safe, you will need them later.</p>
                )}

                {!showChangePassword && (
                    <div className="container bg-white p-8 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
                         onClick={handleContainerClick}>
                        <h4 className="text-lg font-semibold mb-1">Change password</h4>
                        <p className="text-gray-800">Update your password to keep your account safe and protect your data</p>
                    </div>
                )}

                {showChangePassword && (
                    <div className="bg-white p-8 rounded-lg shadow-lg mt-4 space-y-4">
                        <h4 className="text-lg font-semibold mb-1">Please enter your current password</h4>
                        <input type="password" placeholder="Current Password" value={currentPassword}
                               onChange={(e) => setCurrentPassword(e.target.value)}
                               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        <p className="text-red-600 text-sm">{currentPasswordValidation}</p>
                        <hr className="my-4"/>
                        <p>Make sure your password details are not known by others or publicly available on social networking sites.</p>
                        <input type="password" placeholder="New Password" value={newPassword}
                               onChange={(e) => setNewPassword(e.target.value)}
                               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        <p className="text-red-600 text-sm">{newPasswordValidation}</p>
                        <ul className="list-disc list-inside text-gray-800 space-y-1">
                            <li>Must be at least 8 characters long</li>
                            <li>Contain at least 1 number and 1 UPPER case letter</li>
                            <li>Not contain sequences or repeated characters such as 1234, 3333, 2222, etc.</li>
                        </ul>
                        <input type="password" placeholder="Confirm Password" value={confirmPassword}
                               onChange={(e) => setConfirmPassword(e.target.value)}
                               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        <p className="text-red-600 text-sm">{confirmPasswordValidation}</p>
                        <ul className="list-disc list-inside text-gray-800">
                            <li>Please enter the same password</li>
                        </ul>
                        <div className="flex justify-end space-x-4 mt-4">
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                                    onClick={handleCancelClick}>
                                Cancel
                            </button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded shadow"
                                    onClick={handleSubmitClick}>
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Security;
