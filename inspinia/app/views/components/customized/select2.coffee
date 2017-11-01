###require vendor/select2###
util = require "util"

tagsinput = (options)->
  options.type = "#{options.type}"
  options.data = options.data || []
  ops = $.extend({width: '100%'}, options)
  field = options.field || "value"
  $.each options.data, ->
    $(options.target).append("<option value='#{if this.hasOwnProperty(field) then this[field] else this.value}'>#{this.name}</option>")
  $(options.target).select2(ops)


module.exports = tagsinput;