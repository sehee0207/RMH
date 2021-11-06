window.addEventListener("load", () => {
    console.log("hello");
    getLocation();
})

function getLocation() {
    const status = document.querySelector("#status");
    const popup = document.querySelector("#geolocation_popup");
    
    function error() {
        status.textContent = "위치를 불러오는 것을 실패했습니다."
        popup.classList.toggle('error_transition');
        setTimeout(() => {
            popup.classList.toggle('error');
        }, 2500)
    }

    function success(position) {
        status.textContent = "현재 위치를 불러왔습니다. 실제 위치와 다를 수 있습니다."
        popup.classList.toggle('success');
        setTimeout(() => {
            popup.classList.toggle('success');
        }, 2500)
    }

    if (!navigator.geolocation) {
        status.textContent = "이 브라우저는 위치기반 서비스를 제공하지 않습니다."
        popup.classList.toggle('error');
        setTimeout(() => {
            popup.classList.toggle('error');
        }, 2500)
    } else {
        status.textContent = "불러오는 중..."
        navigator.geolocation.getCurrentPosition(success, error);
    }
}