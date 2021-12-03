import KanjiLogics from "./KanjiLogics.js"
// import kanjilib from "./kanjiLib.js"
// import funcdom from "./functionalDom.js"
// import wanakana from "./WanaKana/src/index.js"

export default class SearchKanjiSelect extends KanjiLogics{
    constructor(tag){
        super()
        this.container = tag;        this.$container = $(tag)
        this.init()
        this.$options = this.$container.find('option')
        this.$ul = $(searchResuls)
        this.$searchbox = $("body>nav.searchbox")
    }

    init(){
        // this.$container.on('click',function(){alert('clicked')})
        // console.log(this.$container);
        // console.log(this.$container.find('option.menu'));
        this.$container.on('change',(e)=>{
            let option = e.target.selectedIndex
            // console.log(option);
            // console.log(this.$options);
            // console.log(this.$options[option].className);
            if(this.$options[option].className == "menu"){
                this.$searchbox.addClass('z-1')
                alert('MAINTENANT IL Y A DU TRAVAIL A FAIRE\n REGARDE DANS LA CONSOLE')
                console.log("IL FAUT RAJOUTER UN BOUTON 'exit' DANS LE header>menu AFIN DE POUVOIR APPLIQUER XA: `this.$searchbox.removeClass('z-1')`");
            }else this.$searchbox.removeClass('z-1')
        })
        this.$container.find('option.menu').each((i,elt)=>{
            console.log(elt);
            console.log(elt.className);
            $(elt).on('click',()=>{alert('oui')})
        })
    }
}