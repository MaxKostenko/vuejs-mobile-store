<script>
import FormFieldHolder from '@/components/base/FormFieldHolder';
import ErrorMessageBuilder from '@/components/base/ErrorMessageBuilder';

export default {
  functional: true,
  name: 'form-field-holder-vuelidate',
  props: {
    validator: {
      type: Object,
      required: true,
    },
  },

  render(createElement, context) {
    const newContext = {
      ...context,
      props: {
        ...context.props,
        ...context.data.attrs,
        error: ErrorMessageBuilder.getFirstError(context.props.validator),
      },
    };
    return createElement(FormFieldHolder, newContext, context.children);
  },
};
</script>
