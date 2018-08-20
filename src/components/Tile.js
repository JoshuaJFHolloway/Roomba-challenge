import React, { Component } from 'react';
import CleanTile from '../images/CleanTile.jpg';
import DirtyTile from '../images/DirtyTile.jpg';
import Roomba from '../images/Roomba.jpeg';

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

        if (this.state.dirt && !roomba) {
            return (
                <div className="parentOfCleanTileWithImageInside">
                    <div>
                        <img src={CleanTile} width="100px" alt="clean looking flooring tile" className="cleanTile"/>
                        <img src={DirtyTile} width="100px" alt="dirty looking flooring tile" className="imageOnTile"/>
                    </div>
                </div>
            );
        }

        if (roomba) {
            return (
                <div>
                    <div className="parentOfCleanTileWithImageInside">
                        <img src={CleanTile} width="100px" alt="clean looking flooring tile" className="cleanTile"/>
                        <img src={Roomba} width="100px" alt="Roomba" className="imageOnTile"/>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div>
                    <img src={CleanTile} width="100px" alt="clean looking flooring tile"/>
                </div>
            )

        }

    }
}

export default Tile;
