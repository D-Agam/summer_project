// EmploymentDetails.jsx

import React, { useState } from 'react';
// import './EmploymentDetails.css'; // Add Tailwind CSS styles

const EmploymentDetails = () => {
    const [employmentStatus, setEmploymentStatus] = useState('');

    const resetButtonColors = () => {
        const buttons = document.querySelectorAll('.employment_status input[type="button"]');
        buttons.forEach(button => {
            button.classList.remove('bg-blue-200');
        });
    };

    const openFte = (type) => {
        resetButtonColors();
        document.getElementById(type).classList.add('bg-blue-200');
        document.getElementById('contfte').classList.remove('hidden');
        document.getElementById('contre').classList.add('hidden');
        document.getElementById('contst').classList.add('hidden');
        document.getElementById('contnie').classList.add('hidden');
        setEmploymentStatus(type);
    };

    const openRetired = () => {
        resetButtonColors();
        document.getElementById('re').classList.add('bg-blue-200');
        document.getElementById('contfte').classList.add('hidden');
        document.getElementById('contre').classList.remove('hidden');
        document.getElementById('contst').classList.add('hidden');
        document.getElementById('contnie').classList.add('hidden');
        setEmploymentStatus('re');
    };

    const openStudent = () => {
        resetButtonColors();
        document.getElementById('st').classList.add('bg-blue-200');
        document.getElementById('contfte').classList.add('hidden');
        document.getElementById('contre').classList.add('hidden');
        document.getElementById('contnie').classList.add('hidden');
        document.getElementById('contst').classList.remove('hidden');
        setEmploymentStatus('st');
    };

    const openNotEmployed = () => {
        resetButtonColors();
        document.getElementById('nie').classList.add('bg-blue-200');
        document.getElementById('contst').classList.add('hidden');
        document.getElementById('contnie').classList.remove('hidden');
        document.getElementById('contfte').classList.add('hidden');
        document.getElementById('contre').classList.add('hidden');
        setEmploymentStatus('nie');
    };

    const submitInfo = () => {
        if (!employmentStatus) {
            alert('Please select your employment status.');
            return;
        }

        let industry, occupation, income;
        switch (employmentStatus) {
            case 'fte':
            case 'pte':
            case 'se':
                industry = document.getElementById('fteIndustry').value;
                occupation = document.getElementById('fteOccupation').value;
                income = document.querySelector('input[name="fteIncome"]:checked');
                break;
            case 're':
                industry = document.getElementById('reIndustry').value;
                occupation = document.getElementById('reOccupation').value;
                income = document.querySelector('input[name="reIncome"]:checked');
                break;
            case 'st':
                industry = document.getElementById('stField').value;
                occupation = 'student';
                income = document.querySelector('input[name="stIncome"]:checked');
                break;
            case 'nie':
                industry = 'none';
                occupation = 'none';
                income = document.querySelector('input[name="nieIncome"]:checked');
                break;
            default:
                break;
        }

        if (!industry || !occupation || !income) {
            alert('Please fill out all the fields.');
            return;
        }

        alert('Your information is submitted successfully.');
    };

    return (
        <div className="flex p-4 justify-center items-center min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
                <h4 className="text-xl font-bold mb-4">07 Employment details</h4>
                <hr className="mb-4" />
                <h5 className="text-lg font-semibold mb-2">What's your employment status?</h5>
                <p className="mb-4 text-gray-600">We ask this to improve security on our account</p>
                <ul className="flex flex-wrap gap-4 mb-6 employment_status">
                    <li>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="fte" onClick={() => openFte('fte')}>
                            Full Time Employment
                        </button>
                    </li>
                    <li>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="pte" onClick={() => openFte('pte')}>
                            Part Time Employment
                        </button>
                    </li>
                    <li>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="se" onClick={() => openFte('se')}>
                            Self Employment
                        </button>
                    </li>
                    <li>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="re" onClick={openRetired}>
                            Retired
                        </button>
                    </li>
                    <li>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="st" onClick={openStudent}>
                            Student
                        </button>
                    </li>
                    <li>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="nie" onClick={openNotEmployed}>
                            Not in Employment
                        </button>
                    </li>
                </ul>

                <div className="hidden" id="contfte">
                    <h4 className="text-lg font-semibold mb-2">What industry do you work for?</h4>
                    <p className="mb-2 text-gray-600">Please select the closest option to your industry.</p>
                    <select name="industry" id="fteIndustry" className="block w-full mb-4 p-2 border border-gray-300 rounded">
                        <option value="">Select an industry</option>
                        <option value="medicine">Medicine</option>
                        <option value="engineering">Engineering</option>
                        <option value="teaching">Teaching</option>
                        <option value="it">Information Technology</option>
                        <option value="finance">Finance</option>
                        <option value="law">Law</option>
                    </select>
                    <h4 className="text-lg font-semibold mb-2">What's your occupation?</h4>
                    <p className="mb-2 text-gray-600">Please select the closest option to your occupation.</p>
                    <select name="occupation" id="fteOccupation" className="block w-full mb-4 p-2 border border-gray-300 rounded">
                        <option value="">Select an occupation</option>
                        <option value="doctor">Doctor</option>
                        <option value="engineer">Engineer</option>
                        <option value="teacher">Teacher</option>
                        <option value="developer">Developer</option>
                        <option value="accountant">Accountant</option>
                        <option value="lawyer">Lawyer</option>
                    </select>
                    <h4 className="text-lg font-semibold mb-2">What's your annual income?</h4>
                    <p className="mb-4 text-gray-600">This includes your salary, benefits, investments or other income you may receive.</p>
                    <ul className="flex flex-wrap gap-4" id="fteIncome">
                        <li>
                            <input type="radio" name="fteIncome" value="0-299999" id="fteIncome1" />
                            <label htmlFor="fteIncome1" className="ml-2">Rs 0-2,99,999</label>
                        </li>
                        <li>
                            <input type="radio" name="fteIncome" value="300000-699999" id="fteIncome2" />
                            <label htmlFor="fteIncome2" className="ml-2">Rs 3,00,000-6,99,999</label>
                        </li>
                        <li>
                            <input type="radio" name="fteIncome" value="700000-1499999" id="fteIncome3" />
                            <label htmlFor="fteIncome3" className="ml-2">Rs 7,00,000-14,99,999</label>
                        </li>
                        <li>
                            <input type="radio" name="fteIncome" value="1500000-2999999" id="fteIncome4" />
                            <label htmlFor="fteIncome4" className="ml-2">Rs 15,00,000-29,99,999</label>
                        </li>
                        <li>
                            <input type="radio" name="fteIncome" value="3000000+" id="fteIncome5" />
                            <label htmlFor="fteIncome5" className="ml-2">Rs 30,00,000+</label>
                        </li>
                    </ul>
                </div>

                <div className="hidden" id="contre">
                    <h4 className="text-lg font-semibold mb-2">What industry did you work for?</h4>
                    <p className="mb-2 text-gray-600">Please select the closest option to your industry.</p>
                    <select name="industry" id="reIndustry" className="block w-full mb-4 p-2 border border-gray-300 rounded">
                        <option value="">Select an industry</option>
                        <option value="medicine">Medicine</option>
                        <option value="engineering">Engineering</option>
                        <option value="teaching">Teaching</option>
                        <option value="it">Information Technology</option>
                        <option value="finance">Finance</option>
                        <option value="law">Law</option>
                    </select>
                    <h4 className="text-lg font-semibold mb-2">What was your occupation?</h4>
                    <p className="mb-2 text-gray-600">Please select the closest option to your occupation.</p>
                    <select name="occupation" id="reOccupation" className="block w-full mb-4 p-2 border border-gray-300 rounded">
                        <option value="">Select an occupation</option>
                        <option value="doctor">Doctor</option>
                        <option value="engineer">Engineer</option>
                        <option value="teacher">Teacher</option>
                        <option value="developer">Developer</option>
                        <option value="accountant">Accountant</option>
                        <option value="lawyer">Lawyer</option>
                    </select>
                    <h4 className="text-lg font-semibold mb-2">What's your annual income (pension)?</h4>
                    <p className="mb-4 text-gray-600">This includes your salary, benefits, investments or other income you may receive.</p>
                    <ul className="flex flex-wrap gap-4" id="reIncome">
                        <li>
                            <input type="radio" name="reIncome" value="0-299999" id="reIncome1" />
                            <label htmlFor="reIncome1" className="ml-2">Rs 0-2,99,999</label>
                        </li>
                        <li>
                            <input type="radio" name="reIncome" value="300000-699999" id="reIncome2" />
                            <label htmlFor="reIncome2" className="ml-2">Rs 3,00,000-6,99,999</label>
                        </li>
                        <li>
                            <input type="radio" name="reIncome" value="700000-1499999" id="reIncome3" />
                            <label htmlFor="reIncome3" className="ml-2">Rs 7,00,000-14,99,999</label>
                        </li>
                        <li>
                            <input type="radio" name="reIncome" value="1500000-2999999" id="reIncome4" />
                            <label htmlFor="reIncome4" className="ml-2">Rs 15,00,000-29,99,999</label>
                        </li>
                        <li>
                            <input type="radio" name="reIncome" value="3000000+" id="reIncome5" />
                            <label htmlFor="reIncome5" className="ml-2">Rs 30,00,000+</label>
                        </li>
                    </ul>
                </div>

                <div className="hidden" id="contst">
                    <h4 className="text-lg font-semibold mb-2">What's your field of study?</h4>
                    <p className="mb-2 text-gray-600">Please select the closest option to your field of study.</p>
                    <select name="field" id="stField" className="block w-full mb-4 p-2 border border-gray-300 rounded">
                        <option value="">Select a field</option>
                        <option value="medicine">Medicine</option>
                        <option value="engineering">Engineering</option>
                        <option value="teaching">Teaching</option>
                        <option value="it">Information Technology</option>
                        <option value="finance">Finance</option>
                        <option value="law">Law</option>
                    </select>
                    <h4 className="text-lg font-semibold mb-2">What's your annual income (if any)?</h4>
                    <p className="mb-4 text-gray-600">This includes any salary, benefits, investments or other income you may receive.</p>
                    <ul className="flex flex-wrap gap-4" id="stIncome">
                        <li>
                            <input type="radio" name="stIncome" value="0-299999" id="stIncome1" />
                            <label htmlFor="stIncome1" className="ml-2">Rs 0-2,99,999</label>
                        </li>
                        <li>
                            <input type="radio" name="stIncome" value="300000-699999" id="stIncome2" />
                            <label htmlFor="stIncome2" className="ml-2">Rs 3,00,000-6,99,999</label>
                        </li>
                        <li>
                            <input type="radio" name="stIncome" value="700000-1499999" id="stIncome3" />
                            <label htmlFor="stIncome3" className="ml-2">Rs 7,00,000-14,99,999</label>
                        </li>
                        <li>
                            <input type="radio" name="stIncome" value="1500000-2999999" id="stIncome4" />
                            <label htmlFor="stIncome4" className="ml-2">Rs 15,00,000-29,99,999</label>
                        </li>
                        <li>
                            <input type="radio" name="stIncome" value="3000000+" id="stIncome5" />
                            <label htmlFor="stIncome5" className="ml-2">Rs 30,00,000+</label>
                        </li>
                    </ul>
                </div>

                <div className="hidden" id="contnie">
                    <h4 className="text-lg font-semibold mb-2">What's your annual income?</h4>
                    <p className="mb-4 text-gray-600">This includes any salary, benefits, investments or other income you may receive.</p>
                    <ul className="flex flex-wrap gap-4" id="nieIncome">
                        <li>
                            <input type="radio" name="nieIncome" value="0-299999" id="nieIncome1" />
                            <label htmlFor="nieIncome1" className="ml-2">Rs 0-2,99,999</label>
                        </li>
                        <li>
                            <input type="radio" name="nieIncome" value="300000-699999" id="nieIncome2" />
                            <label htmlFor="nieIncome2" className="ml-2">Rs 3,00,000-6,99,999</label>
                        </li>
                        <li>
                            <input type="radio" name="nieIncome" value="700000-1499999" id="nieIncome3" />
                            <label htmlFor="nieIncome3" className="ml-2">Rs 7,00,000-14,99,999</label>
                        </li>
                        <li>
                            <input type="radio" name="nieIncome" value="1500000-2999999" id="nieIncome4" />
                            <label htmlFor="nieIncome4" className="ml-2">Rs 15,00,000-29,99,999</label>
                        </li>
                        <li>
                            <input type="radio" name="nieIncome" value="3000000+" id="nieIncome5" />
                            <label htmlFor="nieIncome5" className="ml-2">Rs 30,00,000+</label>
                        </li>
                    </ul>
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block ml-auto" onClick={submitInfo}>
                    Continue
                </button>
            </div>
        </div>
    );
};

export default EmploymentDetails;
