function getRafts() {
    $.get("/api/raft/all", data => {
        const count = data.length;

        for (const item of data) {
            const name = item.name
            const location = item.location
            $(".liElements").append(
                `<li><h3 class="streamId"><a href="${location}" target="_blank" >${name}</a></h3></li>`
            )
        };
    });
};

getRafts();