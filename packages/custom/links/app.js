'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Links = new Module('links');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Links.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Links.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Links.menus.add({
    title: 'Links',
    link: 'links example page',
    roles: ['anonymous'],
    menu: 'main'
  });
  
  Links.aggregateAsset('css', 'links.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Links.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Links.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Links.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Links;
});
