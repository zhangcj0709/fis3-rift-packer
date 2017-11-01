(addPlugins = ->
  plugins = Handlebars.templates["components/summernote/templates/plugins"]
  $("body").append(plugins())
)()