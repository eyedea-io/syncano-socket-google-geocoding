import axios from 'axios'
import Syncano from 'syncano-server'

export default async (ctx) => {
  const {response} = Syncano(ctx)
  const latitude = ctx.args.latitude
  const longitude = ctx.args.longitude
  try {
    const resp = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${ctx.config.API_KEY}`
    )
    response.json({sublocality: resp.data.results[0].address_components[3].short_name})
  } catch (err) {
    response.json({ message: err.message }, 400)
  }
}
