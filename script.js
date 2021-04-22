let stats = {
  money: 0,
  upgrades: 0,
  upgradePrice: 10,
  oldUpgradePrice: 0,
};

document.querySelector(".price").innerText = stats.upgradePrice;

function incrementMoney() {
  stats.money += 1;
  document.querySelector(".money").innerText = stats.money;
}

function upgrade() {
  if (stats.money < stats.upgradePrice) return alert("Not enough money!");

  stats.upgrades += 1;
  stats.money -= stats.upgradePrice;
  stats.oldUpgradePrice = stats.upgradePrice;
  stats.upgradePrice = Math.round(stats.upgradePrice * 1.15);

  document.querySelector(".money").innerText = stats.money;
  document.querySelector(".upgrades").innerText = stats.upgrades;
  document.querySelector(".price").innerText = stats.upgradePrice;
}

function sellUpgrade() {
  if (stats.upgrades <= 0) return alert("No current upgrade.");

  stats.upgrades -= 1;
  stats.money += stats.oldUpgradePrice * 0.5;
  stats.upgradePrice = stats.oldUpgradePrice;

  document.querySelector(".money").innerText = stats.money;
  document.querySelector(".upgrades").innerText = stats.upgrades;
}

setInterval(function () {
  stats.money += stats.upgrades;
  document.querySelector(".money").innerText = stats.money;

  // upgrades indicator
  if (stats.upgrades > 0) {
    const el = `<span class="py-2 px-3 text-white bg-black rounded">Upgrade</span> `;
    document.querySelector("#field").innerHTML = el
      .repeat(stats.upgrades)
      .trim();
  } else {
    document.querySelector("#field").innerText = "No current upgrade.";
  }
}, 1000);
