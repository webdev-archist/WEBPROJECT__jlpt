



// SEARCH FUNCTIONS

function search_in_tkmjson(req){
    return final.find(e=>e.kanji==req)
}
function s_kanji(term){
    return bunkajpp.find(e=>{
        return e.kanji[0].charAt(0)==term
    })
}





// BOOLEAN FUNCTIONS

function isKanji(ch) {
    return (ch >= "\u4e00" && ch <= "\u9faf") ||
	(ch >= "\u3400" && ch <= "\u4dbf");
}

function isHira(ch) {
    return ch >= "\u3040" && ch <= "\u309f"
}

function isKata(ch) {
    return ch >= "\u30a0" && ch <= "\u30ff"
}


function strIsKataOnly(str){
    let cpt=[], tmp
    str.split('').forEach(e=>{
        cpt.push([isHira(e), isKanji(e), isKata(e)].every((e,i)=>e!==[true, true, false][i]))
    })
    return cpt.every(e=> e == true)
}
function strIsHiraOnly(str){
    let cpt=[], tmp
    str.split('').forEach(e=>{
        cpt.push([isKata(e), isKanji(e), isHira(e)].every((e,i)=>e!==[true, true, false][i]))
    })
    return cpt.every(e=> e == true)

}
function strIsKanjiOnly(str){
    let cpt=[], tmp
    str.split('').forEach(e=>{
        cpt.push([isKata(e), isHira(e), isKanji(e)].every((e,i)=>e!==[true, true, false][i]))
    })
    return cpt.every(e=> e == true)
}


function collectKanjis(value){
    let arr = []
    let valueArr = value.split("").forEach(
        caracter=>{if(isKanji(caracter))arr.push(caracter)}
    )
    return arr
}
const kunyomiFilter = (hira) => {
    let list = final.filter(elt=>{
        let arr = elt.kunyomi.map(kun=>{
         //    console.log(e.kunyomi.length==0,e.kunyomi[0]=='',e.kanji,e.kunyomi,kun,hira,kun.replace('.','').indexOf(hira),hira.replace('.','').indexOf(kun))
            return elt.kunyomi.length==1 && elt.kunyomi[0]=='' ? false : kun.replace('.','').indexOf(hira)!=-1
        })
        // console.log(arr)
        return arr.find(e=>e===true) !== undefined
    })
    return list.map(e=>e.kanji)
}
const onyomiFilter = (kata) => {
     final.filter(e=>{
         e.onyomi.map(on=>{
             on.replace('.','').indexOf(kata)!=-1
         })
     })
}








// À FAIRE: CES 3 FONCTIONS ! ! !
const search_a_kanji = (termToSearch, r=null) => {
    templateKanjiNav.forEach((obj,i) => {
         if(obj.kanji == termToSearch)
              r = obj
    })
    return r
}
const search_a_word = (termToSearch) => {
}
const search_a_sentence = (termToSearch) => {
}










export default {search_in_tkmjson, s_kanji, isKanji, isHira, isKata, strIsKataOnly, strIsHiraOnly, strIsKanjiOnly, collectKanjis, kunyomiFilter, search_a_kanji, search_a_word, search_a_sentence}
