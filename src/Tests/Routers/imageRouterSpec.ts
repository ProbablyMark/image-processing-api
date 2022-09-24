import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

describe('test the end point server', () => {
  it('get main /', async () => {
    const response = await request.get('/');
    expect(response.statusCode).toEqual(200);
  });
  ///////////////
  it('get /image route ', async () => {
    const response = await request.get('/image');
    expect(response.statusCode).toEqual(200);
  });

  it('get /image route , should return 404 for bad url ', async () => {
    const response = await request.get('/nonexistent');
    expect(response.statusCode).toEqual(404);
  });

  /////////////////
  it('get /image/:imageName route ', async () => {
    const response = await request.get('/image/fjord');
    expect(response.statusCode).toEqual(200);
  });
  it('get /image/:imageName route , should return a warning text ', async () => {
    const response = await request.get('/image/nonexistent');
    expect(response.statusCode).toEqual(200);
    expect(response.text).toEqual(
      '<h2> Make sure you type the correct name<h2>'
    );
  });
  ////////////////
});
