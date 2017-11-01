util = require "util"
optionHelper = require "optionHelper.class"
validate = require "validate.class"


validate.setDefaultOptions({
  showError: (result, eventType)->
    util.msgFail(result.message) if !result.success and eventType is "submit"
    false
})

class actionGroups extends optionHelper

  defaultOptions: {
    container: document
    group: ""
    configs: {}
  }

  defaultActionConfigs: {
    ALL: { trigger: "click" }
    submit: { eTarget: "form" }
    refresh: { eTarget: "", url: "#", callback:->$(this).autoInit() }
  }

  constructor: (options) ->
    @options = $.extend({}, @defaultOptions, options)
    @container = $(@options.container)
    $.extend(@options, @container.data())
    @makeGroups()
    @fillActions()

  makeGroups: ()->
    @groups = []
    @configs = @options.configs || {}
    _self = @
    $groups = if @options.group then @container.find(@options.group) else @container
    $groups.each ->
      _data = $(this).data()
      _objectId = this.id || ""
      if _objectId
        actions =  $.extend(true, {},(_self.configs[_objectId] || _self.configs), _data)
      else
        actions =  $.extend(true, {},(_self.configs), _data)
      for i of actions
        if $.isFunction(actions[i])
          actions[i] = $.extend(true, {}, _self.defaultActionConfigs["ALL"], _self.defaultActionConfigs[i], {eFunction:actions[i]})
        else if actions[i]
          actions[i] = $.extend(true, {}, _self.defaultActionConfigs["ALL"], _self.defaultActionConfigs[i], actions[i])
      _self.groups.push {
        id: _objectId
        element: this
        actions: actions
        parent: _self
        play: ()->_self.play.apply(_self, [this].concat([].slice.call(arguments)))
      }
    @

  fillActions: ()->
    _self = @
    @groups.forEach (group)->
      _self.bindActions(group)
      _self.bindTriggers(group)
      group.play("loaded")

  event: (group, config, target)->
    event = $.Event(config.event)
    event.target = target || this
    event.data =  {group: group, config: config}
    return event

  play: (group, action)->
    _seft = @
    if config = group.actions[action]
      return unless $.isFunction(config.eFunction)
      if config.eTarget
        $(group.element).find(config.eTarget).each ->
          config.eFunction.apply(this, [_seft.event(group, config, this)])
      else
        config.eFunction.apply(group.element, [_seft.event(group, config, group.element)])

  ###注册actions###
  bindActions: (group)->
    _self = @
    todo = (_group)->
      ###注册actions###
      for action of _group.actions
        if config =  _group.actions[action]
          config.event = config.event || action
          config.eTarget = config.eTarget || ""
          config.eFunction = if $.isFunction(config.eFunction) then config.eFunction else config
          config.eFunction = if $.isFunction(config.eFunction) then config.eFunction else _self[action]
          $(_group.element).on config.event, config.eTarget, {group: _group, config: config}, config.eFunction if $.isFunction(config.eFunction)
    if group
      todo(group)
    else
      @groups.forEach (_group)->todo(_group)
    @

  ###注册actions的触发事件###
  bindTriggers: (group)->
    _self = @
    todo = (_group)->
      for action of _group.actions
        if config =  _group.actions[action]
          config.trigger = config.trigger || _self.defaultActionConfigs["ALL"].trigger
          triggers = "#{config.trigger}".split(" ")
          for trigger in triggers
            if trigger
              $(_group.element).on trigger, "[data-action=#{action}]", (e)->
                e.preventDefault()
                e.stopPropagation()
                _trigger = this
                _action = $(this).data("action")
                _config = _group.actions[_action]
                if _config.eTarget
                  $(this).closest(_config.eTarget).trigger(_action, _trigger)
                else
                  $(_group.element).trigger(_action, _trigger)
                false
    if group
      todo(group)
    else
      @groups.forEach (_group)->todo(_group)
    @
  ###默认刷新action###
  refresh: (e, trigger)->
    data = e.data || {}
    group = data.group
    config = data.config
    if config and config.url and group and group.id
      console.log "didRefresh", data
      $(trigger).find(".fa").addClass("fa-spin")
      $.get config.url, (res)->
        newElement = $(res).find("##{group.id}")[0]
        $(group.element).html($(newElement).html())
        if $.isFunction(config.callback) then config.callback.apply(group.element, [e, res])
        group.play("loaded")
        $(trigger).find(".fa").removeClass("fa-spin")
    else
      location.reload(true)
    false

  ###默认表单提交action###
  submit: (e)->
    e.preventDefault()
    e.stopPropagation()
    data = e.data || {}
    group = data.group
    config = data.config
    if config and config.url
      $form = $(this)
      valid = true
      if config.validator
        validator = $form.validate(config.validator) unless validator instanceof validate
        valid = validator.run()
      if valid
        formData = $form.serializeObject()
        formData = group.parent.dataMap.apply($form[0],[formData, config.dataMap])
        _callback = ->
          return util.msgFail this.msg unless this.code is 200
          if $.isFunction(config.callback)
            config.callback.apply(this,[group,config])
          else
            util.msgSuccess this.msg
        util.ajaxJson config.url, formData, $.extend({}, config, {callback: _callback})
      console.log "didSubmit", config
    false


$.fn.actionGroups = (options)->
  (agi = $(this).data("actionGroups")) || (agi = new actionGroups($.extend(options, {container: this})))
  return agi

module.exports = actionGroups

