import { pluginSass } from '@rsbuild/plugin-sass'
import { pluginReact } from '@rsbuild/plugin-react'
import { defineConfig } from '@rsbuild/core'

export default defineConfig({
	plugins: [pluginReact(), pluginSass()]
})
