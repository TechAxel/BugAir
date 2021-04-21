let stats = {
  money: 0,
  upgradePrice: 15,
  upgrades: 0,
};

document.querySelector(".price").innerText = stats.upgradePrice;

function incrementMoney() {
  stats.money += 1;
  document.querySelector(".money").innerText = stats.money;
}

function upgrade() {
  if (stats.money < stats.upgradePrice) return alert("Not enough money!");

  stats.upgrades += 1;
  stats.money = stats.money - stats.upgradePrice;
  stats.upgradePrice = Math.round(stats.upgradePrice * 1.15);

  document.querySelector(".price").innerText = stats.upgradePrice;
  document.querySelector(".upgrades").innerText = stats.upgrades;
  document.querySelector(".money").innerText = stats.money;
}

setInterval(function () {
  stats.money = stats.money + stats.upgrades;
  document.querySelector(".money").innerText = stats.money;

  // upgrades indicator
  if (stats.upgrades > 0) {
    let items = [];
    for (i = 0; i < stats.upgrades; i++) {
      items.push(
        `<span class="py-2 px-3 text-white bg-black rounded">Upgrade</span>`
      );
    }
    console.log("up");
    document.querySelector("#field").innerHTML = items.join(" ");
  } else {
    document.querySelector("#field").innerText = "No current upgrade.";
  }
}, 1000);
