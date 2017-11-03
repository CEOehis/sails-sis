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
  	},
  	middleName: {
  		type: 'string',
  		size: 128,
  	},
  	lastName: {
  		type: 'string',
  		size: 128,
  	},
  	mobile: {
  		type: 'string',
  		size: 128,
  	},
  	dateOfBirth: {
  		type: 'datetime',
  	},
  	email: {
  		type: 'string',
  		size: 128,
  	},
  	gender: {
  		type: 'string',
  		enum: ['male', 'female'],
  		size: 16
  	},
    religion: {
      type: 'string',
      enum: ['bhudism', 'christianity', 'islam'],
    },
  	address: {
  		type: 'string',
  		size: 128,
  	},
  	city: {
  		type: 'string',
  		size: 128,
  	},
  	state: {
  		type: 'string',
  		size: 128
  	},
    course: {
      type: 'string',
      size: 128,
    },
    level: {
      type: 'string'
    },
    grade: {
      type: 'string'
    }
  }
};

