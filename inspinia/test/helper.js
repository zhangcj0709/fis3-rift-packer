module.exports = function(Handlebars) {


  var Dates, indexOf;

  Handlebars.registerHelper("lt", function(a, b, options) {
    if (a < b) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper("lteq", function(a, b, options) {
    if (a <= b) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper("equals", function(a, b, options) {
    if (a === b) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper("eq", function(a, b, options) {
    if (a === b) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper("json", function(jsonObj, options) {
    return JSON.stringify(jsonObj);
  });

  Handlebars.registerHelper("is", function(a, test, options) {
    if (a + "" === test + "") {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper("isnt", function(a, test, options) {
    if (a !== test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper("notin", function(a, arrayStr, options) {
    var array, item, _i, _len;
    array = arrayStr.split(",");
    for (_i = 0, _len = array.length; _i < _len; _i++) {
      item = array[_i];
      if (a === item) {
        return options.inverse(this);
      }
    }
    return options.fn(this);
  });

  Handlebars.registerHelper("in", function(a, arrayStr, options) {
    var array, item, _i, _len;
    if (typeof arrayStr === "string") {
      array = arrayStr.split(",");
    } else if (typeof arrayStr === "object" && arrayStr.length > 0) {
      array = arrayStr;
    } else {
      array = [];
    }
    for (_i = 0, _len = array.length; _i < _len; _i++) {
      item = array[_i];
      if (("" + a) === ("" + item)) {
        return options.fn(this);
      }
    }
    return options.inverse(this);
  });

  Handlebars.registerHelper("nullDefault", function(a, b, options) {
    if (a) {
      return a;
    } else {
      return b;
    }
  });

  Handlebars.registerHelper("formatDate", function(date, model) {
    var _retDate;
    if (date === null) {
      return "";
    }
    date = new Date(date);
    _retDate = date.getFullYear() + "-" + Dates.padNumber(date.getMonth() + 1, 2) + "-" + Dates.padNumber(date.getDate(), 2);
    if (model === "default") {
      _retDate = _retDate + " " + Dates.padNumber(date.getHours(), 2, ' ') + ":" + Dates.padNumber(date.getMinutes(), 2);
    } else if (model && typeof model === "string") {
      _retDate = model.replace("yyyy", date.getFullYear()).replace("MM", Dates.padNumber(date.getMonth() + 1, 2)).replace("dd", Dates.padNumber(date.getDate(), 2)).replace("HH", Dates.padNumber(date.getHours(), 2)).replace("mm", Dates.padNumber(date.getMinutes(), 2)).replace("ss", Dates.padNumber(date.getSeconds(), 2));
    }
    return _retDate;
  });

  Handlebars.registerHelper("formatFloat", function(str) {
    var float;
    float = parseFloat(str);
    if (float === NaN) {
      return "";
    }
    if (float === parseInt(float)) {
      return float;
    } else {
      return float.toFixed(2);
    }
  });

  Handlebars.registerHelper("subtractDate", function(a, b, options) {
    var cha, checkDate, checkDate2, checkTime, checkTime2, dateArr, dateArr2, day;
    day = 24 * 60 * 60 * 1000;
    try {
      dateArr = d1.split("-");
      checkDate = new Date();
      checkDate.setFullYear(dateArr[0], dateArr[1] - 1, dateArr[2]);
      checkTime = checkDate.getTime();
      dateArr2 = d2.split("-");
      checkDate2 = new Date();
      checkDate2.setFullYear(dateArr2[0], dateArr2[1] - 1, dateArr2[2]);
      checkTime2 = checkDate2.getTime();
      cha = (checkTime - checkTime2) / day;
      return Math.ceil(cha);
    } catch (_error) {
      return false;
    }
  });

  Handlebars.registerHelper("subtract30Date", function(a, b, options) {
    var c, cha, checkDate, checkDate2, checkTime, checkTime2, dateArr, dateArr2, day;
    day = 24 * 60 * 60 * 1000;
    try {
      dateArr = d1.split("-");
      checkDate = new Date();
      checkDate.setFullYear(dateArr[0], dateArr[1] - 1, dateArr[2]);
      checkTime = checkDate.getTime();
      dateArr2 = d2.split("-");
      checkDate2 = new Date();
      checkDate2.setFullYear(dateArr2[0], dateArr2[1] - 1, dateArr2[2]);
      checkTime2 = checkDate2.getTime();
      cha = (checkTime - checkTime2) / day;
      c = Math.ceil(cha);
      if (c < 31) {
        return "剩余（" + c + "）天";
      }
      return "";
    } catch (_error) {
      return false;
    }
  });

  Handlebars.registerHelper("has", function(a, b, options) {
    if (a.indexOf(b) > -1) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper("haslowwer", function(a, b, options) {
    a = a || "";
    a = a.toLowerCase();
    if (a.indexOf(b) > -1) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper("apartPhoneNum", function(a, options) {
    a = a.replace(/\s+/g, "");
    if (a.length === 11) {
      a = a.replace(/(\d{3})(\d{4})/g, "$1 $2 ");
    } else if (a.length === 8) {
      a = a.replace(/(\d{4})/g, "$1 ");
    }
    return a;
  });

  Handlebars.registerHelper("apartMobilePhoneNum", function(a, options) {
    a = a.replace(/\s+/g, "");
    a = a.substring(0, 11);
    if (a.length > 7) {
      a = a.replace(/(^\d{7})/g, "$1 ");
    }
    if (a.length > 3) {
      a = a.replace(/(^\d{3})/g, "$1 ");
    }
    return a;
  });

  Handlebars.registerHelper("add", function(a, b, options) {
    return a + b;
  });

  Handlebars.registerHelper("before", function(a, b, arr, options) {
    var i, j;
    i = indexOf(arr, a);
    j = indexOf(arr, b);
    if (j > i) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  indexOf = function(array, value) {
    var a, i, _i, _len;
    for (i = _i = 0, _len = array.length; _i < _len; i = ++_i) {
      a = array[i];
      if (a === value) {
        return i;
      }
    }
  };

  Handlebars.registerHelper("eachsplit", function(a, options) {
    var arr, obj, result, t, _i, _len;
    a = a + "";
    if (a === "") {
      return a;
    }
    arr = a.split(";");
    result = new Array();
    for (_i = 0, _len = arr.length; _i < _len; _i++) {
      t = arr[_i];
      obj = new Object();
      obj["name"] = t.replace(/(.+?):(.+)/g, "$1");
      obj["desc"] = t.replace(/(.+?):(.+)/g, "$2");
      if (obj["name"] !== "undefined") {
        result.push(obj);
      }
    }
    return Handlebars.helpers["each"](result, options);
  });

  Handlebars.registerHelper("splitLast", function(a, options) {
    var arr;
    if (a === null) {
      return "";
    }
    arr = a.split(",");
    return arr[arr.length - 1];
  });

  Handlebars.registerHelper("gt", function(a, b, options) {
    if (parseFloat(a) > parseFloat(b)) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  Handlebars.registerHelper("getValueInMap", function(map, key, options) {
    var obj;
    map = map || {};
    for (obj in map) {
      if (obj === key) {
        return map[key];
      }
    }
    return "";
  });

  Handlebars.registerHelper("getValueInList", function(objArr, value, options) {
    var obj, _i, _len;
    objArr = objArr || [];
    for (_i = 0, _len = objArr.length; _i < _len; _i++) {
      obj = objArr[_i];
      if ((obj.name + "") === (value + "")) {
        return obj.value;
      }
    }
    return "";
  });

  Handlebars.registerHelper("lenclass", function(a, options) {
    if ((a || "").length < 11) {
      return "col1";
    }
    return "col2";
  });

  Handlebars.registerHelper("size", function(arr, options) {
    arr = arr || [];
    return arr.length;
  });

  Handlebars.registerHelper("getPercent", function(a, b) {
    return parseInt((a / b) * 100);
  });

  Handlebars.registerHelper("isRemainder", function(a, b, c, options) {
    if ((a % b) + "" === c + "") {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper("divide", function(a, b, c, unit) {
    var r;
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseInt(c) || 0;
    r = a / b;
    if (r && r !== NaN) {
      return "" + (r.toFixed(c)) + (unit ? unit : '');
    } else {
      return "0";
    }
  });

  Handlebars.registerHelper("eachForStr", function(str, options) {
    var arr, result, val, _i, _len;
    str = str + "";
    if (str === "") {
      return "";
    }
    arr = str.split(",");
    result = new Array();
    for (_i = 0, _len = arr.length; _i < _len; _i++) {
      val = arr[_i];
      if (val) {
        result.push(val);
      }
    }
    return Handlebars.helpers["each"](result, options);
  });

  Handlebars.registerHelper("eachForJson", function(str, options) {
    var e, name, obj, res;
    str = str + "";
    if (str === "") {
      return "";
    }
    try {
      obj = JSON.parse(str);
    } catch (_error) {
      e = _error;
      return "";
    }
    if (typeof obj === "object" && obj.length) {
      return Handlebars.helpers["each"](obj, options);
    } else if (typeof obj === "object") {
      res = [];
      for (name in obj) {
        res.push({
          key: name,
          value: obj[name]
        });
      }
      return Handlebars.helpers["each"](res, options);
    }
    return "";
  });

  Handlebars.registerHelper("pickByIndex", function(index, arrStr, defaultValue, options) {
    var array, resIndex;
    index = parseInt(index) || 0;
    defaultValue = arguments.length >= 4 ? "" + defaultValue : "";
    if (!isNaN(index) && arrStr) {
      array = ("" + arrStr).split(",");
      resIndex = index % array.length;
      if (!isNaN(resIndex)) {
        return array[resIndex];
      }
    }
    return defaultValue;
  });

  Handlebars.registerHelper("pickByRandom", function(arrStr, defaultValue, options) {
    var array, resIndex;
    defaultValue = arguments.length >= 3 ? "" + defaultValue : "";
    if (!isNaN(index) && arrStr) {
      array = ("" + arrStr).split(",");
      resIndex = parseInt(Math.random() * array.length);
      if (!isNaN(resIndex)) {
        return array[resIndex];
      }
    }
    return defaultValue;
  });

  Handlebars.registerHelper("subStr", function(str) {
    if (str === null) {
      return "";
    }
    if (str.length <= 80) {
      return str;
    }
    return str.substring(0, 80) + "...";
  });

  Handlebars.registerHelper("eachYearFrom", function(startYear, options) {
    var result, thisYear, year, _i;
    startYear = parseInt(startYear);
    if (!(startYear && startYear !== NaN)) {
      return "";
    }
    thisYear = new Date().getFullYear();
    result = new Array();
    for (year = _i = startYear; startYear <= thisYear ? _i <= thisYear : _i >= thisYear; year = startYear <= thisYear ? ++_i : --_i) {
      if (year) {
        result.push({
          value: year
        });
      }
    }
    return Handlebars.helpers["each"](result, options);
  });

  Handlebars.registerHelper("toJson", function(jsonObj, options) {
    return JSON.stringify(jsonObj);
  });

  Dates = {};

  Dates.padNumber = function(num, count, padCharacter) {
    var lenDiff, padding;
    if (typeof padCharacter === "undefined") {
      padCharacter = '0';
    }
    lenDiff = count - String(num).length;
    padding = '';
    if (lenDiff > 0) {
      while (lenDiff--) {
        padding += padCharacter;
      }
    }
    return padding + num;
  };

  Handlebars.registerHelper("fromNow", function(date, options) {
    var days, gapTime, hours, minutes, months, now, years;
    if (date === null) {
      return "";
    }
    date = new Date(date);
    now = new Date();
    gapTime = date.getTime() - now.getTime();
    if (isNaN(gapTime)) {
      return "";
    }
    years = parseInt(gapTime / (1000 * 60 * 60 * 24 * 365));
    months = parseInt(gapTime / (1000 * 60 * 60 * 24 * 30));
    days = parseInt(gapTime / (1000 * 60 * 60 * 24));
    hours = parseInt(gapTime / (1000 * 60 * 60));
    minutes = parseInt(gapTime / (1000 * 60));
    console.log(gapTime, years, months, days, hours, minutes);
    if (!(gapTime >= (1000 * 60) || gapTime <= (-1000 * 60))) {
      return "" + (gapTime < 0 ? '刚刚' : '现在');
    }
    if (!(gapTime >= (1000 * 60 * 60) || gapTime <= (-1000 * 60 * 60))) {
      return "" + (Math.abs(minutes)) + (gapTime < 0 ? '分钟前' : '分钟后');
    }
    if (!(gapTime >= (1000 * 60 * 60 * 24) || gapTime <= (-1000 * 60 * 60 * 24))) {
      return "" + (Math.abs(hours)) + (gapTime < 0 ? '小时前' : '小时后');
    }
    if (!(gapTime >= (1000 * 60 * 60 * 24 * 30) || gapTime <= (-1000 * 60 * 60 * 24 * 30))) {
      return "" + (Math.abs(days)) + (gapTime < 0 ? '天前' : '天后');
    }
    if (!(gapTime >= (1000 * 60 * 60 * 24 * 30 * 365) || gapTime <= (-1000 * 60 * 60 * 24 * 30 * 365))) {
      return "" + (Math.abs(months)) + (gapTime < 0 ? '月前' : '月后');
    }
    if (years !== 0) {
      return "" + (Math.abs(years)) + (gapTime < 0 ? '年前' : '年后');
    }
    return "";
  });

};