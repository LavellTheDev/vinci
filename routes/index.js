var express = require('express');
var router = express.Router();
var helper = require('sendgrid').mail;
var FileSaver = require('file-saver');
var mongoose = require('mongoose');
var Email = require('../models/models').Email;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('indexnew', { title: 'Express' });
});

router.get('/indexnew', function(req, res, next) {
  res.render('indexnew', { title: 'Express' });
});

router.get('/blogs-VR-Training-Cases', function (req, res, next) {
  res.render('blog_usecases', {'black': true})
})

router.get('/harness', function (req, res, next) {
  res.render('harness.hbs')
})

router.get('/blogs-VR-Saving-Millions', function(req, res, next){
  res.render('blog_saving', {'black': true})
})

router.get('/blogs-Applications-XR', function(req, res, next) {
  res.render('blog_xrtypes', {'black': true})
})

router.get('/case-studies-USAF', function(req, res, next) {
  res.render('case_USAF', {'black': true})
})

router.get('/terms', function(req, res, next) {
	res.render('terms')
})

router.get('/store', function(req, res, next) {
	res.render('store');
})

router.get('/about', function(req, res, next) {
	res.render('about');
})

router.get('/defense', function(req, res, next) {
	res.render('defense');
})

router.get('/partners', function(req, res, next) {
	res.render('partners');
})

router.get('/contact', function(req, res, next) {
	res.render('contact');
})

router.get('/careers', function(req, res, next) {
  res.render('careers');
})

router.get('/services', function(req, res, next) {
  res.render('services');
})



router.get('/thanks', function(req, res, next) {
	res.render('contact', {message: 'Thanks - We Will Be In Touch Shortly!'});
})

router.get('/blogs', function(req, res, next) {
  res.render('blogs', {'black': true});
})

router.post('/storeemail', function(req, res, next) {

  var email = new Email({
    email: req.body.email,
    dateAdded: new Date()
  })

  email.save(function(error, email){
    if (error){
      res.send({'success': false, 'message': 'unknown error'})
    } else {

      res.send({'success': true, 'message': 'email saved'})
    }
  })

})

// router.get ('/hardware-store', function(req, res, next) {
//   res.render('hardware');
// })

// router.post ('/hardware-store', function(req, res, next) {
//   // Set your secret key: remember to change this to your live secret key in production
// // See your keys here: https://dashboard.stripe.com/account/apikeys
// var stripe = require("stripe")("sk_live_Ii6aytRuK8UBLAaMcLWgW3M9");

//     // Token is created using Checkout or Elements!
//     // Get the payment token ID submitted by the form:
//     const token = req.body.stripeToken; // Using Express



//     const charge = stripe.charges.create({
//       amount: 360200,
//       currency: 'usd',
//       description: 'VR Weapons Pack',
//       source: token,
//       receipt_email: 'agardony@gmail.com',
//     });



//     res.redirect('/thanks-store')
// })


// router.get('/thanks-store', function (req, res, next){
//   res.render('thanks');
// })

router.post('/contact', function(req, res, next){


	   var from_email = new helper.Email('message@vinci-vr.com');
            var to_email = new helper.Email('internal.vinci@gmail.com');
            var subject = 'New Message From Website';
            var content = new helper.Content('text/plain', 'Name: ' + req.body.name + ' Email: ' + req.body.mail + " Message: " + req.body.subject);
            var mail = new helper.Mail(from_email, subject, to_email, content);

            var sg = require('sendgrid')('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');
            var request = sg.emptyRequest({
              method: 'POST',
              path: '/v3/mail/send',
              body: mail.toJSON(),
            });

            sg.API(request, function(error, response) {
              console.log(response.statusCode);
              console.log(response.body);
              console.log(response.headers);

                       res.redirect('/thanks');


		        })

})

router.get('/demo', function(req, res, next) {
	res.render('demo');
})

module.exports = router;
