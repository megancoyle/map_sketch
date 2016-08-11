# Map Sketch

## Overview
MapSketch is a web app built on Ruby on Rails. The drawing functionality is made possible with JavaScript.

[![Screenshot](screenshot.jpg)](https://nameless-castle-46609.herokuapp.com/)

[View the Deployed App](https://nameless-castle-46609.herokuapp.com/)

## Technologies Used
* [Google Static Image Map API](https://developers.google.com/maps/documentation/static-maps/): for the HTML5 canvas background image
* [jscolor](http://jscolor.com/): for the color picker
* [Devise](https://github.com/plataformatec/devise): for user authentication
* HTML5 Canvas & JavaScript: for the functionality of drawing on a map
* [CarrierWave](https://github.com/carrierwaveuploader/carrierwave): for uploading images
* [AWS](https://aws.amazon.com/): hosting images on a server
* [Heroku](http://www.heroku.com/): hosting the deployed app

## Approach
I knew that I wanted to make some sort of drawing app after previously working with HTML5 canvas for a Hangman app, but the question was, what kind of drawing app? I also knew that I wanted to work with an API and mapping. So why not merge that all together?

I started off putting the skeleton in place for the CRUD functionality. Once I had that working, I tackled the drawing functionality with JavaScript. Although it would have been interesting to figure out how to code a color picker from scratch, I decided to use someone else's code for that feature. Next, I worked on styling so the app looked the way I wanted it to. Then I worked on refining different areas of the application.

## Demo
[![Video](video-screenshot.png)](https://www.youtube.com/watch?v=u_wI2sjHQZQ)

## Planning
![ERD](erd.jpg)

### User Stories
* As a user, I can draw on a map digitally.
* As a user, I can add new drawings.
* As a user, I can update previous drawing information I've added.
* As a user, I can delete drawings I no longer want to see in my account.

[View more User Stories](planning/user_stories.md)

## Installation
The app requires a Google API key and AWS key if you wish to fork it and work on your own version.

## Unsolved Problems/Next Steps
* Email authentication for users who sign up by using ActionMailer
* Fine-tuning the user experience of adding map images to the site or possibly encoding/decoding images so they are stored in the database
* Giving users the ability to erase lines
* Giving users the ability to change the stroke width
* Adding the 'get address' ability to the form so users can dynamically change the location for what map they draw on
* Ability to increase/decrease the zoom of the map

### And lastly, a major "nice to have..."
* Somehow storing the drawing coordinates so when users edit a map, they can edit the last drawing made on a specific map
