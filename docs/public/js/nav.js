window.onscroll = function () {
  new LingQue.Monitor().init({ id: 'Jztvwmsnm0x7Uw7T', sendSuspicious: true, sendSpaPv: true })
  // 回到顶部
  const sllTop = document.documentElement.scrollTop || document.body.scrollTop
  if (sllTop > 240)
    $('#get-top').css('display', 'block')
  else
    $('#get-top').css('display', 'none')
}
$('#get-top').click(() => {
  $('body,html').animate(
    {
      scrollTop: 0,
    },
    800,
  ) // 点击回到顶部按钮，数字越小越快
})
// 判断用户使用的设备
const deviceVal = browserRedirect()
function browserRedirect() {
  const sUserAgent = navigator.userAgent.toLowerCase()
  const bIsIpad = sUserAgent.match(/ipad/i) == 'ipad'
  const bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os'
  const bIsMidp = sUserAgent.match(/midp/i) == 'midp'
  const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4'
  const bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb'
  const bIsAndroid = sUserAgent.match(/android/i) == 'android'
  const bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce'
  const bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile'
  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)
    return 'phone'
  else
    return 'pc'
}
$('.nav-btn').on('click', function () {
  $('.nav').toggleClass('showNav')
  $(this).toggleClass('animated2')
})

// 默认搜索引擎的内容，如果界面修改了需要同步修改
let thisSearch = 'http://www.caup.cn/search?q='

$('#txt').keydown((ev) => {
  // 回车键的处理
  if (ev.keyCode == 13) {
    window.open(thisSearch + $('#txt').val())
    // $('#txt').val('');
    $('#box ul').html('')
  }
})
$(() => {
  // 搜索引擎列表，样式一行五个内容，自动换行
  const search = {
    data: [
      {
        name: '百度',
        url: 'https://www.baidu.com/s?wd=',
      },
      {
        name: '谷歌',
        url: 'https://www.google.com/search?q=',
      },
      {
        name: '必应',
        url: 'https://cn.bing.com/search?q=',
      },
      {
        name: '好搜',
        url: 'https://www.so.com/s?q=',
      },
      {
        name: '搜狗',
        url: 'https://www.sogou.com/web?query=',
      },
      {
        name: '淘宝',
        url: 'https://s.taobao.com/search?q=',
      },
      {
        name: '京东',
        url: 'http://search.jd.com/Search?keyword=',
      },
      {
        name: '天猫',
        url: 'https://list.tmall.com/search_product.htm?q=',
      },
      {
        name: '1688',
        url: 'https://s.1688.com/selloffer/offer_search.htm?keywords=',
      },
      {
        name: '知乎',
        url: 'https://www.zhihu.com/search?type=content&q=',
      },
      {
        name: '微博',
        url: 'https://s.weibo.com/weibo/',
      },
      {
        name: 'Bilibili',
        url: 'http://search.bilibili.com/all?keyword=',
      },
      {
        name: '豆瓣',
        url: 'https://www.douban.com/search?source=suggest&q=',
      },
      {
        name: '优酷',
        url: 'https://so.youku.com/search_video/q_',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/search?q=',
      },
    ],
  }
  for (let i = 0; i < search.data.length; i++) {
    const addList = `<li>${search.data[i].name}</li>`
    $('.search-engine-list').append(addList)
  }
  $('.search-engine-name, .search-engine').hover(
    () => {
      $('.search-engine').css('display', 'block')
    },
    () => {
      $('.search-engine').css('display', 'none')
    },
  )
  $('.search-engine-list li').click(function () {
    const _index = $(this).index()
    const searchNameBtn = document.getElementById('search-engine-name')
    searchNameBtn.innerHTML = search.data[_index].name
    thisSearch = search.data[_index].url
    $('.search-engine').css('display', 'none')
  })
})
$('#search-btn').click(() => {
  const textValue = $('#txt').val()
  if (textValue != '')
    window.open(thisSearch + textValue)
})
