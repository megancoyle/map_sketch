# Map Sketch

## Overview
MapSketch is a web app built on Ruby on Rails. The drawing functionality is made possible with JavaScript.

![Screenshot](screenshot.jpg)

[View the Deployed App](https://nameless-castle-46609.herokuapp.com/)

## Technologies Used
* [Google Static Image Map API](https://developers.google.com/maps/documentation/static-maps/): for the HTML5 canvas background image
* [jscolor](http://jscolor.com/): for the colorpicker
* [Devise](https://github.com/plataformatec/devise): for user authentication
* HTML5 Canvas & JavaScript: for the functionality of drawing on a map
* [CarrierWave](https://github.com/carrierwaveuploader/carrierwave): for uploading images
* [AWS](https://aws.amazon.com/): hosting images on a server
* [Heroku](http://www.heroku.com/): hosting the deployed app


## Planning
<p align="center">
![ERD](erd.jpg)
</p>

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

### And lastly, a major "nice to have..."
* Somehow storing the drawing coordinates so when users edit a map, they can edit the last drawing made on a specific map
