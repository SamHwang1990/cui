# Build Task

## clean
1. dist clean

## css build
1. each elements, collections, widgets stylus compile
2. themes stylus compile
3. autoprefix
4. csscomb
5. cssminify

## iconfont build
1. copy src/iconfont to dist/iconfont

## js build
1. concat js
2. uglify js
3. turn into common style

## dist build
1. clean
2. css build
3. iconfont build
4. js build

## test tasks
1. css build
2. css lint
3. js build
4. jshint dist
5. jscs dist
6. jshint test
7. jscs test
8. run test/*.js