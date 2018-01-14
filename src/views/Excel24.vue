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
                        <td style="width:10%" class="green">{{a1_1}}</td>
                        <td style="width:35%" class="blue">软件企业证书取得日期</td>
                        <td style="width:10%" class="green"><el-date-picker v-model="a1_2" type="date" placeholder="选择日期" :default-value="new Date()"></el-date-picker></td>
                    </tr>
                    <tr>
                        <td class="blue">2</td>
                        <td class="blue" colspan="2">软件企业认定证书编号</td>
                        <td class="green"><input v-model="a2_1"></td>
                        <td class="blue">软件产品登记证书编号</td>
                        <td class="green">
                            <input v-model="a2_2">
                        </td>
                    </tr>
                    <tr>
                        <td class="blue">3</td>
                        <td class="blue" colspan="2">计算机信息系统集成资质等级认定证书编号</td>
                        <td class="green">
                            <input v-model="a3_1">
                        </td>
                        <td class="blue">集成电路生产企业认定文号</td>
                        <td class="green">
                            <input v-model="a3_2">
                        </td>
                    </tr>
                    <tr>
                        <td class="blue">4</td>
                        <td class="blue" colspan="2">集成电路设计企业认定证书编号</td>
                        <td class="green" colspan="3">
                            <input v-model="a4">
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
                        <td class="green"><number-input v-model="a6" :fixed="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">7</td>
                        <td class="blue" colspan="3">    其中:签订劳动合同关系且具有大学专科以上学历的职工人数</td>
                        <td class="green"><number-input v-model="a7" :fixed="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">8</td>
                        <td class="blue" colspan="3">二、研究开发人员人数</td>
                        <td class="green"><number-input v-model="a8" :fixed="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">9</td>
                        <td class="blue" colspan="3">三、签订劳动合同关系且具有大学专科以上学历的职工人数占企业当年月平均职工总人数的比例（7÷6）</td>
                        <td>{{a9}}</td>
                    </tr>
                    <tr>
                        <td class="blue">10</td>
                        <td class="blue" colspan="3">四、研究开发人员占企业本年月平均职工总数的比例（8÷6）</td>
                        <td>{{a10}}</td>
                    </tr>
                    <tr>
                        <td class="blue">11</td>
                        <td class="blue" rowspan="15">收入指标</td>
                        <td class="blue" colspan="3">五、企业收入总额</td>
                        <td class="green"><number-input v-model="a11" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">12</td>
                        <td class="blue" colspan="3">六、集成电路制造销售（营业）收入</td>
                        <td class="green"><number-input v-model="a12" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">13</td>
                        <td class="blue" colspan="3">七、集成电路制造销售（营业）收入占企业收入总额的比例（12÷11）</td>
                        <td>{{a13}}</td>
                    </tr>
                    <tr>
                        <td class="blue">14</td>
                        <td class="blue" colspan="3">八、集成电路设计销售（营业）收入</td>
                        <td class="green"><number-input v-model="a14" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">15</td>
                        <td class="blue" colspan="3">    其中：集成电路自主设计销售（营业）收入</td>
                        <td class="green"><number-input v-model="a15" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">16</td>
                        <td class="blue" colspan="3">九、集成电路设计企业的集成电路设计销售（营业）收入占企业收入总额的比例（14÷11）</td>
                        <td>{{a16}}</td>
                    </tr>
                    <tr>
                        <td class="blue">17</td>
                        <td class="blue" colspan="3">十、集成电路自主设计销售（营业）收入占企业收入总额的比例（15÷11）</td>
                        <td>{{a17}}</td>
                    </tr>
                    <tr>
                        <td class="blue">18</td>
                        <td class="blue" colspan="3">十一、软件产品开发销售（营业）收入</td>
                        <td class="green"><number-input v-model="a18" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">19</td>
                        <td class="blue" colspan="3">     其中：嵌入式软件产品和信息系统集成产品开发销售（营业）收入</td>
                        <td class="green"><number-input v-model="a19" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">20</td>
                        <td class="blue" colspan="3">十二、软件产品自主开发销售（营业）收入</td>
                        <td class="green"><number-input v-model="a20" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">21</td>
                        <td class="blue" colspan="3">     其中：嵌入式软件产品和信息系统集成产品自主开发销售（营业）收入</td>
                        <td class="green"><number-input v-model="a21" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">22</td>
                        <td class="blue" colspan="3">十三、软件企业的软件产品开发销售（营业）收入占企业收入总额的比例（18÷11）</td>
                        <td>{{a22}}</td>
                    </tr>
                    <tr>
                        <td class="blue">23</td>
                        <td class="blue" colspan="3">十四、嵌入式软件产品和信息系统集成产品开发销售（营业）收入占企业收入总额的比例（19÷11）</td>
                        <td>{{a23}}</td>
                    </tr>
                    <tr>
                        <td class="blue">24</td>
                        <td class="blue" colspan="3">十五、软件产品自主开发销售（营业）收入占企业收入总额的比例（20÷11）</td>
                        <td>{{a24}}</td>
                    </tr>
                    <tr>
                        <td class="blue">25</td>
                        <td class="blue" colspan="3">十六、嵌入式软件产品和信息系统集成产品自主开发销售（营业）收入占企业收入总额的比例（21÷11）</td>
                        <td>{{a25}}</td>
                    </tr>
                    <tr>
                        <td class="blue">26</td>
                        <td class="blue" rowspan="3">研究开发费用指标</td>
                        <td class="blue" colspan="3">十七、研究开发费用总额</td>
                        <td class="green"><number-input v-model="a26" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">27</td>
                        <td class="blue" colspan="3">     其中：企业在中国境内发生的研究开发费用金额</td>
                        <td class="green"><number-input v-model="a27" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">28</td>
                        <td class="blue" colspan="3">十八、研究开发费用总额占企业销售（营业）收入总额的比例</td>
                        <td class="green"><number-input v-model="a28_" :fixed="fixed" :filter="toPercent"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">29</td>
                        <td class="blue" colspan="4">十九、企业在中国境内发生的研究开发费用金额占研究开发费用总额的比例（27÷26）</td>
                        <td class="green">{{a29}}</td>
                    </tr>
                    <tr>
                        <td class="blue">30</td>
                        <td class="blue" colspan="5">关键指标情况（2011年1月1日以前成立企业填报）</td>
                    </tr>
                    <tr>
                        <td class="blue">31</td>
                        <td class="blue" rowspan="3">人员指标</td>
                        <td class="blue" colspan="3">二十、企业职工总数</td>
                        <td class="green"><number-input v-model="a31" :fixed="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">32</td>
                        <td class="blue" colspan="3">二十一、从事软件产品开发和技术服务的技术人员</td>
                        <td class="green"><number-input v-model="a32" :fixed="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">33</td>
                        <td class="blue" colspan="3">二十二、从事软件产品开发和技术服务的技术人员占企业职工总数的比例（32÷31）</td>
                        <td class="green">{{a33}}</td>
                    </tr>
                    <tr>
                        <td class="blue">34</td>
                        <td class="blue" rowspan="5">收入指标</td>
                        <td class="blue" colspan="3">二十三、企业年总收入</td>
                        <td class="green"><number-input v-model="a34" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">35</td>
                        <td class="blue" colspan="3">    其中：企业年软件销售收入</td>
                        <td class="green"><number-input v-model="a35" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">36</td>
                        <td class="blue" colspan="3">        其中：自产软件销售收入</td>
                        <td class="green"><number-input v-model="a36" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">37</td>
                        <td class="blue" colspan="3">二十四、软件销售收入占企业年总收入比例（35÷34）</td>
                        <td class="green">{{a37}}</td>
                    </tr>
                    <tr>
                        <td class="blue">38</td>
                        <td class="blue" colspan="3">二十五、自产软件收入占软件销售收入比例（36÷35）</td>
                        <td class="green">{{a38}}</td>
                    </tr>
                    <tr>
                        <td class="blue">39</td>
                        <td class="blue" rowspan="2">研究开发经费指标</td>
                        <td class="blue" colspan="3">二十六、软件技术及产品的研究开发经费</td>
                        <td class="green"><number-input v-model="a39" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">40</td>
                        <td class="blue" colspan="3">二十七、软件技术及产品的研究开发经费占企业年软件收入比例（39÷35）</td>
                        <td class="green">{{a40}}</td>
                    </tr>
                    <tr>
                        <td class="blue">41</td>
                        <td class="blue" colspan="4">减免税金额</td>
                        <td class="green"><number-input v-model="a41" :fixed="fixed"></number-input></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <el-button type="primary" @click="save">保存</el-button><el-button type="primary" @click="refresh">刷新</el-button>
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
                id:0,
                a1_1:null,
                a1_2:"",
                a2_1:"",
                a2_2:"",
                a3_1:"",
                a3_2:"",
                a4:"",
                a5:0,
                a6:0,
                a7:0,
                a8:0,
                a11:0,
                a12:0,
                a14:0,
                a15:0,
                a18:0,
                a19:0,
                a20:0,
                a21:0,
                a26:0,
                a27:0,
                a30:0,
                a31:0,
                a32:0,
                a34:0,
                a35:0,
                a36:0,
                a39:0,
                a28_:0,
                a41:0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableA107042"]),
            a9(){
                return this.toPercent(this.a7 / this.a6);
            },
            a10(){
                return this.toPercent(this.a8 / this.a6);
            },
            a13(){
                return this.toPercent(this.a12 / this.a11);
            },
            a16(){
                return this.toPercent(this.a14 / this.a11);
            },
            a17(){
                return this.toPercent(this.a15 / this.a11);
            },
            a22(){
                return this.toPercent(this.a18 / this.a11);
            },
            a23(){
                return this.toPercent(this.a19 / this.a11);
            },
            a24(){
                return this.toPercent(this.a20 / this.a11);
            },
            a25(){
                return this.toPercent(this.a21 / this.a11);
            },
            a28(){
                return this.toPercent(this.a28_,2);
            },
            a29(){
                return this.toPercent(this.a27 / this.a26);
            },
            a33(){
                return this.toPercent(this.a32 / this.a31);
            },
            a37(){
                return this.toPercent(this.a35 / this.a34);
            },
            a38(){
                return this.toPercent(this.a36 / this.a35);
            },
            a40(){
                return this.toPercent(this.a39 / this.a35);
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
                    this.a28_ = parseFloat(newVal.a28) || 0;
                }
            }
        },
        methods:{
            toPercent(num, fixed = 2) {
                if(typeof num != "number"){
                    num = Number(num);
                }
                if(num === Infinity){
                    return "";
                }
                if(isNaN(num)){
                    num = 0;
                }

                return (num*100).toFixed(fixed) + '%';
            },
            save(){				
                if((this.a2_1 && this.a3_2) || (this.a2_1 && this.a4) || (this.a3_2 && this.a4)){
                    window.root && window.root.$emit("bizError",'“软件企业认定证书编号”、“集成电路生产企业认定文号”、“集成电路设计企业认定证书编号”3个只能填1个');
                    return;
                }
                if((this.a2_1 && !this.a1_2) ||(!this.a2_1 && this.a1_2)){
                    window.root && window.root.$emit("bizError",'“软件企业认定证书编号”和“软件企业证书取得日期”应都填写或都不填写');
                    return;
                }
                let postData = {
                    "id":this.id
                };
                for(let i=1;i<=41;i++){
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
                store.dispatch("getTableA107042", {
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
                    urlParam:"a107042",
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