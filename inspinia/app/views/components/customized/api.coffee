require("templates")
preloadLov = require("components/loadLov/preloadLov")

config = {
  "imageUpload": {
    modalTitle: "选择图片"
    template: Handlebars.templates["components/customized/templates/modal_image_upload"]
    callback: require("components/customized/imageUpload")
  }
  "imageCropper": {
    modalSize: "middle"
    modalTitle: "截图"
    template: Handlebars.templates["components/customized/templates/modal_image_cropper"]
    callback: require("components/customized/imageCropper")
  }
  "tagsinput": {
    lovType: true # 使用data-lov-type自定义lovType
    callback: require("components/customized/tagsinput")
  }
  "select2": {
    lovType: true # 使用data-lov-type自定义lovType
    callback: require("components/customized/select2")
  }
  "typeahead": {
    lovType: true # 使用data-lov-type自定义lovType
    callback: require("components/customized/typeahead")
  }
  "collapseTable": {
    callback: require("components/customized/collapseTable")
  }
  get:(type)->@["#{type}"]
}


initControl = (target, type)->
  @modals = @modals || {}
  $target = $(target)
  options = $.extend(true, {}, config.get(type), $target.data(), {modals: @modals, target: $target })
  #加载lov配置数据
  if options.lovType
    preloadLov options.lovType, options
  else
    options.callback(options) if $.isFunction(options.callback)


###初始化特殊定制选择/弹出框###
customized = (container)->
  _customized =  ->
    $this = $(this)
    type = $this.data("type") || $this.attr("name")
    initControl($this, type) unless $this.data("modal")
  $(container).filter("[data-toggle='customized']").each _customized
  $(container).find("[data-toggle='customized']").each _customized

$.fn.customized = ->customized(this)

module.exports = customized