import React from 'react';
import HooverLogo from '../images/HooverLogo.png';

const RoombaInputs = (props) => {
    return (
        <div>
            <div className="alignPageContent">
                <div className="inline">
                    <h3>How to play</h3>
                    <div className='howToPlay'>
                        <h5>1. Create your game to the right</h5>
                        <h5>2. Click the Hoover logo when you are ready to play</h5>
                        <h5>3. Grid will appear with direction buttons above to move Roomba</h5>
                        <h5>4. Navigate Roomba into the dirt tile you placed</h5>
                    </div>
                </div>
                <div className="inline">
                    <form onSubmit={props.onSubmit} id="roombaForm">
                        <h3>Room Dimensions</h3>
                        <div className='numberInput'>
                            <input type="number" name="width" min="1" placeholder="Grid width"
                                   onChange={props.onChange} required/>
                            <input type="number" name="length" min="1" placeholder="Grid length"
                                   onChange={props.onChange} required/>
                        </div>
                        <h3>Dirt Patch</h3>
                        <div className='numberInput'>
                            <input type="number" name="x" min="0" max={props.grid.width - 1}
                                   placeholder="Dirt x value" onChange={props.onChange}/>
                            <input type="number" name="y" min="0" max={props.grid.length - 1}
                                   placeholder="Dirt y value" onChange={props.onChange}/>
                        </div>
                        <h3>Roomba Start Tile</h3>
                        <div className='numberInput'>
                            <input type="number" name="x" min="0" max={props.grid.width - 1}
                                   placeholder="Roomba x value" onChange={props.onChange} required/>
                            <input type="number" name="y" min="0" max={props.grid.length - 1}
                                   placeholder="Roomba y value" onChange={props.onChange} required/>
                        </div>
                    </form>
                </div>
            </div>
            <button className='submitButton' type='submit' form="roombaForm">
                <img className='submitButtonImage' src={HooverLogo} alt="Play game"/>
            </button>
        </div>
    );

};

export default RoombaInputs;