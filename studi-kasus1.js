const character = {
  name: "Aether",
  level: 12,
  baseStats: {
    hp: 200,
    atk: 35,
    def: 20,
    spd: 15,
  },
  
  equipped: {
    weapon: {
      id: "wpn-01",
      name: "Iron Broadsword",
      slot: "weapon",
      rarity: "common",
      statBonus: { atk: 12, spd: -2 },
    },
    armor: {
      id: "arm-01",
      name: "Leather Tunic",
      slot: "armor",
      rarity: "common",
      statBonus: { hp: 30, def: 8, spd: 2 },
    },
    accessory: null,
  },

  inventory: [
    {
      id: "wpn-02",
      name: "Flamebrand Katana",
      slot: "weapon",
      rarity: "rare",
      qty: 1,
      statBonus: { atk: 28, spd: 5 },
    },
    {
      id: "acc-01",
      name: "Ring of Vitality",
      slot: "accessory",
      rarity: "uncommon",
      qty: 2,
      statBonus: { hp: 50, def: 3 },
    },
    {
      id: "arm-02",
      name: "Mithril Chainmail",
      slot: "armor",
      rarity: "epic",
      qty: 1,
      statBonus: { hp: 80, def: 25, spd: -1 },
    //   [["hp", '80'], ['def', '25'], ['spd', '-1']]
    },
    {
      id: "pot-01",
      name: "Elixir of Strength",
      slot: "consumable",
      rarity: "rare",
      qty: 3,
      statBonus: { atk: 5 },
    },
  ],
};

// ==========================================
// TULIS JAWABAN FUNGSI KAMU DI BAWAH INI
// ==========================================

function getTotalStats(char) {
  // TODO: Implementasi Misi 1
  const equippedItem = Object.values(char.equipped).filter(item => item !== null);
  return equippedItem.reduce((total, item) => {

    return Object.entries(item.statBonus).reduce((subTotal, [statKey, statValue]) => {
        subTotal[statKey] =(subTotal[statKey] || 0) + statValue;
        return subTotal;
    }, total);
  }, { ...char.baseStats});
}

function equipItem(char, itemId) {
  // TODO: Implementasi Misi 2
}

function unequipItem(char, slotName) {
  // TODO: Implementasi Misi 3
}

function useConsumable(char, itemId) {
  // TODO: Implementasi Misi 4
}

function getInventorySummary(char) {
  // TODO: Implementasi Misi 5
}

function findBestUpgrade(char, slotName) {
  // TODO: Implementasi Misi 6
}

// ==========================================
// SCRIPT PENGUJIAN (TEST CASES)
// ==========================================

console.log("1. Initial Stats:", getTotalStats(character));
// Ekspektasi: { hp: 230, atk: 47, def: 28, spd: 15 }

const stateAfterWeapon = equipItem(character, "wpn-02");
const stateAfterAcc = equipItem(stateAfterWeapon, "acc-01");
console.log("2. Stats After Equip:", getTotalStats(stateAfterAcc));
// Ekspektasi: { hp: 280, atk: 63, def: 31, spd: 22 }
console.log("   Inventory Weapon Swap:", stateAfterAcc.inventory.find((i) => i.id === "wpn-01"));
// Ekspektasi: { id: "wpn-01", name: "Iron Broadsword", slot: "weapon", rarity: "common", statBonus: { atk: 12, spd: -2 }, qty: 1 }

const stateAfterUnequip = unequipItem(stateAfterAcc, "accessory");
console.log("3. Ring Qty After Unequip:", stateAfterUnequip.inventory.find((i) => i.id === "acc-01")?.qty);
// Ekspektasi: 2

const stateAfterPotion = useConsumable(stateAfterUnequip, "pot-01");
console.log("4. Base ATK After Elixir:", stateAfterPotion.baseStats.atk);
// Ekspektasi: 40

console.log("5. Inventory Summary:", getInventorySummary(character));
// Ekspektasi:
// {
//   rare: { totalQty: 4, items: ["Flamebrand Katana", "Elixir of Strength"] },
//   uncommon: { totalQty: 2, items: ["Ring of Vitality"] },
//   epic: { totalQty: 1, items: ["Mithril Chainmail"] }
// }

console.log("6. Best Armor Upgrade:", findBestUpgrade(character, "armor"));
// Ekspektasi: { itemName: "Mithril Chainmail", scoreGain: 64 }

console.log("7. Immutability Check - Weapon:", character.equipped.weapon.name === "Iron Broadsword");
console.log("   Immutability Check - Inventory:", character.inventory.length === 4);