<template lang="html">
    <div class="main">
        <h3>Login</h3>
        <form class="" action="index.html" method="post">

            <div class="form-group">
                <label for="login"></label>
                <input type="email" name="login" id="login" class="form-control" placeholder="Email:" value="">
            </div>
            <div class="form-group">
                <label for="password"></label>
                <input type="password" name="password" id="password" class="form-control" placeholder="Password:" value="">
            </div>

        </form>

    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style lang="css">
    .main
    {
        width:99%;
    }
</style>
