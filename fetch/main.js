

async function fetchUser() {
  const url = 'https://randomuser.me/api/';
  try {
    const response = await fetch(url,{
      headers: {
        method: 'GET',
        'Content-Type' : 'application/json'
      }
    });
    const json = await response.json();
    return json;
  } 
  catch (err){
    console.log(err);
  }
}

fetchUser().then((json) => {
  const user = json.results[0];
  console.log(user);
  document.getElementById('img').innerHTML += '<img></img>';
  document.getElementById('cell').innerHTML += user.cell;
  document.getElementById('name').innerHTML += user.name.title + '. ' + user.name.first + ' ' + user.name.last;
  document.getElementById('dob').innerHTML += user.dob.date;
  document.getElementById('gender').innerHTML += user.gender;
  document.getElementById('age').innerHTML += user.dob.age;
  document.getElementById('address').innerHTML += user.location.street.number + ' ' + user.location.street.name + ', ' + user.location.city + ', ' + user.location.state + ', ' + user.location.country + ', ' + user.location.postcode;
  document.getElementById('email').innerHTML += user.email;
}).catch(err => {
  console.log(err);
});