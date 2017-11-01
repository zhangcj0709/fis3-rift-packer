require("components/actionGroups/api")
util = require("util")
_gameId = $("input:hidden[name=gameId]").val() || ""


$(".wrapper-content").actionGroups({
  configs: {
    refresh: true
    loaded: ->
      $(this).find('.product-images').removeClass("d-none").slick({
        dots: true
      });
    onSale: (e)->
      _gameId and util.warningConfirm "确认上架？", (ok)->
        ok and util.ajaxJson "/game/onSale", {id: _gameId}, ->
          util.ajaxJsonCallback.call this, ->e.data.group.play("refresh")
    offSale: (e)->
      _gameId and util.dangerConfirm "确认下架？", (ok)->
        ok and util.ajaxJson "/game/offSale", {id: _gameId}, ->
          util.ajaxJsonCallback.call this, ->e.data.group.play("refresh")
    score: {
      eTarget: "[data-action=score]"
      eFunction: (e)->
        starLevel = $(this).data("score")
        _gameId and starLevel and util.ajaxJson "/game/save", {id: _gameId, starLevel: starLevel}, ->
          util.ajaxJsonCallback.call this, ->
            $("#starLevel").attr("data-score", starLevel)
    }
    recommend: {
      eTarget: "[data-action=recommend]"
      eFunction: (e)->
        $this = $(this)
        type = $this.data("type")
        return unless _gameId and type
        recommended = !$(this).hasClass("btn-outline")
        send = ->
          util.ajaxJson "/game/recommend/#{if recommended then "delete" else "save"}", {gameId: _gameId, type: type}, ->
            util.ajaxJsonCallback.call this, ->
              $this.toggleClass("btn-outline")
        if recommended
          util.warningConfirm "是否取消推荐？", (ok)->ok and send()
        else
          send()
    }
  }
})