function getRafts() {
    $.get("/api/raft/all", data => {
        const count = data.length;

        for (const item of data) {
            const name = item.name
            $(".liElements").append(
                `<li><h3 class="streamId" >${name}</h3></li>`
            )
        }
        
        // console.log("Raft", name);
        
    })
};

getRafts();