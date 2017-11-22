<template>
    <div class="excel excel28">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <tbody>
                    <tr>
                        <td colspan="20">境外分支机构弥补亏损明细表</td>
                    </tr>
                    <tr>
                        <td class="blue" rowspan="4">行次</td>
                        <td class="blue" rowspan="3">国家（地区）</td>
                        <td class="blue" colspan="4">非实际亏损额的弥补</td>
                        <td class="blue" colspan="15">境外所得纳税调整后所得</td>
                    </tr>
                    <tr>
                        <td class="blue" rowspan="2">以前年度结转尚未弥补的非实际亏损额</td>
                        <td class="blue" rowspan="2">年发生的非实际亏损额</td>
                        <td class="blue" rowspan="2">本年弥补的以前年度非实际亏损额</td>
                        <td class="blue" rowspan="2">结转以后年度弥补的非实际亏损额</td>
                        <td class="blue" colspan="6">以前年度结转尚未弥补的实际亏损额</td>
                        <td class="blue" rowspan="2">本年发生的实际亏损额</td>
                        <td class="blue" rowspan="2">本年弥补的以前年度实际亏损额</td>
                        <td class="blue" colspan="7">结转以后年度弥补的实际亏损额</td>
                    </tr>
                    <tr>
                        <td class="blue">前五年</td>
                        <td class="blue">前四年</td>
                        <td class="blue">前三年</td>
                        <td class="blue">前二年</td>
                        <td class="blue">前一年</td>
                        <td class="blue">小计</td>
                        <td class="blue">前四年</td>
                        <td class="blue">前三年</td>
                        <td class="blue">前二年</td>
                        <td class="blue">前一年</td>
                        <td class="blue">本年</td>
                        <td class="blue" colspan="2">小计</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue">2</td>
                        <td class="blue">3</td>
                        <td class="blue">4</td>
                        <td class="blue">5（2+3-4）</td>
                        <td class="blue">6</td>
                        <td class="blue">7</td>
                        <td class="blue">8</td>
                        <td class="blue">9</td>
                        <td class="blue">10</td>
                        <td class="blue">11</td>
                        <td class="blue">12</td>
                        <td class="blue">13</td>
                        <td class="blue">14</td>
                        <td class="blue">15</td>
                        <td class="blue">16</td>
                        <td class="blue">17</td>
                        <td class="blue">18</td>
                        <td class="blue" colspan="2">19</td>
                    </tr>
                    <tr v-for="(item,index) in list" :key="index">
                        <td style="width:5%" class="blue"></td>
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
                        <td style="width:5%" class="green"><number-input v-model="item.a2" :fixed="fixed" :min="0"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="item.a3" :fixed="fixed" :min="0"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="item.a4" :fixed="fixed" :max="item.a2"></number-input></td>
                        <td style="width:5%"><number-display v-model="item.a5" :fixed="fixed" :min="0"></number-display></td>
                        <td style="width:5%" class="green"><number-input v-model="item.a6" :fixed="fixed" :min="0"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="item.a7" :fixed="fixed" :min="0"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="item.a8" :fixed="fixed" :min="0"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="item.a9" :fixed="fixed" :min="0"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="item.a10" :fixed="fixed" :min="0"></number-input></td>
                        <td style="width:5%">{{item.a11|formatCurrency}}</td>
                        <td style="width:5%" class="green"><number-input v-model="item.a12" :fixed="fixed" :min="0"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="item.a13" :fixed="fixed" :max="item.a11"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="item.a14" :fixed="fixed" :min="0"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="item.a15" :fixed="fixed" :min="0"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="item.a16" :fixed="fixed" :min="0"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="item.a17" :fixed="fixed" :min="0"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="item.a18" :fixed="fixed" :min="0"></number-input></td>
                        <td style="width:5%">{{item.a19|formatCurrency}}</td>
                        <td><el-button type="primary" @click="edt(item)">保存</el-button></td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
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
                        <td colspan="2">{{total.a19|formatCurrency}}</td>
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
    import NumberDisplay from '../components/NumberDisplay'
    import {formatCurrency} from '../utils/filters'

    export default {
        name: 'excel28',
        data() {
            return {
                fixed:2,
                list:[],
                total:{}
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput,
            NumberDisplay
        },
        computed: {
            ...mapGetters(["getTableA108020","getCResult108010"])
        },
        watch: {
            getTableA108020(newVal) {
                if(newVal!=null){
                    this.list = JSON.parse(JSON.stringify(newVal.rows));
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
                    var a19=0;
                    val.forEach(item=>{
                        if(item.saved === undefined){
                            item.saved = true;
                        }
                        a2 += item.a2 * Math.pow(10, this.fixed);
                        a3 += item.a3 * Math.pow(10, this.fixed);
                        a4 += item.a4 * Math.pow(10, this.fixed);
                        item.a5 = (item.a2 * Math.pow(10, this.fixed) + item.a3 * Math.pow(10, this.fixed) - item.a4 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10,this.fixed);
                        a5 += item.a5 * Math.pow(10, this.fixed);
                        a6 += item.a6 * Math.pow(10, this.fixed);
                        a7 += item.a7 * Math.pow(10, this.fixed);
                        a8 += item.a8 * Math.pow(10, this.fixed);
                        a9 += item.a9 * Math.pow(10, this.fixed);
                        a10 += item.a10 * Math.pow(10, this.fixed);
                        let rst = 0;
                        for(var i=6;i<=10;i++){
                            rst += item[`a${i}`] * Math.pow(10, this.fixed);
                        }
                        item.a11 = rst * 1.0 / Math.pow(10, this.fixed);
                        a11 += item.a11 * Math.pow(10, this.fixed);
                        a12 += item.a12 * Math.pow(10, this.fixed);
                        a13 += item.a13 * Math.pow(10, this.fixed);
                        a14 += item.a14 * Math.pow(10, this.fixed);
                        a15 += item.a15 * Math.pow(10, this.fixed);
                        a16 += item.a16 * Math.pow(10, this.fixed);
                        a17 += item.a17 * Math.pow(10, this.fixed);
                        a18 += item.a18 * Math.pow(10, this.fixed);
                        rst = 0;
                        for(var i=14;i<=18;i++){
                            rst += item[`a${i}`] * Math.pow(10, this.fixed);
                        }
                        item.a19 = rst * 1.0 / Math.pow(10, this.fixed);
                        a19 += item.a19 * Math.pow(10, this.fixed);
                    });
                    this.total.a2 = a2 * 1.0 / Math.pow(10, this.fixed);
                    this.total.a3 = a3 * 1.0 / Math.pow(10, this.fixed);
                    this.total.a4 = a4 * 1.0 / Math.pow(10, this.fixed);
                    this.total.a5 = a5 * 1.0 / Math.pow(10, this.fixed);
                    this.total.a6 = a6 * 1.0 / Math.pow(10, this.fixed);
                    this.total.a7 = a7 * 1.0 / Math.pow(10, this.fixed);
                    this.total.a8 = a8 * 1.0 / Math.pow(10, this.fixed);
                    this.total.a9 = a9 * 1.0 / Math.pow(10, this.fixed);
                    this.total.a10 = a10 * 1.0 / Math.pow(10, this.fixed);
                    this.total.a11 = a11 * 1.0 / Math.pow(10, this.fixed);
                    this.total.a12 = a12 * 1.0 / Math.pow(10, this.fixed);
                    this.total.a13 = a13 * 1.0 / Math.pow(10, this.fixed);
                    this.total.a14 = a14 * 1.0 / Math.pow(10, this.fixed);
                    this.total.a15 = a15 * 1.0 / Math.pow(10, this.fixed);
                    this.total.a16 = a16 * 1.0 / Math.pow(10, this.fixed);
                    this.total.a17 = a17 * 1.0 / Math.pow(10, this.fixed);
                    this.total.a18 = a18 * 1.0 / Math.pow(10, this.fixed);
                    this.total.a19 = a19 * 1.0 / Math.pow(10, this.fixed);
                },  
                deep:true//对象内部的属性监听，也叫深度监听  
            },
        },
        methods:{
            edt(item){
                //调用编辑接口
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA108020",{
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
            store.dispatch("getTableA108020",{
                data:{
                    "uid": "200",
                    "year": "2017",
                    "userId":"1"
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