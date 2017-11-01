module.exports = class validate
  @fn: validate.prototype
  @addRule: (ruleName, message, rule)->
    if $.isFunction(rule)
      @fn.rules[ruleName] = rule
      @fn.ruleMessages[ruleName] = message
  @setDefaultOptions: (options)->
    @fn.defaultOptions = $.extend(@fn.defaultOptions, options)

  defaultOptions: {
    fieldMap: false
    addValidateListener: true
    errorClass:"error"
    errorMessageClass:"error-message"
  }
  rules: {}
  ruleMessages: {}
  addRule: @addRule

  constructor: (@$form, options)->
    @options = $.extend(true, {}, @defaultOptions, options)
    @fn = validate.prototype
    @form = @$form[0]
    @form.myValidate = @
    @validFlag = false
    @validated = false
    @results = []
    @fieldSets = {}
    @init()

  init: ->
    @loadRules()
    @loadFields()

  loadRules: ->
    if @options.rules
      for i of @options.rules
        for j of @options.rules[i]
          if r = @options.rules[i][j]
            r = { value: r } unless r.hasOwnProperty("value")
            @addRuleToFieldSets(i, j, r) if r.value

  loadFields: ->
    for field,index in @form
      @addFieldToFieldSets(field, index) if @checkValidField(field)


  addRuleToFieldSets: (fieldName, ruleName, ruleConfig)->
    rule = {
      name: ruleName
      field: fieldName
      value: ruleConfig.value
      message: ruleConfig.message
      "function": @fn.rules[ruleName]
    }
    fieldSet = @fieldSets[fieldName] or (@fieldSets[fieldName] = [])
    fieldSet.rules.push(rule) if fieldSet.rules or (fieldSet.rules = [])
    return fieldSet

  addFieldToFieldSets: (field, index)->
    return unless fieldSet = @fieldSets[field.name]
    return unless fieldSet.indexOf(field) < 0
    if @options.addValidateListener
      field.myValidateListener or (field.myValidateListener = {})
      if field.type is "checkbox" or field.type is "radio"
        @addlistener(field, "change") unless field.myValidateListener["change"]
      else
        @addlistener(field, "change") unless field.myValidateListener["change"]
        @addlistener(field, "input") unless field.myValidateListener["input"]
        @addlistener(field, "blur") unless field.myValidateListener["blur"]
      @addlistener(field, "validate") unless field.myValidateListener["validate"]
    field.myValidateResults = []
    field.myValidateIndex = index
    if field.type is "checkbox" or field.type is "radio"
      fieldSet.multiple = true
      fieldSet.length = 0
    fieldSet.push(field)
    return fieldSet

  addlistener: (field, listener)->
    _this = @
    rules = @fieldSets[field.name].rules
    $(field).on "#{listener}", (e)->
      _this.resetField(this, _this.options.clearError)
      for rule in rules
        break unless _this.callRule(this, rule)
      _this.raiseField(this, _this.options.showError, e.type)
      true
    field.myValidateListener[listener] = true

  run: ($fields)->
    _this = @
    if $fields and  $fields.length > 0
      @resetFields($fields, @options.clearError)
      for i of @fieldSets
        fieldSet = @fieldSets[i]
        rules = fieldSet.rules
        for field in fieldSet
          if $fields.filter(field).length > 0
            for rule in rules
              break unless @callRule(field, rule)
      result = @raiseFields($fields, @options.showError, "submit")
      return result.success
    else
      @resetForm(@options.clearError)
      for i of @fieldSets
        fieldSet = @fieldSets[i]
        rules = fieldSet.rules
        for field in fieldSet
          for rule in rules
            break unless @callRule(field, rule)
      @raiseForm(@options.showError, "submit")
    return @validFlag

  valid: ()->
    return if @validated then @validFlag else @run()

  resetField: (field, callback)->
    @removeErrorClass(field)
    field.myValidateResults.length = 0 if field.myValidateResults
    callback.call(field) if $.isFunction(callback)

  resetFields: ($fields, callback)->
    _self = @
    $fields.each ->
      _self.resetField(this, callback)
    @loadFields()

  resetForm: (callback)->
    for i of @fieldSets
      for field in @fieldSets[i]
        @resetField(field, callback)
      @fieldSets[i].length = 0
      @fieldSets[i].multiple = false
    @removeErrorClass(@form)
    @results = []
    @validated = false
    @loadFields()
    callback.call(@form) if $.isFunction(callback)

  callRule: (field, rule)->
    return unless @checkValidField(field)
    unless $.isFunction(rule["function"])
      message = "No such rule [#{rule.name}]!"
    else
      message = if rule.message then rule.message else @fn.ruleMessages[rule.name]
    message = "" if success = rule["function"]? and rule["function"].call(field, rule.value)
    message = message.replace(/\$0/g, rule.name).replace(/\$1/g, @mapRuleFieldName(rule)).replace(/\$2/g, "#{field.value}").replace(/\$3/g, "#{rule.value}")
    field.myValidateResults.push({
      success: success
      message: message
      index: field.myValidateIndex
    })
    return success

  mapRuleFieldName: (rule)->
    if @options.fieldMap
      fieldName = @options.fieldMap[rule.field]
      return if fieldName then fieldName else rule.field
    else
      return rule.field

  raiseField: (field, callback, eventType)->
    if field and field.myValidateResults
      for result in field.myValidateResults
        break unless result.success
      if result and !result.success
        error = result.message
        @addErrorClass(field, result)
        callback.call(field, result, eventType) if $.isFunction(callback)
        return result
    return ""

  raiseFields: ($fields, callback, eventType)->
    _self = @
    results = []
    result = {success: true, message: ""}
    $fields.each ->
      res = _self.raiseField(this)
      results.push(res) if res
    results.sort (a, b)->a.index >  b.index
    $.each results, ->
      if this.success isnt on
        result.success = false
        result.message += "<br>" if result.message
        result.message += this.message
    callback.call($fields, result, eventType) if $.isFunction(callback)
    return result

  raiseForm: (callback, eventType)->
    @results = []
    result = {success: true, message: ""}
    for i of @fieldSets
      for field in @fieldSets[i]
        res = @raiseField(field)
        @results.push(res) if res
    @results.sort (a, b)->a.index >  b.index
    $.each @results, ->
      if this.success isnt on
        result.success = false
        result.message += "<br>" if result.message
        result.message += this.message
    @addErrorClass(@form, result)
    @validFlag = result.success
    @validated = true
    callback.call(@form, result, eventType) if $.isFunction(callback)

  addErrorClass: (field, result)->
    if field.type is "checkbox" or field.type is "radio"
      $fields = $(@getMultipleFields(field))
    else
      $fields = $(field)
    $fields.attr("data-valid", result.success)
    $fields.attr("data-error", result.message)
    unless result.success
      $fields.addClass(@options.errorClass)
      $fields.parent().addClass(@options.errorClass) if $fields.is(":hidden")

  removeErrorClass: (field)->
    if field.type is "checkbox" or field.type is "radio"
      $fields = $(@getMultipleFields(field))
    else
      $fields = $(field)
    $fields.removeAttr("data-valid")
    $fields.removeAttr("data-error")
    $fields.removeClass(@options.errorClass)
    $fields.parent().removeClass(@options.errorClass) if $fields.is(":hidden")

  getMultipleFields: (field)->
    _this = @
    fields =  @form[field.name]
    if fields? and fields.length?
      (res = []) and (res.name = field.name)
      $.each fields, ->
        res.push(this) if _this.checkValidField(this)
      return res
    else
      return fields

  checkValidField: (field)->
    return field and field.name and field.disabled isnt on




_getLength = (field)->
  length = 0
  if field.type is "checkbox" or field.type is "radio"
    length = $(field.form).find("[type=#{field.type}][name=#{field.name}]:checked").length
  else if field.value
    length = (field.value+"").length
  return length


#添加默认的规则函数
#消息中$0~3指定含义  $0: 规则名称，$1: 字段名称， $2: 字段值， $3: 规则表达式
validate.addRule "required", "字段[$1]必填！", (parameter)->
  return ((this.type isnt "checkbox" and this.type isnt "radio") and this.value isnt null and this.value isnt "") or ((this.type is "checkbox" or this.type is "radio") and !!_getLength(this))

validate.addRule "length", "字段[$1]长度必须为$3！", (parameter)->
  len = parseInt(parameter)
  length = _getLength(this)
  return (length == len)

validate.addRule "lengthIn", "字段[$1]长度必须在[$3]！", (parameter)->
  lenArray = parameter
  lenArray = [] unless typeof lenArray is "object" and lenArray.length
  length = _getLength(this)
  return (lenArray.indexOf(length) >= 0)

validate.addRule "maxlength", "字段[$1]长度不能超出$3！", (parameter)->
  maxLength = parseInt(parameter)
  length = _getLength(this)
  return (length <= maxLength)

validate.addRule "minlength", "字段[$1]长度不能小于$3！", (parameter)->
  minLength = parseInt(parameter)
  length = _getLength(this)
  return (length >= minLength)

validate.addRule "rangelength", "字段[$1]长度不能溢出区间[$3]！", (parameter)->
  minLength = parseInt(parameter[0])
  maxLength = parseInt(parameter[1])
  length = _getLength(this)
  return (length <= maxLength and length >= minLength)

validate.addRule "phone", "请输入有效的电话号码！", (parameter)->
  return true unless this.value
  pattern = /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^[0-9]{3,4}\-[0-9]{7,8}\-[0-9]{3,5}$)|(^[0-9]{7,8}\-[0-9]{3,5}$)|(^\([0-9]{3,4}\)[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{7,8}\-[0-9]{3,5}$)|(^1[3,4,5,7,8]{1}[0-9]{9}$)/
  return pattern.test(this.value)

validate.addRule "email", "请输入有效的电子邮箱！", (parameter)->
  return true unless this.value
  pattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return pattern.test(this.value)

validate.addRule "integer", "请输入整数！", (parameter)->
  return true if this.value is "" #空值不校验
  return !isNaN(this.value) and "#{parseInt(this.value)}" is "#{this.value}"

validate.addRule "number", "请输入有效的数字！", (parameter)->
  return !isNaN(this.value)

validate.addRule "max", "请输入小于$3的数字！", (parameter)->
  max = parseFloat(parameter)
  return true unless this.value
  return !isNaN(this.value) and parseFloat(this.value) <= max

validate.addRule "min", "请输入大于$3的数字！", (parameter)->
  min = parseFloat(parameter)
  return true unless this.value
  return !isNaN(this.value) and parseFloat(this.value) >= min

validate.addRule "range", "字段[$1]数值不能溢出区间[$3]！", (parameter)->
  return true unless this.value
  min = parseInt(parameter[0])
  max = parseInt(parameter[1])
  return !isNaN(this.value) and parseFloat(this.value) >= min and parseFloat(this.value) <= max

validate.addRule "equal", "请输入和$3相同的值！", (parameter)->
  $toField = $("[name='#{parameter}']")
  if $toField.length>0
    return ("#{this.value}" is "#{$toField.val()}")
  else
    return ("#{this.value}" is "#{parameter}")

validate.addRule "date", "请输入有效的日期！", (parameter)->
  return !/Invalid|NaN/.test(new Date(this.value).toString())

validate.addRule "toFixed", "保留[$3]位小数", (parameter)->
  return true if this is document.activeElement
  if typeof parameter is "number" and parameter >=0
    this.value = parseFloat(this.value).toFixed(parameter)
  return true

validate.addRule "sumMax", "字段[$1]数值之和不能超过[$3]！", (parameter)->
  sum = 0
  max = parseFloat(parameter)
  fieldSet = this.form[this.name]
  return true unless fieldSet and fieldSet.length>0
  fieldSet.forEach (field)->
    value = parseFloat(field.value)
    sum += value if !isNaN(value)
  return sum <= max

validate.addRule "sum", "字段[$1]数值之和必须等于[$3]！", (parameter)->
  sum = 0
  target = parseFloat(parameter)
  fieldSet = this.form[this.name]
  return true unless fieldSet and fieldSet.length>0
  fieldSet.forEach (field)->
    value = parseFloat(field.value)
    sum += value if !isNaN(value)
  return sum == target

validate.addRule "unique", "字段[$1]必须唯一！", (parameter)->
  if this.type is "checkbox" or this.type is "radio"
    length = _getLength(this)
  else
    length = $(this.form[this.name]).length
  return (length <= 1)

validate.addRule "uniqueValue", "字段[$1]值必须唯一！", (parameter)->
  if this.type is "checkbox" or this.type is "radio"
    $fields = $(field.form).find("[type=#{this.type}][name=#{this.name}]:checked")
  else
    $fields = $(this.form[this.name])
  return true if $fields.length <= 1
  values = []
  _this = this
  ok = true
  $fields.each ->
    ok = ok and (this is _this) is (this.value is _this.value)
  return ok

#扩展jquery
$.fn.validate = (options)->
  $form = this.filter("form")
  return unless $form.length > 0
  validator = this.data("validator")
  unless validator
    this.data("validator", validator = new validate($form, options))
  return validator

require("validate.fieldMap")(validate)