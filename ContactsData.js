fetch('http://web.sit.kmutt.ac.th/sanit/int493/contacts.php')
    .then(response => response.json())
    .then(data => console.log(data))