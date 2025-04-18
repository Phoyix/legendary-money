import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">💰 Money Saver App</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Wallets</h2>
        <ul className="space-y-2">
          <li className="p-4 bg-green-100 rounded-md">🛫 Travel Wallet - $300</li>
          <li className="p-4 bg-blue-100 rounded-md">🛒 Groceries Wallet - $150</li>
          <li className="p-4 bg-red-100 rounded-md">🚨 Emergency Wallet - $500</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Goals</h2>
        <ul className="space-y-2">
          <li className="p-4 bg-yellow-100 rounded-md">
            🎯 Save $1000 for Vacation by Dec 2025
          </li>
          <li className="p-4 bg-purple-100 rounded-md">
            🎯 Build $500 Emergency Fund by Aug 2025
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Notes</h2>
        <div className="p-4 bg-gray-100 rounded-md">
          ✍️ Remember to check travel deals on Friday.
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Auth</h2>
        <p className="text-sm text-gray-600">
          (Authentication form placeholder - sign up/login with email/password)
        </p>
      </section>
    </div>
  );
}
