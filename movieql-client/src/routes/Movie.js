import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import {
  MovieDertailWrapper,
  MovieDetail,
  MovieDes,
  MovieTitle,
  MovieRate,
  Loading,
  MoiveImage,
} from "../style/styled";

const GET_MOVIES = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      title
      id
      synopsis
      medium_cover_image
      large_cover_image
      rating
      isLiked @client
    }
  }
`;

function Movie() {
  const { id } = useParams();
  const {
    data,
    loading,
    client: { cache },
  } = useQuery(GET_MOVIES, {
    variables: {
      movieId: id,
    },
  });
  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
  };
  return (
    <MovieDertailWrapper>
      {loading ? (
        <Loading>로딩중입니다</Loading>
      ) : (
        <MovieDetail>
          <MovieDes>
            <MovieTitle>{data.movie.title}</MovieTitle>
            <MovieRate>⭐{data.movie.rating}</MovieRate>
            {data?.movie?.isLiked ? (
              <svg
                onClick={() => {
                  onClick();
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-2 h-2"
                style={{
                  width: "30px",
                  color: "white",
                  
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            ) : (
              <svg
                onClick={() => {
                  onClick();
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-2 h-2"
                style={{ width: "30px", color: "white" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            )}
          </MovieDes>
          <div>
            <MoiveImage src={data.movie.large_cover_image} />
          </div>
        </MovieDetail>
      )}
    </MovieDertailWrapper>
  );
}

export default Movie;
