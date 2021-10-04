<template>
  <div>
    {{ hello }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      hello: null
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:1337/phrase");
      this.hello = response.data.hello;
    } catch (error) {
      this.error = error;
      console.log(this.error);
    }
  }
}
</script>
