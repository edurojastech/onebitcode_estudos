const listaIds = document.querySelectorAll('.css-1m6b80e')
const titlesVideo = document.querySelectorAll('[data-testid="content-card-title"]')
const listVideos = []

for (let i = 0; i < listaIds.length; i++) {
  listVideos.push({
    nomeVideo: titlesVideo[i].textContent,
    idVideo: listaIds[i].href.replace('https://vimeo.com/manage/videos/', '')
  })  
}

console.log(listVideos)