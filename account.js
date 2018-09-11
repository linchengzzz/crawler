const moment = require('moment');

const oneDay = 86400000;
const endDate = new Date(new Date().getTime() - oneDay);
const startDate = new Date(new Date().getTime() - oneDay * 7);
const endTime = moment(endDate).format('YYYY-MM-DD')
const startTime = moment(startDate).format('YYYY-MM-DD');

// 账户名称
module.exports = {
    // 聚丰开放平台--有赞批发网
    JFYouZan: {
        url: 'https://www.huocai.com/app/stat/10943?type=trend',
        cookie: 'Hm_lvt_b206019c640378bcd4e9178c37fecae3=1536652408; Hm_lpvt_b206019c640378bcd4e9178c37fecae3=1536672499; XSRF-TOKEN=eyJpdiI6InBxN1RTMEdTblNKNlJCa09CM3htV2c9PSIsInZhbHVlIjoiTHdjSFRwOXZJbXRaSXFpTEZLd0JPS2liSzRROHI5MENVc2NlemtiT0l3M2twVndSWkdjOTFLeGliZWx6ZDJYdGdvYmJQTitlNDVocHhRTDllUk1zWlE9PSIsIm1hYyI6ImYzMDZkODUwN2QzZjc0NGJkMzc4MzliYzBhMzQ4NDcyMDBkZDlkZjJmNDQxZmFiODI0M2NmMjY3NzE2N2NhMjMifQ%3D%3D; laravel_session=eyJpdiI6ImJDSnBDSGk4YkxjdDhxaFVyUm0rZlE9PSIsInZhbHVlIjoiY0xZb0xrVFB1YjdSZ1lnTTdYTnU3VXVCUG1wSVJNM3dKbDdzN2ZHMnJ5RUtLZlFVeGgweHVEOXdaNkhDNjg5cktcL0xcL3l1a2JXZDgzSVFyaGp2M1BcL0E9PSIsIm1hYyI6IjRhYWIwNjU3MjQ3ZTI2MzM3ODdjYTMxNTUwMzU3ODQwOGJjMTU0NTBmZWIzMWI1MzMxMTc0YzJmMTVhMjA0MjAifQ%3D%3D'
    },
    // 百度移动开放平台--零售开店宝
    BDLingShou: {
        url: `http://app.baidu.com/chart/detailDailyDownload?productId=10204270&startDate=${startTime}&endDate=${endTime}&_=1536680799820`,
        cookie: 'BAIDUID=02B9B14A3A38864299498D93BDB6D978:FG=1; BIDUPSID=02B9B14A3A38864299498D93BDB6D978; PSTM=1514561451; __cfduid=dc007131be334481370a6909194f89fb71530895414; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; MCITY=-%3A; pgv_pvi=2961065984; BDRCVFR[feWj1Vr5u3D]=I67x6TjHwwYf0; PSINO=2; H_PS_PSSID=1461_26910_21078_20697_26350_20929; Hm_lvt_e2ee93d5023fa3ad0198e989e39b4a55=1536680735; BDUSS=9Zb0RUaGJ0YVh3TkhLdUNDc2dOVG5YcmFlMDE5bH53RzJDcGtnbU9oa3ZjTDliQVFBQUFBJCQAAAAAAAAAAAEAAACiVG7Iya3Jrcmtya3Sr9KvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC~jl1sv45dbME; app_mdev=f7MfC5nk%2F5xOgOkREYIIWNCGGn6kn28j%2FspCDmWL2KzMzTOM6HQfbMXvtsyt40QQj13wB7iZtimc5vrLS5G1kQ%3D%3D; Hm_lpvt_e2ee93d5023fa3ad0198e989e39b4a55=1536680766'
    }
}