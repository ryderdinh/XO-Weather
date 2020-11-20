const $loginLinkIn = document.querySelectorAll(".login-link-in");
const $loginLinkOut = document.querySelectorAll(".login-link-out");
const $profileUser = document.querySelector(".profile-card");
const setupUI = (user) => {
  if (user) {
    //account info
    (async (id) => {
      let result = await db.collection("Users").doc(id).get();
      let resultFollow = await db.collection("Addresses").doc(id).get();
      document.querySelector(".name").innerHTML = `${result.data().fullName}`;
      document.querySelector(".bio").innerHTML = `" ${result.data().bio} "`;
      document.querySelector("#fb").href = `${result.data().facebook}`;
      document.querySelector("#ist").href = `${result.data().instagram}`;
      document.querySelector("#twt").href = `${result.data().twitter}`;
      document.querySelector(".item.follow span").innerHTML = `${
        Object.keys(resultFollow.data()).length
      }`;
    })(user.uid);
    //edit account info
    document.querySelector("#edit-profile").addEventListener("click", () => {
      let select = Number(
        prompt(
          `1: Thay doi ho ten\n2: Thay doi Bio\n3: Thay doi link Facebook\n4: Thay doi link Twitter\n5: Thay doi link Instagram\n6: Dong`
        )
      );
      switch (select) {
        case 1: {
          let newName = prompt("Nhap ten moi: ");
          db.collection("Users").doc(user.uid).update({ fullName: newName });
          document.querySelector(".name").innerHTML = `${newName}`;
          break;
        }
        case 2: {
          let newBio = prompt("Nhap bio moi: ");
          db.collection("Users").doc(user.uid).update({ bio: newBio });
          document.querySelector(".bio").innerHTML = `${newBio}`;
          break;
        }
        case 3: {
          let newFacebook = prompt("Nhap link Facebook moi: ");
          db.collection("Users")
            .doc(user.uid)
            .update({ facebook: newFacebook });
          document.querySelector("#fb").href = newFb;
          break;
        }
        case 4: {
          let newTwitter = prompt("Nhap link Twitter moi: ");
          db.collection("Users").doc(user.uid).update({ twitter: newTwitter });
          document.querySelector("#twt").href = newTwitter;
          break;
        }
        case 5: {
          let newInstagram = prompt("Nhap link Instagram moi: ");
          db.collection("Users")
            .doc(user.uid)
            .update({ instagram: newInstagram });
          document.querySelector("#ist").href = newInstagram;
          break;
        }
        case 6: {
          break;
        }
      }
    });
    // contact;
    document
      .querySelector(".text-right input[type='submit']")
      .addEventListener("click", (e) => {
        e.preventDefault();
        let nameContact = document.getElementById("contact-name").value;
        let emailContact = document.getElementById("contact-email").value;
        let phoneContact = document.getElementById("contact-phone").value;
        let webContact = document.getElementById("contact-web").value;
        let messengeContact = document.getElementById("contact-messenge").value;
        db.collection("Contacts")
          .add({
            Name: nameContact,
            Email: emailContact,
            Phone: phoneContact,
            Web: webContact,
            Messenge: messengeContact,
          })
          .then(() => {
            //close the modal and reset form
            $("#info-contact").modal("hide");
            //Reset Values
            document.getElementById("contact-form").reset();
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    //toggle UI elements
    $loginLinkIn.forEach((item) => (item.style.display = "block"));
    $loginLinkOut.forEach((item) => (item.style.display = "none"));
  } else {
    //hide acc info
    document.querySelector(".name").innerHTML = "";
    document.querySelector(".bio").innerHTML = "";
    //toggle UI elements
    $loginLinkIn.forEach((item) => (item.style.display = "none"));
    $loginLinkOut.forEach((item) => (item.style.display = "block"));
  }
};
