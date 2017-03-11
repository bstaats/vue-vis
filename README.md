# vue-vis

> Declarative charts and visualizations for [Vue.js](https://vuejs.org).

## Introduction
vue-vis is a reusable charting library for [Vue.js](https://vuejs.org) utilizing the best parts of [d3.js](https://d3js.org) but simplifying the development of reusable charts and other visualizations with just a few lines. vue-vis is heavily inspired by great projects like [Recharts](http://recharts.org) and the earliest [declarative charting libraries](http://www.axiis.org) of days forgotten.

## Work in Progress
This is not ready for prime time. Its currently experimental with only a simple BarChart example replicated from one of [Bostock's examples](https://bl.ocks.org/mbostock/3885304).

## Example
```HTML
<SvgContainer :width="960" :height="500">
  <BarChart :width="960"
            :height="500"
            :margin="{top: 20, right: 20, bottom: 30, left: 40}"
            :data="data">

    <XAxis dataKey="name" type="band" :padding="0.1" :transform="`translate(0,`+450+`)`"></XAxis>
    <YAxis dataKey="value" tickFormat=".0%" ></YAxis>

  </BarChart>
</SvgContainer>
```

## TODO
* ~~SvgContainer~~
* ~~BarChart~~
* ~~XAxis~~
* ~~YAxis~~
* Build this as an actual NPM module
* LineChart
* AreaChart
* PieChart
* ScatterPlot
* Many more...

## Build Setup with Docker

``` bash
# serve with hot reload at localhost:8080
docker-compose up
```

## Build Setup without Docker

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## License

[MIT](http://opensource.org/licenses/MIT)
