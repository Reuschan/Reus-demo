

var vm = new Vue({
	el:".container",
	data:{
		addressList:[
              {
              	name:'王老二',
              	address:'深圳市南山区xx街道',
              	tel:'123456789',
              	checked:true,
              	addressId:01
              },
              {
              	name:'王老二',
              	address:'深圳市南山区xx街道',
              	tel:'123456789',
              	checked:false,
              	addressId:02
              },
              {
              	name:'王老二',
              	address:'深圳市南山区xx街道',
              	tel:'123456789',
              	checked:false,
              	addressId:03
              },
              {
              	name:'王老二',
              	address:'深圳市南山区xx街道',
              	tel:'123456789',
              	checked:false,
              	addressId:04
              },
              {
              	name:'王老二',
              	address:'深圳市南山区xx街道',
              	tel:'123456789',
              	checked:false,
              	addressId:05
              }
		],
		limitNum:3,
		currentIndex:0,
		shippingMethod:1
	},
	mounted:function(){
         
	},
	computed:{
		filterAddres:function(){
           return this.addressList.slice(0,this.limitNum);  //添加一个计算方法，把原来的列表数组分割重新组成一个新的列表数组，不影响原来的列表数组
		}
	},
	methods:{
		setDefault:function(addressId){
			this.addressList.forEach(function(item){
				if(item.addressId == addressId){
					item.checked=true;
				}else{
					item.checked=false;
				}
			})
		},
              clickMore:function(){
                     if(this.limitNum == 3){
                            this.limitNum = this.addressList.length;
                     }else{
                            this.limitNum = 3;
                     }
              }		
	}
})


