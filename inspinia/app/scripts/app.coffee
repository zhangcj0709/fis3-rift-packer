util = require "util"
preloadLov = require("components/loadLov/preloadLov")
require("components/loadLov/api")
require("components/customized/api")
require("components/summernote/api")
$(document)
  #全局链接跳转事件
  .on "click", "[data-href]", (e)->
    e.stopPropagation()
    e.preventDefault()
    href = this.getAttribute("data-href");
    if href
      lovStorage and lovStorage.clear?() if href is "/user/logout"
      location.href = href
    false
  .on "click", "a[href='/user/logout']", (e)->
    e.stopPropagation()
    lovStorage and lovStorage.clear?()

(autoInit = (container)->
  $container = $(container)
  $container.loadLov() #require views.components/lov
  $container.customized() #require views.components/customized
  $container.initSummernote() #require views.components/summernote
  $container.find('[data-toggle="tooltip"]').tooltip() #require vendor.bootstrap
  $container.find('[data-toggle="popover"]').popover() #require vendor.bootstrap
  $container.find('[data-toggle="tagsinput"]').each -> $(this).tagsinput($.extend({tagClass: 'label label-primary'} ,$(this).data())) #require vendor.bootstrap-tagsinput
  $container.find('[data-toggle="select2"]').each -> $(this).select2($.extend({width: '100%'} ,$(this).data())) #require vendor.select2
  return $container
)(document)
$.fn.autoInit = ->autoInit(this)



(loadNotices = ->
  topNotices = $.extend([],{
    element: $("#topNotices")[0]
    reload: ->
      tTopNotices = Handlebars.partials["templates/_navbar-notices"]
      $topNotices = $(tTopNotices?{topNotices:this})
      $(this.element).replaceWith($topNotices)
  })
  return unless topNotices.element
  preloadLov("DELIVERY_ORDER_LIST",(options)->
    total = options.data.total || 0
    time = options.time || new Date.getTime()
    $("#side-menu a[href='/order/delivery/list'] span").text(total).show()
    if total and total > 0
      topNotices.push({
        icon: "<i class='fa fa fa-truck'> </i>"
        title: "您有<span class='text-danger'>#{total}</span>个待发货订单"
        time: time
        href: "/order/delivery/list"
      })
      topNotices.reload()
  )
)()