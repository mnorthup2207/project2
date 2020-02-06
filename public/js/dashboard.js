function getStreams() {
    $.get("/api/streams/all", data => {
        if (data){
            console.log(data)
        } else {
            console.log("nope")
        }
    })
};

getStreams();