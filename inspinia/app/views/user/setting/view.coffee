util = require("util")
#require("components/cutImage/api")
require("components/actionGroups/api")


$("#wrapper-content").actionGroups({
  group: ".ibox"
  configs: {
    "settingBox": {
      refresh: true
      onFileUploaded: {
        eTarget: "[data-toggle=customized][data-type=imageCropper]"
        eFunction: (e, modal, file, resp)->
          util.ajaxJsonCallback.call resp, ->
            modal.modal("hide")
            $(e.target).find("i,img").replaceWith("<img class='img-circle img-xl' src='#{resp.content.path}'>")
            $(e.target).find("input[name=headImg]").val(resp.content.path).trigger("change")
      }
      submit: {
        url: "/user/save"
        validator:rules:
          headImg:required: {value: true, message: "请上传头像！"}
          name:required: {value: true, message: "请填写真实姓名！"}
          idNo:required: {value: true, message: "请填写证件号码！"}
          nickName:required: {value: true, message: "请填写真昵称！"}
          sex:required: {value: true, message: "请选择性别！"}
          mobile:
            required: {value: true, message: "请填写手机号码！"}
            phone: {value: true, message: "手机号码无效！"}
          email:
            required: {value: true, message: "请填写常用电子邮箱！"}
            email: {value: true, message: "电子邮箱无效！"}
        callback: (group, config)->util.msgSuccess this.msg, ->group.play("refresh")
      }
    }
    "resetPasswordBox": {
      refresh: true
      submit: {
        validator:rules:
          newPassword:
            required: {value: true, message: "新密码不能为空！"}
            minlength: {value: 6, message: "密码不能小于6位！"}
          confirmNewPassword:
            equal: {value: "newPassword", message: "输入的密码不一致！"}
        url: "/user/resetPassword"
        dataMap: {
          clearAll: true
          password: "#newPassword"
        }
        callback: (group, config)->
          util.msgSuccess this.msg, ->group.play("refresh")
      }
    }
  }
})