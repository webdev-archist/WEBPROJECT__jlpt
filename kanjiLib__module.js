import events from "./events.js"
import KanjiClasses from "./KanjiClasses.js"
// add_cjs NE FONCTIONNE PAS POUR L'INSTANT
function add_cjs(tag){
    tag.cjs = new KanjiClasses[[a]](tag)
}
// add_cjs function not yet finished

/* ---------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------- */

searchKanjiInput.cjs = new KanjiClasses['searchbox__form--#searchKanjiInput'](searchKanjiInput)
searchKanjiSelect.cjs = new KanjiClasses['searchbox__form--#searchKanjiSelect'](searchKanjiSelect)


/* ---------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------- */
//

events.automateTags()

