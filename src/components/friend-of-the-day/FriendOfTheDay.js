//import React, { useState, useEffect } from 'react';
import React from 'react';
import { useFriendApi } from './friend-api';

/**
 * @see https://www.robinwieruch.de/react-hooks-fetch-data
 * @see https://reactjs.org/docs/hooks-custom.html
 */
const FriendOfTheDay = () => {

    /**
     * A custom effect is used to fetch the friend of the day. It provides the setter function
     * to ask for a friend refresh
     */
    const [friend, setRefresh] = useFriendApi();

    let friendView = null;
    if (friend) {
        friendView = <div>
            <img src={friend.picture.large} alt="friend-avatar" />
            <div> {`${friend.name.first} ${friend.name.last}`} (<a href="mailto:{friend.email}">{friend.email}</a>)</div>
        </div>;
    } else {
        friendView = <span>loading ...</span>;
    }

    // user clicked to get a new friend : force refresh to TRUE
    const handleFindNewFriend = (ev) => setRefresh(true);

    return (
        <div className="friend-of-the-day">
            <h1>Today my friend is ...</h1>
            <hr />
            <div className="friend-view">
                {friendView}
            </div>
            <button onClick={handleFindNewFriend}>Find a new friend !</button>
        </div>
    );
};

export default React.memo(FriendOfTheDay);