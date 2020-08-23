var express = require('express');
var router = express.Router();

var session = "";


//AWS Cognito Credentials
var AWSCognito = require('amazon-cognito-identity-js');
var CognitoUserPool = AWSCognito.CognitoUserPool;

var poolData = {
     UserPoolId : 'us-east-1_RllyT4xgF', // Your user pool id here
     ClientId : '72ee33kpk423n9n8aap4apr021' // Your client id here
 };

// POST registration page
var validateReq = function(userData) {
	var error = [];
	var count = 0;

	if (!userData.username) {
		error.add("Username missing")
		count++;
	} 
	if(!userData.password) {
		error.add("Password Missing")
		count++;
	}
	if(!userData.email) {
		error.add("Email Missing")
		count++;
	}
	if(!userData.phone_number) {
		error.add("Phone Number Missing")
		count++;
	}
	if (!userData.area_code) {
		error = error + '\n Area Code Missing'
		count++;
	}
	if(!userData.company) {
		error = error + "\n Company Missing"
		count++;
	}
	if (userData.partner_code.toLowerCase() !== "iamironman050208") {
		error = error + "\n Partner Code is not Valid"
		count++;
	}
	if (userData.password !== userData.passwordRepeat) {
		error = error + "\n Passwords do not Match"
		count++;
	}

	if(count > 0 ) {
		return({'success' : false, 'message': error})
	} else {
		return({'success' : true, 'message': 'passes test'})
	}

};


/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});



router.post('/login', function(req, res, next) {

	if (req.body.username === 'MassChallenge' && req.body.password === 'TempUser123') {
		console.log('session', process.env.SESSION)
		session = "BradyisGoat";
		process.env.SESSION = "BradyisGoat";
		console.log('session', process.env.SESSION)
		res.redirect('/dashboard');

/*

	    var authenticationData = {
	        Username : 'username',
	        Password : 'password',
	    };
	    var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);

	    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
	    var userData = {
	        Username : 'username',
	        Pool : userPool
	    };
	    var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
	    cognitoUser.authenticateUser(authenticationDetails, {
	        onSuccess: function (result) {
	            console.log('access token + ' + result.getAccessToken().getJwtToken());
	            
	            console.log('idToken + ' + result.idToken.jwtToken);
	        },

	        onFailure: function(err) {
	            alert(err);
	        },

    	});
*/
	} else if (req.body.username === 'SachaBest' && req.body.password === 'TempUser123') {
		console.log('session', process.env.SESSION)
		session = "SpaceX4Life";
		process.env.SESSION = "SpaceX4Life";
		console.log('session', process.env.SESSION)
		res.redirect('/dashboard');

	}
	 else {
		res.redirect('/login');
		console.log("Incorrect login");
	}
	
});

router.get('/logout', function(req, res, next) {
	console.log('before', process.env.SESSION);
	session = "";
	process.env.SESSION = "";
	console.log('after', process.env.SESSION);

	res.render('logout');

})



router.get('/register', function(req, res, next) {
	res.render('register');
});
router.post('/register', function(req, res, next) {

	var ret = validateReq(req.body);

	if (!ret.success) {
		res.render('register', {
			error: ret.message,
			data: req.body
		})
	} else {


		var userPool = new CognitoUserPool(poolData);

	    var attributeList = [];

	    var dataEmail = {
	        Name : 'email',
	        Value : req.body.email
	    };

	    var dataPhoneNumber = {
	        Name : 'phone_number',
	        Value : req.body.phone_number
	    };

	    var dataCompany = {
	    	Name : 'custom:Company',
	    	Value : req.body.company
	    }

	    var attributeEmail = new AWSCognito.CognitoUserAttribute(dataEmail);
	    var attributePhoneNumber = new AWSCognito.CognitoUserAttribute(dataPhoneNumber);
	    var attributeCompany = new AWSCognito.CognitoUserAttribute(dataCompany)

	    attributeList.push(attributeEmail);
	    attributeList.push(attributePhoneNumber);
	    attributeList.push(attributeCompany);

	    userPool.signUp(req.body.username, req.body.password, attributeList, null, function(err, result){
	        if (err) {
	            console.log(err);
	            return;
	        }
	        cognitoUser = result.user;
	        console.log('user name is ' + cognitoUser.getUsername());
	        req.cognitoUser = cognitoUser;

	        console.log('reqCognitoUser is: ' + req.cognitoUser);

	        res.redirect('/login')
	    });
	}
})


module.exports = router;
