// import { response } from "express";

let newStreamId;
let userId;
let userArray = [2];

function loadUsers() {
    $.get("/api/user/all", data => {
        for (const item of data) {
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
        $(".addUserBtn").on("click", function (e) {
            e.preventDefault();
            console.log("clicked");
            // builds streamUserList to append to the above input
            streamUserList.push({
                id: $(this)[0].value,
                name: $(this)[0].name
            })
            // console.log(streamUserList);
            for (const item of streamUserList) {
                const name = item.name;
                $("#streamUser").append(
                    `<div class="row">
                    <p>${name}</p>
                    </div>`
                );
                console.log(`append User ${name}`);
            }
        })
        // console.table("users", data);
    });
};

function loadStreams() {
    $.get("/api/user-stream/all", data => {
        // console.log("raw", data);

        for (let i = 0; i < data.length; i++) {
            const userArr = [];
            const streamId = [];
            streamId.push(data[i].id);
            for (let x = 0; x < data[i].users.length; x++) {
                const firstName = data[i].users[x].first_name;
                const lastName = data[i].users[x].last_name;
                userArr.push(`${firstName} ${lastName}`)
            }

            const finalLoop = []
            for (const user of userArr) {
                finalLoop.push(`${user}`)
            }

            const looped = finalLoop.toString().split(",").join(", ");
            $("#indStreams").append(
                `<li class="streamId">
                <h4 id="streamsH4" value="${streamId}" data-toggle="modal" data-target="#exampleModalScrollable" >${looped}</h4>
                </li>`
            )
            $(".modal-title").text(`Stream With: ${looped}`)
        }
    });
};

$("#indStreams").on("click", ".streamId #streamsH4", function () {
    console.log(`clicked`);
    console.log($(this)[0].attributes[1].value);
    const value = $(this)[0].attributes[1].value
    $("#streamBtn").attr("value", `${value}`)

    $.ajax({
        url: "/api/message/all",
        data: {
            id: value
        }
    }).then(data => {
        console.log("api call all", data);  
    })
})


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

const emptyTextBox = () => {
    $("#messageDetails").val(" ")
}

$("#streamBtn").on("click", function() {
    console.log(`clicked`);
    const uniqueStream = $(this)[0].value
    const messageText = $("#messageDetails")[0].value
    console.log(`Stream Id: ${uniqueStream} | Stream Message: ${messageText}`);

    $.post("/api/message/create", {
        id: uniqueStream,
        message: messageText
    })
    emptyTextBox();
})


$("#createStreamForm").on("submit", event => {
    event.preventDefault();
    generateStream();
})