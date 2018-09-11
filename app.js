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
app.listen(3000, function() {
    console.log('|    服务器启动成功             |');
    console.log('|     http://localhost:3000     |');
    console.log('|                               |');
    console.log('|———————————————————————————————|');
});

const downloads = [
    // 下载数量
]

function getYouzan(_res) {
    curl.get(
        account.youzan.url,
        {
            headers: {
                cookie: account.youzan.cookie
            }
        },
        (err, res, data) => {
            const _startIndex = data.lastIndexOf('data: {');
            const _endIndex = data.lastIndexOf('},');
            const _data = data.slice(_startIndex + 5, _endIndex + 1);
            const reg = /\[(\S+)\]/g;
            // 下载日期
            const strDay = reg.exec(_data)[1];
            const days = strDay.split(',');
            // 下载数量
            const strNum = reg.exec(_data)[1];
            const num = strNum.split(',');

            const _down = [];
            days.forEach((item, index) => {
                _down.push({
                    [item]: num[index],
                })
            })
            const yz = {
                name: '有赞批发网',
                downloads: _down
            }
            downloads.push(yz);
            _res.send(yz);
        }
    );
}
app.get('/youzan', function(req, res) {
    getYouzan(res);
});
