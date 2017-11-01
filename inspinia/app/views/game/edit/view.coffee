util = require("util")
require("components/actionGroups/api")
_gameId = $.getUrlParam("id")


$(document).actionGroups({
  group: ".wrapper-content .tab-pane"
  configs: {
    "tab-1": {
      refresh: true
      submit: {
        url: "/game/save"
        validator:rules:
          logoUrlId:required: {value: true, message: "请上传logo"}
          name:required: true
          gameCompany:required: true
          cid:required: true
          summarize:required: true
          tags:required: true
          type:required: true
          gameWebsite:required:true
        callback: ->
          res = this
          util.msgSuccess this.msg, ->
            location.href = "/game/edit?id=#{res.content.id}" unless _gameId
      }
      changeType: {
        event: "change propertychange"
        eTarget: ":radio[name=type]"
        eFunction: ->
          if $(this).val() is "mobile_h5"
            $(this.form).find("input[name=gameWebsite]").prop("disabled", false).closest(".form-group").removeClass("d-none")
          else
            $(this.form).find("input[name=gameWebsite]").prop("disabled", true).closest(".form-group").addClass("d-none")
      }
      onFileUploaded: {
        eTarget: "[data-type=imageUpload]"
        eFunction:   (e, modal, file, resp)->
          if resp.code is 200
            modal.modal("hide")
            $(e.target).find("i,img").replaceWith("<img src='#{resp.content.path}' class='img-lg img-rounded'>")
            $(e.target).find("input[name=logoUrlId]").val(resp.content.id).trigger("change")
            util.msgSuccess("请点击“保存修改”完成logo保存")
      }
      onSale: (e)->
        _gameId and util.warningConfirm "确认上架？", (ok)->
          ok and util.ajaxJson "/game/onSale", {id: _gameId}, ->
            util.ajaxJsonCallback.call this, ->e.data.group.play("refresh")
      offSale: (e)->
        _gameId and util.dangerConfirm "确认下架？", (ok)->
          ok and util.ajaxJson "/game/offSale", {id: _gameId}, ->
            util.ajaxJsonCallback.call this, ->e.data.group.play("refresh")
    }
    "tab-2": {
      refresh: true
      submit: {
        validator:rules:content:required: true
        url: "/game/save"
      }
    }
    "tab-3": {
      refresh: true
      submit: {
        url: "/game/savePictureOrder"
        dataMap:
          clearAll: true
          gameId: "#gameId"
          orders: (d, m)->
            res = []
            ids = if this.id.length then this.id else [this.id]
            for i in [0..ids.length-1]
              order = $(ids[i]).siblings("[name=order]").val() || 0
              res.push "#{ids[i].value}:#{order}"
            return res.join(",")
      }
      imageDelete: {
        eTarget: "tr[data-id]"
        eFunction: (e)->
          id = $(e.target).data("id")
          id and util.dangerConfirm "确定删除图片？", (ok)->
            ok and util.ajaxJson "/game/pic/delete", {id: id}, ->
              util.ajaxJsonCallback.call this, ->$(e.target).closest("tr").remove()
      }
      changeEnable: {
        event: "change propertychange"
        eTarget: "input[name=enable]"
        eFunction: ->
          _checked = (_self = this).checked
          _self.checked = !_checked
          id = $(this).closest("tr").data("id")
          id and util.ajaxJson "/game/pic/#{if _checked then 'publish' else 'stop'}", {id: id}, ->
            util.ajaxJsonCallback.call this, ->_self.checked = _checked
      }
      onCloseFileUpload: {
        eTarget: "[data-type=imageUpload]"
        eFunction: (e)->e.data.group.play("refresh")
      }
    }
    "tab-4": {
      refresh: true
      submit: {
        url: "/game/version/save"
        #traditional: true
        validator:rules:
          platform:
            required: true
            uniqueValue: true
          downloadUrl:required: true
          version:required: true
          size:required: true
        dataMap:
          clearAll: true
          gameVersions: (d)->
            arr = []
            if $.isArray(d.platform)
              $.each d.platform, (j)->
                obj = {}
                for i of d
                  obj[i] = if $.isArray(d[i]) then d[i][j] else d[i]
                arr.push($.extend({}, obj))
            else
              arr.push(d)
            return JSON.stringify(arr)
      }
      add: {
        eFunction: ->
          linkTemp = Handlebars.partials["game/edit/templates/_link"]
          $(this).find("tbody").append(linkTemp())
      }
      delete: {
        eTarget: "tr"
        eFunction: ->
          $(this).remove()
          util.msgSuccess("请点击“保存修改”生效删除操作") if $(this).data("id")
      }
    }
  }
})