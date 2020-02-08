// import { response } from "express";

let newStreamId;
let userId;
let userArray = [2];

function loadUsers() {
    $.get("/api/user/all", data => {
        // for (const item of data){
        //     const first = item.first_name
        //     const last = item.last_name
        //     const id = item.id
        //     $("#eachUser").append(
        //         `<li>
        //             <div class="row" id="downstreamUser" data-UserId="">
        //                 <div class="col-md-7">
        //                     <h4 class="userTag">${first} ${last}</h4>
        //                 </div>
        //             </div>
        //             <button id="str" value="${id}" data-name="${first} ${last}" class="addUserBtn"><i class="fas fa-user-plus"></i></button>
        //         </li>`
        //     )
        // }
        console.table("users", data[0]);
    });
};


function loadStreams() {
    $.get("/api/user-stream/all", data => {
        // loop throuh streams for left pane
        console.log("streams data", data);
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