/**
 * StudentController
 *
 * @description :: Server-side logic for managing Students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res, next) {

	  var params = req.params.all();

	  Student.create(params, function(err, student) {

      if (err) return next(err);

      res.status(201);

      res.json(student);

	  });
	},
	find: function (req, res, next) {
		res.json({todo: work on read action})
	},
	update: function (req, res, next) {
		res.json({todo: work on update action})
	}
	destroy: function (req, res, next) {
		res.json({todo: work on destroy action})
	}

};

