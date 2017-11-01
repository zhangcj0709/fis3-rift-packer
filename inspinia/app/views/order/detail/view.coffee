util = require("util")
require("components/actionGroups/api")


$("#wrapper-content").actionGroups({
  configs: {
    refresh: true
    changeNeedDelivery: {
      event: "change propertychange"
      eTarget: "#deliveryModal form #dontNeedDeliver"
      eFunction: ->
        $inputs = $(this).closest("form").find("select[name=deliveryId],input[name=deliveryNumber]")
        if this.checked
          $inputs.prop("disabled", true)
        else
          $inputs.prop("disabled", false)
    }
    delivery: {
      eTarget: "#deliveryModal form"
      eFunction: (e)->
        $form = $(form = this)
        valid = $form.validate({
          rules:
            deliveryId:required:true
            deliveryNumber:required:true
        }).run()
        valid and util.ajaxJson "/order/delivery", $form.serialize(), ->
          util.ajaxJsonCallback.call this, ->
            $form.closest(".modal").one "hidden.bs.modal", ->e.data.group.play("refresh")
            $form.closest(".modal").modal("hide")
    }
  }
})