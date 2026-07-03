CmsRequire.config({
  paths:{
    "adv": '/plugins/advertise/js/adv',
    "advEjectWindow":'/plugins/advertise/js/adv/ejectWindow',
    "advBayWindow": '/plugins/advertise/js/adv/bayWindow',
    "advCouplets": '/plugins/advertise/js/adv/couplets',
    "EasyReader": '/plugins/accessiblereading/js/EasyReader.min',
    "jplayer": '/plugins/accessiblereading/js/jquery.jplayer.min',
    "jqueryMd5": '/plugins/accessiblereading/js/jquery.md5.min',
    "jsbrowser": '/plugins/accessiblereading/js/jsbrowser',
    "barrierfree": '/plugins/accessiblereading/js/barrierfree',
    "articlePaginationLoad": '/plugins/libs/articlePagination/articlePaginationLoad',
    "articlePagenation": '/plugins/libs/articlePagination/articlePagination',
    "videoLoad": '/plugins/libs/video/videoLoad',
    "video": '/plugins/libs/video/video',
    "ckplayer": '/plugins/libs/video/ckplayer/ckplayer',
    "articleSlider": '/plugins/libs/articleSlider/articleSlider',
    "articleSliderLoad": '/plugins/libs/articleSlider/articleSliderLoad',
    "expiration": '/plugins/libs/expiration'
  }
});

if (window.location.href.indexOf('advPreview.html') > 0) {
  CmsRequire(['adv', 'articlePaginationLoad', 'videoLoad', 'articleSliderLoad','expiration'], function (e) {
  });
} else {
  $(function () {
    CmsRequire(['adv', 'articlePaginationLoad', 'videoLoad', 'articleSliderLoad','expiration'], function (e) {
    });
  })
}