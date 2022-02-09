import Tags from "./Tags.js"


export default class Events extends Tags {
    constructor(container) {
        super(container);

        


    }

    // À UN MOMENT DÉFINI, ACCROCHER DES ÉVÉNEMENT SUR CERTAIN ÉLÉMENTS EN APPELANT CETTE MÉTHODE
    defferred_events = () => {

    }

    //LA BARRE DE GAUCHE
    header_left = () => {
        //L'INPUT: SUPER SOURCE TAG   input#searchKanjiInput
        this.$container.on('click', e=>{
            
        })
        .on('focus', (e)=>this.onChange_searchKanjiInput(e))
        .on('change', (e) => this.onChange_searchKanjiInput(e))
        .on('blur', (e)=>{
            
        })

        // LISTE KANJIS: LES RÉSULTATS DE RECHERCHE 
        $(searchResuls).click('li', e=>{
            if(e.target.nodeName=="LI")this.onClick__searchResultsUl(e.target._)
        }).on('mouseover','li', e=>{
            
        })

        // RADICAUX ET SOURCES: LES RÉSULTATS DE RECHERCHE 
        $(searchResuls_sources).on('click', 'li',
            e=>this.getSourceRelatedKanjis(e)
        )

        //INFOBULLE/ADD_BUTTON: LISTE DE LISTES
        $(listLists__details).on(
            'mouseover', () => {
                $(this).find('ol').append(
                    this.$uls.map(()=>{
                        $('<li/>').html('mettre la date de création de l\'ul')
                    })
                )
            }
        ).find("button.show_or_add").on(
            'click', () => {
                this.slaves.activedList().toggleClass('active')
                this.slaves.section1.append(this.createSectionUl())
                this.updateListLists()
            }
        )
    }

    nav_center = () => {

        // LE CONTAINER DU MILIEU
        const $resultsList = $('.resultsList')
        $resultsList.on('mouseover', 'span.kanji_nav', (e)=>this.lihover(e))
        $resultsList.on('mouseout', 'span.kanji_nav', (e)=>this.liblur(e))
        $resultsList.on('click', 'span.kanji_nav', (e)=>{
            // e.stopPropagation();
            // e.preventDefault();
            this.liclick(e);
            // return false
        })
        $resultsList.on('click', 'span.radical', (e)=>this.getSourceRelatedKanjis(e))
        
        $(absisse).on('change', e=>{
            $('ul:not(.active) .kanji_nav').css({fontSize:100+"px"})
            $('.active .kanji_nav').css({fontSize:e.target.value*100+"px"})
        })
        $resultsList.on('click', 'section>ul:not(.active)', (e)=>{
            if(e.target.nodeName=='UL'){
                this.slaves.activedList().toggleClass('active')
                $(e.target).toggleClass('active')
            }
        })
        $resultsList.on('click', 'ul>li>span.close', (e)=>{
            let tmp
            console.log(this.state.kanjis);
            // for(let a in this.state.kanjis)
            //     if(a == $(e.target).closest('li')[0]._.kanji)
            //         delete this.state.kanjis[a]
            
            $(e.target).closest('ul')[0]._ =  $(e.target).closest('ul')[0]._.filter(kanji=>kanji != $(e.target).closest('li')[0]._.kanji)
            this.updateOl($(e.target).closest('ul'), $(e.target).closest('ul').find('>ol.tinyList'))

            if(!$(e.target).closest('ul').find('>li')[1])
                tmp = $(e.target).closest('ul').find('>span.close')
            this.spanCloseLi(e)
            tmp && tmp.trigger('click')
        })
    }

    main_right = () => {

        //LA BARRE DE DROITE
        $('.kanjiResult .vocabList')
            .on('click', 'cite>em.on', e=>{
                this.liclick(e)
            })
            .on('click', 'cite>em:not(.on)', e=>{
                // alert(searchKanjiInput.cjs.state[$(e.target).text()])
                // alert('ok');
                
                if(!this.slaves.activedList()[0]._[$(e.target).text()])
                // if(!this.state.kanjis[$(e.target).text()])
                    this.onClick__searchResultsUl($(e.target).data('_'))
                searchKanjiInput.value = $(e.target).text()
                searchKanjiInput.focus()
            })
            .on('mouseover', 'cite>em', (e)=>{
                // $('#bigger').data('save', this.innerHTML)
                $('#bigger').html('')[0]._=$(e.target).data('_')
                if(this.isKanji(e.target.innerHTML))this.navResultsList_liResults($('#bigger'))
                this.lihover(e, false)
            })
            .on('mouseout', 'cite>em', (e)=>this.liblur())
        // alert('yuuhouu')
    }
    


    lihover = (e, show_hira = true)=>{
        // alert(e.target)
        

        const $tag = e.target && $(e.target) || $(e).find('span')
        // 
        let if_em = e.target && e.target.innerHTML,
        historic = searchKanjiInput.cjs.state, kanjiTxt
        
        if( (kanjiTxt = $tag.closest('li,figure').find('span.kanji_nav,em:contains('+if_em+')').text()) 
            // && !historic[kanjiTxt] 
            && show_hira 
        ){
            let [$hiraUl, $kataUl, $goiUl] = 
                    searchKanjiInput.html 
                    && searchKanjiInput.html[kanjiTxt] 
                    || [
                        $("article>section>h2.hira+ul"),
                        $("article>section>h2.kata+ul"),
                        $("article>section>h2.goi+ul")
                    ]
            console.log($hiraUl);
            if(!searchKanjiInput.html)searchKanjiInput.html = {}
            else if(!searchKanjiInput.html[kanjiTxt]){
                searchKanjiInput.html[kanjiTxt] = [$hiraUl.html(''), $kataUl.html(''), $goiUl.html('')]
            }


            
            let kanjiObj = historic[kanjiTxt] || finalObject[kanjiTxt]
            // let kanjiObj = historic[kanjiTxt] || bunkajpp.find(elt=>elt.kanji[0].charAt(0) == kanjiTxt)
            
            console.log(kanjiTxt);
            console.log(finalObject[kanjiTxt]);
            console.log(finalObject[kanjiTxt].jukugo);
            console.log(kanjiObj.jukugo);
            historic[kanjiTxt] = historic[kanjiTxt] || kanjiObj

            this.getHiraHTML($hiraUl, kanjiObj)
            this.getKataHTML($kataUl, kanjiObj)
            this.getGoiHTML($goiUl, kanjiObj)
            // $kataUl.append($('<li>').html(kanjiObj.tkm.on))
            // $hiraUl.append($('<li>').html(kanjiObj.tkm.kun))
            // $goiUl.append($('<li>').html(kanjiObj.tkm.related_words))

            // arr_historic = [...historic.add(kanjiTxt)] || false


        }
        console.log(kanjiTxt);
        let $li = $tag.closest('li')
        $('#bigger').html($li.html()).addClass('on')
            // $li.append($('<img/>').attr('src",',_1414.stokes_image))
    }

    liblur = () => {
        $('#bigger').html('').removeClass('on')
    }


    liclick = (e) => {
        console.log('tu as cliqué sur un kanji dans le nav');
        let cont = $('section.hira'), $kanji_nav = $(e.target)
        //TRAVAIL À FAIRE ==>> afficher les hiragana  !!!
        if(e.target.nodeName !== "span" && e.target.className !== "kanji_nav")
            $kanji_nav = $(e.target).closest('li').find('span.kanji_nav')
        show_hiragana(finalObject[$kanji_nav.text()])
    }




    spanClose = (e, closest)=> {
        $(e.target).closest(closest).removeClass('active').remove()
    }
    spanCloseUl = (e)=> {
        this.spanClose(e,"ul")
    }
    spanCloseLi = (e)=> {
        this.spanClose(e,"li")
    }
  
  
}
