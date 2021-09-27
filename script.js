console.log(jsonkanjidb);
sample0=jsonkanjidb[0]
container = document.createElement('div')
concated = ""
templateKanjiNav = [
     {
          id: '6151e64ad81d9272de9f63d1',
          index: '#',
          kanji: '哀',
          kata: 'アイ',
          hira: 'あわれむ,あわれ',
          arrowed_kanji: 'https://i.picsum.photos/id/425/200/300.jpg?hmac=P1vjZ6T-wo-aULK7NbbLYxIaV92_0q56o0BFWcWOdmo',
          radical: 'ー・口',
          jlpt: '５',
          jouyou: '２',
          words: '哀愁,哀切',
          words_: '哀れむ',
          words__: '喜怒哀楽,喜怒哀楽',
          sentences: '私は怠けているんです',
          bunpouNULL: '',
          translates: 'pathétique, deuil, tristesse',
          nearby_kanjisfrequence: '怠'
     }
]
i=0
sample1 = templateKanjiNav
$ul = $('<ul>')
$liBigger = $('<li/>').addClass('bigger')
$ul.append($liBigger)
// for(a in sample0){
for(a in sample1){sample1_=sample1[a]
     $li = $('<li/>')
     $li[0].id = '_'+sample1_['id']

     // $span = $('<span>').addClass('kanji_nav').html(sample1_['kanji'])
     $li.append($('<span>').addClass('kanji_nav').html(sample1_['kanji']))

     // $div = $('<div>').addClass('kata').html(sample1_['kata'])
     $li.append($('<div>').addClass('kata').html(sample1_['kata']))

     // $div = $('<div>').addClass('details').html(sample1_['details'])
     $li.append($('<div>').addClass('details').html(sample1_['details']))

     // $div = $('<button>').addClass('hira hidden').html('ひら')
     $li.append($('<button>').addClass('hira hidden').html('ひら'))
     $ul.append($li)
     
/*
     $span = $li.append
     span.setAttribute('class','')

     
     concated += "<b>"+i+"</b>"+a+" ;;"
     div = document.createElement('div')
     title = document.createElement('h4')
     title.textContent = a
     div.appendChild(title)
     value = document.createElement('p')
     value.textContent = sample0[a]
     div.appendChild(value)
     container.appendChild(div)
     i++
*/
}
console.log('ok');
console.log($ul);
container.innerHTML = concated + "<hr/>" + container.innerHTML
$(main).find('>nav>section').append($ul)
