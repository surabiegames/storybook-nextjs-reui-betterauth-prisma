import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { ChartBarPattern } from "@/components/examples/c-chart-3"

const meta = {
  title: "ReUI/Chart/03",
  component: ChartBarPattern,
  parameters: { layout: "padded" },
} satisfies Meta<typeof ChartBarPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}