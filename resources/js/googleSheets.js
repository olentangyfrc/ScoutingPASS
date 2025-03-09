function setUpGoogleSheets() {
    // const scriptURL = '<SCRIPT URL>'
    // const form = document.querySelector('#scoutingForm')
    // const btn = document.querySelector('#submit')
 
    const scriptURL = 'https://scoutingpass2db.azurewebsites.net/api/ScoutingUpload?code=1xQy8JCYJWL-Nl38fmBDjeVdgNostpzjj4dS4BhvFKSaAzFudFygPQ=='
    //const scriptURL = 'http://localhost:7185/api/ScoutingUpload'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')


    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = true
      btn.innerHTML = "Sending..."

      let fd = getData('kvs')
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}`);
      }

      fetch(scriptURL, { method: 'POST', body: fd })
        .then((response) => { 
              console.log(response);
              //alert(response.statusText);
              //alert('Success!');
              if (response.status == 200)
              {
                alert("Data has been submitted!");
                btn.disabled = false
                btn.innerHTML = "Upload Scouting Data"
                clearForm();
              }
              else
              { 
                btn.disabled = false
                btn.innerHTML = "Upload Scouting Data"
                alert(response.status + " " + response.statusText);
                btn.disabled = false
                btn.innerHTML = "Upload Scouting Data"
              }})
        .catch(error => {
          btn.disabled = false
          btn.innerHTML = "Upload Scouting Data"
              alert('Error!')})
    // form.addEventListener('submit', e => {
    //   e.preventDefault()
    //   btn.disabled = true
    //   btn.innerHTML = "Sending..."

    //   let fd = getData(false)
    //   for (const [key, value] of fd) {
    //     console.log(`${key}: ${value}\n`);
    //   }

    //   fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: fd })
    //     .then(response => { 
    //           alert('Success!', response) })
    //     .catch(error => {
    //           alert('Error!', error.message)})

    //   btn.disabled = false
    //   btn.innerHTML = "Send to Google Sheets"
    })
}
