import React, { Component } from 'react';
import Tile from './Tile';

class Grid extends Component {

    splitUpTiles = (a, l) => {
        if (a.length === 0) return [];
        else return [a.slice(0, l)].concat(this.splitUpTiles(a.slice(l), l));
    };

    createColumns = (array) => {
        let columnsArray = [];
        const columns = this.splitUpTiles(array, this.props.state.grid.length).reverse();

        for(let i = 0; i <= columns.length; i++) {
            columnsArray.push(
                <tr>
                    {columns[i]}
                </tr>
            )
        }

        return columnsArray;
    };

    render() {
        const grid = this.props.state.grid;
        const width = grid.width;
        const length = grid.length;
        const arrayOfTiles = [];

        for (let i = 0; i < width; i++) {
            for (let b = 0; b < length; b++) {
                arrayOfTiles.push(
                        <td>
                            <Tile
                                x={b}
                                y={i}
                                dirt={this.props.state.dirt}
                                roomba={this.props.state.roomba}
                                key={Math.floor((Math.random() * 100000) + 1)}
                            />
                        </td>
                )
            }
        }

        return (
            <div>
                <table>
                    <tbody>
                        {this.createColumns(arrayOfTiles)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Grid;