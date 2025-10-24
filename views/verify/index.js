const textInfo = document.querySelector('#text-info');

// Verify User
(async () => {
    try {
        const token = window.location.pathname.split('/')[3];
        const id = window.location.pathname.split('/')[2];
        console.log(id);
        const { data } = await axios.patch(`/api/users/${id}/${token}`);
        console.log(data);
        //window.location.pathname = '/login';
    } catch (error) {
        textInfo.innerHTML = error.response.data.error;
       // console.log(error.response.data.error);
    }
        

})()
