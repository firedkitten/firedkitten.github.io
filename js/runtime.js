
// setInterval(() => {
//     let create_time = Math.round(new Date('2025-04-17 00:00:00').getTime() / 1000); //在此行修改建站时间
//     let timestamp = Math.round((new Date().getTime()) / 1000);
//     let second = timestamp - create_time;
//     let time = new Array(0, 0, 0, 0, 0);

//     var nol = function (h) {
//         return h > 9 ? h : '0' + h;
//     }
//     if (second >= 365 * 24 * 3600) {
//         time[0] = parseInt(second / (365 * 24 * 3600));
//         second %= 365 * 24 * 3600;
//     }
//     if (second >= 24 * 3600) {
//         time[1] = parseInt(second / (24 * 3600));
//         second %= 24 * 3600;
//     }
//     if (second >= 3600) {
//         time[2] = nol(parseInt(second / 3600));
//         second %= 3600;
//     }
//     if (second >= 60) {
//         time[3] = nol(parseInt(second / 60));
//         second %= 60;
//     }
//     if (second > 0) {
//         time[4] = nol(second);
//     }
//     if ((Number(time[2]) < 22) && (Number(time[2]) > 7)) {
//         currentTimeHtml = "<img class='boardsign' src='https://img.shields.io/badge/-学习中-6adea8?style=social&logo=cakephp' title='距离百万存款也就差不到一百年~'><div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
//     }
//     else {
//         currentTimeHtml = "<img class='boardsign' src='https://img.shields.io/badge/-该休息了-6adea8?style=social&logo=coffeescript' title='这个点了应该去睡觉啦，熬夜对身体不好哦'><div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
//     }
//     document.getElementById("workboard").innerHTML = currentTimeHtml;
// }, 1000);



/* 页脚计时器 start */
var now = new Date();
function createtime() {
    // 当前时间
    now.setTime(now.getTime() + 1000);
    var start = new Date("08/09/2022 00:00:00"); // 旅行者1号开始计算的时间
    var dis = Math.trunc(23400000000 + ((now - start) / 1000) * 17); // 距离=秒数*速度 记住转换毫秒
    var unit = (dis / 149600000).toFixed(6);  // 天文单位
    // 网站诞生时间
    var grt = new Date("05/01/2025 00:00:00");
    var days = (now - grt) / 1e3 / 60 / 60 / 24,
        dnum = Math.floor(days),
        hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
        hnum = Math.floor(hours);
    1 == String(hnum).length && (hnum = "0" + hnum);
    var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
        mnum = Math.floor(minutes);
    1 == String(mnum).length && (mnum = "0" + mnum);
    var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
        snum = Math.round(seconds);
    1 == String(snum).length && (snum = "0" + snum);
    let currentTimeHtml = "";
    (currentTimeHtml =
        hnum < 18 && hnum >= 9
            ? `<img class='boardsign' src='https://img.shields.io/badge/-学习中-6adea8?style=social&logo=cakephp' title='距离百万存款也就差不到一百年~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`
            : `<img class='boardsign' src='https://img.shields.io/badge/-该休息了-6adea8?style=social&logo=coffeescript' title='这个点了应该去睡觉啦，熬夜对身体不好哦'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`),

        //     ? `<img class='boardsign' src='https://lskypro.acozycotage.net/Fomalhaut/badge/F小屋-科研摸鱼中.svg' title='什么时候能够实现财富自由呀~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`
        //     : `<img class='boardsign' src='https://lskypro.acozycotage.net/Fomalhaut/badge/F小屋-下班休息啦.svg' title='下班了就该开开心心地玩耍~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`),
        document.getElementById("workboard") &&
        (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
// 设置重复执行函数，周期1000ms
setInterval(() => {
    createtime();
}, 1000);

/*页脚计时器 end */
