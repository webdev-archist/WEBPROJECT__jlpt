/*------------------------------------------------------------------------------------------------------------------------
-----------main>nav.resultsList>section>ul>li(>span)-------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
*/
        const lihover = (e)=>{
            $e = e.target && $(e.target) || $(e).find('span')
            
            if( (kanjiTxt = $e.parents('li').find('span.kanji_nav').text()) &&
                bodyDatas.barre_hira !== kanjiTxt
            ){
                let [$hiraUl, $kataUl, $goiUl] = 
                        document.body._ && document.body._.lihover ||
                        [
                            $("article>section>h2.hira+ul"),
                            $("article>section>h2.kata+ul"),
                            $("article>section>h2.goi+ul")
                        ]
                if(!document.body._.lihover){
                    document.body._ = [$hiraUl, $kataUl, $goiUl]
                }


                
                let kanjiObj = historic[kanjiTxt] || bunkajpp.find(elt=>elt.kanji[0].charAt(0) == kanjiTxt)
                
                console.log(kanjiObj.tkm.related_words);
                historic[kanjiTxt] = historic[kanjiTxt] || kanjiObj

                getHiraHTML($hiraUl, kanjiObj)
                getKataHTML($kataUl, kanjiObj)
                getGoiHTML($goiUl, kanjiObj)
                // $kataUl.append($('<li>').html(kanjiObj.tkm.on))
                // $hiraUl.append($('<li>').html(kanjiObj.tkm.kun))
                // $goiUl.append($('<li>').html(kanjiObj.tkm.related_words))

                // arr_historic = [...historic.add(kanjiTxt)] || false


                document.body.datas.barre_hira = kanjiTxt
            }
            console.log(kanjiTxt);
            let $li = $e.parents('li'), strokes_an = 
            $('li.bigger').html($li.html()).addClass('on').append($('<img/>').attr('src",',))
                // $li.append($('<img/>').attr('src",',_1414.stokes_image))
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