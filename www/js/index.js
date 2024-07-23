$(document).on('pagecreate', function() {
  $("#taskList").on("swipeleft swiperight", "li", function(event) {
      var taskItem = $(this);
      if (event.type === "swipeleft") {
          taskItem.remove();
      } else if (event.type === "swiperight") {
          taskItem.addClass("highlight");
      }
  });
});

function ajouterTache() {
  var task = $("#task").val();
  if (task) {
      $("#taskList").append('<li class="task-item">' + task + '<span class="delete-btn">&#x2715;</span></li>');
      $("#task").val("");
  }
}

function reinitialiser() {
  $("#taskList").empty();
}