<template>
    <div class="excel excel24">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <tbody>
                    <tr>
                        <td colspan="6">软件、集成电路企业优惠情况及明细表</td>
                    </tr>
                    <tr>
                        <td style="width:5%"class="blue">行次</td>
                        <td style="width:95%" class="blue" colspan="5">基本信息</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td style="width:40%" class="blue" colspan="2">企业成立日期</td>
                        <td style="width:10%" class="green">{{""}}</td>
                        <td style="width:35%" class="blue">软件企业证书取得日期</td>
                        <td style="width:10%" class="green"><input type="date"></td>
                    </tr>
                    <tr>
                        <td class="blue">2</td>
                        <td class="blue" colspan="2">软件企业认定证书编号</td>
                        <td class="green"><input></td>
                        <td class="blue">软件产品登记证书编号</td>
                        <td class="green">
                            <input>
                        </td>
                    </tr>
                    <tr>
                        <td class="blue">3</td>
                        <td class="blue" colspan="2">计算机信息系统集成资质等级认定证书编号</td>
                        <td class="green">
                            <input>
                        </td>
                        <td class="blue">集成电路生产企业认定文号</td>
                        <td class="green">
                            <input>
                        </td>
                    </tr>
                    <tr>
                        <td class="blue">4</td>
                        <td class="blue" colspan="2">集成电路设计企业认定证书编号</td>
                        <td class="green" colspan="3">
                            <input>
                        </td>
                    </tr>
                    <tr>
                        <td class="blue">5</td>
                        <td class="blue" colspan="5">关键指标情况（2011年1月1日以后成立企业填报）</td>
                    </tr>
                    <tr>
                        <td class="blue">6</td>
                        <td class="blue" rowspan="5" style="width:5%">人员指标</td>
                        <td class="blue" colspan="3">一、企业本年月平均职工总人数</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">7</td>
                        <td class="blue" colspan="3">    其中:签订劳动合同关系且具有大学专科以上学历的职工人数</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">8</td>
                        <td class="blue" colspan="3">二、研究开发人员人数</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">9</td>
                        <td class="blue" colspan="3">三、签订劳动合同关系且具有大学专科以上学历的职工人数占企业当年月平均职工总人数的比例（7÷6）</td>
                        <td>{{0|formatCurrency}}百分比显示，2位小数，四舍五入例：12.34%"</td>
                    </tr>
                    <tr>
                        <td class="blue">10</td>
                        <td class="blue" colspan="3">四、研究开发人员占企业本年月平均职工总数的比例（8÷6）</td>
                        <td>{{0|formatCurrency}}百分比显示，2位小数，四舍五入例：12.34%"</td>
                    </tr>
                    <tr>
                        <td class="blue">11</td>
                        <td class="blue" rowspan="5">收入指标</td>
                        <td class="blue" colspan="3">五、企业收入总额</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">12</td>
                        <td class="blue" colspan="3">六、集成电路制造销售（营业）收入</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">13</td>
                        <td class="blue" colspan="3">七、集成电路制造销售（营业）收入占企业收入总额的比例（12÷11）</td>
                        <td>{{0|formatCurrency}}百分比显示，2位小数，四舍五入例：12.34%"</td>
                    </tr>
                    <tr>
                        <td class="blue">14</td>
                        <td class="blue" colspan="3">八、集成电路设计销售（营业）收入</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">15</td>
                        <td class="blue" colspan="3">    其中：集成电路自主设计销售（营业）收入</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">16</td>
                        <td class="blue" colspan="3">九、集成电路设计企业的集成电路设计销售（营业）收入占企业收入总额的比例（14÷11）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">17</td>
                        <td class="blue" colspan="3">十、集成电路自主设计销售（营业）收入占企业收入总额的比例（15÷11）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">18</td>
                        <td class="blue" colspan="3">十一、软件产品开发销售（营业）收入</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">19</td>
                        <td class="blue" colspan="3">     其中：嵌入式软件产品和信息系统集成产品开发销售（营业）收入</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">20</td>
                        <td class="blue" colspan="3">十二、软件产品自主开发销售（营业）收入</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">21</td>
                        <td class="blue" colspan="3">     其中：嵌入式软件产品和信息系统集成产品自主开发销售（营业）收入</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">22</td>
                        <td class="blue" colspan="3">十三、软件企业的软件产品开发销售（营业）收入占企业收入总额的比例（18÷11）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">23</td>
                        <td class="blue" colspan="3">十四、嵌入式软件产品和信息系统集成产品开发销售（营业）收入占企业收入总额的比例（19÷11）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">24</td>
                        <td class="blue" colspan="3">十五、软件产品自主开发销售（营业）收入占企业收入总额的比例（20÷11）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">25</td>
                        <td class="blue" colspan="3">十六、嵌入式软件产品和信息系统集成产品自主开发销售（营业）收入占企业收入总额的比例（21÷11）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">26</td>
                        <td class="blue" rowspan="3">研究开发费用指标</td>
                        <td class="blue" colspan="3">十七、研究开发费用总额</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">27</td>
                        <td class="blue" colspan="3">     其中：企业在中国境内发生的研究开发费用金额</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">28</td>
                        <td class="blue" colspan="3">十八、研究开发费用总额占企业销售（营业）收入总额的比例</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input>录入结果以%显示，2位小数，不限制正负零</td>
                    </tr>
                    <tr>
                        <td class="blue">29</td>
                        <td class="blue" colspan="3">十九、企业在中国境内发生的研究开发费用金额占研究开发费用总额的比例（27÷26）</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">30</td>
                        <td class="blue" colspan="5">关键指标情况（2011年1月1日以前成立企业填报）</td>
                    </tr>
                    <tr>
                        <td class="blue">31</td>
                        <td class="blue" rowspan="3">人员指标</td>
                        <td class="blue" colspan="3">二十、企业职工总数</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">32</td>
                        <td class="blue" colspan="3">二十一、从事软件产品开发和技术服务的技术人员</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">33</td>
                        <td class="blue" colspan="3">二十二、从事软件产品开发和技术服务的技术人员占企业职工总数的比例（32÷31）</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">34</td>
                        <td class="blue" rowspan="5">收入指标</td>
                        <td class="blue" colspan="3">二十三、企业年总收入</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">35</td>
                        <td class="blue" colspan="3">    其中：企业年软件销售收入</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">36</td>
                        <td class="blue" colspan="3">        其中：自产软件销售收入</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">37</td>
                        <td class="blue" colspan="3">二十四、软件销售收入占企业年总收入比例（35÷34）</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">38</td>
                        <td class="blue" colspan="3">二十五、自产软件收入占软件销售收入比例（36÷35）</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">39</td>
                        <td class="blue" rowspan="2">研究开发经费指标</td>
                        <td class="blue" colspan="3">二十六、软件技术及产品的研究开发经费</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">40</td>
                        <td class="blue" colspan="3">二十七、软件技术及产品的研究开发经费占企业年软件收入比例（39÷35）</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">41</td>
                        <td class="blue" colspan="4">减免税金额</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
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
        name: 'excel24',
        data() {
            return {
                fixed:2,
                a106:true,
                a107:false,
                "a3_1": 0,
                "a3_2": 0,
                "a3_3": 0,
                "a3_4": 0,
                "a3_5": 0,
                "a3_7": 0,
                "a4_1": 0,
                "a4_2": 0,
                "a4_3": 0,
                "a4_4": 0,
                "a4_5": 0,
                "a4_7": 0,
                "a5_1": 0,
                "a5_2": 0,
                "a5_3": 0,
                "a5_4": 0,
                "a5_5": 0,
                "a5_7": 0,
                "a6_1": 0,
                "a6_2": 0,
                "a6_3": 0,
                "a6_4": 0,
                "a6_5": 0,
                "a6_7": 0,
                "a7_1": 0,
                "a7_2": 0,
                "a7_3": 0,
                "a7_4": 0,
                "a7_5": 0,
                "a7_7": 0,
                "a8_1": 0,
                "a8_2": 0,
                "a8_3": 0,
                "a8_4": 0,
                "a8_5": 0,
                "a8_7": 0,
                "a9_1": 0,
                "a9_2": 0,
                "a9_3": 0,
                "a9_4": 0,
                "a9_5": 0,
                "a9_7": 0,
                "a10_1": 0,
                "a10_2": 0,
                "a10_3": 0,
                "a10_4": 0,
                "a10_5": 0,
                "a10_7": 0,
                "a11_1": 0,
                "a11_2": 0,
                "a11_3": 0,
                "a11_4": 0,
                "a11_5": 0,
                "a11_7": 0,
                "a12_1": 0,
                "a12_2": 0,
                "a12_3": 0,
                "a12_4": 0,
                "a12_5": 0,
                "a12_7": 0,
                "a14_1": 0,
                "a14_2": 0,
                "a14_3": 0,
                "a14_4": 0,
                "a14_5": 0,
                "a14_7": 0,
                "a15_1": 0,
                "a15_2": 0,
                "a15_3": 0,
                "a15_4": 0,
                "a15_5": 0,
                "a15_7": 0,
                "a16_1": 0,
                "a16_2": 0,
                "a16_3": 0,
                "a16_4": 0,
                "a16_5": 0,
                "a16_7": 0,
                "a18_1": 0,
                "a18_2": 0,
                "a18_3": 0,
                "a18_4": 0,
                "a18_5": 0,
                "a18_7": 0,
                "a19_1": 0,
                "a19_2": 0,
                "a19_3": 0,
                "a19_4": 0,
                "a19_5": 0,
                "a19_7": 0,
                "a20_1": 0,
                "a20_2": 0,
                "a20_3": 0,
                "a20_4": 0,
                "a20_5": 0,
                "a20_7": 0,
                "a21_1": 0,
                "a21_2": 0,
                "a21_3": 0,
                "a21_4": 0,
                "a21_5": 0,
                "a21_7": 0,
                "a22_1": 0,
                "a22_2": 0,
                "a22_3": 0,
                "a22_4": 0,
                "a22_5": 0,
                "a22_7": 0,
                "a23_1": 0,
                "a23_2": 0,
                "a23_3": 0,
                "a23_4": 0,
                "a23_5": 0,
                "a23_7": 0,
                "a24_1": 0,
                "a24_2": 0,
                "a24_3": 0,
                "a24_4": 0,
                "a24_5": 0,
                "a24_7": 0,
                "a25_1": 0,
                "a25_2": 0,
                "a25_3": 0,
                "a25_4": 0,
                "a25_5": 0,
                "a25_7": 0,
                "a27_1": 0,
                "a27_2": 0,
                "a27_3": 0,
                "a27_4": 0,
                "a27_5": 0,
                "a27_7": 0,
                "a28_1": 0,
                "a28_2": 0,
                "a28_3": 0,
                "a28_4": 0,
                "a28_5": 0,
                "a28_7": 0,
                "a29_1": 0,
                "a29_2": 0,
                "a29_3": 0,
                "a29_4": 0,
                "a29_5": 0,
                "a29_7": 0,
                "a30_1": 0,
                "a30_2": 0,
                "a30_3": 0,
                "a30_4": 0,
                "a30_5": 0,
                "a30_7": 0,
                "a31_1": 0,
                "a31_2": 0,
                "a31_3": 0,
                "a31_4": 0,
                "a31_5": 0,
                "a31_7": 0,
                "a32_1": 0,
                "a32_2": 0,
                "a32_3": 0,
                "a32_4": 0,
                "a32_5": 0,
                "a32_7": 0,
                "a33_1": 0,
                "a33_2": 0,
                "a33_3": 0,
                "a33_4": 0,
                "a33_5": 0,
                "a33_6": 0,
                "a34_1": 0,
                "a34_2": 0,
                "a34_3": 0,
                "a34_4": 0,
                "a34_5": 0,
                "a34_6": 0,
                "a34_7": 0,
                "a35_1": 0,
                "a35_2": 0,
                "a35_3": 0,
                "a35_4": 0,
                "a35_5": 0,
                "a35_6": 0,
                "a35_7": 0,
                "a36_6": 0,
                "a37_1": 0,
                "a37_2": 0,
                "a37_3": 0,
                "a37_4": 0,
                "a37_5": 0,
                "a37_6": 0,
                "a37_7": 0,
                "a38_1": 0,
                "a38_2": 0,
                "a38_3": 0,
                "a38_4": 0,
                "a38_5": 0,
                "a38_6": 0,
                "a38_7": 0,
                "a39_1": 0,
                "a39_2": 0,
                "a39_3": 0,
                "a39_4": 0,
                "a39_5": 0,
                "a39_6": 0,
                "a39_7": 0,
                "a40_6": 0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableA107042"]),
            a5(){
                let rst = 0;
                for(let i=6;i<=7;i++){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a9(){
                return (this.a5 * 100.0 / this.a8).toFixed(2) + "%";
            },
            a13(){
                return (this.a10 * 100.0 / this.a12).toFixed(2) + "%";
            },
            a14(){
                return (this.a11 * 100.0 / this.a12).toFixed(2) + "%";
            },
            a15(){
                let rst = 0;
                for(let i of [16,25]){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a16(){
                let rst = 0;
                for(let i of [17,18,19,20,21,22,24]){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a25(){
                let rst = 0;
                for(let i of [26,27]){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a28(){
                return this.toPercent(this.a28_,2);
            }
        },
        watch: {
            getTableA107042(newVal) {
                if(newVal!=null){
                    for(let i in newVal){
                        if(this.hasOwnProperty(i)){
                            this[i]=newVal[i];
                        }
                    }
                    this.a28_ = parseFloat(newVal.a28);
                }
            }
        },
        methods:{
            toPercent(num, fixed = 2) {
                if(typeof num != "number"){
                    num = Number(num);
                    if( isNaN(num)){
                        num = 0;
                    }
                }
                return num.toFixed(fixed) + '%';
            },
            save(){
                let postData = {
                    "id":this.id
                };
                for(let i=1;i<=29;i++){
                    let p = `a${i}`
                    postData[p]=this[p];
                    for(let j = 1;j<=2;j++){
                        let q = `a${i}_${j}`
                        postData[q]=this[q];
                    }
                }
                
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA107042", {
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
            store.dispatch("getTableA107042", {
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
    .excel24{
        td{
            text-align: left;
            padding-left: 10px;
        }
        td[colspan="6"]{
            text-align: center;
        }
    }
</style>