Vue.component("cartcont",{

    props: ['cartItems', 'amount', 'goodsCount'],
    data(){
        return {
            showCart: false,
        }
    },
    computed:{

        // total(){
        //     let res;
        //     //if(cartItems){
        //         res = cartItems.reduce((total, el) => total + el.quantity * el.price, 0);
        //         this.amount = res;
        //     //}
        //     return res;
        // }
    },
    methods:{

    },
    template: `
    <div >
                <div  class="cart-chb-c-lbl">
                <a href="#" @click.prevent="showCart = !showCart">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         width="32" height="29" viewBox="0 0 32 29">
                        <defs>
                            <path id="cart-chb-svg1" class="cart-chb-svg" d="M1181 41.182c0-.65.533-1.182 1.184-1.182h4.28c.533 0
                                    1.007.354 1.145.867l4.833 17.455h13.178l4.379-10.048H1195.4a1.186 1.186 0
                                    0 1-1.184-1.182c0-.65.533-1.182 1.184-1.182h16.413c.394 0 .77.197.986.532.217.335.257.749.099
                                    1.123l-5.405 12.412c-.198.433-.612.709-1.085.709h-14.855a1.184 1.184 0 0
                                    1-1.144-.867l-4.833-17.455h-3.393a1.186 1.186 0 0 1-1.184-1.182zm6.747 25.138a2.684
                                    2.684 0 0 1 5.365 0 2.684 2.684 0 0 1-5.365 0zm16.788.178c-.1-1.458 1.006-2.758 2.485-2.857
                                    1.48-.098 2.762 1.025 2.86 2.483.04.728-.177 1.418-.65 1.95a2.678 2.678 0 0
                                    1-1.835.926h-.197c-1.401 0-2.565-1.103-2.663-2.502z"/>
                        </defs>
                        <g>
                            <g transform="translate(-1181 -40)">
                                <use fill="#222" xlink:href="#cart-chb-svg1"/>
                            </g>
                        </g>
                    </svg>
                </a>
                <div class="circle-point" v-show="goodsCount>0">
                    {{ goodsCount }}
                </div>
                <div class="drop-box-cart drop-box-account  drop-box-romb-cart"
                        v-show="showCart">
                    <!--<div class="drop-flex-cart" -->
                        <!--v-for="item of cartItems.contents" -->
                        <!--:key="item.id_product"-->
                        <!--:cart_item="item"-->
                       <!--&gt;-->
                        <cart class="drop-flex-cart"
                        v-for="item of cartItems" 
                        :key="item.id_product"
                        :cart_item="item"
                        @remove="$emit('remove', item)"
                        >
                        </cart>
                    <!--</div>-->
                    <div class="cart-price-total-cont">
                        <p class="cart-price-total">
                            TOTAL            <span>\${{ cartItems.reduce((total, el) => total + el.quantity * el.price, 0) }}</span>
                        </p>
                    </div>
                    <a href="../pages/checkout.html" class="cart-checkout pink">
                        Checkout
                    </a>
                    <a href="../pages/cart.html" class="cart-gotocart pink">
                        Go to cart
                    </a>
                </div>
            </div>
    </div>
    `
});