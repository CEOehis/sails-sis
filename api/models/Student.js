/**
 * Student.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	firstName: {
  		type: 'string',
  		size: 128,
  		required: true
  	},
  	middleName: {
  		type: 'string',
  		size: 128,
  	},
  	lastName: {
  		type: 'string',
  		size: 128,
  		required: true
  	},
  	mobile: {
  		type: 'string',
  		size: 128,
  		required: true
  	},
  	dateOfBirth: {
  		type: 'date',
  		required: true
  	},
  	email: {
  		type: 'string',
  		size: 128,
  		required: true,
  	},
  	gender: {
  		type: 'string',
  		enum: ['Male', 'Female'],
  		required: true,
  		size: 16
  	},
  	address: {
  		type: 'string',
  		size: 128,
  		// required: true
  	},
  	city: {
  		type: 'string',
  		size: 128,
  	},
  	State: {
  		type: 'string',
  		size: 128
  	}

  	// contacts: {
   //    type: 'string',
   //    enum: ['mobile', 'work', 'home', 'skype', 'email'],
   //    required: true,
   //    size: 16
   //  },
   //  value: {
   //    type: 'string',
   //    size: 128,
   //    required: true
   //  },
    // student: {
    //   model: 'Student',
    //   required: true
    // }

    // contacts: {
    //   collection: 'StudentContact',
    //   via: 'student'
    // }
  }
};

