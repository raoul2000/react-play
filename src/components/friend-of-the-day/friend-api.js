import { useState, useEffect } from 'react';

export const useFriendApi = () => {

    const [friend, setFriend] = useState(null);
    /**
     * When refresh is TRUE that means a request to get a new friend is in progress. Only when this request
     * is done, refresh is set back to FALSE
     */
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        if (refresh) {
            fetch('https://randomuser.me/api/')
                .then(response => response.json())
                .then(user => {
                    setFriend(user.results[0]);
                    setRefresh(false);
                });
        }
    }, [refresh]);

    return [friend, setRefresh];
}

