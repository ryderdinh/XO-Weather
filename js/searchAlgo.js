// var datas = [{ "id": 2801268, "name": "London, City of London, Greater London, United Kingdom", "region": "City of London, Greater London", "country": "United Kingdom", "lat": 51.52, "lon": -0.11, "url": "london-city-of-london-greater-london-united-kingdom" }, { "id": 2796590, "name": "Holborn, Camden, Greater London, United Kingdom", "region": "Camden, Greater London", "country": "United Kingdom", "lat": 51.52, "lon": -0.12, "url": "holborn-camden-greater-london-united-kingdom" }, { "id": 2812957, "name": "St Giles, Camden, Greater London, United Kingdom", "region": "Camden, Greater London", "country": "United Kingdom", "lat": 51.52, "lon": -0.12, "url": "st-giles-camden-greater-london-united-kingdom" }, { "id": 2791655, "name": "Finsbury, Islington, Greater London, United Kingdom", "region": "Islington, Greater London", "country": "United Kingdom", "lat": 51.53, "lon": -0.11, "url": "finsbury-islington-greater-london-united-kingdom" }, { "id": 2786308, "name": "Clerkenwell, Islington, Greater London, United Kingdom", "region": "Islington, Greater London", "country": "United Kingdom", "lat": 51.53, "lon": -0.11, "url": "clerkenwell-islington-greater-london-united-kingdom" }, { "id": 2781746, "name": "Bloomsbury, Camden, Greater London, United Kingdom", "region": "Camden, Greater London", "country": "United Kingdom", "lat": 51.53, "lon": -0.12, "url": "bloomsbury-camden-greater-london-united-kingdom" }, { "id": 2813087, "name": "St Pancras, Camden, Greater London, United Kingdom", "region": "Camden, Greater London", "country": "United Kingdom", "lat": 51.53, "lon": -0.12, "url": "st-pancras-camden-greater-london-united-kingdom" }, { "id": 2813948, "name": "Strand, Westminster, Greater London, United Kingdom", "region": "Westminster, Greater London", "country": "United Kingdom", "lat": 51.51, "lon": -0.12, "url": "strand-westminster-greater-london-united-kingdom" }, { "id": 2813028, "name": "St Luke's, Islington, Greater London, United Kingdom", "region": "Islington, Greater London", "country": "United Kingdom", "lat": 51.53, "lon": -0.09, "url": "st-lukes-islington-greater-london-united-kingdom" }, { "id": 2811665, "name": "Shoreditch, Hackney, Greater London, United Kingdom", "region": "Hackney, Greater London", "country": "United Kingdom", "lat": 51.53, "lon": -0.09, "url": "shoreditch-hackney-greater-london-united-kingdom" }]
var FakeDataForForcast = [];
var container = document.querySelector("#results");
var timeoutList = [];
var LocationDetail = {
  latitude: null,
  longitude: null,
};
var getLocationIsClicked = false;
var latSearch = null;
var lonSearch = null;

function getLocation(e) {
  if (e) {
    e.preventDefault();
  }
  getLocationIsClicked = true;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  LocationDetail.longitude = position.coords.longitude;
  LocationDetail.latitude = position.coords.latitude;
  // console.log(LocationDetail);
  myFunction();
}

// Bật chức năng realtime search
function RealTimeSearch() {
  console.log("clicked");
  document.querySelector("#mySearch").removeAttribute("onchange");
  document.querySelector("#mySearch").setAttribute("onkeyup", "myFunction()");
}
//tắt realtime search
function DisableRealTimeSearch() {
  console.log("clicked");
  document.querySelector("#mySearch").removeAttribute("onkeyup");
  document.querySelector("#mySearch").setAttribute("onchange", "myFunction()");
}
// Hàm này dùng để render Autocomplete/Search data ở dưới thanh input
function render(datas) {
  var myMenu = document.querySelector("#myMenu");
  myMenu.innerHTML = "";
  // lặp qua các dữ liệu trả về
  datas.forEach((place) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("href", "#");
    // trong dữ liệu trả về có kinh độ vĩ độ thì thêm vào id để về sau gọi API forecast
    a.setAttribute("id", `${place.lat},${place.lon}`);
    // Gắn sự kiện lắng nghe click, để gọi API forecast, nhận vào giá trị event là click, this là cả cái thẻ
    a.setAttribute("onclick", "GetWeatherForecast(event,this)");
    //   a.style.display = 'none'
    a.textContent = place.name;
    li.appendChild(a);
    //   console.log(li);
    //   console.log(a);
    myMenu.appendChild(li);
  });
}

// render(datas)

//hàm này lắng nghe sự kiện ở input, xem người dùng nhập gì rồi lưu vào biến filter
async function myFunction() {
  // Declare variables
  let input, filter, ul, li;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  timeoutList.forEach((v) => {
    clearTimeout(v);
  });

  timeoutList.push(
    setTimeout(async function () {
      if (filter != "") {
        SearchByKeywordAPICall(filter);
      }
      if (getLocationIsClicked) {
        SearchByGPSAPICall(LocationDetail);
        getLocationIsClicked = false;
      }
    }, 500)
  );
}

//hàm này nhận tham số là tên địa điểm nào đó (ở input) và gọi API
async function SearchByKeywordAPICall(keyword) {
  await axios
    .get(
      `https://api.weatherapi.com/v1/search.json?key=1f4e25194f3f4b49a42153456201910&q=${keyword}&lang=vi`
    )
    .then(function (response) {
      // console.log(response.data);
      let data = response.data;
      if (data.length === 0) {
        alert(
          "No data for this place on server, please try to search another one"
        );
      } else {
        render(data);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  // .then(function () {
  //   console.log("success");
  // });
}

// Hàm này nhận tham số là 1 object có đầy đủ kinh độ vĩ độ và gọi API
async function SearchByGPSAPICall(LocationDetail) {
  await axios
    .get(
      `https://api.weatherapi.com/v1/search.json?key=1f4e25194f3f4b49a42153456201910&q=${LocationDetail.latitude},${LocationDetail.longitude}&lang=vi`
    )
    .then(function (response) {
      let data = response.data;
      if (data.length === 0) {
        alert(
          "No data for this place on server, please try to search another one"
        );
      } else {
        // render dữ liệu trả về ra cái autocomplete ở input
        render(data);
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      console.log("success");
    });
}

// Hàm này dùng để gọi API cho weather forecast , nhận vào 3 tham số event, element và object toạ độ
async function GetWeatherForecast(event, element, LocationDetail) {
  let id = null;
  // nếu có sự kiện click thì ko chuyển trang
  if (event) {
    event.preventDefault();
  }
  //   console.log(event)
  //   console.log(element)
  // 2 lệnh if ở dưới là như nhau, a viết vội chưa tối ưu được
  // nếu người dùng click vào search result thì chạy vế if element
  if (element) {
    id = element.getAttribute("id");
    document.querySelector("#results").style.display = "none";
    document.querySelector(".inputfix").style.borderRadius =
      "20px 3px 20px 3px !important";
    // db.collection("Users").doc(id).update({find: })
    //lay ra lat lon khi click vao dia chi o Search, sang addUserAddress.js
    for (let i = 0; i < id.length; i++) {
      if (id[i] === ",") {
        latSearch = id.slice(0, i);
        lonSearch = id.slice(i + 1, id.length);
        break;
      }
    }

    await axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=1f4e25194f3f4b49a42153456201910&q=${id}&days=3`
      )
      .then(function (response) {
        // console.log(response.data);
        // console.log(response);
        let data = response.data;
        template.render(data);
      })
      .then(() => {
        let showSearchResult = document.querySelector(
          ".forecast-table.search-results"
        );
        showSearchResult.style.display = "block";
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log("success");
      });
  }
  // Nếu người dùng ko click gì cả thì lấy dữ liệu từ định vị (dùng cho lần đầu tiên load trang)
  if (LocationDetail) {
    await axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=1f4e25194f3f4b49a42153456201910&q=${LocationDetail.latitude},${LocationDetail.longitude}&days=3`
      )
      .then(function (response) {
        // console.log(response.data);
        // console.log(response);
        let data = response.data;
        template.render(data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // .then(function () {
    //   console.log("success");
    // });
  }
}
// Get JSON API
async function getJSONAPI(lat, lon) {
  await axios
    .get(
      `https://api.weatherapi.com/v1/forecast.json?key=1f4e25194f3f4b49a42153456201910&q=${lat},${lon}&days=3`
    )
    .then((response) => {
      let data = response.data;
      template.renderVer2(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

//Hàm này sẽ chạy đầu tiên khi load page, chức năng: lấy toạ độ, gọi API và render địa điểm hiện tại
window.onload = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      LocationDetail.longitude = position.coords.longitude;
      LocationDetail.latitude = position.coords.latitude;
      // console.log(LocationDetail);
      GetWeatherForecast(false, false, LocationDetail);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
};
