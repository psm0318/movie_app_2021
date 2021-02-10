import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';


class Home extends React.Component {
state = {
  isLoading: true,
  movies: [],
}

getMovies = async () => {
  const {
    data: {
      boxOfficeResult: { dailyBoxOfficeList },
      },
    } = await axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=2ef389432c02b8b9f961b062d6f35e6c&targetDt=20210128');
  this.setState({ dailyBoxOfficeList, isLoading: false });
};

componentDidMount() {
  // 영화 데이터 로딩!
  this.getMovies();
}

render() {
  const { isLoading, dailyBoxOfficeList } = this.state;
  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
         {dailyBoxOfficeList.map(movie => (
            <Movie
              key={movie.rank}
              rank={movie.rank}
              openDt={movie.openDt}
              movieNm={movie.movieNm}
              salesAmt={movie.salesAmt}
              audiAcc={movie.audiAcc}
            />
          ))}
        </div>
      )}
    </section>
    );
  }
}


export default Home;

