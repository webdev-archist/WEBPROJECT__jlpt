import KanjiLogics from "./KanjiLogics.js"
// import kanjilib from "./kanjiLib.js"
// import funcdom from "./functionalDom.js"
// import wanakana from "./WanaKana/src/index.js"

export default class SearchKanjiInput extends KanjiLogics{
    constructor(container){
        super(container)
        this.state = this.container.state = {kanjis: {}, sources: {}}
        this.new = false
        this.slaves = {
            input1: $(searchKanjiInput)
            , list1: $(searchResuls)
            , list2: $(searchResuls_sources)
            , section1: $(main).find('>nav>section')
            , activedList: ()=>$(main).find('>nav>section>ul.active')
        }
        this.$ul_kanjis = $(searchResuls)
        this.$ul_sources = $(searchResuls_sources)
        this.$uls = []
        // console.log(wanakana);
        // this.kanjiDamage = kanjidamage




        // ACCROCHER DES ÉVÈNEMENTS PAR DÉFAUT
        this.header_left()
        this.nav_center()
        this.main_right()
        this.init()

    }

    init(){

        


        this.container.value = '守'
        this.container.focus()
    }



    onChange_searchKanjiInput = (e,list) => {
        // alert('ok')
        this.new = true 
        
        let tmp = []
        // , kanji = 'void', word = 'void', sentence = 'void', source = 'void', radical = 'void'
        , allKanjisInInputTag, allSourcesFromKanjisInInputTag, jukugoListFromAllKanjisInInputTag
        // , isKanjiOnly, isHiraOnly, isKataOnly
        // , occurrenceFilter, kunyomiFilter, onyomiFilter, meaningFilter, sourceFilter, radicalFilter
        console.log(e.target.value);
        console.log(list);



        // kanji = search_a_kanji(value) || false
        // word = search_a_word(value) || false
        // sentence = search_a_sentence(value) || false
        // tmp = {kanji,word,sentence}
        // showResult(tmp)

        

        
        //LES CIBLES HTML À REMPLIR
        let parent = null
        let parents = [this.slaves.list1, this.slaves.list2, $("span.list1"), $("span.list2")]

        //LES RESSOURCES COMME FUTURS PARAMÈTRES
        //PARAMS 1ER NIVEAU
        let value = list || e.target.value
        , [value1, value2] = [value, this.getAllKanjisInInputTag(value)]
        //PARAMS 2D NIVEAU => "applatissement des ressources"
        let [param1, param2, param3] = [value2, this.getAllSourcesFromKanjisInInputTag(value2), this.getJukugoListFromAllKanjisInInputTag(value2)]
        
        //GÉNÉRER LE CONTENU HTML EN FONCTION DES RESSOURCES-PARAMÈTRES
        let childs = [this.get_slave_list1(param1), this.get_slave_list2(param2)]
        childs.push(childs[0].length)
        childs.push(childs[1].length)
        
        // AJOUTER LE HTML
        parents.forEach((parent,i)=>parent.append(childs[i]))
        
        console.log(parents);
        console.log(this.slaves.list1)
        console.log(this.state.kanjis);

    }
    onClick__searchResultsUl = (kanjiObject) => {

        if(!this.slaves.activedList()[0])this.slaves.section1.append(this.createSectionUl())

        let parent = this.slaves.activedList()[0]
        , $parent = $(parent)
        // console.log(parent);

        let [param1, param2] = [kanjiObject, parent]
        , childs = []
        // console.log(param2._)

        if (param2._.includes(param1.kanji))
            alert('ce kanji est déjà dans cette liste')
        else {
            childs = this.getNavResultsList(param1, param2)
        }
        console.log(childs);

        // parent.append(childs)
        childs.forEach((child,i)=>parent.append(child))

        $('article.kanjiResult>section.hira>span.thekanji').html(kanjiObject.kanji)
    }   



    
}





