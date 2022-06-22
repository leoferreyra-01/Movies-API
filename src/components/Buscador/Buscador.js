import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addMovieFavorite, getMovies } from "../../actions";
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div className="card">
        <h2 className="busqueda">BUSQUEDA</h2>
        <form className='form-container' onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input
              className="input"
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button className="btnS" type="submit">BUSCAR</button>
        </form>
        <ul>
          {
            this.props.movies && this.props.movies.map(movie => (
              <div className="cnt" key={movie.imdbID}>
                <Link className="content" to={`/movie/${movie.imdbID}`}>
                  <span>🍿{movie.Title}</span>
                </Link>
                <button className="form-cont" onClick={() => this.props.addMovieFavorite({
                  title: movie.Title,
                  id: movie.imdbID,
                  })
                }
                > 💙 </button>
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProp(state){
  return{
    movies: state.moviesLoaded
  }
}

function mapDispatchToProp(dispatch){
  return{
    getMovies: title=>dispatch(getMovies(title)),
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
  }
}

export default connect (mapStateToProp, mapDispatchToProp)(Buscador);
