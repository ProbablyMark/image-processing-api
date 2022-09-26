import { NextFunction, Request, Response } from 'express';

import path from 'path';

import { resizeImage } from '../Utilities/imageUtils';
/////
export function getImage(req: Request, res: Response, next: NextFunction) {
  const imagePath: string = path.join(
    __dirname,
    `../../assets/images/full/${req.params.imageName}.jpg`
  );
  try {
    res.sendFile(imagePath);
  } catch (error) {
    next(error);
  }
}

export async function resizeingImage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const width: string = req.params.width;
  const height: string = req.params.height;
  try {
    if (
      isNaN(Number(width)) ||
      isNaN(Number(height)) ||
      Number(width) <= 0 ||
      Number(height) <= 0
    ) {
      res.send('<h1>please enter valid dimensions and try again </h1>');
    } else {
      const thumbPath: string = await resizeImage(
        req.params.imageName,
        req.params.width,
        req.params.height
      );
      res.sendFile(thumbPath);
    }
  } catch (error) {
    next(error);
  }
}
