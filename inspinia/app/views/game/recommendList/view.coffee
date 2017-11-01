require("components/actionGroups/api")
util = require("util")


$(".wrapper-content").actionGroups({
  group: ".ibox"
  configs: {
    "recommendGamesBox": {
      cancelRecommend: {
        eTarget: "tbody tr"
        eFunction: (e)->
          $this = $(this)
          gameId = $this.data("id")
          gameId and util.warningConfirm "是否取消推荐？", (ok)->
            ok and util.ajaxJson "/game/recommend/delete", {gameId: gameId, type: "homepage_recommend"}, ->
              util.ajaxJsonCallback.call this, ->$this.remove()
      }
    }
    "homepageGamesBox": {
      cancelRecommend: {
        eTarget: "tbody tr"
        eFunction: (e)->
          $this = $(this)
          gameId = $this.data("id")
          gameId and util.warningConfirm "是否取消推荐？", (ok)->
            ok and util.ajaxJson "/game/recommend/delete", {gameId: gameId, type: "homepage_ad"}, ->
              util.ajaxJsonCallback.call this, ->$this.remove()
      }
    }
  }
})