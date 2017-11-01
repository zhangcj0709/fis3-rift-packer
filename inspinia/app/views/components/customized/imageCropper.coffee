###require vendor/cropper & vendor/localResizeIMG###
util = require "util"


class cutImage
  @addedPlugins = false
  @addPlugins = ->
    return if @addedPlugins
    plugins = Handlebars.templates["components/customized/templates/plugins_image_cropper"]
    $("body").append(plugins())
    @addedPlugins = true

  defaultOptions: {
    url: "/file/upload/base64"
    modalSize: "middle"
    modalTitle: "截图"
    template: Handlebars.templates["components/customized/templates/modal_image_cropper"]
  }
  defaultCropperOptions: {
    viewMode: 1
    dragMode: 'move'
    aspectRatio: 1/1
    autoCropArea: 0.65
    restore: false
    guides: false
    highlight: false
    cropBoxMovable: false
    cropBoxResizable: false
    background: false
    minContainerWidth: 538
    minContainerHeight: 380
    center: true
  }
  constructor: (options, @modal) ->
    @options = $.extend({}, @defaultOptions, options)
    @content =$(@options.template?(@options))
    @cutImage = @content.find("img[name=cutImage]")
    @cutImageCancelBtn = @content.find("[name=cutImageCancelBtn]")
    @cutImageConfirmBtn = @content.find("[name=cutImageConfirmBtn]")
    @cutImageZoomInBtn = @content.find("[name=cutImageZoomInBtn]")
    @cutImageZoomOutBtn = @content.find("[name=cutImageZoomOutBtn]")
    @cutImageRotateLeftBtn = @content.find("[name=cutImageRotateLeftBtn]")
    @cutImageRotateRightBtn = @content.find("[name=cutImageRotateRightBtn]")
    @fileInput = $(@options.fileInput)
    @target = $(@options.target)
    @bindEvent()

  bindEvent: ->
    _this = @
    #取消截图
    @cutImageCancelBtn.on "click", -> _this.close()
    #确认截图
    @cutImageConfirmBtn.on "click",-> _this.upload()
    #放大图片
    @cutImageZoomInBtn.on "click", -> _this.cutImage.cropper('zoom', 0.1)
    #缩小图片
    @cutImageZoomOutBtn.on "click", -> _this.cutImage.cropper('zoom', -0.1)
    #向左旋转图片
    @cutImageRotateLeftBtn.on "click", -> _this.cutImage.cropper('rotate', -90)
    #向右旋转图片
    @cutImageRotateRightBtn.on "click", -> _this.cutImage.cropper('rotate', 90)
    #文件选择事件
    @fileInput.on "change propertychange", (e)->_this.onFileChange(e, this)

  initCropper: (src)->
    #初始化插件
    @cutImage.attr("src", src)
    @cutImage.cropper("destroy")
    @cutImage.cropper($.extend({}, @defaultCropperOptions, @options))

  destroyCropper: ->
    @cutImage.attr("src", "")
    @cutImage.cropper("destroy")

  upload: ->
    _this = @
    croppedImage = @cutImage.cropper('getCroppedCanvas',{width:200,height:200}).toDataURL('image/jpeg')
    util.ajaxJson @options.url, {fileStream:croppedImage}, ->
      $(_this.options.target).trigger("onFileUploaded", [_this.modal, _this.file, this])

  show: (src)->
    _this = @
    @initCropper(src)
    if @modal
      @modal.find("[name=imageCropper]").replaceWith(@content)
    else
      @modal = util.modal(@content, {size: options.modalSize, title: options.modalTitle})
    @modal.modal("show")

  close: ->
    @modal.modal("hide")
    @destroyCropper()

  onFileChange: (e, element)->
    _this = @
    @file = file = e.target.files? and e.target.files[0]
    $input = $(e.target)
    return false unless file
    lrz(file)
      .then((rst)->_this.show(rst.base64))
      .catch((err)->util.msgFail("#{err}"))
      .always(->$input.val(""))
    false




$.fn.cutImage = (options, modal)->
  $(window).one "load", ->cutImage.addPlugins()
  options = $.extend({}, $(this).data(), options, {target: this})
  cutImageInstance = new cutImage(options, modal)
  $(this).data("cutImage", cutImageInstance)
  $(this).on "click", ->
    cutImageInstance.fileInput.trigger("click")

imageCropper = (options)->


  #创建选择框
  options.type = "#{options.type}"
  if !modals[options.type]
    options.data = options.data || []
    modal = modals[options.type] = util.modal(options.template(options), {
      show: false
      size: options.modalSize
      title: options.modalTitle
    })
    modal.localData = options.data

  #将弹出选择框的事件绑定到指定按钮上
  modal = modals[options.type]
  $(options.target).data("modal", modal).cutImage(options, modal)



module.exports = imageCropper;