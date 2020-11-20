// let showInfoAddress = (user) => {
//   (async (id) => {
//     db.collection("Addresses").onSnapshot((snapshot) => {
//       console.log(snapshot.docChanges());
//       snapshot.docChanges().forEach(async (change) => {
//         if (change.type === "added") {
//           if (id == change.doc.id) { // chỗ này sao lại so sánh id của người dùng với id của address được
// ý là nếu mà cái change đó có id của người nào thì , ko ko hỏng r, change.doc.id ấy nó là id của address cơ
//hôm trc bọn e in ra nó nếu mà có 2 thay đổi của 2 người dùng khác nhau thì sẽ là 2 id của người đó
//a thử in ra xem a
//             let mainData =  change.doc.data();
//             console.log("added ", mainData);
//             document.querySelector(".item.follow span").innerHTML = `${
//               Object.keys(mainData).length
//             }`;
//             if (Object.getOwnPropertyNames(mainData).length !== 0) {
//               await template.showData(mainData);
//             }
//             //edit data
//             actionModal();
//             editModal(id, mainData);
//           }
//           //lấy ra gợi ý
//           suggestShow();
//         }
//         if (change.type === "modified" && id == change.doc.id) {
//           console.log("modified", change.doc.data());
//           let mainData = await change.doc.data();
//           if (Object.getOwnPropertyNames(change.doc.data()).length !== 0)
//             await template.showData(change.doc.data());
//           //edit data
//           actionModal();
//           editModal(id, mainData);
//           console.log("edit");
//         }

//         if (change.type === "removed") {
//           let mainData = change.doc.data();
//           actionModal();
//           // ccó gì đó ko đúng ở chỗ này
//           editModal(id, mainData);
//           if (Object.getOwnPropertyNames(change.doc.data()).length !== 0)
//             await template.showData(change.doc.data());
//           console.log("removed");
//         }
//       });
//     });
//   })(user.uid);
// };

// // cái này là để tạo list danh sách ở chỗ chỉnh sửa thôi a ạ
// let actionModal = () => {
//   let listNameData = document.querySelectorAll(
//     ".forecast-table.data-user .location"
//   );
//   let listShowEditTable = "";
//   let i = 0;
//   listNameData.forEach((e) => {
//     // console.log(true, e.textContent);
//     listShowEditTable += `<div class="local-name-data">${i}. ${e.textContent}
//               <input type="checkbox" aria-label="Checkbox for following text input" class="is-completed"></div>`;
//     i++;
//   });
//   let editTable = document.querySelector("#data-edit");
//   editTable.innerHTML = listShowEditTable;
// };

// let editModal = (id, objectData) => {
//   document.getElementById("not-check").addEventListener("click", () => {
//     let fake = document.querySelectorAll(".is-completed");
//     fake.forEach((e) => {
//       if (e.checked) {
//         e.checked = false;
//       }
//     });
//   });

//   document.getElementById("delete-edit").addEventListener("click", checkDelete);
//   function checkDelete() {
//     let fake = document.querySelectorAll(".is-completed");
//     fake.forEach((e) => {
//       // console.log(e.checked);
//       if (e.checked) {
//         textContentLocal = e.parentElement.innerText;
//         let textNum = "";
//         for (let i = 0; i < textContentLocal.length; i++) {
//           if (textContentLocal[i] !== ".") textNum += textContentLocal[i];
//           else break;
//         }
//         textNum = Number(textNum);
//         for (key in objectData) {
//           if (key == textNum) {
//             delete objectData[key];
//           }
//         }
//         // console.log(true, objectData);
//         let checkKey = 0;
//         let newObject = {};
//         for (key in objectData) {
//           newObject[`${checkKey}`] = objectData[key];
//           checkKey++;
//         }
//         // console.log(newObject);
//         let proM = new Promise((res) => {
//           res((document.getElementById("data-edit").innerHTML = ""));
//         });
//         proM
//           .then(() => {
//             return db.collection("Addresses").doc(id).delete();
//           })
//           .then(() => {
//             return db.collection("Addresses").doc(id).set(newObject);
//           })
//           // .then(() => {
//           //   location.reload();
//           // })
//           .catch((err) => {
//             console.log(err);
//           });
//       }
//     });
//   }
// };

let forcastContainerUserData = document.querySelector(
  ".forecast-table.data-user .container"
);
let showAddresses = function () {
  let user = cache.user;
  firebase
    .firestore()
    .collection("Addresses")
    .doc(user.uid)
    .onSnapshot(async (snapshot) => {
      cache.addresses = Object.values(snapshot.data());
      renderActionModal();
      forcastContainerUserData.innerHTML = "";
      forcastContainerUserData.innerHTML = `<h3 class="title-result">Đang theo dõi</h3>
                                            <div class="edit-data" data-toggle="modal" data-target="#edit-data-modal">
                                            Chỉnh sửa danh sách
                                            </div>`;
      await template.showData();
      suggestShow();
    });
};

let renderActionModal = function () {
  let $actionTable = document.querySelector("#data-edit");
  $actionTable.innerHTML = "";
  // console.log(cache.addresses);
  let i = 1;
  for (let address of cache.addresses) {
    $actionTable.innerHTML += `
      <div class="local-name-data">${i}. ${address} 
        <input type="checkbox" aria-label="Checkbox for following text input" value="${
          i - 1
        }" class="local-index">
      </div>`;
    i++;
  }

  let $deleteButton = document.getElementById("delete-edit");
  $deleteButton.onclick = deleteAction;

  function deleteAction() {
    let user = cache.user;
    document.querySelectorAll(".local-index").forEach(function ($local) {
      if ($local.checked) {
        firebase
          .firestore()
          .collection("Addresses")
          .doc(user.uid)
          .update({
            [$local.value]: firebase.firestore.FieldValue.delete(),
          });
      }
    });
  }
};

// let renderEditModal = function () {};

var suggestShow = function () {
  let suggest = document.getElementsByClassName("suggest");
  let dataSuggest = document.getElementById("data-suggest");
  console.log(suggest);
  for (let i = 0; i < suggest.length; i++) {
    let objectDataSuggest;
    suggest[i].addEventListener("click", () => {
      // console.log(suggest[i].innerText);
      objectDataSuggest = convertText(`${suggest[i].innerText}`);
      objectDataSuggest = `<div class="suggest-food">😋 Ăn gì vào thơì tiết như này nhỉ ?
                              <div class="result-suggest"> - ${objectDataSuggest.suggestFood}.</div>
                           </div>
                           <div class="suggest-address">🚗 Đi đâu vào thời tiết như này ?
                              <div class="result-suggest"> - ${objectDataSuggest.suggestAddress}.</div>
                           </div>
                           <div class="suggest-recommend">💡 Lưu ý nhé !
                              <div class="result-suggest"> - ${objectDataSuggest.recommend}.</div>
                           </div>`;
      dataSuggest.innerHTML = objectDataSuggest;
    });
  }
};
