var user = [
    {
        id: 1,
        name: "kien dam",
    },
    {
        id: 2,
        name: "son dang",
    },
    {
        id: 3,
        name: "hung dam",
    },
];
var comments = [
    {
        id: 1,
        user_id: 1,
        content: "anh son chua ra video",
    },
    {
        id: 2,
        user_id: 2,
        content: "vua ra xong em oi",
    },
];
function getComments() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(comments), 1000);
    });
}
getComments().then((comments) => {
    var user_ids = comments.map((comment) => comment.user_id);
    console.log(user_ids);
});
