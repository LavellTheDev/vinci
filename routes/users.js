var express = require('express');
var router = express.Router();

//AWS S3 
var AWS = require('aws-sdk');
var awsConfig = require('aws-config');

//Account info

var bucketName = "";
var name = "";
var AKID = "";
var SAK = "";

var s3 = new AWS.S3(awsConfig({accessKeyId: "AKIAJF6JTBHGESLCV2MA", secretAccessKey: "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", region: "us-east-1" }));

var fsystem = require('fs');

var models = [];

//setting up multer middleware for file processing
var multer = require('multer');
//var upload = multer();
var multerS3 = require('multer-s3');

var multerInner = {
	storage: multerS3({
		s3: s3,
		bucket: "sachabest.01",
		acl: 'public-read',
		metadata: function (req, file, cb) {
		  cb(null, {fieldName: file.fieldname});
		},
		key: function (req, file, cb) {
		  cb(null, file.originalname)
		}
		})
	};

var upload = multer(multerInner);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/dashboard', function(req, res, next) {

	if (process.env.SESSION === "SpaceX4Life") {

		console.log('inside multer first', multerInner);

		//new part
		AWS.config.update({
		    accessKeyId: "AKIAJF6JTBHGESLCV2MA",
		    secretAccessKey: "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",
		    region: "us-east-1"
		});

		bucketName = "sachabest.01";
		name = "SACHA";
		console.log("bucketName updated to " + bucketName);

		upload = multer({
			storage: multerS3({
			s3: s3,
			bucket: "sachabest.01",
			acl: 'public-read',
			metadata: function (req, file, cb) {
			  cb(null, {fieldName: file.fieldname});
			},
			key: function (req, file, cb) {
			  cb(null, file.originalname)
			}
			})
		});


	} else if (process.env.SESSION === "BradyisGoat") {

		console.log('inside multer first', multerInner);


		//new part
		AWS.config.update({
		    accessKeyId: "AKIAJMSSKYSBZNRJSWSQ",
		    secretAccessKey: "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",
		    region: "us-east-1"
		});

		bucketName = "masschallenge.01";
		name = "MASSCHALLENGE";
		console.log("bucketName updated to " + bucketName);

		upload = multer({
			storage: multerS3({
			s3: s3,
			bucket: "masschallenge.01",
			acl: 'public-read',
			metadata: function (req, file, cb) {
			  cb(null, {fieldName: file.fieldname});
			},
			key: function (req, file, cb) {
			  cb(null, file.originalname)
			}
			})
		})

	}

	//s3 = new AWS.S3(awsConfig({accessKeyId: AKID, secretAccessKey: SAK, region: "us-east-1" }));

	if (process.env.SESSION.length > 0) {
		console.log('logged in with session id ' + process.env.SESSION);
		console.log('logged in with bucketName' + bucketName);
		var params = {
		  	Bucket: bucketName, 
		  	MaxKeys: 20
		};

		s3.listObjects(params, function (err, data) {
			if (err) {
				console.log("Call didn't work!");
				console.log(err, err.stack); 
			} else {
	  			console.log("Successful response!");
	  			console.log(data);

	  			res.render('dashboard', {
					username: name,
					models: data['Contents'],
				});
	  		}
		});
	} else {
		res.redirect('/login');
	}
	
});

router.post('/dashboard-trash', upload.array(), function(req, res, next) {

	console.log("req is " + req);
	console.log(req.body.deleteFile);
	console.log("req file nameeeee is " + req.body.deleteFile);

	var params = {
		Bucket: bucketName, 
		Delete: { 
		    Objects: [ 
		      {
		        Key: req.body.deleteFile // required
		      }
		    ],
		},
	};

	s3.deleteObjects(params, function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else {
		  	console.log(data);           // successful response
		  	res.redirect('/dashboard');
		}    
	});

})

router.post('/dashboard-upload', upload.single('myFile'), function(req, res, next) {
	// upload button was pressed
	console.log('STUFFFF', upload);
	console.log('STUFFFF2', upload.storage);
	console.log('inside multer', multerInner);
	console.log("Posting!");
	res.redirect('/dashboard');

	

	/*

	fsystem.readFile('IMG_5030.jpg', function (err, data) {
	  if (err) { throw err; }

	  var base64data = new Buffer(data, 'binary');

	  var s3 = new AWS.S3();
	  s3.putObject({
	    Bucket: 'masschallenge.01',
	    Key: req.body.myFile,
	    Body: base64data,
	    ACL: 'public-read'
	  },function (resp) {
	    console.log(arguments);
	    console.log('Successfully uploaded package.');
	  });
	});

	

	var filereader = new FileReader();
	*/

	//res.send('Successfully uploaded files!');


	/*

	var params = {
		Body: req.file,
		Bucket: "masschallenge.01",
		Key: req.file.originalname
	}

	s3.putObject(params, function (err, data) {
		if (err) {
			console.log("Post call didn't work!");
			console.log(err, err.stack)
		} else {
			console.log("Successful post!");
		}
	});
	*/
	

});


module.exports = router;

