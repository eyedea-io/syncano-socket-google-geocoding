# Syncano Socket for Google Geocoding API

[![Syncano Socket](https://img.shields.io/badge/syncano-socket-blue.svg)](https://syncano.io)
[![CircleCI branch](https://img.shields.io/circleci/project/github/eyedea-io/syncano-socket-google-geocoding/master.svg)](https://circleci.com/gh/eyedea-io/syncano-socket-google-geocoding/tree/master)
[![Codecov branch](https://img.shields.io/codecov/c/github/eyedea-io/syncano-socket-google-geocoding/master.svg)](https://codecov.io/github/eyedea-io/syncano-socket-google-geocoding/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm](https://img.shields.io/npm/dw/@eyedea-sockets/google-geocoding.svg)](https://www.npmjs.com/package/@eyedea-sockets/google-geocoding)
![license](https://img.shields.io/github/license/eyedea-io/syncano-socket-google-geocoding.svg)

Main Socket features:

* **google-geocoding/get-sublocality** — get a sublocality name base on longitude and latitude

## Getting Started

Install package in your project:

```sh
cd my_project
npm install @syncano/cli --save-dev
npm install @eyedea-sockets/google-geocoding --save
npx s deploy
```

Use it:

```js
import Syncano from '@syncano/client'

const s = new Syncano(<instaneName>)

const params = {
  latitude: '59.914620299999996',
  longitude: '10.731760'
}
const suggestions = await s.get('google-geocoding/get-sublocality', params)

```
