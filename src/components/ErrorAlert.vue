<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style>
  dialog {
    position: fixed;
    width: 40%;
    top: 20vh;
    left: 30%;
    padding: 1rem;
    margin: 0;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
</style>