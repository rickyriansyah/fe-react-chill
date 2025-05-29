/* eslint-disable react/prop-types */
import { useState } from "react";

const ContainerFilm = ({ movie, image, onClick }) => {
  const [isDragging, setIsDragging] = useState(false);
  const title = movie?.title || "Unknown Title";
  const imageUrl = movie.poster_path
  ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
  : "/placeholder.jpg";

const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";
  return (
    <div
      onMouseDown={() => setIsDragging(false)}
      onDragStart={() => setIsDragging(true)}
      onClickCapture={() => {
        if (!isDragging) {
          onClick();
        }
      }}
      className="cursor-pointer transform transition-transform duration-300 hover:scale-110"
    >
      <img
        src={imageUrl}
        alt={title}
        className="rounded-lg w-full object-contain min-h-[145px] sm:h-[365px]"
      />

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 rounded-b-lg">
        <div className="flex items-center justify-between">
          <h6 className="text-white text-sm sm:text-lg font-bold truncate">
            {title}
          </h6>
        </div>
      </div>
    </div>
  );
};


export default ContainerFilm;
