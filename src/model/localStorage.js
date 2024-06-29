export function getLSData(key){
    let data = localStorage.getItem(key);

    if(data){
        data = JSON.parse(data);
    }

    return data;
}

export function setLSData(key, value){
    localStorage.setItem(key, JSON.stringify(value));
    return;
}

export function removeLSData(key){
    localStorage.removeItem(key);
    return;
}