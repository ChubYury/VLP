<template>
  <h2>Coach contact</h2>
  <form action="" @submit.prevent>
    <div>
      <label for="contactInpEmail">Email:</label>
      <input id="contactInpEmail"  type="email">
    </div>
    <div>
      <label for="contactInpMes">Name:</label>
      <textarea id="contactInpMes" cols="30" rows="10"></textarea>
    </div>
    <button>Send</button>
  </form>

</template>