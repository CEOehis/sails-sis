/**
 * StudentController
 *
 * @description :: Server-side logic for managing Students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	  _config: {
    actions: false
  },
	create: function(req, res, next) {

	  var params = req.params.all();

	  Student.create(params, function(err, student) {

      if (err) return next(err);

      res.status(201);

      res.json(student);

	  });
	},
	find: function (req, res, next) {
		var id = req.param('id');
		var idShortCut = isShortCut(id);

		if(idShortCut) {
			return next();
		}

		if (id) {
			Student.findOne(id, function(err, student) {
				if(student === undefined) return res.notFound();

				if(err) return next(err);

				res.json(student)
			})
		} else {
			var where = req.param('where');

			if(_.isString(where)) {
				where = JSON.parseJSON(where);
			}

			var options = {
				limit: req.param('limit') || undefined,
				skip: req.param('skip') || undefined,
				sort: req.param('sort') || undefined,
				where: where || undefined
			};

			console.log("This is the options", options);

			Student.find(options, function(err, student) {
				if(student === undefined) return res.notFound();

				if(err) return next(err);

				res.json(student);
			});
		}

		function isShortCut(id) {
			if(id === 'find' || id === 'update' || id === 'create' || id === 'destroy') {
				return true;
			}
		}
	},
	// update: function (req, res, next) {
	// 	res.json({todo: work on update action})
	// }
	// destroy: function (req, res, next) {
	// 	res.json({todo: work on destroy action})
	// }

};

