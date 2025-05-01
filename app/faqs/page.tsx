"use client";

import React from "react";

const FAQs = () => {
  const faqData = [
    {
      question: "What is SDM Bakery?",
      answer:
        "SDM Bakery is a Christian student-led bakery founded by members of the Student Discipleship Ministry at Kabarak University. We are committed to providing delicious, affordable, and wholesome baked goods made with love and integrity.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can place an order through our website or by visiting our physical shop in Rafiki. Just choose your favorite treats, specify the quantity, and follow the checkout process. We accept M-Pesa and other digital payments.",
    },
    {
      question: "Do you take bulk or custom orders?",
      answer:
        "Yes, we do! Whether it's for birthdays, game nights, CU events, or student group meetings, you can place custom or bulk orders. Kindly contact us at least 2 days in advance.",
    },
    {
      question: "Where are you located?",
      answer:
        "We are based in Rafiki area. Look out for our shop banner writtes sdm Bakery and come get the best mandazis in Rafiki.",
    },
    {
      question: "How do I contact SDM Bakery?",
      answer:
        "You can reach us at sdmbakery@info.com or send a message via our Instagram page @sdmbakery. For urgent queries, call +254 700 000 000.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 font-poppins">
      <h1 className="text-3xl font-bold text-orange-1 mb-6 text-center">Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
          <p className="text-gray-700 mt-2">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
