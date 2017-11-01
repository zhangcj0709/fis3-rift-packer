require("templates");
preloadLov = require("./preloadLov")
optionsTemp = Handlebars.templates["components/lov/templates/options"]
checkboxTemp = Handlebars.templates["components/lov/templates/checkboxs"]
radioTemp = Handlebars.templates["components/lov/templates/radios"]

loadLov = (container)->
  $container = $(container)

  $container.on "lovloaded", "[data-toggle='loadLov']", (e, res)->
    $container.find("select[name='#{this.name}']").not(this).each ->
      _data = $(this).data() || {}
      _data.options = res.result
      $(this).html(optionsTemp(_data))

  elemList = $container.find("[data-toggle='loadLov'],[data-toggle='loadLovCheckbox'],[data-toggle='loadLovRadio']")
  elemList.each ->
    $this  = $(this)
    data = $this.data() || {}
    data.callback = (res)->
      if data.toggle is "loadLov"
        data.options = res.result
        $this.html(optionsTemp(data))
      else if data.toggle is "loadLovCheckbox"
        data.checkboxs = res.result
        $this.html(checkboxTemp(data))
      else if data.toggle is "loadLovRadio"
        data.radios = res.result
        $this.html(radioTemp(data))
      $this.trigger("lovloaded",res)
    preloadLov data.lovType, data

$.fn.loadLov = ->loadLov(this)

module.exports = loadLov