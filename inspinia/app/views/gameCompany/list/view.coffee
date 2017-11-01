util = require("util")
require("components/actionGroups/api")
require("components/tableview/api")



$("#wrapper-content").actionGroups({
  configs: {
    loaded:->
      $(this).tableview(
        footable: true
        url: "/gameCompany/getList"
        template: Handlebars.templates["gameCompany/list/templates/table"]
      )
    refresh: true
    add: ->
      tModal = Handlebars.templates["gameCompany/list/templates/modal"]
      $modal = $("#editModal").html($(tModal()).html()).autoInit()
      $modal.modal("show")
    edit:
      eTarget: "#companyTable tbody tr"
      eFunction: ->
        data = $(this).data("json")
        tModal = Handlebars.templates["gameCompany/list/templates/modal"]
        $modal = $("#editModal").html($(tModal(data)).html()).autoInit()
        $modal.modal("show")
    onFileUploaded:
      eTarget: "#editModal [data-type=imageUpload]"
      eFunction:   (e, modal, file, resp)->
        if resp.code is 200
          modal.modal("hide")
          $(e.target).find("i,img").replaceWith("<img src='#{resp.content.path}' class='img-lg img-rounded'>")
          $(e.target).find("input[name=logo]").val(resp.content.id)
    save:
      eTarget: "#editModal"
      eFunction: (e)->
        $form = $(this).find("form")
        valid = $form.validate({
          rules:
            logo:required:true
            name:required:true
            website:required:true
        }).run()
        formData = $form.serializeObject()
        valid and util.ajaxJson "/gameCompany/save", formData, ->
          util.ajaxJsonCallback.call (_this = this), ->
            $("#editModal").modal("hide")
            tTr = Handlebars.partials["gameCompany/list/templates/_table-tr"]
            if formData.id
              $("#companyTable tbody tr[data-id='#{formData.id}']").replaceWith(tTr(this.content))
            else
              $("#companyTable tbody").prepend(tTr(this.content))
    delete:
      eTarget: "#companyTable tbody tr"
      eFunction: ->
        $this = $(this)
        lovId = $this.data("id")
        lovId and util.dangerConfirm "确定删除配置？", (ok)->
          ok and util.ajaxJson "/gameCompany/delete", {id: lovId}, ->
            util.ajaxJsonCallback.call this, ->$this.remove()
  }
})