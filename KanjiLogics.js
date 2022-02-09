import Events from "./Events.js"



export default class KanjiLogics extends Events {
    constructor(container) {
        super(container);
    }


    
    getAllKanjisInInputTag(inputValue){

        // {} LAMBDA FUNCTION RETURNING AN OBJECT ABOUT THE NATURE OF THE PARAM VALUE
        const whatIs = (value) => ({
            isKanjiOnly: this.strIsKanjiOnly(value),
            isHiraOnly: this.strIsHiraOnly(value),
            isKataOnly: this.strIsKataOnly(value),
            // console.log(isHiraOnly)
        })
        const updateKanjisState = (allKanjisInInputTag) => {
            let notfound 
            allKanjisInInputTag.forEach(kanji=>{
                notfound = "this kanji: '"+kanji+"' does not existe"
                // SI LE KANJI N'EXISTE PAS DANS LA this.state.kanjis, NE RIEN CHANGER (renvoyer le meme élément)
                // S'IL EXISTE, EXTRAIRE L'OBJET LE KANJI DE finalObject ET LE RAJOUTER À this.state.kanjis
                this.state.kanjis = this.state.kanjis[kanji] ? this.state.kanjis 
                : {...this.state.kanjis, [kanji]: finalObject[kanji] || notfound}
            })
        }
        const {isKanjiOnly,isHiraOnly,isKataOnly} = whatIs(inputValue)

        let allKanjisInInputTag = isKanjiOnly ? this.collectKanjis(inputValue)
        :isHiraOnly ? this.kunyomiFilter(inputValue)
        :isKataOnly ? this.onyomiFilter(inputValue) 
        // : IL MANQUE 2 CAS DE MIXTE
        // 1°) SI C'EST UN MIXTE KANJI+HIRA => jukugo OU vocabulaire OU grammaire OU...
        // 2°) ET SI C'EST UN AUTRE MIXTE
        : this.collectKanjis(inputValue)

        updateKanjisState(allKanjisInInputTag)
        return allKanjisInInputTag
    }
    
    getJukugoListFromAllKanjisInInputTag = (allKanjisInInputTag) => {
        if(allKanjisInInputTag.length==0) return []

        let nbr_jukugo = 0, nbr_kanji = allKanjisInInputTag.length, inc = 1
        while(inc<nbr_kanji){
            nbr_jukugo += inc++
        }
        
    console.log("Il y a "+(nbr_jukugo*2)+" combinaisons de jukugo possibles")
    console.log("Voici tous les objects de jukugo associés à chaque kanji de la recherche");
        return jukugo.list.filter(i=>i.i==allKanjisInInputTag.find(e=>e.i))
    }

    getAllSourcesFromKanjisInInputTag = (allKanjisInInputTag) => {
    console.log(allKanjisInInputTag)
        let kanji,tmp,allSourcesFromKanjisInInputTag = []
        for(kanji of allKanjisInInputTag){
            tmp=this.state.kanjis[kanji]
    console.log(tmp);
            let source = tmp.source
            let radical = tmp.radical
            let total = [...source, ...radical]
    console.log(total);
            allSourcesFromKanjisInInputTag = [...allSourcesFromKanjisInInputTag, ...total]
        }
        allSourcesFromKanjisInInputTag = Array.from(new Set(allSourcesFromKanjisInInputTag))
        allSourcesFromKanjisInInputTag.forEach(source=>{
            if(!this.state.sources[source]){
                // this.state.sources[source] = radicalObject[source] || source+": radical non trouvé!"
            }
        })
        return allSourcesFromKanjisInInputTag
    }
    getSourceRelatedKanjis = (e) => {
        if(e.target.parentNode == searchResuls_sources)
            $(e.target).addClass('active')
        
        let list = sourceObject[e.target.textContent]
        list.shift()
        console.log(list);
        let list_ = list.map(elt=>finalObject[elt])
        console.log(list);
        // this.slaves.input1.val(list.join())
        // this.slaves.input1[0].focus()
        this.onChange_searchKanjiInput(e, list.join())
        // this.onClick__searchResultsUl(list_)
        setTimeout(()=>{this.slaves.input1.val("")},1000)
        // this.slaves.input1[0].value = ""

    }



    search_in_tkmjson = (req) => {
        return final.find(e=>e.kanji==req)
    }
    s_kanji = (term) => {
        return bunkajpp.find(e=>{
            return e.kanji[0].charAt(0)==term
        })
    }





    // BOOLEAN FUNCTIONS

    isKanji = (ch) => {
        return (ch >= "\u4e00" && ch <= "\u9faf") ||
        (ch >= "\u3400" && ch <= "\u4dbf");
    }

    isHira = (ch) => {
        return ch >= "\u3040" && ch <= "\u309f"
    }

    isKata = (ch) => {
        return ch >= "\u30a0" && ch <= "\u30ff"
    }


    strIsKataOnly = (str) => {
        let cpt=[], tmp
        str.split('').forEach(e=>{
            cpt.push([isHira(e), isKanji(e), isKata(e)].every((e,i)=>e!==[true, true, false][i]))
        })
        return cpt.every(e=> e == true)
    }
    strIsHiraOnly = (str) => {
        let cpt=[], tmp
        str.split('').forEach(e=>{
            cpt.push([isKata(e), isKanji(e), isHira(e)].every((e,i)=>e!==[true, true, false][i]))
        })
        return cpt.every(e=> e == true)

    }
    strIsKanjiOnly = (str) => {
        console.log(str)
        let cpt=[], tmp
        str.split('').forEach(e=>{
            cpt.push([isKata(e), isHira(e), isKanji(e)].every((e,i)=>e!==[true, true, false][i]))
        })
        return cpt.every(e=> e == true)
    }


    collectKanjis = (value) => {
        let arr = []
        let valueArr = value.split("").forEach(
            caracter=>{if(isKanji(caracter) && arr.indexOf(caracter) == -1)arr.push(caracter)}
        )
        return arr
    }
    kunyomiFilter = (hira) => {
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
    onyomiFilter = (kata) => {
        final.filter(e=>{
            e.onyomi.map(on=>{
                on.replace('.','').indexOf(kata)!=-1
            })
        })
    }








    // À FAIRE: CES 3 FONCTIONS ! ! !
    search_a_kanji = (termToSearch, r=null) => {
        templateKanjiNav.forEach((obj,i) => {
            if(obj.kanji == termToSearch)
                r = obj
        })
        return r
    }
    search_a_word = (termToSearch) => {
    }
    search_a_sentence = (termToSearch) => {
    }
}


