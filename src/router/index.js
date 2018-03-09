import Vue from 'vue';
import Router from 'vue-router';
import ProductCatalogue from '../components/ProductCatalogue';
import ProductDescription from '../components/ProductDescription';
import OrderCheckout from '../components/OrderView/OrderViewCheckout';
import OrderConfirmation from '../components/OrderView/OrderViewConfirmation';
import OrderView from '../components/OrderView';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'catalogue',
      component: ProductCatalogue,
    }, {
      path: '/details/:productId',
      name: 'description',
      component: ProductDescription,
      props: true,
    }, {
      path: '/checkout/:productId',
      component: OrderView,
      props: true,
      children: [
        {
          path: '',
          name: 'checkout',
          component: OrderCheckout,
          props: true,
        }, {
          path: 'confirmed',
          name: 'confirmed',
          component: OrderConfirmation,
          props: true,
        },
      ],
    },
  ],
});
