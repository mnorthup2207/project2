function getStreams() {
    $.get("/api/user-stream/all", data => {
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

getRafts();
getStreams();