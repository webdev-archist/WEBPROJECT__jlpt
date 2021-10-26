import events from "./events.js"
import kanjilib from "./kanjiLib.js"
import funcdom from "./functionalDom.js"


class SearchKanjiSelect{
    constructor(tag){
        this.tag = tag;        this.$tag = $(tag)
        this.init()
        this.$options = this.$tag.find('option')
        this.$ul = $(searchResuls)
        this.$searchbox = $("body>nav.searchbox")

        console.log(funcdom);
    }

    init(){
        // this.$tag.on('click',function(){alert('clicked')})
        // console.log(this.$tag);
        // console.log(this.$tag.find('option.menu'));
        this.$tag.on('change',(e)=>{
            let option = e.target.selectedIndex
            // console.log(option);
            // console.log(this.$options);
            // console.log(this.$options[option].className);
            if(this.$options[option].className == "menu"){
                this.$searchbox.addClass('z-1')
                alert('MAINTENANT IL Y A DU TRAVAIL A FAIRE\n REGARDE DANS LA CONSOLE')
                console.log("IL FAUT RAJOUTER UN BOUTON 'exit' DANS LE header>menu AFIN DE POUVOIR APPLIQUER XA: `this.$searchbox.removeClass('z-1')`");
            }else this.$searchbox.removeClass('z-1')
        })
        this.$tag.find('option.menu').each((i,elt)=>{
            console.log(elt);
            console.log(elt.className);
            $(elt).on('click',()=>{alert('oui')})
        })
    }
}
class SearchKanjiInput{
    constructor(tag){
        this.tag = tag;        this.$tag = $(tag)
        this.state = this.tag.state = {kanjis: {}, sources: {}}
        this.new = false
        this.$ul_kanjis = $(searchResuls)
        this.$ul_sources = $(searchResuls_sources)
        this.$uls = []
        this.init()
    }

    init(){
        

        this.$tag.on('click', (e)=>{
                // alert('ok')
        }).on('focus', (e)=>this.changeIt(e)
        ).on('change', (e) => this.changeIt(e)
        ).on('blur', (e)=>{
                // console.log('pas ok');
        })




        this.tag.value = '守'
        this.tag.focus()
    }



    changeIt = e => {
        // alert('ok')
        this.new = true 
        
        let value = e.target.value, tmp = []
        , kanji = 'void', word = 'void', sentence = 'void', source = 'void', radical = 'void'
        , allKanjisInInputTag, allSourcesFromKanjisInInputTag, isKanjiOnly, isHiraOnly, isKataOnly
        , occurrenceFilter, kunFilter, onFilter, meaningFilter, sourceFilter, radicalFilter
        
        // kanji = search_a_kanji(value) || false
        // word = search_a_word(value) || false
        // sentence = search_a_sentence(value) || false
        // tmp = {kanji,word,sentence}
        // showResult(tmp)

        // isKanjiOnly = kanjilib.strIsKanjiOnly(value)
        // isHiraOnly = kanjilib.strIsHiraOnly(value)
        // isKataOnly = kanjilib.strIsKataOnly(value)

        allKanjisInInputTag = kanjilib.collectKanjis(value)

        allKanjisInInputTag.map(kanji=>{
            let notfound = "this kanji: '"+kanji+"' does not existe"
            this.state.kanjis = this.state.kanjis[kanji] ? {...this.state.kanjis} : {...this.state.kanjis, [kanji]: finalObject[kanji] || notfound}
        })
        allSourcesFromKanjisInInputTag = []
        for(kanji in this.state.kanjis){tmp=this.state.kanjis[kanji]
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
                this.state.sources[source] = radicalObject[source] || source+": radical non trouvé!"
            }
        })
        // this.state.kanjis[kanji].source.forEach(source=>{

        // })


        this.$ul_kanjis.html('')
        this.$ul_sources.html('')
        console.log(allKanjisInInputTag);
        console.log(this.state.kanjis);

        
        allSourcesFromKanjisInInputTag.forEach(source=>{
            let $li = $('<li/>').html(source)
            $li[0]._ = this.state.sources[source]
            this.$ul_sources.prepend($li)
        })

        allKanjisInInputTag.forEach(kanji=>{


            let $li = $('<li></li>').html(kanji)
            $li[0]._ = this.state.kanjis[kanji]
            

            occurrenceFilter = $li[0]._.occurrence
            kunFilter = $li[0]._.kunyomi
            onFilter = $li[0]._.onyomi
            meaningFilter = $li[0]._.meaning
            sourceFilter = $li[0]._.source.join(',')
            radicalFilter = $li[0]._.radical

            occurrenceFilter = final.filter(e=>e.occurrence<occurrenceFilter && e.kanji != kanji)
                    //  IL FAUT FILTRER LES YOMIKATA, AFIN DE NE GARDER QUE LA PARTIE AVANT LE ”・”
                    // kunFilter = final.filter(e=>e.kunyomi.indexOf(kunFilter)  
                    // onFilter = final.filter(e=>e.onyomi<onFilter)
            meaningFilter = final.filter(e=>meaningFilter.find(mean=>e.meaning.join().indexOf(mean)!=-1) && e.kanji != kanji)
            sourceFilter = final.filter(e=>e.source.map(ee=>sourceFilter.indexOf(ee)!=-1))
            radicalFilter = final.filter(e=>e.radical.map(ee=>radicalFilter.indexOf(ee)!=-1))
            console.log("radicalFilter: ");
            console.log(radicalFilter);


            // $li.on('click', (e) => {alert('o')
                // console.log("e.target._");
                // console.log(e.target._);
                // console.log([this.state.kanjis[e.target.innerHTML]]);
                // let ok = this.searchResultClicked([this.state.kanjis[e.target.innerHTML]])
                // lihover(ok[0].querySelector('li'))
            // })
            this.$ul_kanjis.append($li)
            console.log(this.$ul_kanjis)
            console.log($li)
        })

    }
    searchResultClicked = (kanjiObject) => {
        console.log(kanjiObject);
        // for(a in sample0){
        let $ul, a
        console.log(this.$uls);
        if(this.new){
            $ul = $('<ul>')
            this.$uls.push($ul)
            this.new = false
        }else $ul = this.$uls.at(-1)
        console.log($ul);
        console.log(this.$uls);
        console.log(this.$uls.at(-1));
        console.log("_________\n\n\n");
        $ul[0].ul = $ul[0]
        $ul[0].ul_id = $ul.length
        
        let sample1_=kanjiObject,
        $li = $('<li/>'), li = $li[0]
        li._ = sample1_,
        // li.output0 = output0[li._.kanji],
        li.id = '_'+li._['id']
        // $li .on('mouseover', lihover)
        //     .on("mouseout", liblur)
        // alert(li._)

        funcdom.setupnav_liResults($li)
        funcdom.setupnav_liResults_2($li)


        // $li.append($('<button>').addClass('hira hidden').html('ひら'))

        $ul.append($li)
        
        //FAIRE APPARAÎTRE LE li.bigger ET LA BARRE DES HIRAGANA DÈS QUE L'ON SÉLECTIONNE UN KANJI DANS LA LISTE DE GAUCHE
        setTimeout(()=>{events.lihover(li)}, 100)
            
        this.sanitize_$uls($ul)
        $ul.append($('<li/>').addClass('bigger'))
        $(main).find('>nav>section').append($ul)
        return $ul
    }



    sanitize_$uls($ul){
         console.log("IL FAUT CRÉER ICI UN BOUTON span.close POUR POUVOIR SUPPRIMER UNE LISTE DE RESULTATS");
         console.log("ET CE BOUTON APPELLE UNE FONCTION QUI GERE LA SUPPRIMER DU <ul/> ET LA SUPPRESSION DE SA VARIABLE DANS $uls");
         console.log($ul[0])
         console.log($ul[0].ul)
         console.log($ul[0].ul_id)
         let match_with_$ul = this.$uls.find(e=>e.ul == $ul[0])
         delete this.$uls[match_with_$ul]
         $ul.append($('<span/>').html('X').on('click', e=>{$(e.target).parents('ul').remove()}))
    }
    
}


const KanjiClasses = {
    'searchbox__form--#searchKanjiInput': SearchKanjiInput,
    'searchbox__form--#searchKanjiSelect': SearchKanjiSelect,
}
export default KanjiClasses




