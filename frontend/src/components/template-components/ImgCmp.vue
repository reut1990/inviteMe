<template>
    <section class="upload-Img-section">
         <div class="img-upload-section">
         <input type="file" style="display:none" ref="fileInput" accept="image/*" @change="onFilePicked " >

        <button class="btn-upload-img" @click="onPickFile">Upload Background Image</button>
    </div>

    </section>
</template>

<script>
export default {
      data() {
    return {
      image:'',
      imageUrl:'',
      name:'',
     
    };
  },
    methods: {
    onPickFile(){
        this.$refs.fileInput.click();
      },
      onFilePicked(event){
          const files = event.target.files;
          let filename = files[0].name;
          if(filename.lastIndexOf('.')<= 0){
              return alert ('please add a valid file!')
          }
          const fileReader = new FileReader()
          fileReader.addEventListener('load',() =>{
              this.imageUrl = fileReader.result})
    //            this.$emit("styleUpdate", {
    //             field: "background",
    //             css: { backgroundImage: 'url('+this.imageUrl+')' }
    //   });
           
         
          fileReader.readAsDataURL(files[0]) 
          this.image=files[0]
        console.log('this.imageUrl:' , this.image)
      },
      
   

  }

}
</script>

<style>
.btn-upload-img {
  padding: 10px;
  margin: 20px;
  width: 80%;
  border-radius: 10px;
  background: #504f4f;
  border: none;
  color: white;
  font-size: 15px;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
}

</style>
