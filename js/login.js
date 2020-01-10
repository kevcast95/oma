function login(){
    user = document.getElementById('user').value;
    pass = document.getElementById('pass').value;
    const end_point = api_url + 'login'
    fetch(end_point,{
        method: 'POST',
        headers: {
          "accept": "application/json",
          'Content-Type':'application/json'
        },
        body: JSON.stringify({user:user,
          password:pass    
      })
      }).then(auth=>auth.json())
      .then(response=>{
          console.log(response);
          window.location="gui.html"
          load(response)
      })
}
function load(r){
  console.log('r', r);
  
}
