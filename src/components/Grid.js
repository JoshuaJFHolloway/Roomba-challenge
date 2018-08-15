import React, { Component } from 'react';
import Tile from './Tile';

class Grid extends Component {

    printGrid = (array) => {
        return array.map((row) => {
            return <tr>
                {row}
            </tr>
        });
    };

    render() {
        const grid = this.props.state.grid;
        const width = grid.width;
        const length = grid.length;
        const arrayOfTiles = [];
        let count = 0;

        for (let i = length; i >= 0; i--) {
            const row = [];

            for (let b = 0; b < width; b++) {
                row.push(
                        <td>
                            <Tile
                                x={b}
                                y={i}
                                dirt={this.props.state.dirt}
                                roomba={this.props.state.roomba}
                                key={Math.floor((Math.random() * 100000) + 1)}
                            />
                        </td>
                );

                count++;
            }

            arrayOfTiles.push(row);
        }

        return (
            <div>
                <table>
                    <tbody>
                        {this.printGrid(arrayOfTiles)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Grid;