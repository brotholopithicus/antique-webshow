<template>
<div id="login-signup">
    <transition name="modal">
        <div class="modal-mask" @click="$emit('close')">
            <div class="modal-wrapper">
                <div class="modal-container" @click.stop>
                    <div class="modal-body">
                        <slot name="body">
                            <ul class="nav nav-tabs">
                              <li class="nav-item button">
                                <button class="close" @click="$emit('close')"><span>&times;</span></button>
                              </li>
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#login" role="tab">Login</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#signup" role="tab">Signup</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane active" id="login" role="tabpanel">
                                    <div class="input-wrapper">
                                        <div class="input-group">
                                            <input class="form-control" id="email" type="email" name="email" placeholder="Email Address" />
                                        </div>
                                        <div class="input-group">
                                            <input class="form-control" id="password" type="password" name="password" placeholder="Password" />
                                        </div>
                                        <div class="input-group">
                                            <button type="submit" class="btn btn-success btn-block">Login</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="signup" role="tab-panel">
                                    <div class="input-wrapper">
                                        <div class="input-group">
                                            <input class="form-control" id="name" type="text" name="name" placeholder="Name" />
                                        </div>
                                        <div class="input-group">
                                            <input class="form-control" id="email" type="email" name="email" placeholder="Email Address" />
                                        </div>
                                        <div class="input-group">
                                            <input class="form-control" id="password" type="password" name="password" placeholder="Password" />
                                        </div>
                                        <div class="input-group">
                                            <input class="form-control" id="confirmPassword" type="password" name="confirmPassword" placeholder="Confirm Password" />
                                        </div>
                                        <div class="input-group">
                                            <button type="submit" class="btn btn-primary btn-block">Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
export default {
    name: 'login-signup',
    created() {
        window.addEventListener('keyup', this.closeModal);
    },
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
}
</script>
<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 500px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.nav {
    display: flex;
    flex-direction: row;
    flex: auto;
    justify-content: space-around;
    text-align: center;
}

.nav-item {
    width: 100%;
}
.nav-item.button {
  width: 20%;
  margin-right: 5%;
}
#login .input-wrapper>.input-group {
    margin-top: 1em;
}

#signup .input-wrapper>.input-group {
    margin-top: 1em;
}
.close {
  outline: none;
}
</style>
