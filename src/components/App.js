import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posters from './Posters';
import Search from './Search';
const API_ADDRESS = 'http://www.omdbapi.com/?apikey=e572eb3b&s=';
import image from "../assets/poster-finder-logo.png";

class App extends Component {

    state = { moviePosters : []};


    searchPoster = posterQuery => {
        fetch(`${API_ADDRESS}/${posterQuery}`)
        .then(response => response.json())
        .then(json => {

            if (json.totalResults > 0){

                var moviePosters = [];
                for (var i = 0; i < json.Search.length; i++){
                    var movie = json.Search[i].Title;
                    var posterUrl = json.Search[i].Poster;

                    var poster = {movie:movie,poster:posterUrl}; 

                    moviePosters.push(poster);

                }
                console.log('moviePosters',moviePosters)
                this.setState({moviePosters});
            }

            

        }).catch(error => alert('Error',error));
    }



    render(){


        return (
         <div>
             <img src={image} className='logo' alt='logo'></img>
             
             <Search searchPoster = {this.searchPoster} />
             <Posters posters={this.state.moviePosters}/>
         </div>   
        );



    }

}



export default App;