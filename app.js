const express = require('express');
const curl = require('curl');
const account = require('./account');

const app = express();

/**
 * 启动服务：http://localhost:3000
 */
console.log('|———————————————————————————————|');
console.log('|                               |');
console.log('|        服务器启动中           |');
app.listen(3000, function () {
    console.log('|    服务器启动成功             |');
    console.log('|     http://localhost:3000     |');
    console.log('|                               |');
    console.log('|———————————————————————————————|');
});

// 所有数值
const allData = [];
const addItem = (item) => allData.find(data => data.id === item.id) ? void 0 : allData.push(item);

// 聚丰开放平台--有赞批发网
const getJFYouZan = () => new Promise((resolve, reject) => {
    curl.get(
        account.JFYouZan.url, {
            headers: {
                cookie: account.JFYouZan.cookie
            }
        },
        (err, res, data) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            const startIndex = data.lastIndexOf('data: {');
            const endIndex = data.lastIndexOf('},');
            const _data = data.slice(startIndex + 5, endIndex + 1);
            const reg = /\[(\S+)\]/g;
            // 下载日期
            const strDay = reg.exec(_data)[1];
            const days = strDay.split(',');
            // 下载数量
            const strNum = reg.exec(_data)[1];
            const num = strNum.split(',');

            const down = [];
            days.forEach((item, index) => {
                down.push({
                    [item]: num[index],
                })
            })
            const yz = {
                id: 1,
                name: '聚丰开放平台--有赞批发网',
                downloads: down
            }
            addItem(yz);
            resolve(yz);
        }
    );
});

// 百度移动开放平台--零售开店宝 
const getBDLingShou = () => new Promise((resolve, reject) => {
    curl.get(
        account.BDLingShou.url, {
            headers: {
                cookie: account.BDLingShou.cookie
            }
        },
        (err, res, data) => {
            if(err) {
                console.log(err);
                reject(err);
            }
            data = JSON.parse(data);
            if(!data.success) {
                console.log(data.result);
                reject(data.result);
            }
            const result = data.result;
            const daily = result.daily;
            const down = [];
            Object.keys(daily).forEach(item => down.push({
                [item]: daily[item]['零售开店宝']
            }));
            const ls = {
                id: 2,
                name: '百度移动开放平台--零售开店宝',
                downloads: down
            }
            addItem(ls);
            resolve(ls);
        }
    )
})

/**
 * Api
 */

// 聚丰开放平台--有赞批发网
app.get('/jfyouzan', (req, res) => {
    getJFYouZan().then(data => res.send(data));
});
// 百度移动开放平台--零售开店宝
app.get('/bdlingshou', (req, res) => {
    getBDLingShou().then(data => res.send(data));
});
// allData
const promiseList = [
    getJFYouZan(),
    getBDLingShou(),
];
app.get('/', (req, res) => {
    Promise.all(promiseList).then(data => res.send(allData)).catch(err => res.send(err));
} )