/* eslint-disable no-undef */

/**
 * Get random toxic.
 * @returns {string}
 */
module.exports = toxic = () => {
    const kata = [
        'kontol',
        'memek',
        'anjing',
        'babi',
        'monyet',
        'kunyuk',
        'bajingan',
        'asu',
        'bangsat',
        'ngetot',
        'ngete',
        'perek',
        'lonte',
        'bencong',
        'jablay',
        'bego',
        'goblok',
        'idiot',
        'geblek',
        'sinting',
        'tolol',
        'sarap',
        'buta',
        'budek',
        'bolot',
        'ngehe',
        'gembel',
        'brengsek',
        'bgst',
        'knnl',
        'mek',
        'jmbt',
        'asu',
        'anjg',
        'ngtd',
        'ajg',
        'tol',
        'tai',
        'tolo',
        'tlol',
        'asyu',
        'asw',
        'tempik',
        'gay',
        'lesbi',
        'setan',
        'cangcut',
        'bagong',
        'ngentot',
        'goblog',
        'pepek'
        //Tambahin Sendiri Aja
    ]
    const randKata = kata[Math.floor(Math.random() * kata.length)]
    const list = [
      `muka lo kek ${randKata}`, `anda tau ${randKata} ?`,`${randKata} Lo ${randKata}`,
      `ngapa ${randKata} ga seneng?`,`ribut sini lo ${randKata}`,`jangan ngakak lo ${randKata}`,
      `wey ${randKata}!!`,`aku sih owh aja ya ${randKata}`,`ga seneng send lokasi lo ${randKata}`,
      `capek w ${randKata}`, `hari ini kau minat gelut ${kata[2]} ?`, `w tw lo itu ${randKata}`,
      `w ganteng dan lo kek ${randKata}`,`bucin lo ${randKata}`,
      `najis baperan kek ${randKata}`,
      `nge-teh ${randKata}`,`gaya lo sok iye, mukalo kek ${randKata}`,`${randKata} awokwowkok`
    ]
    return list[Math.floor(Math.random() * list.length)]
}

//created by piyo
