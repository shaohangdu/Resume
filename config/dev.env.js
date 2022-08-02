'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// 建立環境變數
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  APIPATH:'"https://vue-course-api.hexschool.io"',
  CUSTOMPATH:'"feargare"',
})
