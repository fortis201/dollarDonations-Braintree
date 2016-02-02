I made this project to try out the Braintree API with a full MEAN application.

Angular Seed Starter Kit was forked and cloned from: https://github.com/angular/angular-seed

I added the server folder and server.js to make this into a full MEAN project.
Removed and renamed some files and folders from the original starter kit.

Type "npm install" in the teminal before running the server. This command was preconfigured by the AngularSeed owner to install bower_components in the /app directory. You'll find this configuration in the package.json file.

You will need node and mongodb installed globally in your computer to run this app. 

To run the app, open two terminal tabs. On one of them, enter "sudo mongod" to start the mongo database. Let it run on its own. Transfer to the second terminal tab and enter "node server.js" or "nodemon server.js" to run the app itself. I had set the local port to "1232" in the server.js file. Feel free to change it to a different port number you want to use. 

After both mongod and server.js are running, open a browser and in the address bar, enter "localhost:1232" to view the app.

Note: It's not a real-money-transaction donation app. No money will be forwarded to anyone using the default credit card values in the Braintree sandbox.