import express, { Request, Response } from 'express';
import { getImage, resizeingImage } from '../Controllers/imageController';
import { imageDoesExist } from '../Middlewares/imageFinderMiddleware';

const router = express.Router();

router.get('/', (req: Request, res: Response): void => {
  // the most simple view just the sake of the api

  res.sendFile('index.html', { root: './src/Views' });
});
router.get('/image', (req: Request, res: Response): void => {
  // same goes here
  res.send(
    ' <h1> Please add the image name in the url then add width and height if you wish to resize it</h1>'
  );
});

router.get('/image/:imageName', imageDoesExist, getImage);
router.get('/image/:imageName/:width&:height', imageDoesExist, resizeingImage);

export default router;
