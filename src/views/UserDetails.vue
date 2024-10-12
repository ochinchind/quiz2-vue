<template>
    <div v-if="user">
      <h1>User Details for {{ user.name }}</h1>
      
      <form
      @submit="checkForm"
      >
      <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
    </div>

      <label>
        Edit Email:
        <input v-model="user.email" />
      </label>
      <label>
        Edit Name:
        <input v-model="user.name" />
      </label>
      <button type="submit">Submit</button>
        </form>
      <UserCard :user="user">
        <button>Edit</button>
      </UserCard>
    </div>
  </template>
  
  <script>
  import UserCard from '@/components/UserCard.vue';
  
  export default {
    name: 'UserDetails',
    components: { UserCard },
    props: ['id'],
    data() {
      return {
        user: null,
        errors: [],
        clickedButton: false
      };
    },
    created() {
      this.fetchUserData(this.id);
    },
    methods: {
      async fetchUserData(id) {
        const users = [
          { id: 1, name: 'King', email: 'a@g.com' },
          { id: 2, name: 'P Diddy', email: 'b@g.com' },
          { id: 3, name: 'Michael JAckson', email: 'c@g.com' }
        ];
        this.user = users.find(u => u.id == id);
      },
      checkForm(e) {
        if (this.user.name && this.user.email) {
            return true;
        }

        this.errors = [];

        if (!this.user.name) {
            this.errors.push('Name required.');
        }
        e.preventDefault();
        }
    },
    beforeUnmount() {
        console.log(' user details component to log a message to the console when the user navigates away from the page')
    }
  };
  </script>
  