// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: brown; icon-glyph: download;
/**
 * Author: GideonSenku
 * Github: https://github.com/GideonSenku
 */
const scripts = [
  {
    moduleName: "奇客.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/%E5%A5%87%E5%AE%A2.js",
  },
  {
    moduleName: "少数派.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/%E5%B0%91%E6%95%B0%E6%B4%BE.js",
  },
  
  
  {
    moduleName: "数字尾巴.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/%E6%95%B0%E5%AD%97%E5%B0%BE%E5%B7%B4.js",
  },
  {
    moduleName: "月光博客.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/%E6%9C%88%E5%85%89%E5%8D%9A%E5%AE%A2.js",
  },
  {
    moduleName: "极客公园.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/%E6%9E%81%E5%AE%A2%E5%85%AC%E5%9B%AD.js",
  },
  {
    moduleName: "混沌周刊.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/%E6%B7%B7%E6%B2%8C%E5%91%A8%E5%88%8A.js",
  },
  {
    moduleName: "爱范儿.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/%E7%88%B1%E8%8C%83%E5%84%BF.js",
  },
  {
    moduleName: "电影最TOP.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/%E7%94%B5%E5%BD%B1%E6%9C%80TOP.js",
  },
  {
    moduleName: "结绳志.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/%E7%BB%93%E7%BB%B3%E5%BF%97.js",
  },
  {
    moduleName: "越哥说电影.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/%E8%B6%8A%E5%93%A5%E8%AF%B4%E7%94%B5%E5%BD%B1.js",
  },
  {
    moduleName: "钛媒体.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/%E9%92%9B%E5%AA%92%E4%BD%93.js",
  },
  
  {
    moduleName: "陈翔六点半.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/%E9%99%88%E7%BF%94%E5%85%AD%E7%82%B9%E5%8D%8A.js",
  },
  {
    moduleName: "𝕫𝕙.𝕗𝕪𝕚.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/%F0%9D%95%AB%F0%9D%95%99.%F0%9D%95%97%F0%9D%95%AA%F0%9D%95%9A.js",
  },
  {
    moduleName: "sht.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/sht.js",
  },
  {
    moduleName: "onejav.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/onejav.js",
  },
  {
    moduleName: "maoyan.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/maoyan.js",
  },
  {
    moduleName: "jiaran.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/jiaran.js",
  },
  {
    moduleName: "javdb.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/javdb.js",
  },
  {
    moduleName: "ithome.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/ithome.js",
  },
  {
    moduleName: "hupu.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/hupu.js",
  },
  {
    moduleName: "bililive.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/bililive.js",
  },
  {
    moduleName: "HΛИG.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/H%CE%9B%D0%98G.js",
  },
  {
    moduleName: "141ppv.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/141ppv.js",
  },
  {
    moduleName: "141jav.js",
    url:
      "https://raw.githubusercontent.com/liurenjie520/rsswidget/master/141jav.js",
  },
 
  
];
// Install Scripts.js
const $ = importModule("Env");
function update() {
  log("🔔更新脚本开始!");
  scripts.forEach((script) => {
    $.getFile(script);
  });
  log("🔔更新脚本结束!");
}
update();
