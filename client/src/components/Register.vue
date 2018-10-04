<template>
    <div>
        <form>
            <input type="text" name="email" placeholder="Enter your Email" v-model="email">
            <br>
            <input type="password" name="password" placeholder="your password" v-model="password">
            <br>
            <button type="submit" @click.prevent="register">Register</button>
        </form>
    </div>
</template>
<script>
import AutheticationService from '@/services/AutheticationService.js'
export default {
    data: function(){
        return {
            email : '',
            password: ''
        }
    },
    methods: {
        async register(){
            const response = await AutheticationService.register({
                email: this.email,
                password: this.password
            })
        console.log(response.data)
        }
    }
}
</script>

<style>

</style>
