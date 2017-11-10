<template>
    <div class="excel excel03">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <tbody>
                    <tr>
                        <td colspan="4">中华人民共和国企业所得税年度纳税申报表（A类）</td>
                    </tr>
                    <tr>
                        <td style="width: 5%">行次</td>
                        <td style="width: 15%">类别</td>
                        <td style="width: 60%">项目</td>
                        <td style="width: 20%">金额</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue" rowspan="13">利润总和计算</td>
                        <td class="blue">一、营业收入(填写A100000\101020\103000)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">2</td>
                        <td class="blue">减：营业成本(填写A102010\102020\103000)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">3</td>
                        <td class="blue">营业税金及附加</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">4</td>
                        <td class="blue">销售费用(填写A104000)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">5</td>
                        <td class="blue">管理费用(填写A104000)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">6</td>
                        <td class="blue">财务费用(填写A104000)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">7</td>
                        <td class="blue">资产减值损失</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">8</td>
                        <td class="blue">加：公允价值变动收益</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">9</td>
                        <td class="blue">投资收益</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">10</td>
                        <td class="blue">二、营业利润(1-2-3-4-5-6-7+8+9)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">11</td>
                        <td class="blue">加：营业外收入(填写A100000\101020\103000)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">12</td>
                        <td class="blue">减：营业外支出(填写A102010\102020\103000)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">13</td>
                        <td class="blue">三、利润总额（10+11-12）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">14</td>
                        <td class="blue" rowspan="10">应纳税所得额计算</td>
                        <td class="blue">减：境外所得（填写A108010）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">15</td>
                        <td class="blue">加：纳税调整增加额（填写A105000）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">16</td>
                        <td class="blue">减：纳税调整减少额（填写A105000）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">17</td>
                        <td class="blue">减：免税、减计收入及加计扣除（填写A107010）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">18</td>
                        <td class="blue">加：境外应税所得抵减境内亏损（填写A108000）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">19</td>
                        <td class="blue">四、纳税调整后所得（13-14+15-16-17+18）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">20</td>
                        <td class="blue">减：所得减免（填写A107020）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">21</td>
                        <td class="blue">减：抵扣应纳税所得额（填写A107030）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">22</td>
                        <td class="blue">减：弥补以前年度亏损（填写A106000）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">23</td>
                        <td class="blue">五、应纳税所得额（19-20-21-22）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">24</td>
                        <td class="blue" rowspan="13">应纳税额计算</td>
                        <td class="blue">税率（25%）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">25</td>
                        <td class="blue">六、应纳所得税额（23×24）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">26</td>
                        <td class="blue">减：减免所得税额（填写A107040）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">27</td>
                        <td class="blue">减：抵免所得税额（填写A107050）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">28</td>
                        <td class="blue">七、应纳税额（25-26-27）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>   
                    <tr>
                        <td class="blue">29</td>
                        <td class="blue">加：境外所得应纳所得税额（填写A108000）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">30</td>
                        <td class="blue">减：境外所得抵免所得税额（填写A108000）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>   
                    <tr>
                        <td class="blue">31</td>
                        <td class="blue">八、实际应纳所得税额（28+29-30）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">32</td>
                        <td class="blue">减：本年累计实际已预缴的所得税额</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">33</td>
                        <td class="blue">九、本年应补（退）所得税额（31-32）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">34</td>
                        <td class="blue">其中：总机构分摊本年应补（退）所得税额(填写A109000)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">35</td>
                        <td class="blue">财政集中分配本年应补（退）所得税额（填写A109000）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">36</td>
                        <td class="blue">总机构主体生产经营部门分摊本年应补（退）所得税额(填写A109000)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">37</td>
                        <td class="blue" rowspan="2">附列资料</td>
                        <td class="blue">以前年度多缴的所得税额在本年抵减额</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">38</td>
                        <td class="blue">以前年度应缴未缴在本年入库所得税额</td>
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
        name: 'excel03',
        data() {
            return {
                fixed:2,
                a1:0,
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
                a18:0,
                a19:0,
                a20:0,
                a21:0,
                a22:0,
                a23:0,
                a24:0,
                a25:0,
                a26:0,
                a27:0,
                a28:0,
                a29:0,
                a30:0,
                a31:0,
                a32:0,
                a33:0,
                a34:0,
                a35:0,
                a36:0,
                a37:0,
                a38:0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableA100000"]),
            a1() {
                return ((this.a2 || 0) * Math.pow(10,this.fixed) + (this.a9 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a2() {
                let rst = 0;
                for(let i=3;i<=8;i++){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a9() {
                let rst = 0;
                for(let i=10;i<=15;i++){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a16() {
                let rst = 0;
                for(let i=17;i<=26;i++){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            }
        },
        watch: {
            getTableA100000(newVal) {
                if(newVal!=null){
                    for(let i in newVal){
                        if(this.hasOwnProperty(i)){
                            this[i]=newVal[i];
                        }
                    }
                }
            },
        },
        methods:{
            save(){
                let postData = {
                    "uid":100,
                    "year":2016,
                    "userId":10086
                };
                for(let i=1;i<=26;i++){
                    let p = `a${i}`
                    postData[p]=this[p];
                }
                
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA100000", {
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
            store.dispatch("getTableA100000",{
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
    .excel03{
        td{
            text-align: left;
            padding-left: 10px;
        }
        td[colspan="7"]{
            text-align: center;
        }
    }
</style>