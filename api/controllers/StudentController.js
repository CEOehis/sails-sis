/**
 * StudentController
 *
 * @description :: Server-side logic for managing Students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	// prevent defauls sails actions
	  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },

  // REST create action
	create: function(req, res, next) {

	  var params = req.params.all();

	  Student.create(params, function(err, student) {

      if (err) return next(err);

      res.status(201);

      // res.json(student);
      return res.redirect('/students')

	  });
	},

	// REST read/get action
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

				return res.view('students/one', {student: student});
			})
		} else {
			var where = req.param('where');

			if(_.isString(where)) {
				where = JSON.parse(where);
			}

			var options = {
				limit: req.param('limit') || undefined,
				skip: req.param('skip') || undefined,
				sort: req.param('sort') || undefined,
				where: where || undefined
			};

			console.log("This is the options", options);

			Student.find(options, function(err, students) {
				if(students === undefined) return res.notFound();

				if(err) return next(err);

				return res.view('students/all', {title: 'SIS | All Students', students: students});
			});
		}

		function isShortCut(id) {
			if(id === 'find' || id === 'update' || id === 'create' || id === 'destroy') {
				return true;
			}
		}
	},

	// REST update action
	update: function (req, res, next) {
		var criteria = {};

		criteria = _.merge({}, req.params.all(), req.body);
		var id = req.param('id');

		if(!id) {
			return res.badRequest('No id provided.');
		}

		Student.update(id, criteria, function(err, student) {
			if(student.length === 0) return res.notFound();

			if(err) return next(err);
		  
		  res.json(student)
		});
	},

	// REST delete action
	destroy: function (req,res) {
		var id = req.param('id');
		if (!id) return res.send("No id specified.",500);

		Student.find(id, function foundStudent(err, result) {
			if (err) return res.send(err,500);
			if (!result) return res.send("No Student with that id exists.",404);

			Student.destroy(id, function studentDestroyed(err) {
				if (err) return res.send(err,500);

				return res.redirect('/students');
			});
			
		})
	}

};

