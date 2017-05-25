

var vm = new Vue({
	el:".container",
	data:{
		items:[
		    {
		       picture: 'img/goods-1.jpg',
		       productName:'香烟',
               singlePrice:'20',
               totalQuantity:1,
               partsName:'打火机'
		    },
		    {
			   picture: 'img/goods-2.jpg',
			   productName:'加多宝',
			   singlePrice:'5',
			   totalQuantity:6,
			   partsName:'吸管'
		    }            
		],
		choiceFlag:false,
		totalMoney:0,
		delFlag:false,
		currentItem:''
	},
	mounted:function(){
		
	},
	filters:{
        formatMoney:function(value){     //过滤器，在html中只能用在mustache插值中，不能用在指令中（vue2.0以上版本）
			return "¥ "+(value*1).toFixed(2) +"元";  //不乘以1会显示value.toFixed(2)函数未定义
		}	
	},
	methods:{
        changeQuantity:function(obj,way){   //改变商品的数量
        	if(way>0){
        		obj.totalQuantity++;
        	}else{
    		    obj.totalQuantity--;
    		    if(obj.totalQuantity<1){     //当商品数量减到1时，则不能再往下减了
    		    	obj.totalQuantity = 1;
    		    }
        	}
        	this.calcTotalMoney();
        },
        singleChoice:function(product){     //单选
        	if(typeof product.checked == "undefined"){
        		Vue.set(product,"checked",true);     //全局自定义一个属性checked
        	}else{
        		product.checked = !product.checked;
        	}
        	this.calcTotalMoney();
        	this.isChoiceAll();           
        },
        allChoice:function(flag){          //全选
		   this.choiceFlag = flag;
		   this.items.forEach(function (item) {
				if(typeof item.checked == "undefined"){
					Vue.set(item,"checked",flag);
				}else{
					item.checked = flag;
				}
			})
			this.calcTotalMoney();
        },
        isChoiceAll: function () {     //当单选全部被选中时，全选也要选中
			var flags = true;
			this.items.forEach(function (item) {
				if(!item.checked){
					flags = false;
				}
			})
			if(flags){
				this.choiceFlag = true;
			}else{
				this.choiceFlag = false;
			}

		},
        calcTotalMoney:function(){        //计算总金额
        	var _this = this;
        	this.totalMoney = 0;
        	this.items.forEach(function (item) {
				if(item.checked){
			       _this.totalMoney += item.singlePrice * item.totalQuantity;
				}	
            })
        },
        del:function(item){              //删除当前商品
        	this.delFlag = true;
        	this.currentItem = item;     //把要删除的当前商品储存起来
        },
        delConfirm:function(){           //确认要删除当前商品
            this.delFlag = false;
            var index = this.items.indexOf(this.currentItem);
            this.items.splice(index,1);
            this.calcTotalMoney();
        },
        checkOut:function(){
        	if(this.totalMoney == 0){    //根据总金额判断用户是否选择了商品
        		alert("您还没有选择商品哦！")
        	}else{                       //选择了商品并点击结账则跳转到下一个页面
        		var _next = document.getElementById("next");
        		_next.href="address.html";
        	}
        }
  
	}
});