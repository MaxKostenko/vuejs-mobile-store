<script>
import ProductButton from './ProductButton';

export default {
  functional: true,
  render(createElement, context) {
    const newContext = {
      ...context,
      props: {
        ...context.props,
        route: 'checkout',
      },
    };
    return createElement(ProductButton, newContext, context.children);
  },
};
</script>
