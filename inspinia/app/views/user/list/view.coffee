util = require("util")
require("components/actionGroups/api")
require("components/tableview/api")



$("#wrapper-content").actionGroups({
  configs: {
    loaded:->
      $(this).tableview(
        footable: true
        url: "/user/getList"
        template: Handlebars.templates["user/list/templates/table"]
      )
    refresh: true
    lock:
      eTarget: "tbody tr[data-id]"
      eFunction: (e, srcTarget)->
        data = ($this = $(this)).data()
        data.id and util.warningConfirm "是否确认锁定用户[#{data.name}]？<br>锁定后此用户将无法继续登录cms系统~", (ok)->
          ok and util.ajaxJson "/user/lock", {id: data.id}, ->
            util.ajaxJsonCallback.call this, ->
              $(srcTarget).replaceWith("<button class='btn btn-warning btn-xs' type='button' data-action='unlock'><i class='fa fa-unlock'></i> 解锁</button>")
    unlock:
      eTarget: "tbody tr[data-id]"
      eFunction: (e, srcTarget)->
        data = ($this = $(this)).data()
        data.id and util.warningConfirm "是否确认解锁用户[#{data.name}]？", (ok)->
          ok and util.ajaxJson "/user/unlock", {id: data.id}, ->
            util.ajaxJsonCallback.call this, ->
              $(srcTarget).replaceWith("<button class='btn btn-warning btn-xs' type='button' data-action='lock'><i class='fa fa-lock'></i> 锁定</button>")
  }
})