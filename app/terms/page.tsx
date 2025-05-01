"use client";

import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 font-pop">
      <h1 className="text-3xl font-bold text-center text-orange-1 mb-6">Terms and Conditions</h1>

      <p className="mb-4">
        Welcome to <strong>SDM Bakery</strong>. These Terms and Conditions govern your use of our platform, services, and products. By accessing or ordering from us, you agree to be bound by the following terms.
      </p>

      <h2 className="text-xl font-semibold mt-4">1. Faith and Integrity</h2>
      <p className="mb-4">
        As a Christian Union-based initiative, we are committed to upholding honesty, integrity, and service in line with biblical values. We expect respectful and honest interactions from all users.
      </p>

      <h2 className="text-xl font-semibold mt-4">2. Orders and Payments</h2>
      <p className="mb-4">
        Orders can be made through our designated order channels. Once an order is placed and confirmed, cancellations or changes may not be possible. Payments should be completed promptly using approved payment methods (e.g., M-Pesa).
      </p>

      <h2 className="text-xl font-semibold mt-4">3. Product Availability</h2>
      <p className="mb-4">
        All products are subject to availability. In case of stockouts or delays, we will communicate promptly and offer suitable alternatives or refunds if necessary.
      </p>

      <h2 className="text-xl font-semibold mt-4">4. Prohibited Conduct</h2>
      <p className="mb-4">
        Users may not misuse our platform, engage in fraudulent activities, or abuse our team members. We reserve the right to deny service if such actions are identified.
      </p>

      <h2 className="text-xl font-semibold mt-4">5. Changes to Terms</h2>
      <p className="mb-4">
        SDM Bakery reserves the right to update or amend these terms at any time. Continued use of our services after updates constitutes acceptance of the new terms.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-5">6. Contact and Feedback</h2>
      <p className="mb-4">
        We value your feedback and inquiries. For any questions regarding our terms, feel free to reach out:
      </p>

      <p className="text-gray-800">
        📧 <strong>Email:</strong> sdmbakery@info.com <br />
        📞 <strong>Phone:</strong> <a href="tel:+254700000000" className="text-green-500 underline">+254 700 000 000</a> <br />
        📍 <strong>Location:</strong> Rafiki, Kabarak
      </p>
    </div>
  );
};

export default TermsAndConditions;
