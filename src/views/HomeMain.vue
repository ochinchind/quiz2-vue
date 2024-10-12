<template>
    <div>
      <h1>User List</h1>
      <div 
      class="d-flex">
      <div 
      v-for="user in users" 
      :key="user.id">
        <UserCard 
        :user="user"
        @click="handleUserClick(user.id)" 
        />
      </div>
      </div>
    </div>
  </template>

  <style scoped>
    .d-flex {
      display: flex;
    }
    .user-card {
      cursor: pointer;
    }
  </style>
  
  <script>
  import UserCard from '@/components/UserCard.vue';
  
  export default {
    name: 'HomeMain',
    components: { UserCard },
    data() {
      return {
        users: [
          { id: 1, name: 'King', email: 'a@g.com' },
          { id: 2, name: 'P Diddy', email: 'b@g.com' },
          { id: 3, name: 'Michael JAckson', email: 'c@g.com' }
        ]
      };
    },
    methods: {
      handleUserClick(id) {
        this.$router.push(`/user/${id}`);
      }
    }
  };
  </script>