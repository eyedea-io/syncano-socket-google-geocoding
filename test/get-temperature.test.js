/* global describe it */
import {assert} from 'chai'
import {run} from 'syncano-test'

describe('get-sublocality', function () {
  const config = {
    API_KEY: process.env.GOOGLE_GEOCODING_API_KEY
  }

  it('existing city', function (done) {
    const longitude = '10.731760'
    const latitude = '59.914620299999996'
    run('get-sublocality', {args: {longitude, latitude}, config})
      .then(response => {
        assert.property(response.data, 'sublocality', 'Sentrum')
        assert.propertyVal(response, 'code', 200)
        done()
      })
  })
})
