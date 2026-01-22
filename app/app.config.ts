export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
      neutral: 'foreground',
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
