import React, { useState, useEffect } from 'react';

const countries = () => {
    const [countries, setCountries] = useState([]);
    const [nationalityOptions, setNationalityOptions] = useState([]);
    const [taxOptions, setTaxOptions] = useState([]);

    useEffect(() => {
        fetchCountries();
    }, []);

    const fetchCountries = async () => {
        try {
            const response = await fetch("https://flagcdn.com/en/codes.json");
            const data = await response.json();
            const countryList = Object.entries(data).map(([code, name]) => ({ code, name }));
            setCountries(countryList);
            initializeOptions();
        } catch (error) {
            console.error("Error fetching countries:", error);
        }
    };

    const initializeOptions = () => {
        const defaultOptions = [
            { code: 'GB', name: 'United Kingdom', checked: true },
            { code: 'US', name: 'United States', checked: false },
        ];
        setNationalityOptions([...defaultOptions]);
        setTaxOptions([...defaultOptions]);
    };

    const toggleOption = (optionType, code) => {
        const options = optionType === 'nationality' ? nationalityOptions : taxOptions;
        const updatedOptions = options.map(option =>
            option.code === code ? { ...option, checked: !option.checked } : option
        );
        optionType === 'nationality' ? setNationalityOptions(updatedOptions) : setTaxOptions(updatedOptions);
    };

    const addCountry = (optionType, code, name) => {
        const newCountry = { code, name, checked: true };
        optionType === 'nationality'
            ? setNationalityOptions([...nationalityOptions, newCountry])
            : setTaxOptions([...taxOptions, newCountry]);
    };

    const renderOptions = (options, optionType) => {
        return (
            <div className="flex flex-wrap gap-2">
                {options.map(({ code, name, checked }) => (
                    <div
                        key={code}
                        className={`inline-flex items-center border rounded-full px-3 py-1 ${checked ? 'bg-red-100' : 'bg-white'}`}
                    >
                        <img src={`https://flagcdn.com/16x12/${code.toLowerCase()}.png`} alt={`${name} flag`} className="mr-1" />
                        <span>{name}</span>
                        <span
                            className="ml-2 cursor-pointer"
                            onClick={() => toggleOption(optionType, code)}
                        >
                            {checked ? '×' : '+'}
                        </span>
                    </div>
                ))}
                <div className="inline-flex items-center px-3 py-1 bg-white border rounded-full">
                    <span>Other</span>
                    <select
                        className="p-1 ml-2 border rounded"
                        onChange={(e) => {
                            if (e.target.value) {
                                const country = countries.find(c => c.code === e.target.value);
                                addCountry(optionType, country.code, country.name);
                                e.target.value = '';
                            }
                        }}
                    >
                        <option value="">Select a country</option>
                        {countries.map(country => (
                            <option key={country.code} value={country.code}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');


    };

    return (
        <div className="p-6 bg-gray-100">
            <div className="max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <h2 className="mb-2 text-xl font-semibold text-gray-700">
                            08 Your nationality/citizenship
                        </h2>
                        <p className="mb-2 text-sm text-gray-600">
                            What's your country of nationality/citizenship?
                        </p>
                        <p className="mb-4 text-xs text-gray-500">
                            Please select all that apply.
                        </p>
                        {renderOptions(nationalityOptions, 'nationality')}
                    </div>

                    <div>
                        <h2 className="mb-2 text-xl font-semibold text-gray-700">
                            09 Your tax details
                        </h2>
                        <p className="mb-2 text-sm text-gray-600">
                            In which country are you a tax resident?
                        </p>
                        <p className="mb-4 text-xs text-gray-500">
                            Please select all that apply.
                        </p>
                        {renderOptions(taxOptions, 'tax')}
                    </div>

                    <button
                        type="submit"
                        className="px-4 py-2 text-white transition duration-300 bg-pink-500 rounded hover:bg-pink-600"
                    >
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
};

export default countries;