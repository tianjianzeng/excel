<template>
    <div class="excel excel20">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <tbody>
                    <tr>
                        <td colspan="20">研发费用加计扣除优惠明细表</td>
                    </tr>
                    <tr>
                        <td style="width:5%"class="blue" rowspan="3">行次</td>
                        <td style="width:75%" class="blue" rowspan="2">研发项目</td>
                        <td style="width:20%" class="blue" colspan="9">本年研发费用明细</td>
                        <td style="width:75%" class="blue" rowspan="2">减:作为不征税收入处理的财政性资金用于研发的部分</td>
                        <td style="width:75%" class="blue" rowspan="2">可加计扣除的研发费用合计</td>
                        <td style="width:20%" class="blue" colspan="2">费用化部分</td>
                        <td style="width:20%" class="blue" colspan="4">资本化部分</td>
                        <td style="width:20%" class="blue" rowspan="2">本年研发费用加计扣除额合计</td>
                    </tr>
                    <tr>
                        <td class="blue">研发活动直接消耗的材料、燃料和动力费用</td>
                        <td class="blue">直接从事研发活动的本企业在职人员费用</td>
                        <td class="blue">专门用于研发活动的有关折旧费、租赁费、运行维护费</td>
                        <td class="blue">专门用于研发活动的有关无形资产摊销费</td>
                        <td class="blue">中间试验和产品试制的有关费用，样品、样机及一般测试手段购置费</td>
                        <td class="blue">研发成果论证、评审、验收、鉴定费用</td>
                        <td class="blue">勘探开发技术的现场试验费，新药研制的临床试验费</td>
                        <td class="blue">设计、制定、资料和翻译费用</td>
                        <td class="blue">年度研发费用合计</td>
                        <td class="blue">计入本年损益的金额</td>
                        <td class="blue">计入本年研发费用加计扣除额</td>
                        <td class="blue">本年形成无形资产的金额</td>
                        <td class="blue">本年形成无形资产加计摊销额</td>
                        <td class="blue">以前年度形成无形资产本年加计摊销额</td>
                        <td class="blue">无形资产本年加计摊销额</td>
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
                        <td class="blue">9</td>
                        <td class="blue">10（2+3+4+5+6+7+8+9）</td>
                        <td class="blue">11</td>
                        <td class="blue">12（10-11）</td>
                        <td class="blue">13</td>
                        <td class="blue">14（13×50%）</td>
                        <td class="blue">15</td>
                        <td class="blue">16</td>
                        <td class="blue">17</td>
                        <td class="blue">18（16+17）</td>
                        <td class="blue">19（14+18）</td>
                    </tr>
                    <tr v-for="(item,index) in list" :key="index">
                        <td class="blue">{{(index+1).toString().padStart(3,"0")}}</td>
                        <td>{{item.a1}}</td>
                        <td class="green">{{item.a2|formatCurrency}}</td>
                        <td class="green">{{item.a3|formatCurrency}}</td>
                        <td class="green">{{item.a4|formatCurrency}}</td>
                        <td class="green">{{item.a5|formatCurrency}}</td>
                        <td class="green">{{item.a6|formatCurrency}}</td>
                        <td class="green">{{item.a7|formatCurrency}}</td>
                        <td class="green">{{item.a8|formatCurrency}}</td>
                        <td class="green">{{item.a9|formatCurrency}}</td>
                        <td>{{item.a10|formatCurrency}}</td>
                        <td class="green">{{item.a11|formatCurrency}}</td>
                        <td>{{item.a12|formatCurrency}}</td>
                        <td class="green">{{item.a13|formatCurrency}}</td>
                        <td>{{item.a14|formatCurrency}}</td>
                        <td class="green">{{item.a15|formatCurrency}}</td>
                        <td class="green">{{item.a16|formatCurrency}}</td>
                        <td class="green">{{item.a17|formatCurrency}}</td>
                        <td>{{item.a18|formatCurrency}}</td>
                        <td>{{item.a19|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue"></td>
                        <td class="blue">合计</td>
                        <td >{{total.a2|formatCurrency}}</td>
                        <td >{{total.a3|formatCurrency}}</td>
                        <td >{{total.a4|formatCurrency}}</td>
                        <td >{{total.a5|formatCurrency}}</td>
                        <td >{{total.a6|formatCurrency}}</td>
                        <td >{{total.a7|formatCurrency}}</td>
                        <td >{{total.a8|formatCurrency}}</td>
                        <td >{{total.a9|formatCurrency}}</td>
                        <td >{{total.a10|formatCurrency}}</td>
                        <td >{{total.a11|formatCurrency}}</td>
                        <td >{{total.a12|formatCurrency}}</td>
                        <td >{{total.a13|formatCurrency}}</td>
                        <td >{{total.a14|formatCurrency}}</td>
                        <td >{{total.a15|formatCurrency}}</td>
                        <td >{{total.a16|formatCurrency}}</td>
                        <td >{{total.a17|formatCurrency}}</td>
                        <td >{{total.a18|formatCurrency}}</td>
                        <td >{{total.a19|formatCurrency}}</td>
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
        name: 'excel20',
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
            ...mapGetters(["getTableA107014"])
        },
        watch:{
            getTableA107014(newVal){
                this.list = newVal.rows && JSON.parse(JSON.stringify(newVal.rows));
                this.total = newVal.total && JSON.parse(JSON.stringify(newVal.total));
            },
            list:{
                handler(newVal){
                    // newVal.forEach(item=>{
                    //     if(item.saved === undefined){
                    //         item.saved = true;
                    //     }
                    //     let rst = 0;
                    //     for(let i=2;i<=9;i++){
                    //         rst += item[`a${i}`] * Math.pow(10,this.fixed);
                    //     }
                    //     item.a10 = rst * 1.0/ Math.pow(10,this.fixed);
                    //     item.a12 = (item.a10 * Math.pow(10,this.fixed) - item.a11 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
                    //     item.a14 = item.a13 * 0.5;
                    //     item.a18 = (item.a16 * Math.pow(10,this.fixed) + item.a17 * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
                    //     item.a19 = (item.a14 * Math.pow(10,this.fixed) + item.a18 * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
                    // });
                },
                deep:true
            }
        },
        mounted() {
            const loading = this.$loading({
                lock: true,
                text: '加载中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            store.dispatch("getTableA107014",{
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
    .excel20{
        td{
            text-align: left;
            padding-left: 10px;
        }
        td[colspan="20"]{
            text-align: center;
        }
    }
</style>