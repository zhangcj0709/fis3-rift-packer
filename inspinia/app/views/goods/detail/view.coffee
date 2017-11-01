require("components/actionGroups/api")
util = require("util")
_goodsId = $("input:hidden[name=goodsId]").val() || ""


$(".wrapper-content").actionGroups({
  configs: {
    refresh: true
    loaded: ->
      $(this).find('.product-images').removeClass("d-none").slick({
        dots: true
      });
    onSale: (e)->
      _goodsId and util.warningConfirm "确认上架？", (ok)->
        ok and util.ajaxJson "/goods/onSale", {id: _goodsId}, ->
          util.ajaxJsonCallback.call this, ->e.data.group.play("refresh")
    offSale: (e)->
      _goodsId and util.dangerConfirm "确认下架？", (ok)->
        ok and util.ajaxJson "/goods/offSale", {id: _goodsId}, ->
          util.ajaxJsonCallback.call this, ->e.data.group.play("refresh")
  }
})