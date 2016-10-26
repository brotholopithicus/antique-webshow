<template>
<div id="login-signup">
    <div class="flex-container">
        <div id="signup"></div>
        <div id="login"></div>
    </div>
</div>
</template>
<script>
export default {
    name: 'login-signup',
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.flex-container {
    min-height: 800px;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-flow: row;
}

.flex-container>#login {
    margin: 4px;
    padding: 5px;
    border: 1px solid #cccc33;
    border-radius: 7pt;
    background: #dddd88;
    flex: 3 1 50%;
    order: 1;
}

.flex-container>#signup {
    margin: 4px;
    padding: 5px;
    border: 1px solid #8888bb;
    border-radius: 7pt;
    background: #ccccff;
    flex: 3 1 50%;
    order: 2;
}


/* Too narrow to support three columns */

@media all and (max-width: 640px) {
    .flex-container {
        flex-direction: column;
    }
    .flex-container>#login,
    .flex-container>#signup {
        order: 0;
    }
}
</style>
