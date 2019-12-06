import React, {Component} from 'react';


class Posters extends Component {

    

    render(){
       

        if (this.props.posters.length == 0){
            return null;
        } else {
            console.log('this.props',this.props);
        }

       

        const moviePosters = this.props.posters;


       // {console.log('moviePosters',moviePosters)}

        return(
            <div>
                {
                moviePosters.map((moviePoster,index) =>{

                    const {movie,poster} = moviePoster;

                    const id = index;

                    {console.log(id)};

                    return(

                        
                        <div key={id} >

                            <img
                            src={poster}
                            alt='movie image'
                            className='poster-image'
                            title={movie}
                            />

                            
                        </div>
                    )

                    })
                }
            </div>

        )
    }


}



export default Posters;