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
  if (stats.money >= stats.upgradePrice) {
    stats.upgrades += 1;
    stats.money = stats.money - stats.upgradePrice;
    stats.upgradePrice = Math.round(stats.upgradePrice * 1.15);

    document.querySelector(".price").innerText = stats.upgradePrice;
    document.querySelector(".upgrades").innerText = stats.upgrades;
    document.querySelector(".money").innerText = stats.money;
  } else {
    alert("Not enough cows!");
  }
}

setInterval(function () {
  stats.money = stats.money + stats.upgrades;
  document.querySelector(".money").innerText = stats.money;
}, 1000);
