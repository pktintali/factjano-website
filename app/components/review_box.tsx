import React from "react";

interface ReviewCardProps {
  username: string;
  review: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  username,
  review,
  rating,
}) => {
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < rating ? (
      <span key={index} className="text-yellow-500 text-lg">
        ★
      </span>
    ) : (
      <span className="text-gray-300 dark:text-gray-600 text-lg" key={index}>
        ☆
      </span>
    )
  );

  return (
    <div className="flex flex-col h-full p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
      <p className="mb-2 text-gray-900 dark:text-gray-300 text-base leading-relaxed flex-grow">
        {review}
      </p>
      <div className="mt-2 flex justify-between items-center">
        <div className="flex">{stars}</div>
        <span className="text-gray-400 dark:text-gray-500 text-sm">
          - {username}
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
