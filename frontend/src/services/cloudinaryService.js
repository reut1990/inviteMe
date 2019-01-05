const CLOUD_NAME = "dx7ihpmp8"

var UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
const UPLOAD_PRESET = 'invite-me-guest';

// on submit call to this function
export async function uploadImg(elInput) {
    // ev.preventDefault();
   
    // A function to be called if request succeeds
    function onSuccess(res) {
        return res.secure_url;
    }

    const res = await doUploadImg(elInput, onSuccess); 
    // console.log(res);
    return res;
}

function doUploadImg(elInput, onSuccess) {
    var formData = new FormData();
    formData.append('file', elInput.files[0])
    formData.append('upload_preset', UPLOAD_PRESET);

    return fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData
    })
    .then(function (response) {
        return response.json()
    })
    .then(onSuccess)
    .catch(function (error) {
        console.error(error)
    })
}
