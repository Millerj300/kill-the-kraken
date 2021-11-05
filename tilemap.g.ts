// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`5a001400070707070707070707070707070707070707070707070707070707070707070707070707070704040404040404040606060605070707070707070707040404040404040404040404040404040404040404040404040404040404000000000000000000000000000000000000000000000000000000000000000000000000000006040404040404040606060500000000080000000000000000040404040404040400000404040404040404040400000000000404000000000000000000000000000800000000000800000000000000000000000000000000000005060606060606060606050000000000000000000000000000000004040404040000000004040404040404040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050506060606060605000000000000000000000000000800000000000000000000000000000404040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005060606060500000000000000000000000000000000000000000000000000000000000004040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050505050000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008080808080000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000404040404040000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004040404040404040400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000404040404040404040404000000000000000000000000000008000000000000000000000000000000000000000000000000000009000000000000000000000000000000000000000000000000000000000000000000000404040404040404040404040404000000000000000000000000000000000000000000000800000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004040404040404040404040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000300040404040404040400000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000300000000000404000000080000000000000303000000030000040404040404040400000000000000000000000000000000000000000000000000000303000000000000000000000000000000000000000000000008000000030300000004040404040400000000000000000003030303030000000404040404040400000000000000000000000000000000000000000000000000030403030000000000000000000000000000000000000000000000000102020202000404040404040404000000000300000000000303000000000404040404040000000000000003000000000000000000000000000000000003030404030300000000000000000000000000000000000003030101010202020202040400040404040404000000030300000000000300000008080404040404040000000000000303000000000000000300000000000000000003040404040303030000000000000000000003030303030101010102020202020202020202040404040404000003030000000000000303000008080404040404040000000000030300000000000003030300000800030000000303040404040404040400000000000000000102020202020202020202020202020202020202020202020200040303000000000000000003030000000404040404000000000303030303000000000303000000000000040303030303040404040404040404040000000000020202020202020202020202020202020202020202020202020202040202020202020202020202020202020202020202020204040404040404040404040404040404040404040404040404040404040404040404040404040404`, img`
22222222222222222222222222222222222222...........22222222222222222222222..........222222..
......................................2..........2.............22222222..2........2.....22
......................................2.........2................22222...222...222........
.......................................22......2.............................22...........
.........................................2....2..............................22...........
..........................................2222............................................
..........................................................................................
.......................................2222222............................................
......................................22.....22...........................................
.....................................22.......22..........................................
..................................22222........2..........................................
......................................22222....22.........................................
..........................................22....22........................................
......................22..................22.....2........................................
....................22..22.................2....22..........................2.............
.............22222.2......2................2....2...........................22............
..........222.....2.......2................2....2..........................2..2...........
.......2222...............2................2...22..........................2...22222......
.2222222...................2...............2...2.....................2.....2........2.....
22..........................2222222222222222...2222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.builtin.oceanSand4,sprites.builtin.oceanSand10,sprites.builtin.coral5,sprites.builtin.oceanSand11,sprites.builtin.oceanSand12,sprites.builtin.oceanSand9,sprites.builtin.oceanSand8,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
