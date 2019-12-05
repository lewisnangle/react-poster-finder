import React, {Component} from 'react';


class Posters extends Component {


    
    

    render(){
       

        if (this.props.posters.length == 0){
            return null;
        } else {
            console.log('this.props',this.props);
        }


        const moviePosters = this.props.posters;

        return(
            <div>
                {
                    moviePosters.map(moviePoster =>{

                        const {movie,poster} = moviePoster;
                        const id = moviePosters.id;

                        

                        return(
                            <div key={id} >
                                <img src={poster} 
                                alt='movie poster image' 
                                className='poster-image'
                                />
                                <p className = 'movieText'>{movie}</p>
                                <p>{id}</p>
                            </div>
                        )

                    })
                }
            </div>
        )
    }


}



export default Posters;