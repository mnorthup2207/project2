function getStreams() {
    $.get("/api/user-stream/current", data => {
        const count = data.length;
        $(".streamTotal").append(
            `<h1 class="counts">${count}</h1>`
        )
    })
};
function getRafts() {
    $.get("/api/raft/all", data => {
        const count = data.length;
        $(".raftTotal").append(
            `<h1 class="counts" >${count}</h1>`
        )
        // console.log("Raft", data[0].name);
        
    })
};

function getCurrentUser() {
    $.get("/api/user/current", data => {
        $(".welcomeLine").text(`Welcome back ${data.first_name}`);
    })
}

getRafts();
getCurrentUser();
getStreams();