import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {

  render() {
    return (
      <div className="card">
        <h2 className="title">Películas Favoritas</h2>
        <ul >
          {
            this.props.movies && this.props.movies.map( movie => (
              <div className='cnt' key={movie.id}>
                <Link className="content" to ={`/movie/${movie.id}`}>
                  <span>⭐{movie.title}</span>
                </Link>
                <button className="btn" onClick={() => this.props.removeMovieFavorite(movie.id)}>❌</button>
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    movies: state.moviesFavourites
  }
}

function mapDispatchToProps(dispatch){
  return{
    removeMovieFavorite: movieID => dispatch(removeMovieFavorite(movieID))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(ConnectedList);
