<template>
<div @click="handleClick" class="user-card">
    <div><img src="../assets/ava.jpg" width="50px" height="50px"></div>
    <h2>{{ user.name }}</h2>
    <div>{{ user.email }}</div>
    <slot></slot>
</div>
</template>

<script>
export default {
name: 'UserCard',
props: {
    user: {
    type: Object,
    required: true,
    },
},
methods: {
    handleClick() {
    this.$emit('click');
    },
},
};
</script>

<style scoped>
.user-card {
border: 1px dotted black;
padding: 16px;
margin: 8px;
width: 150px;
}
</style>
