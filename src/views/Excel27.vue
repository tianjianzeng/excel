<template>
    <div class="excel excel27">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col width="5%"></col>
                <col width="120px"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="210px"></col>
                <tbody>
                    <tr>
                        <td colspan="20">境外所得纳税调整后所得明细表</td>
                    </tr>
                    <tr>
                        <td class="blue" rowspan="3">行次</td>
                        <td class="blue" rowspan="2">国家（地区）</td>
                        <td class="blue" colspan="8">境外税后所得</td>
                        <td class="blue" colspan="4">境外所得可抵免的所得税额</td>
                        <td class="blue" rowspan="2">境外税前所得</td>
                        <td class="blue" rowspan="2">境外分支机构收入与支出纳税调整额</td>
                        <td class="blue" rowspan="2">境外分支机构调整分摊扣除的有关成本费用</td>
                        <td class="blue" rowspan="2">境外所得对应调整的相关成本费用支出</td>
                        <td class="blue" rowspan="2" colspan="2">境外所得纳税调整后所得</td>
                    </tr>
                    <tr>
                        <td class="blue">分支机构机构营业利润所得</td>
                        <td class="blue">股息、红利等权益性投资所得</td>
                        <td class="blue">利息所得</td>
                        <td class="blue">租金所得</td>
                        <td class="blue">特许权使用费所得</td>
                        <td class="blue">财产转让所得</td>
                        <td class="blue">其他所得</td>
                        <td class="blue">小计</td>
                        <td class="blue">直接缴纳的所得税额</td>
                        <td class="blue">间接负担的所得税额</td>
                        <td class="blue">享受税收饶让抵免税额</td>
                        <td class="blue" style="border-right: 1px solid #dfe6ec;">小计</td>
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
                        <td class="blue">9（2+3+4+5+6+7+8）</td>
                        <td class="blue">10</td>
                        <td class="blue">11</td>
                        <td class="blue">12</td>
                        <td class="blue">13（10+11+12）</td>
                        <td class="blue">14（9+10+11）</td>
                        <td class="blue">15</td>
                        <td class="blue">16</td>
                        <td class="blue">17</td>
                        <td class="blue" colspan="2">18（14+15-16-17）</td>
                    </tr>
                    <tr v-for="(item,index) in list" :key="index">
                        <td class="blue">001</td>
                        <td class="green">
                            <el-select v-model="item.a1" placeholder="请选择">
                                <el-option
                                v-for="item in getCResult108010"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                                </el-option>
                            </el-select>
                        </td>
                        <td class="green"><number-input v-model="item.a2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a6" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a7" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a8" :fixed="fixed"></number-input></td>
                        <td>{{item.a9|formatCurrency}}</td>
                        <td class="green"><number-input v-model="item.a10" :fixed="fixed" :min="0"></number-input></td>
                        <td class="green"><number-input v-model="item.a11" :fixed="fixed" :min="0"></number-input></td>
                        <td class="green"><number-input v-model="item.a12" :fixed="fixed" :min="0"></number-input></td>
                        <td>{{item.a13|formatCurrency}}</td>
                        <td>{{item.a14|formatCurrency}}</td>
                        <td class="green"><number-input v-model="item.a15" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a16" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a17" :fixed="fixed"></number-input></td>
                        <td>{{item.a18|formatCurrency}}</td>
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
                        <td>{{total.a2|formatCurrency}}</td>
                        <td>{{total.a3|formatCurrency}}</td>
                        <td>{{total.a4|formatCurrency}}</td>
                        <td>{{total.a5|formatCurrency}}</td>
                        <td>{{total.a6|formatCurrency}}</td>
                        <td>{{total.a7|formatCurrency}}</td>
                        <td>{{total.a8|formatCurrency}}</td>
                        <td>{{total.a9|formatCurrency}}</td>
                        <td>{{total.a10|formatCurrency}}</td>
                        <td>{{total.a11|formatCurrency}}</td>
                        <td>{{total.a12|formatCurrency}}</td>
                        <td>{{total.a13|formatCurrency}}</td>
                        <td>{{total.a14|formatCurrency}}</td>
                        <td>{{total.a15|formatCurrency}}</td>
                        <td>{{total.a16|formatCurrency}}</td>
                        <td>{{total.a17|formatCurrency}}</td>
                        <td>{{total.a18|formatCurrency}}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <el-button type="primary" v-if="false" @click="save">保存</el-button>
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
        name: 'excel27',
        data() {
            return {
                fixed:2,
                list:[],
                total:{}
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableA108010","getCResult108010"])
        },
        watch: {
            getTableA108010(newVal) {
                if(newVal!=null){
                    this.list = JSON.parse(JSON.stringify(newVal.list));
                    this.total = JSON.parse(JSON.stringify(newVal.total));
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
                        a2 += item.a2 *  Math.pow(10, this.fixed);
                        a3 += item.a3 *  Math.pow(10, this.fixed);
                        a4 += item.a4 *  Math.pow(10, this.fixed);
                        a5 += item.a5 *  Math.pow(10, this.fixed);
                        a6 += item.a6 *  Math.pow(10, this.fixed);
                        a7 += item.a7 *  Math.pow(10, this.fixed);
                        a8 += item.a8 *  Math.pow(10, this.fixed);
                        let rst = 0;
                        for(var i=2;i<=8;i++){
                            rst += item[`a${i}`] * Math.pow(10, this.fixed);
                        }
                        item.a9 = rst * 1.0 / Math.pow(10, this.fixed);
                        a9 += item.a9 *  Math.pow(10, this.fixed);
                        a10 += item.a10 *  Math.pow(10, this.fixed);
                        a11 += item.a11 *  Math.pow(10, this.fixed);
                        a12 += item.a12 *  Math.pow(10, this.fixed);
                        rst = 0;
                        for(var i=10;i<=12;i++){
                            rst += item[`a${i}`] * Math.pow(10, this.fixed);
                        }
                        item.a13 = rst * 1.0 / Math.pow(10, this.fixed);
                        a13 += item.a13 *  Math.pow(10, this.fixed);
                        rst = 0;
                        for(var i=9;i<=11;i++){
                            rst += item[`a${i}`] * Math.pow(10, this.fixed);
                        }
                        item.a14 = rst * 1.0 / Math.pow(10, this.fixed);
                        a14 += item.a14 *  Math.pow(10, this.fixed);
                        a15 += item.a15 *  Math.pow(10, this.fixed);
                        a16 += item.a16 *  Math.pow(10, this.fixed);
                        a17 += item.a17 *  Math.pow(10, this.fixed);
                        rst = 0;
                        for(var i=14;i<=15;i++){
                            rst += item[`a${i}`] * Math.pow(10, this.fixed);
                        }
                        for(var i=16;i<=17;i++){
                            rst -= item[`a${i}`] * Math.pow(10, this.fixed);
                        }
                        item.a18 = rst * 1.0 / Math.pow(10, this.fixed);
                        a18 += item.a18 *  Math.pow(10, this.fixed);
                    });
                    this.total.a2 = a2 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) *  Math.pow(10, this.fixed);
                    this.total.a3 = a3 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) *  Math.pow(10, this.fixed);
                    this.total.a4 = a4 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) *  Math.pow(10, this.fixed);
                    this.total.a5 = a5 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) *  Math.pow(10, this.fixed);
                    this.total.a6 = a6 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) *  Math.pow(10, this.fixed);
                    this.total.a7 = a7 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) *  Math.pow(10, this.fixed);
                    this.total.a8 = a8 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) *  Math.pow(10, this.fixed);
                    this.total.a9 = a9 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) *  Math.pow(10, this.fixed);
                    this.total.a10 = a10 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) *  Math.pow(10, this.fixed);
                    this.total.a11 = a11 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) *  Math.pow(10, this.fixed);
                    this.total.a12 = a12 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) *  Math.pow(10, this.fixed);
                    this.total.a13 = a13 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) *  Math.pow(10, this.fixed);
                    this.total.a14 = a14 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) *  Math.pow(10, this.fixed);
                    this.total.a15 = a15 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) *  Math.pow(10, this.fixed);
                    this.total.a16 = a16 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) *  Math.pow(10, this.fixed);
                    this.total.a17 = a17 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) *  Math.pow(10, this.fixed);
                    this.total.a18 = a18 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) *  Math.pow(10, this.fixed);
                },  
                deep:true//对象内部的属性监听，也叫深度监听  
            },
        },
        methods:{
            save(){
                // if(this.invalid>0){
                //     this.$alert('请修改不和规范的字段后再进行保存', '验证', {
                //         confirmButtonText: '确定'
                //     });
                //     return;
                // }
                // let postData = {
                //     "uid": "545",
                //     "mon": "2017-09-07",
                //     "year": "2017",
                //     "userId": "1",
                //     "id":this.id
                // };
                // for(let i=1;i<=14;i++){
                //     for(let j=1;j<=3;j++){
                //         let p = `a${i}_${j}`
                //         postData[p]=this[p];
                //     }
                // }
                
                // const loading = this.$loading({
                //     lock: true,
                //     text: '加载中',
                //     spinner: 'el-icon-loading',
                //     background: 'rgba(0, 0, 0, 0.7)'
                // });
                // store.dispatch("editA108010", {
                //     data: postData,
                //     callback:(rst)=>{
                //         if(rst.status==0){
                //             this.$message({
                //                 message: '保存成功',
                //                 type: 'success'
                //             });
                //         }
                //     },
                //     always:()=>{
                //         loading.close();
                //     }
                // });
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
                    const loading = this.$loading({
                        lock: true,
                        text: '加载中',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.7)'
                    });
                    store.dispatch("delA108010",{
                        data:{
                            "uid":100,
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
                if(item.a16+item.a17<0){
                    this.$alert('16+17列总和不能小于0', '验证', {
                        confirmButtonText: '确定'
                    });
                    return;
                }
                //调用编辑接口
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA108010",{
                    data:{
                        id: item.id,
                        a1:item.a1,
                        a2:item.a2,
                        a3:item.a3,
                        a4:item.a4,
                        a5:item.a5,
                        a6:item.a6,
                        a7:item.a7,
                        a8:item.a8,
                        a9:item.a9,
                        a10:item.a10,
                        a11:item.a11,
                        a12:item.a12,
                        a13:item.a13,
                        a14:item.a14,
                        a15:item.a15,
                        a16:item.a16,
                        a17:item.a17,
                        a18:item.a18
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
                if(item.a16+item.a17<0){
                    this.$alert('16+17列总和不能小于0', '验证', {
                        confirmButtonText: '确定'
                    });
                    return;
                }
                //保存接口
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("getTableA108010",{
                    data:{
                        uid: "545",
                        mon: "2017-09-07",
                        year: "2017",
                        userId: "1",
                        a1:item.a1,
                        a2:item.a2,
                        a3:item.a3,
                        a4:item.a4,
                        a5:item.a5,
                        a6:item.a6,
                        a7:item.a7,
                        a8:item.a8,
                        a9:item.a9,
                        a10:item.a10,
                        a11:item.a11,
                        a12:item.a12,
                        a13:item.a13,
                        a14:item.a14,
                        a15:item.a15,
                        a16:item.a16,
                        a17:item.a17,
                        a18:item.a18
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
                // item.saved = true;
            }
        },
        mounted() {
            const loading = this.$loading({
                lock: true,
                text: '加载中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            store.dispatch("getCResult108010");
            store.dispatch("getTableA108010",{
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
        }
    }
</script>

<style lang="scss">
</style>