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
      compoundVariants: [
        {
          // Darken on hover/press instead of the default 75% tint, which
          // would drop the label below AA contrast.
          color: 'primary',
          variant: 'solid',
          class: 'hover:bg-brand-600 active:bg-brand-700',
        },
      ],
    },
  },
});
