<template>
    <div class="excel excel17">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col width="4%"></col>
                <col width="4%"></col>
                <col width="120px"></col>
                <col width="4%"></col>
                <col width="4%"></col>
                <col width="120px"></col>
                <col width="4%"></col>
                <col width="4%"></col>
                <col width="4%"></col>
                <col width="4%"></col>
                <col width="4%"></col>
                <col width="4%"></col>
                <col width="4%"></col>
                <col width="4%"></col>
                <col width="4%"></col>
                <col width="4%"></col>
                <col width="4%"></col>
                <col width="210px"></col>
                <tbody>
                    <tr>
                        <td colspan="17">符合条件的居民企业之间的股息、红利等权益性投资收益优惠明细表</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue"rowspan="3">行次</td>
                        <td class="blue" rowspan="2">被投资企业</td>
                        <td class="blue" rowspan="2">投资性质</td>
                        <td class="blue" rowspan="2">投资成本</td>
                        <td class="blue" rowspan="2">投资比例</td>
                        <td class="blue" colspan="2">被投资企业利润分配确认金额</td>
                        <td class="blue" colspan="3">被投资企业清算确认金额</td>
                        <td class="blue" colspan="6">撤回或减少投资确认金额</td>
                        <td class="blue" rowspan="2" colspan="2">合计</td>
                    </tr>
                    <tr>
                        <td class="blue">被投资企业做出利润分配或转股决定时间</td>
                        <td class="blue">依决定归属于本公司的股息、红利等权益性投资收益金额</td>
                        <td class="blue">分得的被投资企业清算剩余资产</td>
                        <td class="blue">被清算企业累计未分配利润和累计盈余公积应享有部分</td>
                        <td class="blue">应确认的股息所得</td>
                        <td class="blue">从被投资企业撤回或减少投资取得的资产</td>
                        <td class="blue">减少投资比例</td>
                        <td class="blue">收回初始投资成本</td>
                        <td class="blue">取得资产中超过收回初始投资成本部分</td>
                        <td class="blue">撤回或减少投资应享有被投资企业累计未分配利润和累计盈余公积</td>
                        <td class="blue" style="border-right: 1px solid #dfe6ec;">应确认的股息所得</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue">2</td>
                        <td class="blue">3</td>
                        <td class="blue">4</td>
                        <td class="blue">5</td>
                        <td class="blue">6</td>
                        <td class="blue">7</td>
                        <td class="blue">8</td>
                        <td class="blue">9（7与8孰小)</td>
                        <td class="blue">10</td>
                        <td class="blue">11</td>
                        <td class="blue">12（3×11）</td>
                        <td class="blue">13（10-12）</td>
                        <td class="blue">14</td>
                        <td class="blue">15(13与14孰小)</td>
                        <td class="blue" colspan="2">16（6+9+15）</td>
                    </tr>
                    <tr v-for="(item,index) in list" :key="index">
                        <td class="blue">001</td>
                        <td class="green"><input v-model="item.a1"></td>
                        <td class="green">
                            <el-select v-model="item.a2" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.id"
                                :label="item.label"
                                :value="item.id">
                                </el-option>
                            </el-select>      
                        </td>
                        <td class="green"><number-input v-model="item.a3" :min="0" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a4" :fixed="8"></number-input></td>
                        <td class="green"><el-date-picker v-model="item.a5" type="date" placeholder="选择日期" default-value="item.a5"></el-date-picker></td>
                        <td class="green"><number-input v-model="item.a6" :min="0" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a7" :min="0" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a8" :min="0" :fixed="fixed"></number-input></td>
                        <td>{{item.a9|formatCurrency}}</td>
                        <td class="green"><number-input v-model="item.a10" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a11" :fixed="fixed"></number-input></td>
                        <td>{{item.a12|formatCurrency}}</td>
                        <td>{{item.a13|formatCurrency}}</td>
                        <td class="green"><number-input v-model="item.a14" :fixed="fixed"></number-input></td>
                        <td>{{item.a15|formatCurrency}}</td>
                        <td>{{item.a16|formatCurrency}}</td>
                        <td>
                            <el-button v-if="item.saved && index===list.length-1" type="primary" @click="add(item)">添加</el-button>
                            <el-button type="primary" @click="del(item)">删除</el-button>
                            <el-button v-if="!item.saved" type="primary" @click="sav(item)">保存</el-button>
                            <el-button v-if="item.saved" type="primary" @click="edt(item)">修改</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td class="blue"></td>
                        <td class="blue">合计</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td>{{total.a6|formatCurrency}}</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td>{{total.a9|formatCurrency}}</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td>{{total.a15|formatCurrency}}</td>
                        <td colspan="2">{{total.a16|formatCurrency}}</td>
                    </tr>
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
    import {formatCurrency,formatDate} from '../utils/filters'

    export default {
        name: 'excel17',
        data() {
            return {
                fixed:2,
                options:[{
                    "id":1,
                    "label":"01 直接投资"
                },{
                    "id":2,
                    "label":"02 股票投资"
                }],
                list:[],
                total:{}
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableA107011"])
        },
        watch: {
            getTableA107011(newVal) {
                if(newVal!=null){
                    this.list = newVal.rows && JSON.parse(JSON.stringify(newVal.rows));
                    this.total = newVal.total && JSON.parse(JSON.stringify(newVal.total));
                }
            },
            'list':{  
                handler:function(val,oldval){  
                    var a6=0;
                    var a9=0;
                    var a15=0;
                    var a16=0;
                    val.forEach(item=>{
                        if(item.saved === undefined){
                            item.saved = true;
                        }
                        a6 += item.a6;
                        a9 += item.a9;
                        a15 += item.a15;
                        a16 += item.a16;
                    });
                    this.total.a6 = a6;
                    this.total.a9 = a9;
                    this.total.a15 = a15;
                    this.total.a16 = a16;
                },  
                deep:true//对象内部的属性监听，也叫深度监听  
            },
        },
        methods:{
            save(){
            },
            add(item){
                this.list.push({
                    saved:false,
                    a1:null,
                    a2:1,
                    a3:0,
                    a4:0,
                    a5:0,
                    a6:0,
                    a7:0,
                    a8:0,
                    a9:0,
                    a10:0,
                    a11:0,
                    a12:0,
                    a13:0,
                    a14:0,
                    a15:0,
                    a16:0
                });
            },
            del(item){
                if(!item.saved){
                    let i = this.list.indexOf(item);
                    this.list.splice(i,1);
                }else{
                    //调用删除接口
                    const loading = this.$loading({
                        lock: true,
                        text: '加载中',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.7)'
                    });
                    store.dispatch("deleteA107011",{
                        data:{
                            "uid":100,
                            "year":2016,
                            "userId":10086,
                            "id": item.id
                        },
                        callback:(rst)=>{
                            if(rst.status==0){
                                this.$message({
                                    message: '删除成功',
                                    type: 'success'
                                });
                                let i = this.list.indexOf(item);
                                this.list.splice(i,1);
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
                store.dispatch("editA107011", {
                    data:{
                        "id": item.id,
                        "uid": 100,
                        "year": 2016,
                        "userId": 10086,
                        "a1": item.a1,
                        "a2": item.a2,
                        "a3": item.a3,
                        "a4": item.a4.toString(),
                        "a5": formatDate(item.a5,"YYYY-MM-DD"),
                        "a6": item.a6,
                        "a7": item.a7,
                        "a8": item.a8,
                        "a10": item.a20,
                        "a11": item.a11,
                        "a14": item.a14
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
                store.dispatch("addA107011",{
                    data:{
                        "uid": 100,
                        "year": 2016,
                        "userId": 10086,
                        "a1": item.a1,
                        "a2": item.a2,
                        "a3": item.a3,
                        "a4": item.a4.toString(),
                        "a5": formatDate(item.a5,"YYYY-MM-DD"),
                        "a6": item.a6,
                        "a7": item.a7,
                        "a8": item.a8,
                        "a10": item.a20,
                        "a11": item.a11,
                        "a14": item.a14
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
            }
        },
        mounted() {
            const loading = this.$loading({
                lock: true,
                text: '加载中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            store.dispatch("getTableA107011",{
                data:{
                    "uid":100,
                    "year":2016,
                    "userId":10086
                },
                always:()=>{
                    loading.close();
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
</style>