import React from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import requests from "../Request";

function Home() {
  return (
    <>
      <Hero />
      <Row rowId="1" title="Upcoming" fetchUrl={requests.requestUpcoming} />
      <Row rowId="2" title="Popular" fetchUrl={requests.requestPopular} />
      <Row rowId="3" title="Trending" fetchUrl={requests.requestTrending} />
      <Row rowId="4" title="TopRated" fetchUrl={requests.requestTopRated} />
      <Row rowId="5" title="Horror" fetchUrl={requests.requestHorror} />
    </>
  );
}

export default Home;
