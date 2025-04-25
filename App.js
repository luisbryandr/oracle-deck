// OracleDeckApp.jsx
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const sampleDeck = [
  {
    title: "Surrender to the Flow",
    content: "Let go of control. Trust the unfolding of life.",
    tags: ["Surrender", "Trust"]
  },
  {
    title: "Remember Who You Are",
    content: "Your essence is divine. Return to your center.",
    tags: ["Identity", "Divine"]
  },
  // Add more cards here
];

export default function OracleDeckApp() {
  const [drawnCard, setDrawnCard] = useState(null);

  const drawCard = () => {
    const index = Math.floor(Math.random() * sampleDeck.length);
    setDrawnCard(sampleDeck[index]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-indigo-100 to-white">
      <h1 className="text-3xl font-bold mb-6">Oracle Deck</h1>
      <Button onClick={drawCard} className="mb-4">Draw a Card</Button>

      {drawnCard && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-80 shadow-xl">
            <CardContent className="p-6 text-center">
              <h2 className="text-xl font-semibold mb-2">{drawnCard.title}</h2>
              <p className="text-base text-gray-700">{drawnCard.content}</p>
              <div className="mt-4 text-sm text-purple-600">
                Tags: {drawnCard.tags.join(', ')}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
// This is a simple Oracle Deck app that allows users to draw a card from a sample deck.
// The drawn card is displayed with a title, content, and tags.
// The app uses Framer Motion for animation and Tailwind CSS for styling.
// The sample deck contains a few example cards, and you can add more cards to the array.
// The drawCard function randomly selects a card from the sample deck and updates the state.
// The drawn card is displayed in a card component with a fade-in animation.
// The app is styled with a gradient background and responsive design.
// You can customize the card content, styles, and animations as needed.
// The app is designed to be simple and user-friendly, allowing users to easily draw and view cards.