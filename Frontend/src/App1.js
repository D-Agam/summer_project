import React, { useState, useEffect } from 'react';
import './App1.css';
import ProgressBar from './component/ProgressBar';
import FormPage from './page/FormPage';
import { Route, Routes } from 'react-router-dom';
import Page2 from './page/Page2';
import Security from './page/Security';
import EmploymentDetails from './page/Employment';


function App1() {
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
    <>
      <Routes>
        <Route path='/' element={<FormPage />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/security' element={<Security />} />
        <Route path='/employment' element={<EmploymentDetails />} />
      </Routes>
    </>
  );
}

export default App1;
