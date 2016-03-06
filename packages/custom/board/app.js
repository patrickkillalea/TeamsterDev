'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Board = new Module('board');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Board.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Board.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Board.menus.add({
    title: 'Board',
    link: 'board example page',
    roles: ['anonymous'],
    menu: 'main'
  });
  
  Board.aggregateAsset('css', 'board.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Board.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Board.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Board.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Board;
});
