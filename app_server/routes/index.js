const express = require('express');
const router = express.Router();
/* I just created 2 variables below as instructed in Ch 4*/
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/*const ctrlMain = require ('../controllers/main');

The code above was taken out as I was learning how to call contollers out from the route folder (Chapter 4).

*/

/*const homepageController = (req, res) => {
  res.render ('index', { title: 'Express'});
};
--old code-- the below was referencing homepage controller within the file. We moved the code to a new file.
*/

/* GET home page. */
/*Becuase the below is related to the ctrlMain that I took out from above I need to upddate the below*/

/*router.get('/', ctrlMain.index);*/

/* I added the following */

/* Locations page */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
