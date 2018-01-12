<template>
    <div class="excel excel39">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col width="5%"></col>
                <col width="20%"></col>
                <col width="20%"></col>
                <col width="20%"></col>
                <col width="210px"></col>
                <tbody>
                    <tr>
                            <td colspan="4">研发项目可加计扣除研究开发费用情况归集表</td>
                    </tr>
                    <tr>
                        <td class="blue">序号</td>
                        <td class="blue" colspan="2">项目</td>
                        <td class="blue" colspan="2">发生额</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue" colspan="2">一、人员人工费用小计</td>
                        <td colspan="2"><number-display :value="a1"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">1.1</td>
                        <td class="blue" rowspan="2">直接从事研发活动人员</td>
                        <td class="blue">工资薪金</td>
                        <td class="green" colspan="2"><number-input v-model="a1_1" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">1.2</td>
                        <td class="blue">五险一金</td>
                        <td class="green" colspan="2"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">1.3</td>
                        <td class="blue" colspan="2">外籍开发人员的劳务费用</td>
                        <td class="green" colspan="2"><number-input v-model="a1_3" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">2</td>
                        <td class="blue" colspan="2">二、直接投入费用小计</td>
                        <td colspan="2"><number-display :value="a2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">2.1</td>
                        <td class="blue" rowspan="3">研发活动直接消耗</td>
                        <td class="blue">材料</td>
                        <td class="green" colspan="2"><number-input v-model="a2_1" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">2.2</td>
                        <td class="blue">燃料</td>
                        <td class="green" colspan="2"><number-input v-model="a2_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">2.3</td>
                        <td class="blue">动力费用</td>
                        <td class="green" colspan="2"><number-input v-model="a2_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">2.4</td>
                        <td class="blue" colspan="2">用于中间试验和产品试制的模具、工艺装备开发及制造费</td>
                        <td class="green" colspan="2"><number-input v-model="a2_4" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">2.5</td>
                        <td class="blue" colspan="2">用于不构成固定资产的样品、样机及一般测试手段购置费</td>
                        <td class="green" colspan="2"><number-input v-model="a2_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">2.6</td>
                        <td class="blue" colspan="2">用于试验产品的检验费</td>
                        <td class="green" colspan="2"><number-input v-model="a2_6" :fixed="fixed"></number-input></td>
                    </tr>						
                    <tr>
                        <td class="blue">2.7</td>
                        <td class="blue" colspan="2">用于研发活动的仪器、设备的运行维护、调整、检验、维修等费用</td>
                        <td class="green" colspan="2"><number-input v-model="a2_7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">2.8</td>
                        <td class="blue" colspan="2">通过经营租赁方式租入的用于研发活动的仪器、设备租赁费</td>
                        <td class="green" colspan="2"><number-input v-model="a2_8" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">3</td>
                        <td class="blue" colspan="2">三、折旧费小计</td>
                        <td colspan="2"><number-display :value="a3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">3.1</td>
                        <td class="blue" colspan="2">用于研发活动的仪器的折旧费</td>
                        <td class="green" colspan="2"><number-input v-model="a3_1" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">3.2</td>
                        <td class="blue" colspan="2">用于研发活动的设备的折旧费</td>
                        <td class="green" colspan="2"><number-input v-model="a3_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">4</td>
                        <td class="blue" colspan="2">四、无形资产摊销小计</td>
                        <td colspan="2"><number-display :value="a4"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">4.1</td>
                        <td class="blue" colspan="2">用于研发活动的软件的摊销费用</td>
                        <td class="green" colspan="2"><number-input v-model="a4_1" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">4.2</td>
                        <td class="blue" colspan="2">用于研发活动的专利权的摊销费用</td>
                        <td class="green" colspan="2"><number-input v-model="a4_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">4.3</td>
                        <td class="blue" colspan="2">用于研发活动的非专利技术（包括许可证、专有技术、设计和计算方法等）的摊销费用</td>
                        <td class="green" colspan="2"><number-input v-model="a4_3" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">5</td>
                        <td class="blue" colspan="2">五、新产品设计费等小计</td>
                        <td colspan="2"><number-display :value="a5"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">5.1</td>
                        <td class="blue" colspan="2">新产品设计费</td>
                        <td class="green" colspan="2"><number-input v-model="a5_1" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">5.2</td>
                        <td class="blue" colspan="2">新工艺规程制定费</td>
                        <td class="green" colspan="2"><number-input v-model="a5_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">5.3</td>
                        <td class="blue" colspan="2">新药研制的临床试验费</td>
                        <td class="green" colspan="2"><number-input v-model="a5_3" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">5.4</td>
                        <td class="blue" colspan="2">勘探开发技术的现场试验费</td>
                        <td class="green" colspan="2"><number-input v-model="a5_4" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">6</td>
                        <td class="blue" colspan="2">六、其他相关费用小计</td>
                        <td><number-display :value="a6"></number-display></td>
                        <td><el-button v-if="0===list.length" type="primary" @click="add()">添加</el-button></td>
                    </tr>
                    <tr v-for="(item,index) in (list)" :key="index">
                        <td class="blue">6.{{index+1}}</td>
                        <td class="blue" colspan="2"><input v-model="item.a1"></td>
                        <td class="green"><number-input v-model="item.a2" :fixed="fixed"></number-input></td>
                        <td>
                            <el-button v-if="item.saved && index===list.length-1" type="primary" @click="add(item)">添加</el-button>
                            <el-button type="primary" @click="del(item)">删除</el-button>
                            <el-button v-if="!item.saved" type="primary" @click="sav(item)">保存</el-button>
                            <el-button v-if="item.saved" type="primary" @click="edt(item)">修改</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td class="blue">7</td>
                        <td class="blue" colspan="2">七、委托外部机构或个人进行研发活动所发生的费用</td>
                        <td class="green" colspan="2"><number-input v-model="a7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">7.1</td>
                        <td class="blue" colspan="2">其中：委托境外进行研发活动所发生的费用（包括存在关联关系的委托研发）</td>
                        <td class="green" colspan="2"><number-input v-model="a7_1" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">8</td>
                        <td class="blue" colspan="2">八、允许加计扣除的研发费用中的第1至5类费用合计（1+2+3+4+5）</td>
                        <td colspan="2"><number-display :value="a8"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">8.1</td>
                        <td class="blue" colspan="2">其他相关费用限额=序号8×10%/（1-10%）</td>
                        <td colspan="2"><number-display :value="a8_1"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">9</td>
                        <td class="blue" colspan="2">九、当期费用化支出可加计扣除总额</td>
                        <td class="green" colspan="2"><number-input v-model="a9" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">10</td>
                        <td class="blue" colspan="2">十、研发项目形成无形资产当期摊销额</td>
                        <td class="green" colspan="2"><number-input v-model="a10" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">10.1</td>
                        <td class="blue" colspan="2">其中：准予加计扣除的摊销额</td>
                        <td class="green" colspan="2"><number-input v-model="a10_1" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">8.1</td>
                        <td class="blue" colspan="2">十一、当期实际加计扣除总额（9+10.1）×50%</td>
                        <td colspan="2"><number-display :value="a11"></number-display></td>
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
        name: 'excel39',
        data() {
            return {
                fixed:2,
                id:0,
                a1_1:0,
                a1_2:0,
                a1_3:0,
                a2_1:0,
                a2_2:0,
                a2_3:0,
                a2_4:0,
                a2_5:0,
                a2_6:0,
                a2_7:0,
                a2_8:0,
                a3_1:0,
                a3_2:0,
                a4_1:0,
                a4_2:0,
                a4_3:0,
                a5_1:0,
                a5_2:0,
                a5_3:0,
                a5_4:0,
                a7:0,
                a7_1:0,
                a9:0,
                a10:0,
                a10_1:0,
                a6:0,
                list:[]
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getResearch"]),
            a1(){
                let rst = 0;
                for(let i=1;i<=3;i++){
                    this[`a1_${i}`] && (rst += this[`a1_${i}`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a2(){
                let rst = 0;
                for(let i=1;i<=8;i++){
                    this[`a2_${i}`] && (rst += this[`a2_${i}`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a3(){
                let rst = 0;
                for(let i=1;i<=2;i++){
                    this[`a3_${i}`] && (rst += this[`a3_${i}`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a4(){
                let rst = 0;
                for(let i=1;i<=3;i++){
                    this[`a4_${i}`] && (rst += this[`a4_${i}`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a5(){
                let rst = 0;
                for(let i=1;i<=4;i++){
                    this[`a5_${i}`] && (rst += this[`a5_${i}`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a8(){
                let rst = 0;
                for(let i=1;i<=5;i++){
                    this[`a${i}`] && (rst += this[`a${i}`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a8_1(){
                return this.a8 * 0.1 / 0.9;
            },
            a11(){
                return (this.a9 * Math.pow(10,this.fixed) + this.a10_1 * Math.pow(10,this.fixed)) * 0.5/ Math.pow(10,this.fixed);
            }
        },
        watch: {
            getResearch(newVal) {
                if(newVal!=null){
                    this.list = (newVal.list && JSON.parse(JSON.stringify(newVal.list)))||[];
                    for(let i in newVal.item){
                        if(this.hasOwnProperty(i)){
                            this[i]=newVal.item[i];
                        }
                    }
                }
            },
            'list':{  
                handler:function(val,oldval){  
                    var a2 = 0;
                    val.forEach(item=>{
                        if(item.saved === undefined){
                            item.saved = true;
                        }
                        a2 += item.a2;
                    });
                    this.a6 = a2;
                },  
                deep:true//对象内部的属性监听，也叫深度监听  
            },
        },
        methods:{
            save(){
                let postData = {
                    "id":this.id,
                    "a7":this.a7,
                    "a9":this.a9,
                    "a10":this.a10
                };
                for(let i=1;i<=11;i++){
                    for(let j=1;j<=8;j++){
                        let p = `a${i}_${j}`
                        if(this[p]!= undefined){
                            postData[p]=this[p];
                        }
                    }
                }
                
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editResearch", {
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
            add(){
                this.list.push({
                    saved:false,
                    a1:"",
                    a2:0,
                    saved:false
                });
            },
            del(item){
                if(!item.saved){
                    let i = this.list.indexOf(item);
                    this.list.splice(i,1);
                }else{
                    //调用删除接口
                    const loading = this.$loading({
                        lock: true,
                        text: '加载中',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.7)'
                    });
                    store.dispatch("delResearch",{
                        urlParam: item.id,
                        callback:(rst)=>{
                            if(rst.status==0){
                                this.$message({
                                    message: '删除成功',
                                    type: 'success'
                                });
                                let i = this.list.indexOf(item);
                                this.list.splice(i,1);
                            }
                        },
                        always:()=>{
                            loading.close();
                        }
                    })
                }
            },
            edt(item){
                //调用编辑接口
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("edit2Research",{
                    data:{
                        "id":item.id,
                        "addid":"1",
                        a1: item.a1,
                        a2: item.a2
                    },
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
            sav(item){
                //保存接口
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("add2Research",{
                    data:{
                        "uid": this.uid,
                        "mon": this.mon,
                        "cYear": this.year,
                        "addid": this.userId,
                        a1: item.a1,
                        a2: item.a2
                    },
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
                        item.saved = true;
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
                store.dispatch("getResearch",{
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
                // store.dispatch("flush",{
                //     data:{
                //         "year": this.year,
                //         "uid": this.uid,
                //         "userId": this.userId
                //     },
                //     urlParam:"abalb",
                //     always:()=>{
                //         this.load();
                //     }
                // })
            }
        },
        mounted() {
            this.load();
        }
    }
</script>

<style lang="scss" scoped>
</style>