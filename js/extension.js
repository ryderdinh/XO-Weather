let suggestWeather = { suggestFood: "",   suggestAddress: "",   recommend: "" };
let item = { nameWeather: "",   nameIcon: "",   suggestWeather };

//Hàm mở rộng gợi ý ăn uống đi chơi,  chuyển tên sang tiếng việtviệt
let changeNameWeather = (name) => {
  switch (name) {
    case "Sunny": {
      item = {
        nameWeather: "Trời nắng",  
        nameIcon: "icon-2",  
        suggestWeather: {
          suggestFood: "Chè,  kem,  bia,  các loại nước ngọt",  
          suggestAddress: "Bãi biển,  hồ bơi",  
          recommend:
            "Mặc áo chống nắng,  dùng kem chống nắng,  hạn chế tiếp xúc lâu dài với nắng gắt",  
        },  
      };
      return item;
    }

    case "Partly cloudy": {
      item = {
        nameWeather: "Có mây vài nơi",  
        nameIcon: "icon-7",  
        suggestWeather: {
          suggestFood: "Phở,  thịt nướng,  chả quạt,  lẩu",  
          suggestAddress: "Đi cắm trại,  thích hợp các hoạt độnng ngoài trời",  
          recommend: "Thích hợp các hoạt động ngoài trời",  
        },  
      };
      return item;
    }
    case "Clear": {
      item = {
        nameWeather: "Trời quang",  
        nameIcon: "icon-8",  
        suggestWeather: {
          suggestFood: "Phở,  thịt nướng,  chả quạt,  lẩu",  
          suggestAddress: "Đi cắm trại,  thích hợp các hoạt độnng ngoài trời",  
          recommend: "Thích hợp các hoạt động ngoài trời",  
        },  
      };
      return item;
    }

    case "Cloudy": {
      item = {
        nameWeather: "Có nhiều mây",  
        nameIcon: "icon-6",  
        suggestWeather: {
          suggestFood: "Phở,  thịt nướng,  chả quạt,  lẩu",  
          suggestAddress: "Đi cắm trại",  
          recommend: "Thích hợp các hoạt động ngoài trời",  
        },  
      };
      return item;
    }

    case "Overcast": {
      item = {
        nameWeather: "Trời âm u",  
        nameIcon: "icon-8",  
        suggestWeather: {
          suggestFood:
            "Khoai sọ kho thịt,  rau cải xào dầu hào,  canh gà chua nấu sườn,  sữa chua xoàixoài",  
          suggestAddress: "Công viên,  các địa điểm hoạt động ngoài trời",  
          recommend: "Trời không đẹp,  thích hợp cho 1 giấc  ngủ dài ở nhà",  
        },  
      };
      return item;
    }

    case "Mist": {
      item = {
        nameWeather: "Có sương mù nhẹ",  
        nameIcon: "icon-8",  
        suggestWeather: {
          suggestFood: "Lẩu,  thịt nướng,  chả quạt",  
          suggestAddress: "Hạn chế đi ra ngoài đường",  
          recommend: "Ra đường cần chứ ý quan sát bởi tầm nhìn bị hạn chế",  
        },  
      };
      return item;
    }

    case "Patchy rain possible": {
      item = {
        nameWeather: "Khả năng mưa vài nơi",  
        nameIcon: "icon-9",  
        suggestWeather: {
          suggestFood:
            "Khoai lang nướng,  đậu hũ non chiên giòn,  canh sườn hạt sen,  kho quẹt,  ốc hấp",  
          suggestAddress: "Quán cà phê,  quán nhậu",  
          recommend: "Nhớ mang theo áo mưa hoặc ô",  
        },  
      };
      return item;
    }

    case "Patchy snow possible": {
      item = {
        nameWeather: "Có khả năng tuyết rơi vài nơi",  
        nameIcon: "icon-13",  
        suggestWeather: {
          suggestFood:
            "Súp khoai tây hầm thịt bò,  cháo hải sản,  ngao xào cay,  bò hầm rượu vang",  
          suggestAddress: "Các quán ăn,  quán cà phê",  
          recommend: "Mang theo ô",  
        },  
      };
      return item;
    }

    case "Patchy sleet possible": {
      item = {
        nameWeather: "Khả năng mưa tuyết vài nơi",  
        nameIcon: "icon-14",  
        suggestWeather: {
          suggestFood:
            "Súp khoai tây hầm thịt bò,  cháo hải sản,  ngao xào cay,  bò hầm rượu vang",  
          suggestAddress: "Các quán ăn,  quán cà phê",  
          recommend: "Mang theo ô",  
        },  
      };
      return item;
    }

    case "Thundery outbreaks possible": {
      item = {
        nameWeather: "Có thể có sấm",  
        nameIcon: "icon-12",  
        suggestWeather: {
          suggestFood:
            "Đậu sốt cà chua,  cá kho tộ,  canh cải nấu thịt bằm,  bánh mì sốt vang",  
          suggestAddress: "Các địa điểm có mái che",  
          recommend: "Tránh ra ngoài đường nhiều",  
        },  
      };
      return item;
    }

    case "Blowing snow": {
      item = {
        nameWeather: "Tuyết rơi nhiều",  
        nameIcon: "icon-14",  
        suggestWeather: {
          suggestFood: "Bún bò huế,  ngô xào thịt băm,  súp gà nấm hương",  
          suggestAddress: "Các địa điểm có mái che",  
          recommend: "Hạn chế ra ngoài đường nhiều",  
        },  
      };
      return item;
    }

    case "Blizzard": {
      item = {
        nameWeather: "Bão tuyết",  
        nameIcon: "icon-14",  
        suggestWeather: {
          suggestFood:
            "Canh khoai sọ nâu với xương,  trứng vịt lộn hầm ngải cứu thuốc bắc,  cơm thố",  
          suggestAddress: "Ở nhà là tốt nhất",  
          recommend: "Không nên ra ngoài đường",  
        },  
      };
      return item;
    }

    case "Fog": {
      item = {
        nameWeather: "Sương mù nhiều",  
        nameIcon: "icon-8",  
        suggestWeather: {
          suggestFood: "Gà rang gừng,  gà rang muối,  vịt quay",  
          suggestAddress: "Các địa điểm trong nhà",  
          recommend:
            "Ra đường cần chú ý quan sát,  đi chậm do tầm nhìn rất hạn chế",  
        },  
      };
      return item;
    }

    case "Freezing fog": {
      item = {
        nameWeather: "Sương lạnh",  
        nameIcon: "icon-8",  
        suggestWeather: {
          suggestFood: "Xôi chè,  bún ốc,  bánh trôi tàu,  bánh đúc nóng",  
          suggestAddress: "Các địa điẻm trong nhà có máy sưởi",  
          recommend:
            "Cần mặc ấm,  chú ý quan sát khi ra ngoài đường do tầm nhìn bị hạn chế",  
        },  
      };
      return item;
    }

    case "Patchy light drizzle": {
      item = {
        nameWeather: "Mưa phùn vài nơi",  
        nameIcon: "icon-9",  
        suggestWeather: {
          suggestFood: "Mì gà tần,  cháo sườn",  
          suggestAddress: "Đi đâu cũng được miễn là có người yêu",  
          recommend: "Giữ sức khỏe do trời mưa có thể làm bạn bị ốm",  
        },  
      };
      return item;
    }

    case "Light drizzle": {
      item = {
        nameWeather: "Mưa nhẹ",  
        nameIcon: "icon-9",  
        suggestWeather: {
          suggestFood: "Xôi chè,  bún ốc,  bánh trôi tàu",  
          suggestAddress:
            "Gấu rủ đi đâu thì đi cùng,  nếu không có gấu tốt nhất là ở nhà",  
          recommend: "Mặc 1 chiếc áo gió mỏng",  
        },  
      };
      return item;
    }

    case "Freezing drizzle": {
      item = {
        nameWeather: "Mưa phùn và lạnh ",  
        nameIcon: "icon-9",  
        suggestWeather: {
          suggestFood: "Nem chua rán,  nem chua nướng,  ốc luộc,  khoai nướng",  
          suggestAddress:
            "Đi chơi cùng với người yếu,  chứ mà tầm này ra đường thì cẩu lương lắm",  
          recommend: "Đi kiếm người yêu nếu bạn không có",  
        },  
      };
      return item;
    }

    case "Heavy freezing drizzle": {
      item = {
        nameWeather: "Mưa nhiều và lạnh",  
        nameIcon: "icon-10",  
        suggestWeather: {
          suggestFood: "Hạt dẻ nóng,  lẩu nướng,  đậu hũ non chiên xù",  
          suggestAddress:
            "Địa điểm chân ái nhất là ở nhà nếu bạn khong phải đi là hoặc đi học",  
          recommend: "Mang theo áo mưa và nhớ mặc áo ấm nhaaaaaaaaaaaaaaaaaa",  
        },  
      };
      return item;
    }

    case "Patchy light rain": {
      item = {
        nameWeather: "Có mưa nhẹ vài nơi",  
        nameIcon: "icon-9",  
        suggestWeather: {
          suggestFood: "Kem bơ,  trà sữa,  trứng,  chuối chiên,  ốc hấp xả",  
          suggestAddress: "Các địa điểm có mái che",  
          recommend: "Mang theo ô hoặc áo mưa",  
        },  
      };
      return item;
    }

    case "Light rain": {
      item = {
        nameWeather: "Mưa nhẹ",  
        nameIcon: "icon-9",  
        suggestWeather: {
          suggestFood:
            "Khoai tây chiên,  gà rán,  bún đậu mắm tôm,  măng tre tươi nấu xương heo",  
          suggestAddress: "Gấu rủ đi chơi đâu thì đi nếu bạn có gấu",  
          recommend: "Mang theo áo mưa hoặc ô",  
        },  
      };
      return item;
    }

    case "Moderate rain at times": {
      item = {
        nameWeather: "Đôi khi mưa vừa",  
        nameIcon: "icon-9",  
        suggestWeather: {
          suggestFood: "Canh mướp,  ngô chiên,  chuối chiên,  chả quạt",  
          suggestAddress: "Rủ mấy đứa bạn ra ngoài nhậu thì tuyệt với",  
          recommend: "Mang theo áo mưa hoặc ô,  cẩn thận bị ốm nhaaaa",  
        },  
      };
      return item;
    }

    case "Moderate rain": {
      item = {
        nameWeather: "Mưa vừa",  
        nameIcon: "icon-9",  
        suggestWeather: {
          suggestFood: "Lẩu hải sản,  bánh mì rán,  bánh gạo cay",  
          suggestAddress: "Hạn chế đi ra ngoài là tốt nhất",  
          recommend: "Mang theo áo mưa",  
        },  
      };
      return item;
    }

    case "Heavy rain at times": {
      item = {
        nameWeather: "Đôi khi mưa rào",  
        nameIcon: "icon-10",  
        suggestWeather: {
          suggestFood:
            "Đậu phộng rang muối,  thịt ba chỉ xào mắm ruốc,  dưa cải xào tóp mỡ,  đậu phụ chiên trứng",  
          suggestAddress: "Hạn chế đi ra ngoài đường,  nên ở trong nhà",  
          recommend: "Nhớ mang theo áo mưa hoặc ô",  
        },  
      };
      return item;
    }

    case "Heavy rain": {
      item = {
        nameWeather: "Mưa rào",  
        nameIcon: "icon-10",  
        suggestWeather: {
          suggestFood:
            "Thịt ba chỉ xào măng,  gà kho gừng,  canh chua cá,  canh khaoi sọ nấu sương",  
          suggestAddress: "Ở nhà cho lành",  
          recommend: "Mang theo áo mưa hoặc ô nếu bạn có ý định ra đường",  
        },  
      };
      return item;
    }

    case "Light freezing rain": {
      item = {
        nameWeather: "Mưa nhẹ và lạnh",  
        nameIcon: "icon-9",  
        suggestWeather: {
          suggestFood: "Cháo trai,  cháo sườn,  ốc luộc,  gà tần",  
          suggestAddress: "Ở nhà cho ấm",  
          recommend: "Giữ ấm cho cơ thể",  
        },  
      };
      return item;
    }

    case "Moderate or heavy freezing rain": {
      item = {
        nameWeather: "Mưa vừa hoặc mưa rào,  trời lạnh",  
        nameIcon: "icon-10",  
        suggestWeather: {
          suggestFood: "Quẩy nóng,  bánh khoai,  bánh chuối,  ngô nướng",  
          suggestAddress: "Ở nhà cho ấm",  
          recommend: "Giữ ấm cho cơ thể",  
        },  
      };
      return item;
    }

    case "Light sleet": {
      item = {
        nameWeather: "Có mưa tuyết nhẹ",  
        nameIcon: "icon-13",  
        suggestWeather: {
          suggestFood:
            "Kho quẹt,  nem rán,  thịt rim mắm sa tế,  cá cơm rim tỏi ớtớt",  
          suggestAddress: "Có gấu thì đi chơi đâu cũng được",  
          recommend: "Giữ ấm cho cơ thể",  
        },  
      };
      return item;
    }

    case "Moderate or heavy sleet": {
      item = {
        nameWeather: "Mưa tuyét vừa hoặc nặng",  
        nameIcon: "icon-14",  
        suggestWeather: {
          suggestFood:
            "Cá trắm kho riềng,  súp khoai tây hầm thịt bò,  cháo hải sản,  ngao xào caycay",  
          suggestAddress: "Gấu bảo đi đâu thì đi",  
          recommend: "Giữ ấm cho cơ thể",  
        },  
      };
      return item;
    }

    case "Patchy light snow": {
      item = {
        nameWeather: "Tuyết rơi nhẹ vài nơi",  
        nameIcon: "icon-13",  
        suggestWeather: {
          suggestFood:
            "Bò hầm rượu vang,  chè đậu đỏ hạt sen,  bánh củ cải,  cá kho tộ",  
          suggestAddress: "Ở nhà cho lành",  
          recommend: "Giữ ấm cho cơ thể",  
        },  
      };
      return item;
    }

    case "Light snow": {
      item = {
        nameWeather: "Tuyết rơi nhẹ",  
        nameIcon: "icon-13",  
        suggestWeather: {
          suggestFood:
            "Đậu số cà chua,  thịt kho dừa,  canh cải nấu với thịt bămbăm",  
          suggestAddress: "Gấu rủ đi chơi đâu thì đi",  
          recommend: "Giữ ấm cho cơ thể",  
        },  
      };
      return item;
    }

    case "Patchy moderate snow": {
      item = {
        nameWeather: "Có tuyết rơi vừa vài nơi",  
        nameIcon: "icon-13",  
        suggestWeather: {
          suggestFood:
            "Bánh mì sốt vang,  bún bò huế,  ngô xào thịt băm,  súp gà nấm hương,  canh khoai sọ nấu với xương",  
          suggestAddress: "Đi chơi với gấu",  
          recommend: "Giữ ấm cho cơ thể,  mang theo",  
        },  
      };
      return item;
    }

    case "Moderate snow": {
      item = {
        nameWeather: "Tuyết rơi vừa",  
        nameIcon: "icon-13",  
        suggestWeather: {
          suggestFood: "",  
          suggestAddress: "",  
          recommend: "",  
        },  
      };
      return item;
    }

    case "Patchy heavy snow": {
      item = {
        nameWeather: "Tuyết rơi nhiều vài nơi",  
        nameIcon: "icon-14",  
        suggestWeather: {
          suggestFood: "",  
          suggestAddress: "",  
          recommend: "",  
        },  
      };
      return item;
    }

    case "Heavy snow": {
      item = {
        nameWeather: "Tuyết rơi nhiều",  
        nameIcon: "icon-14",  
        suggestWeather: {
          suggestFood: "",  
          suggestAddress: "",  
          recommend: "",  
        },  
      };
      return item;
    }

    case "Ice pellets": {
      item = {
        nameWeather: "Có mưa đá",  
        nameIcon: "icon-13",  
        suggestWeather: {
          suggestFood: "",  
          suggestAddress: "",  
          recommend: "",  
        },  
      };
      return item;
    }

    case "Light rain shower": {
      item = {
        nameWeather: "Mưa rào nhẹ",  
        nameIcon: "icon-14",  
        suggestWeather: {
          suggestFood: "",  
          suggestAddress: "",  
          recommend: "",  
        },  
      };
      return item;
    }

    case "Moderate or heavy rain shower": {
      item = {
        nameWeather: "Mưa vừa hoặc mưa to",  
        nameIcon: "icon-10",  
        suggestWeather: {
          suggestFood: "",  
          suggestAddress: "",  
          recommend: "",  
        },  
      };
      return item;
    }

    case "Torrential rain shower": {
      item = {
        nameWeather: "Mưa xối xả",  
        nameIcon: "icon-10",  
        suggestWeather: {
          suggestFood: "",  
          suggestAddress: "",  
          recommend: "",  
        },  
      };
      return item;
    }

    case "Light sleet showers": {
      item = {
        nameWeather: "Có mây vài nơi",  
        nameIcon: "icon-5",  
        suggestWeather: {
          suggestFood: "",  
          suggestAddress: "",  
          recommend: "",  
        },  
      };
      return item;
    }

    case "Moderate or heavy sleet showers": {
      item = {
        nameWeather: "Mưa tuyết vừa hoặc nặng vài nơi",  
        nameIcon: "icon-14",  
        suggestWeather: {
          suggestFood: "",  
          suggestAddress: "",  
          recommend: "",  
        },  
      };
      return item;
    }

    case "Light snow showers": {
      item = {
        nameWeather: "Tuyết rơi nhẹ",  
        nameIcon: "icon-13",  
        suggestWeather: {
          suggestFood: "",  
          suggestAddress: "",  
          recommend: "",  
        },  
      };
      return item;
    }

    case "Moderate or heavy snow showers": {
      item = {
        nameWeather: "Tuyết rơi vừa hoặc nặng",  
        nameIcon: "icon-14",  
        suggestWeather: {
          suggestFood: "",  
          suggestAddress: "",  
          recommend: "",  
        },  
      };
      return item;
    }

    case "Light showers of ice pellets": {
      item = {
        nameWeather: "Mưa đá nhẹ",  
        nameIcon: "icon-13",  
        suggestWeather: {
          suggestFood: "",  
          suggestAddress: "",  
          recommend: "",  
        },  
      };
      return item;
    }

    case "Moderate or heavy showers of ice pellets": {
      item = {
        nameWeather: "Mưa đá nặng hoặc nhẹ",  
        nameIcon: "icon-14",  
        suggestWeather: {
          suggestFood: "",  
          suggestAddress: "",  
          recommend: "",  
        },  
      };
      return item;
    }

    case "Patchy light rain with thunder": {
      item = {
        nameWeather: "Có sấm và mưa vài nơi",  
        nameIcon: "icon-11",  
        suggestWeather: {
          suggestFood: "",  
          suggestAddress: "",  
          recommend: "",  
        },  
      };
      return item;
    }

    case "Moderate or heavy rain with thunder": {
      item = {
        nameWeather: "Mưa vừa hoặc mưa rào có sấm",  
        nameIcon: "icon-11",  
        suggestWeather: {
          suggestFood: "",  
          suggestAddress: "",  
          recommend: "",  
        },  
      };
      return item;
    }

    case "Patchy light snow with thunder": {
      item = {
        nameWeather: "Tuyết rơi nhẹ vài nơi có sấm",  
        nameIcon: "icon-11",  
        suggestWeather: {
          suggestFood: "",  
          suggestAddress: "",  
          recommend: "",  
        },  
      };
      return item;
    }

    case "Moderate or heavy snow with thunder": {
      item = {
        nameWeather: "Tuyết rơi vừa hoặc nặng có sấm",  
        nameIcon: "icon-11",  
        suggestWeather: {
          suggestFood: "Cá viên chiên",  
          suggestAddress: "Ở nhà thôi !",  
          recommend: "Nên ở nhà bạn nhé <3",  
        },  
      };
      return item;
    }
  }
};

let arrName = [
  "Sunny",  
  "Clear",  
  "Heavy rain",  
  "Partly cloudy",  
  "Overcast",  
  "Mist",  
  "Patchy rain possible",  
  "Patchy snow possible",  
  "Patchy sleet possible",  
  "Patchy freezing drizzle possible",  
  "Thundery outbreaks possible",  
  "Blowing snow",  
  "Blizzard",  
  "Fog",  
  "Freezing fog",  
  "Patchy light drizzle",  
  "Light drizzle",  
  "Freezing drizzle",  
  "Heavy freezing drizzle",  
  "Patchy light rain",  
  "Light rain",  
  "Moderate rain at times",  
  "Moderate rain",  
  "Heavy rain at times",  
  "Heavy rain",  
  "Light freezing rain",  
  "Moderate or heavy freezing rain",  
  "Light sleet",  
  "Moderate or heavy sleet",  
  "Patchy light snow",  
  "Light snow",  
  "Patchy moderate snow",  
  "Moderate snow",  
  "Patchy heavy snow",  
  "Heavy snow",  
  "Ice pellets",  
  "Light rain shower",  
  "Moderate or heavy rain shower",  
  "Torrential rain shower",  
  "Light sleet showers",  
  "Moderate or heavy sleet showers",  
  "Light snow showers",  
  "Moderate or heavy snow showers",  
  "Light showers of ice pellets",  
  "Moderate or heavy showers of ice pellets",  
  "Patchy light rain with thunder",  
  "Moderate or heavy rain with thunder",  
  "Patchy light snow with thunder",  
  "Moderate or heavy snow with thunder",  
];

var convertText = (name) => {
  for (let i = 0; i < arrName.length; i++) {
    let nameF = `${changeNameWeather(arrName[i]).nameWeather}`;
    if (nameF === name) {
      return changeNameWeather(arrName[i]).suggestWeather;
    }
  }
};

