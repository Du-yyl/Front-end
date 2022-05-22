// 首页轮播图

module.exports = (query, request) => {
    const type = {
        0: 'pc',
        1: 'android',
        2: 'iphone',
        3: 'ipad',
    }[query.type || 0] || 'pc'
    // console.log(query, request);
    console.log(query)
    return request(
        'POST',
        `https://music.163.com/api/v2/banner/get`,
        { clientType: type },
        { crypto: 'linuxapi', proxy: query.proxy },
    )
}
