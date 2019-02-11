import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { baseUrl, getRecords } from './index';

describe('Speedrun service', () => {
  it('returns data when getRecords is called', (done) => {
    const mock = new MockAdapter(axios);
    const dataMock = {
      response: {
        data: [{ name: 'foo' }],
      },
    };
    mock.onGet(`${baseUrl}/records`).reply(200, dataMock);

    getRecords().then((response) => {
      expect(response.data).toEqual(dataMock);
      done();
    });
  });
});
