<template>
    <div class="excel excel29">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col width="3%" ></col>
                <col width="12%" ></col>
                <col width="5%" ></col>
                <col width="5%" ></col>
                <col width="5%" ></col>
                <col width="5%" ></col>
                <col width="4%" ></col>
                <col width="4%" ></col>
                <col width="4%" ></col>
                <col width="4%" ></col>
                <col width="4%" ></col>
                <col width="4%" ></col>
                <col width="4%" ></col>
                <col width="4%" ></col>
                <col width="4%" ></col>
                <col width="4%" ></col>
                <col width="4%" ></col>
                <col width="4%" ></col>
                <col width="4%" ></col>
                <col width="4%" ></col>
                <col width="60px"></col>
                <tbody>
                    <tr>
                        <td colspan="21">跨年度结转抵免境外所得税明细表</td>
                    </tr>
                    <tr>
                        <td class="blue" rowspan="3">行次</td>
                        <td class="blue" rowspan="2">国家（地区）</td>
                        <td class="blue" colspan="6">前五年境外所得已缴所得税未抵免余额</td>
                        <td class="blue" colspan="6">本年实际抵免以前年度未抵免的境外已缴所得税额</td>
                        <td class="blue" colspan="7">结转以后年度抵免的境外所得已缴所得税额</td>
                    </tr>
                    <tr>
                        <td class="blue">前五年</td>
                        <td class="blue">前四年</td>
                        <td class="blue">前三年</td>
                        <td class="blue">前二年</td>
                        <td class="blue">前一年</td>
                        <td class="blue">小计</td>
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
                        <td class="blue">5（3-4）</td>
                        <td class="blue">6</td>
                        <td class="blue">7（2+3+4+5+6）</td>
                        <td class="blue">8</td>
                        <td class="blue">9</td>
                        <td class="blue">10</td>
                        <td class="blue">11</td>
                        <td class="blue">12</td>
                        <td class="blue">13（8+9+10+11+12）</td>
                        <td class="blue">14（3-9）</td>
                        <td class="blue">15（4-10）</td>
                        <td class="blue">16（5-11）</td>
                        <td class="blue">17（6-12）</td>
                        <td class="blue">18</td>
                        <td class="blue" colspan="2">19（14+15+16+17+18）</td>
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
                        <td class="green"><number-input v-model="item.a4" :fixed="fixed" :min="0"></number-input></td>
                        <td class="green"><number-input v-model="item.a5" :fixed="fixed" :min="0"></number-input></td>
                        <td class="green"><number-input v-model="item.a6" :fixed="fixed" :min="0"></number-input></td>
                        <td><number-display :value="item.a7"></number-display></td>
                        <td class="green"><number-input v-model="item.a8" :fixed="fixed" :min="0" :max="item.a2"></number-input></td>
                        <td class="green"><number-input v-model="item.a9" :fixed="fixed" :min="0" :max="item.a3"></number-input></td>
                        <td class="green"><number-input v-model="item.a10" :fixed="fixed" :min="0" :max="item.a4"></number-input></td>
                        <td class="green"><number-input v-model="item.a11" :fixed="fixed" :min="0" :max="item.a5"></number-input></td>
                        <td class="green"><number-input v-model="item.a12" :fixed="fixed" :min="0" :max="item.a6"></number-input></td>
                        <td><number-display :value="item.a13"></number-display></td>
                        <td><number-display :value="item.a14"></number-display></td>
                        <td><number-display :value="item.a15"></number-display></td>
                        <td><number-display :value="item.a16"></number-display></td>
                        <td><number-display :value="item.a17"></number-display></td>
                        <td class="green"><number-input v-model="item.a18" :fixed="fixed"></number-input></td>
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
    import {formatCurrency} from '../utils/filters'

    export default {
        name: 'excel29',
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
            ...mapGetters(["getTableA108030","getCResult108010"])
        },
        watch: {
            getTableA108030(newVal) {
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
                        item.a5 = (item.a3 * Math.pow(10, this.fixed) - item.a4 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
                        a5 += item.a5 * Math.pow(10, this.fixed);
                        a6 += item.a6 * Math.pow(10, this.fixed);                        
                        let rst = 0;
                        for(var i=2;i<=6;i++){
                            rst += item[`a${i}`] * Math.pow(10, this.fixed);
                        }
                        item.a7 = rst * 1.0 / Math.pow(10, this.fixed);
                        a7 += item.a7 * Math.pow(10, this.fixed);
                        a8 += item.a8 * Math.pow(10, this.fixed);
                        a9 += item.a9 * Math.pow(10, this.fixed);
                        a10 += item.a10 * Math.pow(10, this.fixed);
                        a11 += item.a11 * Math.pow(10, this.fixed);
                        a12 += item.a12 * Math.pow(10, this.fixed);
                        rst = 0;
                        for(var i=8;i<=12;i++){
                            rst += item[`a${i}`] * Math.pow(10, this.fixed);
                        }
                        item.a13 = rst * 1.0 / Math.pow(10, this.fixed);
                        a13 += item.a13 * Math.pow(10, this.fixed);
                        item.a14 = (item.a3 * Math.pow(10, this.fixed) - item.a9 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
                        a14 += item.a14 * Math.pow(10, this.fixed);
                        item.a15 = (item.a4 * Math.pow(10, this.fixed) - item.a10 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
                        a15 += item.a15 * Math.pow(10, this.fixed);
                        item.a16 = (item.a5 * Math.pow(10, this.fixed) - item.a11 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
                        a16 += item.a16 * Math.pow(10, this.fixed);
                        item.a17 = (item.a6 * Math.pow(10, this.fixed) - item.a12 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
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
                store.dispatch("editA108030",{
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
                store.dispatch("getTableA108030",{
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
                    urlParam:"a108030",
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