//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const isbn = document.querySelector('input').value
  // console.log(choice)
  const url = `https://openlibrary.org/isbn/${isbn}.json`

  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data.title);
        // localStorage.setItem('books', data.title)
        if(!localStorage.getItem('books')){
          localStorage.setItem('books', data.title )
        } else {
          let books = localStorage.getItem('books')+ ', '+data.title
          localStorage.setItem('books',books)
        }
    document.querySelector('.reads').innerText = localStorage.getItem('books')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

