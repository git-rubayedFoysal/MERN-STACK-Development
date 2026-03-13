const visitedUser = new Set();

const userVisit = function (userId) {
    if (!visitedUser.has(userId)) {
        console.log(`Welcome, new visitor #${userId}`);
        visitedUser.add(userId);
    } else {
        console.log(`Welcome back, visitor #${userId}`);
    }
}

userVisit(101);
userVisit(102);
userVisit(101);