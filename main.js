const img = document.getElementById("sendai");
const names = document.getElementById("cafename");
//クリックすると画像が変わる
let i = 0;
const imgChange = function () {
  img.src = "cafe" + i + ".jpg";
  i++;
  if (i === 1) {
    names.innerHTML = "cafe haven't we metのチーズケーキとシナモンカプチーノ✨";
  } else if (i === 2) {
    names.innerHTML = "Ball Parkのパンケーキ🥞";
  } else if (i === 3) {
    names.innerHTML = "おなじくBall Parkの焼きリンゴパンケーキ🍎";
  } else if (i === 4) {
    names.innerHTML = "みのりカフェの鯖サンド🥪";
  }
  console.log(i);
  if (i === 4) {
    i = 0;
  }
};

img.onclick = imgChange;
