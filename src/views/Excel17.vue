<template>
    <div class="excel excel17">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col width="4%"></col>
                <col width="4%"></col>
                <col width="4%"></col>
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
                        <td class="green"><input></td>
                        <td class="green">
                            <!-- <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>       -->
                        </td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td class="green"><el-date-picker v-model="item.a1" type="date" placeholder="选择日期" default-value="2010-10-01"></el-date-picker></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td>{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td>{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td>{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
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
                        <td>{{0|formatCurrency}}</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td>{{0|formatCurrency}}</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td>{{0|formatCurrency}}</td>
                        <td colspan="2">{{0|formatCurrency}}</td>
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
    import {formatCurrency} from '../utils/filters'

    export default {
        name: 'excel17',
        data() {
            return {
                fixed:2,
                list:[]
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
                    this.list = JSON.parse(JSON.stringify(newVal.rows));
                    this.total = JSON.parse(JSON.stringify(newVal.sumResult));
                }
            },
            'list':{  
                handler:function(val,oldval){  
                    var a2=0;
                    var a3=0;
                    var a4=0;
                    var a5=0;
                    var a6=0;
                    var a7=0;
                    var a8=0;
                    var a9=0;
                    var a10=0;
                    var a11=0;
                    var a12=0;
                    var a13=0;
                    var a14=0;
                    var a15=0;
                    var a16=0;
                    var a17=0;
                    var a18=0;
                    val.forEach(item=>{
                        if(item.saved === undefined){
                            item.saved = true;
                        }
                        a2 += item.a2;
                        a3 += item.a3;
                        a4 += item.a4;
                        a5 += item.a5;
                        a6 += item.a6;
                        a7 += item.a7;
                        a8 += item.a8;
                        a9 += item.a9;
                        a10 += item.a10;
                        a11 += item.a11;
                        a12 += item.a12;
                        a13 += item.a13;
                        a14 += item.a14;
                        a15 += item.a15;
                        a16 += item.a16;
                        a17 += item.a17;
                        a18 += item.a18;
                    });
                    this.total.a2 = a2;
                    this.total.a3 = a3;
                    this.total.a4 = a4;
                    this.total.a5 = a5;
                    this.total.a6 = a6;
                    this.total.a7 = a7;
                    this.total.a8 = a8;
                    this.total.a9 = a9;
                    this.total.a10 = a10;
                    this.total.a11 = a11;
                    this.total.a12 = a12;
                    this.total.a13 = a13;
                    this.total.a14 = a14;
                    this.total.a15 = a15;
                    this.total.a16 = a16;
                    this.total.a17 = a17;
                    this.total.a18 = a18;
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
                store.dispatch("editA107011", {
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
                this.list.push({
                    saved:false,
                    a1:null,
                    a2:0,
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
                    a16:0,
                    a17:0,
                    a18:0
                });
            },
            del(item){
                if(!item.saved){
                    let i = this.list.indexOf(item);
                    this.list.splice(i,1);
                }else{
                    //调用删除接口
                }
            },
            edt(item){
                //调用编辑接口
            },
            sav(item){
                //保存接口
                item.saved = true;
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
    .excel17{
        td{
            text-align: left;
            padding-left: 10px;
        }
        td[colspan="17"]{
            text-align: center;
        }
    }
</style>