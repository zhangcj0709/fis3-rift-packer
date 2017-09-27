Handlebars.registerHelper "lt", (a, b, options) ->
  if a < b
    options.fn(this)
  else
    options.inverse(this)

Handlebars.registerHelper "lteq", (a, b, options) ->
  if a <= b
    options.fn(this)
  else
    options.inverse(this)

Handlebars.registerHelper "equals", (a, b, options) ->
  if a == b
    options.fn(this)
  else
    options.inverse(this)

Handlebars.registerHelper "eq", (a, b, options) ->
  if a is b
    options.fn(this)
  else
    options.inverse(this)

Handlebars.registerHelper "json",(jsonObj,options) ->
  return JSON.stringify(jsonObj)

Handlebars.registerHelper "is",(a,test,options) ->
  if a+"" is test+""
    return options.fn(this)
  else
    return options.inverse(this)

Handlebars.registerHelper "isnt",(a,test,options) ->
  if a isnt test
    return options.fn(this)
  else
    return options.inverse(this)

Handlebars.registerHelper "notin",(a,arrayStr,options) ->
  array =  arrayStr.split(",")
  for item in array
    if a is item
      return options.inverse(this)
  return options.fn(this)

Handlebars.registerHelper "in",(a,arrayStr,options) ->
  array =  arrayStr.split(",")||[]
  for item in array
    if a is item
      return options.fn(this)
  return options.inverse(this)

Handlebars.registerHelper "nullDefault",(a,b,options) ->
  if a
    return a
  else
    return b

# return yyyy-MM-dd if  called by {{formatDate date}}
# return yyyy-MM-dd HH:mm called by {{formateDate date "default"}}
# return yyyy-MM-dd HH:mm:ss called by {{formateDate date "yyyy-MM-dd HH:mm:ss"}}
Handlebars.registerHelper "formatDate",(date,model) ->
  return "" if date is null
  date = new Date(date)
  _retDate = date.getFullYear()+"-"+Dates.padNumber(date.getMonth() + 1, 2)+"-"+Dates.padNumber(date.getDate(), 2);
  if model is "default"
    _retDate = _retDate+" "+Dates.padNumber(date.getHours(), 2, ' ')\
        +":"+Dates.padNumber(date.getMinutes(), 2)
  else if model and typeof(model) is "string"
    _retDate = model
      .replace("yyyy", date.getFullYear())
      .replace("MM", Dates.padNumber(date.getMonth() + 1, 2))
      .replace("dd", Dates.padNumber(date.getDate(), 2))
      .replace("HH", Dates.padNumber(date.getHours(), 2))
      .replace("mm", Dates.padNumber(date.getMinutes(), 2))
      .replace("ss", Dates.padNumber(date.getSeconds(), 2))
  return _retDate

Handlebars.registerHelper "formatFloat", (str) ->
  float = parseFloat(str)
  return "" if float is NaN
  if float is parseInt(float)
    return float
  else
    return float.toFixed(2)



Handlebars.registerHelper "subtractDate",(a,b,options) ->
  day = 24 * 60 * 60 *1000
  try
    dateArr = d1.split("-");
    checkDate = new Date()
    checkDate.setFullYear(dateArr[0], dateArr[1]-1, dateArr[2])
    checkTime = checkDate.getTime()

    dateArr2 = d2.split("-")
    checkDate2 = new Date()
    checkDate2.setFullYear(dateArr2[0], dateArr2[1]-1, dateArr2[2])
    checkTime2 = checkDate2.getTime()

    cha = (checkTime - checkTime2)/day
    return Math.ceil(cha)
  catch
    return false

Handlebars.registerHelper "subtract30Date",(a,b,options) ->
  day = 24 * 60 * 60 *1000
  try
    dateArr = d1.split("-");
    checkDate = new Date()
    checkDate.setFullYear(dateArr[0], dateArr[1]-1, dateArr[2])
    checkTime = checkDate.getTime()

    dateArr2 = d2.split("-")
    checkDate2 = new Date()
    checkDate2.setFullYear(dateArr2[0], dateArr2[1]-1, dateArr2[2])
    checkTime2 = checkDate2.getTime()

    cha = (checkTime - checkTime2)/day
    c = Math.ceil(cha)
    return ("剩余（#{c}）天") if c<31
    return ""
  catch
    return false

Handlebars.registerHelper "has",(a,b,options)->
  if a.indexOf(b)> -1
    return options.fn(this)
  else
    return options.inverse(this)

Handlebars.registerHelper "haslowwer",(a,b,options)->
  a = a||""
  a = a.toLowerCase()
  if a.indexOf(b)> -1
    return options.fn(this)
  else
    return options.inverse(this)




Handlebars.registerHelper "apartPhoneNum",(a,options)->
  a = a.replace(/\s+/g,"") #去空格
  if a.length is 11 #手机号
    a = a.replace(/(\d{3})(\d{4})/g,"$1 $2 " ) #将内容每4个字符插入一个空格传回去
  else if a.length is 8 #固话
    a = a.replace(/(\d{4})/g,"$1 " )
  return a

Handlebars.registerHelper "apartMobilePhoneNum",(a,options)->
  a = a.replace(/\s+/g,"") #去空格
  a = a.substring(0, 11) #截取11未
  a = a.replace(/(^\d{7})/g,"$1 " ) if a.length > 7
  a = a.replace(/(^\d{3})/g,"$1 " ) if a.length > 3 #将内容每4个字符插入一个空格传回去
  return a

Handlebars.registerHelper "add",(a,b,options)->
  return a + b

Handlebars.registerHelper "before",(a,b,arr,options)->
  i = indexOf(arr,a)
  j = indexOf(arr,b)
  if j>i
    return options.inverse(this)
  else
    return options.fn(this)

indexOf = (array,value)->
  for a,i in array
    return i if a is value

Handlebars.registerHelper "eachsplit",(a,options)->
  a = a + ""
  return a if a is ""
  arr = a.split(";")
  result = new Array()
  for t in arr
    obj = new Object()
    obj["name"] = t.replace(/(.+?):(.+)/g,"$1")
    obj["desc"] = t.replace(/(.+?):(.+)/g,"$2")
    result.push(obj) if obj["name"] isnt "undefined"
  return Handlebars.helpers["each"](result,options)

Handlebars.registerHelper "splitLast",(a,options)->
  if a is null
    return ""
  arr = a.split(",")
  return arr[arr.length-1]

Handlebars.registerHelper "gt",(a,b,options)->
  return options.fn(this) if (parseFloat(a) > parseFloat(b))
  return options.inverse(this)


Handlebars.registerHelper "getValueInMap",(map,key,options)->
  map = map||{}
  for obj of map
    return map[key] if obj is key
  return ""

Handlebars.registerHelper "getValueInList",(objArr,value,options)->
  objArr = objArr||[]
  for obj in objArr
    return obj.value if (obj.name+"") is (value+"")
  return ""

Handlebars.registerHelper "lenclass",(a,options)->
  return "col1" if (a||"").length<11
  return "col2"

Handlebars.registerHelper "size",(arr,options)->
  arr = arr || []
  return arr.length

Handlebars.registerHelper "getPercent",(a, b)->
  return parseInt((a / b) * 100)

Handlebars.registerHelper "isRemainder",(a, b, c, options)->
  if (a%b)+"" is c+""
    return options.fn(this)
  else
    return options.inverse(this)

#除法:被除数a, 除数b, 保留小数位数c, 单位unit
Handlebars.registerHelper "divide", (a, b, c, unit)->
  a = parseFloat(a)
  b = parseFloat(b)
  c = parseInt(c) || 0
  r = a / b
  return if (r && r isnt NaN) then "#{r.toFixed(c)}#{if unit then unit else ''}" else "0"


Handlebars.registerHelper "eachForStr",(str, options)->
  str = str + ""
  return "" if str is ""
  arr = str.split(",")
  result = new Array()
  for val in arr
    result.push({value:val}) if val
  return Handlebars.helpers["each"](result, options)

Handlebars.registerHelper "subStr",(str) ->
  return "" if str is null
  return str if str.length <= 80
  return str.substring(0, 80) + "..."

Handlebars.registerHelper "eachYearFrom",(startYear, options)->
  startYear = parseInt(startYear);
  return "" unless startYear and startYear!=NaN
  thisYear = new Date().getFullYear()
  result = new Array()
  for year in [startYear..thisYear]
    result.push({value:year}) if year
  return Handlebars.helpers["each"](result,options)

Handlebars.registerHelper "toJson",(jsonObj,options) ->
  return JSON.stringify(jsonObj)

Dates = {}
Dates.padNumber = (num, count, padCharacter)->
  padCharacter = '0' if typeof(padCharacter) is "undefined"
  lenDiff = count - String(num).length
  padding = ''
  if (lenDiff > 0)
    while (lenDiff--)
      padding += padCharacter;

  return padding + num

# 刚刚、x分钟前、x小时前、x天前、x月前、x年前
# 现在、x分钟后、x小时后、x天后、x月后、x年后
Handlebars.registerHelper "fromNow", (date, options)->
  return "" if date is null
  date = new Date(date)
  now = new Date()
  gapTime = date.getTime() - now.getTime()
  return "" if isNaN(gapTime)
  years = parseInt(gapTime/(1000*60*60*24*365));
  months = parseInt(gapTime/(1000*60*60*24*30));
  days = parseInt(gapTime/(1000*60*60*24));
  hours = parseInt(gapTime/(1000*60*60));
  minutes = parseInt(gapTime/(1000*60));
  console.warn years,months,days,hours,minutes
  return "#{Math.abs(years)}#{if gapTime < 0 then '年前' else '年后'}" unless years is 0
  return "#{Math.abs(months)}#{if gapTime < 0 then '月前' else '月后'}" unless months is 0
  return "#{Math.abs(days)}#{if gapTime < 0 then '天前' else '天后'}" unless days is 0
  return "#{Math.abs(hours)}#{if gapTime < 0 then '小时前' else '小时后'}" unless hours is 0
  return "#{Math.abs(minutes)}#{if gapTime < 0 then '分钟前' else '分钟后'}" unless minutes is 0
  return "#{if gapTime < 0 then '刚刚' else '现在'}"


#jquery 扩展函数------------------------------------------------
#在输入框的文本最末端获取光标
$.fn.focusEnd = ()->
  this.focus().val(this.val())

#获取url参数
$.getUrlParam = (name, url) ->
  reg = new RegExp("(^|&)#{name}=([^&]*)(&|$)")
  if url
    r = (url.split("?")[1] || "").match(reg)
  else
    r = window.location.search.substr(1).match(reg)
  if r isnt null
    return decodeURIComponent(r[2])
  else
    return null;
#添加url参数
$.addUrlParam = (name, value, url)->
  url = url || window.location.href
  url += "?" if url.indexOf("?") < 0
  arr = url.split("?")
  params = arr[1].split("&")
  params.push encodeURI("#{name}=#{decodeURIComponent(value)}")
  arr[1] = params.filter((elem)->elem isnt "" and elem isnt null).join("&")
  return arr.join("?")


$.fn.serializeObject = ()->
  arrayData = this.serializeArray()
  objectData = {}
  $.each arrayData, ->
    if (this.value != null)
      value = this.value
    else
      value = ''
    if  objectData[this.name] and objectData[this.name] != null
      if !objectData[this.name].push
        objectData[this.name] = [objectData[this.name]]
      objectData[this.name].push(value)
    else
      objectData[this.name] = value
  return objectData

$.isValidTel = (value)->
  isTel = true
  pattern=/(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^[0-9]{3,4}\-[0-9]{7,8}\-[0-9]{3,5}$)|(^[0-9]{7,8}\-[0-9]{3,5}$)|(^\([0-9]{3,4}\)[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{7,8}\-[0-9]{3,5}$)|(^1[3,4,5,7,8]{1}[0-9]{9}$)/
  return pattern.test(value)

$.isValidEmail = (value)->
  return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)

$.isMobileClient = ->
  return (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i))

$.isWeiXinClient = ->
  return /MicroMessenger/i.test(window.navigator.userAgent)

$.isAndroid = ->
  return navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1  #android终端或uc浏览器

$.isEmpty = (obj)->
  return obj is null or obj is undefined or obj is ""