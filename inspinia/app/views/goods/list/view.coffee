require("components/tableview/api")


$(".wrapper-content").tableview(
  url: "/goods/getList"
  template: Handlebars.templates["goods/list/templates/table"]
)
