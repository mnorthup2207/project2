// $(document).ready(function() {
//     // Getting references to the name input and author container, as well as the table body
//     const nameInput = $("welcomeLine");
//     var totalStreams = $("#streamsPage");
//     const totalRafts = $("#raftsPage");
//     // Adding event listeners to the form to create a new object, and the button to delete
//     // an Author
//     // $(document).on("submit", "#author-form", handleAuthorFormSubmit);
//     // $(document).on("click", ".delete-author", handleDeleteButtonPress);
  
//     // Getting the initial list of Authors
//     getUserInfo();
  
//     // Function for retrieving authors and getting them ready to be rendered to the page
//     function getAuthors() {
//       $.get("/api/authors", function(data) {
//         var rowsToAdd = [];
//         for (var i = 0; i < data.length; i++) {
//           rowsToAdd.push(createAuthorRow(data[i]));
//         }
//         renderAuthorList(rowsToAdd);
//         nameInput.val("");
//       });
//     }
  
//     // A function for rendering the list of authors to the page
//     function renderAuthorList(rows) {
//       authorList.children().not(":last").remove();
//       authorContainer.children(".alert").remove();
//       if (rows.length) {
//         console.log(rows);
//         authorList.prepend(rows);
//       }
//       else {
//         renderEmpty();
//       }
//     }
  
//     // Function for handling what to render when there are no authors
//     function renderEmpty() {
//       var alertDiv = $("<div>");
//       alertDiv.addClass("alert alert-danger");
//       alertDiv.text("You must create an Author before you can create a Post.");
//       authorContainer.append(alertDiv);
//     }
  
//     // Function for handling what happens when the delete button is pressed
//     function handleDeleteButtonPress() {
//       var listItemData = $(this).parent("td").parent("tr").data("author");
//       var id = listItemData.id;
//       $.ajax({
//         method: "DELETE",
//         url: "/api/authors/" + id
//       })
//         .then(getAuthors);
//     }
//   });
  