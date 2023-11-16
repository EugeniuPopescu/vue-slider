const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            message: 'hello'
        }
    }
};

createApp(opzioni).mount('#app')