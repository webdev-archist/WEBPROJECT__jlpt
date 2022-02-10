document.body._ = {}


// KANJIS OBJECT VARIABLE LIST:
// final, output0, output01, output1, output11, bunkajpp, 
// bunkajp, kanjidb, tkm,
// in_final_Notin_kanjidb, 



// let notjukugo=[]
// final = final.map(elt=>{
//      let a = jukugo.list.find(e=>e.i == elt.kanji)
//      elt = {...elt, jukugo: a && a.jukugo || []}
//      if(!a)notjukugo.push(elt.kanji)
//      return elt
// })
// console.log(final[210])
// console.log(notjukugo)



// REFORMATING A LITTLE THE DATAS FROM final BEFORE USING IT
// IT IS MAYBE NOT NECESSARY ANYMORE
/*
final = final.map(elt=>{
     console.log(elt)
     return {...elt, source: [], 
          radical: elt.radical.replace(' ','').split('(').map(ee=>ee.replace(')','').split(',')).join().split(','), 
          onyomi: elt.onyomi.replace(' ','').split(","), 
          kunyomi: elt.kunyomi.replace(' ','').split(","), 
          nanori: elt.nanori.replace(' ','').split(","), 
          meaning: elt.meaning.replace(' ','').split(","), 
          // grade: [elt.grade], 
     }
})
*/


// ADDING .source ATTRIBUTE TO  final 
let notsource=[]
/*final = */final.map(elt=>{
     let a = kanjiDictionary.elements.edges.filter(e=>e.data.target == elt.kanji)
     if(!a)notsource.push(elt.kanji)
     else elt.source.push(...a.map(e=>e.data.source).join().split(','))

     return elt
})
console.log(final[210])
console.log(notsource)
// alert(illpairs)
// ADDING REFORMATED DATAS FORM  JSON5 OBJECTS TO final 
let in_final_Notin_kanjidb=[], cpt=0, cpt___
/*
final = final.map((elt,i)=>{
     cpt___ = ""
     let bunka = bunkajpp.find(e=>e.kanji[0].charAt(0) == (elt).kanji)
     // alert(bunka+" "+elt.kanji)
     // console.log(bunka && bunka.obs);
     let a = bunka && bunka.kanjidb || kanjidb.find(e=>e.Kanji == elt.kanji),
         t = bunka && bunka.tkm || {}
     cpt++; cpt___ = a ? a.id : "i."+cpt___+" 絶対にil faut trouver un moyen de mettre qlqchose d'interessant ici (si le kanji encore n'est pas un de la variable bunkajp). "
     if(!a)in_final_Notin_kanjidb.push(elt.kanji)
     initialiserForUnicode()
     // console.log(nnn);
     // while(elt.kanji != String.fromCharCode("\\u"+getCompteur().charCodeAt()))
     //      compter()

     let selfKanjiDamage = {}
     tmp = illpairs.find(e=>e[0].indexOf(elt.kanji)!=-1 || e[1].indexOf(elt.kanji)!=-1) || '-'
     selfKanjiDamage.illpairs = tmp 
     let tmpbis = []
     for(a in dupe){
          tmp = Array.from(new Set(collectKanjis(dupe[a].join())))
          // alert(tmp)
          tmp = tmp.find(e=>e === elt.kanji)
          if(tmp)tmpbis.push(dupe[a])
     }
//
// MAINTENANT IL FAUT TROUVER LES SYNONYMES AVEC LE KANJI EN COURS elt.kanji
//
     selfKanjiDamage.dupe = tmpbis 
     // if(tmp)alert(tmp+"   "+elt.kanji)
     
     
     return { ...t,
          ...elt, 
          kanjiDamage: selfKanjiDamage,
          codes: {
               unicode: "\\u"+nnn.toString(16),
               codeAt: elt.kanji.charCodeAt(),
               htmlCode: "&#",
               cssCode: "\\",
               hexCode: "?",
          },
          jlpt: a && a['JLPT-test'] || "-",
          meaning: [...elt.meaning, {on:a && a['Translation of On'] || "-", kun:a && a['Translation of Kun'] || "-"}],
          id: cpt,
          id_bunkajp: cpt___,
          grade: [
               a && a.Grade || "-", elt.grade, a && {"Kanji Classification": a['Kanji Classification']} || "-"
          ],
          on: a["# of On"] && {
               "#": a["# of On"] || '-', 
               "#mean": a["# of Meanings of On"] || '-', 
               meaning: a["Translation of On"] || '-', 
               joyo_in: a["On within Joyo"] || '-', 
               joyo_out: a["On Ratio beyond Joyo without Proper Nouns"] || '-', 
               properNames_in: a["On Ratio with Proper Nouns"] || '-', 
               properNames_out: a["On Ratio without Proper Nouns"] || '-', 
               freq_joyo_in: a["Acc. Freq. On within Joyo"] || '-', 
               freq_joyo_out: a["Acc. Freq. On Ratio beyond Joyo without Proper Nouns"] || '-', 
               freq_properNames_in: a["Acc. Freq. On Ratio with Proper Nouns"] || '-', 
               freq_properNames_out: a["Acc. Freq. On Ratio without Proper Nouns"] || '-', 
          } || {},
          kun: a["# of Kun"] && {
               "#": a["# of Kun"] || '-', 
               "#mean": a["# of Meanings of Kun"] || '-', 
               meaning: a["Translation of Kun"] || '-', 
               joyo_in: a["Kun within Joyo"] || '-', 
               joyo_out: a["Kun Ratio beyond Joyo without Proper Nouns"] || '-', 
               properNames_in: a["Kun Ratio with Proper Nouns"] || '-', 
               properNames_out: a["Kun Ratio without Proper Nouns"] || '-', 
               freq_joyo_in: a["Acc. Freq. Kun within Joyo"] || '-', 
               freq_joyo_out: a["Acc. Freq. Kun Ratio beyond Joyo without Proper Nouns"] || '-', 
               freq_properNames_in: a["Acc. Freq. Kun Ratio with Proper Nouns"] || '-', 
               freq_properNames_out: a["Acc. Freq. Kun Ratio without Proper Nouns"] || '-', 
          } || {},
          details: a["Kanji Frequency with Proper Nouns"] && {
               properNames_in: a["Kanji Frequency with Proper Nouns"] || '-', 
               properNames_out: a["Kanji Frequency without Proper Nouns"] || '-'
          } || {},
          examples: bunka && bunka.examples.map(e=>e.split('，')).join().split(',') || [],
          observations: bunka && bunka.obs || []
     }
})
console.log(final[210])
console.log(in_final_Notin_kanjidb)

// INVERTING THE KANJI OBJECT BY CONVERTING IT TO AN JSON OBJECT
// AND MAKING THE OBJECT REFERED BY KANJI (MAKING OBJECT KEY MATCHING KANJI)
// EX: finalObject = {"守": {id........}, "好": {id........}, ........}
*/
const finalObject={}
final.forEach(elt=>{
     finalObject[elt.kanji] = elt
})
// console.log(finalObject);















/*
const jlptObject = []
final.forEach(e=>{
     if(!jlptObject[parseInt(e.jlpt)]) jlptObject[parseInt(e.jlpt)] = []
     jlptObject[parseInt(e.jlpt)].push(e)
})

let occurrenceObject = {}, strates = [250,500,1000,2000,3000,5000,7000,10000]
final.forEach(e=>{
     let tmp = 0
     //IL FAUT CRÉER UN ARRAY CONTENANT LES TRANCHES D'OCCURRENCE SOUHAITÉ
     //PUIS, VÉRIFIÉ SI LA key EXISTE DÉJÀ DANS L'ARRAY
     //ET ENFIN, LE PUSH À L'ARRAY
     if(e.occurence<strates[0])
          tmp = 0
     else{
          strates.forEach(s=>{
               if(e.occurrence<s && tmp==0)
                    tmp = s
          })
     }
     if(!occurrenceObject[tmp+""])
          occurrenceObject[tmp+""] = []
     occurrenceObject[tmp+""].push(e)
})
*/

// INVERTING THE RADICAL OBJECT BY CONVERTING IT TO AN JSON OBJECT
// AND MAKING THE OBJECT REFERED BY RADICAL (MAKING OBJECT KEY MATCHING RADICAL)
// EX: radicalObject = {"舌": {index........}, "舛": {index........}, ........}
const radicalObject={}
let tmp
radicals.forEach(elt=>{
     tmp = elt.radical.replace('(',',')
     tmp = tmp.replace(')','')
     tmp = tmp.split(',')
     tmp.map(e_parsedRadicalString=>{
          radicalObject[e_parsedRadicalString] = elt
          radicalObject[e_parsedRadicalString].similars = tmp
     })
})
console.log(radicalObject);



// INVERTING THE KANJIDIC OBJECT BY CONVERTING IT TO AN JSON OBJECT
// AND MAKING THE OBJECT REFERED BY SOURCE (MAKING OBJECT KEY MATCHING SOURCE)
// EX: sourceObject = {"䍃": ['謡', '遥'], "不": ['丕', '否', '歪', '杯'], ........}
const sourceObject_={}
kanjiDictionary.elements.edges.map(e=>{
     if(!sourceObject_[e.data['source']])sourceObject_[e.data['source']] = []
     sourceObject_[e.data['source']].push(sourceObject_[e.data['target']])
})
console.log("sourceObject_")
console.log(sourceObject_)
const sourceObject={}
let dontmatch=[], match=[], nbr = 0
for(a in radicalObject){
     tmp = a.replace('(',',')
     tmp = tmp.replace(')','')
     tmp = tmp.split(',')
     nbr += tmp.length
     tmp.forEach(e=>{
          if(!sourceObject_[e]) dontmatch.push(e)
          else match.push(e)
     })
}
radical_dont_match_any_source = {}
dontmatch.forEach(e=>{
     radical_dont_match_any_source[e] = ""
})
sourceObject["radical_dont_match_any_source"] = radical_dont_match_any_source

match.forEach(e=>{
// for(e in match)if(match.hasOwnProperty(a)){
     // console.log(e);
     // console.log(sourceObject[e]);
     if(!sourceObject[e])sourceObject[e] = []
     console.log(Array.isArray(sourceObject[e]));
     sourceObject[e].push(radicalObject[e])
})
sourceObject["source_dont_match_any_radical"] = {}
kanjiDictionary.elements.edges.forEach(e=>{
     if(!sourceObject[e.data.source])sourceObject[e.data.source] = []
     sourceObject[e.data.source].push(e.data.target)
     if(!radicalObject[e.data.source])sourceObject["source_dont_match_any_radical"][e.data.source] = ""
})
console.log("sourceObject")
console.log(sourceObject)




// 0) CRÉER UN SUPER JSON REPRENANT LES 4 FICHIERS JSON DE TKM, ET EN AGGRÉGEANT TOUTES LES VALEURS DES 3 AUTRES FICHIERS DANS kanji.js
// 0° DANS CE SUPER JSON, RAJOUTER MAINTENANT LES VALEURS DE BUNKAJPP
// 1) CRÉER UNE FONCTION QUI PARCOURS table.urlist POUR COLLER UN ATTRIBUT "._" AUX TD CONTENANT LE KANJI
// 2) CRÉER DES JSON, POUR:
          // par source => en bouclant sur kanjidic.js pour l'aggréger, puis en bouclant sur cette aggrégation, comparer à bunkajpp pour trouver les kanji qui matchent, et rajouter aux kanjis de bunkajpp la liste des sources
          // par radical => en bouclant sur radicals.js puis en comparant les clé sur bunkajpp
          // => LES RADICAUX EN CLÉ, ET LA LISTE ASSOCIÉ DE KANJI AYANT CE RADICAL EN VALUER
          // => rad = {'一': [liste des kanji ayant pour radical '一'],....}
          // par JLPT => en retravaillant bunkajpp
          // par grade => en retravaillant bunkajpp
          // par strokes => en retravaillant bunkajpp
          // par tranche de frequence => en retravaillant bunkajpp
// INTÉGRER DANS BUNKAJPP LES JUKUGO








     let templateKanjiNav = bunkajpp.map((e)=>(
          {
               id: e.kanjidb.id,
               // index: '',
               kanji: e.tkm.kanji,
               kata: e.tkm.on,
     on: e.tkm.on,
               hira: e.tkm.kun,
     kun: e.tkm.kun,
                    nanori: e.tkm.nanori,
               arrowed_kanji: e.strokes_image,
     strokes_image: e.strokes_image,
                    strokes: e.strokes,
               radical: [''],
               jlpt: '',
               jouyou: '',
               words: [''],
               words_: [''],
               words__: [''],
               sentences: [''],
               bunpouNULL: [''],
               translates: [''],
               nearby_kanjisfrequence: ['']
          }
     ))

     let output0 = {}, output01 = [], 
     output11 = ["tous les kanji qui sont dans bunkajpp, mais pas dans tkm"],
     output1 = {"tous les kanji": "qui sont dans bunkajpp, mais pas dans tkm"}
     // let final___templateKanjiNav = final.map((e)=>{
     bunkajpp.forEach((elt,i)=>{


          let kanji = elt.kanji[0].charAt(0)
          e = search_in_tkmjson(kanji)
          
          output0[kanji] = {
               id: elt.kanjidb.id,
               // index: '',
               kanji,
               kata: elt.tkm.on || [],
     onyomi: e && e.on,
               hira: elt.tkm.kun || [],
     kunyomi: e && e.kun,
                    nanori: e && e.nanori || elt.tkm.nanori,
               arrowed_kanji: elt.tkm.strokes_image,
     strokes_image: elt.tkm.strokes_image,//
                    strokes: e && e.strokes || elt.tkm.strokes,
               radical: e && e.radical || [],
               jlpt: elt.kanjidb["JLPT-test"],
               jouyou: '',//
               words: {//
                    no_compound: strIsKanjiOnly(elt.examples[0].replace('、','')) ? elt.examples[0].split('、') : [],
                    compound: elt.examples[1] && !strIsKanjiOnly(elt.examples[1].replace('、','')) ? elt.examples[1].split('、') : !strIsKanjiOnly(elt.examples[0].replace('、','')) ? elt.examples[0] : []
               },
               words_: elt.tkm.related_words,//
               words__: [''],//
               sentences: [''],//
               occurence: elt.tkm.occurrence,
               translates: [elt.tkm.meaning, {on:elt.kanjidb['Translation of On'], kun:elt.kanjidb['Translation of Kun']}],
               grade: [elt.tkm.grade, elt.kanjidb.Grade, elt.kanjidb['Kanji Classification']],
               details: {
                    properNames_in: elt.kanjidb["Kanji Frequency with Proper Nouns"], 
                    properNames_out: elt.kanjidb["Kanji Frequency without Proper Nouns"]
               },
               // included_year: elt.kanjidb["Year of Inclusion"],
               observation: elt.obs,//
               bunpouNULL: [''],
               on: {
                    "#": elt.kanjidb["# of On"], 
                    "#mean": elt.kanjidb["# of Meanings of On"], 
                    meaning: elt.kanjidb["Translation of On"], 
                    joyo_in: elt.kanjidb["On within Joyo"], 
                    joyo_out: elt.kanjidb["On Ratio beyond Joyo without Proper Nouns"], 
                    properNames_in: elt.kanjidb["On Ratio with Proper Nouns"], 
                    properNames_out: elt.kanjidb["On Ratio without Proper Nouns"], 
                    freq_joyo_in: elt.kanjidb["Acc. Freq. On within Joyo"], 
                    freq_joyo_out: elt.kanjidb["Acc. Freq. On Ratio beyond Joyo without Proper Nouns"], 
                    freq_properNames_in: elt.kanjidb["Acc. Freq. On Ratio with Proper Nouns"], 
                    freq_properNames_out: elt.kanjidb["Acc. Freq. On Ratio without Proper Nouns"], 
               },
               kun: {
                    "#": elt.kanjidb["# of Kun"], 
                    "#mean": elt.kanjidb["# of Meanings of Kun"], 
                    meaning: elt.kanjidb["Translation of Kun"], 
                    joyo_in: elt.kanjidb["Kun within Joyo"], 
                    joyo_out: elt.kanjidb["Kun Ratio beyond Joyo without Proper Nouns"], 
                    properNames_in: elt.kanjidb["Kun Ratio with Proper Nouns"], 
                    properNames_out: elt.kanjidb["Kun Ratio without Proper Nouns"], 
                    freq_joyo_in: elt.kanjidb["Acc. Freq. Kun within Joyo"], 
                    freq_joyo_out: elt.kanjidb["Acc. Freq. Kun Ratio beyond Joyo without Proper Nouns"], 
                    freq_properNames_in: elt.kanjidb["Acc. Freq. Kun Ratio with Proper Nouns"], 
                    freq_properNames_out: elt.kanjidb["Acc. Freq. Kun Ratio without Proper Nouns"], 
               },
               // ___rest: {bunkajpp, tkm_json: e}
          }
          output01[parseInt(elt.kanjidb.id)-1] = output0[kanji]
          if(!e){
               output11.push({...templateKanjiNav[0], kanji: elt.kanji, ___rest: {tkm_json: elt}})
               output1[elt.kanji] = {...templateKanjiNav[0], kanji: elt.kanji, ___rest: {tkm_json: elt}}
          }
          
     })
     // console.log(final___templateKanjiNav);
     // document.body.innerHTML = JSON.stringify(final___templateKanjiNav)
     let arr = []
     bunkajpp.forEach(e=>{
          if(!output0[e.kanji])
               arr.push(e.kanji[0].charAt(0))
     })
     console.log(arr.length);








     const historic = new Object()
     $(document).ready(function(){
          let tmp=$('.headerbarBranding>.headerbarBranding__problematique')
          $("header").on('mouseover',()=>{
               $('body').prepend(tmp)
          }).on('mouseout',()=>{$('.headerbarBranding').append(tmp)})
          // var tableKanjis = urlist.querySelectorAll('tr>td:first-of-type>font:first-of-type')
          // var $tableKanjisTDs = $('table#urlist td:first-of-type')
          // $tableKanjisTDs.on('click', (e)=>{
          //      $e = $(e.target).parents('td').length == 0 ? $(e.target) : $(e.target).parents('td')
          //      let clicked_kanji = $e.find('font:first-of-type').html();
          //      searchResultClicked([output0[clicked_kanji]])
          // })
     })
     setTimeout(()=>{
     }, 100)


     // GESTION DU BLOC CENTRAL, LE BODY>MAIN>NAV.kanjiResult

     templateKanjiNav = [
          {
               id: '',
               index: '',
               kanji: '',
               kata: [''],
               hira: [''],
               arrowed_kanji: '',
               radical: [''],
               jlpt: '',
               jouyou: '',
               words: [''],
               words_: [''],
               words__: [''],
               sentences: [''],
               bunpouNULL: [''],
               translates: [''],
               nearby_kanjisfrequence: ['']
          }
     ]
     bunka_table_template = $('<tr><td><font size="7">{{kanji}}</font><font size="6">（{{kanji_var}}）</font></td><td>{{on-kun}}</td><td>{{compounds}}</td><td>　</td></tr>')
     kanjidb_toSanitize = {
          "id": "1",
          "Kanji": "亜",
          "Strokes": "7",
          "Grade": "7",
          "Kanji Classification": "象形 Pictographic",
          "JLPT-test": "1",
          "Name of Radical": "Ni",
          "Radical Freq.": "6",
          "Reading within Joyo": "ア",
          "Reading beyond Joyo": "",
          "# of On": "1",
          "On within Joyo": "a",
          "Kanji ID in Nelson": "81",
          "# of Meanings of On": "5",
          "Translation of On": "rank next, come after, Asia, sub-, -ous (in acids)",
          "#KJ_infl": "0",
          "# of Kun within Joyo without inflections": "0",
          "Kun within Joyo": "-",
          "# of Meanings of Kun": "0",
          "Translation of Kun": "-",
          "Year of Inclusion": "1981",
          "Kanji Frequency with Proper Nouns": "13829",
          "Acc. Freq. On with Proper Nouns": "13493",
          "Acc. Freq. Kun with Proper Nouns": "0",
          "On Ratio with Proper Nouns": "1.000",
          "Acc. Freq. On beyond Joyo with Proper Nouns": "0",
          "Acc. Freq. Kun beyond Joyo with Proper Nouns": "0",
          "Acc. On Ratio beyond Joyo with Proper Nouns": "1.000",
          "Kanji Frequency without Proper Nouns": "1457",
          "Acc. Freq. On without Proper Nouns": "1392",
          "Acc. Freq. Kun without Proper Nouns": "0",
          "On Ratio without Proper Nouns": "1.000",
          "Acc. Freq. On beyond Joyo without Proper Nouns": "0",
          "Acc. Freq. Kun beyond Joyo without Proper Nouns": "0",
          "On Ratio beyond Joyo without Proper Nouns": "1.000",
          "Left Kanji Prod.": "2",
          "Right Kanji Prod.": "6",
          "Acc. Freq. Left Prod.": "559",
          "Acc. Freq. Right Prod.": "519",
          "Symmetry": "S",
          "Left Entropy": "0.596933123",
          "Right Entropy": "1.289550023",
          "Left1sound": "a",
          "Left1freq": "519",
          "Left2sound": "",
          "Left2freq": "0",
          "Left3sound": "",
          "Left3freq": "0",
          "Left4sound": "",
          "Left4freq": "0",
          "Left5sound": "",
          "Left5freq": "0",
          "Left6sound": "",
          "Left6freq": "0",
          "Right1sound": "a",
          "Right1freq": "559",
          "Right2sound": "",
          "Right2freq": "0",
          "Right3sound": "",
          "Right3freq": "0",
          "Right4sound": "",
          "Right4freq": "0",
          "Right5sound": "",
          "Right5freq": "0",
          "Right6sound": "",
          "Right6freq": "0",
          "Right7sound": "",
          "Right7freq": "0"
     }
     
     
     
     // sample1 = templateKanjiNav
     sample1 = 
     {
          id: '6151e64ad81d9272de9f63d1',
          index: '#',
          kanji: '哀',
          kata: ['アイ','オケ'],
          hira: ['あわれむ','あわれ'],
          arrowed_kanji: 'https://i.picsum.photos/id/425/200/300.jpg?hmac=P1vjZ6T-wo-aULK7NbbLYxIaV92_0q56o0BFWcWOdmo',
          radical: ['ー','口'],
          jlpt: '５',
          jouyou: '２',
          words: ['哀愁','哀切'],
          words_: ['哀れむ'],
          words__: ['喜怒哀楽','喜怒哀楽'],
          sentences: ['私は怠けているんです'],
          bunpouNULL: [''],
          translates: ['pathétique, deuil, tristesse'],
          nearby_kanjisfrequence: ['怠']
     }
     kanjidb_toSanitize___ = []
     // console.log(kanjidb);
     sample0=kanjidb[0]
     i=0
     $uls = []


     function sanitize_$uls($ul){
          console.log("IL FAUT CRÉER ICI UN BOUTON span.close POUR POUVOIR SUPPRIMER UNE LISTE DE RESULTATS");
          console.log("ET CE BOUTON APPELLE UNE FONCTION QUI GERE LA SUPPRIMER DU <ul/> ET LA SUPPRESSION DE SA VARIABLE DANS $uls");
          console.log($ul[0])
          console.log($ul[0].ul)
          console.log($ul[0].ul_id)
          let match_with_$ul = $uls.find(e=>e.ul == $ul[0])
          delete $uls[match_with_$ul]
          $ul.append($('<span/>').html('X').on('click', e=>$(e.target).parents('ul').remove()))
     }





















     // FORMULAIRE BAS GAUCHE ON DESKTOP

     let matched = (val, value)=>{alert(val+"\n"+value)}
     
     const show_hiragana = (obj) => {
          alert('=> see console')
          console.log('je suis show_hiragana');
          console.log(obj);
     }
     const showResult = (obj) => {
          alert('see console')
          console.log(obj);
     }




     // SEARCH FUNCTIONS

     function search_in_tkmjson(req){
          return final.find(e=>e.kanji==req)
      }
     function s_kanji(term){
          return bunkajpp.find(e=>{
               return e.kanji[0].charAt(0)==term
          })
     }

     // BOOLEAN FUNCTIONS

     function isKanji(ch) {
          return (ch >= "\u4e00" && ch <= "\u9faf") ||
          (ch >= "\u3400" && ch <= "\u4dbf");
     }
     
     function isHira(ch) {
          return ch >= "\u3040" && ch <= "\u309f"
     }
     
     function isKata(ch) {
          return ch >= "\u30a0" && ch <= "\u30ff"
     }
     
     
     function strIsKataOnly(str){
          let cpt=[], tmp
          str.split('').forEach(e=>{
          cpt.push([isHira(e), isKanji(e), isKata(e)].every((e,i)=>e!==[true, true, false][i]))
          })
          return cpt.every(e=> e == true)
     }
     function strIsHiraOnly(str){
          let cpt=[], tmp
          str.split('').forEach(e=>{
          cpt.push([isKata(e), isKanji(e), isHira(e)].every((e,i)=>e!==[true, true, false][i]))
          })
          return cpt.every(e=> e == true)
     
     }
     function strIsKanjiOnly(str){
          let cpt=[], tmp
          str.split('').forEach(e=>{
          cpt.push([isKata(e), isHira(e), isKanji(e)].every((e,i)=>e!==[true, true, false][i]))
          })
          return cpt.every(e=> e == true)
     }
     
     
     function collectKanjis(value){
          let arr = []
          let valueArr = value.split("").forEach(
          caracter=>{if(isKanji(caracter))arr.push(caracter)}
          )
          return arr
     }
     
     var nnn
     function initialiserForUnicode(i = parseInt('4e00',16)){
          i = parseInt(i,16)
          if (isNaN(i)) {
               nnn=0;
          }
          // la valeur maximale est FFFFFFFFFFFF (12 F en hexadécimal), soit 281474976710655 en décimal :
          else if (i>281474976710655) {
               nnn=281474976710655;
               }
          else {
               nnn=i;
          }
     }

     function compter(){
          nnn=nnn+1;
     } 
     function getCompteur(){
          return nnn.toString(16)
     }

     function decompter(){
          if (n!=0) 
               {
               nnn=nnn-1;
               }
     } 
