/*
 * @Author: your name
 * @Date: 2020-09-09 11:24:19
 * @LastEditTime: 2020-09-09 11:25:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lerna_project/packages/module-1/index.js
 */
const { API } = require('module-2');
const axios = require('axios');

const getPopularImg = () => axios.get(API)

module.exports = getPopularImg;

// 测试代码，发布时删除
getPopularImg().then((res) => console.log(res.data.length));
