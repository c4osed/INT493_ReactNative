function fetchContacts() {
    return fetch('http://web.sit.kmutt.ac.th/sanit/int493/contacts.php')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.contacts;
    })
        .catch(error => {
            console.error(error);
        });
}

export default {
    fetchContacts: fetchContacts
};