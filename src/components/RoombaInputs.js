import React from 'react';

const RoombaInputs = (props) => {
    return (
        <div>
            <h3>How to play</h3>
            <div className='howToPlay'>
                <h5>1. Fill in the inputs below</h5>
                <h5>2. Click the submit button</h5>
                <h5>3. A grid will appear with north/east/south/west buttons to move Roomba!</h5>
                <h5>4. Use the buttons to navigate Roomba into the dirt tile you placed</h5>
                <h5>5. Bear in mind that Roomba's position is symbolised by a red outline around the tile it's currently on</h5>
            </div>
            <form onSubmit={props.onSubmit}>
                <h3>Room Dimensions</h3>
                <div className='numberInput'>
                    <input type="number" name="length" min="1" placeholder="Enter room width" onChange={props.onChange} required/>
                    <input type="number" name="width" min="1" placeholder="Enter room length" onChange={props.onChange} required/>
                </div>
                <h3>Dirt Patch (x, y)</h3>
                <div className='numberInput'>
                    <input type="number" name="x" min="0" max={props.grid.width - 1} placeholder="Enter dirt x value" onChange={props.onChange}/>
                    <input type="number" name="y" min="0" max={props.grid.length - 1} placeholder="Enter dirt y value" onChange={props.onChange}/>
                </div>
                <h3>Roomba Start Tile (x, y)</h3>
                <div className='numberInput'>
                    <input type="number" name="x" min="0" max={props.grid.width - 1} placeholder="Enter roomba x value" onChange={props.onChange} required/>
                    <input type="number" name="y" min="0" max={props.grid.length - 1} placeholder="Enter roomba y value" onChange={props.onChange} required/>
                </div>
                <input className='submitButton' type="submit" value="Submit values"/>
            </form>
        </div>
    );

};

export default RoombaInputs;