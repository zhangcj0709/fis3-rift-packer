util = require "util"
optionHelper = require "optionHelper.class"

class tableview extends optionHelper
  @addPlugins = ->
    plugins = Handlebars.templates["components/tableview/templates/plugins"]
    $("body").append(plugins())

  defaultOptions: {
    container: "body"
    table: "table"
    pageNum: 0 #页码
    pageSize: 10 #每页条数
    url: "/text/query"
    parameters: ["page#pageNum|true","pageSize"]
    autoQuery: false
    paging: true #是否分页
    pagination: ".pagination"
    paginationTemplate: ->'<ul class="pagination pull-right"></ul>'
    loaderTemplate: Handlebars.templates["templates/table-loader"]
    bootstrapPaginatorOptions: {}
  }
  defaultBootstrapPaginatorOptions: {
    bootstrapMajorVersion: 3
    currentPage: 1
    totalPages: 1
    numberOfPages: 5
    onPageClicked: (event, originalEvent, type, page)->
      return if $(originalEvent.currentTarget).parent().hasClass("disabled")
      _self = $(this).data("tableview")
      _self.setOptions({pageNum: page}).query()
  }
  constructor: (options) ->
    @readyState = 4
    @options = $.extend({}, @defaultOptions, options)
    @container = $(@options.container)
    @table = @container.find(@options.table).filter("table")
    @table = @findTable(@table) unless @table.length > 0
    @table = @findTable(@container) unless @table.length > 0
    return console.log("error:无效的URL") unless @options.url
    return console.log("error:无效的表格模板") unless $.isFunction(@options.template)
    return console.log("error:无效的表格：#{@options.table}") unless @table.filter("table").length > 0
    $.extend(@options, @container.data(), @table.data())
    @loader = $(@options.loaderTemplate?()).hide()
    @pagination = @container.find(@options.pagination)
    @bootstrapPaginatorOptions = $.extend({}, @defaultBootstrapPaginatorOptions, @options.bootstrapPaginatorOptions, @pagination.data())
    @bindEvent()
    if @options.autoQuery || @table.length <= 0
      @setOptions({pageNum: if isNaN(n = parseInt(@options.autoQuery)) then 1 else n}).query()
    else if @table.length > 0
      @paging()


  setOptions: ->
    options = @options
    $.each arguments, ->
      $.extend(options, @)
    @

  findTable: (container)->
    $container = $(container)
    if $container.filter("table").length > 0
      $table = $container
    else
      $table = $container.find("table")
    return $table

  getSearchParameters: ->
    res = {}
    @container.find("[data-root=tableview][data-role=searchParam]").each ->
      $this = $(this)
      name = this.name || $this.data("name") || ""
      value = $.trim(this.value) || $this.data("value") || ""
      res[name] = value if name and value
    return res

  query: ->
    _self = @
    return unless @readyState is 4
    data = @getParameters()
    $.extend(data, @getSearchParameters())
    return unless data
    ajax = util.ajaxJson(@options.url, data, {
      callback: ->
        return util.msgFail @msg unless @code is 200
        @content = @content || {}
        _self.setOptions({pageNum:@content.pageNum, pageSize:@content.pageSize, total: @content.total, pages: @content.pages})
        _self.mergeTable(@content)
        _self.paging()
        $(_self.table).autoInit()
      beforeSend: ->
        _self.table.append(_self.loader)
        _self.loader.fadeIn()
      complete: (res)->
        _self.loader.fadeOut(->_self.loader.detach())
        _self.readyState = res.readyState
    })
    @readyState = ajax.readyState

  mergeTable: (content)->
    $mergeTable = @findTable(@options.template(content))
    if @table.length > 0
      @table.replaceWith($mergeTable)
      if @pagination.length > 0
        $mergePagination = $mergeTable.find(@options.pagination)
        if $mergePagination.length > 0
          $mergePagination.replaceWith(@pagination)
        else
          $mergeTable.after(@pagination)
    else
      if @pagination.length > 0
        @pagination.before($mergeTable)
      else
        @container.append($mergeTable)
    @table = $mergeTable

  paging: ->
    return unless @options.paging and @table.length > 0 and @options.pages>0 and @options.pageNum<=@options.pages
    if @pagination.length <= 0
      @table = @container.find(@options.pagination)
      if @pagination.length <= 0 and  $.isFunction(@paginationTemplate)
        @pagination = $(@paginationTemplate())
        @table.after(@pagination)
    return console.log("error:无效的分页组件") unless @pagination.length > 0 and $.isFunction($.fn.bootstrapPaginator)
    $.extend(@bootstrapPaginatorOptions, @pagination.data())
    @bootstrapPaginatorOptions.currentPage = @options.pageNum #设置默认页码
    @bootstrapPaginatorOptions.totalPages = @options.pages #设置分页总页数
    $(@pagination).bootstrapPaginator(@bootstrapPaginatorOptions)
    @pagination.data("tableview",@).show()

  bindEvent: ->
    _self = @
    @container.on "click", "button[data-root=tableview][data-role=refresh]", _self, ->_self.query()
    @container.on "click", "button[data-root=tableview][data-role=search]", _self, ->_self.setOptions({pageNum: 1}).query()
    @container.on "submit", "form[data-root=tableview][data-role=search]", _self, ->_self.setOptions({pageNum: 1}).query()


$.fn.tableview = (ops)->
  this.each ->
    options = $.extend({container: this}, $(this).data(), ops)
    $(this).data("tableview", new tableview(options))

module.exports = tableview

