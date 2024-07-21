import { useEffect, useState } from "react";
import ProgressBar from "../component/ProgressBar";

export default function FormPage() {
    const [activeForm, setActiveForm] = useState(1);
    const [progress, setProgress] = useState(0);

    const validateAndContinue = () => {
        if (activeForm === 1) {
            const form = document.getElementById('personalDetailsForm');
            if (form.checkValidity()) {
                setProgress(progress + 25);
                setActiveForm(activeForm + 1);
            } else {
                form.reportValidity(); // Show default validation messages
            }
        } else {
            setProgress(progress + 25);
            setActiveForm(activeForm + 1);
        }
    };

    useEffect(() => {
        const handleSubmitClick = (event) => {
            event.preventDefault();
            const selectedAddress = document.getElementById('searchAddress').value;
            const livedDuration = document.getElementById('livedDuration').value;

            if (selectedAddress && livedDuration !== '-') {
                document.getElementById('selectedAddress').textContent = `Address: ${selectedAddress}\nLived Duration: ${livedDuration}`;
                document.getElementById('selectedAddress').classList.remove('hidden');
                document.getElementById('changeAddressLink').classList.remove('hidden');
                document.getElementById('manualEntryLink').classList.add('hidden');
                document.getElementById('manualEntryText').classList.add('hidden');

                // Hide address and lived duration sections
                document.getElementById('addressSection').classList.add('hidden');
                document.getElementById('livedDurationSection').classList.add('hidden');
            } else {
                alert('Please fill out all fields.');
            }
        };

        const handleChangeAddressClick = (event) => {
            event.preventDefault();
            const selectedAddressElement = document.getElementById('selectedAddress');
            if (!selectedAddressElement) return;

            const selectedAddress = selectedAddressElement.textContent.split('\n')[0].replace('Address: ', '');
            const livedDuration = selectedAddressElement.textContent.split('\n')[1].replace('Lived Duration: ', '');

            // Split the selected address into parts for autofill
            const addressParts = selectedAddress.split(', ');

            const houseBuildingNameChange = document.getElementById('houseBuildingNameChange');
            const streetNameChange = document.getElementById('streetNameChange');
            const townCityChange = document.getElementById('townCityChange');
            const postcodeChange = document.getElementById('postcodeChange');

            if (houseBuildingNameChange) houseBuildingNameChange.value = addressParts[0] || '';
            if (streetNameChange) streetNameChange.value = addressParts[1] || '';
            if (townCityChange) townCityChange.value = addressParts[2] || '';
            if (postcodeChange) postcodeChange.value = addressParts[3] || '';

            const popupFormChange = document.getElementById('popupFormChange');
            if (popupFormChange) popupFormChange.classList.remove('hidden');
        };

        const handleManualEntryClick = (event) => {
            event.preventDefault();
            const popupFormManual = document.getElementById('popupFormManual');
            if (popupFormManual) popupFormManual.classList.remove('hidden');
        };

        const handleManualAddressFormSubmit = (event) => {
            event.preventDefault();
            const houseBuildingName = document.getElementById('houseBuildingNameManual').value;
            const houseBuildingNumber = document.getElementById('houseBuildingNumberManual').value;
            const streetName = document.getElementById('streetNameManual').value;
            const townCity = document.getElementById('townCityManual').value;
            const postcode = document.getElementById('postcodeManual').value;

            if (
                houseBuildingName &&
                houseBuildingNumber &&
                streetName &&
                townCity &&
                postcode
            ) {
                const manualAddress = `${houseBuildingName}, ${houseBuildingNumber}, ${streetName}, ${townCity}, ${postcode}`;
                const selectedAddressElement = document.getElementById('selectedAddress');
                if (selectedAddressElement) {
                    selectedAddressElement.textContent = `Address: ${manualAddress}\nLived Duration: ${document.getElementById('livedDuration').value}`;
                    selectedAddressElement.classList.remove('hidden');
                }
                const changeAddressLink = document.getElementById('changeAddressLink');
                if (changeAddressLink) changeAddressLink.classList.remove('hidden');

                const popupFormManual = document.getElementById('popupFormManual');
                if (popupFormManual) popupFormManual.classList.add('hidden');
                const manualEntryLink = document.getElementById('manualEntryLink');
                if (manualEntryLink) manualEntryLink.classList.add('hidden');
                const manualEntryText = document.getElementById('manualEntryText');
                if (manualEntryText) manualEntryText.classList.add('hidden');

                // Hide address and lived duration sections
                const addressSection = document.getElementById('addressSection');
                const livedDurationSection = document.getElementById('livedDurationSection');
                if (addressSection) addressSection.classList.add('hidden');
                if (livedDurationSection) livedDurationSection.classList.add('hidden');
            } else {
                alert('Please fill out all fields.');
            }
        };

        const handleChangeAddressFormSubmit = (event) => {
            event.preventDefault();
            const houseBuildingName = document.getElementById('houseBuildingNameChange').value;
            const streetName = document.getElementById('streetNameChange').value;
            const townCity = document.getElementById('townCityChange').value;
            const postcode = document.getElementById('postcodeChange').value;

            if (houseBuildingName && streetName && townCity && postcode) {
                const newAddress = `${houseBuildingName}, ${streetName}, ${townCity}, ${postcode}`;
                const selectedAddressElement = document.getElementById('selectedAddress');
                if (selectedAddressElement) {
                    selectedAddressElement.textContent = `Address: ${newAddress}\nLived Duration: ${document.getElementById('livedDuration').value}`;
                    selectedAddressElement.classList.remove('hidden');
                }

                const popupFormChange = document.getElementById('popupFormChange');
                if (popupFormChange) popupFormChange.classList.add('hidden');
            } else {
                alert('Please fill out all fields.');
            }
        };

        const handleCancelManualClick = () => {
            const popupFormManual = document.getElementById('popupFormManual');
            if (popupFormManual) popupFormManual.classList.add('hidden');
        };

        const handleCancelChangeClick = () => {
            const popupFormChange = document.getElementById('popupFormChange');
            if (popupFormChange) popupFormChange.classList.add('hidden');
        };

        const submitButton = document.getElementById('submitButton');
        const changeAddressLink = document.getElementById('changeAddressLink');
        const manualEntryLink = document.getElementById('manualEntryLink');
        const manualAddressForm = document.getElementById('manualAddressForm');
        const changeAddressForm = document.getElementById('changeAddressForm');
        const cancelButtonManual = document.getElementById('cancelButtonManual');
        const cancelButtonChange = document.getElementById('cancelButtonChange');

        if (submitButton) submitButton.addEventListener('click', handleSubmitClick);
        if (changeAddressLink) changeAddressLink.addEventListener('click', handleChangeAddressClick);
        if (manualEntryLink) manualEntryLink.addEventListener('click', handleManualEntryClick);
        if (manualAddressForm) manualAddressForm.addEventListener('submit', handleManualAddressFormSubmit);
        if (changeAddressForm) changeAddressForm.addEventListener('submit', handleChangeAddressFormSubmit);
        if (cancelButtonManual) cancelButtonManual.addEventListener('click', handleCancelManualClick);
        if (cancelButtonChange) cancelButtonChange.addEventListener('click', handleCancelChangeClick);

        return () => {
            if (submitButton) submitButton.removeEventListener('click', handleSubmitClick);
            if (changeAddressLink) changeAddressLink.removeEventListener('click', handleChangeAddressClick);
            if (manualEntryLink) manualEntryLink.removeEventListener('click', handleManualEntryClick);
            if (manualAddressForm) manualAddressForm.removeEventListener('submit', handleManualAddressFormSubmit);
            if (changeAddressForm) changeAddressForm.removeEventListener('submit', handleChangeAddressFormSubmit);
            if (cancelButtonManual) cancelButtonManual.removeEventListener('click', handleCancelManualClick);
            if (cancelButtonChange) cancelButtonChange.removeEventListener('click', handleCancelChangeClick);
        };
    }, [activeForm]);

    return (
        <div className="App">
            <ProgressBar progress={progress} />

            {activeForm === 1 ? (
                <div className="form-container max-w-4xl mx-auto my-10 bg-white p-8 rounded-lg shadow-lg relative" id="container1">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-2">Your savings journey starts here</h1>
                        <h2 className="text-2xl">Set up your Easy access account</h2>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-1">01 Personal Details</h4>
                        <h4 className="text-lg mb-4">Tell us a bit about yourself</h4>
                        <hr className="mb-4" />
                        <h5 className="text-base font-semibold mb-1">Please provide your full legal name</h5>
                        <form id="personalDetailsForm" className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="First name"
                                    required
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <span id="firstNameError" className="text-red-500 text-sm"></span>
                            </div>
                            <h5 className="text-base font-semibold mb-1">MIDDLE NAME (OPTIONAL)</h5>
                            <div>
                                <input
                                    type="text"
                                    id="middleName"
                                    placeholder="Middle name"
                                    pattern="^[A-Za-z]{1,50}$"
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <span id="middleNameError" className="text-red-500 text-sm"></span>
                            </div>
                            <h5 className="text-base font-semibold mb-1">LAST NAME</h5>
                            <div>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Last name"
                                    pattern="^[A-Za-z]{1,50}$"
                                    required
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <span id="lastNameError" className="text-red-500 text-sm"></span>
                            </div>
                            <h5 className="text-base font-semibold mb-1">DATE OF BIRTH (DD/MM/YYYY)</h5>
                            <div>
                                <input
                                    type="date"
                                    id="dob"
                                    max="2023-12-31"
                                    required
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <span id="dobError" className="text-red-500 text-sm"></span>
                            </div>
                        </form>
                    </div>
                </div>
            ) : activeForm === 2 ? (
                <div className="form-container max-w-4xl mx-auto my-10 bg-white p-8 rounded-lg shadow-lg relative">
                    <h1 className="text-2xl font-bold text-left mb-4">Home Address</h1>
                    <p className="text-left mb-4 text-gray-800">
                        Please provide your current India home address:
                    </p>
                    <hr className="mb-4" />
                    <div id="addressSection" className="mb-4">
                        <label htmlFor="searchAddress" className="block text-gray-700 mb-2">
                            SEARCH FOR YOUR ADDRESS:
                        </label>
                        <input
                            type="text"
                            id="searchAddress"
                            name="searchAddress"
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                            placeholder="Type address or postcode"
                        />
                    </div>
                    <div
                        id="selectedAddress"
                        className="w-full p-2 border border-gray-300 rounded mt-2 whitespace-pre-line hidden"
                    ></div>
                    <p id="manualEntryText" className="text-left mb-4 text-red-500">
                        Please enter an address or enter manually using the link below
                    </p>
                    <a
                        href="#"
                        id="manualEntryLink"
                        className="block text-left mb-4 text-blue-500 hover:underline mb-4"
                    >
                        Prefer to enter address manually
                    </a>
                    <hr className="mb-4" />
                    <div id="livedDurationSection" className="mb-4">
                        <label htmlFor="livedDuration" className="block text-gray-700 mb-2">
                            HOW LONG HAVE YOU LIVED AT THIS ADDRESS?
                        </label>
                        <select
                            id="livedDuration"
                            name="livedDuration"
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                        >
                            <option value="-">-</option>
                            <option value="6months">6 months or more</option>
                            <option value="less6months">Less than 6 months</option>
                        </select>
                    </div>
                    <button id="submitButton" className="bg-blue-500 text-white p-2 rounded">
                        Submit
                    </button>
                    <a
                        href="#"
                        id="changeAddressLink"
                        className="block text-left mt-4 text-blue-500 hover:underline hidden"
                    >
                        Change Address
                    </a>
                </div>
            ) : null}

            <div className='button_container w-full text-center'>
                <button onClick={validateAndContinue} className="bg-blue-900 py-2 px-4 text-white">Continue</button>
            </div>

            <div id="popupFormChange" className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center hidden">
                <form id="changeAddressForm" className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                    <h2 className="text-2xl font-bold mb-4">Change Address</h2>
                    <label className="block mb-2">
                        House/Building Name:
                        <input type="text" id="houseBuildingNameChange" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </label>
                    <label className="block mb-2">
                        Street Name:
                        <input type="text" id="streetNameChange" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </label>
                    <label className="block mb-2">
                        Town/City:
                        <input type="text" id="townCityChange" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </label>
                    <label className="block mb-2">
                        Postcode:
                        <input type="text" id="postcodeChange" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </label>
                    <div className="flex justify-end mt-4">
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mr-2">Save</button>
                        <button type="button" id="cancelButtonChange" className="bg-gray-500 text-white py-2 px-4 rounded">Cancel</button>
                    </div>
                </form>
            </div>

            <div id="popupFormManual" className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center hidden">
                <form id="manualAddressForm" className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                    <h2 className="text-2xl font-bold mb-4">Enter Address Manually</h2>
                    <label className="block mb-2">
                        House/Building Name:
                        <input type="text" id="houseBuildingNameManual" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </label>
                    <label className="block mb-2">
                        House/Building Number:
                        <input type="text" id="houseBuildingNumberManual" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </label>
                    <label className="block mb-2">
                        Street Name:
                        <input type="text" id="streetNameManual" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </label>
                    <label className="block mb-2">
                        Town/City:
                        <input type="text" id="townCityManual" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </label>
                    <label className="block mb-2">
                        Postcode:
                        <input type="text" id="postcodeManual" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </label>
                    <div className="flex justify-end mt-4">
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mr-2">Save</button>
                        <button type="button" id="cancelButtonManual" className="bg-gray-500 text-white py-2 px-4 rounded">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}