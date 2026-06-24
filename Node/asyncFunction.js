function getUserProfile(username, callback) {
    const users = [
        { username: "john", age: 25, city: "New York" },
        { username: "alice", age: 22, city: "London" },
        { username: "bob", age: 30, city: "Paris" }
    ];

    setTimeout(() => {
        const user = users.find(u => u.username === username);
        callback(user);
    }, 2000);
}

getUserProfile("alice", (profile) => {
    if (profile) {
        console.log("User Profile:", profile);
    } else {
        console.log("User not found");
    }
});
