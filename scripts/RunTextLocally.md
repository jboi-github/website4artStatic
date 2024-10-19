# How to run and test locally
1. Create and start docker image to run react-server:

	`cd website4artStatic`
	
    `docker run --rm --volume ${PWD}:/usr/api --workdir /usr/api -ti -p 3000:3000 node:latest /bin/bash`
2. run install your app

    `#> npm install`

    `#> npm start`
3. open `http://localhost:3000` in browser

    [react-browser](http://localhost:3000)

4. Saving a file automatically updates the site. If not, press "reload" on the browser
5. You can right-click on an an element in the browser and go to "inspect element" to understand why it is rendered as it is.
