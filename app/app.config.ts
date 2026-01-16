export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
      neutral: 'neutral',
    },
    button: {
      defaultVariants: {
        size: 'xl',
      },
      slots: {
        base: 'cursor-pointer',
      },
    },
  },
});
