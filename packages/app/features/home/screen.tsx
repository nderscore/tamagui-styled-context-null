import {
  H1,
  MyComponent,
  YStack,
} from '@my/ui'
import React from 'react'

export function HomeScreen() {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Welcome to Tamagui.</H1>
        
        {/* context stays null */}
        {/* <MyComponent>
          <MyComponent.Child />
        </MyComponent> */}
        {/* commented out because it throws an error */}

        {/* context is { foo: true } */}
        <MyComponent foo>
          <MyComponent.Child />
        </MyComponent>

        {/* context is { bar: true } */}
        <MyComponent bar>
          <MyComponent.Child />
        </MyComponent>

        {/* context is { foo: true, bar: true } */}
        <MyComponent foo bar>
          <MyComponent.Child />
        </MyComponent>
      </YStack>
    </YStack>
  )
}
