const express = require('express');
const router = express.Router();
const ctrlMain = require ('../controllers/main');

/*const homepageController = (req, res) => {
  res.render ('index', { title: 'Express'});
};
--old code-- the below was referencing homepage controller within the file. We moved the code to a new file.
*/

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
