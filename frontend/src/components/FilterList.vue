

<template>
  <form class="filter">
    <label class="searchInput-icon">
      <i class="fas fa-search"></i>
      <input class="search-input" type="search" placeholder="Search Design...">
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
  components: {},

  data() {
    return {};
  },
  methods: {}
};
</script>


<style>
.search-byRank {
  margin-left: 3px;
}
.fa-search {
  font-size: 18px;
  margin-top: 6px;
  margin-right: 4px;
}
.searchInput-icon {
  display: flex;
}
.input-search {
  display: flex;
  flex-direction: column;
}
.filter {
  width: 200px;
  border-right: 2px solid lightgrey;
}

.search-input {
  border: 2px solid lightgray;
  border-radius: 6px;
  padding: 5px;
}

.filter label {
  margin: 10px 20px;
  padding: 0 20px;
  margin-left: 3px;
}

@media (max-width: 860px) {
  .filter {
    border-right: none;
    display: flex;
    flex-direction: row;
        margin: 5% 10%;
  }

  .filter label {
    margin: 1% 5%;
    padding: 0 1%;
    display: flex;
    align-items: center;
  }
  .input-search {
    display: flex;
    flex-direction: row;
  }
}

@media (max-width: 400px){
  .input-search{
      display: none;
  }

  .fa-search{
      display: none;
  }
  .search-input{
      margin: 120px 0px 5px -35px;
      width: 200px;
  }

  .filter{
      margin: auto;
  }
};
</style>