require("components/tableview/api")


$(".wrapper-content").tableview(
  url: "/game/getList"
  template: Handlebars.templates["game/list/templates/table"]
)
