<script>
import ProductButton from './ProductButton';

export default {
  functional: true,
  render(createElement, context) {
    const newContext = {
      ...context,
      props: {
        ...context.props,
        route: 'description',
      },
    };
    return createElement(ProductButton, newContext, context.children);
  },
};
</script>
