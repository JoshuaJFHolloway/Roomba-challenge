import React, { Component } from 'react';
import CleanTile from '../images/CleanTile.jpg';
import DirtyTile from '../images/DirtyTile.jpg';


class Tile extends Component {
    constructor() {
        super();
        this.state = {
            roomba: false,
            dirt: false,
            id: {
                x: null,
                y: null
            }
        }
    }

    componentDidMount() {
        this.setId();
        this.checkIfDirty();
        this.checkIfRoombaIsHere();
    }

    setId() {
        const id = this.state.id;
        id["x"] = this.props.x;
        id["y"] = this.props.y;

        this.setState({id})
    }

    checkIfDirty() {
        if(this.stringify(this.props.dirt) === this.stringify(this.state.id)) {
            this.setState({dirt: true})
        }
    }

    checkIfRoombaIsHere() {
        if (this.stringify(this.state.id) === this.stringify(this.props.roomba)) {
            this.setState({dirt: false, roomba: true})
        }
    }

    stringify(object) {
        return JSON.stringify(object)
    }

    render() {

        const roomba = this.state.roomba;
        let roombaStyle;

        roomba === true ? roombaStyle = { borderColor: 'Red', borderStyle: 'solid'} : roombaStyle = null;

        return this.state.dirt && !roomba ? (

                <div>
                    <img src={DirtyTile} width="100px" alt="dirty looking flooring tile" style={roombaStyle}/>
                </div>
            ) : (
                <div>
                    <img src={CleanTile} width="100px" alt="clean looking flooring tile" style={roombaStyle}/>
                </div>
            )
    }
}

export default Tile;
