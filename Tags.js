


export default class Tags/* extends SuperClass */{
    constructor(container) {
        this.container = container;        
        this.$container = $(container)
      
    }





        // LA LISTE DES RADICAUX
    get_slave_list2 = (allSourcesFromKanjisInInputTag) => {
        console.log(allSourcesFromKanjisInInputTag);
        return allSourcesFromKanjisInInputTag.map(source=>{
            let $li = $('<li/>').html(source)
            $li[0]._ = this.state.sources[source]
            // this.slaves.list2.prepend($li)
            return $li
        })
        
    }
    get_slave_list1 = (allKanjisInInputTag) => {

        // RÉINITIALISER LES LISTES <UL/> (KANJIS ET SOURCES)
    console.log(this.slaves.list2.html())
        this.slaves.list1.add(this.slaves.list2).add($("span.list1,span.list2")).html('')
    console.log(this.slaves.list2.html())
    console.log(allKanjisInInputTag);
    console.log(this.state.kanjis);

        

        // LA LISTE DES KANJIS
        return allKanjisInInputTag.map(kanji=>{



            let $li = $('<li></li>').html(kanji)
            $li[0]._ = this.state.kanjis[kanji]
            


            let occurrenceFilter = $li[0]._.occurrence
            let kunyomiFilter = $li[0]._.kunyomi
            let onyomiFilter = $li[0]._.onyomi
            let meaningFilter = $li[0]._.meaning
            let sourceFilter = $li[0]._.source.join(',')
            let radicalFilter = $li[0]._.radical

            occurrenceFilter = final.filter(e=>e.occurrence<occurrenceFilter && e.kanji != kanji)
            // IL FAUT FILTRER LES YOMIKATA, AFIN DE NE GARDER QUE LA PARTIE AVANT LE ”・”
            // kunyomiFilter = final.filter(e=>e.kunyomi.indexOf(kunyomiFilter)  
            // onyomiFilter = final.filter(e=>e.onyomi<onyomiFilter)
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
            console.log($li)
            return $li
        })

    }
    
    
    
    
    getNavResultsList = (kanjiObject, ul) => {
        kanjiObject = Array.isArray(kanjiObject) ? kanjiObject : [kanjiObject]
        let $ul = $(ul)
        const navResultsList_liResults = ($li) => {
            //    alert($li)
            console.log($li)
            console.log($li[0]);
            console.log($li[0]._);


            let li___ = finalObject[$li[0]._['kanji']]
            console.log(li___);
            $li.prepend($('<span/>').html('X').addClass('close'))
            $li  .append($('<span>').addClass('kanji_nav').html($li[0]._['kanji']).append($('<object>').attr('data', $li[0]._.strokes_image)))
                //    .on('click', liclick)
            $li.append($('<div>').addClass('kata').html(li___['onyomi'].map((i,j)=>$('<span>').html(i))))

            $li.append($('<div>').addClass('details').html(
                    $('<span>').addClass('jlpt').append(li___["jlpt"]).add($('<span>').addClass('jouyou').append(li___["jouyou"] || '-'))
                    .add($('<span>').addClass('radical').append(
                        li___.radical.map(i=>(
                            $('<span>').html(i)
                        ))
                    ).append($('<i>').html(li___['radical'].length))
                    )
            ))
        }
        const navResultsList_liResults_2 = ($li) => {
            let li___ = finalObject[$li[0]._['kanji']]
            $li.append($('<div>').addClass('off kataBis').html(li___['onyomi'].map((i,j)=>$('<span>').html(i))))
            $li.append($('<div>').addClass('off detailsBis').html(
                    $('<span>').addClass('jlpt').html(li___["jlpt"]).add($('<span>').addClass('jouyou').html(li___["jouyou"] || '-'))
                    .add($('<span>').addClass('radical').append(
                        li___.radical.map(i=>(
                            $('<span>').html(i)
                        ))
                    ).append($('<i>').html(li___['radical'].length))
                    )
            ))
            console.log(li___.radical.map(i=>{
                    console.log($('<span>').html(i))
            }));
        }
        const miniList = ($ul, addKanji) => {
            let $olList = $ul.find('>ol.tinyList')
            $olList.html('')
            $olList.append($('<span/>').html("X").addClass("close"))
            $ul.find('b').html($ul[0]._.length)
            this.updateOl($ul, $olList)
        }
        console.log($ul);
        console.log($ul[0]);

        $ul[0]._.push(kanjiObject[0].kanji)
        console.log($ul);
        // $ul[0].ul_id = $ul.length

        let lis = []
        kanjiObject.forEach((obj)=>{
            let sample1_ = obj
            ,$li = $('<li/>')
            , li = $li[0]

            li._ = sample1_
            ,li.id = '_' + li._['id']
            console.log(sample1_);

            navResultsList_liResults($li)
            navResultsList_liResults_2($li)

            // $ul.append($li)
            miniList($ul, kanjiObject.kanji)
            lis.push(li)
        })
        this.updateListLists()

        if(kanjiObject.length == 1)setTimeout(() => { this.lihover(li) }, 100)
        
        return lis

    }
    updateOl = ($ul, $olList) => {
        $olList.html('')
        $ul[0]._.forEach((elt,i)=>{
            $olList.append($('<li/>').html(elt))
        })
    }
    createSectionUl = () => {
        let $ul = $('<ul/>')
        $ul[0]._ = []
        $ul[0].created = {date: +new Date(), nth: this.$uls.length}
        let template = "<div class='menuContextuel'>\
            <div class='sort_a'></div>\
            <div class='sort_b'></div>\
            <div class='sort_c'></div>\
        </div>"
        , $template = $(template)
        $template.find('.sort_a').on('click', ()=>{alert('a')})
        $template.find('.sort_b').on('click', ()=>{alert('b')})
        $template.find('.sort_c').on('click', ()=>{alert('c')})
        $ul.prepend($template)
        $ul.prepend($('<span/>').html('X').addClass("close").prepend($('<b/>'))
            .on('click', this.spanCloseUl)
        )
        $ul.addClass("active")
        $ul.append($("<ol/>").addClass('tinyList'))
        $ul.append($("<ul/>").addClass('optionsList'))
        // if($('.bigger').length==0)$ul.append($('<li/>').addClass('bigger'))
        $ul[0].ul = $ul[0]
        this.$uls.push($ul)
        console.log($ul[0]);
        return $ul[0]
    }
    updateListLists = () => {
        console.log(this.$uls);
        $('#searchResuls_listLists .show_or_add>span').html(this.$uls.length)
    }



    /*
    ------------------------------------------------------------------------------------------------------------------------
    ------------------------------------------------------------------------------------------------------------------------
    ------------------------------------------------------------------------------------------------------------------------
    */



    getHiraHTML = ($ul, obj) => {
        $ul.html("").append(
            $('<li>').append($('<div>').html(obj.kunyomi.map(e=>`<span>${e}</span>`)))
                    .append($('<div>').html(obj.kunyomi))
        )

    }
    getKataHTML = ($ul, obj) => {
        $ul.html("").append(
            $('<li>').append($('<div>').html(obj.onyomi.map(e=>`<span>${e}</span>`)))
                    .append($('<div>').html(obj.onyomi))
        )

    }
    getGoiHTML = ($ul, obj) => {
        if(obj.jukugo)
            $ul.find('li').append($('<span>').html(obj.jukugo.map(e=>e.kanjis)))
        this.related_words2HTML($ul, obj)
    }

    related_words2HTML = ($ul, obj) => {
    //     alert(obj.kanji)
        !obj.jukugo && $ul.html('')
        obj.jukugo && $ul.append(
            obj.jukugo.map(e=>
                    $('<figure/>')
                        .append(
                            $('<div/>').html(
                                ()=>{
                                        // SYNONYMES AVEC LES JUKUGO
                                        let /*tmp, */tmpbis, matched = [], obj_jukugo_meaning = e.meaning.replace('-','').trim().split(',')
                                        for(let a in synonyms){
                                            // tmp = obj_jukugo_meaning.find(ee=>a.indexOf(ee)!=-1)
                                            tmpbis = synonyms[a].find((ee,i)=>ee==e.kanjis)
                                            if(tmpbis){
                                                tmpbis = synonyms[a].find((ee,i)=>ee!==e.kanjis)
                                                matched.push(tmpbis)
                                            }
                                        }
                                        return matched.join(', ')
                                }
                            )
                            
                        )
                        .append(
                            $('<cite/>').append(e.kanjis.split('').map(ee=>{
                                        let classname = ee == obj.kanji ? "on" : ""
                                        return $('<em/>').addClass(classname).append(ee).data("_", finalObject[ee])
                            })).append(
                                $('<span/>').html(e.hira)
                            )
                        ).append(
                            $('<ul/>').append(
                                $('<li/>').addClass('bushu')
                                .add($('<li/>').addClass('gen'))
                                .add($('<li/>').addClass('bunshou'))
                            )
                        ).append(
                            $('<figcaption/>').append(
                                e.meaning.replace(' - ','').split(', ').map(m=>{
                                        return $('<em/>').html(m)
                                })
                            )
                        )
            )
        )
        return 
    }
}

