const key = 'wzKwRCJWvjjPxk8j1E9QeXs-zTIwtWSf7wcjI-rnFN8'




































const imageQueryParams = '&fit=crop&w=640&h=990'



fetch(`https://api.unsplash.com/search/photos?query=tokyo-spring&client_id=${key}`)
    .then(res => res.json())
    .then(data => {
        const imageURL = `${data.results[Math.floor(Math.random() * 10)].urls.full}${imageQueryParams}`
        document.querySelector('.image').style.background = `url(${imageURL})`
    })