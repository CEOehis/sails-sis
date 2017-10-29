/**
 * StartController
 *
 * @description :: Server-side logic for managing starts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	  _config: {
    actions: false
  },
  index: function (request, response) {
    return response.view('start');
  }		
};

