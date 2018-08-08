# Drover Assignment

**My task was to build a virtual Roomba**


**What did they expect from me?**

You will write a web application that drives an imaginary robotic hoover (much like a Roomba) around an equally imaginary room based on:

    room dimensions as X and Y coordinates, identifying the top right corner of the room rectangle. This room is divided up in a grid based on these dimensions; a room that has dimensions X: 5 and Y: 5 has 5 columns and 5 rows, so 25 possible hoover positions. The bottom left corner is the point of origin for our coordinate system, so as the room contains all coordinates its bottom left corner is defined by X: 0 and Y: 0.
    an initial hoover position (X and Y coordinates like patches of dirt)
    locations of patches of dirt, also defined by X and Y coordinates identifying the bottom left corner of those grid positions.

The room will be rectangular, has no obstacles (except the room walls), no doors and all locations in the room will be clean (hoovering has no effect) except for the locations of the patches of dirt presented in the program input.

Placing the hoover on a patch of dirt ("hoovering") removes the patch of dirt so that patch is then clean for the remainder of the program run. The hoover is always on - there is no need to enable it.

Driving into a wall has no effect (the robot skids in place).
Goal

The goal of the application is to take the room dimensions, the locations of the dirt patches, and the hoover location as input and to allow the user to navigate the robot around the room.

As a minimum you should build an interface with:

    A way to enter the following configuration:
        the room dimensions (length and width)
        the starting location of the robot (as coordinates)
        the locations of zero or more dirt patches
    Four buttons which will move the robot North, South, East and West
    A visual representation of the room state
    A text based representation of the robot's position within the room
    A text based representation of the number of dirt patches which have been hoovered

Deliverable

The program:

    link to a running web page
    must run in all modern browsers
    can be written in any client side programming language. We are looking for a Senior React/Redux Engineer so using these technologies is preferable (unless you think we are missing out on the next big thing of course)
    can make use of any existing open source libraries that don't directly address the problem statement (use your best judgement)

Send us:

    The full source code, including any code written which is not part of the normal program run (scripts, tests)
    Clear instructions on how to obtain and run the program
    Please provide any deliverables and instructions using a public Github (or similar) Repository as several people will need to inspect the solution

Evaluation

The point of the exercise is for us to see some of the code you wrote (and should be proud of) and how you approach the end user experience. We believe we can learn a lot from how you approach a small challenge like this and think it can be fun to write as well!

We will especially consider:

    Actually solving the problem
    Overall user experience
    Code organisation
    Quality
    Testing
    Readability

## Tech Stack

React JS, Jest, Sinon, Enzyme.


## Installation

- Run 'git clone https://github.com/JoshuaJFHolloway/Roomba' in your terminal


## Usage

- Run 'npm install'
- Run 'npm start'
- Visit 'localhost:3000' in your browser to see the app


## Approach

The first thing I did was draw out what I thought the application would look like. Following the
instructions set for what would minimally achieve what was being looked for. By doing this I could
determine what components I would need and where I would keep state.

It came apparent to me that there are different ways to bring this Roomba application to life, but
to me the easiest way was to make every single tile a component which knows its own ID. This way it would
be easier to pass certain properties to it. It would mount and check to see whether its dirty or whether
Roomba has been to clean it. It made sense to me and felt natural.

Creating the grid was interesting. I haven't created a grid of components before, but it worked out
well. I was looking at libraries to create a grid for me at the beginning however I quickly realised
that I would learn a lot more by just creating it myself.


## Things I am not happy with

1. The math.random function used as a key for one of the loops.

I will look to find a way more elegant solution to this.

2. Functions in the App.js that show repetition like all the direction functions. 

I will be looking to find a way to group them into a function that calls the correct direction
function depending upon an argument passed to the wrapping function. This way it prevents the 
repetition of functions like setting the state and the cleanTile function.

3. Having not tested the createColumns function in the Grid.js.

This is where I need to improve in my Jest/Enzyme/Sinon testing. I had some troubles with syntax.

4. Having not tested Compass, CompassAndGridWrapper and RoombaInputs.js.

I didn't test them because they had minimal to no logic in them. They are 99% HTML and so I didn't
feel the immediate need to test them. However, for coverage sake I will be doing this. It was only
due to time that I decided to leave them.


## Future Additions

Apart from adding what was aforementioned, there are a few features I would like to add.

1. Restart game button

Currently when the game finishes and the dirt patch is cleaned there is no way to restart the game (beyond refreshing the browser).
This would be accomplished by adding a restart game button that appears once the dirt has been cleaned
or maybe just once the grid is rendered.

2. The ability to add multiple dirt patches

This is something that I also didn't add immediately as I wanted an operational and well functioning
MVP. However, adding it would not be too difficult. I would just make the dirt state hold multiple
objects of the dirt co-ordinates and then they would be mapped onto the grid. An 'add another dirt tile'
button would be added to the form at the beginning.

3. Use redux !!

I am not very familiar with redux so I decided to not use it from the beginning. However, it would
have been very useful for this project. Using react state is all well and fine, but when you cascade
state down components it gets a bit messy and the code is needlessly made longer. Wrapping my project
in the redux store and accessing the state wherever I want would have refactored things nicely and I
look to integrate this into the app in the future.

4. CSS the project more

I added a bit of css at the end of the project so that it didn't look like a potato. Even so,
it could still do with a lot more umph and this is something I look forward to doing.

5. Other smaller features

Roomba being more than a tile border, a Roomba image maybe? 
A counter of how many moves you make so you can beat your own record?
A randomise dirt tiles button?
A timer that counts down while you navigate the grid?
Many opportunities to extend the application


## Screenshots of use!

Below you can see a screenshot of the application once loaded.

// screenshots of usage

## Contributors

Joshua Holloway