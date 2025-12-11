export default defineAppConfig({
  ui: {
    colors: {
      primary: "brand",
      neutral: "background",
    },
    button: {
      defaultVariants: {
        size: "xl",
      },
      slots: {
        base: "cursor-pointer",
      },
    },
  },
});
