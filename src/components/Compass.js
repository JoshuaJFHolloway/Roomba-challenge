import React from 'react';

const Compass = (props) => {

        return (
            <div className='compassButtons'>
                <button onClick={props.north}>North</button>
                <button onClick={props.east}>East</button>
                <button onClick={props.south}>South</button>
                <button onClick={props.west}>West</button>
            </div>
        )
};

export default Compass