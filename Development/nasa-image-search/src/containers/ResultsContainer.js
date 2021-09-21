import React, { Component } from 'react'
import Results from '../components/Results'

class ResultsContainer extends Component {
    state = {
        images: []
    }

    https://api.nasa.gov/planetary/apod?api_key=VodNvDXzlgg3cT0dgOn9JuFzkcQLdDhEhfbwinEI&moon

    const request = new XMLHttpRequest();
    const url = "https://api.nasa.gov/planetary/apod?api_key=";
    const apiKey = "VodNvDXzlgg3cT0dgOn9JuFzkcQLdDhEhfbwinEI";

    fetchImages = (query = "kacey musgraves", searchType = "concept_tags") => {
        fetch(`${url+apiKey}+"&"+${searchType+query}`)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({ images: data.map( image => ({ url: image.url }))})
        })
    }

    render(){
        return (
            <div>
                <ImageSearch fetchImages={this.fetchImages} />
                <Results images={this.state.images} />
            </div>
        )
    }
}

export default ResultsContainer