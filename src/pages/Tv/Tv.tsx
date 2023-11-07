import Header from "../../components/header/Header";
import Carrosel from "../../components/Carrosel/Carrosel";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import Footer from "../../components/footer/Footer";
import React from "react";

function Tv() {

  return (
    <div>
      <Header />
        <MovieInfo location="tv" />
        <Carrosel title="Series Em alta" />
        <Carrosel title="Series de Comedia" />
        <Carrosel title="Series de Acao" /> 
      <Footer />
    </div>
  );
}

export default Tv;
