//console.log('Write your code here');

fetch("http://localhost:3000/current-exhibits")
    .then(r => r.json())
    .then(jsonData => renderExhibit(jsonData[0]))

//jsonData.forEach(renderExhibi)

function renderExhibit(data) {
    const newTitle = document.querySelector("#exhibit-title")
    newTitle.textContent = data["title"]

    //const newTicketButton = document.querySelector("#buy-tickets-button")

    const newTicketsBought = document.querySelector("#tickets-bought")
    newTicketsBought.textContent = data["tickets_bought"]

    const newExhibitDescription = document.querySelector("#exhibit-description")
    newExhibitDescription.textContent = data["description"]

    const image = document.createElement("img")
    const exhibitPictureSpot = document.querySelector("#exhibit-image")
    exhibitPictureSpot.append(image)
    const exhibitImg = document.querySelector("#exhibit-image")
    image.src = data["image"]
    exhibitImg.src = data["image"]
    exhibitImg.alt = data["title"]

    // const artistNameSpot = documnet.querySelector("")



    const commentSection = document.querySelector("#comments-section")
    data["comments"].forEach((singleComment) => {
        const pTag = document.createElement("p")
        pTag.textContent = singleComment
        commentSection.append(pTag)

    })
}








// const comment_form = document.querySelector("#comment-form")
// comment_form.addEventListener("submit" , (e)=> {
//     e.preventDefault()
//     addComents(e.target["comment-input"].value)

// })
// function addComents (comment){
//     const p = document.createElement("p")
//     p.textContent = commnet
//     const commnet_section = document.querySelector("#commnets-section")
//     commnet_section.append(c)
   

    
// }
// fetch("http://localhost:3000/current-exhibits")
//     .then(r => r.json())
//     .then(data => (data[0]))

// function displayArt(art) {
//     const title = document.querySelector("#exhibit-title")
//     const tickets = document.querySelector("#tickets-bought")
//     const description = document.querySelector("#exhibit-description")
//     const comments = document.querySelector("#comments-section")
//     const img = document.querySelector("#exhibit-image")

//     title.textContent = art.title
//     tickets.textContent = art.tickets_bought
//     description.textContent = art.description
//     img.src = art.image



// }


