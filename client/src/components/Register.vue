<template>
    <div>
        <form>
            <input type="text" name="email" placeholder="Enter your Email">
            <input type="password" name="password" placeholder="your password">
            <button type="submit" @click.prevent="register">Register</button>
        </form>
    </div>
</template>
<script>
export default {
    methods: {
        register(){
            console.log("Register button clicked")
        }
    }
}
</script>

<style>

</style>
