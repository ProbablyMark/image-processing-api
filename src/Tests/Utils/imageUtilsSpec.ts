import { resizeImage } from '../../Utilities/imageUtils';
import fs from 'fs';
describe('utils tests', () => {
  it('image resizing test ', async () => {
    expect(resizeImage('fjord', '200', '500')).toBeInstanceOf(Promise);
    expect(fs.existsSync(await resizeImage('fjord', '200', '500'))).toBeTruthy;
  });
});
