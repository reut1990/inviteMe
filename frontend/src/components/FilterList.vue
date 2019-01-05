

<template>

 <form class="filter">

     <label class ="searchInput-icon">
         <i class="fas fa-search"></i>
         <input class="search-input" type="search"  placeholder="Search Design...">
     </label>
     
     
      <!-- <h6>Filter By:</h6> -->
    <div class="input-search">
     <label>
         <input type="checkbox" value="lastCreated">Last Created
     </label>
      <label>
         <input type="checkbox" value="lastCreated" class="search-byRank">By Rank
     </label>
      <label>
         <input type="checkbox" value="lastCreated">Most Used
     </label>
    </div>
      
 </form>
</template>

<script>
// import userLogin from '@/components/UserLogin.vue'

export default {
    components:{
     
    },

    data(){
      return {
      
      }
    },
    methods:{
      
      }
    }
</script>


<style>
.search-byRank{
    margin-left:3px;
}
.fa-search{
    font-size: 18px;
    margin-top: 6px;
    margin-right: 4px;
}
.searchInput-icon{
    display: flex; 
}
.input-search{
    display: grid;
}
.filter{
    width:200px;
    border-right: 2px solid lightgrey;
 }

.search-input{
    border: 2px solid lightgray;
    border-radius: 6px;
    padding: 5px;
}

 .filter label{
    margin: 10px 20px;
    padding: 0 20px;
    margin-left:3px;
  
 }
</style>