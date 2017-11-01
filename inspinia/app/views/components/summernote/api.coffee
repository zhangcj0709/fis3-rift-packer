init = (container)->
  require("./addPlugins") if $(container).find('.summernote,[data-toggle="summernote"]').length > 0
  $(container).find('[data-toggle="summernote"]').each ->
    _data = $(this).data()
    $(this).summernote($.extend({}, _data, {callbacks: {
      onChange: (code)->
        if $(_data.saveTarget).length > 0
          if _data.saveType is "text"
            (div = document.createElement("div")).innerHTML = code
            $(_data.saveTarget).val(div.innerText)
          else
            $(_data.saveTarget).val(code)
    }}))
$.fn.initSummernote = ->init(this)

module.exports = init