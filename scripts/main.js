const { world } = require("@minecraft/server");

world.afterEvents.playerBreakBlock.subscribe((call) => {
    console.warn(call.block.type)
    if (call.block.typeId == "minecraft:grass") {
    }
});
