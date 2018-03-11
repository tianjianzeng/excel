<template>
    <div class="excel excel11">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col width="60px" />
                <col width="10%"/>
                <col width="8%" />
                <col width="8%" />
                <col width="8%" />
                <col width="8%" />
                <col width="8%"/>
                <col width="8%"/>
                <col width="210px"/>
                <tbody>
                    <tr>
                        <td colspan="9" class="ta-c">资产损失（专项申报）税前扣除及纳税调整明细表</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c" rowspan="2">行次</td>
                        <td class="blue ta-c">项目</td>
                        <td class="blue ta-c">账载金额</td>
                        <td class="blue ta-c">处置收入</td>
                        <td class="blue ta-c">赔偿收入</td>
                        <td class="blue ta-c">计税基础</td>
                        <td class="blue ta-c">税收金额</td>
                        <td class="blue ta-c">纳税调整金额</td>
                        <td rowspan="2"></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">1</td>
                        <td class="blue ta-c">2</td>
                        <td class="blue ta-c">3</td>
                        <td class="blue ta-c">4</td>
                        <td class="blue ta-c">5</td>
                        <td class="blue ta-c">6（5-3-4）</td>
                        <td class="blue ta-c" style="border-right: 1px solid #dfe6ec;">7（2-6）</td>
                    </tr>
                    <template v-for="(item,index) in list">
                        <tr :key="index">
                            <td class="blue ta-c">{{(item.no).toString().padStart(3,'0')}}</td>
                            <td class="blue">{{item.item.a1}}</td>
                            <td><number-display :value="item.item.a2"></number-display></td>
                            <td><number-display :value="item.item.a3"></number-display></td>
                            <td><number-display :value="item.item.a4"></number-display></td>
                            <td><number-display :value="item.item.a5"></number-display></td>
                            <td><number-display :value="item.item.a6"></number-display></td>
                            <td><number-display :value="item.item.a7"></number-display></td>
                            <td>
                                <el-button v-if="(item.subList ||[]).length===0 && item.item.tag!=5" type="primary" @click="add(item.item)">添加</el-button>
                            </td>
                        </tr>
                        <tr v-for="(it,idx) in (item.subList)" :key="idx">
                            <td class="blue ta-c">{{(it.no).toString().padStart(3,'0')}}</td>
                            <td class="green"><input v-model="it.a1"></td>
                            <td class="green"><number-input v-model="it.a2" :fixed="fixed"></number-input></td>
                            <td class="green"><number-input v-model="it.a3" :fixed="fixed"></number-input></td>
                            <td class="green"><number-input v-model="it.a4" :fixed="fixed"></number-input></td>
                            <td class="green"><number-input v-model="it.a5" :fixed="fixed"></number-input></td>
                            <td><number-display :value="it.a6"></number-display></td>
                            <td><number-display :value="it.a7"></number-display></td>
                            <td>
                                <el-button v-if="it.saved && idx==item.subList.length-1" type="primary" @click="add(item)">添加</el-button>
                                <el-button type="primary" @click="del(it)" v-if="idx>0">删除</el-button>
                                <el-button v-if="!it.saved" type="primary" @click="sav(it)">保存</el-button>
                                <el-button v-if="it.saved" type="primary" @click="edt(it)">修改</el-button>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <el-button v-if="false" type="primary" @click="refresh">刷新</el-button>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    import store from '../store'
    import NumberInput from '../components/NumberInput'
    import NumberDisplay from '../components/NumberDisplay'
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
                "list": [],
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput,
            NumberDisplay
        },
        computed: {
            ...mapGetters(["getTableA105091"])
        },
        watch: {
            getTableA105091(newVal) {
                if(newVal!=null){
                    var list = JSON.parse(JSON.stringify(newVal.list));
                    if(list.length>1){
                        this.list = list.slice(0,5);
                    }
                }
            },
            'list':{  
                handler:function(val,oldval){  
                    let i = 0;
                    let total = val.find(i=>i.item.a1 === "合计");
                    let ita2 = 0;
                    let ita3 = 0;
                    let ita4 = 0;
                    let ita5 = 0;
                    let ita6 = 0;
                    let ita7 = 0;
                    var listList = val.slice(0, 4);
                    listList.forEach(item=>{
                        item.no = ++i;
                        if(item.subList){
                            var a2 = 0;
                            var a3 = 0;
                            var a4 = 0;
                            var a5 = 0;
                            if(item.subList && item.subList.length>0){
                                item.subList.forEach(it=>{
                                    if(it.saved===undefined){
                                        it.saved = true;
                                    }
                                    it.no = ++i;
                                    it.parent = item;
                                    a2 += it.a2;
                                    a3 += it.a3;
                                    a4 += it.a4;
                                    a5 += it.a5;
                                    it.a6 = it.a5 - it.a4 - it.a3;
                                    it.a7 = it.a2 - it.a6;
                                });
                            }else{
                                item.subList = [{
                                    saved : false,
                                    no : ++i,
                                    parent : item,
                                    tag: item.item.tag,
                                    a2 : 0,
                                    a3 : 0,
                                    a4 : 0,
                                    a5 : 0,
                                    a6 : 0,
                                    a7 : 0,
                                }];
                            }
                            item.item.a2 = a2;
                            item.item.a3 = a3;
                            item.item.a4 = a4;
                            item.item.a5 = a5;
                            item.item.a6 = item.item.a5 - item.item.a4 - item.item.a3;
                            item.item.a7 = item.item.a2 - item.item.a6;

                            ita2 += item.item.a2;
                            ita3 += item.item.a3;
                            ita4 += item.item.a4;
                            ita5 += item.item.a5;
                            ita6 += item.item.a6;
                            ita7 += item.item.a7;
                        }
                    });
                    total.no = ++i;
                    total.item.a2 = ita2;
                    total.item.a3 = ita3;
                    total.item.a4 = ita4;
                    total.item.a5 = ita5;
                    total.item.a6 = ita6;
                    total.item.a7 = ita7;
                },  
                deep:true//对象内部的属性监听，也叫深度监听  
            },
        },
        methods:{
            save(){
                let postData = {
                    "uid": this.uid,
                    "year": this.year,
                    "userId": this.userId,
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
                    tag:item.item.tag,
                    saved:false,
                    parent: item,
                    a2:0,
                    a3:0,
                    a4:0,
                    a5:0,
                    a6:0,
                    a7:0
                });
            },
            del(item){
                if(!item.saved){
                    let i = item.parent.subList.indexOf(item);
                    item.parent.subList.splice(i,1);
                }else{
                    //调用删除接口
                    const loading = this.$loading({
                        lock: true,
                        text: '加载中',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.7)'
                    });
                    store.dispatch("delA105091",{
                        urlParam: item.id,
                        callback:(rst)=>{
                            if(rst.status==0){
                                this.$message({
                                    message: '删除成功',
                                    type: 'success'
                                });
                                let i = item.parent.subList.indexOf(item);
                                item.parent.subList.splice(i,1);
                            }
                        },
                        always:()=>{
                            loading.close();
                        }
                    });
                }
            },
            edt(item){
                //调用编辑接口
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA105091", {
                    data:{
                        id: item.id,
                        a1:item.a1,
                        a2:item.a2,
                        a3:item.a3,
                        a4:item.a4,
                        a5:item.a5,
                        tag:item.tag
                    },
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
            sav(item){
                //保存接口
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("addA105091",{
                    data:{
                        uid: this.uid,
                        cYear: this.year,
                        userId: this.userId,
                        a1:item.a1,
                        a2:item.a2,
                        a3:item.a3,
                        a4:item.a4,
                        a5:item.a5,
                        tag:item.tag
                    },
                    callback:(rst)=>{
                        if(rst.status==0){
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            });
                            item.saved = true;
                        }
                    },
                    always:()=>{
                        loading.close();
                    }
                })
            },
            load(){
                this.uid = this.$route.query.uid;
                this.year = this.$route.query.year;
                this.userId = this.$route.query.userId;
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("getTableA105091",{
                    data:{
                        "uid": this.uid,
                        "year": this.year,
                        "userId": this.userId
                    },
                    always:()=>{
                        loading.close();
                    }
                });
            },
            refresh(){
                store.dispatch("flush",{
                    data:{
                        "year": this.year,
                        "uid": this.uid,
                        "userId": this.userId
                    },
                    urlParam:"a105091",
                    always:()=>{
                        this.load();
                    }
                })
            }
        },
        mounted() {
            this.load();
        }
    }
</script>

<style lang="scss" scoped>
</style>