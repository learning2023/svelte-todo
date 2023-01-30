<script lang="ts">

    let name = "vasu";
   
    let isSuccess = true;
    let workPrefs =  ["retire","manager"];
    let pets= ["bird"];
    let favPet= '';
   
   </script>
   
   
   <main>
   
     Hello from Svelte  - Name is - {name} <br>
     <input type="text" bind:value={name}> 
   
     <button on:click={() => alert(name)}>Show Name</button>
   
     <span class:success={isSuccess} class:danger={!isSuccess}>Background </span>
   
     <section>
       <div>
         <p>Current Selection : {JSON.stringify(workPrefs)}</p>
   
         <label for="jobs">Select One Job</label>
   
          <select name="jobs" id="jobs" bind:value={workPrefs} title="Select One" multiple>         
            <option value="manager">manager</option>
            <option value="engineer">engineer</option>
            <option value="worker">worker</option>
            <option value="retire">retire</option>
   
          </select>
   
       </div>
   
     </section>
   
     <h1>CheckBox test </h1>
   
     <fieldset>      
       <legend>What is Your Favorite Pet?</legend>
   
       <p>Selectee Values : {JSON.stringify(pets)}</p>
       
       <input type="checkbox" name="favorite_pet" value="cat" bind:group={pets}>Cats<br>      
       <input type="checkbox" name="favorite_pet" value="dog" bind:group={pets}>Dogs<br>      
       <input type="checkbox" name="favorite_pet" value="bird" bind:group={pets}>Birds<br>      
       <br>      
       <input type="submit" value="Submit now" />      
   </fieldset>    
   
   <h1>Radio Buttons </h1>
   
   <fieldset>      
     <legend>Which is Your Favorite Pet?</legend>
   
     <p>Selectee Values : {JSON.stringify(favPet)}</p>
     
     <input type="radio" name="favorite_pet" value="cat"   bind:group={favPet}>Cats<br>      
     <input type="radio" name="favorite_pet" value="dog" bind:group={favPet}>Dogs<br>      
     <input type="radio" name="favorite_pet" value="bird" bind:group={favPet}>Birds<br>      
     <br>      
     <input type="submit" value="Submit now" />      
   </fieldset>    
   
    
   
   </main>
   
   
   <style>
   .success{
     background-color: green;
   }
   .danger{
     background-color: red;
   }
   
   </style>