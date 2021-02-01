import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({rank, openDt, movieNm, audiAcc, salesAmt}) { 
    return (
        <div className="movie__data">
          <Link 
            to={{
                pathname: '/movie-detail',
                state: { rank, movieNm, openDt, audiAcc, salesAmt },
            }}
            >
            <h5 className="movie__rank">{rank}위</h5>
            <h3 className="movie__title">{movieNm}</h3>
            <h5 className="movie__openDt">개봉일: {openDt}</h5> 
            <h5 className="movie__audiAcc">누적관객수: {audiAcc}</h5>
            <h5 className="movie__salesAmt">누적매출액: {salesAmt}</h5>
           </Link>
        </div>
    );
}

Movie.propTypes = {
    rank: PropTypes.string.isRequired,
    movieNm: PropTypes.string.isRequired,
    audiAcc: PropTypes.string.isRequired,
    salesAmt: PropTypes.string.isRequired,
    openDt: PropTypes.string.isRequired,
};    



export default Movie;

