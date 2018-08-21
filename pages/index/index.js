//index.js
// 获取应用实例
var app = getApp()
//点击事件用util封装
var util = require('../../utils/util.js')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)
  },
  changeName:function(){
    console.log(util.testclick())
  },
  //点击按钮获取用户数据
  getUserInfo:function(){
    wx.getUserInfo({
      success: function (res) {
        that.globalData.userInfo = res.userInfo;
        typeof cb == "function" && cb(that.globalData.userInfo)
      }
    })
  }
})