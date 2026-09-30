import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Pattern } from "@/components/examples/c-button-group-44"

const meta = {
  title: "ReUI/Button Group/44",
  component: Pattern,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Pattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}