import packageMain from "../../../package";
import fetch from 'isomorphic-unfetch';
export async function  sendFeedbackRequestLinkToUs(idForm,data) {
    const url = `${packageMain.proxy}/wp-json/contact-form-7/v1/contact-forms/${idForm}/feedback`;
    const response = await fetch(url, {
        method: 'POST', // или 'PUT'
        body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}