function getStreams() {
    $.get("/api/streams/all", data => {
        const count = data.length;
        $(".streamTotal").append(
            `<h1>${count}</h1>`
        )
    })
};

getStreams();