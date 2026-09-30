import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { ChartDuotone } from "@/components/examples/c-chart-10"

const meta = {
  title: "ReUI/Chart/10",
  component: ChartDuotone,
  parameters: { layout: "padded" },
} satisfies Meta<typeof ChartDuotone>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}