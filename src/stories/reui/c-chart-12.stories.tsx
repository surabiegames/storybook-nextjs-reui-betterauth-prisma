import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { ChartVerticalBars } from "@/components/examples/c-chart-12"

const meta = {
  title: "ReUI/Chart/12",
  component: ChartVerticalBars,
  parameters: { layout: "padded" },
} satisfies Meta<typeof ChartVerticalBars>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}