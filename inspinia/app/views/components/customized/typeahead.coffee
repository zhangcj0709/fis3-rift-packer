###require vendor/dropzone & vendor/imageviewer###
util = require "util"

typeahead = (options)->
  options.type = "#{options.type}"
  options.data = options.data || []
  ops = $.extend({
      source: []
      showHintOnFocus: "all"
  }, options)
  $.each options.data, ->
    ops.source.push(this.value)

  $(options.target).typeahead(ops)


module.exports = typeahead;