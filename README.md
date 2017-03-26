# JS Data Assignment

## Assignment Goals:

- gain a deeper appreciation for how JavaScript variables are created scoped
- create JSON Data to represent an object
- build objects from JSON data
- use jQuery Ajax methods to add HTML to display the object

## GitHub Repository
https://github.com/htc-ccis2591/js-data/

You’ll want to begin each assignment by forking the repository and cloning it locally.  When you are done, you’ll push to GitHub and submit a pull request.

## Moonflower Specials & Features
Add information to the aside to highlight the montly features and weekly specials.  

### Put the Data into JSON
Use the information below to create a new JSON file to hold both the featured items for the month and the weekly specials. Call the file specials.json. Since the number of features & specials may change, you want to use arrays to hold the values for each.  Build two arrays in the file, one for the featured items, and a second array for the weekly specials.

#### Features
Item 1:

- name: Hazelnut Cappuccino
- image: images/cappuccino.jpg
- description: A warm, soothing cappuccino with a touch of hazelnut to warm you as the weather turns.

Item 2:
- name: Chocolate Cake
- image: images/choc-cake.jpg
- description: Our chocolate cake is rich, moist, and dark.  More chocolate to love.

#### Specials
Item 1:

- id: FLAV50
- description: 50% off flavor shots.
- location: main, sister
        
Item 2:

- id: "BEAN10",
- description: "10% off all 1lb bags of coffee beans."
- location: main

Item 3:
- id: "WCMOS25",
- description: "25% off our white chocolate mandarin scones."
- location: sister

### Use the Data to Show the Features
Use your JSON data to build and add HTML to show the two featured items in the “featured-items” div.  Create a heading for both the Monthly Features and the Weekly Specials and add the items under the appropriate heading using JavaScript. For the Features, display only the name and description.  For the specials, display the description and the locations (for main, display Gridania Ave; for sister, display Limsa Lane). The code that you write should be able to add any number of items for each heading to the page.  
