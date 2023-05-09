import React from 'react';
import { useDispatch } from 'react-redux';
import { bandRemoved } from './bandsSlice';


export default function Band(props){
    const dispatch = useDispatch();

    function handleDeleteClick(){
        console.log(props.id)
        dispatch(bandRemoved(props.id));
    };


    return(
        <li>
            <span>{props.band}</span>
            <button onClick={handleDeleteClick}>DELETE</button>
        </li>
    )
};
