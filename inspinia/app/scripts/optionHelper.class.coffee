module.exports = class optionHelper
  constructor: (@options)->
  @fn: @prototype
  getParameters:->
    res = {}
    options = @options
    $.isArray(options.parameters) and $.each(options.parameters, ->
      str = "#{this}".split("|")[0]
      required = "#{this}".split("|")[1] is "true"
      parameter = "#{str}".split("#")[0]
      field = "#{str}".split("#")[1]
      if field and field.indexOf(".") >= 0 and !options.hasOwnProperty(field)
        value = options || {}
        $.each field.split("."), ->value=value[this]||{}
        value = "" if value is options
      else
        value = if field then options[field] else options[parameter]
      if value is null or value is undefined or value is ""
        if required
          console.log("error:请求参数#{parameter}不能为空")
          return (res = false)
        value = ""
      res[parameter] = value
    )
    res

  getCallback: ->
    options = @options
    callback = ->
    callback = options if $.isFunction(options)
    callback = options.callback if options and options.callback and  $.isFunction(options.callback)
    return callback

  dataMap: (data, map)->
    return data unless map
    res = $.extend({}, if map.clearAll then {} else data)
    for field of map
      rule = map[field]
      if typeof rule is "string" and rule.charAt(0) is "#"
        toField = rule.substring(1)
        res[field] = if data.hasOwnProperty(toField) then data[toField] else ""
      if typeof rule is "function"
        res[field] = rule.apply(this, arguments)
    return res


