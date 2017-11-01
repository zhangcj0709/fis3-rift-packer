util = require("util")
require("components/actionGroups/api")
_id = $.getUrlParam("id")


$(document).actionGroups({
  group: ".wrapper-content .tab-pane"
  configs: {
    "tab-1": {
      loaded: ->
        $(this).find("form").validate({
          rules:
            parentCid:required:true
            name:required:true
        })
      refresh: true
      add: ->
        tTr = Handlebars.partials["game/config/templates/_category-table-tr"]
        $(this).find("#categoryTable").append($(tTr?{enable:"Y"}).autoInit())
      remove:
        eTarget: "tbody tr"
        eFunction: ->$(this).remove()
      save:
        eTarget: "tbody tr"
        eFunction: ->
          $this = $(this)
          valid = $this.closest("form").validate().run($this.find("[name]"))
          data = $this.serializeObjectByName()
          valid and util.ajaxJson "/game/category/save", data, ->
            util.ajaxJsonCallback.call this, ->
              tTr = Handlebars.partials["game/config/templates/_category-table-tr"]
              $this.replaceWith($(tTr(this.content)).autoInit()) unless data.id
      delete:
        eTarget: "tbody tr"
        eFunction: ->
          $this = $(this)
          data = $this.serializeObjectByName()
          data.id and util.dangerConfirm "确定删除配置？", (ok)->
            ok and util.ajaxJson "/game/category/delete", {id:data.id}, ->
              util.ajaxJsonCallback.call this, ->$this.remove()
      changeEnable:
        event: "change propertychange"
        eTarget: "tbody tr [name=enable]"
        eFunction: ->
          $tr = $(this).closest("tr")
          data = $tr.serializeObjectByName()
          data.id and util.ajaxJson "/game/category/save", {id:data.id, enable:data.enable||"N"}, util.ajaxJsonCallback
    }
    ###"tab-2": {
      loaded: ->
        $(this).find("form").validate({
          rules:
            logo:required:true
            name:required:true
            website:required:true
        })
      refresh: true
      add: ->
        tTr = Handlebars.partials["game/config/templates/_company-table-tr"]
        $(this).find("#companyTable").append($(tTr?{enable:"Y"}).autoInit())
      remove:
        eTarget: "tbody tr"
        eFunction: ->$(this).remove()
      save:
        eTarget: "tbody tr"
        eFunction: ->
          $this = $(this)
          valid = $this.closest("form").validate().run($this.find("[name]"))
          data = $this.serializeObjectByName()
          valid and util.ajaxJson "/gameCompany/save", data, ->
            util.ajaxJsonCallback.call this, ->
              tTr = Handlebars.partials["game/config/templates/_company-table-tr"]
              $this.replaceWith($(tTr(this.content)).autoInit()) unless data.id
      delete:
        eTarget: "tbody tr"
        eFunction: ->
          $this = $(this)
          data = $this.serializeObjectByName()
          data.id and util.dangerConfirm "确定删除配置？", (ok)->
            ok and util.ajaxJson "/gameCompany/delete", {id:data.id}, ->
              util.ajaxJsonCallback.call this, ->$this.remove()
      changeEnable:
        event: "change propertychange"
        eTarget: "tbody tr [name=enable]"
        eFunction: ->
          $tr = $(this).closest("tr")
          data = $tr.serializeObjectByName()
          data.id and util.ajaxJson "/gameCompany/save", {id:data.id, enable:data.enable||"N"}, util.ajaxJsonCallback
    }###
    "tab-2": bannerConfig = {
      refresh: true
      submit: {
        url: "/game/banner/save"
        dataMap: {
          clearAll: true
          banners: ()->
            arr = []
            $(this).find("tbody tr").each ->
              arr.push($(this).serializeObjectByName())
            return JSON.stringify(arr)
        }
      }
      delete:
        eTarget: "tbody tr"
        eFunction: ->
          $this = $(this)
          data = $this.serializeObjectByName()
          data.id and util.dangerConfirm "确定删除图片？", (ok)->
            ok and util.ajaxJson "/game/banner/delete", {id:data.id}, ->
              util.ajaxJsonCallback.call this, ->$this.remove()
      changeEnable:
        event: "change propertychange"
        eTarget: "tbody tr [name=enable]"
        eFunction: ->
          $tr = $(this).closest("tr")
          data = $tr.serializeObjectByName()
          data.id and util.ajaxJson "/game/banner/#{if data.enable is "Y" then "publish" else "stop"}", {id: data.id}, util.ajaxJsonCallback
      onCloseFileUpload:
        eTarget: "[data-type=imageUpload]"
        eFunction: (e)->e.data.group.play("refresh")
    }
    "tab-3": bannerConfig
    "tab-4": bannerConfig
  }
})