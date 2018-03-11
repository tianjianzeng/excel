<template>
    <div class="excel excel03">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col style="width: 60px"/>
                <col style="width: 120px"/>
                <col style="width: 60%"/>
                <col style="width: 20%"/>
                <tbody>
                    <tr>
                        <td colspan="4" class="ta-c">中华人民共和国企业所得税年度纳税申报表（A类）</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c" style="width: 5%">行次</td>
                        <td class="blue ta-c" style="width: 15%">类别</td>
                        <td class="blue ta-c" style="width: 60%">项目</td>
                        <td class="blue ta-c" style="width: 20%">金额</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">1</td>
                        <td class="blue ta-c" rowspan="13">利润总额计算</td>
                        <td class="blue">一、营业收入(填写A100000\101020\103000)</td>
                        <td><number-display :value="a1"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">2</td>
                        <td class="blue ti-2">减：营业成本(填写A102010\102020\103000)</td>
                        <td><number-display :value="a2"></number-display></td>
                    </tr> 
                    <tr>
                        <td class="blue ta-c">3</td>
                        <td class="blue ti-4">营业税金及附加</td>
                        <td><number-display :value="a3"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">4</td>
                        <td class="blue ti-4">销售费用(填写A104000)</td>
                        <td><number-display :value="a4"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">5</td>
                        <td class="blue ti-4">管理费用(填写A104000)</td>
                        <td><number-display :value="a5"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">6</td>
                        <td class="blue ti-4">财务费用(填写A104000)</td>
                        <td><number-display :value="a6"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">7</td>
                        <td class="blue ti-4">资产减值损失</td>
                        <td class="green"><number-input v-model="a7" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">8</td>
                        <td class="blue ti-2">加：公允价值变动收益</td>
                        <td class="green"><number-input v-model="a8" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">9</td>
                        <td class="blue ti-4">投资收益</td>
                        <td class="green"><number-display :value="a9"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">10</td>
                        <td class="blue">二、营业利润(1-2-3-4-5-6-7+8+9)</td>
                        <td><number-display :value="a10"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">11</td>
                        <td class="blue ti-2">加：营业外收入(填写A100000\101020\103000)</td>
                        <td><number-display :value="a11"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">12</td>
                        <td class="blue ti-2">减：营业外支出(填写A102010\102020\103000)</td>
                        <td><number-display :value="a12"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">13</td>
                        <td class="blue">三、利润总额（10+11-12）</td>
                        <td><number-display :value="a13"></number-display></td>
                    </tr> 
                    <tr>
                        <td class="blue ta-c">14</td>
                        <td class="blue ta-c" rowspan="10">应纳税所得额计算</td>
                        <td class="blue ti-2">减：境外所得（填写A108010）</td>
                        <td><number-display :value="a14"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">15</td>
                        <td class="blue ti-2">加：纳税调整增加额（填写A105000）</td>
                        <td><number-display :value="a15"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">16</td>
                        <td class="blue ti-2">减：纳税调整减少额（填写A105000）</td>
                        <td><number-display :value="a16"></number-display></td>
                    </tr> 
                    <tr>
                        <td class="blue ta-c">17</td>
                        <td class="blue ti-2">减：免税、减计收入及加计扣除（填写A107010）</td>
                        <td><number-display :value="a17"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">18</td>
                        <td class="blue ti-2">加：境外应税所得抵减境内亏损（填写A108000）</td>
                        <td><number-display :value="a18"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">19</td>
                        <td class="blue">四、纳税调整后所得（13-14+15-16-17+18）</td>
                        <td><number-display :value="a19"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">20</td>
                        <td class="blue ti-2">减：所得减免（填写A107020）</td>
                        <td><number-display :value="a20"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">21</td>
                        <td class="blue ti-2">减：抵扣应纳税所得额（填写A107030）</td>
                        <td><number-display :value="a21"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">22</td>
                        <td class="blue ti-2">减：弥补以前年度亏损（填写A106000）</td>
                        <td><number-display :value="a22"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">23</td>
                        <td class="blue">五、应纳税所得额（19-20-21-22）</td>
                        <td><number-display :value="a23"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">24</td>
                        <td class="blue ta-c" rowspan="13">应纳税额计算</td>
                        <td class="blue ti-2">税率（25%）</td>
                        <td><number-display :fixed="0" :value="25" :filter="toPercent"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">25</td>
                        <td class="blue">六、应纳所得税额（23×24）</td>
                        <td><number-display :value="a25"></number-display></td>
                    </tr> 
                    <tr>
                        <td class="blue ta-c">26</td>
                        <td class="blue ti-2">减：减免所得税额（填写A107040）</td>
                        <td><number-display :value="a26"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">27</td>
                        <td class="blue ti-2">减：抵免所得税额（填写A107050）</td>
                        <td><number-display :value="a27"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">28</td>
                        <td class="blue">七、应纳税额（25-26-27）</td>
                        <td><number-display :value="a28"></number-display></td>
                    </tr>   
                    <tr>
                        <td class="blue ta-c">29</td>
                        <td class="blue ti-2">加：境外所得应纳所得税额（填写A108000）</td>
                        <td><number-display :value="a29"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">30</td>
                        <td class="blue ti-2">减：境外所得抵免所得税额（填写A108000）</td>
                        <td><number-display :value="a30"></number-display></td>
                    </tr>   
                    <tr>
                        <td class="blue ta-c">31</td>
                        <td class="blue">八、实际应纳所得税额（28+29-30）</td>
                        <td><number-display :value="a31"></number-display></td>
                    </tr> 
                    <tr>
                        <td class="blue ta-c">32</td>
                        <td class="blue ti-2">减：本年累计实际已预缴的所得税额</td>
                        <td><number-display :value="a32"></number-display></td>
                    </tr> 
                    <tr>
                        <td class="blue ta-c">33</td>
                        <td class="blue">九、本年应补（退）所得税额（31-32）</td>
                        <td><number-display :value="a33"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">34</td>
                        <td class="blue ti-2">其中：总机构分摊本年应补（退）所得税额(填写A109000)</td>
                        <td><number-display :value="a34"></number-display></td>
                    </tr> 
                    <tr>
                        <td class="blue ta-c">35</td>
                        <td class="blue ti-4">财政集中分配本年应补（退）所得税额（填写A109000）</td>
                        <td><number-display :value="a35"></number-display></td>
                    </tr> 
                    <tr>
                        <td class="blue ta-c">36</td>
                        <td class="blue ti-4">总机构主体生产经营部门分摊本年应补（退）所得税额(填写A109000)</td>
                        <td><number-display :value="a36"></number-display></td>
                    </tr> 
                    <tr>
                        <td class="blue ta-c">37</td>
                        <td class="blue ta-c" rowspan="2">附列资料</td>
                        <td class="blue">以前年度多缴的所得税额在本年抵减额</td>
                        <td class="green"><number-input v-model="a37" :min="0" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">38</td>
                        <td class="blue">以前年度应缴未缴在本年入库所得税额</td>
                        <td class="green"><number-input v-model="a38" :min="0" :fixed="fixed"></number-input></td>
                    </tr> 
                </tbody>
            </table>
        </div>
        <el-button type="primary" @click="save">保存</el-button><el-button v-if="false" type="primary" @click="refresh">刷新</el-button>
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
                uid:0,
                userId:0,
                year:0,
                fixed:2,
                id:0,
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
                return (num*100).toFixed(fixed) + '%';
            },
            save(){
                let postData = {
                    uid: this.uid,
                    year: this.year,
                    userId: this.userId,
                    id:this.id
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
                store.dispatch("getTableA100000",{
                    data:{
                        "uid":this.uid,
                        "year":this.year,
                        "userId":this.userId
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
                    urlParam:"a100000",
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