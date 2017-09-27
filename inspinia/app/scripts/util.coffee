require("helper")


getCallback = (options)->
  callback = ->
  callback = options if $.isFunction(options)
  callback = options.callback if options and options.callback and  $.isFunction(options.callback)
  return callback


gotoLogin = ()->
  msgFail "未登录或已超时", ->
    redirectUrl = encodeURIComponent("#{window.location.pathname}#{window.location.search}")
    window.location.href = "/user/login?redirect=#{redirectUrl}"
    false

redirect = (redirectUrl)->
  redirectUrl = decodeURIComponent($.getUrlParam("redirect")) unless redirectUrl
  if redirectUrl and redirectUrl isnt "null"
    window.location.href = redirectUrl
    return true
  false

ajaxJson = (url, data, options)->
  ajaxOption = {
    global: true
    type: "POST"
    dataType: "json"
    data: data||{}
    url: url
    success: (resp)->
      return gotoLogin() if resp.code is 401
      getCallback(options).apply(resp, [options])
    error: (resp)->
      msgError resp
  }
  $.extend(ajaxOption, options) if $.isPlainObject(options)
  @dependence.ajax(ajaxOption) if @dependence.ajax


msgAlert = (msg, options)->
  callback = getCallback(options)
  if bootbox
    op = $.extend(true, { message: msg, title: "", callback: callback, buttons:{ok:{label:"确定"}}, size: "small" }, options)
    bootbox.alert(op)
  else
    callback(alert(msg))

msgConfirm = (msg, options)->
  callback = getCallback(options)
  if bootbox
    _callback = (ok)->callback(ok)
    op = $.extend(true, { message: msg, title: "", callback: _callback, buttons:{cancel:{label:"取消"},confirm: {label:"确定"}}, size: "small" }, options)
    bootbox.confirm(op)
  else
    callback(confirm(msg))

msgDisplay = (msg, options)->
  callback = getCallback(options)
  if bootbox
    op = $.extend(true, { message: msg, title: "", callback: callback, size: "small", delay: 1500}, options)
    $dialog = bootbox.dialog(op)
    setTimeout((->$dialog.modal("hide")), op.delay)
    return $dialog
  else
    callback(alert(msg))

msgError = (resp)->
  return unless resp.readyState is 4 #屏蔽ajax未加载成功就被cancel了的报错
  return if resp? && resp.status is 404 then msgAlert "请求页面丢失！", {title:"404错误"}
  if resp? && resp.responseText then msgAlert(resp.responseText,{callback:(->console.warn(resp))}) else msgAlert("出错了,请重试!")

msgSuccess = (msg, options)->
  callback = getCallback(options)
  op = $.extend(true, {callback:callback}, options)
  msg = '<i class="fa fa-check-circle primary"></i>' + (msg||'处理成功')
  msgDisplay(msg, op)

msgFail = (msg, options)->
  callback = getCallback(options)
  op = $.extend(true, {callback:callback}, options)
  msg = '<i class="fa fa-times-circle fail"></i>' + (msg||'处理失败')
  msgDisplay(msg, op)


modal = (content, options)->
  callback = getCallback(options)
  if bootbox
    op = $.extend(true, {callback:callback}, options)
    modal = bootbox.createModal(content, op)
    return modal
  else
    msgAlert "NOT SUPPORT!!!"




class util
  getCallback: getCallback
  gotoLogin: gotoLogin
  redirect: redirect
  ajaxJson: ajaxJson
  msgAlert: msgAlert
  msgConfirm: msgConfirm
  msgDisplay: msgDisplay
  msgError: msgError
  msgSuccess: msgSuccess
  msgFail: msgFail
  modal: modal
  fn: @prototype
  dependence: jQuery

module.exports = new util()

