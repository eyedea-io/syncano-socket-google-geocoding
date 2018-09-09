import * as S from '@eyedea/syncano'
import axios from 'axios'

interface Args {
  latitude: string
  longitude: string
}

class Endpoint extends S.Endpoint {
  async run(
    {response}: S.Core,
    {args, config}: S.Context<Args>
  ) {
    const apiURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='
    const resp = await axios.get(`${apiURL}${args.latitude},${args.longitude}&key=${config.API_KEY}`
    )

    return response.json({sublocality: resp.data.results[0].address_components[2].short_name})
  }
}

export default ctx => new Endpoint(ctx)
