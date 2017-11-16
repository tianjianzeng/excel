<template>
    <div class="excel excel11">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                        <col width="5%" ></col>
                        <col width="10%"></col>
                        <col width="8%" ></col>
                        <col width="8%" ></col>
                        <col width="8%" ></col>
                        <col width="8%" ></col>
                        <col width="8%"></col>
                        <col width="8%"></col>
                        <col width="210px"></col>
                <tbody>
                    <tr>
                        <td colspan="9">资产损失（专项申报）税前扣除及纳税调整明细表</td>
                    </tr>
                    <tr>
                        <td class="blue" rowspan="2">行次</td>
                        <td class="blue">项目</td>
                        <td class="blue">账载金额</td>
                        <td class="blue">处置收入</td>
                        <td class="blue">赔偿收入</td>
                        <td class="blue">计税基础</td>
                        <td class="blue">税收金额</td>
                        <td class="blue">纳税调整金额</td>
                        <td class="blue" rowspan="2"></td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue">2</td>
                        <td class="blue">3</td>
                        <td class="blue">4</td>
                        <td class="blue">5</td>
                        <td class="blue">6</td>
                        <td class="blue" style="border-right: 1px solid #dfe6ec;">7</td>
                    </tr>
                    <template v-for="(item,index) in list">
                        <tr :key="index">
                            <td class="blue">001</td>
                            <td class="blue">{{item.a1}}</td>
                            <td>{{item.a2|formatCurrency}}</td>
                            <td>{{item.a3|formatCurrency}}</td>
                            <td>{{item.a4|formatCurrency}}</td>
                            <td>{{item.a5|formatCurrency}}</td>
                            <td>{{item.a6|formatCurrency}}</td>
                            <td>{{item.a7|formatCurrency}}</td>
                            <td>
                                <el-button v-if="(item.subList ||[]).length===0 && item.tag!==5" type="primary" @click="add(item)">添加</el-button>
                            </td>
                        </tr>
                        <tr v-for="(it,idx) in (item.subList||[])" :key="idx">
                            <td class="blue">002</td>
                            <td class="green"><input v-model="it.a1"></td>
                            <td class="green"><number-input v-model="it.a2" :fixed="fixed"></number-input></td>
                            <td class="green"><number-input v-model="it.a3" :fixed="fixed"></number-input></td>
                            <td class="green"><number-input v-model="it.a4" :fixed="fixed"></number-input></td>
                            <td class="green"><number-input v-model="it.a5" :fixed="fixed"></number-input></td>
                            <td>{{it.a6|formatCurrency}}</td>
                            <td>{{it.a7|formatCurrency}}</td>
                            <td>
                                <el-button v-if="it.saved && idx==item.subList.length-1" type="primary" @click="add(item)">添加</el-button>
                                <el-button type="primary" @click="del(it)">删除</el-button>
                                <el-button v-if="!it.saved" type="primary" @click="sav(it)">保存</el-button>
                                <el-button v-if="it.saved" type="primary" @click="edt(it)">修改</el-button>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <el-button type="primary" @click="save">保存</el-button>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    import store from '../store'
    import NumberInput from '../components/NumberInput'
    import {formatCurrency} from '../utils/filters'

    export default {
        name: 'excel11',
        data() {
            return {
                fixed:2,
                tags:{
                    "1":"一、货币资产损失",
                    "2":"二、非货币资产损失",
                    "3":"三、投资损失",
                    "4":"四、其他",
                    "5":"合计"
                },
                "list": [{
                    "uid": 545,
                    "mon": 1504713600000,
                    "a1": "一、货币资产损失",
                    "a2": 300,
                    "a3": 300,
                    "a4": 400,
                    "a5": 500,
                    "a6": 600,
                    "a7": 700,
                    "tag": 1,
                    "state": 0,
                    "createtime": 1505450296000,
                    "modifytime": 1505452015000,
                    "addid": 1,
                    "editid": 1,
                    "exist": 0,
                    "cYear": 2017,
                    "monDate": "2017-09-07",
                    "createDate": "2017-09-15",
                    "modifyDate": "2017-09-15",
                    "id": 1,
                    "subList": [{
                        "uid": 545,
                        "mon": 1504713600000,
                        "a1": "test1",
                        "a2": 300,
                        "a3": 300,
                        "a4": 400,
                        "a5": 500,
                        "a6": 600,
                        "a7": 700,
                        "tag": 1,
                        "state": 0,
                        "createtime": 1505450296000,
                        "modifytime": 1505452013000,
                        "addid": 1,
                        "editid": 2,
                        "exist": 0,
                        "cYear": 2017,
                        "monDate": "2017-09-07",
                        "createDate": "2017-09-15",
                        "modifyDate": "2017-09-15",
                        "id": 1
                    },{
                        "uid": 545,
                        "mon": 1504713600000,
                        "a1": "test1",
                        "a2": 300,
                        "a3": 300,
                        "a4": 400,
                        "a5": 500,
                        "a6": 600,
                        "a7": 700,
                        "tag": 1,
                        "state": 0,
                        "createtime": 1505450296000,
                        "modifytime": 1505452013000,
                        "addid": 1,
                        "editid": 2,
                        "exist": 0,
                        "cYear": 2017,
                        "monDate": "2017-09-07",
                        "createDate": "2017-09-15",
                        "modifyDate": "2017-09-15",
                        "id": 1
                    }]
                },
                {
                    "uid": 545,
                    "mon": 1504713600000,
                    "a1": "二、非货币资产损失",
                    "a2": 0,
                    "a3": 0,
                    "a4": 0,
                    "a5": 0,
                    "a6": 0,
                    "a7": 0,
                    "tag": 2,
                    "state": 0,
                    "createtime": 1505450296000,
                    "modifytime": 1505450296000,
                    "addid": 1,
                    "editid": 1,
                    "exist": 0,
                    "cYear": 2017,
                    "monDate": "2017-09-07",
                    "createDate": "2017-09-15",
                    "modifyDate": "2017-09-15",
                    "id": 2
                },
                {
                    "uid": 545,
                    "mon": 1504713600000,
                    "a1": "三、投资损失",
                    "a2": 0,
                    "a3": 0,
                    "a4": 0,
                    "a5": 0,
                    "a6": 0,
                    "a7": 0,
                    "tag": 3,
                    "state": 0,
                    "createtime": 1505450296000,
                    "modifytime": 1505450296000,
                    "addid": 1,
                    "editid": 1,
                    "exist": 0,
                    "cYear": 2017,
                    "monDate": "2017-09-07",
                    "createDate": "2017-09-15",
                    "modifyDate": "2017-09-15",
                    "id": 3
                },
                {
                    "uid": 545,
                    "mon": 1504713600000,
                    "a1": "四、其他",
                    "a2": 0,
                    "a3": 0,
                    "a4": 0,
                    "a5": 0,
                    "a6": 0,
                    "a7": 0,
                    "tag": 4,
                    "state": 0,
                    "createtime": 1505450296000,
                    "modifytime": 1505450296000,
                    "addid": 1,
                    "editid": 1,
                    "exist": 0,
                    "cYear": 2017,
                    "monDate": "2017-09-07",
                    "createDate": "2017-09-15",
                    "modifyDate": "2017-09-15",
                    "id": 4
                },
                {
                    "uid": 545,
                    "mon": 1504713600000,
                    "a1": "合计",
                    "a2": 300,
                    "a3": 300,
                    "a4": 400,
                    "a5": 500,
                    "a6": 600,
                    "a7": 700,
                    "tag": 5,
                    "state": 0,
                    "createtime": 1505450296000,
                    "modifytime": 1505452016000,
                    "addid": 1,
                    "editid": 1,
                    "exist": 0,
                    "cYear": 2017,
                    "monDate": "2017-09-07",
                    "createDate": "2017-09-15",
                    "modifyDate": "2017-09-15",
                    "id": 5
                }
            ],
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableA105091"])
        },
        watch: {
            getTableA105091(newVal) {
                if(newVal!=null){
                    this.list = JSON.parse(JSON.stringify(newVal.list));
                }
            },
            'list':{  
                handler:function(val,oldval){  
                    val.forEach(item=>{
                        if(item.subList){
                            var a2 = 0;
                            var a3 = 0;
                            var a4 = 0;
                            var a5 = 0;
                            item.subList.forEach(it=>{
                                if(it.saved===undefined){
                                    it.saved = true;
                                }
                                it.parent = item;
                                a2 += it.a2;
                                a3 += it.a3;
                                a4 += it.a4;
                                a5 += it.a5;
                                it.a6 = it.a5 - it.a4 - it.a3;
                                it.a7 = it.a2 - it.a6;
                            });
                            item.a2 = a2;
                            item.a3 = a3;
                            item.a4 = a4;
                            item.a5 = a5;
                            item.a6 = item.a5 - item.a4 - item.a3;
                            item.a7 = item.a2 - item.a6;
                        }
                    })
                },  
                deep:true//对象内部的属性监听，也叫深度监听  
            },
        },
        methods:{
            save(){
                if(this.invalid>0){
                    this.$alert('请修改不和规范的字段后再进行保存', '验证', {
                        confirmButtonText: '确定'
                    });
                    return;
                }
                let postData = {
                    "uid":100,
                    "year":2016,
                    "userId":10086,
                    "id":this.id
                };
                for(let i=1;i<=14;i++){
                    for(let j=1;j<=3;j++){
                        let p = `a${i}_${j}`
                        postData[p]=this[p];
                    }
                }
                
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA105091", {
                    data: postData,
                    callback:(rst)=>{
                        if(rst.status==0){
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            });
                        }
                    },
                    always:()=>{
                        loading.close();
                    }
                });
            },
            add(item){
                if(!item.subList){
                    item.subList = [];
                }

                item.subList.push({
                    tag:item.tag,
                    saved:false,
                    parent: item,
                    a1:"",
                    a2:0,
                    a3:0,
                    a4:0,
                    a5:0,
                    a6:0,
                    a7:0
                });
            },
            del(it){
                if(!it.saved){
                    let i = it.parent.subList.indexOf(it);
                    it.parent.subList.splice(i,1);
                }else{
                    //调用删除接口
                }
            },
            edt(it){
                //调用编辑接口
            },
            sav(it){
                //保存接口
                it.saved = true;
            }
        },
        mounted() {
            const loading = this.$loading({
                lock: true,
                text: '加载中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            store.dispatch("getTableA105091",{
                data:{
                    "uid": "545",
                    "mon": "2017-09-07",
                    "year": "2017",
                    "userId": "1"
                },
                always:()=>{
                    loading.close();
                }
            });
            this.list.forEach(item=>{
                var a2 = 0;
                var a3 = 0;
                var a4 = 0;
                var a5 = 0;
                if(item.subList){
                    item.subList.forEach(it=>{
                        if(it.saved===undefined){
                            it.saved = true;
                        }
                        it.parent = item;
                        a2 += it.a2;
                        a3 += it.a3;
                        a4 += it.a4;
                        a5 += it.a5;
                        it.a6 = it.a5 - it.a4 - it.a3;
                        it.a7 = it.a2 - it.a6;
                    });
                    item.a2 = a2;
                    item.a3 = a3;
                    item.a4 = a4;
                    item.a5 = a5;
                    item.a6 = item.a5 - item.a4 - item.a3;
                    item.a7 = item.a2 - item.a6;
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
</style>