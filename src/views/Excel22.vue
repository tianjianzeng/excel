<template>
    <div class="excel excel22">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col width="60px"/>
                <col width="140px"/>
                <col width="60%"/>
                <col width="20%"/>
                <tbody>
                    <tr>
                        <td colspan="3" class="ta-c">减免所得税优惠明细表</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">行次</td>
                        <td class="blue ta-c" colspan="2">项目</td>
                        <td class="blue ta-c">金额</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">1</td>
                        <td class="blue" colspan="2">一、符合条件的小型微利企业 </td>
                        <td class="green"><number-display :value="a1"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">2</td>
                        <td class="blue ti-2" colspan="2">其中：减半征税</td>
                        <td class="green"><number-input v-model="a2" :max="a1" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">3</td>
                        <td class="blue" colspan="2">二、国家需要重点扶持的高新技术企业（4+5）</td>
                        <td><number-display :value="a3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">4</td>
                        <td class="blue ti-2" colspan="2">（一）高新技术企业低税率优惠（填写A107041）</td>
                        <td><number-display :value="a4"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">5</td>
                        <td class="blue ti-2" colspan="2">（二）经济特区和上海浦东新区新设立的高新技术企业（填写A107041）</td>
                        <td><number-display :value="a5"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">6</td>
                        <td class="blue" colspan="2">三、其他专项优惠（7+8+9+10+11…+14+15+16+…+31）</td>
                        <td><number-display :value="a6"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">7</td>
                        <td class="blue ti-2" colspan="2">（一）受灾地区损失严重的企业（7.1+7.2+7.3）</td>
                        <td><number-display :value="a7"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">7.1</td>
                        <td class="blue ta-r">其中:1.</td>
                        <td class="blue">芦山受灾地区损失严重的企业</td>
                        <td class="green"><number-input v-model="a7_1" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">7.2</td>
                        <td class="blue ta-r">2.</td>
                        <td class="blue">鲁甸受灾地区损失严重的企业</td>
                        <td class="green"><number-input v-model="a7_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">7.3</td>
                        <td class="blue ta-r">3.</td>
                        <td></td>
                        <td><number-display :value="a7_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">8</td>
                        <td class="blue ti-2" colspan="2">（二）受灾地区农村信用社（8.1+8.2+8.3）</td>
                        <td><number-display :value="a8"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">8.1</td>
                        <td class="blue ta-r">其中:1.</td>
                        <td class="blue">芦山受灾地区损失严重的企业</td>
                        <td class="green"><number-input v-model="a8_1" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">8.2</td>
                        <td class="blue ta-r">2.</td>
                        <td class="blue">鲁甸受灾地区农村信用社</td>
                        <td class="green"><number-input v-model="a8_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">8.3</td>
                        <td class="blue ta-r">3.</td>
                        <td></td>
                        <td><number-display :value="a8_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">9</td>
                        <td class="blue ti-2" colspan="2">   （三）受灾地区的促进就业企业（9.1+9.2+9.3）</td>
                        <td><number-display :value="a9"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">9.1</td>
                        <td class="blue ta-r">其中:1.</td>
                        <td class="blue">芦山受灾地区的促进就业企业</td>
                        <td class="green"><number-input v-model="a9_1" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">9.2</td>
                        <td class="blue ta-r">2.</td>
                        <td class="blue">鲁甸受灾地区的促进就业企业</td>
                        <td class="green"><number-input v-model="a9_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">9.3</td>
                        <td class="blue ta-r">3.</td>
                        <td></td>
                        <td><number-display :value="a9_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">10</td>
                        <td class="blue ti-2" colspan="2">（四）支持和促进重点群体创业就业企业（10.1+10.2+10.3）</td>
                        <td><number-display :value="a10"></number-display></td>
                    </tr>     
                    <tr>
                        <td class="blue ta-c">10.1</td>
                        <td class="blue ta-r">其中:1.</td>
                        <td class="blue">下岗失业人员再就业</td>
                        <td class="green"><number-input v-model="a10_1" :fixed="fixed"></number-input></td>
                    </tr>   
                    <tr>
                        <td class="blue ta-c">10.2</td>
                        <td class="blue ta-r">2.</td>
                        <td class="blue">高校毕业生就业</td>
                        <td class="green"><number-input v-model="a10_2" :fixed="fixed"></number-input></td>
                    </tr>   
                    <tr>
                        <td class="blue ta-c">10.3</td>
                        <td class="blue ta-r">3.</td>
                        <td class="blue">退役士兵就业</td>
                        <td class="green"><number-input v-model="a10_3" :fixed="fixed"></number-input></td>
                    </tr>    
                    <tr>
                        <td class="blue ta-c">11</td>
                        <td class="blue ti-2" colspan="2">（五）技术先进型服务企业</td>
                        <td class="green"><number-input v-model="a11" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">12</td>
                        <td class="blue ti-2" colspan="2">（六）动漫企业</td>
                        <td class="green"><number-input v-model="a12" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">13</td>
                        <td class="blue ti-2" colspan="2">（七）集成电路线宽小于0.8微米（含）的集成电路生产企业</td>
                        <td class="green"><number-input v-model="a13" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">14</td>
                        <td class="blue ti-2" colspan="2">（八）集成电路线宽小于0.25微米的集成电路生产企业（14.1+14.2）</td>
                        <td><number-display :value="a14"></number-display></td>
                    </tr> 
                    <tr>
                        <td class="blue ta-c">14.1</td>
                        <td class="blue ta-r">其中：1.</td>
                        <td class="blue">定期减免企业所得税</td>
                        <td class="green"><number-input v-model="a14_1" :fixed="fixed"></number-input></td>
                    </tr>   
                    <tr>
                        <td class="blue ta-c">14.2</td>
                        <td class="blue ta-r">2.</td>
                        <td class="blue">减按15%税率征收企业所得税</td>
                        <td class="green"><number-input v-model="a14_2" :fixed="fixed"></number-input></td>
                    </tr>   
                    <tr>
                        <td class="blue ta-c">15</td>
                        <td class="blue" colspan="2">（九）投资额超过80亿元人民币的集成电路生产企业（15.1+15.2）</td>
                        <td><number-display :value="a15"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">15.1</td>
                        <td class="blue ta-r">其中：1.</td>
                        <td class="blue">定期减免企业所得税</td>
                        <td class="green"><number-input v-model="a15_1" :fixed="fixed"></number-input></td>
                    </tr>   
                    <tr>
                        <td class="blue ta-c">15.2</td>
                        <td class="blue ta-r">2.</td>
                        <td class="blue">减按15%税率征收企业所得税</td>
                        <td class="green"><number-input v-model="a15_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue ta-c">16</td>
                        <td class="blue ti-2" colspan="2">（十）新办集成电路设计企业（填写A107042）</td>
                        <td><number-display :value="a16"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">17</td>
                        <td class="blue ti-2" colspan="2">（十一）国家规划布局内重点集成电路设计企业</td>
                        <td class="green"><number-input v-model="a17" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">18</td>
                        <td class="blue ti-2" colspan="2">（十二）集成电路封装、测试企业</td>
                        <td class="green"><number-input v-model="a18" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue ta-c">19</td>
                        <td class="blue ti-2" colspan="2">（十三）集成电路关键专用材料生产企业或集成电路专用设备生产企业</td>
                        <td class="green"><number-input v-model="a19" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue ta-c">20</td>
                        <td class="blue ti-2" colspan="2">（十四）符合条件的软件企业（填写A107042）</td>
                        <td><number-display :value="a20"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">21</td>
                        <td class="blue ti-2" colspan="2">（十五）国家规划布局内重点软件企业</td>
                        <td class="green"><number-input v-model="a21" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue ta-c">22</td>
                        <td class="blue ti-2" colspan="2">（十六）经营性文化事业单位转制企业</td>
                        <td class="green"><number-input v-model="a22" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue ta-c">23</td>
                        <td class="blue ti-2" colspan="2">（十七）符合条件的生产和装配伤残人员专门用品企业</td>
                        <td class="green"><number-input v-model="a23" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue ta-c">24</td>
                        <td class="blue ti-2" colspan="2">（十八）设在西部地区的鼓励类产业企业</td>
                        <td class="green"><number-input v-model="a24" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">25</td>
                        <td class="blue ti-2" colspan="2">（十九）新疆困难地区新办企业</td>
                        <td><number-display :value="a25"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">26</td>
                        <td class="blue ti-2" colspan="2">（二十）新疆喀什、霍尔果斯特殊经济开发区新办企业</td>
                        <td><number-display :value="a26"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">27</td>
                        <td class="blue ti-2" colspan="2">（二十一）横琴新区、平潭综合实验区和前海深港现代化服务业合作区企业</td>
                        <td><number-display :value="a27"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">28</td>
                        <td class="blue ti-2" colspan="2">（二十二）享受过渡期税收优惠企业</td>
                        <td><number-display :value="a28"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">29</td>
                        <td class="blue ti-2">（二十三）其他1</td>
                        <td class="green">
                            <el-select v-model="a29_1" placeholder="请选择">
                                <el-option
                                    v-for="it in selListA107040"
                                    :key="it.id"
                                    :label="it.name"
                                    :value="it.id">
                                </el-option>
                            </el-select>
                        </td>
                        <td class="green"><number-input v-model="a29" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">30</td>
                        <td class="blue ti-2">（二十四）其他2</td>
                        <td class="green">
                            <el-select v-model="a30_1" placeholder="请选择">
                                <el-option
                                    v-for="it in selListA107040"
                                    :key="it.id"
                                    :label="it.name"
                                    :value="it.id">
                                </el-option>
                            </el-select>
                        </td>
                        <td class="green"><number-input v-model="a30" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">31</td>
                        <td class="blue ti-2">（二十五）其他3</td>
                        <td class="green">
                            <el-select v-model="a31_1" placeholder="请选择">
                                <el-option
                                    v-for="it in selListA107040"
                                    :key="it.id"
                                    :label="it.name"
                                    :value="it.id">
                                </el-option>
                            </el-select>
                        </td>
                        <td class="green"><number-input v-model="a31" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">32</td>
                        <td class="blue" colspan="2">四、减：项目所得额按法定税率减半征收企业所得税叠加享受减免税优惠</td>
                        <td class="green"><number-input v-model="a32" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">33</td>
                        <td class="blue" colspan="2">五、减免地方分享所得税的民族自治地方企业创建</td>
                        <td class="green"><number-input v-model="a33" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">34</td>
                        <td class="blue" colspan="2">合计：（1+3+6-32+33）</td>
                        <td><number-display :value="a34"></number-display></td>
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
    import NumberDisplay from '../components/NumberDisplay'
    import {formatCurrency} from '../utils/filters'

    export default {
        name: 'excel22',
        data() {
            return {
                fixed:2,
                id:0,
                a1:0,
                a2:0,
                a4:0,
                a5:0,
                a6:0,
                a7_1:0,
                a7_2:0,
                a7_3:0,
                a8_1:0,
                a8_2:0,
                a8_3:0,
                a9_1:0,
                a9_2:0,
                a9_3:0,
                a10_1:0,
                a10_2:0,
                a10_3:0,
                a11:0,
                a12:0,
                a13:0,
                a14_1:0,
                a14_2:0,
                a15_1:0,
                a15_2:0,
                a16: 0,
                a17: 0,
                a18: 0,
                a19: 0,
                a20: 0,
                a21: 0,
                a22: 0,
                a23: 0,
                a24: 0,
                a25: 0,
                a26: 0,
                a27: 0,
                a28: 0,
                a29_1: null,
                a29: 0,
                a30_1: null,
                a30: 0,
                a31_1: null,
                a31: 0,
                a32: 0,
                a33: 0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput,
            NumberDisplay
        },
        computed: {
            ...mapGetters(["selListA107040","getTableA107040"]),
            a3(){
                let rst = 0;
                for(let i=4;i<=5;i++){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a7(){
                let rst = 0;
                for(let i=1;i<=3;i++){
                    rst += this[`a7_${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a8(){
                let rst = 0;
                for(let i=1;i<=3;i++){
                    rst += this[`a8_${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a9(){
                let rst = 0;
                for(let i=1;i<=3;i++){
                    rst += this[`a9_${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a10(){
                let rst = 0;
                for(let i=1;i<=3;i++){
                    rst += this[`a10_${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a14(){
                let rst = 0;
                for(let i=1;i<=2;i++){
                    rst += this[`a14_${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a15(){
                let rst = 0;
                for(let i=1;i<=2;i++){
                    rst += this[`a15_${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a34(){
                let rst = 0;
                for(let i of [1,3,6]){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return (rst - this.a32 * Math.pow(10,this.fixed) + this.a33 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            }
        },
        watch: {
            getTableA107040(newVal) {
                if(newVal!=null){
                    for(let i in newVal){
                        if(this.hasOwnProperty(i)){
                            this[i]=newVal[i];
                        }
                    }
                    this.a2 = this.a1;
                }
            }
        },
        methods:{
            save(){
                let postData = {
                    "uid":this.uid,
                    "year":this.year,
                    "editId":this.userId,
                    "id":this.id
                };

                let check136 = 0,
                    check7_31 = 0;
                for(let i of [1,3,6]){
                    let p = `a${i}`
                    if(this[p]>1){
                        check136++;
                    }
                }
                if(check136>0){
                    window.root && window.root.$emit("bizError",'1,3,6项目不能同时有值');
                    return;
                }

                for(let i =7 ;i<=31; i++){
                    let p = `a${i}`
                    if(this[p]>0){
                        check7_31++;
                    }
                }
                if(check7_31>1){
                    window.root && window.root.$emit("bizError",'7-31项目不能同时有值');
                    return;
                }
                for(let i=1;i<=34;i++){
                    let p = `a${i}`
                    postData[p]=this[p];
                    for(let j = 1;j<=3;j++){
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
                store.dispatch("editA107040", {
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
                store.dispatch("selListA107040");
                store.dispatch("getTableA107040", {
                    data: {
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
                    urlParam:"a107040",
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