class SearchKanjiSelect{
    constructor(tag){
        this.tag = tag;        this.$tag = $(tag)
        this.init()
        this.$options = this.$tag.find('option')
        this.$ul = $(searchResuls)
        this.$searchbox = $("body>nav.searchbox")
    }

    init(){
        // this.$tag.on('click',function(){alert('clicked')})
        console.log(this.$tag);
        console.log(this.$tag.find('option.menu'));
        this.$tag.on('change',(e)=>{
            let option = e.target.selectedIndex
            console.log(option);
            console.log(this.$options);
            console.log(this.$options[option].className);
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
        this.state = this.tag.state = {kanjis: {}}
        this.value = this.tag.value
        this.$ul = $(searchResuls)
        this.new = false
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
        , kanji = 'void', word = 'void', sentence = 'void'
        , allKanjisInRequest, isKanjiOnly, isHiraOnly, isKataOnly,
        occurrenceFilter, kunFilter, onFilter, meaningFilter, sourceFilter, radicalFilter
        
        kanji = search_a_kanji(value) || false
        word = search_a_word(value) || false
        sentence = search_a_sentence(value) || false
        // tmp = {kanji,word,sentence}
        // showResult(tmp)

        isKanjiOnly = strIsKanjiOnly(value)
        isHiraOnly = strIsHiraOnly(value)
        isKataOnly = strIsKataOnly(value)

        allKanjisInRequest= collectKanjis(value)
        console.log(allKanjisInRequest);
        allKanjisInRequest.map(kanji=>{
            let notfound = "this kanji: '"+kanji+"' does not existe"
            this.state.kanjis = this.state.kanjis[kanji] ? {...this.state.kanjis} : {...this.state.kanjis, [kanji]: finalObject[kanji] || notfound}
        })


        this.$ul.html('')
        console.log(this.state.kanjis);
        for(kanji in this.state.kanjis){
            let $li = $('<li></li>').html(this.state.kanjis[kanji].kanji)
            $li[0]._ = this.state.kanjis[kanji]
            


            occurrenceFilter = $li[0]._.occurrence
            kunFilter = $li[0]._.kunyomi
            onFilter = $li[0]._.onyomi
            meaningFilter = $li[0]._.meaning
            sourceFilter = $li[0]._.source
            radicalFilter = $li[0]._.radical

            occurrenceFilter = final.filter(e=>e.occurrence<occurrenceFilter && e.kanji != kanji)
                    //  IL FAUT FILTRER LES YOMIKATA, AFIN DE NE GARDER QUE LA PARTIE AVANT LE ”・”
                    // kunFilter = final.filter(e=>e.kunyomi.indexOf(kunFilter)  
                    // onFilter = final.filter(e=>e.onyomi<onFilter)
            meaningFilter = final.filter(e=>meaningFilter.find(mean=>e.meaning.join().indexOf(mean)!=-1) && e.kanji != kanji)
            sourceFilter = final.filter(e=>e.source<sourceFilter)
            radicalFilter = final.filter(e=>e.radical<radicalFilter)
            console.log(radicalFilter);


            $li.on('click', (e) => {
                let ok = this.searchResultClicked([this.state.kanjis[e.target.innerHTML]])
                // lihover(ok[0].querySelector('li'))
            })
            this.$ul.append($li)
            console.log(this.$ul)
            console.log($li)
        }
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
        
        for(a in kanjiObject){

            let sample1_=kanjiObject[a],
            $li = $('<li/>'), li = $li[0]
            li._ = sample1_,
            li.output0 = output0[li._.kanji],
            li.id = '_'+li._['id']
            $li .on('mouseover', lihover)
                .on("mouseout", liblur)
            // alert(li._)

            setupnav_liResults($li, li)
            setupnav_liResults_2($li, li)


            // $li.append($('<button>').addClass('hira hidden').html('ひら'))

            $ul.append($li)
            
            //FAIRE APPARAÎTRE LE li.bigger ET LA BARRE DES HIRAGANA DÈS QUE L'ON SÉLECTIONNE UN KANJI DANS LA LISTE DE GAUCHE
            if(a==0)lihover(li)
        }
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




