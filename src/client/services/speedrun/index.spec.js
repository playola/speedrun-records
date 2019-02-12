import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { baseUrl, getRecords, getRecordDetails } from './index';

describe('Speedrun service', () => {
  it('returns data when getRecords is called', (done) => {
    const mock = new MockAdapter(axios);
    const dataMock = {
      response: {
        data: [{ name: 'foo' }],
      },
    };
    mock.onGet(`${baseUrl}/games`).reply(200, dataMock);

    getRecords().then((response) => {
      expect(response.data).toEqual(dataMock);
      done();
    });
  });

  it('returns data when getRecordDetails is called', (done) => {
    const mock = new MockAdapter(axios);
    const dataMock = {
      response: {
        data: { name: 'foo' },
      },
    };
    mock.onGet(`${baseUrl}/games/k6qqkx6g`).reply(200, dataMock);

    getRecordDetails('k6qqkx6g').then((response) => {
      expect(response.data).toEqual(dataMock);
      done();
    });
  });
});
