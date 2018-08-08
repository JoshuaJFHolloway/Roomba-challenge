import React from 'react';
import Compass from './Compass';
import Grid from './Grid';

const CompassAndGridWrapper = (props) => {

    const dirtPatchHoovered = (props.appState.dirt === 'game over' ? "Yes!" : "No");

    return (
        <div>
            <Compass
                north={props.north}
                east={props.east}
                south={props.south}
                west={props.west}
            />
            <Grid
                state={props.appState}
            />
            <div className='dirtHooveredCounter'>
                <h5>Dirt patch hoovered: {dirtPatchHoovered}</h5>
            </div>
        </div>
    );
};

export default CompassAndGridWrapper;