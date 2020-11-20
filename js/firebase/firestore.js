//get data
let getData = (check, user) => {
  if (check == true) {
    setupUI(user);
    addressUser(user);
    cache.user = user;
    showAddresses();
  } else {
    setupUI();
    addressUser("");
  }
};
// cái này là khi đăng nhập xong rồi mới chạy 
// //get data
// let getData = (check, user) => {
//   if (check == true) {
//     db.collection("guides").onSnapshot(
//       (snapshot) => {
//         setupGuides(snapshot.docs);
//         setupUI(user);
//       },
//       (err) => {
//         console.log(err.message);
//       }
//     );
//   } else {
//     setupUI();
//     setupGuides([]);
//   }
// };
