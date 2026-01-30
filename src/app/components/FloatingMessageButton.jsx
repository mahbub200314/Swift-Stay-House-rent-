// components/FloatingMessageButton.jsx
"use client";

import { FaCommentDots } from "react-icons/fa";

export default function FloatingMessageButton() {
  return (
    <a
      href="mailto:support@swiftstay.com" // অথবা যেকোনো chat link
      className="fixed bottom-32 right-7 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
    >
      <FaCommentDots size={24} />
    </a>
  );
}
