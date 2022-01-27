'use strict'

let d = document

let images = [
    {
        source: "https://images.unsplash.com/photo-1642589077590-613b12b37d15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        tag: 'food'
    },
    {
        source: "https://images.unsplash.com/photo-1601312539654-6c279c939e31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2270&q=80",
        tag: 'food'
    },
    {
        source: "https://images.unsplash.com/photo-1640612034253-16de7b2bc746?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        tag: 'food'
    },
    {
        source: "https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        tag: 'food'
    },
    {
        source: "https://images.unsplash.com/photo-1586718520704-f7f9db04b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        tag: 'food'
    },
    {
        source: "https://images.unsplash.com/photo-1505576633757-0ac1084af824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        tag: 'food'
    },
    {
        source: "https://images.unsplash.com/photo-1641464995627-1aca5f9719a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        tag: 'nature'
    },
    {
        source: "https://images.unsplash.com/photo-1642235558456-7f7d195fe3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        tag: 'nature'
    },
    {
        source: "https://images.unsplash.com/photo-1640062128336-4fe49a69fc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        tag: 'nature'
    },
    {
        source: "https://images.unsplash.com/photo-1640094289612-38cad00d4db8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        tag: 'nature'
    },
    {
        source: "https://images.unsplash.com/photo-1642087652645-372a6e46b04a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        tag: 'nature'
    },
    {
        source: "https://images.unsplash.com/photo-1641327955771-3cc0c158b3a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
        tag: 'nature'
    },
    {
        source: "https://images.unsplash.com/photo-1642360157037-588c5eb09822?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80",
        tag: 'arch'
    },
    {
        source: "https://images.unsplash.com/photo-1638732551063-524f83671c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        tag: 'arch'
    },
    {
        source: "https://images.unsplash.com/photo-1639933123754-6bb35974e61c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        tag: 'arch'
    },
    {
        source: "https://images.unsplash.com/photo-1605956093065-da539902deb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        tag: 'arch'
    },
    {
        source: "https://images.unsplash.com/photo-1624005285695-1bc0d4004a88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        tag: 'arch'
    },
    {
        source: "https://images.unsplash.com/photo-1639914756841-8e7b6a37ab95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        tag: 'arch'
    }
]

images.sort(() => (Math.random() > .5) ? 1 : -1);

paintImages( images )

let listButton = d.querySelectorAll('.main__button')
let listImg = d.querySelectorAll('.main__li')
let nodeModal = d.querySelector('#modal')

filter('all')

for(let i = 0; i < listButton.length; i++){
    listButton[i].addEventListener('click', clickButton)
}

function clickButton( e ){
    for(let i = 0; i < listButton.length; i++){
        listButton[i].classList.remove('active')
    }

    this.classList.add('active')

    filter(this.id)
    
}

function filter( tag ){

    
    for(let i = 0; i < listImg.length; i++){
        listImg[i].classList.remove('active')

        if( listImg[i].dataset.tag === tag){
            listImg[i].classList.add('active')
        } else if ( tag === 'all'){
            listImg[i].classList.add('active')
        }

    }

}
 
for(let li = 0; li < listImg.length; li++){
    listImg[li].addEventListener('click', function(){

        let nodeModal = d.querySelector('#modal')
        let nodeContainer = d.querySelector('.modal__container')

        nodeContainer.innerHTML = ''

        let nodeImg = d.createElement('img')

        nodeImg.src = this.childNodes[0].src
        nodeImg.classList.add('modal__img')

        nodeImg.addEventListener('click', function(e){
            e.stopPropagation()
        })

        nodeContainer.appendChild(nodeImg)

        nodeModal.classList.add('active')

    })
}

function paintImages( arrayImg ){

        let nodeUl = d.querySelector('.main__ul')

        for(let i = 0; i < arrayImg.length; i++){

            let nodeLi = d.createElement('li')
            let nodeImage = d.createElement('img')

            nodeLi.classList.add('main__li')
            nodeImage.classList.add('main__img')

            nodeLi.dataset.tag = arrayImg[i].tag
            nodeImage.src = arrayImg[i].source

            nodeLi.appendChild(nodeImage)
            nodeUl.appendChild(nodeLi)

        }
}

nodeModal.addEventListener('click', function(){

    nodeModal.classList.remove('active')

})