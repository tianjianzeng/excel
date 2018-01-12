<template>
    <div class="excel excel38">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
              <tbody>
                   <tr>
                        <td colspan="8">资产负债表</td>
                   </tr>
                    <tr>
                        <td colspan="8">（适用执行企业会计准则的一般企业）</td>
                   </tr>
                   <tr>
                        <td colspan="6"></td>
                        <td>单位：元</td>
                        <td></td>
                    </tr>
                   <tr>
                        <td colspan="4">流动资产</td>
                        <td colspan="4">流动负债</td>
                    </tr>
                    <tr>
                        <td class="blue" style="width:25%">资产</td>
                        <td class="blue" style="width:5%">行次</td>
                        <td class="blue" style="width:10%">期末余额</td>
                        <td class="blue" style="width:10%">年初余额</td>
                        <td class="blue" style="width:25%">负债和所有者权益</td>
                        <td class="blue" style="width:5%">行次</td>
                        <td class="blue" style="width:10%">期末余额</td>
                        <td class="blue" style="width:10%">年初余额</td>
                    </tr>
                    <tr>
                        <td class="blue">货币资金</td>
                        <td class="blue">1</td>
                        <td class="green"><number-display :value="a1_1"></number-display></td>
                        <td class="green"><number-display :value="a1_2"></number-display></td>
                        <td class="blue">短期借款</td>
                        <td class="blue">32</td>
                        <td class="green"><number-display :value="a32_1"></number-display></td>
                        <td class="green"><number-display :value="a32_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    以公允价值计量且其变动计入当期损益的金融资产</td>
                        <td class="blue">2</td>
                        <td class="green"><number-display :value="a2_1"></number-display></td>
                        <td class="green"><number-display :value="a2_2"></number-display></td>
                        <td class="blue">    以公允价值计量且其变动计入当期损益的金融负债</td>
                        <td class="blue">33</td>
                        <td class="green"><number-display :value="a33_1"></number-display></td>
                        <td class="green"><number-display :value="a33_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    应收票据</td>
                        <td class="blue">3</td>
                        <td class="green"><number-display :value="a3_1"></number-display></td>
                        <td class="green"><number-display :value="a3_2"></number-display></td>
                        <td class="blue">    应付票据</td>
                        <td class="blue">34</td>
                        <td class="green"><number-display :value="a34_1"></number-display></td>
                        <td class="green"><number-display :value="a34_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    应收帐款</td>
                        <td class="blue">4</td>
                        <td class="green"><number-display :value="a4_1"></number-display></td>
                        <td class="green"><number-display :value="a4_2"></number-display></td>
                        <td class="blue">    应付账款</td>
                        <td class="blue">35</td>
                        <td class="green"><number-display :value="a35_1"></number-display></td>
                        <td class="green"><number-display :value="a35_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    预付款项</td>
                        <td class="blue">5</td>
                        <td class="green"><number-display :value="a5_1"></number-display></td>
                        <td class="green"><number-display :value="a5_2"></number-display></td>
                        <td class="blue">    预收账款</td>
                        <td class="blue">36</td>
                        <td class="green"><number-display :value="a36_1"></number-display></td>
                        <td class="green"><number-display :value="a36_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    应收利息</td>
                        <td class="blue">6</td>
                        <td class="green"><number-display :value="a6_1"></number-display></td>
                        <td class="green"><number-display :value="a6_2"></number-display></td>
                        <td class="blue">    应付职工薪酬</td>
                        <td class="blue">37</td>
                        <td class="green"><number-display :value="a37_1"></number-display></td>
                        <td class="green"><number-display :value="a37_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    应收股利</td>
                        <td class="blue">7</td>
                        <td class="green"><number-display :value="a7_1"></number-display></td>
                        <td class="green"><number-display :value="a7_2"></number-display></td>
                        <td class="blue">    应交税费</td>
                        <td class="blue">38</td>
                        <td class="green"><number-display :value="a38_1"></number-display></td>
                        <td class="green"><number-display :value="a38_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    其他应收款</td>
                        <td class="blue">8</td>
                        <td class="green"><number-display :value="a8_1"></number-display></td>
                        <td class="green"><number-display :value="a8_2"></number-display></td>
                        <td class="blue">    应付利息</td>
                        <td class="blue">39</td>
                        <td class="green"><number-display :value="a39_1"></number-display></td>
                        <td class="green"><number-display :value="a39_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    存货</td>
                        <td class="blue">9</td>
                        <td class="green"><number-display :value="a9_1"></number-display></td>
                        <td class="green"><number-display :value="a9_2"></number-display></td>
                        <td class="blue">    应付股利</td>
                        <td class="blue">40</td>
                        <td class="green"><number-display :value="a40_1"></number-display></td>
                        <td class="green"><number-display :value="a40_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    一年的到期的非流动资产</td>
                        <td class="blue">10</td>
                        <td class="green"><number-display :value="a10_1"></number-display></td>
                        <td class="green"><number-display :value="a10_2"></number-display></td>
                        <td class="blue">    其他应付款</td>
                        <td class="blue">41</td>
                        <td class="green"><number-display :value="a41_1"></number-display></td>
                        <td class="green"><number-display :value="a41_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    其他流动资产</td>
                        <td class="blue">11</td>
                        <td class="green"><number-display :value="a11_1"></number-display></td>
                        <td class="green"><number-display :value="a11_2"></number-display></td>
                        <td class="blue">    一年内到期的非流动负债</td>
                        <td class="blue">42</td>
                        <td class="green"><number-display :value="a42_1"></number-display></td>
                        <td class="green"><number-display :value="a42_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">流动资产合计</td>
                        <td class="blue">12</td>
                        <td><number-display :value="a12_1"></number-display></td>
                        <td><number-display :value="a12_2"></number-display></td>
                        <td class="blue">    其他流动负债</td>
                        <td class="blue">43</td>
                        <td class="green"><number-display :value="a43_1"></number-display></td>
                        <td class="green"><number-display :value="a43_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">非流动资产：</td>
                        <td class="blue"></td>
                        <td class="blue">--</td>
                        <td class="blue">--</td>
                        <td class="blue">流动负债合计</td>
                        <td class="blue">44</td>
                        <td><number-display :value="a44_1"></number-display></td>
                        <td><number-display :value="a44_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    可供出售金融资产</td>
                        <td class="blue">13</td>
                        <td class="green"><number-display :value="a13_1"></number-display></td>
                        <td class="green"><number-display :value="a13_2"></number-display></td>
                        <td class="blue">非流动负债：</td>
                        <td class="blue"></td>
                        <td class="blue">--</td>
                        <td class="blue">--</td>
                    </tr>
                    <tr>
                        <td class="blue">    持有至到期投资</td>
                        <td class="blue">14</td>
                        <td class="green"><number-display :value="a14_1"></number-display></td>
                        <td class="green"><number-display :value="a14_2"></number-display></td>
                        <td class="blue">    长期借款</td>
                        <td class="blue">45</td>
                        <td class="green"><number-display :value="a45_1"></number-display></td>
                        <td class="green"><number-display :value="a45_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    长期应收款</td>
                        <td class="blue">15</td>
                        <td class="green"><number-display :value="a15_1"></number-display></td>
                        <td class="green"><number-display :value="a15_2"></number-display></td>
                        <td class="blue">    应付债券</td>
                        <td class="blue">46</td>
                        <td class="green"><number-display :value="a46_1"></number-display></td>
                        <td class="green"><number-display :value="a46_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    长期股权投资</td>
                        <td class="blue">16</td>
                        <td class="green"><number-display :value="a16_1"></number-display></td>
                        <td class="green"><number-display :value="a16_2"></number-display></td>
                        <td class="blue">    长期应付款</td>
                        <td class="blue">47</td>
                        <td class="green"><number-display :value="a47_1"></number-display></td>
                        <td class="green"><number-display :value="a47_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    投资性房地产</td>
                        <td class="blue">17</td>
                        <td class="green"><number-display :value="a17_1"></number-display></td>
                        <td class="green"><number-display :value="a17_2"></number-display></td>
                        <td class="blue">    专项应付款</td>
                        <td class="blue">48</td>
                        <td class="green"><number-display :value="a48_1"></number-display></td>
                        <td class="green"><number-display :value="a48_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    固定资产</td>
                        <td class="blue">18</td>
                        <td class="green"><number-display :value="a18_1"></number-display></td>
                        <td class="green"><number-display :value="a18_2"></number-display></td>
                        <td class="blue">    预计负债</td>
                        <td class="blue">49</td>
                        <td class="green"><number-display :value="a49_1"></number-display></td>
                        <td class="green"><number-display :value="a49_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    在建工程</td>
                        <td class="blue">19</td>
                        <td class="green"><number-display :value="a19_1"></number-display></td>
                        <td class="green"><number-display :value="a19_2"></number-display></td>
                        <td class="blue">    递延收益</td>
                        <td class="blue">50</td>
                        <td class="green"><number-display :value="a50_1"></number-display></td>
                        <td class="green"><number-display :value="a50_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    工程物资</td>
                        <td class="blue">20</td>
                        <td class="green"><number-display :value="a20_1"></number-display></td>
                        <td class="green"><number-display :value="a20_2"></number-display></td>
                        <td class="blue">    递延所得税负债</td>
                        <td class="blue">51</td>
                        <td class="green"><number-display :value="a51_1"></number-display></td>
                        <td class="green"><number-display :value="a51_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    固定资产清理</td>
                        <td class="blue">21</td>
                        <td class="green"><number-display :value="a21_1"></number-display></td>
                        <td class="green"><number-display :value="a21_2"></number-display></td>
                        <td class="blue">    其他非流动负债</td>
                        <td class="blue">52</td>
                        <td class="green"><number-display :value="a52_1"></number-display></td>
                        <td class="green"><number-display :value="a52_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    生物性生物资产</td>
                        <td class="blue">22</td>
                        <td class="green"><number-display :value="a22_1"></number-display></td>
                        <td class="green"><number-display :value="a22_2"></number-display></td>
                        <td class="blue">    非流动负债合计</td>
                        <td class="blue">53</td>
                        <td><number-display :value="a53_1"></number-display></td>
                        <td><number-display :value="a53_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    油气资产</td>
                        <td class="blue">23</td>
                        <td class="green"><number-display :value="a23_1"></number-display></td>
                        <td class="green"><number-display :value="a23_2"></number-display></td>
                        <td class="blue">    负债合计</td>
                        <td class="blue">54</td>
                        <td><number-display :value="a54_1"></number-display></td>
                        <td><number-display :value="a54_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    无形资产</td>
                        <td class="blue">24</td>
                        <td class="green"><number-display :value="a24_1"></number-display></td>
                        <td class="green"><number-display :value="a24_2"></number-display></td>
                        <td class="blue">    所有者权益（或股东权益）：</td>
                        <td class="blue"></td>
                        <td class="blue">--</td>
                        <td class="blue">--</td>
                    </tr>
                    <tr>
                        <td class="blue">    开发支出</td>
                        <td class="blue">25</td>
                        <td class="green"><number-display :value="a25_1"></number-display></td>
                        <td class="green"><number-display :value="a25_2"></number-display></td>
                        <td class="blue">    实收资本（或股本）</td>
                        <td class="blue">55</td>
                        <td class="green"><number-display :value="a55_1"></number-display></td>
                        <td class="green"><number-display :value="a55_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    商誉</td>
                        <td class="blue">26</td>
                        <td class="green"><number-display :value="a26_1"></number-display></td>
                        <td class="green"><number-display :value="a26_2"></number-display></td>
                        <td class="blue">    资本公积</td>
                        <td class="blue">56</td>
                        <td class="green"><number-display :value="a56_1"></number-display></td>
                        <td class="green"><number-display :value="a56_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    长期待摊费用</td>
                        <td class="blue">27</td>
                        <td class="green"><number-display :value="a27_1"></number-display></td>
                        <td class="green"><number-display :value="a27_2"></number-display></td>
                        <td class="blue">    减：库存股</td>
                        <td class="blue">57</td>
                        <td class="green"><number-display :value="a57_1"></number-display></td>
                        <td class="green"><number-display :value="a57_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    递延所得税资产</td>
                        <td class="blue">28</td>
                        <td class="green"><number-display :value="a28_1"></number-display></td>
                        <td class="green"><number-display :value="a28_2"></number-display></td>
                        <td class="blue">    其他综合收益</td>
                        <td class="blue">58</td>
                        <td class="green"><number-display :value="a58_1"></number-display></td>
                        <td class="green"><number-display :value="a58_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    其他非流动资产</td>
                        <td class="blue">29</td>
                        <td class="green"><number-display :value="a29_1"></number-display></td>
                        <td class="green"><number-display :value="a29_2"></number-display></td>
                        <td class="blue">    盈余公积</td>
                        <td class="blue">59</td>
                        <td class="green"><number-display :value="a59_1"></number-display></td>
                        <td class="green"><number-display :value="a59_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    非流动资产合计</td>
                        <td class="blue">30</td>
                        <td><number-display :value="a30_1"></number-display></td>
                        <td><number-display :value="a30_2"></number-display></td>
                        <td class="blue">    未分配利润</td>
                        <td class="blue">60</td>
                        <td class="green"><number-display :value="a60_1"></number-display></td>
                        <td class="green"><number-display :value="a60_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">    资产合计</td>
                        <td class="blue">31</td>
                        <td><number-display :value="a31_1"></number-display></td>
                        <td><number-display :value="a31_2"></number-display></td>
                        <td class="blue">    所有者权益（或股东权益）合计</td>
                        <td class="blue">61</td>
                        <td><number-display :value="a61_1"></number-display></td>
                        <td><number-display :value="a61_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue"></td>
                        <td class="blue"></td>
                        <td class="green"></td>
                        <td class="green"></td>
                        <td class="blue">    负债和所有者权益（或股东权益）总计</td>
                        <td class="blue">62</td>
                        <td><number-display :value="a62_1"></number-display></td>
                        <td><number-display :value="a62_2"></number-display></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <el-button type="primary" v-if="false" @click="save">保存</el-button>
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
        name: 'excel38',
        data() {
            return {
                fixed:2,
                id:0,
                a1_1: 0,
                a1_2: 0,
                a2_1: 0,
                a2_2: 0,
                a3_1: 0,
                a3_2: 0,
                a4_1: 0,
                a4_2: 0,
                a5_1: 0,
                a5_2: 0,
                a6_1: 0,
                a6_2: 0,
                a7_1: 0,
                a7_2: 0,
                a8_1: 0,
                a8_2: 0,
                a9_1: 0,
                a9_2: 0,
                a10_1: 0,
                a10_2: 0,
                a11_1: 0,
                a11_2: 0,
                a12_1: 0,
                a12_2: 0,
                a13_1: 0,
                a13_2: 0,
                a14_1: 0,
                a14_2: 0,
                a15_1: 0,
                a15_2: 0,
                a16_1: 0,
                a16_2: 0,
                a17_1: 0,
                a17_2: 0,
                a18_1: 0,
                a18_2: 0,
                a19_1: 0,
                a19_2: 0,
                a20_1: 0,
                a20_2: 0,
                a21_1: 0,
                a21_2: 0,
                a22_1: 0,
                a22_2: 0,
                a23_1: 0,
                a23_2: 0,
                a24_1: 0,
                a24_2: 0,
                a25_1: 0,
                a25_2: 0,
                a26_1: 0,
                a26_2: 0,
                a27_1: 0,
                a27_2: 0,
                a28_1: 0,
                a28_2: 0,
                a29_1: 0,
                a29_2: 0,
                a30_1: 0,
                a30_2: 0,
                a31_1: 0,
                a31_2: 0,
                a32_1: 0,
                a32_2: 0,
                a33_1: 0,
                a33_2: 0,
                a34_1: 0,
                a34_2: 0,
                a35_1: 0,
                a35_2: 0,
                a36_1: 0,
                a36_2: 0,
                a37_1: 0,
                a37_2: 0,
                a38_1: 0,
                a38_2: 0,
                a39_1: 0,
                a39_2: 0,
                a40_1: 0,
                a40_2: 0,
                a41_1: 0,
                a41_2: 0,
                a42_1: 0,
                a42_2: 0,
                a43_1: 0,
                a43_2: 0,
                a44_1: 0,
                a44_2: 0,
                a45_1: 0,
                a45_2: 0,
                a46_1: 0,
                a46_2: 0,
                a47_1: 0,
                a47_2: 0,
                a48_1: 0,
                a48_2: 0,
                a49_1: 0,
                a49_2: 0,
                a50_1: 0,
                a50_2: 0,
                a51_1: 0,
                a51_2: 0,
                a52_1: 0,
                a52_2: 0,
                a53_1: 0,
                a53_2: 0,
                a54_1: 0,
                a54_2: 0,
                a55_1: 0,
                a55_2: 0,
                a56_1: 0,
                a56_2: 0,
                a57_1: 0,
                a57_2: 0,
                a58_1: 0,
                a58_2: 0,
                a59_1: 0,
                a59_2: 0,
                a60_1: 0,
                a60_2: 0,
                a61_1: 0,
                a61_2: 0,
                a62_1: 0,
                a62_2: 0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableAbalC"]),
        },
        watch: {
            getTableAbalC(newVal) {
                if(newVal!=null){
                    for(let i in newVal){
                        if(this.hasOwnProperty(i)){
                            this[i]= newVal[i];
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
                for(let i=1;i<=62;i++){
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
                store.dispatch("editAbalC", {
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
                store.dispatch("getTableAbalC",{
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
                    urlParam:"abalc",
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