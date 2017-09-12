<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    
    .excel {
        /*table {
            width: 100%;
            border-spacing: 0;
        }
        table,
        tr,
        td {
            border: none;
        }
        caption {
            line-height: 60px;
            background: #eff2f7;
        }
        thead {
            line-height: 40px;
            background: #eff2f7;
        }
        tbody {
            td {
                padding: 10px;
            }
        }*/
    }
</style>