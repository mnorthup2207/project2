function getRafts() {
    $.get("/api/raft/rafts", data => {
        // const count = data.length;
        // $(".streamTotal").append(
        //     `<h1>${count}</h1>`
        // )
        console.log(data);
        
    })
};

getRafts();