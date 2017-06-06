<template>
  <div class="rattings" style="margin-top: 44px;">
    <div class="ratting-wrapper">
      <div class="ratting-header">
        <div class="headder-categ" v-for="item in rattings">
          <p>{{item.comment}}</p>
          <p>{{item.Num}}</p>
        </div>
      </div>
      <div class="ratting-content" v-for="value in rattingInfo">
        <div class="ratting-user">
          <div class="user-infor">
            <img :src=value.avator>
            <span>{{value.name}}</span>
            <p class="ratting-data">{{value.time}}</p>
          </div>
        </div>
        <div class="ratting-des">
          <span class="comment-star">
           <rater v-model=value.star slot="value" active-color="red" :font-size=18 :margin=1 disabled></rater>
          </span>
          <p class="assess-content">{{value.content}}</p>
          <div class="product-img-module">
            <ul>
              <li v-for="src in value.pic"><img :src=src alt=""></li>
            </ul>
          </div>
          <p class="pay-date">{{value.data}}</p>
          <p class="product-type">{{value.type}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Rater} from 'vux'
  export default {
   components:{
     Rater
   },
    data () {
      return {
        rattings: [{comment: "全部", Num: 186576}, {comment: "好评", Num: 182041}, {
          comment: "中评",
          Num: 2675
        }, {comment: "差评", Num: 1860}],
        rattingInfo:[{avator: require('./images/user.jpg'), name: "明***知道",time: "2017-4-20",star:4,content:"真的很惊喜了哈，第一是速度，上午买了下午到，当日达效果不错，" +
        "看来京东的物流确实很强大！照顾到买新机的人很着急！谢谢！速度666 第二，打开很惊艳，手感超级好！试用了一个多小时，" +
        "系统流畅，拍照效果好，666.第三，性价比很高！5.5英寸，4G运行内存，64存储内存，电池容量大！很不错，处理器也还可以哈！" +
        "如果你考虑在1500左右的手机这款就是值得购买的！好吧！上几张图片供大家看吧！",
          pic:[require('./images/rattings1.jpg'),require('./images/rattings2.jpg'),require('./images/rattings3.jpg'),require('./images/rattings4.jpg')],
          data:"购买日期：2016-11-11 00:03:58",type:"颜色：冰河银 型号：全网通（4GB 64GB"},
          {avator: require('./images/user.jpg'), name: "尘***埃",time: "2017-2-28",star:1,content:"手机已经到货，今晚21：00左右快递小哥给送到的，太感谢了，双十一还送货如此之快，赞一下～手机很惊艳，外形时尚美观，金属弧面机身手感特别棒～配置很高，而且还是三卡同槽，" +
          "这个价位能买到这款手机真是超值了！华为手机真是越做越好了，以后会继续支持国货……京东自营产品就是有质量保证！信任京东！！支持京东！！！",
            pic:[require('./images/rattings1.jpg'),require('./images/rattings2.jpg'),require('./images/rattings3.jpg'),require('./images/rattings4.jpg')],
            data:"购买日期：2016-11-11 00:03:58",type:"武大郎专用手机"},
          {avator: require('./images/user.jpg'), name: "天***火",time: "2016-11-13",star:4,content:"上午下单下午就收到了，京东的物流速度是666！！！华为荣耀6X手机也是666！！！后置的双摄像头+800万前置自拍，无论是自拍还是拍女神拍美景拍美食都美美哒；华为自家麒麟655芯片、" +
          "大内存4GB+64GB、3340mAh大电池，无论性能还是续航，都超级棒！2.5D弧面玻璃+背面弧度，既掌握舒适又美观，够6的荣耀6X！",
            pic:[require('./images/rattings1.jpg'),require('./images/rattings2.jpg'),require('./images/rattings3.jpg'),require('./images/rattings4.jpg')],
            data:"购买日期：2016-11-11 00:03:58",type:"颜色：冰河银 型号：全网通（4GB 64GB"},
        ]
        }
      }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  /*.rattings{
    padding-bottom: 48px;
  }*/
  .ratting-wrapper {
    .ratting-header {
      display: flex;
      margin-bottom: 10px;
      background-color: white;
      .headder-categ {
        flex: 1;
        text-align: center;
        p {
          font-size: 12px;
          line-height: 12px;
          padding-top: 10px;
          padding-bottom: 5px;
        }
      }
    }
    .ratting-content {
      background-color: white;
      margin-bottom: 10px;
      .ratting-user {
        line-height: 27px;
        font-size: 13px;
       border-bottom: 1px solid #eee;
        .user-infor {
          position: relative;
          padding: 8px 10px 0 10px;
          margin-bottom: 1px;
          img {
            border-radius: 50%;
            width: 27px;
            height: 27px;
          }
          span {
            position: absolute;

            margin-left: 10px;
          }
          p {
            float: right;
          }
        }
      }
     .ratting-des{
       .comment-star{
         padding-left: 10px;
       }
       .product-img-module ul{
         display: flex;
         position: relative;
         li{
           flex: 1;
           text-align: center;
         }
         img{
           width: 80px;
         }
       }
       .assess-content{
         font-size: 13px;
         line-height: 18px;
         margin-top: 10px;
         margin-right: 10px;
         padding: 0px 12px 5px 12px;
         color: #252525;
         word-wrap: break-word;
         overflow: hidden;
         text-align: justify;
       }
       .pay-date,.product-type{
         font-size: 12px;
         line-height: 12px;
         margin-top: 5px;
         padding-left: 10px;
         color: #bfbfbf;
       }
       .product-type{
         padding-bottom: 10px;
         border-bottom: 1px solid #eee;
       }
     }
    }
  }


</style>
