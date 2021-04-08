import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = { 
        getMovies()
     };
    render() { 
        return ( 
            <div>
                Hello World!
            </div>
         );
    }
}
 
export default Movies;