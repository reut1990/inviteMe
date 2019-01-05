   <template>
  <section>
    <invaitor-name
      @connectToCmpPart="connectToCmpPart"
      @showEditor="showEditor"
      :data="dynamicCmps[0].data"
    ></invaitor-name>
    <img class="and" src="../../assets/and.png" alt="and">
    <invaitor-name
      @connectToCmpPart="connectToCmpPart"
      @showEditor="showEditor"
      :data="dynamicCmps[1].data"
    ></invaitor-name>
  </section>
</template>
  


    
