import React from "react";

const QurbaniTips = () => {
  return (
    <div className="py-12 px-4 md:px-10 bg-gray-50 mt-5">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 ">
        Qurbani Guide & Popular Breeds
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Qurbani Tips */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Qurbani Tips</h3>
          <ul className="space-y-3 text-gray-600">
            <li>✅ Choose a healthy animal with no defects</li>
            <li>✅ Ensure proper age (Cow: 2+ years, Goat: 1+ year)</li>
            <li>✅ Check body condition (not too skinny)</li>
            <li>✅ Prefer naturally fed animals</li>
            <li>✅ Make sure it is raised in a clean environment</li>
          </ul>
        </div>

        {/* Top Breeds */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Top Breeds</h3>
          <ul className="space-y-3 text-gray-600">
            <li>🐄 Deshi Cow - Affordable & widely available</li>
            <li>🐄 Sahiwal - Strong and high-quality breed</li>
            <li>🐄 Brahman - Large size, fast growth</li>
            <li>🐐 Black Bengal Goat - Very tasty meat</li>
            <li>🐐 Jamunapari Goat - Premium & attractive</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QurbaniTips;
