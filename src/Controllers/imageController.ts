import express, { NextFunction, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
/////
export function getImage(req: Request, res: Response) {
  let imagePath: string = path.join(
    __dirname,
    `../../assets/images/full/${req.params.imageName}.jpg`
  );
  try {
    res.sendFile(imagePath);
  } catch (error) {}
}

export async function resizeImage(req: Request, res: Response) {
  let imagePath: string = path.join(
    __dirname,
    `../../assets/images/full/${req.params.imageName}.jpg`
  );
  let thumbPath: string = path.join(
    __dirname,
    `../../assets/images/thumb/${
      req.params.imageName + req.params.width + 'x' + req.params.height
    }.jpg`
  );
  try {
    await sharp(imagePath)
      .resize(parseInt(req.params.width), parseInt(req.params.height))
      .toFormat('jpg')
      .toFile(thumbPath);
    res.sendFile(thumbPath);
  } catch (error) {}
}
