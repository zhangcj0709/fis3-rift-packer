require("components/tableview/api")


$(".wrapper-content").tableview(
  footable: true
  url: "/order/getList"
  template: Handlebars.templates["order/list/templates/table"]
)

$("#tableSearchBar .dropdown-menu a").on "click", ->
  value = $(this).data("value")
  disValue = this.innerText
  $(this).closest(".dropdown-menu").siblings("button").data("value",value).find("span:first").html(disValue)