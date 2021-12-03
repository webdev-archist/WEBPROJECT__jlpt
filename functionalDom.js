
/*------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
*/
   const setupnav_liResults = ($li) => {
     //    alert($li)
        console.log($li)
        console.log($li[0]);
        console.log($li[0]._);
        
        let li___ = output0[$li[0]._['kanji']]
        $li  .append($('<span>').addClass('kanji_nav').html($li[0]._['kanji']).append($('<object>').attr('data', $li[0]._.strokes_image)))
          //    .on('click', liclick)
        $li.append($('<div>').addClass('kata').html(li___['kata'].map((i,j)=>$('<span>').html(i))))

        $li.append($('<div>').addClass('details').html(
             $('<span>').addClass('jlpt').append(li___["jlpt"]).add($('<span>').addClass('jouyou').append(li___["jouyou"]))
             .add($('<span>').addClass('radical').append(
                  li___.radical.map(i=>(
                       $('<span>').html(i)
                  ))
             ).append($('<i>').html(li___['radical'].length))
             )
        ))
   }

   const setupnav_liResults_2 = ($li) => {
        let li___ = output0[$li[0]._['kanji']]
        $li.append($('<div>').addClass('off kataBis').html(li___['kata'].map((i,j)=>$('<span>').html(i))))
        $li.append($('<div>').addClass('off detailsBis').html(
             $('<span>').addClass('jlpt').html(li___["jlpt"]).add($('<span>').addClass('jouyou').html(li___["jouyou"]))
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


/*
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
*/





/*
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
*/


    const getHiraHTML = ($ul, obj) => {
        $ul.html("").append(
            $('<li>').append($('<div>').html(obj.kunyomi.map(e=>`<span>${e}</span>`)))
                     .append($('<div>').html(obj.kunyomi))
        )

    }
    const getKataHTML = ($ul, obj) => {
        $ul.html("").append(
            $('<li>').append($('<div>').html(obj.onyomi.map(e=>`<span>${e}</span>`)))
                     .append($('<div>').html(obj.onyomi))
        )

    }
    const getGoiHTML = ($ul, obj) => {
          $ul.find('li').append($('<span>').html(obj.jukugo.map(e=>e.kanjis)))
          related_words2HTML($ul, obj)
    }

    const related_words2HTML = ($ul, obj) => {
     //     alert(obj.kanji)
          $ul.append(
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
/*
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
*/





/*
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
*/
const exportall = {
     setupnav_liResults, setupnav_liResults_2, getHiraHTML, getKataHTML, getGoiHTML, related_words2HTML, 
} 
export default exportall