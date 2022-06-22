import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../redux/actions';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId);
    }

    render() {
        return (
            <div className='movie-card'>
                <div className="container">
                    <div className='details'>
                        <h1 className='title'>{this.props.movie.Title}</h1>
                        <div>
                            <h2>Clasification: {this.props.movie.Rated}</h2>
                            <h2>Realese Year: {this.props.movie.Released}</h2>
                            <h2>Genre: {this.props.movie.Genre}</h2>
                            <h2>Plot: {this.props.movie.Plot}</h2>
                            <img src={this.props.movie.Poster} alt="Portada de Pelicula" className='imagen'/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state){
    return{
        movie: state.movieDetail
    }
};

function mapDipatchToProps(dispatch){
    return {
        getMovieDetail: movieID =>dispatch(getMovieDetail(movieID))
    }
};

export default connect (mapStateToProps, mapDipatchToProps)(Movie);