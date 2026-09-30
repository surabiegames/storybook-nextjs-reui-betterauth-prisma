import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { ChartBar } from "@/components/examples/c-chart-1"

const meta = {
  title: "ReUI/Chart/01",
  component: ChartBar,
  parameters: { layout: "padded" },
} satisfies Meta<typeof ChartBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}