import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Chart3D } from "@/components/examples/c-chart-8"

const meta = {
  title: "ReUI/Chart/08",
  component: Chart3D,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Chart3D>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}