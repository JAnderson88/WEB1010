// READ the giphy API docs: https://developers.giphy.com/
//declar our variables and select our elements
var giphy_endpoint = 'http://api.giphy.com/v1'
var API_KEY = 'KViMhiDSktV4ehpvKK6gDA94DKiIuHbJ'
var searchForm = document.querySelector('#search-form')
var searchInput = searchForm.querySelector("input")
var results = document.querySelector('.results')

// define our functions
function getGifs(path, term){
  results.innerHTML = ""
  $.ajax({
    type: "GET",
    url: `${giphy_endpoint}/gifs/${path}?api_key=${API_KEY}&q=${term}`,
    //http://api.giphy.com/v1/gifs/search?api_key=KViMhiDSktV4ehpvKK6gDA94DKiIuHbJ&q=cat
    dataType: "json",
    success: function(data){
      console.log(data)
      for(var i=0; i<data.data.length; i++){
        results.innerHTML += `
          <img class="image" src="${data.data[i].images.preview_gif.url}">
        `
      }
    },
    error: function(error){
      console.log("There was an error")
    }
  })
}

// call our functions and add our event listeners

searchForm.addEventListener('submit', function(event){
  event.preventDefault()
  // getGifs("search", searchInput.value)
  getGifs("search", "cat")
  getGifs("delete", "cat")
})



