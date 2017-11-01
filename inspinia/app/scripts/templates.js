(function() {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates["components/customized/templates/modal_image_cropper"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "\r\n<div class=\"row\" name=\"imageCropper\">\r\n  <div class=\"col-lg-12\">\r\n    <img name=\"cutImage\" src=\"\">\r\n  </div>\r\n\r\n  <div class=\"col-lg-12\">\r\n\r\n    <div class=\"hr-line-dashed\"></div>\r\n    <div class=\"text-right\">\r\n      <div class=\"btn-group pull-left\">\r\n        <button class=\"btn btn-outline btn-warning\" type=\"button\" name=\"cutImageZoomInBtn\"><i class=\"fa fa-search-plus\"></i> 放大</button>\r\n        <button class=\"btn btn-outline btn-warning\" type=\"button\" name=\"cutImageZoomOutBtn\"><i class=\"fa fa-search-minus\"></i> 缩小</button>\r\n        <button class=\"btn btn-outline btn-warning\" type=\"button\" name=\"cutImageRotateLeftBtn\"><i class=\"fa fa-undo\"></i> 左旋转</button>\r\n        <button class=\"btn btn-outline btn-warning\" type=\"button\" name=\"cutImageRotateRightBtn\"><i class=\"fa fa-repeat\"></i> 右旋转</button>\r\n      </div>\r\n      <button class=\"btn btn-default\" type=\"button\" name=\"cutImageCancelBtn\">取消</button>\r\n      <button class=\"btn btn-primary\" type=\"button\" name=\"cutImageConfirmBtn\"><i class=\"fa fa-cloud-upload\"></i> 确认</button>\r\n    </div>\r\n  </div>\r\n</div>";
  return buffer;
  });
templates["components/customized/templates/modal_image_upload"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <form class=\"dropzone\" style=\"height:250px; overflow-y: auto\">\r\n      \r\n      \r\n      \r\n    </form>\r\n\r\n    <div class=\" m-t-sm pull-right\">\r\n      <button class=\"btn btn-default\" name=\"close\">关闭</button>\r\n      \r\n    </div>\r\n  </div>\r\n</div>";
  return buffer;
  });
templates["components/customized/templates/plugins_image_cropper"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<link rel=\"stylesheet\" type=\"text/css\" href=\"/plugins/cropper/cropper.css\" />\r\n<script type=\"text/javascript\" src=\"/plugins/localResizeIMG/lrz.bundle.js\"></script>\r\n<script type=\"text/javascript\" src=\"/plugins/cropper/cropper.js\"></script>";
  });
templates["components/loadLov/templates/checkboxs"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n  <label><input type=\"checkbox\" name=\""
    + escapeExpression(((stack1 = (depth1 && depth1.fieldName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers['in'] || (depth0 && depth0['in']),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.name), (depth1 && depth1.defaultValue), options) : helperMissing.call(depth0, "in", (depth0 && depth0.name), (depth1 && depth1.defaultValue), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = (helper = helpers['in'] || (depth1 && depth1['in']),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, "description", (depth1 && depth1.extendedFields), options) : helperMissing.call(depth0, "in", "description", (depth1 && depth1.extendedFields), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked=\"checked\"";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "data-description=\"";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.checkboxs), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates["components/loadLov/templates/dropdown"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.name), (depth1 && depth1.defaultValue), options) : helperMissing.call(depth0, "is", (depth0 && depth0.name), (depth1 && depth1.defaultValue), options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program4(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    <li ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.name), (depth1 && depth1.defaultValue), options) : helperMissing.call(depth0, "is", (depth0 && depth0.name), (depth1 && depth1.defaultValue), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><a data-value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"ellipsis\" title=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers['in'] || (depth1 && depth1['in']),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, "description", (depth1 && depth1.extendedFields), options) : helperMissing.call(depth0, "in", "description", (depth1 && depth1.extendedFields), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\r\n  ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "class=\"active\"";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "data-description=\"";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

  buffer += "<input type=\"text\" data-toggle=\"dropdown\" readonly=\"readonly\" ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n<ul class=\"dropdown-menu\" style=\"min-width: inherit; width: 100%;\">\r\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });
templates["components/loadLov/templates/options"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n  <option value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.name), (depth1 && depth1.defaultValue), options) : helperMissing.call(depth0, "is", (depth0 && depth0.name), (depth1 && depth1.defaultValue), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers['in'] || (depth1 && depth1['in']),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, "description", (depth1 && depth1.extendedFields), options) : helperMissing.call(depth0, "in", "description", (depth1 && depth1.extendedFields), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "selected=\"selected\"";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "data-description=\"";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

  buffer += "<option value=\"\">请选择</option>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
templates["components/loadLov/templates/radios"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n  <label><input type=\"radio\" name=\""
    + escapeExpression(((stack1 = (depth1 && depth1.fieldName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.name), (depth1 && depth1.defaultValue), options) : helperMissing.call(depth0, "is", (depth0 && depth0.name), (depth1 && depth1.defaultValue), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = (helper = helpers['in'] || (depth1 && depth1['in']),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, "description", (depth1 && depth1.extendedFields), options) : helperMissing.call(depth0, "in", "description", (depth1 && depth1.extendedFields), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked=\"checked\"";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "data-description=\"";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.radios), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates["components/summernote/templates/plugins"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<link rel=\"stylesheet\" type=\"text/css\" href=\"/plugins/summernote/summernote.css\" />\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"/plugins/summernote/summernote-bs3.css\" />\r\n<script type=\"text/javascript\" src=\"/plugins/summernote/summernote.min.js\"></script>\r\n\r\n";
  return buffer;
  });
templates["components/tableview/templates/plugins"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<link rel=\"stylesheet\" type=\"text/css\" href=\"/plugins/footable/css/footable.bootstrap.css\" />\r\n<script type=\"text/javascript\" src=\"/plugins/footable/js/footable.js\"></script>";
  });
Handlebars.registerPartial("config/lov/templates/_table-tr", template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<tr data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-json=\""
    + escapeExpression((helper = helpers.json || (depth0 && depth0.json),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "json", depth0, options)))
    + "\">\r\n  <td class=\"w50 text-center\">";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n  <td class=\"col-xs-3\"><div>";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n  <td class=\"col-xs-3\"><div>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n  <td class=\"col-xs-3\"><div>";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n  <td class=\"col-xs-3\"><div>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n  <td class=\"w100 text-center\">\r\n    <div class=\"btn-group\">\r\n      <button class=\"btn btn-danger  btn-xs m-n\" type=\"button\" data-action=\"delete\">删除</button>\r\n      <button class=\"btn btn-primary btn-xs m-n\" type=\"button\" data-action=\"edit\">编辑</button>\r\n    </div>\r\n  </td>\r\n</tr>";
  return buffer;
  }));
templates["config/lov/templates/modal"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "修改";
  }

function program3(depth0,data) {
  
  
  return "新增";
  }

function program5(depth0,data) {
  
  
  return "disabled";
  }

  buffer += "<div id=\"editModal\" class=\"modal inmodal fade\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "值</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form class=\"form-horizontal row\">\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">类型:</label>\r\n            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" name=\"type\" value=\"";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "></div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">名称:</label>\r\n            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" name=\"name\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "></div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">值:</label>\r\n            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" name=\"value\" value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">备注:</label>\r\n            <div class=\"col-sm-10\"><textarea type=\"text\" class=\"form-control\" name=\"description\" rows=\"3\" style=\"resize:vertical;\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea></div>\r\n          </div>\r\n          <input type=\"hidden\" name=\"id\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">取消</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-action=\"save\">保存修改</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
  return buffer;
  });
templates["config/lov/templates/search"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row m-b-sm m-t-sm\" id=\"tableSearchBar\">\r\n  <div class=\"col-md-1\">\r\n    <button type=\"button\" data-root=\"tableview\" data-role=\"refresh\" class=\"btn btn-white\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n  </div>\r\n  <form class=\"col-md-11\" onsubmit=\"return false;\" data-root=\"tableview\" data-role=\"search\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon bg-muted\">类型</span>\r\n      <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-root=\"tableview\" data-role=\"searchParam\" name=\"type\">\r\n      <span class=\"input-group-addon bg-muted\">名称</span>\r\n      <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-root=\"tableview\" data-role=\"searchParam\" name=\"name\">\r\n      <span class=\"input-group-addon bg-muted\">值</span>\r\n      <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-root=\"tableview\" data-role=\"searchParam\" name=\"value\">\r\n      <span class=\"input-group-btn\"><button type=\"submit\" class=\"btn btn-primary m-b-none\"><i class=\"fa fa-search\"></i> 查询</button></span>\r\n    </div>\r\n  </form>\r\n</div>";
  });
templates["config/lov/templates/table"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    ";
  stack1 = self.invokePartial(partials['config/lov/templates/_table-tr'], 'config/lov/templates/_table-tr', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  ";
  return buffer;
  }

  buffer += "<table id=\"lovTable\" class=\"table table-bordered table-hover va-middle\" data-pages=\"";
  if (helper = helpers.pages) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pages); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-page-num=\"";
  if (helper = helpers.pageNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-page-size=\"";
  if (helper = helpers.pageSize) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageSize); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n  <thead>\r\n  <tr>\r\n    <th class=\"w50 text-center\">ID</th>\r\n    <th class=\"col-xs-3\">类型</th>\r\n    <th class=\"col-xs-3\">名称</th>\r\n    <th class=\"col-xs-3\">值</th>\r\n    <th class=\"col-xs-3\">备注</th>\r\n    <th class=\"w100 text-center\">操作</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  ";
  stack1 = self.invokePartial(partials['templates/_table-empty'], 'templates/_table-empty', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </tbody>\r\n  <tfoot>\r\n  <tr>\r\n    <td colspan=\"999\">\r\n      <div class=\"pull-right\"><ul class=\"pagination\"></ul></div>\r\n    </td>\r\n  </tr>\r\n  </tfoot>\r\n</table>";
  return buffer;
  });
Handlebars.registerPartial("game/config/templates/_category-table-tr", template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "checked";
  }

function program3(depth0,data) {
  
  
  return "\r\n        <button class=\"btn btn-danger btn-xs\" type=\"button\" data-action=\"delete\">删除</button>\r\n      ";
  }

function program5(depth0,data) {
  
  
  return "\r\n        <button class=\"btn btn-white btn-xs\" type=\"button\" data-action=\"remove\">移除</button>\r\n      ";
  }

  buffer += "<tr>\r\n  <td class=\"w50 text-center\">";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<input type=\"hidden\" name=\"id\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n  \r\n  <td><input type=\"text\" class=\"form-control\" name=\"name\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n  <td class=\"w100 text-center\">\r\n    <div class=\"switch d-inline-block va-middle\">\r\n      <div class=\"onoffswitch\">\r\n        <label class=\"onoffswitch-label\">\r\n          <input type=\"checkbox\"  class=\"onoffswitch-checkbox\" name=\"enable\" value=\"Y\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.enable), "Y", options) : helperMissing.call(depth0, "is", (depth0 && depth0.enable), "Y", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n          <span class=\"onoffswitch-inner\"></span>\r\n          <span class=\"onoffswitch-switch\"></span>\r\n        </label>\r\n      </div>\r\n    </div>\r\n  </td>\r\n  <td  class=\"w100 text-center\">\r\n    <div class=\"btn-group\">\r\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      <button class=\"btn btn-primary btn-xs\" type=\"button\" data-action=\"save\">保存</button>\r\n    </div>\r\n  </td>\r\n</tr>";
  return buffer;
  }));
Handlebars.registerPartial("game/config/templates/_company-table-tr", template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "checked";
  }

function program3(depth0,data) {
  
  
  return "\r\n        <button class=\"btn btn-danger btn-xs\" type=\"button\" data-action=\"delete\">删除</button>\r\n      ";
  }

function program5(depth0,data) {
  
  
  return "\r\n        <button class=\"btn btn-white btn-xs\" type=\"button\" data-action=\"remove\">移除</button>\r\n      ";
  }

  buffer += "<tr>\r\n  <td class=\"w50 text-center\">";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<input type=\"hidden\" name=\"id\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n  \r\n  <td><input type=\"text\" class=\"form-control\" name=\"name\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n  <td class=\"w100 text-center\">\r\n    <div class=\"switch d-inline-block va-middle\">\r\n      <div class=\"onoffswitch\">\r\n        <label class=\"onoffswitch-label\">\r\n          <input type=\"checkbox\"  class=\"onoffswitch-checkbox\" name=\"enable\" value=\"Y\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.enable), "Y", options) : helperMissing.call(depth0, "is", (depth0 && depth0.enable), "Y", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n          <span class=\"onoffswitch-inner\"></span>\r\n          <span class=\"onoffswitch-switch\"></span>\r\n        </label>\r\n      </div>\r\n    </div>\r\n  </td>\r\n  <td  class=\"w100 text-center\">\r\n    <div class=\"btn-group\">\r\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      <button class=\"btn btn-primary btn-xs\" type=\"button\" data-action=\"save\">保存</button>\r\n    </div>\r\n  </td>\r\n</tr>";
  return buffer;
  }));
templates["game/config/templates/tab-1"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            ";
  stack1 = self.invokePartial(partials['game/config/templates/_category-table-tr'], 'game/config/templates/_category-table-tr', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n          ";
  return buffer;
  }

  buffer += "<div id=\"tab-1\" class=\"tab-pane active\">\r\n  <form class=\"panel-body\">\r\n    <div class=\"table-responsive\">\r\n      <table id=\"categoryTable\" class=\"table table-bordered table-stripped va-middle\">\r\n        <thead>\r\n        <tr>\r\n          <th class=\"w50 text-center\">ID</th>\r\n          <th>类目名称</th>\r\n          <th class=\"w100 text-center\">状态</th>\r\n          <th class=\"w100 text-center\">操作</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.leafCategory), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"hr-line-dashed\"></div>\r\n    <div class=\"form-group text-right\">\r\n      <button class=\"btn btn-primary pull-left\" type=\"button\" data-action=\"add\"><i class=\"fa fa-plus\"></i> 新增类别</button>\r\n      <button class=\"btn btn-white\" type=\"button\" data-action=\"refresh\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n    </div>\r\n  </form>\r\n</div>";
  return buffer;
  });
templates["game/config/templates/tab-2"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n          <tr data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            <td class=\"w200\"><img src=\"";
  if (helper = helpers.picturePath) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.picturePath); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-preview\"><input type=\"hidden\" name=\"id\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td><input type=\"text\" class=\"form-control\" disabled value=\"";
  if (helper = helpers.picturePath) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.picturePath); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td><input type=\"text\" class=\"form-control\"name=\"url\" value=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td class=\"w100\"><input type=\"number\" class=\"form-control\" name=\"orderBy\" value=\"";
  if (helper = helpers.orderBy) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.orderBy); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td class=\"w100 text-center\">\r\n              <div class=\"switch d-inline-block va-middle\">\r\n                <div class=\"onoffswitch\">\r\n                  <label class=\"onoffswitch-label\">\r\n                    <input type=\"checkbox\"  class=\"onoffswitch-checkbox\" name=\"enable\" value=\"Y\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.enable), "Y", options) : helperMissing.call(depth0, "is", (depth0 && depth0.enable), "Y", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                    <span class=\"onoffswitch-inner\"></span>\r\n                    <span class=\"onoffswitch-switch\"></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </td>\r\n            <td class=\"w100 text-center\">\r\n              <button class=\"btn btn-danger btn-xs\" type=\"button\" data-action=\"delete\"><i class=\"fa fa-trash\"></i> 删除</button>\r\n            </td>\r\n          </tr>\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked";
  }

  buffer += "<div id=\"tab-2\" class=\"tab-pane\">\r\n  <form class=\"panel-body\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered table-stripped va-middle\">\r\n        <thead>\r\n        <tr>\r\n          <th>预览</th>\r\n          <th>图片URL</th>\r\n          <th>链接</th>\r\n          <th>排序</th>\r\n          <th class=\"w100 text-center\">启用</th>\r\n          <th class=\"w100 text-center\">操作</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.h5Pics), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"hr-line-dashed\"></div>\r\n    <div class=\"form-group text-right\">\r\n      <div class=\"pull-left\">\r\n        <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"customized\" data-type=\"imageUpload\" data-url=\"/game/banner/upload/gameHomePage\"><i class=\"fa fa-cloud-upload\"></i> 上传图像</button>\r\n        <div class=\"d-inline-block va-bottom m-l-sm text-warning\">请上传统一尺寸的图片！</div>\r\n      </div>\r\n      <button class=\"btn btn-white\" type=\"button\" data-action=\"refresh\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n      <button class=\"btn btn-primary\" type=\"button\" data-action=\"submit\">保存修改</button>\r\n    </div>\r\n    <input type=\"hidden\" name=\"type\" value=\"home_web_large\">\r\n  </form>\r\n</div>";
  return buffer;
  });
templates["game/config/templates/tab-3"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n          <tr data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            <td class=\"w200\"><img src=\"";
  if (helper = helpers.picturePath) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.picturePath); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-preview\"><input type=\"hidden\" name=\"id\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td><input type=\"text\" class=\"form-control\" disabled value=\"";
  if (helper = helpers.picturePath) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.picturePath); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td><input type=\"text\" class=\"form-control\"name=\"url\" value=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td class=\"w100\"><input type=\"number\" class=\"form-control\" name=\"orderBy\" value=\"";
  if (helper = helpers.orderBy) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.orderBy); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td class=\"w100 text-center\">\r\n              <div class=\"switch d-inline-block va-middle\">\r\n                <div class=\"onoffswitch\">\r\n                  <label class=\"onoffswitch-label\">\r\n                    <input type=\"checkbox\"  class=\"onoffswitch-checkbox\" name=\"enable\" value=\"Y\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.enable), "Y", options) : helperMissing.call(depth0, "is", (depth0 && depth0.enable), "Y", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                    <span class=\"onoffswitch-inner\"></span>\r\n                    <span class=\"onoffswitch-switch\"></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </td>\r\n            <td class=\"w100 text-center\">\r\n              <button class=\"btn btn-danger btn-xs\" type=\"button\" data-action=\"delete\"><i class=\"fa fa-trash\"></i> 删除</button>\r\n            </td>\r\n          </tr>\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked";
  }

  buffer += "<div id=\"tab-3\" class=\"tab-pane\">\r\n  <form class=\"panel-body\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered table-stripped va-middle\">\r\n        <thead>\r\n        <tr>\r\n          <th>预览</th>\r\n          <th>图片URL</th>\r\n          <th>链接</th>\r\n          <th>排序</th>\r\n          <th class=\"w100 text-center\">启用</th>\r\n          <th class=\"w100 text-center\">操作</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.largePics), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"hr-line-dashed\"></div>\r\n    <div class=\"form-group text-right\">\r\n      <div class=\"pull-left\">\r\n        <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"customized\" data-type=\"imageUpload\" data-url=\"/game/banner/upload/home_web_large\"><i class=\"fa fa-cloud-upload\"></i> 上传图像</button>\r\n        <div class=\"d-inline-block va-bottom m-l-sm text-warning\">请上传统一尺寸的图片！</div>\r\n      </div>\r\n      <button class=\"btn btn-white\" type=\"button\" data-action=\"refresh\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n      <button class=\"btn btn-primary\" type=\"button\" data-action=\"submit\">保存修改</button>\r\n    </div>\r\n    <input type=\"hidden\" name=\"type\" value=\"home_web_large\">\r\n  </form>\r\n</div>";
  return buffer;
  });
templates["game/config/templates/tab-4"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n          <tr data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            <td class=\"w200\"><img src=\"";
  if (helper = helpers.picturePath) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.picturePath); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-preview\"><input type=\"hidden\" name=\"id\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td><input type=\"text\" class=\"form-control\" disabled value=\"";
  if (helper = helpers.picturePath) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.picturePath); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td><input type=\"text\" class=\"form-control\"name=\"url\" value=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td class=\"w100\"><input type=\"number\" class=\"form-control\" name=\"orderBy\" value=\"";
  if (helper = helpers.orderBy) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.orderBy); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td class=\"w100 text-center\">\r\n              <div class=\"switch d-inline-block va-middle\">\r\n                <div class=\"onoffswitch\">\r\n                  <label class=\"onoffswitch-label\">\r\n                    <input type=\"checkbox\"  class=\"onoffswitch-checkbox\" name=\"enable\" value=\"Y\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.enable), "Y", options) : helperMissing.call(depth0, "is", (depth0 && depth0.enable), "Y", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                    <span class=\"onoffswitch-inner\"></span>\r\n                    <span class=\"onoffswitch-switch\"></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </td>\r\n            <td class=\"w100 text-center\">\r\n              <button class=\"btn btn-danger btn-xs\" type=\"button\" data-action=\"delete\"><i class=\"fa fa-trash\"></i> 删除</button>\r\n            </td>\r\n          </tr>\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked";
  }

  buffer += "<div id=\"tab-4\" class=\"tab-pane\">\r\n  <form class=\"panel-body\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered table-stripped va-middle\">\r\n        <thead>\r\n        <tr>\r\n          <th>预览</th>\r\n          <th>图片URL</th>\r\n          <th>资讯链接</th>\r\n          <th>排序</th>\r\n          <th class=\"w100 text-center\">启用</th>\r\n          <th class=\"w100 text-center\">操作</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.smallPics), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"hr-line-dashed\"></div>\r\n    <div class=\"form-group text-right\">\r\n      <div class=\"pull-left\">\r\n        <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"customized\" data-type=\"imageUpload\" data-url=\"/game/banner/upload/home_web_small\"><i class=\"fa fa-cloud-upload\"></i> 上传图像</button>\r\n        <div class=\"d-inline-block va-bottom m-l-sm text-warning\">请上传统一尺寸的图片！</div>\r\n      </div>\r\n      <button class=\"btn btn-white\" type=\"button\" data-action=\"refresh\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n      <button class=\"btn btn-primary\" type=\"button\" data-action=\"submit\">保存修改</button>\r\n    </div>\r\n    <input type=\"hidden\" name=\"type\" value=\"home_web_small\">\r\n  </form>\r\n</div>";
  return buffer;
  });
Handlebars.registerPartial("game/edit/templates/_link", template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n      <select class=\"form-control\" name=\"platform\" readonly>\r\n        ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.platform), "android", options) : helperMissing.call(depth0, "is", (depth0 && depth0.platform), "android", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.platform), "ios", options) : helperMissing.call(depth0, "is", (depth0 && depth0.platform), "ios", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.platform), "other", options) : helperMissing.call(depth0, "is", (depth0 && depth0.platform), "other", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      </select>\r\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "<option value=\"android\" selected>安卓app下载地址</option>";
  }

function program4(depth0,data) {
  
  
  return "<option value=\"ios\" selected>苹果app下载地址</option>";
  }

function program6(depth0,data) {
  
  
  return "<option value=\"other\" selected>其他下载地址</option>";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n      <select class=\"form-control\" name=\"platform\">\r\n        <option value=\"\">请选择类型</option>\r\n        <option value=\"android\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.platform), "android", options) : helperMissing.call(depth0, "is", (depth0 && depth0.platform), "android", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">安卓app下载地址</option>\r\n        <option value=\"ios\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.platform), "ios", options) : helperMissing.call(depth0, "is", (depth0 && depth0.platform), "ios", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">苹果app下载地址</option>\r\n        <option value=\"other\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.platform), "other", options) : helperMissing.call(depth0, "is", (depth0 && depth0.platform), "other", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">其他下载地址</option>\r\n      </select>\r\n    ";
  return buffer;
  }
function program9(depth0,data) {
  
  
  return "selected";
  }

  buffer += "<tr data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n  <td>\r\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.program(8, program8, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </td>\r\n  <td><input type=\"text\" class=\"form-control\" name=\"downloadUrl\" value=\"";
  if (helper = helpers.downloadUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.downloadUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n  <td><input type=\"text\" class=\"form-control\" name=\"version\" value=\"";
  if (helper = helpers.version) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.version); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n  <td><input type=\"text\" class=\"form-control\" name=\"size\" value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.size)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\r\n  <td class=\"w100 text-center\">\r\n    <button class=\"btn btn-white\" type=\"button\" data-action=\"delete\"><i class=\"fa fa-trash\"></i> 删除</button>\r\n  </td>\r\n</tr>";
  return buffer;
  }));
templates["game/edit/templates/tab-1"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n              <img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.logoUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"img-lg img-rounded\">\r\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\r\n              <i class=\"fa fa-cloud-upload big-icon\"></i>\r\n            ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                  <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers.eq || (depth0 && depth0.eq),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.id), ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.gameCompany), options) : helperMissing.call(depth0, "eq", (depth0 && depth0.id), ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.gameCompany), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\r\n                ";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "selected";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                  <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers.eq || (depth0 && depth0.eq),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.id), ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.cid), options) : helperMissing.call(depth0, "eq", (depth0 && depth0.id), ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.cid), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\r\n                ";
  return buffer;
  }

function program10(depth0,data) {
  
  
  return "checked";
  }

function program12(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program14(depth0,data) {
  
  
  return "d-none";
  }

function program16(depth0,data) {
  
  
  return "disabled";
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        <div class=\"pull-left\">\r\n          ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(21, program21, data),fn:self.program(19, program19, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "onsale", options) : helperMissing.call(depth0, "is", ((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "onsale", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n          <button class=\"btn btn-info btn-outline\" type=\"button\" data-href=\"/game/detail/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><i class=\"fa fa-eye\"></i> 查看</button>\r\n        </div>\r\n      ";
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <button class=\"btn btn-danger\" type=\"button\" data-action=\"offSale\" data-status=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.status)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><i class=\"fa fa-power-off\"></i> 下架</button>\r\n          ";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <button class=\"btn btn-warning\" type=\"button\" data-action=\"onSale\" data-status=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.status)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><i class=\"fa fa-power-off\"></i> 上架</button>\r\n          ";
  return buffer;
  }

  buffer += "<div id=\"tab-1\" class=\"tab-pane active\">\r\n  <form class=\"panel-body\" onsubmit=\"return false;\">\r\n    <div class=\"row d-flex\">\r\n      <div class=\"col-xs-1 w200\">\r\n        <h4>游戏图标:</h4>\r\n        <p class=\"text-center\">\r\n          <a data-toggle=\"customized\" data-type=\"imageUpload\" data-max-files=\"1\">\r\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.logoUrlId), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            <label class=\"d-block m-t-sm\">上传图片</label>\r\n            <input type=\"hidden\" name=\"logoUrlId\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.logoUrlId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n          </a>\r\n        </p>\r\n      </div>\r\n      <div class=\"col-xs-12\">\r\n        <fieldset class=\"form-horizontal\">\r\n          <div class=\"form-group\"><label class=\"col-sm-2 control-label\">游戏名称:</label>\r\n            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" placeholder=\"输入游戏名称\" name=\"name\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div>\r\n          </div>\r\n          <div class=\"form-group\"><label class=\"col-sm-2 control-label\">游戏厂商:</label>\r\n            <div class=\"col-sm-10\">\r\n              <select class=\"form-control\" name=\"gameCompany\" data-toggle=\"select2\">\r\n                <option value=\"\">请选择厂商</option>\r\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.companies), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\"><label class=\"col-sm-2 control-label\">游戏分类:</label>\r\n            <div class=\"col-sm-10\">\r\n              <select class=\"form-control\" name=\"cid\" data-toggle=\"select2\">\r\n                <option value=\"\">请选择分类</option>\r\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.categorys), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\"><label class=\"col-sm-2 control-label\">简介:</label>\r\n            <div class=\"col-sm-10\">\r\n              <input id=\"summarize\" type=\"hidden\" name=\"summarize\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.summarize)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n              <div class=\"summernote\" data-toggle=\"summernote\" data-toolbar=\"false\" data-placeholder=\"请输入简介\" data-height=\"120\" data-save-target=\"#summarize\" data-save-type=\"text\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.summarize)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\"><label class=\"col-sm-2 control-label\">标签:</label>\r\n            <div class=\"col-sm-10\">\r\n              <input class=\"form-control tagsinput\" type=\"text\" name=\"tags\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.tags)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-toggle=\"customized\" data-type=\"tagsinput\" data-lov-type=\"TAG_KEY_WORD_COLOR\" data-field=\"name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\"><label class=\"col-sm-2 control-label\">客户端类型:</label>\r\n            <div class=\"col-sm-10\">\r\n              <div class=\"radio radio-primary radio-inline\"><input type=\"radio\" name=\"type\" id=\"type_mobile_app\" value=\"mobile_app\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.type), "mobile_app", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.type), "mobile_app", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><label for=\"type_mobile_app\">app</label></div>\r\n              <div class=\"radio radio-primary radio-inline\"><input type=\"radio\" name=\"type\" id=\"type_mobile_h5\" value=\"mobile_h5\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.type), "mobile_h5", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.type), "mobile_h5", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><label for=\"type_mobile_h5\">h5</label></div>\r\n              <div class=\"radio radio-primary radio-inline\"><input type=\"radio\" name=\"type\" id=\"type_other\" value=\"other\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.type), "other", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.type), "other", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><label for=\"type_other\">其他</label></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.type), "mobile_h5", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.type), "mobile_h5", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><label class=\"col-sm-2 control-label\">页游地址:</label>\r\n            <div class=\"col-sm-10\">\r\n              <input class=\"form-control\" type=\"text\" name=\"gameWebsite\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.gameWebsite)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(16, program16, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.type), "mobile_h5", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.type), "mobile_h5", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n      </div>\r\n    </div>\r\n    <div class=\"hr-line-dashed\"></div>\r\n    <div class=\"form-group text-right\">\r\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      <button class=\"btn btn-white\" type=\"button\" data-action=\"refresh\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n      <button class=\"btn btn-primary\" type=\"button\" data-action=\"submit\">保存修改</button>\r\n    </div>\r\n    <input type=\"hidden\" name=\"id\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n  </form>\r\n</div>";
  return buffer;
  });
templates["game/edit/templates/tab-3"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n          <tr data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            <td class=\"w200\"><img src=\"";
  if (helper = helpers.picUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.picUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-preview\"></td>\r\n            <td><input type=\"text\" class=\"form-control\" disabled value=\"";
  if (helper = helpers.picUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.picUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td class=\"w100\"><input type=\"number\" class=\"form-control\" name=\"order\" value=\"";
  if (helper = helpers.orderBy) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.orderBy); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><input type=\"hidden\" name=\"id\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td class=\"w50 text-center\">\r\n              <div class=\"switch d-inline-block va-middle\">\r\n                <div class=\"onoffswitch\">\r\n                  <label class=\"onoffswitch-label\">\r\n                    <input type=\"checkbox\"  class=\"onoffswitch-checkbox\" name=\"enable\" value=\"Y\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.enable), "Y", options) : helperMissing.call(depth0, "is", (depth0 && depth0.enable), "Y", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                    <span class=\"onoffswitch-inner\"></span>\r\n                    <span class=\"onoffswitch-switch\"></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </td>\r\n            <td class=\"w100 text-center\">\r\n              <button class=\"btn btn-white btn-xs\" type=\"button\" data-action=\"imageDelete\"><i class=\"fa fa-trash\"></i> 删除</button>\r\n            </td>\r\n          </tr>\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked";
  }

  buffer += "<div id=\"tab-3\" class=\"tab-pane\">\r\n  <form class=\"panel-body\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered table-stripped va-middle\">\r\n        <thead>\r\n        <tr>\r\n          <th>预览</th>\r\n          <th>URL</th>\r\n          <th class=\"w100\">排序</th>\r\n          <th class=\"w100 text-center\">轮播？</th>\r\n          <th class=\"w100 text-center\">操作</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.picUrls), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"hr-line-dashed\"></div>\r\n    <div class=\"form-group text-right\">\r\n      <button class=\"btn btn-primary pull-left\" type=\"button\" data-toggle=\"customized\" data-type=\"imageUpload\" data-url=\"/game/upload\" data-params='{\"gameId\":\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"}'><i class=\"fa fa-cloud-upload\"></i> 上传图像</button>\r\n      <button class=\"btn btn-white\" type=\"button\" data-action=\"refresh\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n      <button class=\"btn btn-primary\" type=\"submit\" data-action=\"button\">保存修改</button>\r\n    </div>\r\n    <input type=\"hidden\" name=\"gameId\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n  </form>\r\n</div>";
  return buffer;
  });
templates["game/edit/templates/tab-4"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            ";
  stack1 = self.invokePartial(partials['game/edit/templates/_link'], 'game/edit/templates/_link', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n          ";
  return buffer;
  }

  buffer += "<div id=\"tab-4\" class=\"tab-pane\">\r\n  <form class=\"panel-body\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered table-stripped\">\r\n        <thead>\r\n        <tr>\r\n          <th>平台</th>\r\n          <th>下载地址</th>\r\n          <th>版本号</th>\r\n          <th>安装包大小</th>\r\n          <th class=\"w100 text-center\">操作</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.versions), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"hr-line-dashed\"></div>\r\n    <div class=\"form-group text-right\">\r\n      <button class=\"btn btn-primary pull-left\" type=\"button\" data-action=\"add\"><i class=\"fa fa-link\"></i> 新增链接</button>\r\n      <button class=\"btn btn-white\" type=\"button\" data-action=\"refresh\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n      <button class=\"btn btn-primary\" type=\"button\" data-action=\"submit\">保存修改</button>\r\n    </div>\r\n    <input type=\"hidden\" name=\"gameId\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n  </form>\r\n</div>";
  return buffer;
  });
Handlebars.registerPartial("game/list/templates/_status", template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <span class=\"label label-primary\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.disName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "instock", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "instock", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <span class=\"label label-warning\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.disName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <span class=\"label label-default\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.disName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n";
  return buffer;
  }

  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "onsale", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "onsale", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }));
templates["game/list/templates/search"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row m-b-sm m-t-sm\" id=\"tableSearchBar\">\r\n  <div class=\"col-md-1\">\r\n    <button type=\"button\" data-root=\"tableview\" data-role=\"refresh\" class=\"btn btn-white\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n  </div>\r\n  <form class=\"col-md-11\" onsubmit=\"return false;\" data-root=\"tableview\" data-role=\"search\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-root=\"tableview\" data-role=\"searchParam\" name=\"search\">\r\n      <span class=\"input-group-btn\"><button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> 查询</button> </span>\r\n    </div>\r\n  </form>\r\n</div>";
  });
templates["game/list/templates/table"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    <tr>\r\n      <td class=\"project-people\"><img class=\"img-rounded\" alt=\"image\" src=\"";
  if (helper = helpers.logoUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.logoUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n      <td class=\"project-title\">\r\n        ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n        ";
  stack1 = (helper = helpers.eachForStr || (depth0 && depth0.eachForStr),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.tags), options) : helperMissing.call(depth0, "eachForStr", (depth0 && depth0.tags), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        <br>\r\n        <small>";
  if (helper = helpers.summarize) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.summarize); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</small>\r\n      </td>\r\n      <td class=\"w50 text-center\">";
  stack1 = self.invokePartial(partials['game/list/templates/_status'], 'game/list/templates/_status', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\r\n      <td class=\"w100 text-right\">\r\n        <div class=\"btn-group\">\r\n          <button name=\"editBtn\" class=\"btn-white btn btn-xs m-n\" data-href=\"/game/edit?id=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">编辑</button>\r\n          <button name=\"viewBtn\" class=\"btn-info btn btn-xs m-n\" data-href=\"/game/detail/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">查看</button>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  buffer += "<small class=\"label label-primary m-r-xs\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</small>";
  return buffer;
  }

  buffer += "<table class=\"table table-hover va-middle\" data-pages=\"";
  if (helper = helpers.pages) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pages); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-page-num=\"";
  if (helper = helpers.pageNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-page-size=\"";
  if (helper = helpers.pageSize) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageSize); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n  <tbody>\r\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  ";
  stack1 = self.invokePartial(partials['templates/_table-empty'], 'templates/_table-empty', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </tbody>\r\n  <tfoot>\r\n  <tr>\r\n    <td colspan=\"999\">\r\n      <div class=\"pull-right\"><ul class=\"pagination\"></ul></div>\r\n    </td>\r\n  </tr>\r\n  </tfoot>\r\n</table>";
  return buffer;
  });
templates["game/recommendList/templates/table-empty"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<table class=\"table table-hover va-middle m-b-none\">\r\n  <tbody>\r\n  <tr class=\"table-no-data\">\r\n    <td colspan=\"999\" class=\"text-muted text-center\">查询不到数据</td>\r\n  </tr>\r\n  </tbody>\r\n</table>";
  });
templates["game/recommendList/templates/table"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    <tr data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n      <td class=\"d-flex\">\r\n        <img class=\"img-rounded img-sm m-r-sm m-l-sm\" alt=\"image\" src=\"";
  if (helper = helpers.logoUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.logoUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n        <div>\r\n          ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n          ";
  stack1 = (helper = helpers.eachForStr || (depth0 && depth0.eachForStr),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.tags), options) : helperMissing.call(depth0, "eachForStr", (depth0 && depth0.tags), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n          <br>\r\n          <small>";
  if (helper = helpers.summarize) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.summarize); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</small>\r\n        </div>\r\n      </td>\r\n      <td class=\"w50 text-center\">";
  stack1 = self.invokePartial(partials['game/list/templates/_status'], 'game/list/templates/_status', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\r\n      <td class=\"w100 text-right\">\r\n        <div class=\"btn-group m-r-sm\">\r\n          <button name=\"editBtn\" class=\"btn-warning btn btn-xs m-n\" type=\"button\" data-action=\"cancelRecommend\">取消</button>\r\n          <button name=\"viewBtn\" class=\"btn-info btn btn-xs m-n\" type=\"button\" data-href=\"/game/detail/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">查看</button>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  buffer += "<small class=\"label label-primary m-r-xs\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</small>";
  return buffer;
  }

  buffer += "<table class=\"table table-hover va-middle m-b-none\" data-pages=\"";
  if (helper = helpers.pages) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pages); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-page-num=\"";
  if (helper = helpers.pageNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-page-size=\"";
  if (helper = helpers.pageSize) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageSize); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n  <tbody>\r\n  ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  ";
  stack1 = self.invokePartial(partials['templates/_table-empty'], 'templates/_table-empty', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </tbody>\r\n</table>";
  return buffer;
  });
Handlebars.registerPartial("gameCompany/list/templates/_table-tr", template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<tr data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-json=\""
    + escapeExpression((helper = helpers.json || (depth0 && depth0.json),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "json", depth0, options)))
    + "\">\r\n  <td class=\"w50 text-center\">";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n  <td class=\"w50 text-center\"><img class=\"img-sm img-rounded\" src=\"";
  if (helper = helpers.logoUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.logoUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\"></td>\r\n  <td class=\"col-xs-3\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n  <td class=\"col-xs-3\">";
  if (helper = helpers.website) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.website); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n  <td class=\"col-xs-3\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n  <td class=\"w100 text-center\">\r\n    <div class=\"btn-group\">\r\n      <button class=\"btn btn-danger  btn-xs m-n\" type=\"button\" data-action=\"delete\">删除</button>\r\n      <button class=\"btn btn-primary btn-xs m-n\" type=\"button\" data-action=\"edit\">编辑</button>\r\n    </div>\r\n  </td>\r\n</tr>";
  return buffer;
  }));
templates["gameCompany/list/templates/modal"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "修改";
  }

function program3(depth0,data) {
  
  
  return "新增";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                  <img class=\"img-lg img-rounded\" src=\"";
  if (helper = helpers.logoUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.logoUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\r\n                ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\r\n                  <i class=\"fa fa-cloud-upload big-icon\" style=\"font-size:96px !important;\"></i>\r\n                ";
  }

  buffer += "<div id=\"editModal\" class=\"modal inmodal fade\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "厂商</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form class=\"form-horizontal row\">\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">LOGO:</label>\r\n            <div class=\"col-sm-10\">\r\n              <a data-toggle=\"customized\" data-type=\"imageUpload\" data-max-files=\"1\">\r\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.logoUrl), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <input type=\"hidden\" name=\"logo\" value=\"";
  if (helper = helpers.logo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.logo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">公司名称:</label>\r\n            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" name=\"name\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">官网地址:</label>\r\n            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" name=\"website\" value=\"";
  if (helper = helpers.website) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.website); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">公司简介:</label>\r\n            <div class=\"col-sm-10\"><textarea type=\"text\" class=\"form-control\" name=\"description\" rows=\"3\" style=\"resize:vertical;\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea></div>\r\n          </div>\r\n          <input type=\"hidden\" name=\"id\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">取消</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-action=\"save\">保存修改</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
  return buffer;
  });
templates["gameCompany/list/templates/search"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row m-b-sm m-t-sm\" id=\"tableSearchBar\">\r\n  <div class=\"col-md-1\">\r\n    <button type=\"button\" data-root=\"tableview\" data-role=\"refresh\" class=\"btn btn-white\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n  </div>\r\n  <form class=\"col-md-11\" onsubmit=\"return false;\" data-root=\"tableview\" data-role=\"search\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-root=\"tableview\" data-role=\"searchParam\" name=\"name\">\r\n      <span class=\"input-group-btn\"><button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> 查询</button> </span>\r\n    </div>\r\n  </form>\r\n</div>";
  });
templates["gameCompany/list/templates/table"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    ";
  stack1 = self.invokePartial(partials['gameCompany/list/templates/_table-tr'], 'gameCompany/list/templates/_table-tr', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  ";
  return buffer;
  }

  buffer += "<table id=\"companyTable\" class=\"table table-bordered table-hover va-middle\" data-pages=\"";
  if (helper = helpers.pages) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pages); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-page-num=\"";
  if (helper = helpers.pageNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-page-size=\"";
  if (helper = helpers.pageSize) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageSize); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n  <thead>\r\n  <tr>\r\n    <th class=\"w50 text-center\">ID</th>\r\n    <th class=\"w50 text-center\">LOGO</th>\r\n    <th class=\"col-xs-4\">公司名称</th>\r\n    <th class=\"col-xs-4\">官网地址</th>\r\n    <th class=\"col-xs-4\">公司简介</th>\r\n    <th class=\"w100 text-center\">操作</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </tbody>\r\n  <tfoot>\r\n  <tr>\r\n    <td colspan=\"999\">\r\n      <div class=\"pull-right\"><ul class=\"pagination\"></ul></div>\r\n    </td>\r\n  </tr>\r\n  </tfoot>\r\n</table>";
  return buffer;
  });
Handlebars.registerPartial("goods/config/templates/_category-table-tr", template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "disabled";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.rootCategory), {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      ";
  return buffer;
  }
function program4(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n          <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers.eq || (depth1 && depth1.eq),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth1 && depth1.parentCid), (depth0 && depth0.id), options) : helperMissing.call(depth0, "eq", (depth1 && depth1.parentCid), (depth0 && depth0.id), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\r\n        ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "selected";
  }

function program7(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n        ";
  stack1 = helpers.each.call(depth0, (depth1 && depth1.rootCategory), {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      ";
  return buffer;
  }

function program9(depth0,data) {
  
  
  return "checked";
  }

function program11(depth0,data) {
  
  
  return "\r\n        <button class=\"btn btn-danger btn-xs\" type=\"button\" data-action=\"delete\">删除</button>\r\n      ";
  }

function program13(depth0,data) {
  
  
  return "\r\n        <button class=\"btn btn-white btn-xs\" type=\"button\" data-action=\"remove\">移除</button>\r\n      ";
  }

  buffer += "<tr>\r\n  <td class=\"w50 text-center\">";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<input type=\"hidden\" name=\"id\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n  <td>\r\n    <select class=\"form-control\" name=\"parentCid\" data-toggle=\"select2\" data-minimum-results-for-search=\"Infinity\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.rootCategory), {hash:{},inverse:self.programWithDepth(7, program7, data, depth0),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </select>\r\n  </td>\r\n  <td><input type=\"text\" class=\"form-control\" name=\"name\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n  <td class=\"w100 text-center\">\r\n    <div class=\"switch d-inline-block va-middle\">\r\n      <div class=\"onoffswitch\">\r\n        <label class=\"onoffswitch-label\">\r\n          <input type=\"checkbox\"  class=\"onoffswitch-checkbox\" name=\"enable\" value=\"Y\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.enable), "Y", options) : helperMissing.call(depth0, "is", (depth0 && depth0.enable), "Y", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n          <span class=\"onoffswitch-inner\"></span>\r\n          <span class=\"onoffswitch-switch\"></span>\r\n        </label>\r\n      </div>\r\n    </div>\r\n  </td>\r\n  <td  class=\"w100 text-center\">\r\n    <div class=\"btn-group\">\r\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      <button class=\"btn btn-primary btn-xs\" type=\"button\" data-action=\"save\">保存</button>\r\n    </div>\r\n  </td>\r\n</tr>";
  return buffer;
  }));
templates["goods/config/templates/tab-1"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            ";
  stack1 = self.invokePartial(partials['goods/config/templates/_category-table-tr'], 'goods/config/templates/_category-table-tr', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n          ";
  return buffer;
  }

  buffer += "<div id=\"tab-1\" class=\"tab-pane active\">\r\n  <form class=\"panel-body\">\r\n    <div class=\"table-responsive\">\r\n      <table id=\"categoryTable\" class=\"table table-bordered table-stripped va-middle\" data-root-category=\""
    + escapeExpression((helper = helpers.json || (depth0 && depth0.json),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.rootCategory), options) : helperMissing.call(depth0, "json", (depth0 && depth0.rootCategory), options)))
    + "\">\r\n        <thead>\r\n        <tr>\r\n          <th class=\"w50 text-center\">ID</th>\r\n          <th>父级类目</th>\r\n          <th>类目名称</th>\r\n          <th class=\"w100 text-center\">状态</th>\r\n          <th class=\"w100 text-center\">操作</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.leafCategory), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"hr-line-dashed\"></div>\r\n    <div class=\"form-group text-right\">\r\n      <button class=\"btn btn-primary pull-left\" type=\"button\" data-action=\"add\"><i class=\"fa fa-plus\"></i> 新增类别</button>\r\n      <button class=\"btn btn-white\" type=\"button\" data-action=\"refresh\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n    </div>\r\n  </form>\r\n</div>";
  return buffer;
  });
templates["goods/config/templates/tab-2"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n          <tr data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            <td class=\"w200\"><img src=\"";
  if (helper = helpers.picturePath) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.picturePath); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-preview\"><input type=\"hidden\" name=\"id\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td><input type=\"text\" class=\"form-control\" disabled value=\"";
  if (helper = helpers.picturePath) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.picturePath); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td><input type=\"text\" class=\"form-control\"name=\"url\" value=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td class=\"w100\"><input type=\"number\" class=\"form-control\" name=\"order\" value=\"";
  if (helper = helpers.orderBy) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.orderBy); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td class=\"w100 text-center\">\r\n              <div class=\"switch d-inline-block va-middle\">\r\n                <div class=\"onoffswitch\">\r\n                  <label class=\"onoffswitch-label\">\r\n                    <input type=\"checkbox\"  class=\"onoffswitch-checkbox\" name=\"enable\" value=\"Y\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.enable), "Y", options) : helperMissing.call(depth0, "is", (depth0 && depth0.enable), "Y", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                    <span class=\"onoffswitch-inner\"></span>\r\n                    <span class=\"onoffswitch-switch\"></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </td>\r\n            <td class=\"w100 text-center\">\r\n              <button class=\"btn btn-danger btn-xs\" type=\"button\" data-action=\"delete\"><i class=\"fa fa-trash\"></i> 删除</button>\r\n            </td>\r\n          </tr>\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked";
  }

  buffer += "<div id=\"tab-2\" class=\"tab-pane\">\r\n  <form class=\"panel-body\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered table-stripped va-middle\">\r\n        <thead>\r\n        <tr>\r\n          <th>预览</th>\r\n          <th>图片URL</th>\r\n          <th>链接</th>\r\n          <th>排序</th>\r\n          <th class=\"w100 text-center\">启用</th>\r\n          <th class=\"w100 text-center\">操作</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.largePics), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"hr-line-dashed\"></div>\r\n    <div class=\"form-group text-right\">\r\n      <div class=\"pull-left\">\r\n        <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"customized\" data-type=\"imageUpload\" data-url=\"/goods/banner/upload\"><i class=\"fa fa-cloud-upload\"></i> 上传图像</button>\r\n        <div class=\"d-inline-block va-bottom m-l-sm text-warning\">请上传统一尺寸的图片！</div>\r\n      </div>\r\n      <button class=\"btn btn-white\" type=\"button\" data-action=\"refresh\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n      <button class=\"btn btn-primary\" type=\"button\" data-action=\"submit\">保存修改</button>\r\n    </div>\r\n    <input type=\"hidden\" name=\"type\" value=\"home_web_large\">\r\n  </form>\r\n</div>";
  return buffer;
  });
Handlebars.registerPartial("goods/edit/templates/_sku-table-td-setting", template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td data-pname=\"";
  if (helper = helpers.pname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n  <div class=\"input-group input-group-sm full-width\">\r\n    <input type=\"text\" class=\"form-control\" data-toggle=\"customized\" data-type=\"typeahead\" data-lov-type=\"SKU_PROPERTY_VALUES\" data-prop=\"";
  if (helper = helpers.pname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n    <span class=\"input-group-btn\">\r\n      <button class=\"btn btn-warning\" type=\"button\" data-action=\"setColumnCells\">设置</button>\r\n    </span>\r\n  </div>\r\n</td>";
  return buffer;
  }));
Handlebars.registerPartial("goods/edit/templates/_sku-table-td", template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td data-pname=\"";
  if (helper = helpers.pname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><input type=\"text\" class=\"form-control input-sm\" name=\"pvalue\" value=\"";
  if (helper = helpers.pvalue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pvalue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"customized\" data-type=\"typeahead\" data-lov-type=\"SKU_PROPERTY_VALUES\" data-prop=\"";
  if (helper = helpers.pname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>";
  return buffer;
  }));
Handlebars.registerPartial("goods/edit/templates/_sku-table-th", template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<th data-pname=\"";
  if (helper = helpers.pname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.pname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <a class=\"fa fa-minus-square-o pull-right text-warning\" data-action=\"deleteColumn\"></a></th>";
  return buffer;
  }));
Handlebars.registerPartial("goods/edit/templates/_sku-table-tr-setting", template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.propsName), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  ";
  return buffer;
  }
function program3(depth0,data) {
  
  var stack1;
  stack1 = self.invokePartial(partials['goods/edit/templates/_sku-table-td-setting'], 'goods/edit/templates/_sku-table-td-setting', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

  buffer += "<tr data-sku-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n  <td class=\"w50 text-center\">\r\n    <a href=\"javascript:void(0)\" data-action=\"checkAllRows\">全选</a>\r\n  </td>\r\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.skus), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  <td>\r\n    <div class=\"input-group input-group-sm full-width\">\r\n      <input type=\"number\" class=\"form-control\">\r\n      <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-warning\" type=\"button\" data-action=\"setColumnCells\">设置</button>\r\n      </span>\r\n    </div>\r\n  </td>\r\n  <td>\r\n    <div class=\"input-group input-group-sm full-width\">\r\n      <input type=\"number\" class=\"form-control\">\r\n      <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-warning\" type=\"button\" data-action=\"setColumnCells\">设置</button>\r\n      </span>\r\n    </div>\r\n  </td>\r\n  <td class=\"w200\" colspan=\"2\">\r\n      <button class=\"btn btn-warning btn-sm full-width\" type=\"button\" data-action=\"setCells\">设置全部</button>\r\n  </td>\r\n</tr>";
  return buffer;
  }));
Handlebars.registerPartial("goods/edit/templates/_sku-table-tr", template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "style=\"display: none;\"";
  }

function program3(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program5(depth0,data) {
  
  var stack1;
  stack1 = self.invokePartial(partials['goods/edit/templates/_sku-table-td'], 'goods/edit/templates/_sku-table-td', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program7(depth0,data) {
  
  
  return "checked";
  }

function program9(depth0,data) {
  
  
  return "\r\n        <button class=\"btn btn-danger btn-xs\" type=\"button\" data-action=\"deleteSku\">删除</button>\r\n      ";
  }

function program11(depth0,data) {
  
  
  return "\r\n        <button class=\"btn btn-white btn-xs\" type=\"button\" data-action=\"removeRow\">移除</button>\r\n      ";
  }

  buffer += "<tr data-sku-id=\"";
  if (helper = helpers.skuId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.skuId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-setting=\"";
  if (helper = helpers.setting) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.setting); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n  <td class=\"w50 text-center\">\r\n    <input type=\"hidden\" name=\"id\" value=\"";
  if (helper = helpers.skuId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.skuId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n    <span ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.setting), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.skuId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.skuId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n    <div class=\"checkbox checkbox-primary m-none\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.setting), {hash:{},inverse:self.program(1, program1, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n      <input type=\"checkbox\" name=\"checkRow\"><label></label>\r\n    </div>\r\n  </td>\r\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.propsName), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  <td><input type=\"number\" class=\"form-control input-sm\" name=\"salePrice\" value=\"";
  if (helper = helpers.salePrice) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.salePrice); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n  <td><input type=\"number\" class=\"form-control input-sm\" name=\"inventory\" value=\"";
  if (helper = helpers.inventory) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.inventory); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n  <td class=\"w100 text-center\">\r\n    <div class=\"switch d-inline-block va-middle\">\r\n      <div class=\"onoffswitch\">\r\n        <label class=\"onoffswitch-label\">\r\n          <input type=\"checkbox\" class=\"onoffswitch-checkbox\" name=\"enable\" value=\"Y\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.enable), "Y", options) : helperMissing.call(depth0, "is", (depth0 && depth0.enable), "Y", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n          <span class=\"onoffswitch-inner\"></span>\r\n          <span class=\"onoffswitch-switch\"></span>\r\n        </label>\r\n      </div>\r\n    </div>\r\n  </td>\r\n  <td class=\"w100 text-center\">\r\n    <div class=\"btn-group\">\r\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.skuId), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      <button class=\"btn btn-primary btn-xs\" type=\"button\" data-action=\"saveSku\">保存</button>\r\n    </div>\r\n  </td>\r\n</tr>";
  return buffer;
  }));
Handlebars.registerPartial("goods/edit/templates/_sku-table", template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.propsName), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var stack1;
  stack1 = self.invokePartial(partials['goods/edit/templates/_sku-table-th'], 'goods/edit/templates/_sku-table-th', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    ";
  stack1 = self.invokePartial(partials['goods/edit/templates/_sku-table-tr'], 'goods/edit/templates/_sku-table-tr', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  ";
  return buffer;
  }

  buffer += "<table id=\"skuTable\" class=\"table table-bordered va-middle\">\r\n  <thead>\r\n\r\n  <tr>\r\n    <th class=\"w50 text-center\">ID</th>\r\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.skus), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    <th>售价</th>\r\n    <th>库存</th>\r\n    <th class=\"w100 text-center\">状态</th>\r\n    <th class=\"w100 text-center\">操作</th>\r\n  </tr>\r\n\r\n  </thead>\r\n  <tbody>\r\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.skus), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </tbody>\r\n  <tfoot class=\"d-none\">\r\n    ";
  stack1 = self.invokePartial(partials['goods/edit/templates/_sku-table-tr-setting'], 'goods/edit/templates/_sku-table-tr-setting', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </tfoot>\r\n</table>";
  return buffer;
  }));
templates["goods/edit/templates/tab-1"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n              <img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.thumbnail)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"img-lg img-rounded\">\r\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\r\n              <i class=\"fa fa-cloud-upload big-icon\"></i>\r\n            ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                  <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers.eq || (depth0 && depth0.eq),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.id), ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.cid), options) : helperMissing.call(depth0, "eq", (depth0 && depth0.id), ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.cid), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\r\n                ";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "selected";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        <div class=\"pull-left\">\r\n          ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "onsale", options) : helperMissing.call(depth0, "is", ((stack1 = ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "onsale", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n          <button class=\"btn btn-info btn-outline\" type=\"button\" data-href=\"/goods/detail/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><i class=\"fa fa-eye\"></i> 查看</button>\r\n        </div>\r\n      ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <button class=\"btn btn-danger\" type=\"button\" data-action=\"offSale\" data-status=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.status)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><i class=\"fa fa-power-off\"></i> 下架</button>\r\n          ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <button class=\"btn btn-warning\" type=\"button\" data-action=\"onSale\" data-status=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.status)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><i class=\"fa fa-power-off\"></i> 上架</button>\r\n          ";
  return buffer;
  }

  buffer += "<div id=\"tab-1\" class=\"tab-pane active\">\r\n  <form class=\"panel-body\" onsubmit=\"return false;\">\r\n    <div class=\"row d-flex\">\r\n      <div class=\"col-xs-1 w200\">\r\n        <h4>商品图标:</h4>\r\n        <p class=\"text-center\">\r\n          <a data-toggle=\"customized\" data-type=\"imageUpload\" data-max-files=\"1\">\r\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.thumbnailId), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            <label class=\"d-block m-t-sm\">上传图片</label>\r\n            <input type=\"hidden\" name=\"thumbnailId\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.thumbnailId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n          </a>\r\n        </p>\r\n      </div>\r\n      <div class=\"col-xs-12\">\r\n        <fieldset class=\"form-horizontal\">\r\n          <div class=\"form-group\"><label class=\"col-sm-2 control-label\">商品名称:</label>\r\n            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" placeholder=\"输入商品名称\" name=\"title\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div>\r\n          </div>\r\n          <div class=\"form-group\"><label class=\"col-sm-2 control-label\">商品分类:</label>\r\n            <div class=\"col-sm-10\">\r\n              <select class=\"form-control\" name=\"cid\" data-toggle=\"select2\">\r\n                <option value=\"\">请选择分类</option>\r\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.categorys), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\"><label class=\"col-sm-2 control-label\">商品编码:</label>\r\n            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" placeholder=\"输入商品编码\" name=\"goodsNo\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.goodsNo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div>\r\n          </div>\r\n\r\n          <div class=\"form-group\"><label class=\"col-sm-2 control-label\">标签:</label>\r\n            <div class=\"col-sm-10\">\r\n              <input class=\"form-control tagsinput\" type=\"text\" name=\"tags\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.tags)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-toggle=\"tagsinput\">\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n      </div>\r\n    </div>\r\n    <div class=\"hr-line-dashed\"></div>\r\n    <div class=\"form-group text-right\">\r\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      <button class=\"btn btn-white\" type=\"button\" data-action=\"refresh\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n      <button class=\"btn btn-primary\" type=\"button\" data-action=\"submit\">保存修改</button>\r\n    </div>\r\n    <input type=\"hidden\" name=\"id\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n  </form>\r\n</div>";
  return buffer;
  });
templates["goods/edit/templates/tab-2"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"tab-2\" class=\"tab-pane\">\r\n  <form class=\"panel-body\" onsubmit=\"return false;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <input id=\"content\" type=\"hidden\" name=\"content\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.content)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n        <div class=\"summernote\" data-toggle=\"summernote\" data-min-height=\"224\" data-save-target=\"#content\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.content)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"hr-line-dashed\"></div>\r\n    <div class=\"form-group text-right\">\r\n      <button class=\"btn btn-white\" type=\"button\" data-action=\"refresh\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n      <button class=\"btn btn-primary\" type=\"button\" data-action=\"submit\">保存修改</button>\r\n    </div>\r\n    <input type=\"hidden\" name=\"id\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n  </form>\r\n</div>";
  return buffer;
  });
templates["goods/edit/templates/tab-3"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n          <tr data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            <td class=\"w200\"><img src=\"";
  if (helper = helpers.picUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.picUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-preview\"></td>\r\n            <td><input type=\"text\" class=\"form-control\" disabled value=\"";
  if (helper = helpers.picUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.picUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td class=\"w100\"><input type=\"text\" class=\"form-control\" name=\"order\" value=\"";
  if (helper = helpers.orderBy) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.orderBy); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><input type=\"hidden\" name=\"id\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\r\n            <td class=\"w100 text-center\">\r\n              <div class=\"switch d-inline-block va-middle\">\r\n                <div class=\"onoffswitch\">\r\n                  <label class=\"onoffswitch-label\">\r\n                    <input type=\"checkbox\"  class=\"onoffswitch-checkbox\" name=\"enable\" value=\"Y\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.enable), "Y", options) : helperMissing.call(depth0, "is", (depth0 && depth0.enable), "Y", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                    <span class=\"onoffswitch-inner\"></span>\r\n                    <span class=\"onoffswitch-switch\"></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </td>\r\n            <td class=\"w100 text-center\">\r\n              <button class=\"btn btn-white btn-xs\" type=\"button\" data-action=\"imageDelete\"><i class=\"fa fa-trash\"></i> 删除</button>\r\n            </td>\r\n          </tr>\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked";
  }

  buffer += "<div id=\"tab-3\" class=\"tab-pane\">\r\n  <form class=\"panel-body\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered table-stripped va-middle\">\r\n        <thead>\r\n        <tr>\r\n          <th>预览</th>\r\n          <th>URL</th>\r\n          <th class=\"w100\">排序</th>\r\n          <th class=\"w100 text-center\">轮播？</th>\r\n          <th class=\"w100 text-center\">操作</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.imagesUrl), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"hr-line-dashed\"></div>\r\n    <div class=\"form-group text-right\">\r\n      <button class=\"btn btn-primary pull-left\" type=\"button\" data-toggle=\"customized\" data-type=\"imageUpload\" data-url=\"/goods/upload\" data-params='{\"goodsId\":\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"}'><i class=\"fa fa-cloud-upload\"></i> 上传图像</button>\r\n      <button class=\"btn btn-white\" type=\"button\" data-action=\"refresh\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n      <button class=\"btn btn-primary\" type=\"submit\" data-action=\"button\">保存修改</button>\r\n    </div>\r\n    <input type=\"hidden\" name=\"goodsId\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n  </form>\r\n</div>";
  return buffer;
  });
templates["goods/edit/templates/tab-4"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"tab-4\" class=\"tab-pane\">\r\n  <form class=\"panel-body\" onsubmit=\"return false;\">\r\n\r\n    <fieldset class=\"form-horizontal\">\r\n      <div class=\"form-group m-b-none\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control tagsinput\" data-toggle=\"customized\" data-type=\"tagsinput\" data-lov-type=\"SKU_PROPERTYS\">\r\n            <div class=\"input-group-btn va-bottom\">\r\n              <button tabindex=\"-1\" class=\"btn btn-primary va-bottom\" type=\"button\" data-action=\"addColumns\">添加规格参数</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n\r\n    <div class=\"hr-line-dashed\"></div>\r\n\r\n    ";
  stack1 = self.invokePartial(partials['goods/edit/templates/_sku-table'], 'goods/edit/templates/_sku-table', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n    <div class=\"hr-line-dashed\"></div>\r\n\r\n    <div class=\"form-group text-right\">\r\n      <div class=\"pull-left\">\r\n        <button class=\"btn btn-primary\" type=\"button\" data-action=\"addRow\"><i class=\"fa fa-plus\"></i> 添加行</button>\r\n        <button class=\"btn btn-warning\" type=\"button\" data-action=\"toggleSettingRow\"><i class=\"fa fa-gear\"></i> 批量设置</button>\r\n      </div>\r\n      <button class=\"btn btn-white\" type=\"button\" data-action=\"refresh\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n      <button class=\"btn btn-primary\" type=\"button\" data-action=\"submit\">批量保存</button>\r\n    </div>\r\n    <input type=\"hidden\" name=\"goodsId\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n  </form>\r\n</div>";
  return buffer;
  });
Handlebars.registerPartial("goods/list/templates/_status", template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <span class=\"label label-primary\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.disName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "instock", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "instock", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <span class=\"label label-warning\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.disName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <span class=\"label label-default\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.disName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n";
  return buffer;
  }

  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "onsale", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "onsale", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }));
templates["goods/list/templates/search"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n          <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers.eq || (depth0 && depth0.eq),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.id), ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.cid), options) : helperMissing.call(depth0, "eq", (depth0 && depth0.id), ((stack1 = (depth0 && depth0.goods)),stack1 == null || stack1 === false ? stack1 : stack1.cid), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "selected";
  }

  buffer += "<div class=\"row m-b-sm m-t-sm\" id=\"tableSearchBar\">\r\n  <div class=\"col-md-1\">\r\n    <button type=\"button\" data-root=\"tableview\" data-role=\"refresh\" class=\"btn btn-white\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n  </div>\r\n  <form class=\"col-md-11\" onsubmit=\"return false;\" data-root=\"tableview\" data-role=\"search\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon bg-muted\">分类</span>\r\n      <select class=\"form-control\" placeholder=\"Search\" data-root=\"tableview\" data-role=\"searchParam\" name=\"cid\">\r\n        <option value=\"\"></option>\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.categorys), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      </select>\r\n      <span class=\"input-group-addon bg-muted\">名称</span>\r\n      <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-root=\"tableview\" data-role=\"searchParam\" name=\"title\">\r\n      <span class=\"input-group-btn\"><button type=\"submit\" class=\"btn btn-primary m-b-none\"><i class=\"fa fa-search\"></i> 查询</button></span>\r\n    </div>\r\n  </form>\r\n</div>";
  return buffer;
  });
templates["goods/list/templates/table"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    <tr>\r\n      <td class=\"project-title\">";
  if (helper = helpers.goodsNo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.goodsNo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n      <td class=\"\">";
  if (helper = helpers.cname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n      \r\n      <td class=\"project-title\"><img class=\"img-sm img-rounded m-r-sm\" alt=\"image\" src=\"";
  if (helper = helpers.thumbnail) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.thumbnail); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n      <td class=\"\">";
  if (helper = helpers.saleAmount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.saleAmount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n      <td>"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.onSaleTime), "yyyy-MM-dd HH:mm:ss", options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.onSaleTime), "yyyy-MM-dd HH:mm:ss", options)))
    + "</td>\r\n      <td>"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.saleOutTime), "yyyy-MM-dd HH:mm:ss", options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.saleOutTime), "yyyy-MM-dd HH:mm:ss", options)))
    + "</td>\r\n      <td class=\"w50 text-center\">";
  stack1 = self.invokePartial(partials['goods/list/templates/_status'], 'goods/list/templates/_status', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\r\n      <td class=\"w100 text-right\">\r\n        <div class=\"btn-group\">\r\n          <button name=\"editBtn\" class=\"btn-white btn btn-xs m-n\" data-href=\"/goods/edit?id=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">编辑</button>\r\n          <button name=\"viewBtn\" class=\"btn-info btn btn-xs m-n\" data-href=\"/goods/detail/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">查看</button>\r\n        </div>\r\n      </td>\r\n      \r\n    </tr>\r\n  ";
  return buffer;
  }

  buffer += "<table class=\"table table-hover va-middle\" data-pages=\"";
  if (helper = helpers.pages) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pages); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-page-num=\"";
  if (helper = helpers.pageNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-page-size=\"";
  if (helper = helpers.pageSize) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageSize); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n  <thead>\r\n  <tr>\r\n    <th>编码</th>\r\n    <th>类目</th>\r\n    <th>名称</th>\r\n    <th>销量</th>\r\n    <th>上架时间</th>\r\n    <th>下架时间</th>\r\n    <th class=\"w50 text-center\">状态</th>\r\n    <th class=\"w100 text-right\">操作</th>\r\n    \r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  ";
  stack1 = self.invokePartial(partials['templates/_table-empty'], 'templates/_table-empty', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </tbody>\r\n  <tfoot>\r\n  <tr>\r\n    <td colspan=\"999\">\r\n      <div class=\"pull-right\"><ul class=\"pagination\"></ul></div>\r\n    </td>\r\n  </tr>\r\n  </tfoot>\r\n</table>";
  return buffer;
  });
Handlebars.registerPartial("order/list/templates/_products", template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n  <div class=\"widget gray-bg \">\r\n    <img src=\"";
  if (helper = helpers.goodsImage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.goodsImage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-md pull-left m-r-md\">\r\n    <p class=\"text-truncate\"><a href=\"/goods/detail/";
  if (helper = helpers.goodsId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.goodsId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.goodsTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.goodsTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></p>\r\n    <p class=\"m-b-none m-t-md clearfix\">\r\n      <span class=\"m-t-xs\">";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.propsName), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n      <big class=\"font-bold pull-right\"><span>单价：￥";
  if (helper = helpers.goodsPrice) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.goodsPrice); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span><span class=\"m-l-lg\">数量：";
  if (helper = helpers.count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></big>\r\n    </p>\r\n  </div>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<span class=\"m-r-sm\">";
  if (helper = helpers.pname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "：";
  if (helper = helpers.pvalue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pvalue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.orderItems), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }));
Handlebars.registerPartial("order/list/templates/_status", template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <span class=\"label label-warning\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.disName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "un_paid", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "un_paid", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "paid", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "paid", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <span class=\"label label-danger\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.disName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "shipped", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "shipped", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <span class=\"label label-primary\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.disName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "complete", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "complete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <span class=\"label label-primary\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.disName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "cancel", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <span class=\"label label-inverse\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.disName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <span class=\"label label-default\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.disName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n";
  return buffer;
  }

  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "create", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "create", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }));
templates["order/list/templates/search"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row m-b-sm m-t-sm\" id=\"tableSearchBar\">\r\n  <div class=\"col-md-1\">\r\n    <button type=\"button\" data-root=\"tableview\" data-role=\"refresh\" class=\"btn btn-white\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n  </div>\r\n  <form class=\"col-md-11\" onsubmit=\"return false;\" data-root=\"tableview\" data-role=\"search\">\r\n    <div class=\"input-group\">\r\n      <div class=\"input-group-btn\">\r\n        <button data-toggle=\"dropdown\" class=\"btn btn-white m-b-none dropdown-toggle\" type=\"button\" data-root=\"tableview\" data-role=\"searchParam\" data-name=\"status\" data-value=\"\"><span>状态</span> <span class=\"caret\"></span></button>\r\n        <ul class=\"dropdown-menu\">\r\n          <li><a data-value=\"un_paid\">待支付</a></li>\r\n          <li><a data-value=\"paid\">已支付</a></li>\r\n          <li><a data-value=\"shipped\">已发货</a></li>\r\n          <li><a data-value=\"complete\">完成</a></li>\r\n          <li class=\"divider\"></li>\r\n          <li><a data-value=\"\">全部订单</a></li>\r\n        </ul>\r\n      </div>\r\n      <span class=\"input-group-addon bg-muted\">编码</span>\r\n      <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-root=\"tableview\" data-role=\"searchParam\" name=\"orderNumber\">\r\n      <span class=\"input-group-addon bg-muted\">名称</span>\r\n      <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-root=\"tableview\" data-role=\"searchParam\" name=\"orderName\">\r\n      <span class=\"input-group-btn\"><button type=\"submit\" class=\"btn btn-primary m-b-none\"><i class=\"fa fa-search\"></i> 查询</button></span>\r\n    </div>\r\n  </form>\r\n</div>";
  });
templates["order/list/templates/table"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    <tr data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n      <td class=\"w50 text-center\">";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n      <td>";
  if (helper = helpers.orderNumber) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.orderNumber); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n      <td class=\"p-r-none\">\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.orderItems), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      </td>\r\n      <td>";
  if (helper = helpers.orderName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.orderName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n      <td>";
  if (helper = helpers.amount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.amount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n      <td>"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.commitDt), "yyyy-MM-dd HH:mm:ss", options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.commitDt), "yyyy-MM-dd HH:mm:ss", options)))
    + "</td>\r\n      <td>";
  if (helper = helpers.phoneNumber) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.phoneNumber); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n      <td class=\"w50 text-center\">";
  stack1 = self.invokePartial(partials['order/list/templates/_status'], 'order/list/templates/_status', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\r\n      <td class=\"w100 text-right\">\r\n        <div class=\"btn-group\">\r\n          <button name=\"viewBtn\" class=\"btn-info btn btn-xs m-n\" data-href=\"/order/detail/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">查看</button>\r\n          \r\n        </div>\r\n      </td>\r\n      <td class=\"d-none\" data-collapse=\"true\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-10\">\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.orderItems), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-4\">买家姓名："
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.userVo)),stack1 == null || stack1 === false ? stack1 : stack1.nickName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\r\n              <div class=\"col-xs-4\">买家电话："
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.userVo)),stack1 == null || stack1 === false ? stack1 : stack1.mobile)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\r\n              <div class=\"col-xs-12\"><hr class=\"m-t-sm m-b-sm\"></div>\r\n              <div class=\"col-xs-4\">创建时间："
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.commitDt), "yyyy-MM-dd HH:mm:ss", options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.commitDt), "yyyy-MM-dd HH:mm:ss", options)))
    + "</div>\r\n              <div class=\"col-xs-4\">支付时间："
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.paidTime), "yyyy-MM-dd HH:mm:ss", options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.paidTime), "yyyy-MM-dd HH:mm:ss", options)))
    + "</div>\r\n              <div class=\"col-xs-4\">交易流水：";
  if (helper = helpers.transactionNumber) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.transactionNumber); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n              <div class=\"col-xs-12\"><hr class=\"m-t-sm m-b-sm\"></div>\r\n              <div class=\"col-xs-4\">收货地址：";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n              <div class=\"col-xs-4\">联 系 人 ：";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n              <div class=\"col-xs-4\">联系电话：";
  if (helper = helpers.phoneNumber) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.phoneNumber); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n              <div class=\"col-xs-12\"><hr class=\"m-t-sm m-b-sm\"></div>\r\n              <div class=\"col-xs-8\">备注：";
  if (helper = helpers.comments) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.comments); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n              <div class=\"col-xs-12\"><hr class=\"m-t-sm m-b-sm\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 && depth0.orderItems), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program3(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n          <img class=\"img-sm img-rounded\" src=\"";
  if (helper = helpers.goodsImage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.goodsImage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\r\n        ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n              ";
  stack1 = self.invokePartial(partials['order/list/templates/_products'], 'order/list/templates/_products', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            ";
  return buffer;
  }

  buffer += "<table class=\"table table-striped va-middle\" data-pages=\"";
  if (helper = helpers.pages) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pages); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-page-num=\"";
  if (helper = helpers.pageNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-page-size=\"";
  if (helper = helpers.pageSize) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageSize); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-total=\"";
  if (helper = helpers.total) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.total); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"customized\" data-type=\"collapseTable\">\r\n  <thead>\r\n  <tr>\r\n    <th class=\"w50 text-center\">ID</th>\r\n    <th>订单号</th>\r\n    <th colspan=\"2\">订单名称</th>\r\n    <th>订单金额</th>\r\n    <th>下单时间</th>\r\n    <th>买家电话</th>\r\n    <th class=\"w50 text-center\">状态</th>\r\n    <th class=\"w100 text-right\">操作</th>\r\n    <th class=\"d-none\" data-collapse=\"true\"></th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  ";
  stack1 = self.invokePartial(partials['templates/_table-empty'], 'templates/_table-empty', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </tbody>\r\n  <tfoot>\r\n  <tr>\r\n    <td colspan=\"999\">\r\n      <div class=\"pull-right\"><ul class=\"pagination\"></ul></div>\r\n    </td>\r\n  </tr>\r\n  </tfoot>\r\n</table>";
  return buffer;
  });
Handlebars.registerPartial("templates/_navbar-notices", template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "  <span class=\"label label-primary\">"
    + escapeExpression((helper = helpers.size || (depth0 && depth0.size),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.topNotices), options) : helperMissing.call(depth0, "size", (depth0 && depth0.topNotices), options)))
    + "</span>";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.topNotices), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      \r\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        <li>\r\n          <a href=\"";
  if (helper = helpers.href) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.href); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            <div>\r\n              ";
  if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n              <span class=\"pull-right text-muted small\">"
    + escapeExpression((helper = helpers.fromNow || (depth0 && depth0.fromNow),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.time), options) : helperMissing.call(depth0, "fromNow", (depth0 && depth0.time), options)))
    + "</span>\r\n            </div>\r\n          </a>\r\n        </li>\r\n        ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.last), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "<li class=\"divider\"></li>";
  }

function program9(depth0,data) {
  
  
  return "\r\n      <li>\r\n        <div class=\"text-center link-block\">\r\n          <a><strong>暂无通知</strong></a>\r\n        </div>\r\n      </li>\r\n    ";
  }

  buffer += "<li class=\"dropdown\" id=\"topNotices\" data-json=\""
    + escapeExpression((helper = helpers.json || (depth0 && depth0.json),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.topNotices), options) : helperMissing.call(depth0, "json", (depth0 && depth0.topNotices), options)))
    + "\">\r\n  <a class=\"dropdown-toggle count-info\" data-toggle=\"dropdown\" href=\"#\">\r\n    <i class=\"fa fa-bell\"></i>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.topNotices), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </a>\r\n\r\n  <ul class=\"dropdown-menu dropdown-alerts\">\r\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.topNotices), {hash:{},inverse:self.program(9, program9, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </ul>\r\n</li>";
  return buffer;
  }));
Handlebars.registerPartial("templates/_table-empty", template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<tr class=\"table-empty\">\r\n  <td colspan=\"999\" class=\"text-muted text-center\">查询不到数据</td>\r\n</tr>";
  }));
templates["templates/config"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"theme-config d-none\">\r\n  <div class=\"theme-config-box\">\r\n    <div class=\"spin-icon\">\r\n      <i class=\"fa fa-cogs fa-spin\"></i>\r\n    </div>\r\n    <div class=\"skin-settings\">\r\n      <div class=\"title\">Configuration <br/>\r\n        <small style=\"text-transform: none;font-weight: 400\">\r\n          Config box designed for demo purpose. All options available via code.\r\n        </small></div>\r\n      <div class=\"setings-item\">\r\n                    <span>\r\n                        Collapse menu\r\n                    </span>\r\n\r\n        <div class=\"switch\">\r\n          <div class=\"onoffswitch\">\r\n            <input type=\"checkbox\" name=\"collapsemenu\" class=\"onoffswitch-checkbox\" id=\"collapsemenu\">\r\n            <label class=\"onoffswitch-label\" for=\"collapsemenu\">\r\n              <span class=\"onoffswitch-inner\"></span>\r\n              <span class=\"onoffswitch-switch\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"setings-item\">\r\n                    <span>\r\n                        Fixed sidebar\r\n                    </span>\r\n\r\n        <div class=\"switch\">\r\n          <div class=\"onoffswitch\">\r\n            <input type=\"checkbox\" name=\"fixedsidebar\" class=\"onoffswitch-checkbox\" id=\"fixedsidebar\">\r\n            <label class=\"onoffswitch-label\" for=\"fixedsidebar\">\r\n              <span class=\"onoffswitch-inner\"></span>\r\n              <span class=\"onoffswitch-switch\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"setings-item\">\r\n                    <span>\r\n                        Top navbar\r\n                    </span>\r\n\r\n        <div class=\"switch\">\r\n          <div class=\"onoffswitch\">\r\n            <input type=\"checkbox\" name=\"fixednavbar\" class=\"onoffswitch-checkbox\" id=\"fixednavbar\">\r\n            <label class=\"onoffswitch-label\" for=\"fixednavbar\">\r\n              <span class=\"onoffswitch-inner\"></span>\r\n              <span class=\"onoffswitch-switch\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"setings-item\">\r\n                    <span>\r\n                        Top navbar v.2\r\n                        <br/>\r\n                        <small>*Primary layout</small>\r\n                    </span>\r\n\r\n        <div class=\"switch\">\r\n          <div class=\"onoffswitch\">\r\n            <input type=\"checkbox\" name=\"fixednavbar2\" class=\"onoffswitch-checkbox\" id=\"fixednavbar2\">\r\n            <label class=\"onoffswitch-label\" for=\"fixednavbar2\">\r\n              <span class=\"onoffswitch-inner\"></span>\r\n              <span class=\"onoffswitch-switch\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"setings-item\">\r\n                    <span>\r\n                        Boxed layout\r\n                    </span>\r\n\r\n        <div class=\"switch\">\r\n          <div class=\"onoffswitch\">\r\n            <input type=\"checkbox\" name=\"boxedlayout\" class=\"onoffswitch-checkbox\" id=\"boxedlayout\">\r\n            <label class=\"onoffswitch-label\" for=\"boxedlayout\">\r\n              <span class=\"onoffswitch-inner\"></span>\r\n              <span class=\"onoffswitch-switch\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"setings-item\">\r\n                    <span>\r\n                        Fixed footer\r\n                    </span>\r\n\r\n        <div class=\"switch\">\r\n          <div class=\"onoffswitch\">\r\n            <input type=\"checkbox\" name=\"fixedfooter\" class=\"onoffswitch-checkbox\" id=\"fixedfooter\">\r\n            <label class=\"onoffswitch-label\" for=\"fixedfooter\">\r\n              <span class=\"onoffswitch-inner\"></span>\r\n              <span class=\"onoffswitch-switch\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"title\">Skins</div>\r\n      <div class=\"setings-item default-skin\">\r\n                    <span class=\"skin-name \">\r\n                         <a href=\"#\" class=\"s-skin-0 text-white\">\r\n                             Default\r\n                         </a>\r\n                    </span>\r\n      </div>\r\n      <div class=\"setings-item navy-blue-skin\">\r\n                    <span class=\"skin-name \">\r\n                        <a href=\"#\" class=\"s-skin-2 text-white\">\r\n                            Navy blue\r\n                        </a>\r\n                    </span>\r\n      </div>\r\n      <div class=\"setings-item blue-skin\">\r\n                    <span class=\"skin-name \">\r\n                        <a href=\"#\" class=\"s-skin-1 text-white\">\r\n                            Blue light\r\n                        </a>\r\n                    </span>\r\n      </div>\r\n      <div class=\"setings-item yellow-skin\">\r\n                    <span class=\"skin-name \">\r\n                        <a href=\"#\" class=\"s-skin-3 text-white\">\r\n                            Yellow/Purple\r\n                        </a>\r\n                    </span>\r\n      </div>\r\n      <div class=\"setings-item ultra-skin\">\r\n                    <span class=\"skin-name \">\r\n                        <a href=\"#\" class=\"s-md-skin text-white\">\r\n                            Material Design\r\n                        </a>\r\n                    </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
  });
templates["templates/footer"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"footer\" >\r\n  <div class=\"pull-right\">\r\n    <strong>CMS</strong>\r\n  </div>\r\n  <div>\r\n    <strong>Copyright</strong> 异构网络 &copy; 2017\r\n  </div>\r\n</div>\r\n<script>\r\n  if (localStorageSupport) {\r\n    var fixedfooter = localStorage.getItem(\"fixedfooter\");\r\n    if (fixedfooter == 'on') {\r\n      [].forEach.call(document.getElementsByClassName(\"footer\"), function(elem){elem.addClass('fixed');});\r\n    }\r\n  }\r\n</script>";
  });
templates["templates/header"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-lg-10\">\r\n    <h2>游戏管理</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"/index\">首页</a></li>\r\n      <li><a>游戏管理</a></li>\r\n      <li class=\"active\"><strong>游戏列表</strong></li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-lg-2\"></div>\r\n</div>";
  });
templates["templates/localStorage"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<script>\r\n  if (localStorageSupport) {\r\n    var div = document.createElement(\"div\");\r\n    div.innerHTML = \""
    + escapeExpression((helper = helpers.json || (depth0 && depth0.json),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "json", depth0, options)))
    + "\" || \"[]\";\r\n  }\r\n</script>\r\n";
  return buffer;
  });
templates["templates/menu"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\" data-global-user=\""
    + escapeExpression((helper = helpers.json || (depth0 && depth0.json),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.GLOBAL_CURRENT_USER), options) : helperMissing.call(depth0, "json", (depth0 && depth0.GLOBAL_CURRENT_USER), options)))
    + "\">\r\n  <div class=\"sidebar-collapse\">\r\n    <ul class=\"nav metismenu\" id=\"side-menu\">\r\n      <li class=\"nav-header\">\r\n        <div class=\"dropdown profile-element\">\r\n          <span><img alt=\"image\" class=\"img-circle\" src=\""
    + escapeExpression((helper = helpers.nullDefault || (depth0 && depth0.nullDefault),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.GLOBAL_CURRENT_USER)),stack1 == null || stack1 === false ? stack1 : stack1.headImg), "/images/user.png", options) : helperMissing.call(depth0, "nullDefault", ((stack1 = (depth0 && depth0.GLOBAL_CURRENT_USER)),stack1 == null || stack1 === false ? stack1 : stack1.headImg), "/images/user.png", options)))
    + "\" width=\"50\" height=\"50\"></span>\r\n          <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">\r\n            <span class=\"clear\"> <span class=\"block m-t-xs\"> <strong class=\"font-bold\">"
    + escapeExpression((helper = helpers.nullDefault || (depth0 && depth0.nullDefault),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.GLOBAL_CURRENT_USER)),stack1 == null || stack1 === false ? stack1 : stack1.nickName), ((stack1 = (depth0 && depth0.GLOBAL_CURRENT_USER)),stack1 == null || stack1 === false ? stack1 : stack1.name), options) : helperMissing.call(depth0, "nullDefault", ((stack1 = (depth0 && depth0.GLOBAL_CURRENT_USER)),stack1 == null || stack1 === false ? stack1 : stack1.nickName), ((stack1 = (depth0 && depth0.GLOBAL_CURRENT_USER)),stack1 == null || stack1 === false ? stack1 : stack1.name), options)))
    + "</strong>\r\n            </span> <span class=\"text-muted text-xs block\">系统管理员<b class=\"caret\"></b></span> </span>\r\n          </a>\r\n          <ul class=\"dropdown-menu animated fadeInRight m-t-xs\">\r\n            <li><a data-href=\"/user/setting\">修改资料</a></li>\r\n            <li class=\"divider\"></li>\r\n            <li><a data-href=\"/user/logout\">退出</a></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"logo-element\">\r\n          <img src=\"/images/logo@2x.png\" alt=\"YG\" style=\"margin: -1em;width: 2em;height: 2em;\">\r\n        </div>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\"><i class=\"fa fa-gamepad\"></i> <span class=\"nav-label\">游戏管理</span>  <span class=\"fa arrow\"></span></a>\r\n        <ul class=\"nav nav-second-level collapse\">\r\n          <li><a href=\"/game/edit\"><i class=\"fa fa-plus-square\"></i> 新增游戏</a></li>\r\n          <li><a href=\"/game/list\"><i class=\"fa fa-th-list\"></i> 游戏列表</a></li>\r\n          <li><a href=\"/game/recommendList\"><i class=\"fa fa-thumbs-up\"></i> 游戏推荐</a></li>\r\n          <li><a href=\"/gameCompany/list\"><i class=\"fa fa-briefcase\"></i> 游戏厂商</a></li>\r\n          <li><a href=\"/game/config\"><i class=\"fa fa-cogs\"></i> 常用配置</a></li>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\"><i class=\"fa fa-shopping-bag\"></i> <span class=\"nav-label\">商品管理</span>  <span class=\"fa arrow\"></span></a>\r\n        <ul class=\"nav nav-second-level collapse\">\r\n          <li><a href=\"/goods/edit\"><i class=\"fa fa-plus-square\"></i> 新增商品</a></li>\r\n          <li><a href=\"/goods/list\"><i class=\"fa fa-th-list\"></i> 商品列表</a></li>\r\n          <li><a href=\"/goods/config\"><i class=\"fa fa-cogs\"></i> 常用配置</a></li>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\"><i class=\"fa fa-file-text\"></i> <span class=\"nav-label\">订单管理</span>  <span class=\"fa arrow\"></span></a>\r\n        <ul class=\"nav nav-second-level collapse\">\r\n          <li><a href=\"/order/delivery/list\"><i class=\"fa fa-truck\"></i> 待发货 <span class=\"label label-danger pull-right d-none\">0</span></a></li>\r\n          <li><a href=\"/order/list\"><i class=\"fa fa-th-list\"></i> 订单列表</a></li>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\"><i class=\"fa fa-user\"></i> <span class=\"nav-label\">用户管理</span>  <span class=\"fa arrow\"></span></a>\r\n        <ul class=\"nav nav-second-level collapse\">\r\n          <li><a href=\"/user/list\"><i class=\"fa fa-th-list\"></i> 用户列表</a></li>\r\n          \r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <a  href=\"#\"><i class=\"fa fa-gear\"></i> <span class=\"nav-label\">系统配置</span> <span class=\"fa arrow\"></span></a>\r\n        <ul class=\"nav nav-second-level collapse\">\r\n          <li><a href=\"/config/lov\"><i class=\"fa fa-terminal\"></i> 值列表</a></li>\r\n          <li><a href=\"/user/system/list\"><i class=\"fa fa-address-book\"></i> 管理员</a></li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>";
  return buffer;
  });
templates["templates/navbar"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<div class=\"row border-bottom\">\r\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-minimalize minimalize-styl-2 btn btn-primary \" href=\"#\"><i class=\"fa fa-bars\"></i> </a>\r\n      <form role=\"search\" class=\"navbar-form-custom\" action=\"search_results.html\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\">\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <ul class=\"nav navbar-top-links navbar-right\">\r\n      <li>\r\n        <span class=\"m-r-sm welcome-message\">欢迎登录异构CMS系统.</span>\r\n      </li>\r\n      \r\n        \r\n          \r\n        \r\n        \r\n          \r\n            \r\n              \r\n                \r\n              \r\n              \r\n                \r\n                \r\n                \r\n              \r\n            \r\n          \r\n          \r\n          \r\n            \r\n              \r\n                \r\n              \r\n              \r\n                \r\n                \r\n                \r\n              \r\n            \r\n          \r\n          \r\n          \r\n            \r\n              \r\n                \r\n              \r\n              \r\n                \r\n                \r\n                \r\n              \r\n            \r\n          \r\n          \r\n          \r\n            \r\n              \r\n                \r\n              \r\n            \r\n          \r\n        \r\n      \r\n\r\n      ";
  stack1 = self.invokePartial(partials['templates/_navbar-notices'], 'templates/_navbar-notices', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      <li>\r\n        <a href=\"/user/logout\">\r\n          <i class=\"fa fa-sign-out\"></i> 退出\r\n        </a>\r\n      </li>\r\n      \r\n    </ul>\r\n\r\n  </nav>\r\n</div>\r\n<script>\r\n  if (localStorageSupport) {\r\n    var fixednavbar = localStorage.getItem(\"fixednavbar\");\r\n    var fixednavbar2 = localStorage.getItem(\"fixednavbar2\");\r\n    if (fixednavbar == 'on') {\r\n      [].forEach.call(document.getElementsByClassName(\"navbar-static-top\"), function(elem){elem.removeClass('navbar-static-top').addClass('navbar-fixed-top');});\r\n      document.body.addClass('fixed-nav');\r\n    }\r\n    if (fixednavbar2 == 'on') {\r\n      [].forEach.call(document.getElementsByClassName(\"navbar-static-top\"), function(elem){elem.removeClass('navbar-static-top').addClass('navbar-fixed-top');});\r\n      document.body.removeClass('boxed-layout').addClass('fixed-nav').addClass('fixed-nav-basic');\r\n    }\r\n  }\r\n</script>";
  return buffer;
  });
templates["templates/table-loader"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<tbody class=\"table-loader\">\r\n<tr>\r\n  <td>\r\n  <div class=\"sk-spinner sk-spinner-three-bounce\">\r\n    <div class=\"sk-bounce1\"></div>\r\n    <div class=\"sk-bounce2\"></div>\r\n    <div class=\"sk-bounce3\"></div>\r\n  </div>\r\n  </td>\r\n</tr>\r\n</tbody>";
  });
templates["templates/table-search-bar"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row m-b-sm m-t-sm\" id=\"tableSearchBar\">\r\n  <div class=\"col-md-1\">\r\n    <button type=\"button\" data-root=\"tableview\" data-role=\"refresh\" class=\"btn btn-white\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n  </div>\r\n  <form class=\"col-md-11\" onsubmit=\"return false;\" data-root=\"tableview\" data-role=\"search\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-root=\"tableview\" data-role=\"searchParam\" name=\"search\">\r\n      <span class=\"input-group-btn\"><button type=\"submit\" class=\"btn btn-primary\"> 查询</button> </span>\r\n    </div>\r\n  </form>\r\n</div>";
  });
templates["templates/tasks"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"right-sidebar\">\r\n  <div class=\"sidebar-container\">\r\n\r\n    <ul class=\"nav nav-tabs navs-3\">\r\n\r\n      <li class=\"active\"><a data-toggle=\"tab\" href=\"#task-tab-1\">\r\n        Notes\r\n      </a></li>\r\n      <li><a data-toggle=\"tab\" href=\"#task-tab-2\">\r\n        Projects\r\n      </a></li>\r\n      <li class=\"\"><a data-toggle=\"tab\" href=\"#task-tab-3\">\r\n        <i class=\"fa fa-gear\"></i>\r\n      </a></li>\r\n    </ul>\r\n\r\n    <div class=\"tab-content\">\r\n\r\n\r\n      <div id=\"task-tab-1\" class=\"tab-pane active\">\r\n\r\n        <div class=\"sidebar-title\">\r\n          <h3> <i class=\"fa fa-comments-o\"></i> Latest Notes</h3>\r\n          <small><i class=\"fa fa-tim\"></i> You have 10 new message.</small>\r\n        </div>\r\n\r\n        <div>\r\n\r\n          <div class=\"sidebar-message\">\r\n            <a href=\"#\">\r\n              <div class=\"pull-left text-center\">\r\n                <img alt=\"image\" class=\"img-circle message-avatar\" src=\"/images/user.png\">\r\n\r\n                <div class=\"m-t-xs\">\r\n                  <i class=\"fa fa-star text-warning\"></i>\r\n                  <i class=\"fa fa-star text-warning\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"media-body\">\r\n\r\n                There are many variations of passages of Lorem Ipsum available.\r\n                <br>\r\n                <small class=\"text-muted\">Today 4:21 pm</small>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"sidebar-message\">\r\n            <a href=\"#\">\r\n              <div class=\"pull-left text-center\">\r\n                <img alt=\"image\" class=\"img-circle message-avatar\" src=\"/images/user.png\">\r\n              </div>\r\n              <div class=\"media-body\">\r\n                The point of using Lorem Ipsum is that it has a more-or-less normal.\r\n                <br>\r\n                <small class=\"text-muted\">Yesterday 2:45 pm</small>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"sidebar-message\">\r\n            <a href=\"#\">\r\n              <div class=\"pull-left text-center\">\r\n                <img alt=\"image\" class=\"img-circle message-avatar\" src=\"/images/user.png\">\r\n\r\n                <div class=\"m-t-xs\">\r\n                  <i class=\"fa fa-star text-warning\"></i>\r\n                  <i class=\"fa fa-star text-warning\"></i>\r\n                  <i class=\"fa fa-star text-warning\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"media-body\">\r\n                Mevolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\r\n                <br>\r\n                <small class=\"text-muted\">Yesterday 1:10 pm</small>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"sidebar-message\">\r\n            <a href=\"#\">\r\n              <div class=\"pull-left text-center\">\r\n                <img alt=\"image\" class=\"img-circle message-avatar\" src=\"/images/user.png\">\r\n              </div>\r\n\r\n              <div class=\"media-body\">\r\n                Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the\r\n                <br>\r\n                <small class=\"text-muted\">Monday 8:37 pm</small>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"sidebar-message\">\r\n            <a href=\"#\">\r\n              <div class=\"pull-left text-center\">\r\n                <img alt=\"image\" class=\"img-circle message-avatar\" src=\"/images/user.png\">\r\n              </div>\r\n              <div class=\"media-body\">\r\n\r\n                All the Lorem Ipsum generators on the Internet tend to repeat.\r\n                <br>\r\n                <small class=\"text-muted\">Today 4:21 pm</small>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"sidebar-message\">\r\n            <a href=\"#\">\r\n              <div class=\"pull-left text-center\">\r\n                <img alt=\"image\" class=\"img-circle message-avatar\" src=\"/images/user.png\">\r\n              </div>\r\n              <div class=\"media-body\">\r\n                Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\r\n                <br>\r\n                <small class=\"text-muted\">Yesterday 2:45 pm</small>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"sidebar-message\">\r\n            <a href=\"#\">\r\n              <div class=\"pull-left text-center\">\r\n                <img alt=\"image\" class=\"img-circle message-avatar\" src=\"/images/user.png\">\r\n\r\n                <div class=\"m-t-xs\">\r\n                  <i class=\"fa fa-star text-warning\"></i>\r\n                  <i class=\"fa fa-star text-warning\"></i>\r\n                  <i class=\"fa fa-star text-warning\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"media-body\">\r\n                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below.\r\n                <br>\r\n                <small class=\"text-muted\">Yesterday 1:10 pm</small>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"sidebar-message\">\r\n            <a href=\"#\">\r\n              <div class=\"pull-left text-center\">\r\n                <img alt=\"image\" class=\"img-circle message-avatar\" src=\"/images/user.png\">\r\n              </div>\r\n              <div class=\"media-body\">\r\n                Uncover many web sites still in their infancy. Various versions have.\r\n                <br>\r\n                <small class=\"text-muted\">Monday 8:37 pm</small>\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div id=\"task-tab-2\" class=\"tab-pane\">\r\n\r\n        <div class=\"sidebar-title\">\r\n          <h3> <i class=\"fa fa-cube\"></i> Latest projects</h3>\r\n          <small><i class=\"fa fa-tim\"></i> You have 14 projects. 10 not completed.</small>\r\n        </div>\r\n\r\n        <ul class=\"sidebar-list\">\r\n          <li>\r\n            <a href=\"#\">\r\n              <div class=\"small pull-right m-t-xs\">9 hours ago</div>\r\n              <h4>Business valuation</h4>\r\n              It is a long established fact that a reader will be distracted.\r\n\r\n              <div class=\"small\">Completion with: 22%</div>\r\n              <div class=\"progress progress-mini\">\r\n                <div style=\"width: 22%;\" class=\"progress-bar progress-bar-warning\"></div>\r\n              </div>\r\n              <div class=\"small text-muted m-t-xs\">Project end: 4:00 pm - 12.06.2014</div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <div class=\"small pull-right m-t-xs\">9 hours ago</div>\r\n              <h4>Contract with Company </h4>\r\n              Many desktop publishing packages and web page editors.\r\n\r\n              <div class=\"small\">Completion with: 48%</div>\r\n              <div class=\"progress progress-mini\">\r\n                <div style=\"width: 48%;\" class=\"progress-bar\"></div>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <div class=\"small pull-right m-t-xs\">9 hours ago</div>\r\n              <h4>Meeting</h4>\r\n              By the readable content of a page when looking at its layout.\r\n\r\n              <div class=\"small\">Completion with: 14%</div>\r\n              <div class=\"progress progress-mini\">\r\n                <div style=\"width: 14%;\" class=\"progress-bar progress-bar-info\"></div>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <span class=\"label label-primary pull-right\">NEW</span>\r\n              <h4>The generated</h4>\r\n              <!--<div class=\"small pull-right m-t-xs\">9 hours ago</div>-->\r\n              There are many variations of passages of Lorem Ipsum available.\r\n              <div class=\"small\">Completion with: 22%</div>\r\n              <div class=\"small text-muted m-t-xs\">Project end: 4:00 pm - 12.06.2014</div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <div class=\"small pull-right m-t-xs\">9 hours ago</div>\r\n              <h4>Business valuation</h4>\r\n              It is a long established fact that a reader will be distracted.\r\n\r\n              <div class=\"small\">Completion with: 22%</div>\r\n              <div class=\"progress progress-mini\">\r\n                <div style=\"width: 22%;\" class=\"progress-bar progress-bar-warning\"></div>\r\n              </div>\r\n              <div class=\"small text-muted m-t-xs\">Project end: 4:00 pm - 12.06.2014</div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <div class=\"small pull-right m-t-xs\">9 hours ago</div>\r\n              <h4>Contract with Company </h4>\r\n              Many desktop publishing packages and web page editors.\r\n\r\n              <div class=\"small\">Completion with: 48%</div>\r\n              <div class=\"progress progress-mini\">\r\n                <div style=\"width: 48%;\" class=\"progress-bar\"></div>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <div class=\"small pull-right m-t-xs\">9 hours ago</div>\r\n              <h4>Meeting</h4>\r\n              By the readable content of a page when looking at its layout.\r\n\r\n              <div class=\"small\">Completion with: 14%</div>\r\n              <div class=\"progress progress-mini\">\r\n                <div style=\"width: 14%;\" class=\"progress-bar progress-bar-info\"></div>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <span class=\"label label-primary pull-right\">NEW</span>\r\n              <h4>The generated</h4>\r\n              <!--<div class=\"small pull-right m-t-xs\">9 hours ago</div>-->\r\n              There are many variations of passages of Lorem Ipsum available.\r\n              <div class=\"small\">Completion with: 22%</div>\r\n              <div class=\"small text-muted m-t-xs\">Project end: 4:00 pm - 12.06.2014</div>\r\n            </a>\r\n          </li>\r\n\r\n        </ul>\r\n\r\n      </div>\r\n\r\n      <div id=\"task-tab-3\" class=\"tab-pane\">\r\n\r\n        <div class=\"sidebar-title\">\r\n          <h3><i class=\"fa fa-gears\"></i> Settings</h3>\r\n          <small><i class=\"fa fa-tim\"></i> You have 14 projects. 10 not completed.</small>\r\n        </div>\r\n\r\n        <div class=\"setings-item\">\r\n                    <span>\r\n                        Show notifications\r\n                    </span>\r\n          <div class=\"switch\">\r\n            <div class=\"onoffswitch\">\r\n              <input type=\"checkbox\" name=\"collapsemenu\" class=\"onoffswitch-checkbox\" id=\"example\">\r\n              <label class=\"onoffswitch-label\" for=\"example\">\r\n                <span class=\"onoffswitch-inner\"></span>\r\n                <span class=\"onoffswitch-switch\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"setings-item\">\r\n                    <span>\r\n                        Disable Chat\r\n                    </span>\r\n          <div class=\"switch\">\r\n            <div class=\"onoffswitch\">\r\n              <input type=\"checkbox\" name=\"collapsemenu\" checked class=\"onoffswitch-checkbox\" id=\"example2\">\r\n              <label class=\"onoffswitch-label\" for=\"example2\">\r\n                <span class=\"onoffswitch-inner\"></span>\r\n                <span class=\"onoffswitch-switch\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"setings-item\">\r\n                    <span>\r\n                        Enable history\r\n                    </span>\r\n          <div class=\"switch\">\r\n            <div class=\"onoffswitch\">\r\n              <input type=\"checkbox\" name=\"collapsemenu\" class=\"onoffswitch-checkbox\" id=\"example3\">\r\n              <label class=\"onoffswitch-label\" for=\"example3\">\r\n                <span class=\"onoffswitch-inner\"></span>\r\n                <span class=\"onoffswitch-switch\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"setings-item\">\r\n                    <span>\r\n                        Show charts\r\n                    </span>\r\n          <div class=\"switch\">\r\n            <div class=\"onoffswitch\">\r\n              <input type=\"checkbox\" name=\"collapsemenu\" class=\"onoffswitch-checkbox\" id=\"example4\">\r\n              <label class=\"onoffswitch-label\" for=\"example4\">\r\n                <span class=\"onoffswitch-inner\"></span>\r\n                <span class=\"onoffswitch-switch\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"setings-item\">\r\n                    <span>\r\n                        Offline users\r\n                    </span>\r\n          <div class=\"switch\">\r\n            <div class=\"onoffswitch\">\r\n              <input type=\"checkbox\" checked name=\"collapsemenu\" class=\"onoffswitch-checkbox\" id=\"example5\">\r\n              <label class=\"onoffswitch-label\" for=\"example5\">\r\n                <span class=\"onoffswitch-inner\"></span>\r\n                <span class=\"onoffswitch-switch\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"setings-item\">\r\n                    <span>\r\n                        Global search\r\n                    </span>\r\n          <div class=\"switch\">\r\n            <div class=\"onoffswitch\">\r\n              <input type=\"checkbox\" checked name=\"collapsemenu\" class=\"onoffswitch-checkbox\" id=\"example6\">\r\n              <label class=\"onoffswitch-label\" for=\"example6\">\r\n                <span class=\"onoffswitch-inner\"></span>\r\n                <span class=\"onoffswitch-switch\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"setings-item\">\r\n                    <span>\r\n                        Update everyday\r\n                    </span>\r\n          <div class=\"switch\">\r\n            <div class=\"onoffswitch\">\r\n              <input type=\"checkbox\" name=\"collapsemenu\" class=\"onoffswitch-checkbox\" id=\"example7\">\r\n              <label class=\"onoffswitch-label\" for=\"example7\">\r\n                <span class=\"onoffswitch-inner\"></span>\r\n                <span class=\"onoffswitch-switch\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"sidebar-content\">\r\n          <h4>Settings</h4>\r\n          <div class=\"small\">\r\n            I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n            And typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\r\n            Over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n";
  });
templates["templates/welcome"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "Hello word!np";
  });
templates["user/list/templates/search"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row m-b-sm m-t-sm\" id=\"tableSearchBar\">\r\n  <div class=\"col-md-1\">\r\n    <button type=\"button\" data-root=\"tableview\" data-role=\"refresh\" class=\"btn btn-white\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n  </div>\r\n  <form class=\"col-md-11\" onsubmit=\"return false;\" data-root=\"tableview\" data-role=\"search\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon bg-muted\">姓名</span>\r\n      <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-root=\"tableview\" data-role=\"searchParam\" name=\"name\">\r\n      <span class=\"input-group-addon bg-muted\">手机</span>\r\n      <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-root=\"tableview\" data-role=\"searchParam\" name=\"mobile\">\r\n      <span class=\"input-group-btn\"><button type=\"submit\" class=\"btn btn-primary m-b-none\"><i class=\"fa fa-search\"></i> 查询</button></span>\r\n    </div>\r\n  </form>\r\n</div>";
  });
templates["user/list/templates/table"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    <tr data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n      <td class=\"w50 text-center\">";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n      <td class=\"w50 text-right\"><img class=\"img-sm img-circle\" src=\"";
  if (helper = helpers.headImg) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.headImg); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\"></td>\r\n      <td>";
  if (helper = helpers.userName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.userName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n      <td>";
  if (helper = helpers.nickName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.nickName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n      <td>";
  if (helper = helpers.mobile) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mobile); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n      <td>";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n      <td class=\"d-none\" data-collapse=\"true\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n      <td class=\"d-none\" data-collapse=\"true\">";
  if (helper = helpers.idNo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.idNo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n      <td class=\"d-none\" data-collapse=\"true\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.sex)),stack1 == null || stack1 === false ? stack1 : stack1.disName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n      <td class=\"d-none\" data-collapse=\"true\">"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.birthday), "yyyy-MM-dd", options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.birthday), "yyyy-MM-dd", options)))
    + "</td>\r\n      <td class=\"w50 text-center\"> <span class=\"label label-primary\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.disName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></td>\r\n      <td class=\"w100 text-right\">\r\n        <div class=\"\">\r\n        ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "locked", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "locked", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </div>\r\n      </td>\r\n    </tr>\r\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\r\n          <button class=\"btn btn-warning btn-xs\" type=\"button\" data-action=\"unlock\"><i class=\"fa fa-unlock\"></i> 解锁</button>\r\n        ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n          <button class=\"btn btn-warning btn-xs\" type=\"button\" data-action=\"lock\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "valid", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "valid", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><i class=\"fa fa-lock\"></i> 锁定</button>\r\n        ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "disabled";
  }

  buffer += "<table id=\"userTable\" class=\"table table-striped va-middle\" data-pages=\"";
  if (helper = helpers.pages) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pages); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-page-num=\"";
  if (helper = helpers.pageNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-page-size=\"";
  if (helper = helpers.pageSize) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageSize); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"customized\" data-type=\"collapseTable\">\r\n  <thead>\r\n  <tr>\r\n    <th class=\"w50 text-center\">ID</th>\r\n    <th class=\"w50 text-right\"></th>\r\n    <th>用户名</th>\r\n    <th>昵称</th>\r\n    <th>手机</th>\r\n    <th>邮箱</th>\r\n    <th class=\"d-none\" data-collapse=\"true\">真实姓名:</th>\r\n    <th class=\"d-none\" data-collapse=\"true\">身份证号:</th>\r\n    <th class=\"d-none\" data-collapse=\"true\">性别:</th>\r\n    <th class=\"d-none\" data-collapse=\"true\">生日:</th>\r\n    <th class=\"w50 text-center\">状态</th>\r\n    <th class=\"w100 text-right\">操作</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  ";
  stack1 = self.invokePartial(partials['templates/_table-empty'], 'templates/_table-empty', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </tbody>\r\n  <tfoot>\r\n  <tr>\r\n    <td colspan=\"999\">\r\n      <div class=\"pull-right\"><ul class=\"pagination\"></ul></div>\r\n    </td>\r\n  </tr>\r\n  </tfoot>\r\n</table>";
  return buffer;
  });
templates["user/system/templates/list"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n  <div class=\"col-lg-3 col-md-4 col-sm-6\">\r\n    <div class=\"contact-box center-version\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-json=\""
    + escapeExpression((helper = helpers.json || (depth0 && depth0.json),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "json", depth0, options)))
    + "\">\r\n      <a style=\"height: 260px; overflow: hidden;\">\r\n        <img alt=\"image\" class=\"img-circle\" src=\"";
  if (helper = helpers.headImg) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.headImg); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n        <h3 class=\"m-b-xs\"><strong>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong> ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.sex)),stack1 == null || stack1 === false ? stack1 : stack1.name), "male", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.sex)),stack1 == null || stack1 === false ? stack1 : stack1.name), "male", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.sex)),stack1 == null || stack1 === false ? stack1 : stack1.name), "female", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.sex)),stack1 == null || stack1 === false ? stack1 : stack1.name), "female", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\r\n        <div class=\"font-bold\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.roles), {hash:{},inverse:self.program(9, program9, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\r\n        <div class=\"m-t-md\">\r\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.nickName), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br>\r\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mobile), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br>\r\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.email), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br>\r\n        </div>\r\n      </a>\r\n      <div class=\"contact-box-footer\">\r\n        <div class=\"m-t-xs btn-group\">\r\n          <button class=\"btn btn-xs btn-primary\" type=\"button\" data-action=\"edit\"><i class=\"fa fa-edit\"></i> 修改</button>\r\n          ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "locked", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "locked", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n          <button class=\"btn btn-xs btn-danger\" type=\"button\" data-action=\"delete\"><i class=\"fa fa-trash\"></i> 删除</button>\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "<i class=\"fa fa-mars\"></i>";
  }

function program4(depth0,data) {
  
  
  return "<i class=\"fa fa-venus\"></i>";
  }

function program6(depth0,data) {
  
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 && depth0.roles), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += " 【";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "】 ";
  return buffer;
  }

function program9(depth0,data) {
  
  
  return "<br>";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<strong>昵称：";
  if (helper = helpers.nickName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.nickName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong>";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<i class=\"fa fa-phone\"> </i> ";
  if (helper = helpers.mobile) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mobile); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<i class=\"fa fa-envelope\"> </i> ";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  return buffer;
  }

function program17(depth0,data) {
  
  
  return "\r\n            <button class=\"btn btn-xs btn-warning\" type=\"button\" data-action=\"unlock\"><i class=\"fa fa-unlock\"></i> 解锁</button>\r\n          ";
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n            <button class=\"btn btn-xs btn-warning\" type=\"button\" data-action=\"lock\" ";
  stack1 = (helper = helpers.is || (depth0 && depth0.is),options={hash:{},inverse:self.program(22, program22, data),fn:self.program(20, program20, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "valid", options) : helperMissing.call(depth0, "is", ((stack1 = (depth0 && depth0.status)),stack1 == null || stack1 === false ? stack1 : stack1.name), "valid", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><i class=\"fa fa-lock\"></i> 锁定</button>\r\n          ";
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program22(depth0,data) {
  
  
  return "disabled";
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.admins), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates["user/system/templates/modal"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "修改";
  }

function program3(depth0,data) {
  
  
  return "新增";
  }

function program5(depth0,data) {
  
  
  return "disabled";
  }

function program7(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                  <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\r\n                    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth1 && depth1.admin)),stack1 == null || stack1 === false ? stack1 : stack1.roles), {hash:{},inverse:self.noop,fn:self.programWithDepth(8, program8, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                  >";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\r\n                ";
  return buffer;
  }
function program8(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                      ";
  stack1 = (helper = helpers['in'] || (depth0 && depth0['in']),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.id), ((stack1 = (depth2 && depth2.admin)),stack1 == null || stack1 === false ? stack1 : stack1.roles), options) : helperMissing.call(depth0, "in", (depth0 && depth0.id), ((stack1 = (depth2 && depth2.admin)),stack1 == null || stack1 === false ? stack1 : stack1.roles), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    ";
  return buffer;
  }
function program9(depth0,data) {
  
  
  return "selected";
  }

  buffer += "<div id=\"editModal\" class=\"modal inmodal fade\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.admin)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "管理员</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form class=\"form-horizontal row\">\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">真实姓名:</label>\r\n            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" name=\"name\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.admin)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.admin)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "></div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">证件号码:</label>\r\n            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" name=\"idNo\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.admin)),stack1 == null || stack1 === false ? stack1 : stack1.idNo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.admin)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "></div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">手机号码:</label>\r\n            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" name=\"mobile\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.admin)),stack1 == null || stack1 === false ? stack1 : stack1.mobile)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">电子邮箱:</label>\r\n            <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" name=\"email\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.admin)),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">选择角色:</label>\r\n            <div class=\"col-sm-10\">\r\n              <select class=\"form-control\" name=\"role\" data-toggle=\"select2\" multiple>\r\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.roles), {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <input type=\"hidden\" name=\"id\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.admin)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">取消</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-action=\"save\">保存修改</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
  return buffer;
  });
templates["game/edit/templates/tab-2"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"tab-2\" class=\"tab-pane\">\r\n  <form class=\"panel-body\" onsubmit=\"return false;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <input id=\"content\" type=\"hidden\" name=\"content\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.content)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n        <div class=\"summernote\" data-toggle=\"summernote\" data-min-height=\"224\" data-save-target=\"#content\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.content)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"hr-line-dashed\"></div>\r\n    <div class=\"form-group text-right\">\r\n      <button class=\"btn btn-white\" type=\"button\" data-action=\"refresh\"><i class=\"fa fa-refresh\"></i> 刷新</button>\r\n      <button class=\"btn btn-primary\" type=\"button\" data-action=\"submit\">保存修改</button>\r\n    </div>\r\n    <input type=\"hidden\" name=\"id\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.game)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n  </form>\r\n</div>";
  return buffer;
  });
})();