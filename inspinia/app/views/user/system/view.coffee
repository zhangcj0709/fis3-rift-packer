util = require("util")
require("components/actionGroups/api")
_roles = $("[data-roles]").data("roles") || []
tList = Handlebars.templates["user/system/templates/list"]

$("#wrapper-content").actionGroups({
  configs: {
    add: ->
      tModal = Handlebars.templates["user/system/templates/modal"]
      $modal = $("#editModal").html($(tModal({roles: _roles})).html()).autoInit()
      $modal.modal("show")
    edit:
      eTarget: ".contact-box"
      eFunction: ->
        data = $.extend(true, {}, $(this).data("json"))
        roles = ","
        if $.isArray(data.roles) then $.each(data.roles, ->roles+=",#{this.id}")
        data.roles = roles
        tModal = Handlebars.templates["user/system/templates/modal"]
        $modal = $("#editModal").html($(tModal({admin: data, roles: _roles})).html()).autoInit()
        $modal.modal("show")
    save:
      eTarget: "#editModal"
      eFunction: (e)->
        $form = $(this).find("form")
        valid = $form.validate({
          rules:
            name:required:true
            idNo:required:true
            mobile:
              required:true
              phone: true
            email:email:true
            role:required:true

        }).run()
        formData = $form.serializeObject()
        roles = formData.role
        if $.isArray(roles) then roles = roles.join(",")
        formData.roles = roles
        delete formData.role
        valid and util.ajaxJson "/user/system/save", formData, ->
          util.ajaxJsonCallback.call (_this = this), ->
            $("#editModal").modal("hide")
            if formData.id
              $("#adminList .contact-box[data-id='#{formData.id}']").parent().replaceWith(tList({admins:[this.content]}))
            else
              $("#adminList").children(":first").after(tList({admins:[this.content]}))
    lock:
      eTarget: ".contact-box"
      eFunction: ->
        data = ($this = $(this)).data("json")
        data.id and util.warningConfirm "是否确认锁定用户[#{data.name}]？<br>锁定后此用户将无法继续登录cms系统~", (ok)->
          ok and util.ajaxJson "/user/lock", {id: data.id}, ->
            util.ajaxJsonCallback.call this, ->$this.parent().replaceWith(tList({admins:[this.content]}))
    unlock:
      eTarget: ".contact-box"
      eFunction: ->
        data = ($this = $(this)).data("json")
        data.id and util.warningConfirm "是否确认解锁用户[#{data.name}]？", (ok)->
          ok and util.ajaxJson "/user/unlock", {id: data.id}, ->
            util.ajaxJsonCallback.call this, ->$this.parent().replaceWith(tList({admins:[this.content]}))
    delete:
      eTarget: ".contact-box"
      eFunction: ->
        data = ($this = $(this)).data("json")
        data.id and util.dangerConfirm "是否确认删除用户[#{data.name}]？", (ok)->
          ok and util.ajaxJson "/user/delete", {id: data.id}, ->
            util.ajaxJsonCallback.call this, ->$this.parent().remove()
    sendMessage:
      eTarget: ".contact-box"
      eFunction: ->util.msgInfo "建设中..."
  }
})