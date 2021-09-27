[
    '{{repeat(5, 7)}}',
    {
      _id: '{{objectId()}}',
      index: '{{index()}}',
      kanji: '{{guid()}}',
      kata: '{{bool()}}',
      hira: '{{floating(1000, 4000, 2, "$0,0.00")}}',
      arrowed_kanji: 'http://placehold.it/32x32',
      radical: '{{integer(20, 40)}}',
      jlpt: '{{random("blue", "brown", "green")}}',
      jouyou: '{{firstName()}} {{surname()}}',
      words: '{{lorem(1, "words")}},{{lorem(1, "words")}}',
      words_: '{{lorem(1, "words")}},{{lorem(1, "words")}}',
      words__: '{{lorem(1, "words")}},{{lorem(1, "words")}}',
      sentences: '{{lorem(1, "sentences")}},{{lorem(1, "sentences")}}',
      bunpouNULL: '{{email()}}',
      translates: '{{lorem(1, "words")}},{{lorem(1, "words")}}',
      nearby_kanjisfrequence: '{{lorem(1, "words")}},{{lorem(1, "words")}}'
    }
  ]