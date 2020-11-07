Hello Node.js and Docker
========================

Project depedencies
-------------------
 * [Docker](https://www.docker.com/)
 * [Node.js](https://nodejs.org/en/) >= 12.8


Run server in Docker
--------------------

 1. Prepare the image:
 ```{shell}
 $ docker build --tag node-docker .
 ```
 *Note: Use with `--network host` if the above command fails to install npm packages.*

 2. Run the container:
 ```{shell}
 $ docker run --publish 127.0.0.1:3000:8080 --name first-app node-docker

 Running on http://0.0.0.0:8080
 Brought by docker
 ```

 *Note: You can use whatever `--name` and whichever host address instead of `first-app` and `127.0.0.1:3000` you want.*

 3. Open a browser at http://127.0.0.1:3000 and see the server running

 4. Stop the container and thus, the server with:
 ```{shell}
 $ docker stop first-app
 ```


Run server without Docker
-------------------------

 1. Install depedencies:
 ```{shell}
 $ npm install
 ```

 2. Run the server locally with:
 ```{shell}
 $ node server.js --host=127.0.0.1 --port=3000

 Running on http://127.0.0.1:3000
 Brought by <username>
 ```

 3. Stop the server by pressing <kbd>Ctrl</kbd>+<kbd>C</kbd>.

Open a browser at http://127.0.0.1:3000 and see the server running
