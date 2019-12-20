import React from 'react';
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
    if(!song){
        return <div>Select a song please! </div>
    }
    return (
        <div>
            <h3>Detail for {song.title}</h3>
            <p>
                Duration: {song.duration}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);