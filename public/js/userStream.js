let newStreamId;
let userId;
let userArray = [2];

function loadUsers() {
    $.get("/api/user/all", data => {
        // loop goes here for user li's
        // add id to arr
        console.log("users", data);
    });
};

function loadStreams() {
    $.get("/api/user-stream/all", data => {
        // loop throuh streams for left pane
        console.log("streams data", data);
        console.log(data);
    });
};

loadUsers();
loadStreams();

// create button to test functionality
function generateStream() {
    $.post("/api/stream/create", data => {
        // console.log(data);
        newStream = data.id
        userId = data.createdBy
        userArray.push(userId);
        // console.log(`id: ${data.id}, createdBy: ${data.createdBy}`);
        // console.log(userArray);
    })
    .then((newStream) => {
        for (user of userArray) {
            $.post("/api/user-stream/create", {
                userId: user,
                streamId: newStream.id
            })
            .then(data => console.log(data));
        }

    });
}


$("#createStreamForm").on("submit", event => {
    event.preventDefault();
    generateStream();
})