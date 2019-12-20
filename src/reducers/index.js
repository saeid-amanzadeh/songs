import { combineReducers } from 'redux';

const songReducers = () => {
    return [
        { title: 'Song1', duration: '4:50' },
        { title: 'Song2', duration: '1:50' },
        { title: 'Song3', duration: '5:50' },
        { title: 'Song4', duration: '4:50' }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === "SONG_SELECTED"){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducers,
    selectedSong : selectedSongReducer
});