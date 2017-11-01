collapseTableFn = {
  init: ->
    _this = @
    if !@ths
      @ths = []
      $(@row).closest("table").find("thead tr:visible:first th").each ->
        for i in [1..@colSpan]
          _this.ths.push(@)
    $.each @row.cells, ->
      _this.push({element: @, title: _this.ths[_this.count]}) if $(@).data("collapse") is on
      _this.count += @colSpan
    return unless @length > 0
    @$collapse = $("<tr class='collapse-wrapper' style='display: none;'><td colspan='999'><table><tbody></tbody></table></td></tr>")
    $tbody = @$collapse.find("tbody")
    $.each @, ->
      $tbody.append("<tr><th>#{$(@title).data("value") or @title.innerHTML}</th><td>#{@element.innerHTML}</td></tr>")
    $(@row).data("collapseCells", @).attr("data-collapse", true)
  show: ->
    return unless @length > 0
    $(@row).after(@$collapse)
    @$collapse.fadeIn()
    @shown = true
  hide: ->
    return unless @length > 0
    _this = @
    @$collapse.fadeOut(->_this.$collapse.remove())
    @shown = false
  toggle: ->
    return unless @length > 0
    if @shown then @hide() else @show()
}
$(document).on "click", "tr[data-collapse=true]", ->
  collapseCells = $(this).data("collapseCells") || {}
  collapseCells.toggle?()
  true

collapseTable = (options)->
  $table = $(options.target)
  _init = (table)->
    $(table).find("tbody td[data-collapse=true]").closest("tr").each ->
      cells = $.extend([], {
        row: @
        count: 0
        $collapse: null
        shown: false
      }, collapseTableFn).init()

  $table.filter("table").each ->_init(@)
  $table.find("table").each ->_init(@)

module.exports = collapseTable;