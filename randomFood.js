const WideCategoryList__ = ["한식", "일식", "중식", "양식", "경양식", "디저트"];
const categoryList = ["떡볶이", "초밥", "도시락", "덮밥", "햄버거", "크림파스타", "카레", "치킨", "피자", "어묵", "물냉면", "갈비탕", "국밥", "해물찜", "찜닭", "전골", "회", "삼겹살", "소고기", "곱창", "닭갈비", "닭발", "목살", "우동", "찌개", "불고기", "짜글이찌개", "연포탕", "전", "함박스테이크", "돈까스", "조개", "장어", "갈치", "고등어", "백반", "기사식당", "해장국", "마라탕", "샤브샤브", "족발", "딤섬", "스테이크", "뷔페", "죽", "리조또", "토마토 파스타", "로제 파스타", "오일 파스타", "비빔냉면", "치킨버거", "곰탕", "오리고기", "잔치국수", "칼국수", "감자탕", "아구찜", "쭈꾸미", "낙지", "오징어", "쌀국수", "샌드위치", "토스트", "순대", "제육볶음", "랍스터", "라멘", "인도 카레", "낙곱새", "꼬막", "규카츠",
                     "핫도그", "훠궈", "보쌈",  "짜장면", "짬뽕", "브런치", "마카롱", "밀크티", "버블티", "에이드", "양갈비", "타코야끼", "볶음밥", "김밥", "만두", "탓타이", "물회", "오징어 볶음", "오돌뼈", "해파리냉채", "매생이국", "간장 새우 덮밥", "연어 스테이크", "홍어", "지갈비", "가츠동", "규동", "비프스튜", "양꼬치", "닭강정", "깐풍기", "쫄면", "라볶이", "추어탕", "에그인헬", "바지락술찜", "바베큐 폭립", "순두부찌개", "피시 앤 칩스", "도넛", "훈제오리", "난자완스", "대하소금구이", "떡갈비", "궁중떡볶이", "고로케", "똠양꿍", "갈비찜", "오겹살", "유린기", "어죽", "동파육", "과메기", "탄탄멘", "돼지껍데기", "감바스", "부대찌개", "콩국수"];
const length = categoryList.length;

function listCount() {
    console.log(length);
}

function random() {
    const randIdx = Math.floor(Math.random()* length);

    return categoryList[randIdx];
}

document.getElementById("random").addEventListener("click", () => {
    const selectedMenu = random();
    document.querySelector("h3").innerText = "오늘의 메뉴는 " + selectedMenu;
    document.getElementById("keyword").value = selectedMenu + " 맛집";
    document.getElementById("search").click();
})


