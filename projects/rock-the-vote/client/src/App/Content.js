import React, { Component } from "react";

import AddIssueForm from "../AddIssueForm"; 
import IssuesList from "../IssuesList";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayForm: false,
        }
    }

    toggleDisplay = () => {
        this.setState(prevState => ({ displayForm: !prevState.displayForm }));
    }

    render() {
        const { title, description, _id} = this.props;
        return (
            <div className="contentSection" >
                <h1>{title}</h1>
                <div className="contentImgContainer">
                    <img name="contentImg" src={img} alt={name}></img>
                </div>
                
                <button className="button" onClick={() => removeArtist(_id)}>Delete</button>
                <button className="button" onClick={this.toggleDisplay}>Edit</button>
                {
                    this.state.displayForm ? <EditForm toggleDisplay={this.toggleDisplay} {...this.props} /> : null
                }
                <button className="addEventButton" onClick={this.toggleDisplayEvent}>Add Event</button>
                {
                    this.state.displayFormEvent ? <EventForm artistId={_id}toggleDisplayEvent={this.toggleDisplayEvent}{...this.props} /> : null
                }
                <EventList artistId={_id}></EventList>
            </div>
        )
    }
}
export default ArtistDisplay; 
