
const URL_API = "http://154.38.171.54:3000/priceM"

const myHeaders = new Headers({
    "Content-Type": "application/json"
});


const getData = async() => {
    try {
        return await fetch(`${URL_API}`);
		
	} catch(error){
        console.log(error);
	}
    
}

const postData = async (datos) => {
    try {
        return await fetch(`${URL_API}`, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(datos)
        });
    } catch (error) {
        console.error('Error en la solicitud POST:', error.message);
    }
}

export {
    getData as getData,
     postData as postDatas,
};
