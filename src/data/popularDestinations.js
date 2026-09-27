export const popularDestinations = [
  {
    id: "okinawa",
    name: "오키나와",
    type: "city",
    city: "오키나와",
    country: "일본",
    countryCode: "JP",
    lat: 26.2124,
    lng: 127.6809,
    imageUrl: `${import.meta.env.BASE_URL}img/popular/okinawa.jpg`,
  },
  {
    id: "tokyo",
    name: "도쿄",
    type: "city",
    city: "도쿄",
    country: "일본",
    countryCode: "JP",
    lat: 35.6762,
    lng: 139.6503,
    imageUrl: `${import.meta.env.BASE_URL}img/popular/tokyo.jpg`,
  },
  {
    id: "osaka",
    name: "오사카",
    type: "city",
    city: "오사카",
    country: "일본",
    countryCode: "JP",
    lat: 34.6937,
    lng: 135.5023,
    imageUrl: `${import.meta.env.BASE_URL}img/popular/osaka.jpg`,
  },
  {
    id: "rome",
    name: "로마",
    type: "city",
    city: "로마",
    country: "이탈리아",
    countryCode: "IT",
    lat: 41.9028,
    lng: 12.4964,
    imageUrl: `${import.meta.env.BASE_URL}img/popular/rome.jpg`,
  },
  {
    id: "london",
    name: "런던",
    type: "city",
    city: "런던",
    country: "영국",
    countryCode: "GB",
    lat: 51.5072,
    lng: -0.1276,
    imageUrl: `${import.meta.env.BASE_URL}img/popular/london.jpg`,
  },
  {
    id: "new-york",
    name: "뉴욕",
    type: "city",
    city: "뉴욕",
    country: "미국",
    countryCode: "US",
    lat: 40.7128,
    lng: -74.006,
    imageUrl: `${import.meta.env.BASE_URL}img/popular/new-york.jpg`,
  },
  {
    id: "busan",
    name: "부산",
    type: "city",
    city: "부산",
    country: "대한민국",
    countryCode: "KR",
    lat: 35.1796,
    lng: 129.0756,
    imageUrl: `${import.meta.env.BASE_URL}img/popular/busan.jpg`,
  },
  {
    id: "seoul",
    name: "서울",
    type: "city",
    city: "서울",
    country: "대한민국",
    countryCode: "KR",
    lat: 37.5665,
    lng: 126.978,
    imageUrl: `${import.meta.env.BASE_URL}img/popular/seoul.jpg`,
  },
  {
    id: "taiwan",
    name: "대만",
    type: "country",
    city: "",
    country: "대만",
    countryCode: "TW",
    lat: 23.6978,
    lng: 120.9605,
    imageUrl: `${import.meta.env.BASE_URL}img/popular/taiwan.jpg`,
  },
  {
    id: "hawaii",
    name: "하와이",
    type: "city",
    city: "하와이",
    country: "미국",
    countryCode: "US",
    lat: 21.3069,
    lng: -157.8583,
    imageUrl: `${import.meta.env.BASE_URL}img/popular/hawaii.jpg`,
  },
];

// ====================
// 이름으로 인기 여행지 이미지 찾기
//
// Google Places Photo API가
// 사진을 못 내려주는 동안의
// 임시 대체 수단
//
// 검색 결과 이름에 "시/도" 등
// 접미사가 붙는 경우가 있어
// 완전 일치 대신 포함 관계로 비교
// ====================

export const findPopularDestinationImage = (name) => {
  const target = name?.trim();

  if (!target) {
    return "";
  }

  const matched = popularDestinations.find((destination) => {
    return (
      target.includes(destination.name) || destination.name.includes(target)
    );
  });

  return matched?.imageUrl || "";
};
