const streamUserList = []

function getRafts() {
    $.get("/api/raft/all", data => {
        if (data) {
            for (const item of data) {
                const name = item.name
                const location = item.location
                $(".liElements").append(
                    `<li><h3 class="streamId" ><a target="_blank" href="${location}">${name}</a></h3></li>`
                )
            }
        } else {
            console.log("no rafts")
        }
        
    })
};

getRafts();

// console.log("Raft", name);