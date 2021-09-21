import React, { Component } from 'react'
import Results from '../components/Results'

class ResultsContainer extends Component {
    state = {
        images: []
    }

    render(){
        return (
            <div>
                <ImageSearch fetchImages={this.fetchImages} />
                <Results images={this.state.images}
            </div>
        )
    }
}

export default ResultsContainer