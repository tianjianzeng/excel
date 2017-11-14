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
                        <td>{{a1|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">2</td>
                        <td class="blue">减：营业成本(填写A102010\102020\103000)</td>
                        <td>{{a2|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">3</td>
                        <td class="blue">营业税金及附加</td>
                        <td>{{a3|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">4</td>
                        <td class="blue">销售费用(填写A104000)</td>
                        <td>{{a4|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">5</td>
                        <td class="blue">管理费用(填写A104000)</td>
                        <td>{{a5|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">6</td>
                        <td class="blue">财务费用(填写A104000)</td>
                        <td>{{a6|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">7</td>
                        <td class="blue">资产减值损失</td>
                        <td class="green"><number-input v-model="a7" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">8</td>
                        <td class="blue">加：公允价值变动收益</td>
                        <td class="green"><number-input v-model="a8" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">9</td>
                        <td class="blue">投资收益</td>
                        <td class="green">{{a9|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">10</td>
                        <td class="blue">二、营业利润(1-2-3-4-5-6-7+8+9)</td>
                        <td>{{a10|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">11</td>
                        <td class="blue">加：营业外收入(填写A100000\101020\103000)</td>
                        <td>{{a11|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">12</td>
                        <td class="blue">减：营业外支出(填写A102010\102020\103000)</td>
                        <td>{{a12|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">13</td>
                        <td class="blue">三、利润总额（10+11-12）</td>
                        <td>{{a13|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">14</td>
                        <td class="blue" rowspan="10">应纳税所得额计算</td>
                        <td class="blue">减：境外所得（填写A108010）</td>
                        <td>{{a14|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">15</td>
                        <td class="blue">加：纳税调整增加额（填写A105000）</td>
                        <td>{{a15|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">16</td>
                        <td class="blue">减：纳税调整减少额（填写A105000）</td>
                        <td>{{a16|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">17</td>
                        <td class="blue">减：免税、减计收入及加计扣除（填写A107010）</td>
                        <td>{{a17|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">18</td>
                        <td class="blue">加：境外应税所得抵减境内亏损（填写A108000）</td>
                        <td>{{a18|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">19</td>
                        <td class="blue">四、纳税调整后所得（13-14+15-16-17+18）</td>
                        <td>{{a19|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">20</td>
                        <td class="blue">减：所得减免（填写A107020）</td>
                        <td>{{a20|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">21</td>
                        <td class="blue">减：抵扣应纳税所得额（填写A107030）</td>
                        <td>{{a21|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">22</td>
                        <td class="blue">减：弥补以前年度亏损（填写A106000）</td>
                        <td>{{a22|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">23</td>
                        <td class="blue">五、应纳税所得额（19-20-21-22）</td>
                        <td>{{a23|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">24</td>
                        <td class="blue" rowspan="13">应纳税额计算</td>
                        <td class="blue">税率（25%）</td>
                        <td><number-display :fixed="fixed" :filter="toPercent"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">25</td>
                        <td class="blue">六、应纳所得税额（23×24）</td>
                        <td>{{a25|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">26</td>
                        <td class="blue">减：减免所得税额（填写A107040）</td>
                        <td>{{a26|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">27</td>
                        <td class="blue">减：抵免所得税额（填写A107050）</td>
                        <td>{{a27|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">28</td>
                        <td class="blue">七、应纳税额（25-26-27）</td>
                        <td>{{a28|formatCurrency}}</td>
                    </tr>   
                    <tr>
                        <td class="blue">29</td>
                        <td class="blue">加：境外所得应纳所得税额（填写A108000）</td>
                        <td>{{a29|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">30</td>
                        <td class="blue">减：境外所得抵免所得税额（填写A108000）</td>
                        <td>{{a30|formatCurrency}}</td>
                    </tr>   
                    <tr>
                        <td class="blue">31</td>
                        <td class="blue">八、实际应纳所得税额（28+29-30）</td>
                        <td>{{a31|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">32</td>
                        <td class="blue">减：本年累计实际已预缴的所得税额</td>
                        <td>{{a32|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">33</td>
                        <td class="blue">九、本年应补（退）所得税额（31-32）</td>
                        <td>{{a33|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">34</td>
                        <td class="blue">其中：总机构分摊本年应补（退）所得税额(填写A109000)</td>
                        <td>{{a34|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">35</td>
                        <td class="blue">财政集中分配本年应补（退）所得税额（填写A109000）</td>
                        <td>{{a35|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">36</td>
                        <td class="blue">总机构主体生产经营部门分摊本年应补（退）所得税额(填写A109000)</td>
                        <td>{{a36|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">37</td>
                        <td class="blue" rowspan="2">附列资料</td>
                        <td class="blue">以前年度多缴的所得税额在本年抵减额</td>
                        <td class="green"><number-input v-model="a37" :min="0" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">38</td>
                        <td class="blue">以前年度应缴未缴在本年入库所得税额</td>
                        <td class="green"><number-input v-model="a38" :min="0" :fixed="fixed"></number-input></td>
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
    import NumberDisplay from '../components/NumberDisplay'
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
                a11:0,
                a12:0,
                a14:0,
                a15:0,
                a16:0,
                a17:0,
                a18:0,
                a20:0,
                a21:0,
                a22:0,
                a24:0,
                a26:0,
                a27:0,
                a29:0,
                a30:0,
                a32:0,
                a34:0,
                a35:0,
                a36:0,
                a37:0,
                a38:0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput,
            NumberDisplay
        },
        computed: {
            ...mapGetters(["getTableA100000"]),
            a10() {
                // 1行-2行-3行-4行-5行-6行-7行+8行+9行?
                let rst = this.a1 * Math.pow(10,this.fixed);
                for(let i =2;i<=7;i++){
                    rst -= this[`a${i}`] * Math.pow(10,this.fixed);
                }
                for(let i = 8;i<=9;i++){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a13() {
                //10行+11行-12行
                let rst = 0;
                for(let i=10;i<=11;i++){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                rst -= this.a12 * Math.pow(10,this.fixed);
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a19(){
                //13行-14行+15行-16行-17行+18行
                let rst = this.a13 * Math.pow(10,this.fixed);
                rst -= this.a14 * Math.pow(10,this.fixed);
                rst += this.a15 * Math.pow(10,this.fixed);
                rst -= this.a16 * Math.pow(10,this.fixed);
                rst -= this.a17 * Math.pow(10,this.fixed);
                rst += this.a18 * Math.pow(10,this.fixed);
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a23(){
                //取数规则：=19行-20行-21行-22行,正数和0正常显示，如结果＜0，则取0；
                let rst = this.a19 * Math.pow(10,this.fixed);
                for(let i =20;i<=22;i++){
                    rst -= this[`a${i}`] * Math.pow(10,this.fixed);
                }
                rst = rst * 1.0/ Math.pow(10,this.fixed);
                return rst>=0 ? rst: 0;
            },
            a25(){
                return this.a23 * this.a24;
            },
            a28(){
                //25行-26行-27行
                let rst = this.a25 * Math.pow(10,this.fixed);
                for(let i =26;i<=27;i++){
                    rst -= this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a31(){
                // 28行+29行-30行
                let rst = this.a28 * Math.pow(10,this.fixed);
                rst += this.a29 * Math.pow(10,this.fixed);
                rst -= this.a30 * Math.pow(10,this.fixed);
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a33(){
                //31行-32行
                let rst = this.a31 * Math.pow(10,this.fixed);
                rst -= this.a32 * Math.pow(10,this.fixed);
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
                    "uid":100,
                    "year":2016,
                    "userId":10086
                };
                for(let i=1;i<=38;i++){
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