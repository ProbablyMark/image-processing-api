import { NextFunction, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

export function imageDoesExist(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const imagePath: string = path.join(
    __dirname,
    `../../assets/images/full/${req.params.imageName}.jpg`
  );

  if (fs.existsSync(imagePath)) {
    next();
  } else {
    res.send('<h2> Make sure you type the correct name<h2>');
  }
}
