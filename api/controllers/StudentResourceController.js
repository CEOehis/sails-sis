/**
 * StudentResourceController
 *
 * @description :: Server-side logic for managing Studentresources
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	  // REST create action
	create: function(req, res, next) {

	  var params = req.params.all();

	  StudentResource.create(params, function(err, resource) {

      if (err) return next(err);

      res.status(201);

      // res.json(resource);
      return res.redirect('/studentresource')

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
			StudentResource.findOne(id, function(err, resource) {
				if(resource === undefined) return res.notFound();

				if(err) return next(err);

				res.view('resources/post', {resource: resource})
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

			StudentResource.find(options, function(err, resources) {
				if(resources === undefined) return res.notFound();

				if(err) return next(err);

				res.view('resources/index', {resources: resources});
			});
		}

		function isShortCut(id) {
			if(id === 'find' || id === 'update' || id === 'create' || id === 'destroy') {
				return true;
			}
		}
	},
}

