'use strict';

// the function imitating loading user's data to another function
const requestUserData = (userId, callback) => {

  const delayTime = ((Math.random() * (3 - 1) + 1) * 1000).toFixed(0);

  if(userId === 'broken') {
    setTimeout(() => callback(null, 'Failed to load user data'), delayTime);
    return;
  };

  const userData = {
    userId,
    email: `${userId}@example.com`
  };

  setTimeout(() => callback.apply(userData, [userData, null]), delayTime);
};

// test callback
const presentUser = (user, message) => {
  if (user === null) {
    console.log(message);
    return;
  };
  console.log(`The ID of the user is ${user.userId}. The email of the user is ${user.email}`);
};

// test calls
requestUserData('19', presentUser);
requestUserData('broken', presentUser);
