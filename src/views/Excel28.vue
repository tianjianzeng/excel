<template>
    <div class="excel excel28">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col width="60px" />
                <col width="15%" />
                <col width="5%" />
                <col width="5%" />
                <col width="5%" />
                <col width="5%" />
                <col width="4%" />
                <col width="4%" />
                <col width="4%" />
                <col width="4%" />
                <col width="4%" />
                <col width="4%" />
                <col width="4%" />
                <col width="4%" />
                <col width="4%" />
                <col width="4%" />
                <col width="4%" />
                <col width="4%" />
                <col width="120px"/>                
                <tbody>
                    <tr>
                        <td colspan="20" class="ta-c">境外分支机构弥补亏损明细表</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c" rowspan="4">行次</td>
                        <td class="blue ta-c" rowspan="3">国家（地区）</td>
                        <td class="blue ta-c" colspan="4">非实际亏损额的弥补</td>
                        <td class="blue ta-c" colspan="15">境外所得纳税调整后所得</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c" rowspan="2">以前年度结转尚未弥补的非实际亏损额</td>
                        <td class="blue ta-c" rowspan="2">年发生的非实际亏损额</td>
                        <td class="blue ta-c" rowspan="2">本年弥补的以前年度非实际亏损额</td>
                        <td class="blue ta-c" rowspan="2">结转以后年度弥补的非实际亏损额</td>
                        <td class="blue ta-c" colspan="6">以前年度结转尚未弥补的实际亏损额</td>
                        <td class="blue ta-c" rowspan="2">本年发生的实际亏损额</td>
                        <td class="blue ta-c" rowspan="2">本年弥补的以前年度实际亏损额</td>
                        <td class="blue ta-c" colspan="7">结转以后年度弥补的实际亏损额</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">前五年</td>
                        <td class="blue ta-c">前四年</td>
                        <td class="blue ta-c">前三年</td>
                        <td class="blue ta-c">前二年</td>
                        <td class="blue ta-c">前一年</td>
                        <td class="blue ta-c">小计</td>
                        <td class="blue ta-c">前四年</td>
                        <td class="blue ta-c">前三年</td>
                        <td class="blue ta-c">前二年</td>
                        <td class="blue ta-c">前一年</td>
                        <td class="blue ta-c">本年</td>
                        <td class="blue ta-c" colspan="2">小计</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">1</td>
                        <td class="blue ta-c">2</td>
                        <td class="blue ta-c">3</td>
                        <td class="blue ta-c">4</td>
                        <td class="blue ta-c">5（2+3-4）</td>
                        <td class="blue ta-c">6</td>
                        <td class="blue ta-c">7</td>
                        <td class="blue ta-c">8</td>
                        <td class="blue ta-c">9</td>
                        <td class="blue ta-c">10</td>
                        <td class="blue ta-c">11（6+7+8+9+10）</td>
                        <td class="blue ta-c">12</td>
                        <td class="blue ta-c">13</td>
                        <td class="blue ta-c">14</td>
                        <td class="blue ta-c">15</td>
                        <td class="blue ta-c">16</td>
                        <td class="blue ta-c">17</td>
                        <td class="blue ta-c">18</td>
                        <td class="blue ta-c" colspan="2">19（14+15+16+17+18）</td>
                    </tr>
                    <tr v-for="(item,index) in list" :key="index">
                        <td class="blue">{{(index+1).toString().padStart(3,'0')}}</td>
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
                        <td class="green"><number-input v-model="item.a2" :fixed="fixed" :min="0"></number-input></td>
                        <td class="green"><number-input v-model="item.a3" :fixed="fixed" :min="0"></number-input></td>
                        <td class="green"><number-input v-model="item.a4" :fixed="fixed" :max="item.a2"></number-input></td>
                        <td><number-display v-model="item.a5" :fixed="fixed" :min="0"></number-display></td>
                        <td class="green"><number-input v-model="item.a6" :fixed="fixed" :min="0"></number-input></td>
                        <td class="green"><number-input v-model="item.a7" :fixed="fixed" :min="0"></number-input></td>
                        <td class="green"><number-input v-model="item.a8" :fixed="fixed" :min="0"></number-input></td>
                        <td class="green"><number-input v-model="item.a9" :fixed="fixed" :min="0"></number-input></td>
                        <td class="green"><number-input v-model="item.a10" :fixed="fixed" :min="0"></number-input></td>
                        <td><number-display :value="item.a11"></number-display></td>
                        <td class="green"><number-input v-model="item.a12" :fixed="fixed" :min="0"></number-input></td>
                        <td class="green"><number-input v-model="item.a13" :fixed="fixed" :max="item.a11"></number-input></td>
                        <td class="green"><number-input v-model="item.a14" :fixed="fixed" :min="0"></number-input></td>
                        <td class="green"><number-input v-model="item.a15" :fixed="fixed" :min="0"></number-input></td>
                        <td class="green"><number-input v-model="item.a16" :fixed="fixed" :min="0"></number-input></td>
                        <td class="green"><number-input v-model="item.a17" :fixed="fixed" :min="0"></number-input></td>
                        <td class="green"><number-input v-model="item.a18" :fixed="fixed" :min="0"></number-input></td>
                        <td><number-display :value="item.a19"></number-display></td>
                        <td><el-button type="primary" @click="edt(item)">保存</el-button></td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue">合计</td>
                        <td><number-display :value="total.a2"></number-display></td>
                        <td><number-display :value="total.a3"></number-display></td>
                        <td><number-display :value="total.a4"></number-display></td>
                        <td><number-display :value="total.a5"></number-display></td>
                        <td><number-display :value="total.a6"></number-display></td>
                        <td><number-display :value="total.a7"></number-display></td>
                        <td><number-display :value="total.a8"></number-display></td>
                        <td><number-display :value="total.a9"></number-display></td>
                        <td><number-display :value="total.a10"></number-display></td>
                        <td><number-display :value="total.a11"></number-display></td>
                        <td><number-display :value="total.a12"></number-display></td>
                        <td><number-display :value="total.a13"></number-display></td>
                        <td><number-display :value="total.a14"></number-display></td>
                        <td><number-display :value="total.a15"></number-display></td>
                        <td><number-display :value="total.a16"></number-display></td>
                        <td><number-display :value="total.a17"></number-display></td>
                        <td><number-display :value="total.a18"></number-display></td>
                        <td colspan="2"><number-display :value="total.a19"></number-display></td>
                    </tr> 
                </tbody>
            </table>
        </div>
        <el-button type="primary" @click="refresh">刷新</el-button>
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
                if(this.a4>this.a2){
                    window.root && window.root.$emit("bizError",'第4列应该小于等于第2列');
                    return;
                }
                for(let i of [2,3,4,6,7,8,9,10,12,13,14,15,16,17,18]){
                    if(this[`a${i}`]<0){
                        window.root && window.root.$emit("bizError",`第${i}列应大于等于0`);
                        return;
                    }
                }
                //调用编辑接口
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA108020",{
                    data:{
                        year: this.year,
                        uid: this.uid,
                        userId: this.userId,
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
                        a18:item.a18,
                        a19:item.a19
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
            load(){
                this.uid = this.$route.query.uid;
                this.year = this.$route.query.year;
                this.userId = this.$route.query.userId;
                this.mon = this.$route.query.mon;
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("getCResult108010");
                store.dispatch("getTableA108020",{
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
                    urlParam:"a108020",
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