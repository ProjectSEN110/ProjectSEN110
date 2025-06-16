export function fetchNews(prompt) {
  const apikey = '4270624d534285a75aeed626ebf3b436';
  const url = `https://gnews.io/api/v4/search?q=${prompt}&lang=en&country=us&max=10&apikey=${apikey}`;

  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.articles; 
    })
    .catch(function (error) {
      console.error('Error fetching news:', error);
    });
}



