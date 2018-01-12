<template>
    <div class="excel excel26">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <tbody>
                    <tr>
                        <td colspan="21">境外所得税收抵免明细表</td>
                    </tr>
                    <tr>
                        <td class="blue" rowspan="3">行次</td>
                        <td class="blue" rowspan="2">国家（地区）</td>
                        <td class="blue" rowspan="2">境外税前所得</td>
                        <td class="blue" rowspan="2">境外所得纳税调整后所得</td>
                        <td class="blue" rowspan="2">弥补境外以前年度亏损</td>
                        <td class="blue" rowspan="2">境外应纳税所得额</td>
                        <td class="blue" rowspan="2">抵减境内亏损</td>
                        <td class="blue" rowspan="2">抵减境内亏损后的境外应纳税所得额</td>
                        <td class="blue" rowspan="2">税率</td>
                        <td class="blue" rowspan="2">境外所得应纳税额</td>
                        <td class="blue" rowspan="2">境外所得可抵免税额</td>
                        <td class="blue" rowspan="2">境外所得抵免限额</td>
                        <td class="blue" rowspan="2">本年可抵免境外所得税额</td>
                        <td class="blue" rowspan="2">未超过境外所得税抵免限额的余额</td>
                        <td class="blue" rowspan="2">本年可抵免以前年度未抵免境外所得税额</td>
                        <td class="blue" colspan="4">按简易办法计算</td>
                        <td class="blue" rowspan="2" colspan="2">境外所得抵免所得税额合计</td>
                    </tr>
                    <tr>
                        <td class="blue">按低于12.5%的实际税率计算的抵免额</td>
                        <td class="blue">按12.5%计算的抵免额</td>
                        <td class="blue">按25%计算的抵免额</td>
                        <td class="blue">小计</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue">2</td>
                        <td class="blue">3</td>
                        <td class="blue">4</td>
                        <td class="blue">5（3-4）</td>
                        <td class="blue">6</td>
                        <td class="blue">7（5-6）</td>
                        <td class="blue">8</td>
                        <td class="blue">9（7×8）</td>
                        <td class="blue">10</td>
                        <td class="blue">11</td>
                        <td class="blue">12</td>
                        <td class="blue">13（11-12）</td>
                        <td class="blue">14</td>
                        <td class="blue">15</td>
                        <td class="blue">16</td>
                        <td class="blue">17</td>
                        <td class="blue">18（15+16+17）</td>
                        <td class="blue" colspan="2">19（12+14+18）</td>
                    </tr>
                    <tr v-for="(item,index) in list" :key="index">
                        <td class="blue">001</td>
                        <td>{{item.a1}}</td>
                        <td><number-display :value="item.a2"></number-display></td>
                        <td><number-display :value="item.a3"></number-display></td>
                        <td><number-display :value="item.a4"></number-display></td>
                        <td><number-display :value="item.a5"></number-display></td>
                        <td class="green"><number-input v-model="item.a6" :fixed="fixed"></number-input></td>
                        <td><number-display :value="item.a7"></number-display></td>
                        <td class="green">
                            <el-select placeholder="请选择">
                                <el-option
                                    v-for="item in a8Template"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                                </el-option>
                            </el-select>
                        </td>
                        <td><number-display :value="item.a9"></number-display></td>
                        <td><number-display :value="item.a10"></number-display></td>
                        <td class="green"><number-input v-model="item.a11" :fixed="fixed"></number-input></td>
                        <td><number-display :value="item.a12"></number-display></td>
                        <td><number-display :value="item.a13"></number-display></td>
                        <td><number-display :value="item.a14"></number-display></td>
                        <td class="green"><number-input v-model="item.a15" :min="0" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a16" :min="0" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a17" :min="0" :fixed="fixed"></number-input></td>
                        <td><number-display :value="item.a18"></number-display></td>
                        <td><number-input v-model="item.a19" :max="item.a9" :fixed="fixed"></number-input></td>
                        <td><el-button type="primary" @click="edit(item)">保存</el-button></td>
                    </tr>
                    <tr>
                        <td class="blue"></td>
                        <td class="blue">合计</td>
                        <td><number-display :value="total.a2||0"></number-display></td>
                        <td><number-display :value="total.a3||0"></number-display></td>
                        <td><number-display :value="total.a4||0"></number-display></td>
                        <td><number-display :value="total.a5||0"></number-display></td>
                        <td><number-display :value="total.a6||0"></number-display></td>
                        <td><number-display :value="total.a7||0"></number-display></td>
                        <td><number-display :value="total.a8||0"></number-display></td>
                        <td><number-display :value="total.a9||0"></number-display></td>
                        <td><number-display :value="total.a10||0"></number-display></td>
                        <td><number-display :value="total.a11||0"></number-display></td>
                        <td><number-display :value="total.a12||0"></number-display></td>
                        <td><number-display :value="total.a13||0"></number-display></td>
                        <td><number-display :value="total.a14||0"></number-display></td>
                        <td><number-display :value="total.a15||0"></number-display></td>
                        <td><number-display :value="total.a16||0"></number-display></td>
                        <td><number-display :value="total.a17||0"></number-display></td>
                        <td><number-display :value="total.a18||0"></number-display></td>
                        <td colspan="2"><number-display :value="total.a19||0"></number-display></td>
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
        name: 'excel26',
        data() {
            return {
                fixed:2,
                total:{},
                list:[],
                a8Template:[{id:0.15,name:"15%"},{id:0.25,name:"25%"}]
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput,
            NumberDisplay
        },
        computed: {
            ...mapGetters(["getTableA108000"])
        },
        watch: {
            getTableA108000(newVal){
                if(newVal!=null){
                    this.list = newVal.rows && JSON.parse(JSON.stringify(newVal.rows)) ||[];
                    this.total = newVal.total && JSON.parse(JSON.stringify(newVal.total));
                }
            },
            list:{
                handler(val){
                    this.total = {
                        a2: 0,
                        a3: 0,
                        a4: 0,
                        a5: 0,
                        a6: 0,
                        a7: 0,
                        a8: 0,
                        a9: 0,
                        a10: 0,
                        a11: 0,
                        a12: 0,
                        a13: 0,
                        a14: 0,
                        a15: 0,
                        a16: 0,
                        a17: 0,
                        a18: 0,
                        a19: 0
                    }
                    val.forEach((item,index)=>{
                        item.a4 = item.a3 * 0.1;
                        item.a5 = ((item.a3||0) * Math.pow(10, this.fixed) - (item.a4||0) * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
                        item.a7 = ((item.a5||0) * Math.pow(10, this.fixed) - (item.a6||0) * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
                        item.a9 = item.a7 * item.a8;
                        item.a12 = Math.min(item.a10,item.a11);
                        item.a13 = item.a11 - item.a12;
                        item.a18 = ((item.a15||0) * Math.pow(10, this.fixed) + (item.a16||0) * Math.pow(10, this.fixed) + (item.a16||0) * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
                        item.a19 = ((item.a12||0) * Math.pow(10, this.fixed) + (item.a14||0) * Math.pow(10, this.fixed) + (item.a18||0) * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
                        this.total.a2 += item.a2;
                        this.total.a3 += item.a3;
                        this.total.a4 += item.a4;
                        this.total.a5 += item.a5;
                        this.total.a6 += item.a6;
                        this.total.a7 += item.a7;
                        this.total.a8 += item.a8;
                        this.total.a9 += item.a9;
                        this.total.a10 += item.a10;
                        this.total.a11 += item.a11;
                        this.total.a12 += item.a12;
                        this.total.a13 += item.a13;
                        this.total.a14 += item.a14;
                        this.total.a15 += item.a15;
                        this.total.a16 += item.a16;
                        this.total.a17 += item.a17;
                        this.total.a18 += item.a18;
                        this.total.a19 += item.a19;
                    });
                },
                deep: true
            }
        },
        methods:{
            edit(item){
                if(this.invalid>0){
                    window.root && window.root.$emit("bizError",'请修改不和规范的字段后再进行保存');
                    return;
                }
                let postData = {
                    a6: item.a6,
                    a8: item.a8,
                    a11: item.a11,
                    a15:item.a15,
                    a16: item.a16,
                    a17: item.a17,
                    id:item.id
                };
                
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA108000", {
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
                store.dispatch("getTableA108000", {
                    data: {
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
                    urlParam:"a108000",
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