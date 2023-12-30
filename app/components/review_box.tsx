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
      <span key={index} className="text-sm">
        ⭐
      </span>
    ) : (
      <span className="text-white text-lg" key={index}>
        ☆
      </span>
    )
  );

  return (
    <div className="flex flex-col h-full p-4 bg-gray-800 shadow rounded-lg">
      <p className="mb-auto text-gray-300">{review}</p>
      <div className="mt-2 flex justify-between items-end">
        <div>{stars}</div>
        <span className="font-bold text-white">- {username}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
