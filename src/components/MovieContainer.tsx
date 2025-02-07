import { Card } from "antd";
import { Result } from "../types/TypesMovies";

type result = {
  results: Result;
};

const MovieContainer = ({ results }: result) => {
  const imgUrls = `https://image.tmdb.org/t/p/w500${results.poster_path}`;

  return (
    <Card
      hoverable
      style={{
        width: 300,
        height: 500, // Uniform height for all cards
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      bodyStyle={{
        padding: 0,
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
      }}
      cover={
        <div
          style={{
            height: 300,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f0f0f0", // Fallback background for images
          }}
        >
          <img
            src={imgUrls}
            alt={`${results.title || results.name}`}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain", // Ensures the entire image is visible
            }}
          />
        </div>
      }
    >
      <div
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
        <div>
          <h2 className="mb-2 text-lg font-semibold text-center">
            {results.title || results.name}
          </h2>
          <p className="mb-2 text-sm text-gray-700 text-center">
            Release Date: {results.release_date || "N/A"}
          </p>
          <p className="mb-4 text-sm text-gray-700 text-center">
            Rating: {results.vote_average?.toFixed(1) || "N/A"}
          </p>
        </div>
        <a
          href="#"
          className="block mt-auto rounded-lg bg-blue-500 px-4 py-2 text-center font-semibold text-white hover:bg-blue-600"
        >
          Watch Movie
        </a>
      </div>
    </Card>
  );
};

export default MovieContainer;
