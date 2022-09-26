import fs from 'fs';
import path from 'path';

import sharp from 'sharp';
/////

export async function resizeImage(
  imageName: string,
  width: string,
  height: string
): Promise<string> {
  const imagePath: string = path.join(
    __dirname,
    `../../assets/images/full/${imageName}.jpg`
  );
  const thumbPath: string = path.join(
    __dirname,
    `../../assets/images/thumb/${imageName + width + 'x' + height}.jpg`
  );
  const resize = async () => {
    await sharp(imagePath)
      .resize(parseInt(width), parseInt(height))
      .toFormat('jpg')
      .toFile(thumbPath);
  };

  if (!fs.existsSync(thumbPath)) {
    await resize();
  }

  return thumbPath;
}
