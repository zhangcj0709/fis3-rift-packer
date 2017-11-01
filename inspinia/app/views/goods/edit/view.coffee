util = require("util")
require("components/actionGroups/api")
_goodsId = $.getUrlParam("id")

###sku表格操作接口###
class skuTableClass
  tTh : Handlebars.partials["goods/edit/templates/_sku-table-th"]
  tTd : Handlebars.partials["goods/edit/templates/_sku-table-td"]
  tTr : Handlebars.partials["goods/edit/templates/_sku-table-tr"]
  tTds: Handlebars.partials["goods/edit/templates/_sku-table-td-setting"]
  tTrs: Handlebars.partials["goods/edit/templates/_sku-table-tr-setting"]
  constructor: (@table)->
    _self = @
    @$table = $(@table)
    @props = []
    @$table.find("thead th[data-pname]").each ->_self.props.push($(this).data())
    @validator = @$table.closest("form").validate({
      rules:
        pvalue:required:true
        salePrice:required:true
        inventory:required:true
    })
    @setting = false
  addColumn: (pname)->
    pname = $.trim(pname)
    return unless pname
    existed = false
    $.each @props, ->
      existed = true if this.pname is pname
    return if existed
    _self = @
    @props.push(prop = {pname: pname})
    @$table.find("thead tr").each ->$(this).find("th:nth(#{_self.props.length})").before($(_self.tTh?prop).autoInit())
    @$table.find("tbody tr").each ->$(this).find("td:nth(#{_self.props.length})").before($(_self.tTd?prop).autoInit())
    @$table.find("tfoot tr").each ->$(this).find("td:nth(#{_self.props.length})").before($(_self.tTds?prop).autoInit())
  deleteColumn: (pname)->
    _self = @
    pname = $.trim(pname)
    return unless pname
    $.each @props, (i)->
      _self.props.splice(i, 1) if this.pname is pname
    @$table.find("th[data-pname=#{pname}],td[data-pname=#{pname}]").remove()
  addRow: ->
    $row = $(@tTr?{propsName: @props, setting: @setting})
    @$table.find("tbody").append($row.autoInit())
    return $row
  addSettingRow: ->
    $row = $row = $(@tTrs?{propsName: @props})
    @$table.find("tfoot").html($row)
    return $row
  toggleSettingRow: ->
    $tfoot = @$table.find("tfoot")
    $tbody = @$table.find("tbody")
    if $tfoot.hasClass("d-none")
      $tfoot.removeClass("d-none")
      $tbody.find(":checkbox[name=checkRow]").prop("checked",false).parent().show().siblings().hide()
      @setting = true
    else
      $tfoot.addClass("d-none")
      $tbody.find(":checkbox[name=checkRow]").parent().hide().siblings().show()
      @setting = false
  checkAllRows: ->
    $checkbox = @$table.find("tbody :checkbox[name=checkRow]")
    if $checkbox.length is $checkbox.filter(":checked").length
      $checkbox.prop("checked",false)
    else
      $checkbox.prop("checked",true)
  setColumnCells:(cellIndex, value)->
    tbody = @table.tBodies[0]
    $.each tbody.rows, ->
      $row = $(this)
      $cell = $(this.cells[cellIndex])
      if $row.find(":checkbox[name=checkRow]:checked").length>0
        $input = $cell.find("input")
        $input.val(value).trigger("validate")
  getRowData: (row)->
    data = @$table.find(row).serializeObjectByName()
    data.props = []
    $.each @props, (i, prop)->
      data.props.push({
        pname: prop.pname
        pvalue: if $.isArray(data["pvalue"]) then data["pvalue"][i] else data["pvalue"]
      })
    delete data.pvalue
    data.props = JSON.stringify(data.props)
    return data



skuTable = new skuTableClass($("#skuTable")[0])

$(document).actionGroups({
  group: ".wrapper-content .tab-pane"
  configs: {
    "tab-1": {
      refresh: true
      submit: {
        url: "/goods/save"
        validator:rules:
          thumbnailId:required: {value: true, message: "请上传商品缩略图！"}
          title:required: true
        callback: ->
          res = this
          util.msgSuccess this.msg, ->
            location.href = "/goods/edit?id=#{res.content.id}" unless _goodsId
      }
      onFileUploaded: {
        eTarget: "[data-type=imageUpload]"
        eFunction:   (e, modal, file, resp)->
          if resp.code is 200
            modal.modal("hide")
            $(e.target).find("i,img").replaceWith("<img src='#{resp.content.path}' class='img-lg img-rounded'>")
            $(e.target).find("input[name=thumbnailId]").val(resp.content.id).trigger("change")
            util.msgSuccess("请点击“保存修改”完成logo保存")
      }
      onSale: (e)->
        _goodsId and util.warningConfirm "确认上架？", (ok)->
          ok and util.ajaxJson "/goods/onSale", {id: _goodsId}, ->
            util.ajaxJsonCallback.call this, ->e.data.group.play("refresh")
      offSale: (e)->
        _goodsId and util.dangerConfirm "确认下架？", (ok)->
          ok and util.ajaxJson "/goods/offSale", {id: _goodsId}, ->
            util.ajaxJsonCallback.call this, ->e.data.group.play("refresh")
    }
    "tab-2": {
      refresh: true
      submit: {
        validator:rules:content:required: true
        url: "/goods/save"
      }
    }
    "tab-3": {
      refresh: true
      submit: {
        url: "/goods/savePictureOrder"
        dataMap:
          clearAll: true
          goodsId: "#goodsId"
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
            ok and util.ajaxJson "/goods/pic/delete", {id: id}, ->
              util.ajaxJsonCallback.call this, ->$(e.target).closest("tr").remove()
      }
      changeEnable: {
        event: "change propertychange"
        eTarget: "input[name=enable]"
        eFunction: ->
          _self = this
          _checked = this.checked
          _self.checked = !_checked
          id = $(this).closest("tr").data("id")
          id and util.ajaxJson "/goods/pic/#{if _checked then 'publish' else 'stop'}", {id: id}, ->
            util.ajaxJsonCallback.call this, ->_self.checked = _checked
      }
      onCloseFileUpload: {
        eTarget: "[data-type=imageUpload]"
        eFunction: (e)->e.data.group.play("refresh")
      }
    }
    "tab-4": {
      loaded: ->
        skuTable = new skuTableClass($(this).find("#skuTable")[0])
      refresh: true
      submit: {
        url: "/goods/sku/save"
        validator: skuTable.validator
        dataMap:
          clearAll: true
          goodsId: "#goodsId"
          skus: ()->
            arr = []
            $(this).find("tbody tr").each ->
              arr.push(skuTable.getRowData(this))
            return JSON.stringify(arr)
        callback: (group)->
          util.ajaxJsonCallback.call this, ->
            group.play("refresh")
      }
      saveSku:
        eTarget: "tbody tr[data-sku-id]"
        eFunction: ->
          $this = $(this)
          valid = skuTable.validator.run($(this).find("[name]"))
          if valid
            data = skuTable.getRowData(this)
            skus = JSON.stringify([data])
            util.ajaxJson "/goods/sku/save", {goodsId: _goodsId, skus:skus}, ->
              util.ajaxJsonCallback.call this, ->
                $this.replaceWith($(skuTable.tTr?this.content).autoInit()) unless data.id
      deleteSku:
        eTarget: "tbody tr[data-sku-id]"
        eFunction: ->
          $this = $(this)
          skuId = $this.data("skuId")
          skuId and util.dangerConfirm "确定删除此记录？", (ok)->
            ok and util.ajaxJson "/goods//sku/delete", {id:skuId}, ->
              util.ajaxJsonCallback.call this, ->$this.remove()
      addRow: ->
        skuTable.addRow()
      removeRow:
        eTarget: "tbody tr"
        eFunction: ->$(this).remove()
      addColumns: ->
        props = "#{$("[data-type=tagsinput]").val()}".split(",")
        $.each props, ->skuTable.addColumn(this)
      deleteColumn:
        eTarget: "thead th[data-pname]"
        eFunction: ->
          pname = $(this).data("pname")
          util.warningConfirm "是否删除规格参数[#{pname}]？", (ok)->
            ok and skuTable.deleteColumn(pname)
      toggleSettingRow: ->
        skuTable.toggleSettingRow()
      checkAllRows:->
        skuTable.checkAllRows()
      setColumnCells:
        eTarget: "tfoot td"
        eFunction: ->
          return util.msgInfo "请选择行" unless $(this).closest("table").find("tbody :checkbox[name=checkRow]:checked").length > 0
          value = $(this).find("input").val()
          skuTable.setColumnCells(this.cellIndex, value) if value
      setCells:
        eTarget: "tfoot tr"
        eFunction: ->
          return util.msgInfo "请选择行" unless $(this).closest("table").find("tbody :checkbox[name=checkRow]:checked").length > 0
          $(this).find("td").each ->
            value = $(this).find("input").val()
            skuTable.setColumnCells(this.cellIndex, value) if value
    }
  }
})