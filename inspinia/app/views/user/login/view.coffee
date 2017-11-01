util = require "util"

$("form").on "submit", ->
  util.ajaxJson "/user/doLogin", $(this).serialize(), ->
    util.ajaxJsonCallback.call this, ->
      lovStorage and lovStorage.clear?()
      location.href = "/index" unless util.redirect()
  false