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
        $table = $(this).find("#categoryTable")
        tTr = Handlebars.partials["goods/config/templates/_category-table-tr"]
        rootCategory = $table.data("rootCategory")
        $table.append($(tTr?{enable:"Y",rootCategory:rootCategory}).autoInit())
      remove:
        eTarget: "tbody tr"
        eFunction: ->$(this).remove()
      save:
        eTarget: "tbody tr"
        eFunction: ->
          $this = $(this)
          valid = $this.closest("form").validate().run($this.find("[name]"))
          data = $this.serializeObjectByName()
          rootCategory = $this.closest("table").data("rootCategory")
          valid and util.ajaxJson "/goods/category/save", data, ->
            util.ajaxJsonCallback.call this, ->
              tTr = Handlebars.partials["goods/config/templates/_category-table-tr"]
              this.content.rootCategory = rootCategory
              $this.replaceWith($(tTr(this.content)).autoInit()) unless data.id
      delete:
        eTarget: "tbody tr"
        eFunction: ->
          $this = $(this)
          data = $this.serializeObjectByName()
          data.id and util.dangerConfirm "确定删除配置？", (ok)->
            ok and util.ajaxJson "/goods/category/delete", {id:data.id}, ->
              util.ajaxJsonCallback.call this, ->$this.remove()
      changeEnable:
        event: "change propertychange"
        eTarget: "tbody tr [name=enable]"
        eFunction: ->
          $tr = $(this).closest("tr")
          data = $tr.serializeObjectByName()
          data.id and util.ajaxJson "/goods/category/save", {id:data.id, enable:data.enable||"N"}, util.ajaxJsonCallback
    }
    "tab-2": bannerConfig = {
      refresh: true
      submit: {
        url: "/goods/banner/save"
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
            ok and util.ajaxJson "/goods/banner/delete", {id:data.id}, ->
              util.ajaxJsonCallback.call this, ->$this.remove()
      changeEnable:
        event: "change propertychange"
        eTarget: "tbody tr [name=enable]"
        eFunction: ->
          $tr = $(this).closest("tr")
          data = $tr.serializeObjectByName()
          data.id and util.ajaxJson "/goods/banner/#{if data.enable is "Y" then "publish" else "stop"}", {id: data.id}, util.ajaxJsonCallback
      onCloseFileUpload:
        eTarget: "[data-type=imageUpload]"
        eFunction: (e)->e.data.group.play("refresh")
    }
  }
})