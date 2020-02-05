// app.get("/api/authors", function (req, res) {
//     // 1. Add a join to include all of each Author's Posts

//     db.Author.findAll({
//         include: db.Post
//     }).then(function (dbAuthor) {
//         res.json(dbAuthor);
//     });
// });