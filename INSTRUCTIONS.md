# Youtube - 
https://www.youtube.com/watch?v=f7BJFTEbc10

npm install -g @angular/cli

# generate project
Which stylesheet format would you like to use? (SCSS)
enable Server-Side Rendering and SSG? No

cd tutorial

$ ng g c home
Would you like to enable autocompletion? This will set up your terminal so pressing TAB while typing Angular CLI commands will show  
possible options and autocomplete arguments. (Enabling autocompletion will modify configuration files in your home directory.) (Y/n) 

# setup nodejs server for testing
git clone https://github.com/thecodedeck/angular-cc-1-server.git server
cd server
npm i

# import media assets
git clone https://github.com/thecodedeck/angular-cc-1-client.git lib
copy src/assets/ from lib to tutorial

# running project
# tutorial
ng serve - http://localhost:4200/

# fetch from server (endpoints)

# server
npm start

# tutorial
ng g s services/api
ng g s services/products

ng serve

# creating the layout

ng g c layout/header
ng g c layout/footer

# introduction into primeNG

npm i primeng

# make the product component
 
ng g c components/product

# pagination

https://primeng.org/paginator

# add crud services & function

...

# add edit, create and delete buttons to UI

https://primeng.org/dialog
https://primeng.org/button

ng g c components/edit-popup
npm i primeicons --save

# modules
"one-time module import"

ng g m modules/about-us --routing
ng g c modules/about-us/about-us --standalone=false
http://localhost:4200/about-us

ng g c modules/about-us/about-us-2 --standalone=false
http://localhost:4200/about-us/about-us-2
"after working, delete about-us-2"

# header nav

...

# favicons

https://favicon.io/favicon-generator/
ng serve - website - inspect - application - icons tab

# change to UI

...

# pipes (reusable functions)

ng g p pipes/truncate-name