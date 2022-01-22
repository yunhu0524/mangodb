// 버튼
const signinButton = document.getElementById("signinButton");
// 'click' 이벤트
signinButton.addEventListener("click", signinFunc);

function signinFunc() {
  const userid = document.getElementById("userid").value; // userid 의 값을 받아와 넣음.
  const userpw = document.getElementById("userpw").value; // userpw 의 값을 받아와 넣음.

  if (userid === "ari" && userpw === "gato") {
    alert("로그인 성공");
    console.log("로그인 성공했습니다.");
  } else {
    alert("로그인 실패");
    console.log("로그인 실패했습니다.");
  }
}
