<script>
    import { onMount } from "svelte";

    let posts =  [];
    
    onMount( async () => {

       const response =  await fetch("https://jsonplaceholder.typicode.com/posts");
       posts = await response.json();
       console.log(posts); 

    });
    

</script>

<main>
    <header>All Posts</header>

    <ul class="m-2">
     {#each posts as post (post.id) }
        
     <li class="m-2 bg-red-200 py-4 text-center   font-bold">
        
        <h3 class=" text-red-500  pb-6"> {post.id} {post.title} </h3>
        <p class="text-xl text-gray-500 px-10">{post.body}</p>
    </li>
     

     {/each}
     </ul>
     
</main>

<style lang="postcss">

    li{
        @apply hover:bg-red-600  
        
    }
     h3{
          @apply hover:text-white
        }
</style>