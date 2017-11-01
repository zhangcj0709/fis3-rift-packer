###require vendor/dropzone & vendor/imageviewer###
util = require "util"

imageUpload = (options)->
  #创建选择框
  options.type = "#{options.type}"
  if !modals[options.type]
    options.data = options.data || []
    modal = modals[options.type] = util.modal(options.template(options), {
      show: false
      title: options.modalTitle
      closeButton: false
    })
    modal.localData = options.data


    defaultDropzoneOptions = {
      url: "/file/upload"
      paramName: "file"
      autoProcessQueue: true
      uploadMultiple: false
      addRemoveLinks: true
      maxFilesize: 10
      acceptedFiles: ".jpg,.gif,.jpeg,.png,.pjpeg,.bmp"
      dictDefaultMessage: '<i class="fa fa-cloud-upload"></i> 拖拽文件到此处或点击选择文件上传'
      dictFallbackMessage:"回退"
      dictInvalidFileType:"文件格式被拒绝，请上传.jpg,.gif,.jpeg,.png,.pjpeg,.bmp格式的图片！"
      dictFileTooBig:"请上传小于{{maxFilesize}}M的图片！"
      dictCancelUpload:"取消上传"
      dictCancelUploadConfirmation:"请确认取消上传当前图片！"
      dictRemoveFile:"移除"
      dictMaxFilesExceeded:"您最多只能上传{{maxFiles}}个图片！"
      success: (file, resp)->
        $(modal.customizedOptions.target).trigger("onFileUploaded", [modal, file, resp])
        if resp.code isnt 200
          return this.emit("error", file, resp.msg);
        else if file.previewElement
          $(file.previewElement).data("imageId","#{resp.content}")
          #$(file.previewElement).append("<input type='hidden' name='imageId' value='#{resp.content}'>")
          return file.previewElement.classList.add("dz-success")
    }
    #初始化
    modal.on "show.bs.modal", ->
      dropzone = (modal.find(".dropzone")[0] || {}).dropzone
      dropzone.destroy() if dropzone
      modal.find(".dropzone").dropzone($.extend({}, defaultDropzoneOptions, modal.customizedOptions))

    checkProcessing = ->
      return util.warningAlert("正在上传中，请稍等...") and false if modal.find(".dz-preview.dz-processing").not(".dz-complete").length>0

    onClose = (e)->
      unless checkProcessing() is false
        modal.modal("hide")
        $(modal.customizedOptions.target).trigger("onCloseFileUpload", modal)

    modal.on "click", "[name='close']", onClose

  #将弹出选择框的事件绑定到指定按钮上
  modal = modals[options.type]
  $(options.target).data("modal", modal)

  onClick = ->
    modal.customizedOptions = options
    modal.modal("show")
  $(options.target).on "click", onClick



module.exports = imageUpload;