<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'app',
        watch:{
            "$route":function(){
                this.$children[0] && this.$children[0].load && this.$children[0].load();
            }
        }
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

    .ti-2{
        padding-left: 2em;
    }
    .ti-4{
        padding-left: 4em;
    }
    .ti-6{
        padding-left: 6em;
    }
    
    .excel {
        width: 98%;
        margin: 0 auto;
    }
    .table-wraper {
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        width: 100%;
        max-width: 100%;
        background-color: #fff;
        border: 1px solid #dfe6ec;
        border-bottom: none;
        font-size: 14px;
        color: #1f2d3d;
        table {
            word-wrap: break-word; 
            word-break: break-all;
            width: 100%;
            &.head {
                td{
                    background-color: #eef1f6;
                }
            }
            table-layout: fixed;
        }
        td { 
            text-align: left;
            .el-button+.el-button {
                margin-left: 0;
            }
            .el-select .el-input.el-input--suffix .el-input__inner {
                text-align: left;
            }
            .el-input--prefix .el-input__inner {
                padding-left: 20px;
            }

            .el-input--suffix .el-input__inner {
                padding-right: 20px;
            }
            .el-input__prefix {
                left: 1px;
            }
            // padding-left: 10px;
            &.blue{
                background: #96DAF7;
            }
            &.green{
                background: #C1F1CB;
            }
            vertical-align: middle;
            border-right: 1px solid #dfe6ec;
            border-bottom: 1px solid #dfe6ec;
            height: 40px;
            color: #1f2d3d;
            box-sizing: border-box;
            text-overflow: ellipsis;
            vertical-align: middle;
            position: relative;
            &:last-of-type {
                border-right: none;
            }
            div{
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            input {
                outline: none;
                height: 100%;
                border: none;
                width: 100%;
                font-size: 14px;
                text-align: center;
                background: transparent;
            }
            &.ta-c{
                text-align: center;
                padding-left: 0;
            }
            &.ta-r{
                text-align: right;
            }
        }
        tr{
            &:last-of-type {
                td {
                    border-bottom: none;
                }
            }
        }
        &:last-of-type {
            border-bottom: 1px solid #dfe6ec;
        }
    }
    
    .el-date-editor.el-input {
        width: auto !important;
    }
</style>