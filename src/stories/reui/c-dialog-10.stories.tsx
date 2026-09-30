import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Pattern } from "@/components/examples/c-dialog-10"

const meta = {
  title: "ReUI/Dialog/10",
  component: Pattern,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Pattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}