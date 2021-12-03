import funcdom from "./functionalDom.js"

const automateTags = () => {
    // ATUTOMATED EVENT ACTIONS



    // LE CONTAINER DU MILIEU
    const $resultsList = $('.resultsList')
    $resultsList.on('mouseover', 'span.kanji_nav', (e)=>lihover(e))
    $resultsList.on('mouseout', 'span.kanji_nav', (e)=>liblur(e))
    $resultsList.on('click', 'span.kanji_nav', (e)=>liclick(e))




    //LA BARRE DE GAUCHE
    $(searchResuls).on('click','li', e=>{
        console.log([e.target._]);
        // alert('ok')
        searchKanjiInput.cjs.searchResultClicked(e.target._)
    }).on('mouseover','li', e=>{
        console.log("yyyyyyyyyyyyyyyyooo");
        // console.log(e);
        // $li = $('<li/>')
        // setupnav_liResults($li)
        // lihover($li)
    })
    $(searchResuls_sources).on('click','li', e=>{
        alert('ok')
    })


    //LA BARRE DE DROITE
    $('.kanjiResult .vocabList')
        .on('click', 'cite>em.on', e=>{
            liclick(e)
        })
        .on('click', 'cite>em:not(.on)', e=>{
            // alert(searchKanjiInput.cjs.state[$(e.target).text()])
            if(!searchKanjiInput.cjs.state.kanjis[$(e.target).text()])
                searchKanjiInput.cjs.searchResultClicked($(e.target).data('_'))
            alert($(e.target).text())
            searchKanjiInput.value = $(e.target).text()
            searchKanjiInput.focus()
            // searchKanjiInput.cjs.changeIt(e)
        })
        .on('mouseover', 'cite>em', (e)=>{
            // $('li.bigger').data('save', this.innerHTML)
            $('li.bigger').html('')[0]._=$(e.target).data('_')
            if(isKanji(e.target.innerHTML))funcdom.setupnav_liResults($('li.bigger'))
            lihover(e, false)
        })
        .on('mouseout', 'cite>em', (e)=>liblur())
    // alert('yuuhouu')
}
/*------------------------------------------------------------------------------------------------------------------------
-----------main>nav.resultsList>section>ul>li(>span)-------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
*/
        const lihover = (e, show_hira = true)=>{
            // alert(e.target)
            
            const $tag = e.target && $(e.target) || $(e).find('span')

            console.log(e);
            console.log(e.target);
            console.log($tag);
            
            let if_em = e.target && e.target.innerHTML,
            historic = searchKanjiInput.cjs.state, kanjiTxt
            if( (kanjiTxt = $tag.closest('li,figure').find('span.kanji_nav,em:contains('+if_em+')').text()) &&
                !historic[kanjiTxt] &&
                show_hira
            ){
                let [$hiraUl, $kataUl, $goiUl] = 
                        searchKanjiInput.html && searchKanjiInput.html[kanjiTxt] 
                        ||
                        [
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

                funcdom.getHiraHTML($hiraUl, kanjiObj)
                funcdom.getKataHTML($kataUl, kanjiObj)
                funcdom.getGoiHTML($goiUl, kanjiObj)
                // $kataUl.append($('<li>').html(kanjiObj.tkm.on))
                // $hiraUl.append($('<li>').html(kanjiObj.tkm.kun))
                // $goiUl.append($('<li>').html(kanjiObj.tkm.related_words))

                // arr_historic = [...historic.add(kanjiTxt)] || false


            }
            console.log(kanjiTxt);
            let $li = $tag.closest('li')
            $('li.bigger').html($li.html()).addClass('on')
                // $li.append($('<img/>').attr('src",',_1414.stokes_image))
        }

        const liblur = ()=>{$('li.bigger').html('').removeClass('on')}


        const liclick = (e) => {
            console.log('tu as cliqué sur un kanji dans le nav');
            let cont = $('section.hira'), $kanji_nav = $(e.target)
            //TRAVAIL À FAIRE ==>> afficher les hiragana  !!!
            if(e.target.nodeName !== "span" && e.target.className !== "kanji_nav")
                $kanji_nav = $(e.target).closest('li').find('span.kanji_nav')
            show_hiragana(finalObject[$kanji_nav.text()])
        }

/*
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
*/
export default {lihover, liblur, liclick, automateTags}