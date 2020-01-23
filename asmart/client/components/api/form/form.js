import packageMain from "../../../package";
import fetch from 'isomorphic-unfetch';
export async function  sendFeedbackRequestLinkToUs(idForm,data) {
    const url = `${packageMain.proxy}/wp-json/contact-form-7/v1/contact-forms/${idForm}/feedback`;
    const formData  = new FormData();
    formData.append('username', data.username);
    formData.append('userphone', data.userphone);
    data.serviceName  &&  formData.append('servicename', data.serviceName);
    data.serviceTabName  &&  formData.append('servicetabname', data.serviceTabName);
    const response = await fetch(url, {
        method: 'POST', // или 'PUT'
        body: formData
    });
    return await response.json();
}