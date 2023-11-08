import Details from "../MainDetails/Details/Details";
import { Collection, Movie, Season, TVSeries } from "../../shared/information";
import GenreComponent from "../GenreComponent/GenreComponent";
import { useLocation } from "react-router-dom";



function formatYearFromDate(date: string) {
    const year = new Date(date).getFullYear();
    return year.toString();
}

function formatMinutesToHours(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}min`;
}

export const MovieDetails = ({ movie }: { movie: Movie }) => {
    const local = useLocation();

    console.log(local.pathname.endsWith )
    return (
        <>
         {local.pathname.startsWith('/home') ? '' : local.pathname.endsWith('/movie') ? <GenreComponent ActualPage="Filmes" /> : ''}
            <Details
                title={movie.title}
                year={formatYearFromDate(movie.release_date)}
                duration={`${formatMinutesToHours(movie.runtime)}`}
                genre={movie.genres[0].name}
                description={window.innerWidth >= 768 ? movie.overview : movie.overview.slice(0, 200) + '...'}
            />
        </>
    );
};

export const TVSeriesDetails = ({ tvSeries }: { tvSeries: TVSeries }) => {
    const local = useLocation();

    return (
        <>
        {local.pathname.endsWith('/tv') ? <GenreComponent ActualPage="Series" /> : ''}
            <Details
                title={tvSeries.name}
                year={formatYearFromDate(tvSeries.first_air_date)}
                duration={`${tvSeries.number_of_seasons} Temporadas`}
                genre={tvSeries.genres[0].name}
                description={window.innerWidth >= 768 ? tvSeries.overview : tvSeries.overview.slice(0, 200) + '...'}
            />
        </>
    );
};

export const SeasonDetails = ({ season }: {season: Season}) => {
    return (
      <>
        <Details
                title={season.name}
                year={formatYearFromDate(season.air_date)}
                duration={`${season.vote_average}`}
                genre={''}

            />
      </>
    );
  };

export const CollectionsDetails = ({ collection }: {collection: Collection}) => {
    return (
      <>
        <Details
                title={collection.name}
                duration={`${collection.parts.length} Filmes`}
                description={window.innerWidth >= 768 ? collection.overview : collection.overview.slice(0, 200) + '...'}
            />
      </>
    );
  };