const WideCategoryList__ = ["한식", "일식", "중식", "양식", "경양식", "디저트"];
const categoryList = ["떡볶이", "초밥", "도시락", "덮밥", "햄버거", "크림파스타", "카레", "치킨", "피자", "어묵", "물냉면", "갈비탕", "국밥", "해물찜", "찜닭", "전골", "회", "삼겹살", "소고기", "곱창", "닭갈비", "닭발", "목살", "우동", "찌개", "불고기", "짜글이찌개", "전", "함박스테이크", "돈까스", "조개", "장어", "갈치", "고등어", "백반", "기사식당", "해장국", "마라탕", "샤브샤브", "족발", "딤섬", "스테이크", "뷔페", "죽", "리조또", "토마토 파스타", "로제 파스타", "오일 파스타", "비빔냉면", "치킨버거", "곰탕", "오리고기", "잔치국수", "칼국수", "감자탕", "아구찜", "쭈꾸미", "낙지", "오징어", "쌀국수", "샌드위치", "토스트", "순대", "제육볶음", "랍스터", "라멘", "인도 카레", "낙곱새", "꼬막", "규카츠"];
const length = categoryList.length
function listCount() {
    console.log(length);
}

function random() {
    const randIdx = Math.floor(Math.random()* length);

    return categoryList[randIdx];
}

document.getElementById("random").addEventListener("click", () => {
    const selectedMenu = random();
    document.getElementById("menu").innerText = selectedMenu;
    document.getElementById("keyword").value = selectedMenu;
    document.getElementById("search").click();
})
