<svelte:options immutable={true} />

<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { ToDo } from "../types/types";
    const dispatch = createEventDispatcher();

    let title: string,
        timestamp: string,
        color: string,
        completed: boolean,
        priority: string,
        inputField: HTMLInputElement;
    export let data: Array<ToDo> = [];

    function addNewTodo(
        event: Event & { readonly submitter: HTMLElement } & {
            currentTarget: EventTarget & HTMLFormElement;
        }
    ) {
        event.preventDefault();
        console.log(timestamp, title, completed, priority, color);
        dispatch(
            "addTodo",
            {
                timestamp,
                title,
                completed,
                priority,
                color,
            } satisfies ToDo,
            {
                cancelable:true
            }
            
        );
    }

    function updateInput(
        event: Event & { currentTarget: EventTarget & HTMLInputElement }
    ) {
        inputField.value = "You Fooled";
    }

    function removeInput(
        event: FocusEvent & { currentTarget: EventTarget & HTMLInputElement }
    ) {
        inputField.value = "";
    }

    $: checkInput = !title || !color || !completed;


    function removeTodo(id ) {
       // console.log("Going to remove Tod with Id - ", id)
        
        dispatch("removeTodo" , id , {
            cancelable:true
        } );

    }
</script>

<main>
    <input
        type="text"
        name="sample"
        bind:this={inputField}
        id="sample"
        on:focus={updateInput}
        on:blur={removeInput}
    />

    <section class="addTodo">
        <header>Add New TODO</header>
        <form on:submit|preventDefault={addNewTodo}>
            <input
                type="text"
                bind:value={title}
                id="title"
                placeholder="Title"
            />
            <input
                type="text"
                bind:value={color}
                id="color"
                placeholder="Color"
            />
            <input
                type="text"
                bind:value={priority}
                id="priority"
                placeholder="Priority"
            />
            <input
                type="text"
                bind:value={timestamp}
                id="timestamp"
                placeholder="TimeStamp"
            />
            <input
                type="checkbox"
                name="completed"
                bind:checked={completed}
                id="completed"
                title="Is Compleyted"
            />
            <label for="completed">Is Completed </label>

            <input type="submit" title="Add New Todo" disabled={checkInput} />
        </form>
    </section>
    <hr />

    {#each data as  {id , title , color , completed , priority , timestamp }  (id)}
        <div class="todoItem" style:background-color={ color}>
            <span>TODO- { id}</span>
            { title}
            <input type="checkbox" checked={ completed} />
            <button on:click={ () => removeTodo(id)}>Remove Todo - {id}</button>
        </div>
    {/each}
</main>

<style>
    .addTodo {
        margin-bottom: 30px;
    }
    .todoItem {
        border-bottom: 1px solid rgba(red, green, blue, 0.5);
        margin-top: 10px;
        padding: 5px 0px;
        color: white;
    }
</style>
