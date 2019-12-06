import React, {Component} from 'react';

class Search extends Component {

    state = { posterQuery: ''};

    updatePosterQuery = event => {
        this.setState({posterQuery : event.target.value});
    }

    handleKeyPress = event => {
        if (event.key === 'Enter'){
            this.searchPoster();
        }
    }

    searchPoster = () => {
        this.props.searchPoster(this.state.posterQuery);
    }


    render(){

        return (
            <div>
                <input onChange={this.updatePosterQuery} 
                    onKeyPress={this.handleKeyPress}
                    placeholder = 'Search for a poster'
                />
                
                


                <button variant="outline-dark" onClick ={this.searchPoster}>Search</button>
            </div>
        )
    }
}

export default Search;