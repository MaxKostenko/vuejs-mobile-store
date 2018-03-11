import Vue from 'vue';
import Router from 'vue-router';
import CatalogueView from '../views/CatalogueView';
import ProductView from '../views/ProductView';
import OrderCheckout from '../views/OrderView/OrderViewCheckout';
import OrderConfirmation from '../views/OrderView/OrderViewConfirmation';
import OrderView from '../views/OrderView';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'catalogue',
      component: CatalogueView,
    }, {
      path: '/details/:productId',
      name: 'description',
      component: ProductView,
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
