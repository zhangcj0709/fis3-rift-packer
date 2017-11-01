require("components/tableview/api")


$(".wrapper-content").tableview(
  footable: true
  url: "/order/delivery/getList"
  template: Handlebars.templates["order/list/templates/table"]
)

$("#tableSearchBar .dropdown-menu").html('<li><a data-value="">待发货</a></li>')
$("#tableSearchBar .dropdown-menu a").on "click", ->
  value = $(this).data("value")
  disValue = this.innerText
  $(this).closest(".dropdown-menu").siblings("button").data("value",value).find("span:first").html(disValue)

total = $("table[data-total]").data("total") || "0"
$("#side-menu a[href='/order/delivery/list'] span").text(total).show()