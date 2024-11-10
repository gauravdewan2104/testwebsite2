'use client';

import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form submitted:', formData);
  };

  const handlePayment = () => {
    setShowPayment(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="text-lg text-gray-600">We're here to help you get started</p>
      </header>

      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          {submitted ? (
            <div className="bg-green-50 p-4 rounded">
              <p>Thank you for your message! We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-2 border rounded"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  required
                  className="w-full p-2 border rounded min-h-32"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Payment Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Make a Payment</h2>
          {showPayment ? (
            <div className="bg-green-50 p-4 rounded">
              <p>Payment processing initiated!</p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-600">
                Ready to make a payment? Click the button below to proceed.
              </p>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">$99.00</h3>
                <p className="text-gray-500 mb-4">Standard Package</p>
                <button
                  onClick={handlePayment}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Pay Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
