// components/Card.js
import React from "react";

const Card = ({ title, content }) => (
  <div
    className="bg-gray-400 sm:bg-red-500 md:bg-green-400 lg:bg-blue-600 lg:border-red-600
      xl:bg-purple-800 lg:text-yellow-500"
    style={{
      border: "1px solid #ccc",
      padding: "16px",
      margin: "16px",
      borderRadius: "8px",
    }}
  >
    <h1 className="w-1/3 h-100 p-4 box-border">{title}</h1>
    
 <p className="bg-blue-100"> "Generative AI refers to a category of artificial intelligence systems designed to produce 
      content, data, or outputs that resemble and often expand upon human-generated creations.
      Unlike traditional AI models that operate based on predefined rules, 
      generative AI employs advanced algorithms, often leveraging deep neural networks, 
 to analyze patterns, learn from data, and generate new, original content. "}</p>
  </div>
);

export default Card;
