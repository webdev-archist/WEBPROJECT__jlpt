/*------------------------------------------------------------------------------------------------------------------------
-----------main>nav.resultsList>section>ul>li(>span)-------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
*/
        const lihover = (e)=>{
            if( (kanjiTxt = ($e = $(e.target)).parents('li').find('span.kanji_nav').html()) &&
                bodyDatas.barre_hira !== kanjiTxt
            ){
                let $hiraUl = $("article>section>h2.hira+ul"),
                    $kataUl = $("article>section>h2.kata+ul"),
                    $goiUl = $("article>section>h2.goi+ul")
                let kanjiObj = historic[kanjiTxt] || bunkajpp.find(elt=>elt.kanji[0].charAt(0) == kanjiTxt)
                
                console.log(kanjiObj.tkm.related_words);
                historic[kanjiTxt] = historic[kanjiTxt] || kanjiObj

                getHiraLists($hiraUl, kanjiObj)
                getKataLists($kataUl, kanjiObj)
                getGoiLists($goiUl, kanjiObj)
                // $kataUl.append($('<li>').html(kanjiObj.tkm.on))
                // $hiraUl.append($('<li>').html(kanjiObj.tkm.kun))
                // $goiUl.append($('<li>').html(kanjiObj.tkm.related_words))

                // arr_historic = [...historic.add(kanjiTxt)] || false


                document.body.datas.barre_hira = kanjiTxt
            }
            $('li.bigger').html($e.parents('li').html()).addClass('on')
                
        }

        const liblur = ()=>{$('li.bigger').html('').removeClass('on')}


        function liclick(e){
            console.log('tu as cliqué sur un kanji dans le nav');
            let cont = $('section.hira'), $kanji_nav = $(e.target)
            //TRAVAIL À FAIRE ==>> afficher les hiragana  !!!
            if(e.target.nodeName !== "span" && e.target.className !== "kanji_nav")
                $kanji_nav = $(e.target).parents('li').find('span.kanji_nav')
            show_hiragana(search_a_kanji($kanji_nav.html()))
        }

/*
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
*/