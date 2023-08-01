## Tamagui createStyledContext null value

Reproduction of a case where the styled context has a null value
(for [tamagui#1501](https://github.com/tamagui/tamagui/pull/1501))

See: 
- [MyComponent](./packages/ui/src/MyComponent.tsx) - a component with a styled context with boolean values
- [Home Screen](./packages/app/features/home/screen.tsx) - usage of MyComponent
