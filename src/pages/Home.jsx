import React from "react";
import Hero from "../component/Hero";
import MovieRow from "../component/MovieRow";
import endpoints from "../services/movieServices";
function Home() {
  return (
    <>
    <Hero/>
    <MovieRow title="upcoming" url={endpoints.upcoming}/>
    <MovieRow title="trending" url={endpoints.trending}/>
    <MovieRow title="top rated" url={endpoints.topRated}/>
    <MovieRow title="comedy" url={endpoints.comedy}/>
    <MovieRow title="popular" url={endpoints.popular}/>
    </>
  );
}

export default Home;