util = require("util")
require("components/actionGroups/api")
require("components/tableview/api")



$("#wrapper-content").actionGroups({
  configs: {
    loaded:->
      $(this).tableview(
        footable: true
        url: "/config/lov/getList"
        template: Handlebars.templates["config/lov/templates/table"]
        autoQuery: true
      )
    refresh: true
    add: ->
      tModal = Handlebars.templates["config/lov/templates/modal"]
      $modal = $("#editModal").html($(tModal()).html())
      $modal.modal("show")
    edit:
      eTarget: "#lovTable tbody tr"
      eFunction: ->
        data = $(this).data("json")
        tModal = Handlebars.templates["config/lov/templates/modal"]
        $modal = $("#editModal").html($(tModal(data)).html())
        $modal.modal("show")
    save:
      eTarget: "#editModal"
      eFunction: (e)->
        $form = $(this).find("form")
        valid = $form.validate({
          rules:
            type:required:true
            name:required:true
            value:required:true
        }).run()
        formData = $form.serializeObject()
        valid and util.ajaxJson "/config/lov/save", formData, ->
          util.ajaxJsonCallback.call (_this = this), ->
            $("#editModal").modal("hide")
            tTr = Handlebars.partials["config/lov/templates/_table-tr"]
            if formData.id
              $("#lovTable tbody tr[data-id='#{formData.id}']").replaceWith(tTr(this.content))
            else
              $("#lovTable tbody").prepend(tTr(this.content))
    delete:
      eTarget: "#lovTable tbody tr"
      eFunction: ->
        $this = $(this)
        lovId = $this.data("id")
        lovId and util.dangerConfirm "确定删除配置？", (ok)->
          ok and util.ajaxJson "/config/lov/delete", {id: lovId}, ->
            util.ajaxJsonCallback.call this, ->$this.remove()
  }
})