import React from 'react';
import {shallow} from 'enzyme';
import Tile from '../../components/Tile';

let tile;

const state = {
    roomba: false,
    dirt: false,
    id: {
        x: null,
        y: null
    }
};

describe('Tile', () => {

    beforeEach(() => {
        const props = {
            x: 1,
            y: 1,
            dirt: {
                x: 1,
                y: 2
            },
            roomba: {
                x: 0,
                y: 0
            },
        };
        tile = shallow(<Tile {...props}/>);
    });

    it('renders correctly', () => {
        expect(tile).toMatchSnapshot();
    });

    describe('Initializes state', () => {
        it('initializes state correctly', () => {
            expect(tile.state()).toEqual(state);
        });
    });

    describe('Updating the state', () => {

        describe('setID', () => {
            it('sets the ID as x=1 and y=1', () => {
                tile.instance().setId();
                expect(tile.state().id).toEqual({x: 1, y: 1})
            });
        });

        describe('checkIfDirty', () => {
            it('sets the dirt state as true with tile ID matching dirt ID', () => {
                tile.setState({id: {x: 1, y:2}});
                tile.instance().checkIfDirty();
                expect(tile.state().dirt).toEqual(true);
            });

            it('does not change the dirt state when tile ID does not match dirt ID', () => {
                tile.setState({id: {x: 2, y:2}});
                tile.instance().checkIfDirty();
                expect(tile.state().dirt).toEqual(false);
            });
        });

        describe('checkIfRoombaIsHere', () => {
            it('does not change roomba state when its ID does not match tile ID', () => {
                tile.instance().checkIfRoombaIsHere();
                expect(tile.state().roomba).toEqual(false);
            });

            it('changes roomba to true and dirt to false when its ID matches tile ID', () => {
                tile.setState({id: {x: 0, y: 0}, dirt: true});
                tile.instance().checkIfRoombaIsHere();
                expect(tile.state().roomba).toEqual(true);
                expect(tile.state().dirt).toEqual(false);
            });
        });
    });
});