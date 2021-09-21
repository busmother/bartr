import React from 'react';

class ImageSearch extends React.Component {

    state = {
        query: ``
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchImages(this.state.query)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})} />
                </form>
            </div>
        )
    }

}

export default ImageSearch