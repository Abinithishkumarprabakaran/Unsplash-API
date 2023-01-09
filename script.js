let pages = 1
async function res_fetching(pages){

    let url = `https://api.unsplash.com/photos/?page=${pages}&client_id=UNaSAicPc7jC1enAuQawpQhK7T8AKf4vPMA0t9p8Yrw&per_page=1000`
    // console.log('Data is Loading')

    try{
        let url_fetch = await fetch(url)

        let url_result = await url_fetch.json()

        for(let i of url_result){
            let img_tag = document.createElement('img')
            img_tag.setAttribute('src', i.urls.thumb)
            document.querySelector('body').append(img_tag)
        }
        
    }
    catch(e){
        console.log(e)
        console.log('Error')
    }

    

    
}

window.addEventListener('scroll', ()=>{
    // console.log('scrolling')
    // console.log(window.scrollY)
    // console.log(window.innerHeight)

    if(window.scrollY + window.innerHeight >= document.body.scrollHeight){
        res_fetching(pages++)
    }
})
res_fetching(pages)

