"use client";

import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-poppins">
      <h1 className="text-3xl font-bold text-orange-1 mb-4 text-center">About SDM Bakery</h1>

      <p className="text-gray-700 mb-4">
        <strong>SDM Bakery</strong> is a Christian student-led bakery established by members of the Student Discipleship Ministry. Rooted in faith, fellowship, and a passion for service, we bake to bless — offering wholesome, affordable, and tasty treats for the campus community and beyond.
      </p>

      <h2 className="text-xl font-semibold mt-4">Our Mission</h2>
      <p className="text-gray-700 mb-4">
        mission
      </p>

      <h2 className="text-xl font-semibold mt-4">What Makes Us Different?</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4 flex flex-col gap-3">
        <li>🙏 Faith-driven service and integrity</li>
        <li>🎓 Run by Christian students with purpose</li>
        <li>🥐 Fresh, affordable, and tasty pastries</li>
        <li>🤝 Support for campus events, fellowships, and outreach</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Meet the Team</h2>
      <p className="text-gray-700 mb-4">
        Our team is made up of dedicated CU members who bring their gifts together — from baking and budgeting to logistics and design. We believe in servant leadership and teamwork, baking every item with excellence and love.
      </p>

      <h2 className="text-xl font-semibold mt-4">Want to Partner With Us?</h2>
      <p className="text-gray-700 mb-4">
        Whether {"you're"} planning a Christian Union event, game night, kesha or just want to enjoy some delicious snacks with friends, SDM Bakery is here to serve. We also offer custom and bulk orders!
      </p>

      <h2 className="text-xl font-semibold mt-4">Contact Us</h2>
      <p className="text-gray-700">
        We’d love to hear from you! Reach us through:
      </p>
      <p className="text-gray-700 mt-2">
        📧 <strong>Email:</strong> sdmbakery@info.com <br />
        📱 <strong>Phone:</strong> <a href="tel:+254700000000" className="text-orange-1">+254 700 000 000</a> <br />
        📍 <strong>Location:</strong> Rafiki, Kabarak
      </p>
    </div>
  );
};

export default About;
