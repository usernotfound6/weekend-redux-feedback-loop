import { React, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Comments () {
    const [comments, setComments] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    const handleComments = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_COMMENT',
            payload: comments
        })

        history.push('/review');
    }
    
    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleComments}>
                <input 
                type="text" 
                placeholder='Leave Comment'
                value={comments}
                onChange={(event) => setComments(event.target.value)}
                required
                />
                <button type="submit">NEXT</button>
            </form>
        </div>
    )
}

export default Comments;