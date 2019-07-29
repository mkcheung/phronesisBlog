const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const validator = require('validator');

const UserSchema = new Schema({
	email:{
		type: String,
		unique: true,
		lowercase: true,
		trim:true,
		validate: [validator.isEmail, 'Invalid Email Address'],
		required: 'Please supply an email address'
	},
	firstName:{
		type: String,
		trim:true,
		required: 'Please supply a first name'
	},
	lastName:{
		type: String, 
		trim:true,
		required: 'Please supply a last name'
	},
	hashPassword:{
		type:String,
		required:true
	},
	created: {
		type:Date,
		default:Date.now
	},
	isAdmin: Boolean,
	loggedIn: Boolean,
	resetPasswordToken: String,
	resetPasswordExpires: Date,
});

UserSchema.methods.generateAuthToken = function() { 
  const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('myprivatekey')); //get the private key from the config file -> environment variable
  return token;
}

const User = mongoose.model('User', UserSchema);

function validateUser(user) {
  const schema = {
    firstName: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    hashPassword: Joi.string().min(3).max(255).required()
  };

  return Joi.validate(user, schema);
}

// UserSchema.methods.comparePassword = function(password) {
// 	return bcrypt.compareSync(password,this.hashPassword);
// };

exports.User = User; 
exports.validate = validateUser;