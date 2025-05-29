/* eslint-disable react/prop-types */
import { useState } from "react";

const ContinueWatching = ({ movie, onClick }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(false);
  const handleDragStart = () => setIsDragging(true);
  const handleClickCapture = () => {
    if (!isDragging) {
      onClick();
    }
  };

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : "/placeholder.jpg";

  const title = movie.title || movie.name || "Untitled";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";

  return (
    <div
      onMouseDown={handleMouseDown}
      onDragStart={handleDragStart}
      onClickCapture={handleClickCapture}
      className="relative cursor-pointer transform transition-transform duration-300 hover:scale-110"
    >
      <img
        src={imageUrl}
        alt={title}
        className="rounded-lg w-full object-contain max-h-40"
      />

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 rounded-b-lg">
        <div className="flex items-center justify-between">
          <h6 className="text-white text-sm sm:text-lg font-bold truncate">
            {title}
          </h6>
          <div className="flex items-center gap-1">
            <img src="/star.png" alt="Star" className="w-4 h-4" />
            <p className="text-white text-xs sm:text-sm font-normal">
              {rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueWatching;
