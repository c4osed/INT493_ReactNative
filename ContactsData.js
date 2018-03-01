function fetchContacts() {
    const url="http://web.sit.kmutt.ac.th/sanit/int493/contacts.php"
    return fetch(url)
        .then(response => response.json())
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