import React from 'react';
import {shallow} from 'enzyme';
import App from '../../components/App';

let app;

const state = {
    grid: {
        length: 0,
        width: 0
    },
    dirt: {
        x: '',
        y: ''
    },
    roomba: {
        x: 0,
        y: 0
    },
    submitButtonClicked: false
};

const roomDimensionsEvent = {
    target: {
        name: 'length',
        value: '3',
        placeholder: 'room'
    }
};

const dirtCoordinatesEvent = {
    target: {
        name: 'y',
        value: '10',
        placeholder: 'place your dirt co-ordinates here'
    }
};

describe('App', () => {

    app = shallow(<App/>);

    beforeEach(() => {
        app = shallow(<App/>);
    });

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    describe('Initializes state', () => {
        it('initializes state correctly', () => {
            expect(app.state()).toEqual(state);
        });
    });

    describe('Coordinate checkers', () => {

        describe('coordinatesCheckIfZero returns a boolean depending on coordinates set in state', () => {
            it('returns true if argument as object is greater than 0', () => {
                expect(app.instance().coordinatesCheckIfZero(1)).toEqual(true);
            });

            it('returns false if argument as object is less than or equal to 0', () => {
                expect(app.instance().coordinatesCheckIfZero(0)).toEqual(false);
            });
        });

        describe('coordinatesCheckIfMaxX returns a boolean depending on coordinates set in state', () => {
            it('returns false if argument equals the current grid length', () => {
                expect(app.instance().coordinatesCheckIfMaxX(0)).toEqual(false);
            });
        });

        describe('coordinatesCheckIfMaxY returns a boolean depending on coordinates set in state', () => {
            it('returns true if argument does not equal the current grid length', () => {
                expect(app.instance().coordinatesCheckIfMaxY(20)).toEqual(true);
            });
        });
    });

    describe('Updating state successfully', () => {

        describe('handleChange', () => {
            it('updates the state correctly with a room dimensions event', () => {
                app.instance().handleChange(roomDimensionsEvent);
                expect(app.state().grid.length).toEqual(3);
            });

            it('updates the state correctly with a dirt co-ordinates event', () => {
                app.instance().handleChange(dirtCoordinatesEvent);
                expect(app.state().dirt.y).toEqual(10);
            });
        });

        describe('handleSubmit', () => {
            it('updates the state correctly when submit button is clicked', () => {
                app.instance().handleSubmit();
                expect(app.state().submitButtonClicked).toEqual(true);
            })
        });

        describe('compass directions for Roomba', () => {

            describe('north', () => {
                it('increases the y value on Roomba by 1 value', () => {
                    app.instance().north();
                    expect(app.state().roomba.y).toEqual(1)
                });
            });

            describe('east', () => {
                it('increases the x value on Roomba by 1 value', () => {
                    app.instance().east();
                    expect(app.state().roomba.x).toEqual(1)
                });
            });

            describe('west', () => {
                it('decreases the x value on Roomba by 1 value', () => {
                    app.instance().east();
                    app.instance().west();
                    expect(app.state().roomba.x).toEqual(0)
                });
            });

            describe('south', () => {
                it('decreases the y value on Roomba by 1 value', () => {
                    app.instance().north();
                    app.instance().south();
                    expect(app.state().roomba.y).toEqual(0)
                });
            });
        });

        describe('cleaning a tile', () => {
            app.state().dirt = {x: 0, y: 0};
            app.instance().tileCleaned();
            expect(app.state().dirt).toEqual("game over");
        });
    });

    describe('app renders depending on whether the submit button is clicked', () => {
        describe('when the button has not been clicked', () => {
            expect(app.find('RoombaInputs').exists()).toBe(true);
            expect(app.find('CompassAndGridWrapper').exists()).toBe(false);
        });
    });

});