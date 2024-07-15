import React, { useState } from 'react';

const Dashboard = () => {
    const [transactions] = useState([
        { id: 1, name: 'Salary Deposit', description: 'Monthly salary', type: 'Credit', amount: 3000, balance: 3000, datetime: '2024-07-01 09:00:00' },
        { id: 2, name: 'Rent Payment', description: 'Monthly rent', type: 'Debit', amount: 1000, balance: 2000, datetime: '2024-07-02 10:30:00' },
        { id: 3, name: 'Grocery Shopping', description: 'Weekly groceries', type: 'Debit', amount: 150, balance: 1850, datetime: '2024-07-03 15:45:00' },
        { id: 4, name: 'Utility Bill', description: 'Electricity bill', type: 'Debit', amount: 80, balance: 1770, datetime: '2024-07-04 14:20:00' },
        { id: 5, name: 'Freelance Income', description: 'Web design project', type: 'Credit', amount: 500, balance: 2270, datetime: '2024-07-05 11:10:00' },
    ]);

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [transactionCount, setTransactionCount] = useState('');
    const [downloadOption, setDownloadOption] = useState('date');
    const [sortOrder, setSortOrder] = useState('desc');

    const formatDateTime = (datetimeString) => {
        const date = new Date(datetimeString);
        return date.toLocaleString('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const handleDownload = (e) => {
        e.preventDefault();
        console.log('Downloading statement:', { startDate, endDate, transactionCount, downloadOption });
        alert('Statement download initiated. This would typically trigger a PDF download.');
    };

    const handleEmailStatement = (e) => {
        e.preventDefault();
        console.log('Emailing statement:', { startDate, endDate, transactionCount, downloadOption });
        alert('Statement email sent. This would typically trigger an email to be sent to the user.');
    };

    const sortedTransactions = [...transactions].sort((a, b) => {
        const dateA = new Date(a.datetime);
        const dateB = new Date(b.datetime);
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    return (
        <div className="min-h-screen bg-gray-100">
            <main className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white rounded-lg shadow">
                    <div className="px-4 py-5 sm:p-6">
                        <h2 className="text-lg font-medium text-gray-900">3 Month Fixed Rate Bond Issue 1</h2>
                        <div className="grid grid-cols-3 gap-4 mt-4 sm:grid-cols-4 lg:grid-cols-5">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Sort Code</p>
                                <p className="mt-1 text-lg font-semibold text-gray-900">60-84-56</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Account Number</p>
                                <p className="mt-1 text-lg font-semibold text-gray-900">82318037</p>
                            </div>
                            <div className="p-4 bg-purple-600 rounded-lg">
                                <p className="text-sm font-medium text-purple-100">Total Balance</p>
                                <p className="mt-1 text-2xl font-semibold text-white">$2270.00</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Available Balance</p>
                                <p className="mt-1 text-lg font-semibold text-gray-900">$2270.00</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Interest</p>
                                <p className="mt-1 text-lg font-semibold text-gray-900">5.04%</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-4 bg-gray-50 sm:px-6">
                        <div className="flex space-x-4">
                            <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                                How to move your funds
                            </button>
                            <button className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
                                Manage account
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 overflow-hidden bg-white shadow sm:rounded-lg">
                    <div className="flex items-center justify-between px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Transactions</h3>
                        <div>
                            <label htmlFor="sort-order" className="mr-2">Sort Order:</label>
                            <select
                                id="sort-order"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="desc">Newest to Oldest</option>
                                <option value="asc">Oldest to Newest</option>
                            </select>
                        </div>
                    </div>
                    <div className="border-t border-gray-200">
                        {sortedTransactions.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Date and Time</th>
                                            <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Name</th>
                                            <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Description</th>
                                            <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Type</th>
                                            <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Amount</th>
                                            <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {sortedTransactions.map((transaction) => (
                                            <tr key={transaction.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">{formatDateTime(transaction.datetime)}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{transaction.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{transaction.description}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${transaction.type === 'Credit' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                        {transaction.type}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">${transaction.amount.toFixed(2)}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">${transaction.balance.toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <p className="px-4 py-5 text-gray-500 sm:p-6">No transactions available</p>
                        )}
                    </div>
                </div>

                <div className="mt-8 overflow-hidden bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Download Statement</h3>
                    </div>
                    <div className="px-4 py-5 border-t border-gray-200 sm:p-6">
                        <form onSubmit={handleDownload} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    <input
                                        type="radio"
                                        value="date"
                                        checked={downloadOption === 'date'}
                                        onChange={(e) => setDownloadOption(e.target.value)}
                                        className="mr-2"
                                    />
                                    By Date Range
                                </label>
                                {downloadOption === 'date' && (
                                    <div className="flex mt-2 space-x-4">
                                        <input
                                            type="date"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                                            required={downloadOption === 'date'}
                                        />
                                        <input
                                            type="date"
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                                            required={downloadOption === 'date'}
                                        />
                                    </div>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    <input
                                        type="radio"
                                        value="count"
                                        checked={downloadOption === 'count'}
                                        onChange={(e) => setDownloadOption(e.target.value)}
                                        className="mr-2"
                                    />
                                    By Number of Transactions
                                </label>
                                {downloadOption === 'count' && (
                                    <input
                                        type="number"
                                        value={transactionCount}
                                        onChange={(e) => setTransactionCount(e.target.value)}
                                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                                        required={downloadOption === 'count'}
                                        min="1"
                                    />
                                )}
                            </div>
                            <div className="flex space-x-4">
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Download PDF
                                </button>
                                <button
                                    type="button"
                                    onClick={handleEmailStatement}
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                    Send to Email
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
