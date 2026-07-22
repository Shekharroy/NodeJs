"use strict";

function getUser(userId) {
  return new Promise(function (resolve, reject) {
    // Simulating database csll
    setTimeout(function () {
      resolve({
        id: userId,
        name: 'John'
      });
    }, 1000);
  });
}

function getUserPosts(user) {
  return new Promise(function (resolve, reject) {
    //Simulating API call
    setTimeout(function () {
      resolve(['post1', 'post2', 'post3']);
    }, 1000);
  });
} // Chain the promises


getUser(123).then(function (user) {
  console.log('User: ', user);
  return getUserPosts(user);
}).then(function (posts) {
  console.log('Posts: ', posts);
})["catch"](function (error) {
  console.log('Error', error);
}); // Using Asyn/Await

function fetchUserData() {
  var user, posts;
  return regeneratorRuntime.async(function fetchUserData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(getUser(123));

        case 3:
          user = _context.sent;
          console.log('User:', user);
          _context.next = 7;
          return regeneratorRuntime.awrap(getUserPosts(user));

        case 7:
          posts = _context.sent;
          console.log('Posts:', posts);
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error('Error:', _context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
}

fetchUserData();