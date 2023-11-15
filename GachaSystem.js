var points = 100; // 初期ポイント

function spinGacha() {
  // ポイントが0未満なら引けない
  if (points < 10) {
    alert("ポイントが足りません！");
    return;
  }

  // ポイントを減少
  points -= 10;
  updatePoints();

  // ガチャの抽選
  var isWinner = Math.random() < 0.3; // 30%で当たり
  var result = isWinner ? "当たり！" : "外れ…";

  // 結果を表示
  var resultElement = document.getElementById("result");
  resultElement.innerText = "結果: " + result;

  // アニメーションのクラスを追加
  resultElement.classList.add("spin-animation");
}

function updatePoints() {
  // ポイントを更新して表示
  document.getElementById("pointValue").innerText = points;
}
