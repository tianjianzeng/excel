<template>
    <div class="excel excel32">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
              <tbody>
                   <tr>
                        <td colspan="8">资产负债表</td>
                   </tr>
                    <tr>
                        <td colspan="8">（适用执行小企业会计准则的企业）</td>
                   </tr>
                   <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td colspan="2">单位：元</td>
                    </tr>
                    <tr>
                        <td class="blue" style="width:20%">资产</td>
                        <td class="blue" style="width:10%">行次</td>
                        <td class="blue" style="width:20%">期末余额</td>
                        <td class="blue" style="width:20%">年初余额</td>
                        <td class="blue" style="width:20%">负债和所有者权益</td>
                        <td class="blue" style="width:10%">行次</td>
                        <td class="blue" style="width:20%">期末余额</td>
                        <td class="blue" style="width:20%">年初余额</td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="4">流动资产：</td>
                        <td class="blue" colspan="4">流动负债：</td>
                    </tr>
                    <tr>
                        <td class="blue">货币资金</td>
                        <td class="blue">1</td>
                        <td class="green">{{a1_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">短期借款</td>
                        <td class="blue">31</td>
                        <td class="green">{{a31_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a31_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">短期投资</td>
                        <td class="blue">2</td>
                        <td class="green">{{a2_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a2_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">应付票据</td>
                        <td class="blue">32</td>
                        <td class="green">{{a32_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a32_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">应收票据</td>
                        <td class="blue">3</td>
                        <td class="green">{{a3_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a3_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">应付账款</td>
                        <td class="blue">33</td>
                        <td class="green">{{a33_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a33_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">应收帐款</td>
                        <td class="blue">4</td>
                        <td class="green">{{a4_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a4_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">预收帐款</td>
                        <td class="blue">34</td>
                        <td class="green">{{a34_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a34_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">预付款项</td>
                        <td class="blue">5</td>
                        <td class="green">{{a5_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a5_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">应付职工薪酬</td>
                        <td class="blue">35</td>
                        <td class="green">{{a35_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a35_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">应收股利</td>
                        <td class="blue">6</td>
                        <td class="green">{{a6_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a6_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"> 应交税费</td>
                        <td class="blue">36</td>
                        <td class="green">{{a36_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a36_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">应收利息</td>
                        <td class="blue">7</td>
                        <td class="green">{{a7_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a7_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">应付利息</td>
                        <td class="blue">37</td>
                        <td class="green">{{a37_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a37_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">其他应收款</td>
                        <td class="blue">8</td>
                        <td class="green">{{a8_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a8_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">应付利润</td>
                        <td class="blue">38</td>
                        <td class="green">{{a38_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a38_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">存货</td>
                        <td class="blue">9</td>
                        <td class="green">{{a9_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a9_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">其他应付款</td>
                        <td class="blue">39</td>
                        <td class="green">{{a39_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a39_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 其中：原材料</td>
                        <td class="blue">10</td>
                        <td class="green">{{a10_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a10_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"> 其他流动负债</td>
                        <td class="blue">40</td>
                        <td class="green">{{a40_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a40_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 在产品</td>
                        <td class="blue">11</td>
                        <td class="green">{{a11_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a11_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">流动负债合计</td>
                        <td class="blue">41</td>
                        <td>{{a41_1|formatCurrency}}</td>
                        <td>{{a41_2|formatCurrency}}</td>
                    </tr>
                     <tr>
                        <td class="blue">库存商品</td>
                        <td class="blue">12</td>
                        <td class="green">{{a12_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a12_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue" colspan="4">非流动负债</td>
                    </tr>  
                    <tr>
                        <td class="blue"> 周转材料</td>
                        <td class="blue">13</td>
                        <td class="green">{{a13_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a13_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"> 长期借款</td>
                        <td class="blue">42</td>
                        <td class="green">{{a42_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a42_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">  其他流动资产</td>
                        <td class="blue">14</td>
                        <td class="green">{{a14_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a14_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"> 长期应付款</td>
                        <td class="blue">43</td>
                        <td class="green">{{a43_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a43_2" :fixed="fixed" :editable="false"></number-input></td>
                    <tr>
                        <td class="blue">流动资产合计</td>
                        <td class="blue">15</td>
                        <td>{{a15_1|formatCurrency}}</td>
                        <td>{{a15_2|formatCurrency}}</td>
                        <td class="blue">递延收益</td>
                        <td class="blue">44</td>
                        <td class="green">{{a44_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a44_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue" colspan="4">非流动资产</td>
                        <td class="blue">其他非流动负债</td>
                        <td class="blue">45</td>
                        <td class="green">{{a45_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a45_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">长期债券投资</td>
                        <td class="blue">16</td>
                        <td class="green">{{a16_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a16_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">非流动负债合计</td>
                        <td class="blue">46</td>
                        <td>{{a46_1|formatCurrency}}</td>
                        <td>{{a46_2|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">长期股权投资</td>
                        <td class="blue">17</td>
                        <td class="green">{{a17_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a17_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">负债合计</td>
                        <td class="blue">47</td>
                        <td>{{a47_1|formatCurrency}}</td>
                        <td>{{a47_2|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue"> 固定资产原价</td>
                        <td class="blue">18</td>
                        <td class="green">{{a18_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a18_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"></td>
                        <td class="blue"></td>
                        <td class="blue"></td>
                        <td class="blue"></td>
                    </tr>   
                     <tr>
                        <td class="blue">减：累计折旧</td>
                        <td class="blue">19</td>
                        <td class="green">{{a19_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a19_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"></td>
                        <td class="blue"></td>
                        <td class="blue"></td>
                        <td class="blue"></td>
                    </tr>  
                     <tr>
                        <td class="blue"> 固定资产账面价值</td>
                        <td class="blue">20</td>
                        <td>{{a20_1|formatCurrency}}</td>
                        <td>{{a20_2|formatCurrency}}</td>
                        <td class="blue"></td>
                        <td class="blue"></td>
                        <td class="blue"></td>
                        <td class="blue"></td>
                    </tr>      
                    <tr>
                        <td class="blue">在建工程</td>
                        <td class="blue">21</td>
                        <td class="green">{{a21_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a21_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"></td>
                        <td class="blue"></td>
                        <td class="blue"></td>
                        <td class="blue"></td>
                    </tr>       
                     <tr>
                        <td class="blue">工程物资</td>
                        <td class="blue">22</td>
                        <td class="green">{{a22_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a22_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"></td>
                        <td class="blue"></td>
                        <td class="blue"></td>
                        <td class="blue"></td>
                    </tr>      
                    <tr>
                        <td class="blue">固定资产清理</td>
                        <td class="blue">23</td>
                        <td class="green">{{a23_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a23_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"></td>
                        <td class="blue"></td>
                        <td class="blue"></td>
                        <td class="blue"></td>
                    </tr>       
                     <tr>
                        <td class="blue">生物性生物资产</td>
                        <td class="blue">24</td>
                        <td class="green">{{a24_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a24_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue" colspan="4">所有者权益（或股东权益）</td>
                    </tr>      
                    <tr>
                        <td class="blue">无形资产</td>
                        <td class="blue">25</td>
                        <td class="green">{{a25_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a25_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"> 实收资本（或股本）</td>
                        <td class="blue">48</td>
                        <td class="green">{{a48_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a48_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>   
                     <tr>
                        <td class="blue">开发支出</td>
                        <td class="blue">26</td>
                        <td class="green">{{a26_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a26_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">资本公积</td>
                        <td class="blue">49</td>
                        <td class="green">{{a49_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a49_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>      
                    <tr>
                        <td class="blue">长期待摊费用</td>
                        <td class="blue">27</td>
                        <td class="green">{{a27_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a27_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"> 盈余公积</td>
                        <td class="blue">50</td>
                        <td class="green">{{a50_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a50_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>       
                     <tr>
                        <td class="blue">其他非流动资产</td>
                        <td class="blue">28</td>
                        <td class="green">{{a28_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a28_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"> 实收资本（或股本）</td>
                        <td class="blue">51</td>
                        <td class="green">{{a51_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a51_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>      
                    <tr>
                        <td class="blue">  非流动资产合计</td>
                        <td class="blue">29</td>
                        <td>{{a29_1|formatCurrency}}</td>
                        <td>{{a29_2|formatCurrency}}</td>
                        <td class="blue">所有者权益（或股东权益）合计</td>
                        <td class="blue">52</td>
                        <td>{{a52_1|formatCurrency}}</td>
                        <td>{{a52_2|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">资产合计</td>
                        <td class="blue">30</td>
                        <td>{{a30_1|formatCurrency}}</td>
                        <td>{{a30_2|formatCurrency}}</td>
                        <td class="blue">负债和所有者权益（或股东权益）总计</td>
                        <td class="blue">53</td>
                        <td>{{a53_1|formatCurrency}}</td>
                        <td>{{a53_2|formatCurrency}}</td>
                    </tr>       
                </tbody>
            </table>
        </div>
        <el-button type="primary" v-if="false" @click="save">保存</el-button><el-button type="primary" @click="refresh">刷新</el-button>
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
        name: 'excel32',
        data() {
            return {
                fixed:2,
                id:0,
                a1_1:0,
                a1_2:0,
                a2_1:0,
                a2_2:0,
                a3_1:0,
                a3_2:0,
                a4_1:0,
                a4_2:0,
                a5_1:0,
                a5_2:0,
                a6_1:0,
                a6_2:0,
                a7_1:0,
                a7_2:0,
                a8_1:0,
                a8_2:0,
                a9_1:0,
                a9_2:0,
                a10_1:0,
                a10_2:0,
                a11_1:0,
                a11_2:0,
                a12_1:0,
                a12_2:0,
                a13_1:0,
                a13_2:0,
                a14_1:0,
                a14_2:0,
                a15_1:0,
                a15_2:0,
                a16_1:0,
                a16_2:0,
                a17_1:0,
                a17_2:0,
                a18_1:0,
                a18_2:0,
                a19_1:0,
                a19_2:0,
                a20_1:0,
                a20_2:0,
                a21_1:0,
                a21_2:0,
                a22_1:0,
                a22_2:0,
                a23_1:0,
                a23_2:0,
                a24_1:0,
                a24_2:0,
                a25_1:0,
                a25_2:0,
                a26_1:0,
                a26_2:0,
                a27_1:0,
                a27_2:0,
                a28_1:0,
                a28_2:0,
                a29_1:0,
                a29_2:0,
                a30_1:0,
                a30_2:0,
                a31_1:0,
                a31_2:0,
                a32_1:0,
                a32_2:0,
                a33_1:0,
                a33_2:0,
                a34_1:0,
                a34_2:0,
                a35_1:0,
                a35_2:0,
                a36_1:0,
                a36_2:0,
                a37_1:0,
                a37_2:0,
                a38_1:0,
                a38_2:0,
                a39_1:0,
                a39_2:0,
                a40_1:0,
                a40_2:0,
                a41_1:0,
                a41_2:0,
                a42_1:0,
                a42_2:0,
                a43_1:0,
                a43_2:0,
                a44_1:0,
                a44_2:0,
                a45_1:0,
                a45_2:0,
                a46_1:0,
                a46_2:0,
                a47_1:0,
                a47_2:0,
                a48_1:0,
                a48_2:0,
                a49_1:0,
                a49_2:0,
                a50_1:0,
                a50_2:0,
                a51_1:0,
                a51_2:0,
                a52_1:0,
                a52_2:0,
                a53_1:0,
                a53_2:0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableAbalA"]),
        },
        watch: {
            getTableAbalA(newVal) {
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
                    "id":this.id,
                    "uid": this.uid,
                    "mon": this.mon,
                    "year": this.year,
                    "userId": this.userId
                };
                for(let i=1;i<=53;i++){
                    for(let j=1;j<=2;j++){
                        let p = `a${i}_${j}`
                        postData[p]=this[p];
                    }
                }
                
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editAbalA", {
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
                this.mon = this.$route.query.mon;
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("getTableAbalA",{
                    data:{
                        "uid": this.uid,
                        "mon": this.mon,
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
                    urlParam:"abala",
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