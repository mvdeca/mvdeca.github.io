var mongoose = require('mongoose');
var userSchema = require('./userSchema.js');
var passport = require('passport');
exports.createUser = function (pass, fname, lname, sid, em, mf, bday, gday, stat, cnum, text, shirt, pfn, pln, r, pm, pp, udate, addr, zcode) {
	return userSchema.count({email: em}, function whenCounted(err, count) {
		if (err) {
			throw err;
		}
		if (count > 0) {
			console.log("Can't create another user with same email");
			return false;
		}
		var user = new userSchema({
		    password: pass,
		    firstname: fname,
		    lastname: lname,
		    student_id: sid,
		    email: em,
		    gender: mf,
		    birthday: bday,
		    gradYear: gday, 
		    status: stat,
		    cell: cnum,
		    canText: text,
		    tshirt : shirt,
		    pfname: pfn,
		    plname: pln,
		    relation: r,
		    pmail: pm,
		    pphone: pp,
		    updates: udate,
		    address: addr,
		    zipcode: zcode,
		    hours: 0
		});
		user.save(function(err) {
			if (err) {
				console.log(err);
				throw err;
			}
			console.log('user: '+ fname +' created!');
		});
		return true;
	});
}


