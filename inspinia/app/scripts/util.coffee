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
      getCallback(options).apply(resp)
    error: (resp)->
      msgError resp
  }
  $.extend(ajaxOption, options) if $.isPlainObject(options)
  @dependence.ajax(ajaxOption) if @dependence.ajax

ajaxJsonCallback = (next)->
  _this = this
  return msgFail(this.msg) and false unless this.code is 200
  msgSuccess this.msg, ->
    next.apply(_this) if $.isFunction(next)
  return true


content = (text)->
  div = document.createElement("div")
  div.innerHTML = text
  return div

msgAlert = (msg, options)->
  callback = getCallback(options)
  if swal
    swal($.extend(true, {title: " ", content: content(msg), button: true}, options)).then ->callback.apply(this, arguments)
  else
    callback(alert(msg))

dangerAlert= (msg, options)->
  callback = getCallback(options)
  msgAlert(msg, $.extend({icon:"error", dangerMode: true, callback:callback}, options))

warningAlert = (msg, options)->
  callback = getCallback(options)
  msgAlert(msg, $.extend({icon:"warning", callback:callback}, options))

msgConfirm = (msg, options)->
  callback = getCallback(options)
  if swal
    swal($.extend(true, {title: "", content: content(msg), buttons: ["取消", true]}, options)).then ->callback.apply(this, arguments)
  else
    callback(confirm(msg))

dangerConfirm = (msg, options)->
  callback = getCallback(options)
  msgConfirm(msg, $.extend({icon:"warning", dangerMode: true, callback:callback}, options))

warningConfirm = (msg, options)->
  callback = getCallback(options)
  msgConfirm(msg, $.extend({icon:"warning", callback:callback}, options))

msgDisplay = (msg, options)->
  callback = getCallback(options)
  if swal
    swal($.extend(true, {title: "", content: content(msg), button: false, timer: 2000}, options)).then ->callback.apply(this, arguments)
  else
    callback(alert(msg))

msgSuccess = (msg, options)->
  callback = getCallback(options)
  msgDisplay(msg, $.extend({button: true, icon:"success", callback:callback}, options))

msgInfo = (msg, options)->
  callback = getCallback(options)
  msgDisplay(msg, $.extend({button: true, icon:"info", callback:callback}, options))

msgFail = (msg, options)->
  callback = getCallback(options)
  dangerAlert(msg, $.extend({callback:callback}, options))

msgError = (resp)->
  return unless resp.readyState is 4 #屏蔽ajax未加载成功就被cancel了的报错
  ops = { icon: "error" }
  if resp? && resp.status is 404 then msgFail("请求页面丢失！", {title:"404错误"})
  if resp? && resp.responseText then msgFail(resp.responseText,{callback:(->console.warn(resp))}) else msgFail("出错了,请重试!")

modal = (content, options)->
  callback = getCallback(options)
  if bootbox
    _callback = ->callback.apply(this, arguments) or true
    op = $.extend(true, { message: content, title: "", size: "large" }, $.extend(options,{ callback: _callback}))
    modal = bootbox.dialog(op)
    return modal
  else
    msgAlert "NOT SUPPORT!!!"




class util
  getCallback: getCallback
  gotoLogin: gotoLogin
  redirect: redirect
  ajaxJson: ajaxJson
  ajaxJsonCallback: ajaxJsonCallback
  msgAlert: msgAlert
  dangerAlert: dangerAlert
  warningAlert: warningAlert
  msgConfirm: msgConfirm
  dangerConfirm: dangerConfirm
  warningConfirm: warningConfirm
  msgDisplay: msgDisplay
  msgError: msgError
  msgInfo: msgInfo
  msgSuccess: msgSuccess
  msgFail: msgFail
  modal: modal
  fn: @prototype
  dependence: jQuery

module.exports = window.myUtils  = new util()

