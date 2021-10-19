/*------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
*/
   function setupnav_liResults($li, li){
        console.log(li);
        console.log(li._);
        
        let li___ = output0[li._['kanji']]
        $li  .append($('<span>').addClass('kanji_nav').html(li._['kanji']).append($('<object>').attr('data', li._.strokes_image)))
             .on('click', liclick)
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

   function setupnav_liResults_2($li, li){
        let li___ = output0[li._['kanji']]
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


    function getHiraHTML($ul, obj){
        $ul.html("").append(
            $('<li>').append($('<div>').html(obj.tkm.kun.map(e=>`<span>${e}</span>`)))
                     .append($('<div>').html(obj.kun))
        )

    }
    function getKataHTML($ul, obj){
        $ul.html("").append(
            $('<li>').append($('<div>').html(obj.tkm.on.map(e=>`<span>${e}</span>`)))
                     .append($('<div>').html(obj.on))
        )

    }
    function getGoiHTML($ul, obj){
          $ul.find('li').append($('<span>').html(obj.tkm.related_words.map(e=>e.kanjis)))
          related_words2HTML($ul, obj)
    }

    function related_words2HTML($ul, obj) {
          $ul.append(
               obj.tkm.related_words.map(e=>
                    $('<figure/>')
                         .append(
                              $('<cite/>').append(e.kanjis.split('').map(e=>{
                                   return $('<em/>').append(e)
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
                                   e.meaning.replace(' - ','').split(', ').map(e=>{
                                        return $('<em/>').html(e)
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