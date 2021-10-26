const   lis = document.querySelectorAll('.mcqView__question div.mcqQuestion__header'),
        questions = [], questions_more = [], 
        choices = [], responses = [], 
        explains = []
for(a in lis)if(lis.hasOwnProperty(a)){
    questions.push(escape(lis[a].querySelector(".mcqQuestion__content>p").textContent))
    questions_more.push(Object.keys((tmp_question = lis[a].querySelectorAll(".mcqQuestion__content")))
        .map((arr_key)=>{
            return escape(tmp_question[arr_key].innerHTML)
        })
    )
    choices.push(Object.keys((tmp_answers = lis[a].querySelectorAll(".mcqQuestion__answers li .userContent>p")))
        .map((arr_key)=>{
            return escape(tmp_answers[arr_key].textContent)
        })
    )
    responses.push(
        Object.keys((tmp_rightORwrong_spanNODES = lis[a].querySelectorAll(".mcqQuestion__answers li>div>span")))
            .map((arr_key)=>{
                if(tmp_rightORwrong_spanNODES[arr_key].innerHTML !== "")
                    if(tmp_rightORwrong_spanNODES[arr_key].querySelector('i').className.indexOf('icon-check2') != -1)
                        return 1
                    else{
                        if(lis[a].querySelector(".mcqQuestion__answers li>div>div>input").checked)return 0
                        else return 1
                    } 
                else return 0
            })
    )
    explains.push(lis[a].querySelector('.mcqQuestion__explanation') && escape(lis[a].querySelector('.mcqQuestion__explanation').textContent || ""))
}
console.log(questions, questions_more, responses, choices, explains)

const output = questions.map((e,i)=>{
    return {
        question: e,
        question_more: questions_more[i],
        choices: choices[i],
        responses: responses[i],
        explain: explains[i]
    }
})
console.log(output);
document.write(JSON.stringify(output))



/*---------------------------------------------------------------------------------------------------------*/
function restitute_ouput(data){
    return unescape(data)
}
/*---------------------------------------------------------------------------------------------------------*/




/*

const ask = document.querySelectorAll('.mcqQuestion__content>p:first-of-type')
const ask___ = document.querySelectorAll('.mcqQuestion__content>p')
const choices = document.querySelectorAll('.mcqQuestion__answers>ul')
const explains = document.querySelectorAll('.mcqQuestion__explanation')


function getResp(resp){
    let arr = []
    for(a in resp)if(resp.hasOwnProperty(a)){
        console.log("resp[a]: ")
        console.log(resp.className)
        console.log(resp[a].className)
        // console.log(resp[a].innerHTML)
        arr.push(resp[a].innerText)
    }
    console.log('arr: '+arr)
    return arr
}

let askL = Object.keys(ask).length, i

alert('IL RESTE À RÉCUPÉRER LES REPONSES')


for(i=0;i<askL;i++){
    if(Object.keys(ask___).length != askL)
    let d, childs = ask___[i].childNodes
    if(Object.keys(childs).length>1){
        d = document.querySelectorAll('.mcqQuestion__content')[i]
        ask[i].innerHTML = d.innerHTML
    }
    ask[i].ask = ask[i].innerHTML.replace(/\n/g,"").replace(/</g,"&lt;").replace(/>/g,"&gt;")
}
console.log("ask: "+ask)

for(i=0;i<askL;i++){
    ask[i].choices = getResp(choices[i].childNodes)
}

for(i=0;i<askL;i++){
    ask[i].explains = explain[i].innerText
}



let out = JSON.stringify(ask)
document.write(out)

*/