import express, { NextFunction, Request, Response } from 'express';
import { getImage, resizeImage } from '../Controllers/imageController';
import { imageDoesExist } from '../Middlewares/imageFinderMiddleware';

const router = express.Router();

router.get('/', (req: Request, res: Response): void => {
  // This could be done by serving views ... Just quick and dirty for now :-)
  res.send(
    '<h1>Welcome to image-processing-api</h1><p>Listening at <code><a href="/api/images">/api/images</a></code> for queries containing at least a valid filename. Optionally use both width and height to set the size...</p><p>Examples:<ul><li><a href="/api/images?filename=fjord">/api/images?filename=fjord</a></li><li><a href="/api/images?filename=fjord&width=100&height=100">/api/images?filename=fjord&width=100&height=100</a></li></ul></p>'
  );
});
router.get('/image/:imageName', imageDoesExist, getImage);
router.get('/image/:imageName/:width&:height', imageDoesExist, resizeImage);

export default router;
