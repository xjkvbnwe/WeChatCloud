// pages/index/index.js
Page({
    isbn(e) {
        this.setData({
            isbnFlag: e.detail.value
        })
    },
    /**
     * 页面的初始数据
     */
    data: {
        flag: 0,
        isbn: "",
        bookName: "",
        bookAuthor: "",
        keyWords: "",
        bookIntroduction: "",
        img: "",
        isbnFlag: ""
    },
    check() {
        var appUrl = 'https://route.showapi.com/2218-1?showapi_appid=1015196&showapi_sign=3a4fc08e4f7d42238eb3d702e67a80b0&isbn='+this.data.isbnFlag
        wx.request({
            url: appUrl,
            success: res => {
                if (res.data.showapi_res_body.remark != "success") {
                    this.setData({
                        flag: 2
                    })
                    return;
                }
                this.setData({
                    flag: 1,
                    bookName: res.data.showapi_res_body.datas[0].title,
                    img: res.data.showapi_res_body.datas[0].img,
                    bookAuthor: res.data.showapi_res_body.datas[0].author,
                    keyWords: res.data.showapi_res_body.datas[0].keyword,
                    bookIntroduction: res.data.showapi_res_body.datas[0].gist,
                    isbn: this.data.isbnFlag
                })
                wx.showToast({
                  title: '获取成功',
                  icon: "success",
                  duration: 1000
                })
            },
            
          })
    },
    addBook() {
        const db = wx.cloud.database()
                db.collection("Day7_17")
                .add({
                    data: {
                    bookName: this.data.bookName,
                    img: this.data.img,
                    bookAuthor: this.data.bookAuthor,
                    keyWords: this.data.keyWords,
                    bookIntroduction: this.data.bookIntroduction,
                    isbn: this.data.isbnFlag
                    }
                })

                wx.showToast({
                    title: '添加成功',
                    icon: "success",
                    duration: 1000
                  })
                this.setData({
                    flag: 0
                })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})