/* global describe it */
import {run} from '@syncano/test'
import mockAxios from 'axios'

describe('get-sublocality', function () {
  it('simple get', async () => {
    const testSublocality = 'My Sublocality'
    mockAxios.get = jest.fn().mockImplementationOnce((eventName, params) => {
      return Promise.resolve({
        data: {
          results: [
           {
            address_components: [
              {},
              {},
              {
                short_name: testSublocality
              }
            ]
           }
          ]
        }
      })
    })

    const args = {
      latitude: '59.914620299999996',
      longitude: '10.731760'
    }

    const result = await run('get-sublocality', {args})
    expect(result).toHaveProperty('code', 200)
    expect(result.data).toHaveProperty('sublocality', testSublocality)
  })
})
