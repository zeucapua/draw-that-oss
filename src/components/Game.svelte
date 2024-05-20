<script lang="ts">
  import { setUpCanvas } from "../lib/canvas.ts";
  let currentColor : string;
  let drawingCanvas : HTMLCanvasElement;
  let drawingContainer : HTMLDivElement;

  $: {
    if (drawingContainer && drawingCanvas) {
      setUpCanvas(drawingContainer, drawingCanvas);
    }
  }
</script>


<form>
  <div bind:this={drawingContainer} class="w-fit h-fit border"> 
    <p>Color: {currentColor}</p>
    <fieldset class="flex gap-4">
      <legend class="sr-only">Color</legend>
      {#each ["black", "red", "blue", "orange", "green", "purple"] as color}
        <input 
          type="radio" 
          id={`color-${color}`} 
          name="color" 
          value={color} 
          bind:group={currentColor} 
          checked={color === "purple"}
        />
      {/each}
    </fieldset>
    <canvas bind:this={drawingCanvas} width={500} height={500}></canvas>
  </div>
</form>
