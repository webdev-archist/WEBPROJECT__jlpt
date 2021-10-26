let $card = $('.card.rounded.border-secondary.mb-3')
let titre, sub_titre, p, chuui, obj = {}, resumeLoop = {}, objkeys = [], arrOfDatas = [], all = []
$card.each((i,elt)=>{
    console.log("\n\n\n----------------------------------\n")
    titre = $(elt).find('.card-header.py-3').text()
    sub_titre = $(elt).find('.h5.card-title').text()
    p = escape($(elt).find('.card-text.text-justify.hyphenate').text())
    $(elt).find('.d-block.rounded.bg-secondary.shadow.my-2.mx-1.px-3').each((i_, div)=>{
        alert(i+' ok ')
        chuui += escape(div.outerHTML)
    })
    objkeys = []
    $(elt).find('table.table>thead th').each((i_,elt_)=>{
        objkeys.push($(elt_).text().trim())
    })
    arrOfDatas = []
    $(elt).find('table.table>tbody>tr').each((i_, tr)=>{
        obj = {}
        $(tr).find('td').each((_i, td)=>{
            if(_i<objkeys.length)obj[[objkeys[_i]]] = $(td).text().trim()
        })
        arrOfDatas.push(obj)
        /* console.log(obj) */
    })
    resumeLoop = {titre, sub_titre, p, chuui, arrOfDatas: [...arrOfDatas]}
    all.push(resumeLoop)
    console.log(resumeLoop)
    /* if(i==2)lkfdjj */
})
console.log(all)

