'use strict';

const requestUserData = userId => {

  return new Promise((resolve, reject) => {

    if (userId === 'broken') {
      setTimeout(() => reject(new Error('User not found')), 500);
      return;
    };

    setTimeout(() => resolve( { name: 'John', age: 17, userId, email: `${userId}@example.com` } ) , 1000);
  });
};

requestUserData('broken').then(user => alert(user.userId)).catch((error) => alert(error));