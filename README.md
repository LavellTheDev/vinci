# vinci
vinci from scratch

### To clone project:
`git clone https://github.com/LavellTheDev/vinci.git`

### To start project:
cd into project folder.

Run `npm start`  or `node ./bin/www` to start project server.

Open `localhost:3000` in a browser window.

### Project Versions:
To use the panel version of the project use the `new` branch. The margins need to be fixed due to the frameset issue. The framework we used for the panels version of the site is called Scroll Trigger. More information on how to use this framework can be found here: https://greensock.com/scrolltrigger/

To use the version of the site without panels, use the `nopanel` branch. The margins are complete for mobile and laptop views, and mostly complete for larger desktop views.
The contact form also needs to be connected to the mailer used in the project.

### Tailwind CSS
The CSS framework used is tailwind css which uses classes to add CSS properties to elements. You can find more info and default class names here: https://tailwindcss.com/

The overrides we added for tailwind are located in the `tailwind.config.js` file. 
If you want to change tailwind defaults or add your own custom CSS to tailwind you can put them in this file and run the following command to process the CSS: `npx tail windcss build src/styles.css -o public/css/output-styles.css`.

### Where to find certain image files:
The majority of images are found in the `public/img` directory. But there are a few images used as background images that can be found in certain CSS files.

- Certain images on the About page can be found as background images in `about.css`

- Partners page hero image is a background image and can be found in the partners.css file.

- Blogs images can be found as bg images in `blogs.css`

- Careers hero img can be found in `careers.css`

- Services page images can be foun in `services.css`


### Adding job descriptions to the Careers page:
The careers job section is made up of HTML `details` tags. This is an element that allows for info to be expanded when clicked on (like on most FAQ pages). You can find more info about this element here: https://developer.mozilla.org/es/docs/Web/HTML/Elemento/details

The basics of how to use it is you have a `details` tag which acts as a container for the information. You then provide a title in the `summary` section (such as job title), then any of the job description info (such as location, position tilte, etc.) can go under the summary tag in `<p>` tags or any other html elements you wish to use.

An example is provided here for easy reference:
#### how it looks as code:
`<details>`
<br>
  `<summary>Position Title</summary>`
  <br>
  `<p>More info about the position, etc. goes here under the summary tag.</p>`
  <br>
`</details>`

#### how it looks when you use it (with no CSS):
<details>
  <summary>Position Title</summary>
  <p>More info about the position, etc. goes here under the summary tag.</p>
</details>

### Deploying to heroku: 
Depending on which branch you choose to use, you can push to heroku after adding and commiting your files to the github repo. On the `Deploy` page of heroku, there is an option to deploy using github which is easier than using the terminal. Simply select the branch you want to deploy (in this case it will be `nopanel` or `new`) and then click the deploy button. 

### Rolling back to a different site version:
You can easily rollback to previous versions of the site by visiting the `Activity` page on heroku and clicking a version to rollback to from the list of prior deploys.


### Browser compatability:
Most of our development was done in Chrome. Some of the margins/CSS may look off in Firefox due to differences in browsers. This can be modified using  broswer prefixes. You can find more info on this here: https://developer.mozilla.org/es/docs/Glossary/Vendor_Prefix

