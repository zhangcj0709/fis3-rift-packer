###require vendor/tagsinput###
util = require "util"

tagsinput = (options)->
  options.type = "#{options.type}"
  options.data = options.data || []
  ops = $.extend({
    tagClass: "label label-primary"
    trimValue: true
    typeahead: {
      source: []
      showHintOnFocus: "all"
    }
  }, options)
  field = options.field || "value"
  $.each options.data, ->
    ops.typeahead.source.push(if this.hasOwnProperty(field) then this[field] else this.value)

  $(options.target).tagsinput(ops)


module.exports = tagsinput;