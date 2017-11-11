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
                        <td>{{item.a1|formatCurrency}}</td>
                        <td>{{item.a2|formatCurrency}}</td>
                        <td>{{item.a3|formatCurrency}}</td>
                        <td>{{item.a4|formatCurrency}}</td>
                        <td>{{item.a5|formatCurrency}}</td>
                        <td class="green"><number-input v-model="item.a6" :fixed="fixed"></number-input></td>
                        <td>{{item.a7|formatCurrency}}</td>
                        <td class="green"><number-input v-model="item.a8" :fixed="fixed"></number-input></td>
                        <td>{{item.a9|formatCurrency}}</td>
                        <td>{{item.a10|formatCurrency}}</td>
                        <td class="green"><number-input v-model="item.a11" :fixed="fixed"></number-input></td>
                        <td>{{item.a12|formatCurrency}}</td>
                        <td>{{item.a13|formatCurrency}}</td>
                        <td>{{item.a14|formatCurrency}}</td>
                        <td class="green"><number-input v-model="item.a15" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a16" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a17" :fixed="fixed"></number-input></td>
                        <td>{{item.a18|formatCurrency}}</td>
                        <td>{{item.a19|formatCurrency}}</td>
                        <td><el-button type="primary" @click="edit(item)">保存</el-button></td>
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
                        <td colspan="2">{{total.a19|formatCurrency}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
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
        name: 'excel26',
        data() {
            return {
                fixed:2,
                total:{},
                list:[]
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableA108000"])
        },
        watch: {
            getTableA108000(newVal){
                if(newVal!=null){
                    this.list = newVal.rows && JSON.parse(JSON.stringify(newVal.rows));
                    this.total = newVal.total && JSON.parse(JSON.stringify(newVal.total));
                }
            },
            list:{
                handler(val){
                    var a7=0,
                        a8=0;
                        
                    val[0].a11 = Math.min(val[5].a2, val[0].a4-val[0].a10);
                    val[1].a11 = Math.min(val[5].a2-val[0].a11, val[1].a4-val[1].a10);
                    val[2].a11 = Math.min(val[5].a2-val[1].a11, val[2].a4-val[2].a10);
                    val[3].a11 = Math.min(val[5].a2-val[2].a11, val[3].a4-val[3].a10);
                    val[4].a11 = Math.min(val[5].a2-val[3].a11, val[4].a4-val[4].a10);
                    val[5].a11 = Math.min(val[5].a2-val[4].a11, val[5].a4);
                    val.forEach((item,index)=>{
                        item.a4 = item.a3 * 0.1;
                        item.a10 = ((item.a5||0) * Math.pow(10, this.fixed) + (item.a6||0) * Math.pow(10, this.fixed) + (item.a7||0) * Math.pow(10, this.fixed) + (item.a8||0) * Math.pow(10, this.fixed) + (item.a9||0) * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
                        if(index!=0){
                            item.a12 = ((item.a4) * Math.pow(10, this.fixed) - (item.a10||0) * Math.pow(10, this.fixed) - (item.a11||0) * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
                            a8 += item.a12;
                        }
                        a7 += item.a11;
                    });
                    this.a7Check = a7;
                    this.a8 = a8;
                },
                deep: true
            }
        },
        methods:{
            edit(item){
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
            }
        },
        mounted() {
            const loading = this.$loading({
                lock: true,
                text: '加载中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            store.dispatch("getTableA108000", {
                data: {
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