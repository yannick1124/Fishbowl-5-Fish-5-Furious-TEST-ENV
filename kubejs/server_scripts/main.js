ServerEvents.recipes(event => {
  /**
   * =============
   * === HONEY ===
   * =============
   */

  // Mods
  const PB = 'productivebees:';
  const MI = 'modern_industrialization:';
  const OC = 'occultism:';
  const MK = 'mekanism:';
  const OR = 'oritech:';
  const MC = 'minecraft:';
  const EA = 'extendedae:';
  const PO = 'powah:';
  const AE = 'ae2:';
  const NA = 'naturesaura:';
  const AN = 'ars_nouveau:';
  const AC = 'aquaculture:';
  const CR = 'create:';
  const CA = 'createaddition:';

  // Ingredients
  const HC = PB+'configurable_honeycomb';
  const HP = PB+'honeycomb_powdery';
  const CB = PB+'configurable_comb';
  const WAX = PB+'wax';
  const HONEY = 'create:honey';

  // Bulk-modify all use of PB honey to Create honey
  event.remove({ type: PB+'centrifuge' });

  const CENTRIFUGE = [
    [ HC, PB+'silver', [[MI+'raw_silver', .4], [WAX]] ],
    [ HC, PB+'iesnium', [[OC+'raw_iesnium'], [WAX]] ],
    [ HC, PB+'radioactive', [[MK+'raw_uranium', .2], [WAX]] ],
    [ HC, PB+'antimony', [[MI+'raw_antimony', .4], [WAX]] ],
    [ HC, PB+'duratium', [[OR+'duratium_ingot', .4]] ],
    [ HC, PB+'bronze', [[Item.of(MK+'nugget_bronze', 6)], [WAX]] ],
    [ HC, PB+'iron', [[MC+'raw_iron', .4], [WAX]] ],
    [ HC, PB+'plastic', [[OR+'plastic_sheet', .5], [WAX]] ],
    [ HC, PB+'tungsten', [[MI+'raw_tungsten', .4], [WAX]] ],
    [ HC, PB+'diamond', [[MC+'diamond', .2], [WAX]] ],
    [ HC, PB+'gold', [[MC+'raw_gold', .4], [WAX]] ],
    [ HC, PB+'aluminum', [[MI+'aluminum_dust', .4], [WAX]] ],
    [ HC, PB+'entro', [[EA+'entro_crystal', .5], [WAX]] ],
    [ HC, PB+'prometheum', [[OR+'prometheum_ingot', .05], [WAX]] ],
    [ MC+'honeycomb', MC+'bee', [[WAX]] ],
    [ HC, PB+'niotic_crystal', [[PO+'crystal_niotic'], [WAX]] ],
    [ HC, PB+'lapis', [[MC+'lapis_lazuli', .5], [WAX]] ],
    [ HC, PB+'brown_shroom', [[MC+'brown_mushroom', .7], [WAX]] ],
    [ HC, PB+'energized_steel', [[PO+'steel_energized'], [WAX]] ],
    [ HC, PB+'steel', [[Item.of(MK+'nugget_steel', 12)], [WAX]] ],
    [ HC, PB+'withered', [[PB+'wither_skull_chip', .3], [WAX]] ],
    [ HC, PB+'crystalline', [[Item.of(MC+'quartz', 3), .5], [WAX]] ],
    [ HC, PB+'refined_glowstone', [[Item.of(MK+'nugget_refined_glowstone', 4)], [WAX]] ],
    [ HC, PB+'fluxite', [[OR+'fluxite', .9], [WAX]] ],
    [ HC, PB+'fluix', [[AE+'fluix_crystal', .2], [AE+'fluix_dust', .05], [WAX]] ],
    [ HC, PB+'beryllium', [[Item.of(MI+'beryllium_tiny_dust', 3), .7], [WAX]] ],
    [ HC, PB+'tainted_gold', [[NA+'tainted_gold', .75], [WAX]] ],
    [ HC, PB+'slimy', [[MC+'slime_ball', .2], [WAX]] ],
    [ HC, PB+'osmium', [[MK+'raw_osmium', .4], [WAX]] ],
    [ HC, PB+'obsidian', [[Item.of(PB+'obsidian_shard', 6)], [WAX]] ],
    [ HC, PB+'copper', [[MC+'raw_copper', .4], [WAX]] ],
    [ HC, PB+'energite', [[OR+'energite_ingot', .5], [WAX]] ],
    [ HC, PB+'coal', [[MC+'coal', .6], [WAX]] ],
    [ HC, PB+'titanium', [[MI+'raw_titanium', .4], [WAX]] ],
    [ HC, PB+'adamant', [[OR+'adamant_ingot', .8], [WAX]] ],
    [ HC, PB+'skeletal', [[MC+'bone_meal', .7], [WAX]] ],
    [ HC, PB+'blazing', [[MC+'blaze_powder', .3], [WAX]] ],
    [ CB, PB+'blazing', [[MC+'blaze_rod', .5], [WAX]] ],
    [ HC, PB+'sculk', [[MC+'echo_shard', .3], [MC+'disc_fragment_5', .005], [WAX]] ],
    [ HC, PB+'lead', [[MK+'raw_lead', .4], [WAX]] ],
    [ HC, PB+'water_essence', [[AN+'water_essence', .25], [WAX]] ],
    [ HC, PB+'arcane', [[AN+'source_gem', .5], [WAX]] ],
    [ HC, PB+'fluorite', [[MK+'fluorite_gem', .5], [WAX]] ],
    [ HC, PB+'spatial', [[Item.of(AE+'certus_quartz_crystal', 2)], [AE+'certus_quartz_dust', .5]] ],
    [ HC, PB+'ghostly', [[MC+'ghast_tear', .05], [WAX]] ],
    [ HC, PB+'draconic', [[PB+'draconic_dust', .3], [WAX]] ],
    [ HC, PB+'glowing', [[MC+'glowstone_dust'], [WAX]] ],
    [ HC, PB+'amethyst', [[MC+'amethyst_shard', .3], [WAX]] ],
    [ HC, PB+'nitro_crystal', [[PO+'crystal_nitro'], [WAX]] ],
    [ HC, PB+'neptunium', [[Item.of(AC+'neptunium_nugget', 3), .8], [WAX]] ],
    [ HC, PB+'zombie', [[MC+'rotten_flesh', .6], [WAX]] ],
    [ HC, PB+'zinc', [[CR+'raw_zinc', .4], [WAX]] ],
    [ HC, PB+'rose_quartz', [[CR+'rose_quartz', .5], [WAX]] ],
    [ HC, PB+'sky_ingot', [[NA+'sky_ingot', .5], [WAX]] ],
    [ HC, PB+'earth_essence', [[AN+'earth_essence', .25], [WAX]] ],
    [ HC, PB+'crimson', [[MC+'crimson_fungus', .7], [WAX]] ],
    [ HC, PB+'uranite_crystal', [[OR+'uranium_crystal', .75], [WAX]] ],
    [ HC, PB+'nickel', [[MI+'raw_nickel', .4], [WAX]] ],
    [ HC, PB+'redstone', [[MC+'redstone', .5], [WAX]] ],
    [ HC, PB+'electrum', [[Item.of(CA+'electrum_nugget', 6)], [WAX]] ],
    [ HC, PB+'iridium', [[Item.of(MI+'iridium_nugget', 3), .7], [WAX]] ],
    [ HC, PB+'air_essence', [[AN+'air_essence', .25], [WAX]] ],
    [ HC, PB+'netherite', [[MC+'netherite_scrap', .1], [WAX]] ],
    [ HC, PB+'uraninite', [[PO+'uraninite_raw', .7], [WAX]] ],
    [ HC, PB+'sulfur', [[MK+'dust_sulfur'], [WAX]] ],
    [ HC, PB+'warped', [[MC+'warped_fungus', .7], [WAX]] ],
    [ HC, PB+'invar', [[Item.of(MI+'invar_nugget', 6)], [WAX]] ],
    [ HC, PB+'prismarine', [[MC+'prismarine_shard', .2], [MC+'prismarine_crystals', .05], [WAX]] ],
    [ HC, PB+'tin', [[MK+'raw_tin', .4], [WAX]] ],
    [ HC, PB+'monazite', [[MI+'monazite_dust', .8], [WAX]] ],
    [ HC, PB+'platinum', [[MI+'raw_platinum', .4], [WAX]] ],
    [ HC, PB+'fire_essence', [[AN+'fire_essence', .25], [WAX]] ],
    [ HC, PB+'silicon', [[AE+'silicon', .5], [WAX]] ],
    [ HC, PB+'magmatic', [[MC+'magma_cream', .3], [WAX]] ],
    [ HC, PB+'silky', [[MC+'string', .5], [WAX]] ],
    [ HC, PB+'blazing_crystal', [[PO+'crystal_blazing'], [WAX]] ],
    [ HC, PB+'refined_obsidian', [[MK+'dust_refined_obsidian', .3], [WAX]] ],
    [ HC, PB+'frosty', [[MC+'snowball'], [MC+'ice', .4], [WAX]] ],
    [ HC, PB+'emerald', [[MC+'emerald', .2], [WAX]] ],
    [ HC, PB+'depth_ingot', [[NA+'depth_ingot', .5], [WAX]] ],
    [ HC, PB+'spirited_crystal', [[PO+'crystal_spirited'], [WAX]] ],
    [ HC, PB+'red_shroom', [[MC+'red_mushroom', .7], [WAX]] ],
    [ HC, PB+'salty', [[MK+'salt'], [WAX]] ],
    [ HC, PB+'infused_iron', [[NA+'infused_iron', .8], [WAX]] ],
    [ HC, PB+'breeze', [[MC+'wind_charge', .3], [WAX]] ],
    [ CB, PB+'breeze', [[MC+'breeze_rod', .5], [WAX]] ],
    [ HC, PB+'ender', [[MC+'ender_pearl', .2], [WAX]] ],
    [ HP, PB+'creeper_bee', [[MC+'gunpowder', .5], [WAX]] ],
    [ HC, PB+'brass', [[Item.of(CR+'brass_nugget', 6)], [WAX]] ],
    [ HC, PB+'chromium', [[Item.of(MI+'chromium_tiny_dust', 3), .4], [WAX]] ],
    [ HC, PB+'biosteel', [[OR+'biosteel_ingot', .6], [WAX]] ],
    [ HC, PB+'manganese', [[Item.of(MI+'manganese_tiny_dust', 3), .6], [WAX]] ]
  ];

  CENTRIFUGE.forEach(recipe => {
    event.custom({
      type: PB+'centrifuge',
      ingredient: {
        items: recipe[0],
        type: PB+'component',
        components: {
          'productivebees:bee_type': recipe[1]
        }
      },
      outputs: recipe[2].map(output => {
        let stack = Item.of(output[0]);
        let outputObj = {
          item: {
            item: stack.id
          },
          min: stack.count,
          max: stack.count
        };

        if (output[1] !== undefined) {
          outputObj.chance = output[1];
        }

        return outputObj;
      }),
      fluid: {
        fluid: CR+'honey',
        amount: 100
      }
    });
  });

  event.replaceOutput(
    { output: PB+'honey_bucket' },
    PB+'honey_bucket',
    CR+'honey_bucket'
  );

  // Remove honey block to honey bucket in crafting table
  event.remove({ id: PB+'honey_bucket_from_block' });

  /**
   * ===============
   * === URANIUM ===
   * ===============
   */

  // Fissile fuel into uranium fuel rods
  event.recipes.mekanism.reaction(
    'modern_industrialization:he_uranium_fuel_rod_depleted',
    'minecraft:water',
    'mekanism:fissile_fuel'
  ).itemOutput('modern_industrialization:he_uranium_fuel_rod')
  .chemicalOutput('mekanism:nuclear_waste')
  .duration(100);
  event.recipes.mekanism.reaction(
    'modern_industrialization:le_uranium_fuel_rod_depleted',
    'minecraft:water',
    'mekanism:fissile_fuel'
  ).itemOutput('modern_industrialization:le_uranium_fuel_rod')
  .chemicalOutput('mekanism:nuclear_waste')
  .duration(100);
  event.recipes.mekanism.reaction(
    'modern_industrialization:uranium_fuel_rod_depleted',
    'minecraft:water',
    'mekanism:fissile_fuel'
  ).itemOutput('modern_industrialization:uranium_fuel_rod')
  .chemicalOutput('mekanism:nuclear_waste')
  .duration(100);

  // Remove nukes
  event.remove({ output: 'oritech:low_yield_nuke' });
  event.remove({ output: 'oritech:nuke' });

  /**
   * =============================
   * === MISCELLANEOUS RECIPES ===
   * =============================
   */

  // Black hole
  event.recipes.oritech.particle_collision(
    'oritech:black_hole_block',
    [
      'minecraft:heavy_core',
      'allthecompressed:antimatter_block'
    ]
  ).time(20000);

  // Stack upgrade Omega tier
  event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_omega_tier' });
  
  // event.shaped(
  //   'sophisticatedbackpacks:stack_upgrade_omega_tier',
  //   [
  //     'UUU',
  //     'UBU',
  //     'UUU'
  //   ],
  //   {
  //     U: 'sophisticatedbackpacks:stack_upgrade_tier_4',
  //     B: 'oritech:black_hole_block'
  //   }
  // );
  event.recipes.create.mechanical_crafting(
    'sophisticatedbackpacks:stack_upgrade_omega_tier',
    [
      'UUUUU',
      'UUUUU',
      'UUBUU',
      'UUUUU',
      'UUUUU'
    ],
    {
      U: 'sophisticatedbackpacks:stack_upgrade_tier_4',
      B: 'oritech:black_hole_block'
    }
  );

  // Hollow logs to tree bark
  event.recipes.create.milling(
    [
      Item.of('farmersdelight:tree_bark', 2),
      CreateItem.of('farmersdelight:tree_bark', 0.5)
    ],
    { tag: 'quark:hollow_logs' }
  );
});