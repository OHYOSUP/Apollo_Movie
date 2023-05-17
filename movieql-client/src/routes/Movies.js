import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { MovieListwrapper, Wrapper, Loading, MoiveImage } from "../style/styled";

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
      medium_cover_image
    }
  }
`;

function Movies() {
  const { data, loading, error } = useQuery(ALL_MOVIES);

  if (loading) {
    return <Loading>로딩중입니다</Loading>;
  }
  if (error) {
    return <h1>데이터 요청에 실패했습니다</h1>;
  }
  return (
    <Wrapper>
      <h1>Apollo Cinema </h1>
      <MovieListwrapper>
        {data.allMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <li key={movie.id}>
              <MoiveImage src={movie.medium_cover_image} />
              <p>{movie.title}</p>
            </li>
          </Link>
        ))}
      </MovieListwrapper>
    </Wrapper>
  );
}

export default Movies;
