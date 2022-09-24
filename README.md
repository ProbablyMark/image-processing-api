# image-processing-api

- an image processing api for resiezing images using node.js,express,js,sharp and jasmine for testing .

# content

    -   simple router to handle requests :
    -   a /image/:imageName  route that handles getting a specific image from the disk
        (saved in /assets/images/full) .
    -   a /image/:imageName/:width&:height  route that handles resizing a specific image and creating a resized copy
        (saved in /assets/images/thumb).

# to install and run (and other useful scripts)

- Install: `npm install`
- Build: `npm run build`
- Lint: `npm run lint`
- Prettify: `npm run prettify`
- Run unit tests: `npm run test`
- Start server: `npm start`
