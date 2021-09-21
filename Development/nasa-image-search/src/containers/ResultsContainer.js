import React, { Component } from 'react'
import ImageSearch from '../components/ImageSearch'
import Results from '../components/Results'


class ResultsContainer extends Component {
    state = {
        images: []
    }

    // var request = new XMLHttpRequest();
    // var url = "https://api.nasa.gov/planetary/apod?api_key=";
    // var apiKey = "VodNvDXzlgg3cT0dgOn9JuFzkcQLdDhEhfbwinEI";

    fetchImages = (query = "moon", searchType = "concept_tags") => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=VodNvDXzlgg3cT0dgOn9JuFzkcQLdDhEhfbwinEI&+${searchType+query}`)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({ images: data?.map( image => ({ url: image.url }))})
        })
    }

    componentDidMount() {
        this.fetchImages()
    }

    // add a dropdown for search type
    // components for dropdown / button / imageCard / etc
    // dark mode?

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