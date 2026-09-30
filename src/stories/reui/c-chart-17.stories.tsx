import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Pattern } from "@/components/examples/c-chart-17"

const meta = {
  title: "ReUI/Chart/17",
  component: Pattern,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Pattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}