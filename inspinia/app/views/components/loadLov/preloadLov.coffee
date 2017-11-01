util = require "util"

lovStorage = window.lovStorage = window.lovStorage || {
  add: (type, data)->
    return unless type
    @[type] = storage = {
      time: new Date().getTime()
      data: data
    }
    window.sessionStorage.setItem(type, JSON.stringify(storage))
    storage
  delete: (type)->
    if @[type] and $.isArray(@[type])
      delete @[type]
      window.sessionStorage.removeItem(type)
    @
  clear: ->
    window.sessionStorage.clear()
    for type of @
      delete @[type] if @[type] and $.isArray(@[type])
    @
  get: (type)->
    if !@[type]
      storage = JSON.parse(window.sessionStorage.getItem(type))#读取缓存
      @[type] = storage if storage
    @[type]

  ajaxing:{}
}

config = {
  default: {
    name: "LOV"
    url: "/config/query"
    storage: true
    keepTime: 1000*60*60 #毫秒数
  }
  "SKU_PROPERTY_VALUES": {
    parameters:["prop"]
  }
  "DELIVERY_ORDER_LIST": {
    name: "待发货订单"
    keepTime: 1000*60*5 #每10分钟刷新数据
    url: "/order/delivery/getList"
    parameters:["page","pageSize"]
    page: 1
    pageSize: 0
  }
  get:(type)->@["#{type}"]
}



#加载lov配置
preloadLov = (lovType, options)->
  callback = util.getCallback(options)
  cfg = $.extend(true, {}, config.default, config.get(lovType))
  options = $.extend(true, cfg, options)
  storageName = "#{lovType}".toUpperCase()
  cfg.parameters.forEach((name)->storageName+="_#{options[name]}".toUpperCase()) if $.isArray(cfg.parameters)
  if cfg.storage
    storage = lovStorage.get(storageName)
    if storage and storage.time and (storage.time + cfg.keepTime) > new Date().getTime()
      options.data = storage.data
      options.time = storage.time
      callback?options
      return

  #ajax加载
  if lovStorage.ajaxing[storageName]
    setTimeout((()->preloadLov(lovType,options)), 300)
  else
    reqData = {type: lovType}
    if $.isArray(cfg.parameters) then cfg.parameters.forEach((name)->reqData[name]=options[name]) else reqData.type = lovType
    $ util.ajaxJson(cfg.url, reqData, {
      callback: ->
        if this.code is 200
          storage = lovStorage.add(storageName, this.content)
          options.data = storage.data
          options.time = storage.time
          callback?options
          console.log "预加载#{cfg.name}：#{storageName}"
        else
          console.log "预加载#{cfg.name}失败：#{storageName}: ", this.msg
      complete: ->
        lovStorage.ajaxing[storageName] = false
    })
    lovStorage.ajaxing[storageName] = true
preloadLov.lovStorage = lovStorage
module.exports = preloadLov