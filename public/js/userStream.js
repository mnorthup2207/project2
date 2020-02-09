// import { response } from "express";

let newStreamId;
let userId;
let userArray = [2];

function loadUsers() {
    $.get("/api/user/all", data => {
        for (const item of data){
            const first = item.first_name
            const last = item.last_name
            const id = item.id
            $("#eachUser").append(
                `<li>
                    <div class="row" id="downstreamUser" data-UserId="">
                        <div class="col-md-7">
                            <h4 class="userTag">${first} ${last}</h4>
                        </div>
                    </div>
                    <button id="str" value="${id}" name="${first} ${last}" class="addUserBtn"><i class="fas fa-user-plus"></i></button>
                </li>`
            )
        }
        $(".addUserBtn").on("click", function(e) {
            e.preventDefault();
            console.log("clicked");
            // builds streamUserList to append to the above input
            streamUserList.push({
                id: $(this)[0].value,
                name: $(this)[0].name
            })
            console.log(streamUserList);
            for (const item of streamUserList) {
                const name = item.name;
                $("#streamUser").html(name);
                console.log(`append User ${name}`);
            }
        })
        console.table("users", data);
    });
};

function loadStreams() {
    $.get("/api/user-stream/all", data => {
        // loop throuh streams for left pane
        // console.log("raw", data);

        for (let i = 0; i < data.length; i++ ) {
            const userArr = [];
            for (let x = 0; x < data[i].users.length ; x++ ) {
                const firstName = data[i].users[x].first_name;
                const lastName = data[i].users[x].last_name;
                userArr.push(`${firstName} ${lastName}`)             
            }     
            const finalLoop =[]
            for (const user of userArr) {
                finalLoop.push(`${user}`)
            }

            const looped = finalLoop.toString().split(",").join(", ")
            console.log("final loop list", finalLoop);
            console.log(looped);
            $("#indStreams").append(
                `<li class="streamId">
                <h4>${looped}</h4>
                </li>`
            )
            
            console.log("userArr", userArr);
        }

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