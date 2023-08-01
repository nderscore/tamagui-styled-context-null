import React from 'react'
import { createStyledContext, styled, withStaticProperties, Text, YStack } from 'tamagui'

const defaultVariants = { foo: false, bar: false }

const MyStyledContext = createStyledContext(defaultVariants)

const MyStyledComponent = styled(YStack, {
  name: 'MyComponent',
  context: MyStyledContext,

  variants: {
    foo: { true: {}, false: {} },
    bar: { true: {}, false: {} },
  } as const,

  defaultVariants,
})

const MyStyledChild = styled(YStack, {
  name: 'MyChild',
  context: MyStyledContext,

  variants: {
    foo: {
      true: {
        backgroundColor: 'red',
      },
      false: {
        backgroundColor: 'blue',
      },
    },

    bar: {
      true: {
        padding: 8,
      },
      false: {
        padding: 4,
      },
    },
  },
})

const MyChild = MyStyledChild.styleable((props, ref) => {
  const { foo, bar } = React.useContext(MyStyledContext)

  return (
    <MyStyledChild {...props} ref={ref}>
      {foo && <Text>Foo</Text>}
      {bar && <Text>Bar</Text>}
    </MyStyledChild>
  )
})

export const MyComponent = withStaticProperties(MyStyledComponent, {
  Child: MyChild,
})
