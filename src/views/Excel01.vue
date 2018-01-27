<template>
    <div class="excel excel02">
        <div class="table-wraper">
            <table class="body" style="mouse" cellspacing="0" cellpadding="0" border="0" >
                <tbody>
                    <tr>
                        <td colspan="9">所得减免优惠明细表</td>
                    </tr>
                    <tr>
                        <td style="width:5%" rowspan="2">行次</td>
                        <td style="width:25%" rowspan="2">项目</td>   
                        <td style="width:10%">项目收入</td>
                        <td style="width:10%">项目成本</td>
                        <td style="width:10%">相关税费</td>
                        <td style="width:10%">应分摊期间费用</td>
                        <td style="width:10%">纳税调整额</td>
                        <td style="width:10%">项目所得额</td>
                        <td style="width:10%">减免所得额</td>  
                    </tr>
                    <tr>   
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6(1-2-3-4+5)</td>
                        <td>7</td> 
                    </tr>
                    <tr>
                        <td class="blue" style="width:5%">1</td>
                        <td class="blue" style="width:25%">一、农、林、牧、渔业项目(2+13)</td>  
                        <td style="width:10%"><div><number-display :value="a1_1"></number-display></div></td>
                        <td style="width:10%"><div><number-display :value="a1_2"></number-display></div></td>
                        <td style="width:10%"><div><number-display :value="a1_3"></number-display></div></td>
                        <td style="width:10%"><div><number-display :value="a1_4"></number-display></div></td>
                        <td style="width:10%"><div><number-display :value="a1_5"></number-display></div></td>
                        <td style="width:10%"><div><number-display :value="a1_6"></number-display></div></td>
                        <td style="width:10%"><div><number-display :value="a1_7"></number-display></div></td>    
                    </tr>
                    <tr>
                        <td class="blue">2</td>
                        <td class="blue">（一）免税项目（3+4+5+6+7+8+9+11+12)</td>  
                        <td><div><number-display :value="a2_1"></number-display></div></td>
                        <td><div><number-display :value="a2_2"></number-display></div></td>
                        <td><div><number-display :value="a2_3"></number-display></div></td>
                        <td><div><number-display :value="a2_4"></number-display></div></td>
                        <td><div><number-display :value="a2_5"></number-display></div></td>
                        <td><div><number-display :value="a2_6"></number-display></div></td>
                        <td><div><number-display :value="a2_7"></number-display></div></td> 
                    </tr>
                    <tr>
                        <td class="blue">3</td>
                        <td class="blue">1.蔬菜、谷物、薯类、油料、豆类、棉花、麻类、糖料、水果、坚果的种植项目</td>  
                        <td class="green"><number-input v-model="a3_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a3_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a3_7" :fixed="fixed"></number-input></td> 
                    </tr>
                    <tr>
                        <td class="blue">4</td>
                        <td class="blue">2.农作物新品种的选育</td>  
                        <td class="green"><number-input v-model="a4_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a4_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a4_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a4_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a4_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a4_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a4_7" :fixed="fixed"></number-input></td>  
                    </tr>
                    <tr>
                        <td class="blue">5</td>
                        <td class="blue">3.中药材的种植</td>  
                        <td class="green"><number-input v-model="a5_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a5_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a5_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a5_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a5_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a5_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a5_7" :fixed="fixed"></number-input></td>  
                    </tr>
                    <tr>
                        <td class="blue">6</td>
                        <td class="blue">4.林木的培育和种植</td>  
                        <td class="green"><number-input v-model="a6_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a6_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a6_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a6_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a6_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a6_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a6_7" :fixed="fixed"></number-input></td>  
                    </tr>
                    <tr>
                        <td class="blue">7</td>
                        <td class="blue">5.牲畜、家禽的饲养</td>  
                        <td class="green"><number-input v-model="a7_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a7_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a7_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a7_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a7_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a7_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a7_7" :fixed="fixed"></number-input></td>  
                    </tr>
                    <tr>
                        <td class="blue">8</td>
                        <td class="blue">6.林产品的采集</td>  
                        <td class="green"><number-input v-model="a8_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a8_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a8_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a8_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a8_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a8_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a8_7" :fixed="fixed"></number-input></td>  
                    </tr>
                    <tr>
                        <td class="blue">9</td>
                        <td class="blue">7.灌溉、农产品初加工、兽医、农技推广、农机作业和维修等农、林、牧、渔服务业项目</td>  
                        <td class="green"><number-input v-model="a9_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a9_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a9_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a9_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a9_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a9_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a9_7" :fixed="fixed"></number-input></td>  
                    </tr>
                    <tr>
                        <td class="blue">10</td>
                        <td class="blue">其中：农产品初加工</td>  
                        <td class="green"><number-input v-model="a10_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a10_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a10_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a10_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a10_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a10_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a10_7" :fixed="fixed"></number-input></td>  
                    </tr>
                    <tr>
                        <td class="blue">11</td>
                        <td class="blue">8.远洋捕捞</td>  
                        <td class="green"><number-input v-model="a11_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a11_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a11_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a11_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a11_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a11_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a11_7" :fixed="fixed"></number-input></td>  
                    </tr>
                    <tr>
                        <td class="blue">12</td>
                        <td class="blue">9.其他</td>  
                        <td class="green"><number-input v-model="a12_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a12_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a12_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a12_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a12_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a12_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a12_7" :fixed="fixed"></number-input></td>  
                    </tr>
                    <tr>
                        <td class="blue">13</td>
                        <td class="blue">（二）减半征税项目（14+15+16）</td>  
                        <td><div><number-display :value="a13_1"></number-display></div></td>
                        <td><div><number-display :value="a13_2"></number-display></div></td>
                        <td><div><number-display :value="a13_3"></number-display></div></td>
                        <td><div><number-display :value="a13_4"></number-display></div></td>
                        <td><div><number-display :value="a13_5"></number-display></div></td>
                        <td><div><number-display :value="a13_6"></number-display></div></td>
                        <td><div><number-display :value="a13_7"></number-display></div></td>  
                    </tr>
                    <tr>
                        <td class="blue">14</td>
                        <td class="blue">1.花卉、茶以及其他饮料作物和香料作物的种植</td>  
                        <td class="green"><number-input v-model="a14_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a14_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a14_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a14_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a14_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a14_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a14_7" :fixed="fixed"></number-input></td>  
                    </tr>
                    <tr>
                        <td class="blue">15</td>
                        <td class="blue">2.海水养殖、内陆养殖</td>  
                        <td class="green"><number-input v-model="a15_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a15_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a15_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a15_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a15_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a15_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a15_7" :fixed="fixed"></number-input></td>  
                    </tr>
                    <tr>
                        <td class="blue">16</td>
                        <td class="blue">3.其他</td>  
                        <td class="green"><number-input v-model="a16_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a16_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a16_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a16_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a16_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a16_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a16_7" :fixed="fixed"></number-input></td>  
                    </tr>
                    <tr>
                        <td class="blue">17</td>
                        <td class="blue">二、国家重点扶持的公共基础设施项目(18+19+20+21+22+23+24+25)</td>  
                        <td><div><number-display :value="a17_1"></number-display></div></td>
                        <td><div><number-display :value="a17_2"></number-display></div></td>
                        <td><div><number-display :value="a17_3"></number-display></div></td>
                        <td><div><number-display :value="a17_4"></number-display></div></td>
                        <td><div><number-display :value="a17_5"></number-display></div></td>
                        <td><div><number-display :value="a17_6"></number-display></div></td>
                        <td><div><number-display :value="a17_7"></number-display></div></td>  
                    </tr>
                    <tr>
                        <td class="blue">18</td>
                        <td class="blue">（一）港口码头项目</td>  
                        <td class="green"><number-input v-model="a18_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a18_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a18_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a18_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a18_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a18_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a18_7" :fixed="fixed"></number-input></td>  
                    </tr>
                    <tr>
                        <td class="blue">19</td>
                        <td class="blue">（二）机场项目</td>
                        <td class="green"><number-input v-model="a19_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a19_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a19_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a19_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a19_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a19_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a19_7" :fixed="fixed"></number-input></td>  
                    </tr>
                    <tr>
                        <td class="blue">20</td>
                        <td class="blue">（三）铁路项目</td>
                        <td class="green"><number-input v-model="a20_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a20_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a20_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a20_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a20_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a20_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a20_7" :fixed="fixed"></number-input></td>  
                    </tr>
                    <tr>
                        <td class="blue">21</td>
                        <td class="blue">（四）公路项目</td>
                        <td class="green"><number-input v-model="a21_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a21_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a21_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a21_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a21_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a21_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a21_7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">22</td>
                        <td class="blue">（五）城市公共交通项目</td>
                        <td class="green"><number-input v-model="a22_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a22_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a22_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a22_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a22_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a22_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a22_7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">23</td>
                        <td class="blue">（六）电力项目</td>
                        <td class="green"><number-input v-model="a23_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a23_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a23_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a23_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a23_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a23_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a23_7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">24</td>
                        <td class="blue">（七）水利项目</td>
                        <td class="green"><number-input v-model="a24_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a24_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a24_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a24_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a24_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a24_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a24_7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">25</td>
                        <td class="blue">（八）其他项目</td>
                        <td class="green"><number-input v-model="a25_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a25_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a25_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a25_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a25_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a25_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a25_7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">26</td>
                        <td class="blue">三、符合条件的环境保护、节能节水项目(27+28+29+30+31+32）</td>
                        <td><div><number-display :value="a26_1"></number-display></div></td>
                        <td><div><number-display :value="a26_2"></number-display></div></td>
                        <td><div><number-display :value="a26_3"></number-display></div></td>
                        <td><div><number-display :value="a26_4"></number-display></div></td>
                        <td><div><number-display :value="a26_5"></number-display></div></td>
                        <td><div><number-display :value="a26_6"></number-display></div></td>
                        <td><div><number-display :value="a26_7"></number-display></div></td>
                    </tr>
                    <tr>
                        <td class="blue">27</td>
                        <td class="blue">（一）公共污水处理项目</td>
                        <td class="green"><number-input v-model="a27_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a27_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a27_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a27_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a27_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a27_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a27_7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">28</td>
                        <td class="blue">（二）公共垃圾处理项目</td>
                        <td class="green"><number-input v-model="a28_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a28_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a28_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a28_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a28_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a28_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a28_7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">29</td>
                        <td class="blue">（三）沼气综合开发利用项目</td>
                        <td class="green"><number-input v-model="a29_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a29_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a29_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a29_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a29_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a29_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a29_7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">30</td>
                        <td class="blue">（四）节能减排技术改造项目</td>
                        <td class="green"><number-input v-model="a30_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a30_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a30_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a30_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a30_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a30_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a30_7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">31</td>
                        <td class="blue">（五）海水淡化项目</td>
                        <td class="green"><number-input v-model="a31_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a31_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a31_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a31_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a31_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a31_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a31_7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">32</td>
                        <td class="blue">（六）其他项目</td>
                        <td class="green"><number-input v-model="a32_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a32_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a32_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a32_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a32_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a32_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a32_7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">33</td>
                        <td class="blue">四、符合条件的技术转让项目（34+35）</td>
                        <td class="green"><number-input v-model="a33_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a33_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a33_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a33_4" :fixed="fixed"></number-input></td>
                        <td class="blue"><div>*</div></td>
                        <td class="green"><number-input v-model="a33_6" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a33_7"></number-display></div></td>
                    </tr>
                    <tr>
                        <td class="blue">34</td>
                        <td class="blue">（一）技术转让所得不超过500万元部分</td>
                        <td class="blue"><div>*</div></td>
                        <td class="blue"><div>*</div></td>
                        <td class="blue"><div>*</div></td>
                        <td class="blue"><div>*</div></td>
                        <td class="blue"><div>*</div></td>
                        <td class="blue"><div>*</div></td>
                        <td class="green"><number-input v-model="a34_7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">35</td>
                        <td class="blue">（二）技术转让所得超过500万元部分</td>
                        <td class="blue"><div>*</div></td>
                        <td class="blue"><div>*</div></td>
                        <td class="blue"><div>*</div></td>
                        <td class="blue"><div>*</div></td>
                        <td class="blue"><div>*</div></td>
                        <td class="blue"><div>*</div></td>
                        <td class="green"><number-input v-model="a35_7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">36</td>
                        <td class="blue">五、其他专项优惠项目（37+38+39）</td>
                        <td><div><number-display :value="a36_1"></number-display></div></td>
                        <td><div><number-display :value="a36_2"></number-display></div></td>
                        <td><div><number-display :value="a36_3"></number-display></div></td>
                        <td><div><number-display :value="a36_4"></number-display></div></td>
                        <td><div><number-display :value="a36_5"></number-display></div></td>
                        <td><div><number-display :value="a36_6"></number-display></div></td>
                        <td><div><number-display :value="a36_7"></number-display></div></td>
                    </tr>
                    <tr>
                        <td class="blue">37</td>
                        <td class="blue">（一）实施清洁发展机制项目</td>
                        <td class="green"><number-input v-model="a37_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a37_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a37_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a37_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a37_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a37_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a37_7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">38</td>
                        <td class="blue">（二）符合条件的节能服务公司实施合同能源管理项目</td>
                        <td class="green"><number-input v-model="a38_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a38_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a38_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a38_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a38_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a38_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a38_7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">39</td>
                        <td class="blue">（三）其他</td>
                        <td class="green"><number-input v-model="a39_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a39_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a39_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a39_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a39_5" :fixed="fixed"></number-input></td>
                        <td><div><number-display :value="a39_6"></number-display></div></td>
                        <td class="green"><number-input v-model="a39_7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">40</td>
                        <td class="blue">合计（1+17+26+33+36）</td>
                        <td><div><number-display :value="a40_1"></number-display></div></td>
                        <td><div><number-display :value="a40_2"></number-display></div></td>
                        <td><div><number-display :value="a40_3"></number-display></div></td>
                        <td><div><number-display :value="a40_4"></number-display></div></td>
                        <td><div><number-display :value="a40_5"></number-display></div></td>
                        <td><div><number-display :value="a40_6"></number-display></div></td>
                        <td><div><number-display :value="a40_7"></number-display></div></td>
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
        name: 'excel01',
        data() {
            return {
                year:0,
                uid:0,
                userId:0,
                fixed:2,
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
            NumberInput,
            NumberDisplay
        },
        computed: {
            ...mapGetters(["getTableA107020"]),
            a1_1() {
                return ((this.a2_1 || 0) * Math.pow(10,this.fixed) + (this.a13_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a2_1() {
                return ((this.a3_1 || 0) * Math.pow(10,this.fixed) + (this.a4_1 || 0) * Math.pow(10,this.fixed) + (this.a5_1 || 0) * Math.pow(10,this.fixed) + (this.a6_1 || 0) * Math.pow(10,this.fixed) + (this.a7_1 || 0) * Math.pow(10,this.fixed) + (this.a8_1 || 0) * Math.pow(10,this.fixed) + (this.a9_1 || 0) * Math.pow(10,this.fixed) + (this.a11_1 || 0) * Math.pow(10,this.fixed) + (this.a12_1 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a13_1(){
                return ((this.a14_1 || 0) * Math.pow(10,this.fixed) + (this.a15_1 || 0) * Math.pow(10,this.fixed) + (this.a16_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a17_1(){
                return ((this.a18_1 || 0) * Math.pow(10,this.fixed) + (this.a19_1 || 0) * Math.pow(10,this.fixed) + (this.a20_1 || 0) * Math.pow(10,this.fixed) + (this.a21_1 || 0) * Math.pow(10,this.fixed) + (this.a22_1 || 0) * Math.pow(10,this.fixed) + (this.a23_1 || 0) * Math.pow(10,this.fixed) + (this.a24_1 || 0) * Math.pow(10,this.fixed) + (this.a25_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a26_1(){
                return ((this.a27_1 || 0) * Math.pow(10,this.fixed) + (this.a28_1 || 0) * Math.pow(10,this.fixed) + (this.a29_1 || 0) * Math.pow(10,this.fixed) + (this.a30_1 || 0) * Math.pow(10,this.fixed) + (this.a31_1 || 0) * Math.pow(10,this.fixed) + (this.a32_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a36_1(){
                return ((this.a37_1 || 0) * Math.pow(10,this.fixed) + (this.a38_1 || 0) * Math.pow(10,this.fixed) + (this.a39_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a40_1(){
                return ((this.a1_1 || 0) * Math.pow(10,this.fixed) + (this.a17_1 || 0) * Math.pow(10,this.fixed) + (this.a26_1 || 0) * Math.pow(10,this.fixed) + (this.a33_1 || 0) * Math.pow(10,this.fixed) + (this.a36_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a1_2() {
                return ((this.a2_2 || 0) * Math.pow(10,this.fixed) + (this.a13_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a2_2() {
                return ((this.a3_2 || 0) * Math.pow(10,this.fixed) + (this.a4_2 || 0) * Math.pow(10,this.fixed) + (this.a5_2 || 0) * Math.pow(10,this.fixed) + (this.a6_2 || 0) * Math.pow(10,this.fixed) + (this.a7_2 || 0) * Math.pow(10,this.fixed) + (this.a8_2 || 0) * Math.pow(10,this.fixed) + (this.a9_2 || 0) * Math.pow(10,this.fixed) + (this.a11_2 || 0) * Math.pow(10,this.fixed) + (this.a12_2 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a13_2(){
                return ((this.a14_2 || 0) * Math.pow(10,this.fixed) + (this.a15_2 || 0) * Math.pow(10,this.fixed) + (this.a16_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a17_2(){
                return ((this.a18_2 || 0) * Math.pow(10,this.fixed) + (this.a19_2 || 0) * Math.pow(10,this.fixed) + (this.a20_2 || 0) * Math.pow(10,this.fixed) + (this.a21_2 || 0) * Math.pow(10,this.fixed) + (this.a22_2 || 0) * Math.pow(10,this.fixed) + (this.a23_2 || 0) * Math.pow(10,this.fixed) + (this.a24_2 || 0) * Math.pow(10,this.fixed) + (this.a25_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a26_2(){
                return ((this.a27_2 || 0) * Math.pow(10,this.fixed) + (this.a28_2 || 0) * Math.pow(10,this.fixed) + (this.a29_2 || 0) * Math.pow(10,this.fixed) + (this.a30_2 || 0) * Math.pow(10,this.fixed) + (this.a31_2 || 0) * Math.pow(10,this.fixed) + (this.a32_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a36_2(){
                return ((this.a37_2 || 0) * Math.pow(10,this.fixed) + (this.a38_2 || 0) * Math.pow(10,this.fixed) + (this.a39_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a40_2(){
                return ((this.a1_2 || 0) * Math.pow(10,this.fixed) + (this.a17_2 || 0) * Math.pow(10,this.fixed) + (this.a26_2 || 0) * Math.pow(10,this.fixed) + (this.a33_2 || 0) * Math.pow(10,this.fixed) + (this.a36_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a1_3() {
                return ((this.a2_3 || 0) * Math.pow(10,this.fixed) + (this.a13_3 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a2_3() {
                return ((this.a3_3 || 0) * Math.pow(10,this.fixed) + (this.a4_3 || 0) * Math.pow(10,this.fixed) + (this.a5_3 || 0) * Math.pow(10,this.fixed) + (this.a6_3 || 0) * Math.pow(10,this.fixed) + (this.a7_3 || 0) * Math.pow(10,this.fixed) + (this.a8_3 || 0) * Math.pow(10,this.fixed) + (this.a9_3 || 0) * Math.pow(10,this.fixed) + (this.a11_3 || 0) * Math.pow(10,this.fixed) + (this.a12_3 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a13_3(){
                return ((this.a14_3 || 0) * Math.pow(10,this.fixed) + (this.a15_3 || 0) * Math.pow(10,this.fixed) + (this.a16_3 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a17_3(){
                return ((this.a18_3 || 0) * Math.pow(10,this.fixed) + (this.a19_3 || 0) * Math.pow(10,this.fixed) + (this.a20_3 || 0) * Math.pow(10,this.fixed) + (this.a21_3 || 0) * Math.pow(10,this.fixed) + (this.a22_3 || 0) * Math.pow(10,this.fixed) + (this.a23_3 || 0) * Math.pow(10,this.fixed) + (this.a24_3 || 0) * Math.pow(10,this.fixed) + (this.a25_3 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a26_3(){
                return ((this.a27_3 || 0) * Math.pow(10,this.fixed) + (this.a28_3 || 0) * Math.pow(10,this.fixed) + (this.a29_3 || 0) * Math.pow(10,this.fixed) + (this.a30_3 || 0) * Math.pow(10,this.fixed) + (this.a31_3 || 0) * Math.pow(10,this.fixed) + (this.a32_3 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a36_3(){
                return ((this.a37_3 || 0) * Math.pow(10,this.fixed) + (this.a38_3 || 0) * Math.pow(10,this.fixed) + (this.a39_3 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a40_3(){
                return ((this.a1_3 || 0) * Math.pow(10,this.fixed) + (this.a17_3 || 0) * Math.pow(10,this.fixed) + (this.a26_3 || 0) * Math.pow(10,this.fixed) + (this.a33_3 || 0) * Math.pow(10,this.fixed) + (this.a36_3 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a1_4() {
                return ((this.a2_4 || 0) * Math.pow(10,this.fixed) + (this.a13_4 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a2_4() {
                return ((this.a3_4 || 0) * Math.pow(10,this.fixed) + (this.a4_4 || 0) * Math.pow(10,this.fixed) + (this.a5_4 || 0) * Math.pow(10,this.fixed) + (this.a6_4 || 0) * Math.pow(10,this.fixed) + (this.a7_4 || 0) * Math.pow(10,this.fixed) + (this.a8_4 || 0) * Math.pow(10,this.fixed) + (this.a9_4 || 0) * Math.pow(10,this.fixed) + (this.a11_4 || 0) * Math.pow(10,this.fixed) + (this.a12_4 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a13_4(){
                return ((this.a14_4 || 0) * Math.pow(10,this.fixed) + (this.a15_4 || 0) * Math.pow(10,this.fixed) + (this.a16_4 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a17_4(){
                return ((this.a18_4 || 0) * Math.pow(10,this.fixed) + (this.a19_4 || 0) * Math.pow(10,this.fixed) + (this.a20_4 || 0) * Math.pow(10,this.fixed) + (this.a21_4 || 0) * Math.pow(10,this.fixed) + (this.a22_4 || 0) * Math.pow(10,this.fixed) + (this.a23_4 || 0) * Math.pow(10,this.fixed) + (this.a24_4 || 0) * Math.pow(10,this.fixed) + (this.a25_4 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a26_4(){
                return ((this.a27_4 || 0) * Math.pow(10,this.fixed) + (this.a28_4 || 0) * Math.pow(10,this.fixed) + (this.a29_4 || 0) * Math.pow(10,this.fixed) + (this.a30_4 || 0) * Math.pow(10,this.fixed) + (this.a31_4 || 0) * Math.pow(10,this.fixed) + (this.a32_4 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a36_4(){
                return ((this.a37_4 || 0) * Math.pow(10,this.fixed) + (this.a38_4 || 0) * Math.pow(10,this.fixed) + (this.a39_4 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a40_4(){
                return ((this.a1_4 || 0) * Math.pow(10,this.fixed) + (this.a17_4 || 0) * Math.pow(10,this.fixed) + (this.a26_4 || 0) * Math.pow(10,this.fixed) + (this.a33_4 || 0) * Math.pow(10,this.fixed) + (this.a36_4 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a1_5() {
                return ((this.a2_5 || 0) * Math.pow(10,this.fixed) + (this.a13_5 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a2_5() {
                return ((this.a3_5 || 0) * Math.pow(10,this.fixed) + (this.a4_5 || 0) * Math.pow(10,this.fixed) + (this.a5_5 || 0) * Math.pow(10,this.fixed) + (this.a6_5 || 0) * Math.pow(10,this.fixed) + (this.a7_5 || 0) * Math.pow(10,this.fixed) + (this.a8_5 || 0) * Math.pow(10,this.fixed) + (this.a9_5 || 0) * Math.pow(10,this.fixed) + (this.a11_5 || 0) * Math.pow(10,this.fixed) + (this.a12_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a13_5(){
                return ((this.a14_5 || 0) * Math.pow(10,this.fixed) + (this.a15_5 || 0) * Math.pow(10,this.fixed) + (this.a16_5 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a17_5(){
                return ((this.a18_5 || 0) * Math.pow(10,this.fixed) + (this.a19_5 || 0) * Math.pow(10,this.fixed) + (this.a20_5 || 0) * Math.pow(10,this.fixed) + (this.a21_5 || 0) * Math.pow(10,this.fixed) + (this.a22_5 || 0) * Math.pow(10,this.fixed) + (this.a23_5 || 0) * Math.pow(10,this.fixed) + (this.a24_5 || 0) * Math.pow(10,this.fixed) + (this.a25_5 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a26_5(){
                return ((this.a27_5 || 0) * Math.pow(10,this.fixed) + (this.a28_5 || 0) * Math.pow(10,this.fixed) + (this.a29_5 || 0) * Math.pow(10,this.fixed) + (this.a30_5 || 0) * Math.pow(10,this.fixed) + (this.a31_5 || 0) * Math.pow(10,this.fixed) + (this.a32_5 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a36_5(){
                return ((this.a37_5 || 0) * Math.pow(10,this.fixed) + (this.a38_5 || 0) * Math.pow(10,this.fixed) + (this.a39_5 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a40_5(){
                return ((this.a1_5 || 0) * Math.pow(10,this.fixed) + (this.a17_5 || 0) * Math.pow(10,this.fixed) + (this.a26_5 || 0) * Math.pow(10,this.fixed) + (this.a33_5 || 0) * Math.pow(10,this.fixed) + (this.a36_5 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a1_6() {
                return ((this.a2_6 || 0) * Math.pow(10,this.fixed) + (this.a13_6 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a2_6() {
                return ((this.a3_6 || 0) * Math.pow(10,this.fixed) + (this.a4_6 || 0) * Math.pow(10,this.fixed) + (this.a5_6 || 0) * Math.pow(10,this.fixed) + (this.a6_6 || 0) * Math.pow(10,this.fixed) + (this.a7_6 || 0) * Math.pow(10,this.fixed) + (this.a8_6 || 0) * Math.pow(10,this.fixed) + (this.a9_6 || 0) * Math.pow(10,this.fixed) + (this.a11_6 || 0) * Math.pow(10,this.fixed) + (this.a12_6 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a3_6(){
                return ((this.a3_1 || 0) * Math.pow(10,this.fixed) - (this.a3_2 || 0) * Math.pow(10,this.fixed) - (this.a3_3 || 0) * Math.pow(10,this.fixed) - (this.a3_4 || 0) * Math.pow(10,this.fixed) + (this.a3_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a4_6(){
                return ((this.a4_1 || 0) * Math.pow(10,this.fixed) - (this.a4_2 || 0) * Math.pow(10,this.fixed) - (this.a4_3 || 0) * Math.pow(10,this.fixed) - (this.a4_4 || 0) * Math.pow(10,this.fixed) + (this.a4_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a5_6(){
                return ((this.a5_1 || 0) * Math.pow(10,this.fixed) - (this.a5_2 || 0) * Math.pow(10,this.fixed) - (this.a5_3 || 0) * Math.pow(10,this.fixed) - (this.a5_4 || 0) * Math.pow(10,this.fixed) + (this.a5_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a6_6(){
                return ((this.a6_1 || 0) * Math.pow(10,this.fixed) - (this.a6_2 || 0) * Math.pow(10,this.fixed) - (this.a6_3 || 0) * Math.pow(10,this.fixed) - (this.a6_4 || 0) * Math.pow(10,this.fixed) + (this.a6_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a7_6(){
                return ((this.a7_1 || 0) * Math.pow(10,this.fixed) - (this.a7_2 || 0) * Math.pow(10,this.fixed) - (this.a7_3 || 0) * Math.pow(10,this.fixed) - (this.a7_4 || 0) * Math.pow(10,this.fixed) + (this.a7_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a8_6(){
                return ((this.a8_1 || 0) * Math.pow(10,this.fixed) - (this.a8_2 || 0) * Math.pow(10,this.fixed) - (this.a8_3 || 0) * Math.pow(10,this.fixed) - (this.a8_4 || 0) * Math.pow(10,this.fixed) + (this.a8_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a9_6(){
                return ((this.a9_1 || 0) * Math.pow(10,this.fixed) - (this.a9_2 || 0) * Math.pow(10,this.fixed) - (this.a9_3 || 0) * Math.pow(10,this.fixed) - (this.a9_4 || 0) * Math.pow(10,this.fixed) + (this.a9_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a10_6(){
                return ((this.a10_1 || 0) * Math.pow(10,this.fixed) - (this.a10_2 || 0) * Math.pow(10,this.fixed) - (this.a10_3 || 0) * Math.pow(10,this.fixed) - (this.a10_4 || 0) * Math.pow(10,this.fixed) + (this.a10_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a11_6(){
                return ((this.a11_1 || 0) * Math.pow(10,this.fixed) - (this.a11_2 || 0) * Math.pow(10,this.fixed) - (this.a11_3 || 0) * Math.pow(10,this.fixed) - (this.a11_4 || 0) * Math.pow(10,this.fixed) + (this.a11_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a12_6(){
                return ((this.a12_1 || 0) * Math.pow(10,this.fixed) - (this.a12_2 || 0) * Math.pow(10,this.fixed) - (this.a12_3 || 0) * Math.pow(10,this.fixed) - (this.a12_4 || 0) * Math.pow(10,this.fixed) + (this.a12_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a13_6(){
                return ((this.a14_6 || 0) * Math.pow(10,this.fixed) + (this.a15_6 || 0) * Math.pow(10,this.fixed) + (this.a16_6 || 0) * Math.pow(10,this.fixed)) / Math.pow(10,this.fixed);
            },
            a14_6(){
                return ((this.a14_1 || 0) * Math.pow(10,this.fixed) - (this.a14_2 || 0) * Math.pow(10,this.fixed) - (this.a14_3 || 0) * Math.pow(10,this.fixed) - (this.a14_4 || 0) * Math.pow(10,this.fixed) + (this.a14_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a15_6(){
                return ((this.a15_1 || 0) * Math.pow(10,this.fixed) - (this.a15_2 || 0) * Math.pow(10,this.fixed) - (this.a15_3 || 0) * Math.pow(10,this.fixed) - (this.a15_4 || 0) * Math.pow(10,this.fixed) + (this.a15_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a16_6(){
                return ((this.a16_1 || 0) * Math.pow(10,this.fixed) - (this.a16_2 || 0) * Math.pow(10,this.fixed) - (this.a16_3 || 0) * Math.pow(10,this.fixed) - (this.a16_4 || 0) * Math.pow(10,this.fixed) + (this.a16_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a17_6(){
                return ((this.a18_6 || 0) * Math.pow(10,this.fixed) + (this.a19_6 || 0) * Math.pow(10,this.fixed) + (this.a20_6 || 0) * Math.pow(10,this.fixed) + (this.a21_6 || 0) * Math.pow(10,this.fixed) + (this.a22_6 || 0) * Math.pow(10,this.fixed) + (this.a23_6 || 0) * Math.pow(10,this.fixed) + (this.a24_6 || 0) * Math.pow(10,this.fixed) + (this.a25_6 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a18_6(){
                return ((this.a18_1 || 0) * Math.pow(10,this.fixed) - (this.a18_2 || 0) * Math.pow(10,this.fixed) - (this.a18_3 || 0) * Math.pow(10,this.fixed) - (this.a18_4 || 0) * Math.pow(10,this.fixed) + (this.a18_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a19_6(){
                return ((this.a19_1 || 0) * Math.pow(10,this.fixed) - (this.a19_2 || 0) * Math.pow(10,this.fixed) - (this.a19_3 || 0) * Math.pow(10,this.fixed) - (this.a19_4 || 0) * Math.pow(10,this.fixed) + (this.a19_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a20_6(){
                return ((this.a20_1 || 0) * Math.pow(10,this.fixed) - (this.a20_2 || 0) * Math.pow(10,this.fixed) - (this.a20_3 || 0) * Math.pow(10,this.fixed) - (this.a20_4 || 0) * Math.pow(10,this.fixed) + (this.a20_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a21_6(){
                return ((this.a21_1 || 0) * Math.pow(10,this.fixed) - (this.a21_2 || 0) * Math.pow(10,this.fixed) - (this.a21_3 || 0) * Math.pow(10,this.fixed) - (this.a21_4 || 0) * Math.pow(10,this.fixed) + (this.a21_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a22_6(){
                return ((this.a22_1 || 0) * Math.pow(10,this.fixed) - (this.a22_2 || 0) * Math.pow(10,this.fixed) - (this.a22_3 || 0) * Math.pow(10,this.fixed) - (this.a22_4 || 0) * Math.pow(10,this.fixed) + (this.a22_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a23_6(){
                return ((this.a23_1 || 0) * Math.pow(10,this.fixed) - (this.a23_2 || 0) * Math.pow(10,this.fixed) - (this.a23_3 || 0) * Math.pow(10,this.fixed) - (this.a23_4 || 0) * Math.pow(10,this.fixed) + (this.a23_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a24_6(){
                return ((this.a24_1 || 0) * Math.pow(10,this.fixed) - (this.a24_2 || 0) * Math.pow(10,this.fixed) - (this.a24_3 || 0) * Math.pow(10,this.fixed) - (this.a24_4 || 0) * Math.pow(10,this.fixed) + (this.a24_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a25_6(){
                return ((this.a25_1 || 0) * Math.pow(10,this.fixed) - (this.a25_2 || 0) * Math.pow(10,this.fixed) - (this.a25_3 || 0) * Math.pow(10,this.fixed) - (this.a25_4 || 0) * Math.pow(10,this.fixed) + (this.a25_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a26_6(){
                return ((this.a27_6 || 0) * Math.pow(10,this.fixed) + (this.a28_6 || 0) * Math.pow(10,this.fixed) + (this.a29_6 || 0) * Math.pow(10,this.fixed) + (this.a30_6 || 0) * Math.pow(10,this.fixed) + (this.a31_6 || 0) * Math.pow(10,this.fixed) + (this.a32_6 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a27_6(){
                return ((this.a27_1 || 0) * Math.pow(10,this.fixed) - (this.a27_2 || 0) * Math.pow(10,this.fixed) - (this.a27_3 || 0) * Math.pow(10,this.fixed) - (this.a27_4 || 0) * Math.pow(10,this.fixed) + (this.a27_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a28_6(){
                return ((this.a28_1 || 0) * Math.pow(10,this.fixed) - (this.a28_2 || 0) * Math.pow(10,this.fixed) - (this.a28_3 || 0) * Math.pow(10,this.fixed) - (this.a28_4 || 0) * Math.pow(10,this.fixed) + (this.a28_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a29_6(){
                return ((this.a29_1 || 0) * Math.pow(10,this.fixed) - (this.a29_2 || 0) * Math.pow(10,this.fixed) - (this.a29_3 || 0) * Math.pow(10,this.fixed) - (this.a29_4 || 0) * Math.pow(10,this.fixed) + (this.a29_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a30_6(){
                return ((this.a30_1 || 0) * Math.pow(10,this.fixed) - (this.a30_2 || 0) * Math.pow(10,this.fixed) - (this.a30_3 || 0) * Math.pow(10,this.fixed) - (this.a30_4 || 0) * Math.pow(10,this.fixed) + (this.a30_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a31_6(){
                return ((this.a31_1 || 0) * Math.pow(10,this.fixed) - (this.a31_2 || 0) * Math.pow(10,this.fixed) - (this.a31_3 || 0) * Math.pow(10,this.fixed) - (this.a31_4 || 0) * Math.pow(10,this.fixed) + (this.a31_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a32_6(){
                return ((this.a32_1 || 0) * Math.pow(10,this.fixed) - (this.a32_2 || 0) * Math.pow(10,this.fixed) - (this.a32_3 || 0) * Math.pow(10,this.fixed) - (this.a32_4 || 0) * Math.pow(10,this.fixed) + (this.a32_5 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a1_7() {
                return ((this.a2_7 || 0) * Math.pow(10,this.fixed) + (this.a13_7 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a2_7() {
                return ((this.a3_7 || 0) * Math.pow(10,this.fixed) + (this.a4_7 || 0) * Math.pow(10,this.fixed) + (this.a5_7 || 0) * Math.pow(10,this.fixed) + (this.a6_7 || 0) * Math.pow(10,this.fixed) + (this.a7_7 || 0) * Math.pow(10,this.fixed) + (this.a8_7 || 0) * Math.pow(10,this.fixed) + (this.a9_7 || 0) * Math.pow(10,this.fixed) + (this.a11_7 || 0) * Math.pow(10,this.fixed) + (this.a12_7 || 0) * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
            },
            a13_7(){
                return ((this.a14_7 || 0) * Math.pow(10,this.fixed) + (this.a15_7 || 0) * Math.pow(10,this.fixed) + (this.a16_7 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a17_7(){
                return ((this.a18_7 || 0) * Math.pow(10,this.fixed) + (this.a19_7 || 0) * Math.pow(10,this.fixed) + (this.a20_7 || 0) * Math.pow(10,this.fixed) + (this.a21_7 || 0) * Math.pow(10,this.fixed) + (this.a22_7 || 0) * Math.pow(10,this.fixed) + (this.a23_7 || 0) * Math.pow(10,this.fixed) + (this.a24_7 || 0) * Math.pow(10,this.fixed) + (this.a25_7 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a26_7(){
                return ((this.a27_7 || 0) * Math.pow(10,this.fixed) + (this.a28_7 || 0) * Math.pow(10,this.fixed) + (this.a29_7 || 0) * Math.pow(10,this.fixed) + (this.a30_7 || 0) * Math.pow(10,this.fixed) + (this.a31_7 || 0) * Math.pow(10,this.fixed) + (this.a32_7 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a33_7() {
                return ((this.a34_7 || 0) * Math.pow(10,this.fixed) + (this.a35_7 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a36_7(){
                return ((this.a37_7 || 0) * Math.pow(10,this.fixed) + (this.a38_7 || 0) * Math.pow(10,this.fixed) + (this.a39_7 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a40_7(){
                return ((this.a1_7 || 0) * Math.pow(10,this.fixed) + (this.a17_7 || 0) * Math.pow(10,this.fixed) + (this.a26_7 || 0) * Math.pow(10,this.fixed) + (this.a33_7 || 0) * Math.pow(10,this.fixed) + (this.a36_7 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
        },
        watch: {
            getTableA107020(newVal) {
                if(newVal!=null){
                    for(let i in newVal){
                        if(this.hasOwnProperty(i)){
                            this[i]=newVal[i];
                        }
                    }
                }
            },
            a3_6(newVal){
                this.a3_7 = newVal;
            },
            a4_6(newVal){
                this.a4_7 = newVal;
            },
            a5_6(newVal){
                this.a5_7 = newVal;
            },
            a6_6(newVal){
                this.a6_7 = newVal;
            },
            a7_6(newVal){
                this.a7_7 = newVal;
            },
            a8_6(newVal){
                this.a8_7 = newVal;
            },
            a9_6(newVal){
                this.a9_7 = newVal;
            },
            a10_6(newVal){
                this.a10_7 = newVal;
            },
            a11_6(newVal){
                this.a11_7 = newVal;
            },
            a12_6(newVal){
                this.a12_7 = newVal;
            },
            a14_6(newVal){
                this.a14_7 = newVal * 0.5;
            },
            a15_6(newVal){
                this.a15_7 = newVal * 0.5;
            },
            a16_6(newVal){
                this.a16_7 = newVal * 0.5;
            },
        },
        methods:{
            save(){
                let postData = {
                    "cYear": this.year,
                    "uid": this.uid,
                    "userId": this.userId
                };
                for(let i=1;i<=40;i++){
                    for(let j=1;j<=7;j++){
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
                store.dispatch("editA107020", {
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
                this.year = this.$route.query.year;
                this.uid = this.$route.query.uid;
                this.userId = this.$route.query.userId;
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("getTableA107020", {
                    data: {
                        "uid": this.uid,
                        "year": this.year,
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
                    urlParam:"a107020",
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