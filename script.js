function getOutfit() {
  let mood = document.getElementById("mood").value;
  let result = "";

  if (mood === "lazy") {
    result = "Oversized hoodie + joggers + sneakers";
  } else if (mood === "confident") {
    result = "Blazer + fitted pants + heels";
  } else if (mood === "soft") {
    result = "Flowy dress + sandals";
  }

  document.getElementById("result").innerText = result;
}